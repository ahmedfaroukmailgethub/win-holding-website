// Generates src/assets/world-map.svg (landmass in the logo gold) and
// src/assets/world-map-pins.json (office pin positions as % of the map).
// Run with: node scripts/build-world-map.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { geoMercator, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import capitals from './capitals.mjs'

const offices = [
  { city: 'London', lat: 51.5074, lng: -0.1278 },
  { city: 'Dubai', lat: 25.2048, lng: 55.2708 },
  { city: 'Belgrade', lat: 44.7866, lng: 20.4489 },
  { city: 'Ljubljana', lat: 46.0569, lng: 14.5058 },
]

const topo = JSON.parse(readFileSync(new URL('../node_modules/world-atlas/land-110m.json', import.meta.url)))
const land = feature(topo, topo.objects.land)

// Drop Antarctica so the map frames the inhabited world.
for (const f of land.features ?? [land]) {
  const g = f.geometry ?? f
  if (g.type === 'MultiPolygon') g.coordinates = g.coordinates.filter((poly) => poly[0].some(([, lat]) => lat > -60))
}

// Mercator, cut at the Bering Strait, cropped to 80°N / 56°S.
const W = 1000
const merc = (deg) => Math.log(Math.tan(Math.PI / 4 + (deg * Math.PI) / 360))
const scale = W / (2 * Math.PI)
const top = merc(80)
const bottom = merc(-56)
const H = Math.round(scale * (top - bottom))
const projection = geoMercator()
  .rotate([-11, 0])
  .scale(scale)
  .translate([W / 2, scale * top])
  .clipExtent([
    [0, 0],
    [W, H],
  ])

const d = geoPath(projection).digits(1)(land)

// Small black dot on every national capital (skipping any outside the cropped frame).
const dots = capitals
  .map(([, lat, lng]) => projection([lng, lat]))
  .filter(([x, y]) => x >= 0 && x <= W && y >= 0 && y <= H)
  .map(([x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.6"/>`)
  .join('')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#c9ab82"/>
      <stop offset="1" stop-color="#ae8c63"/>
    </linearGradient>
  </defs>
  <path fill="url(#g)" d="${d}"/>
  <g fill="#000">${dots}</g>
</svg>
`
writeFileSync(new URL('../src/assets/world-map.svg', import.meta.url), svg)

const pins = offices.map(({ city, lat, lng }) => {
  const [x, y] = projection([lng, lat])
  return { city, x: +((x / W) * 100).toFixed(2), y: +((y / H) * 100).toFixed(2) }
})
writeFileSync(new URL('../src/assets/world-map-pins.json', import.meta.url), JSON.stringify(pins, null, 2) + '\n')

console.log(`world-map.svg ${W}x${H}, ${(svg.length / 1024).toFixed(1)} KB, ${capitals.length} capitals`, pins)
