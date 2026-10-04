import AnimatedLogo from './AnimatedLogo'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(174,140,99,0.14),transparent_60%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-16 pt-40 lg:grid-cols-[1.15fr_1fr] lg:pt-32">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">London · Dubai · Belgrade · Ljubljana</p>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Building enduring businesses, <span className="italic text-gold-dark">sky &amp; beyond.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-ink/70 sm:text-lg">
            WIN HOLDING is a London-headquartered holding company with wholly owned operations in aviation services,
            airport catering and trusted business services across the Middle East and Europe.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
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

        <div className="order-1 flex justify-center lg:order-2">
          <AnimatedLogo className="aspect-[586/751] w-56 sm:w-72 lg:w-96" />
        </div>
      </div>
    </section>
  )
}
