// Generates src/assets/world-map.svg (landmass in the logo gold with a dot on
// each major capital) and src/assets/world-map-capitals.json (those capitals in
// map units, used for the animated flight routes).
// Run with: node scripts/build-world-map.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { geoMercator, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import capitals from './capitals.mjs'

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

// Major capitals only: G20 members plus key regional hubs, spread across regions.
const MAJOR = new Set([
  // G20
  'Washington, D.C.', 'Ottawa', 'Mexico City', 'Brasília', 'Buenos Aires', 'London', 'Paris', 'Berlin', 'Rome',
  'Moscow', 'Ankara', 'Riyadh', 'New Delhi', 'Beijing', 'Tokyo', 'Seoul', 'Jakarta', 'Canberra', 'Pretoria',
  // Europe
  'Madrid', 'Lisbon', 'Brussels', 'Amsterdam', 'Vienna', 'Warsaw', 'Stockholm', 'Athens', 'Belgrade', 'Ljubljana',
  // Middle East & North Africa
  'Abu Dhabi', 'Doha', 'Kuwait City', 'Muscat', 'Manama', 'Amman', 'Baghdad', 'Tehran', 'Cairo', 'Rabat', 'Algiers',
  // Sub-Saharan Africa
  'Abuja', 'Nairobi', 'Addis Ababa', 'Accra', 'Dakar', 'Kinshasa', 'Luanda',
  // Asia
  'Islamabad', 'Dhaka', 'Bangkok', 'Hanoi', 'Kuala Lumpur', 'Singapore', 'Manila', 'Astana', 'Tashkent',
  // Americas & Oceania
  'Havana', 'Bogotá', 'Caracas', 'Lima', 'Santiago', 'Wellington',
])

// Small black dot on each major capital (skipping any outside the cropped frame).
const major = capitals
  .filter(([city]) => MAJOR.has(city))
  .map(([city, lat, lng]) => [city, ...projection([lng, lat])])
  .filter(([, x, y]) => x >= 0 && x <= W && y >= 0 && y <= H)
const dots = major
  .map(([, x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.6"/>`)
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
writeFileSync(
  new URL('../src/assets/world-map-capitals.json', import.meta.url),
  JSON.stringify({
    width: W,
    height: H,
    capitals: major.map(([city, x, y]) => ({ city, x: +x.toFixed(1), y: +y.toFixed(1) })),
  }) + '\n',
)

console.log(`world-map.svg ${W}x${H}, ${(svg.length / 1024).toFixed(1)} KB, ${MAJOR.size} major capitals`)
