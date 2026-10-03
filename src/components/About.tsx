const stats = [
  { value: '5', label: 'Group entities' },
  { value: '4', label: 'Countries' },
  { value: '100%', label: 'Direct ownership' },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="eyebrow">About WIN HOLDING</p>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            A focused group with a global outlook.
          </h2>
          <div className="mt-6 h-px w-20 bg-gold" />
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
          <dl className="grid grid-cols-3 gap-6 border-t border-gold/30 pt-10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">{s.label}</dt>
                <dd className="font-serif text-4xl text-gold sm:text-5xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
