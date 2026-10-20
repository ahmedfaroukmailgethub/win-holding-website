import type { CSSProperties } from 'react'
import anniversary from '../assets/anniversary-20.png'

const wave = (i: number) => ({ '--i': i }) as CSSProperties

// Render a line as individual letters, each carrying the growth-wave animation.
function waveLetters(text: string, start: number) {
  let i = start
  const nodes = [...text].map((ch, n) =>
    ch === ' ' ? (
      <span key={n} aria-hidden style={{ display: 'inline-block', width: '0.32em' }} />
    ) : (
      <span key={n} aria-hidden className="letter-wave inline-block" style={wave(i++)}>
        {ch}
      </span>
    ),
  )
  return { nodes, next: i }
}

// "ULTIMATE GROUP" over "INVESTMENT" in the WIN HOLDING wordmark face (Marcellus),
// with a growth wave running letter by letter, then "EST. 2006".
// The two lines are sized so they render at a matching width.
export default function ContraInvestmentLogo() {
  const l1 = waveLetters('ULTIMATE GROUP', 0)
  const l2 = waveLetters('INVESTMENT', l1.next)
  const est = waveLetters('EST. 2006', l2.next)
  return (
    <div
      role="img"
      aria-label="Ultimate Group Investment, established 2006"
      className="w-full"
      style={{ containerType: 'inline-size' }}
    >
      <div
        aria-hidden
        className="whitespace-nowrap text-center font-wordmark uppercase leading-none text-gold"
        style={{ fontSize: '10.6cqw', letterSpacing: '0.04em' }}
      >
        {l1.nodes}
      </div>
      <div
        aria-hidden
        className="mt-[3cqw] whitespace-nowrap text-center font-wordmark uppercase leading-none text-ink"
        style={{ fontSize: '15.8cqw', letterSpacing: '0.005em' }}
      >
        {l2.nodes}
      </div>
      <p aria-hidden className="mt-1 pr-[5%] text-right text-[15px] font-bold tracking-wider text-gold">
        {est.nodes}
      </p>
      <img src={anniversary} alt="20 Year Anniversary" className="mx-auto mt-2 block w-[44%]" />
    </div>
  )
}
