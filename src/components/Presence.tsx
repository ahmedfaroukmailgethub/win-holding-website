import { offices } from '../data'

export default function Presence() {
  return (
    <section id="group" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div>
          <p className="eyebrow !text-sm sm:!text-base">Global Group</p>
          <h2 className="mt-5 font-serif text-4xl font-medium text-ink sm:text-5xl">Across Borders, One Vision, One Standard</h2>
        </div>
        <div className="mt-16 grid gap-px bg-gold/25 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
            <div key={o.city} className="bg-ivory p-8 transition hover:bg-white">
              <span className="font-serif text-5xl text-gold/60">{o.code}</span>
              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.25em] text-gold-dark">{o.label}</p>
              <h3 className="mt-2 font-serif text-3xl text-ink">{o.city}</h3>
              <p className="text-sm text-ink/60">{o.country}</p>
              <p className="mt-6 text-sm font-light leading-relaxed text-ink/70">{o.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
