import AnimatedLogo from './AnimatedLogo'

export default function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden bg-sand py-32 sm:py-44">
      {/* Faint logo watermark behind the statement */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
      >
        <AnimatedLogo className="block aspect-[586/751] h-full" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow">Vision</p>
        <h2 className="mt-5 font-serif text-4xl font-medium text-ink sm:text-5xl">Our Vision</h2>
        <div className="mx-auto mt-6 h-px w-20 bg-gold" />
        <p className="mt-12 font-serif text-2xl leading-relaxed text-ink/85 sm:text-3xl sm:leading-relaxed">
          To shape the future of aviation by building an integrated global ecosystem of exceptional services, innovative
          businesses, and enduring partnerships — connecting people, markets, and opportunities beyond boundaries and{' '}
          <span className="text-gold-dark">Empowering Possibilities Beyond the Sky.</span>
        </p>
      </div>
    </section>
  )
}
