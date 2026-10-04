import AnimatedLogo from './AnimatedLogo'

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="eyebrow">About WIN HOLDING</p>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            A Focused Group with a Global Outlook.
          </h2>
          <div className="mt-6 h-px w-20 bg-gold" />
          <AnimatedLogo className="mx-auto mt-12 block aspect-[586/751] h-56 sm:h-64" />
        </div>
        <div className="space-y-6 text-base font-light leading-relaxed text-ink/80">
          <p>
            From our head office in London, WIN HOLDING owns and guides a portfolio of operating companies serving the
            aviation sector and the businesses around it. Through WIN GROUP in Dubai we lead our regional platform, and
            through WIN EUROPE in Ljubljana we serve partners across the European Union.
          </p>
          <p>
            Every company in the group is wholly owned, giving us clear governance, aligned standards and the ability to
            commit long term to our partners, people and markets.
          </p>
        </div>
      </div>
    </section>
  )
}
