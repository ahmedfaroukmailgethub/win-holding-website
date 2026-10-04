import { useState, type FormEvent } from 'react'
import { contact, offices } from '../data'
import worldMap from '../assets/world-map.svg'
import pins from '../assets/world-map-pins.json'

const heading = 'text-sm font-semibold uppercase tracking-[0.2em] text-ink'
const field =
  'w-full border border-gold/30 bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none transition focus:border-gold'

function MapPin({ city, x, y }: { city: string; x: number; y: number }) {
  return (
    // Anchored by the pin's tip (bottom centre) on the city.
    <div className="group absolute -translate-x-1/2 -translate-y-full hover:z-10" style={{ left: `${x}%`, top: `${y}%` }}>
      <svg viewBox="0 0 12 22" className="block h-6 w-auto text-black drop-shadow-sm" role="img" aria-label={city}>
        <title>{city}</title>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6 0C2.7 0 0 2.6 0 5.8 0 10.2 6 22 6 22s6-11.8 6-16.2C12 2.6 9.3 0 6 0zm0 8.1A2.2 2.2 0 1 1 6 3.7a2.2 2.2 0 0 1 0 4.4z"
        />
      </svg>
      <span className="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded bg-ink px-2 py-0.5 text-[10px] uppercase tracking-wider text-ivory opacity-0 transition group-hover:opacity-100">
        {city}
      </span>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  // No backend: open the visitor's email app with the enquiry pre-filled.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = `Website enquiry from ${form.name}`
    const body = `${form.message}\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="eyebrow !text-sm sm:!text-base">Contact</p>
          <h2 className="mt-5 font-serif text-4xl font-medium text-ink sm:text-5xl">Let’s Talk</h2>
          <div className="mx-auto mt-6 h-px w-20 bg-gold" />
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <img src={worldMap} alt="World map showing WIN HOLDING offices" className="block w-full" />
          {pins.map((p) => (
            <MapPin key={p.city} {...p} />
          ))}
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-10">
            <div>
              <h3 className={heading}>Address</h3>
              <ul className="mt-4 space-y-4 text-sm font-light leading-relaxed text-ink/75">
                {offices.map((o) => (
                  <li key={o.city}>
                    <span className="font-medium text-gold-dark">{o.label}</span> — {o.city}, {o.country}
                    <br />
                    {o.address}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={heading}>Phone</h3>
              <ul className="mt-4 space-y-1 text-sm font-light text-ink/75">
                {contact.phones.map((p) => (
                  <li key={p.number}>
                    <span className="font-medium text-gold-dark">{p.label}</span>{' '}
                    <a href={`tel:${p.number.replace(/\s/g, '')}`} className="hover:text-gold">
                      {p.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={heading}>E-mail</h3>
              <a href={`mailto:${contact.email}`} className="mt-4 block break-all text-sm font-light text-ink/75 hover:text-gold">
                {contact.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className={heading}>Send Us a Message</h3>
            <p className="mt-4 text-sm font-light text-ink/70">
              Email us with any questions or enquiries, or use our contact details.
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                <label className="block">
                  <span className="sr-only">Name</span>
                  <input required value={form.name} onChange={update('name')} placeholder="Name" className={field} />
                </label>
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="Email"
                    className={field}
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Phone</span>
                  <input type="tel" value={form.phone} onChange={update('phone')} placeholder="Phone" className={field} />
                </label>
              </div>
              <label className="block">
                <span className="sr-only">Message</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Message"
                  className={`${field} resize-y`}
                />
              </label>
              <button
                type="submit"
                className="bg-gold px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-gold-dark"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
