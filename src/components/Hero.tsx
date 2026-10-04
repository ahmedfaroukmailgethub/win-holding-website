import AnimatedLogo from './AnimatedLogo'
import { FlagEU, FlagUAE, FlagUK } from './Flags'

const locations = [
  { name: 'London', Flag: FlagUK },
  { name: 'Dubai', Flag: FlagUAE },
  { name: 'European Union', Flag: FlagEU },
]

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(174,140,99,0.14),transparent_60%)]" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-20 pt-36 text-center sm:pt-40">
        <AnimatedLogo className="aspect-[586/751] w-56 sm:w-72 lg:w-80" />

        <p className="eyebrow mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {locations.map(({ name, Flag }, i) => (
            <span key={name} className="inline-flex items-center gap-2">
              {i > 0 && <span aria-hidden>·</span>}
              {name}
              <Flag />
            </span>
          ))}
        </p>
        <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
          Building enduring businesses, <span className="italic text-gold-dark">sky &amp; beyond.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-ink/70 sm:text-lg">
          WIN HOLDING is a London-headquartered holding company with wholly owned operations in aviation services,
          airport catering and trusted business services across the Middle East and Europe.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#group"
            className="bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-gold-dark"
          >
            Explore Our Group
          </a>
          <a
            href="#contact"
            className="border border-ink/25 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-gold hover:text-gold-dark"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
