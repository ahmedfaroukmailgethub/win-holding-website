import { useEffect, useRef } from 'react'
import map from '../assets/world-map-capitals.json'

// Capital dots plus animated round trips between random major capitals, drawn
// over the world map. Each flight: a dashed arc fades in, a plane flies out and
// back, the arc fades out, and a new random route takes its place. Runs only
// while on screen. Dots, planes and lines keep a constant on-screen size, so
// they stay visible on phones as well as large screens.

const SVG = 'http://www.w3.org/2000/svg'
const FLIGHTS = 14 // planes in the air at once
const SPEED = 55 // map units per second
const PAUSE = 700 // ms on the ground at the far end
const FADE = 600 // ms for the route line to fade in / out
const MIN_DIST = 120
const MAX_DIST = 520
const DOT_PX = 1.6 // capital dot radius on screen
const planePx = (mapPx: number) => (mapPx < 600 ? 10 : 12) // plane length on screen

// Airplane silhouette (nose pointing +x), centred on the origin, ~12 units long.
const PLANE =
  'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'

type Flight = {
  route: SVGPathElement
  plane: SVGGElement
  length: number
  start: number // ms timestamp the flight began
  legMs: number // one-way flight time
}

const { capitals } = map

function randomRoute(): string {
  for (;;) {
    const a = capitals[Math.floor(Math.random() * capitals.length)]
    const b = capitals[Math.floor(Math.random() * capitals.length)]
    const dist = Math.hypot(b.x - a.x, b.y - a.y)
    if (dist < MIN_DIST || dist > MAX_DIST) continue
    // Arc: control point offset perpendicular to the route, bowing northwards.
    const mx = (a.x + b.x) / 2
    const my = (a.y + b.y) / 2
    let nx = -(b.y - a.y) / dist
    let ny = (b.x - a.x) / dist
    if (ny > 0) [nx, ny] = [-nx, -ny]
    const bend = dist * 0.22
    return `M${a.x} ${a.y} Q${mx + nx * bend} ${my + ny * bend} ${b.x} ${b.y}`
  }
}

export default function MapFlights() {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = ref.current
    if (!svg) return

    // Map units per screen pixel, kept current as the map resizes.
    let upp = 1
    let planeScale = 0.5
    const dots = capitals.map(({ x, y }) => {
      const c = document.createElementNS(SVG, 'circle')
      c.setAttribute('cx', String(x))
      c.setAttribute('cy', String(y))
      c.setAttribute('fill', '#000')
      svg.appendChild(c)
      return c
    })
    const resize = () => {
      const px = svg.clientWidth || map.width
      upp = map.width / px
      planeScale = (planePx(px) * upp) / 24
      dots.forEach((c) => c.setAttribute('r', String(DOT_PX * upp)))
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(svg)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => {
        ro.disconnect()
        dots.forEach((c) => c.remove())
      }
    }

    const flights: Flight[] = []
    let raf = 0
    let running = false

    const launch = (now: number, delay = 0): Flight => {
      const route = document.createElementNS(SVG, 'path')
      route.setAttribute('d', randomRoute())
      route.setAttribute('fill', 'none')
      route.setAttribute('stroke', '#2d2d2d')
      // Line width and dashes in screen pixels, whatever the map's size.
      route.setAttribute('vector-effect', 'non-scaling-stroke')
      route.setAttribute('stroke-width', '0.8')
      route.setAttribute('stroke-dasharray', '3 3')
      route.setAttribute('opacity', '0')
      const plane = document.createElementNS(SVG, 'g')
      const shape = document.createElementNS(SVG, 'path')
      shape.setAttribute('d', PLANE)
      shape.setAttribute('transform', 'translate(-12 -12) rotate(90 12 12)')
      shape.setAttribute('fill', '#1a1a1a')
      plane.appendChild(shape)
      plane.setAttribute('opacity', '0')
      svg.append(route, plane)
      const length = route.getTotalLength()
      return { route, plane, length, start: now + delay, legMs: (length / SPEED) * 1000 }
    }

    const step = (now: number) => {
      flights.forEach((f, i) => {
        const t = now - f.start
        const total = FADE + f.legMs * 2 + PAUSE + FADE
        if (t < 0) return
        if (t > total) {
          f.route.remove()
          f.plane.remove()
          flights[i] = launch(now)
          return
        }
        // Route fade in / out
        const lineOpacity = Math.min(1, t / FADE, (total - t) / FADE)
        f.route.setAttribute('opacity', String(0.45 * Math.max(0, lineOpacity)))

        // Plane position: out, pause, back
        const fly = t - FADE
        let progress: number
        let outbound = true
        if (fly < 0) progress = 0
        else if (fly < f.legMs) progress = fly / f.legMs
        else if (fly < f.legMs + PAUSE) progress = 1
        else {
          outbound = false
          progress = 1 - Math.min(1, (fly - f.legMs - PAUSE) / f.legMs)
        }
        const eased = progress * progress * (3 - 2 * progress) // smoothstep take-off / landing
        const at = eased * f.length
        const p = f.route.getPointAtLength(at)
        const q = f.route.getPointAtLength(Math.min(f.length, at + 1))
        const r = f.route.getPointAtLength(Math.max(0, at - 1))
        let angle = (Math.atan2(q.y - r.y, q.x - r.x) * 180) / Math.PI
        if (!outbound) angle += 180
        f.plane.setAttribute('transform', `translate(${p.x} ${p.y}) rotate(${angle}) scale(${planeScale})`)
        f.plane.setAttribute('opacity', fly >= 0 && fly <= f.legMs * 2 + PAUSE ? '1' : '0')
      })
      raf = requestAnimationFrame(step)
    }

    const start = () => {
      if (running) return
      running = true
      const now = performance.now()
      if (!flights.length) for (let i = 0; i < FLIGHTS; i++) flights.push(launch(now, i * 600))
      raf = requestAnimationFrame(step)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
    io.observe(svg)
    return () => {
      io.disconnect()
      ro.disconnect()
      stop()
      flights.forEach((f) => (f.route.remove(), f.plane.remove()))
      dots.forEach((c) => c.remove())
    }
  }, [])

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox={`0 0 ${map.width} ${map.height}`}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
