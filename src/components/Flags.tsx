// Small inline SVG flags (emoji flags don't render on Windows).
type Props = { className?: string }

const base = 'inline-block h-3.5 w-auto rounded-[2px] shadow-sm ring-1 ring-black/10'

export function FlagUK({ className = '' }: Props) {
  return (
    <svg viewBox="0 0 60 30" className={`${base} ${className}`} aria-label="United Kingdom flag" role="img">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  )
}

export function FlagUAE({ className = '' }: Props) {
  return (
    <svg viewBox="0 0 12 6" className={`${base} ${className}`} aria-label="United Arab Emirates flag" role="img">
      <rect width="12" height="2" fill="#00732F" />
      <rect y="2" width="12" height="2" fill="#fff" />
      <rect y="4" width="12" height="2" fill="#000" />
      <rect width="3" height="6" fill="#FF0000" />
    </svg>
  )
}

// Five-pointed star centred on (cx, cy) with outer radius r.
const star = (cx: number, cy: number, r: number) =>
  Array.from({ length: 10 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 5
    const rad = i % 2 === 0 ? r : r * 0.382
    return `${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`
  }).join(' ')

const euStars = Array.from({ length: 12 }, (_, i) => {
  const a = (i * Math.PI) / 6
  return star(405 + 180 * Math.sin(a), 270 - 180 * Math.cos(a), 30)
})

export function FlagEU({ className = '' }: Props) {
  return (
    <svg viewBox="0 0 810 540" className={`${base} ${className}`} aria-label="European Union flag" role="img">
      <rect width="810" height="540" fill="#003399" />
      {euStars.map((points) => (
        <polygon key={points} points={points} fill="#FFCC00" />
      ))}
    </svg>
  )
}
