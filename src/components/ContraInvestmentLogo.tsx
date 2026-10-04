import type { CSSProperties } from 'react'
import wordmark from '../assets/contra-investment-wordmark.png'

// Source image is 229×66. Each letter is a tile [x0, x1) × [y0, y1) cut at the
// gaps between letters, so the tiles fit back together into the full wordmark.
const W = 229
const H = 66
const CONTRA = [36, 61, 90, 119, 143, 167, 191]
const INVESTMENT = [0, 12, 39, 66, 84, 101, 124, 158, 177, 206, 229]
const lineTiles = (cuts: number[], y0: number, y1: number) =>
  cuts.slice(0, -1).map((x0, i) => ({ x0, x1: cuts[i + 1], y0, y1 }))
const tiles = [...lineTiles(CONTRA, 0, 28), ...lineTiles(INVESTMENT, 38, H)]

const pct = (n: number, of: number) => `${(n / of) * 100}%`
const wave = (i: number) => ({ '--i': i }) as CSSProperties

// Contra Investment wordmark with a growth wave running letter by letter:
// C-O-N-T-R-A, then I-N-V-E-S-T-M-E-N-T, then "EST. 2006".
export default function ContraInvestmentLogo() {
  let i = tiles.length
  return (
    <div role="img" aria-label="Contra Investment, established 2006" className="w-full">
      <div aria-hidden className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
        {tiles.map((t, n) => {
          const w = t.x1 - t.x0
          const h = t.y1 - t.y0
          return (
            <div
              key={n}
              className="letter-wave absolute overflow-hidden"
              style={{ left: pct(t.x0, W), top: pct(t.y0, H), width: pct(w, W), height: pct(h, H), ...wave(n) }}
            >
              <img
                src={wordmark}
                alt=""
                className="absolute max-w-none"
                style={{ width: pct(W, w), left: pct(-t.x0, w), top: pct(-t.y0, h) }}
              />
            </div>
          )
        })}
      </div>
      <p aria-hidden className="mt-1 pr-[5%] text-right text-[15px] font-bold tracking-wider text-gold">
        {[...'EST. 2006'].map((ch, n) =>
          ch === ' ' ? (
            ' '
          ) : (
            <span key={n} className="letter-wave inline-block" style={wave(i++)}>
              {ch}
            </span>
          ),
        )}
      </p>
    </div>
  )
}
