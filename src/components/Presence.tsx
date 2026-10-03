import { offices } from '../data'

export default function Presence() {
  return (
    <section id="presence" className="bg-navy py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="eyebrow !text-gold-light">Global Presence</p>
          <h2 className="mt-5 font-serif text-4xl font-medium sm:text-5xl">Four countries, one standard.</h2>
        </div>
        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
            <div key={o.city} className="bg-navy p-8 transition hover:bg-navy-deep">
              <span className="font-serif text-5xl text-gold/50">{o.code}</span>
              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.25em] text-gold-light">{o.label}</p>
              <h3 className="mt-2 font-serif text-3xl">{o.city}</h3>
              <p className="text-sm text-white/60">{o.country}</p>
              <p className="mt-6 text-sm font-light leading-relaxed text-white/70">{o.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
