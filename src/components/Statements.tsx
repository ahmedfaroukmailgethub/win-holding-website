import type { ReactNode } from 'react'
import AnimatedLogo from './AnimatedLogo'
import PlaneLane from './PlaneLane'

type StatementProps = {
  id: string
  label: string
  title: string
  className: string
  children: ReactNode
}

// Centred statement over a faint rotating logo watermark, with a plane flying
// right to left through the watermark's W.
function Statement({ id, label, title, className, children }: StatementProps) {
  return (
    <section id={id} className={`relative overflow-hidden py-32 sm:py-44 ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
      >
        <AnimatedLogo className="block aspect-[586/751] h-full" />
      </div>
      {/* The watermark fills the section height, so its W sits at ~42% */}
      <div className="absolute inset-x-0 top-[42%] -translate-y-1/2">
        <PlaneLane direction="rtl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow">{label}</p>
        <h2 className="mt-5 font-serif text-4xl font-medium text-ink sm:text-5xl">{title}</h2>
        <div className="mx-auto mt-6 h-px w-20 bg-gold" />
        <p className="mt-12 font-serif text-2xl leading-relaxed text-ink/85 sm:text-3xl sm:leading-relaxed">{children}</p>
      </div>
    </section>
  )
}

export function Vision() {
  return (
    <Statement id="vision" label="Vision" title="Our Vision" className="bg-sand">
      To shape the future of aviation by building an integrated global ecosystem of exceptional services, innovative
      businesses, and enduring partnerships — connecting people, markets, and opportunities beyond boundaries and{' '}
      <span className="text-gold-dark">Empowering Possibilities Beyond the Sky.</span>
    </Statement>
  )
}

export function Mission() {
  return (
    <Statement id="mission" label="Mission" title="Our Mission" className="bg-white">
      To create and grow world-class aviation businesses through innovation, operational excellence, and long-term
      partnerships — delivering exceptional experiences, connecting markets, and creating sustainable value across the
      global aviation ecosystem.
    </Statement>
  )
}
