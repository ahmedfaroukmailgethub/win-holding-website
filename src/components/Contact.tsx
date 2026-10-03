import { contact, offices } from '../data'

export default function Contact() {
  const [head, regional] = offices

  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 font-serif text-4xl font-medium text-navy sm:text-5xl">Let’s talk.</h2>
          <p className="mt-6 max-w-md font-light leading-relaxed text-ink/70">
            For partnership, investment and business enquiries, please reach out to our head office.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-10 inline-block bg-navy px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-gold"
          >
            Email Us
          </a>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {[head, regional].map((o) => (
            <div key={o.city}>
              <p className="eyebrow !text-[10px]">{o.label}</p>
              <p className="mt-3 leading-relaxed text-ink/80">
                {o.address}
                <br />
                {o.city}, {o.country}
              </p>
            </div>
          ))}
          <div>
            <p className="eyebrow !text-[10px]">Email</p>
            <a href={`mailto:${contact.email}`} className="mt-3 block break-all text-ink/80 hover:text-gold">
              {contact.email}
            </a>
          </div>
          <div>
            <p className="eyebrow !text-[10px]">Web</p>
            <p className="mt-3 text-ink/80">{contact.website}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
