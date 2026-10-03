import AnimatedLogo from './AnimatedLogo'
import { companies, type Company } from '../data'

const Stem = () => <div className="mx-auto hidden h-10 w-px bg-gold md:block" />
const Branch = () => <div className="mx-auto hidden h-px w-1/2 bg-gold md:block" />

function CompanyCard({ c }: { c: Company }) {
  return (
    <article className="flex flex-col border border-gold/20 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <div className="h-1 bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark" />
      <div className="flex flex-1 flex-col p-8">
        <p className="eyebrow !text-[10px]">{c.role}</p>
        <div className="mt-6 flex h-36 items-center justify-center">
          <img src={c.logo} alt={`${c.name} logo`} className="h-full w-auto object-contain" />
        </div>
        <p className="mt-6 flex-1 text-sm font-light leading-relaxed text-ink/75">{c.description}</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-gold/20 pt-4 text-xs">
          <span className="text-ink/70">{c.location}</span>
          <span className="font-medium uppercase tracking-wider text-gold-dark">{c.owner}</span>
        </div>
      </div>
    </article>
  )
}

export default function Group() {
  const { winGroup, winEurope, winWings, airportsCatering } = companies

  return (
    <section id="group" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Group</p>
          <h2 className="mt-5 font-serif text-4xl font-medium text-ink sm:text-5xl">Corporate structure</h2>
          <p className="mt-6 font-light leading-relaxed text-ink/70">
            A clear, wholly owned structure — from the ultimate holding company in London to our operating companies on
            the ground.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-md border border-gold/40 bg-white text-center shadow-xl">
          <div className="h-1 bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark" />
          <div className="p-10">
            <p className="eyebrow !text-[10px]">Ultimate Holding Company</p>
            <AnimatedLogo className="mx-auto mt-6 aspect-[586/751] h-48" />
            <p className="mt-6 border-t border-gold/20 pt-4 text-xs text-ink/70">London, United Kingdom · Parent entity</p>
          </div>
        </div>

        <Stem />
        <Branch />

        <div className="mt-8 grid gap-8 md:mt-0 md:grid-cols-2">
          <div>
            <Stem />
            <CompanyCard c={winGroup} />
            <Stem />
            <Branch />
            <div className="mt-8 grid gap-8 sm:grid-cols-2 md:mt-0">
              {[winWings, airportsCatering].map((c) => (
                <div key={c.id}>
                  <Stem />
                  <CompanyCard c={c} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Stem />
            <CompanyCard c={winEurope} />
          </div>
        </div>
      </div>
    </section>
  )
}
