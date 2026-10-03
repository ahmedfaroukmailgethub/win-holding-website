import Emblem from './Emblem'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-navy-deep">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(174,140,99,0.18),transparent_60%)]" />
      <Emblem className="pointer-events-none absolute -right-60 top-1/2 h-[900px] w-[900px] -translate-y-1/2 text-gold opacity-[0.08] md:-right-24" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-20">
        <p className="eyebrow">London · Dubai · Belgrade · Ljubljana</p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          Building enduring businesses, <span className="italic text-gold-light">sky &amp; beyond.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/70 sm:text-lg">
          WIN HOLDING is a London-headquartered holding company with wholly owned operations in aviation services,
          airport catering and trusted business services across the Middle East and Europe.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#group"
            className="bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep transition hover:bg-gold-light"
          >
            Explore Our Group
          </a>
          <a
            href="#contact"
            className="border border-white/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-gold-light hover:text-gold-light"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
