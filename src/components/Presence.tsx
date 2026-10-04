import ContraGroupMark from './ContraGroupMark'
import contraInvestmentLogo from '../assets/contra-investment-logo.png'
import winHoldingLogo from '../assets/win-holding-logo.png'
import winGroupLogo from '../assets/win-group-logo.png'
import winEuropeLogo from '../assets/win-europe-logo.png'
import winWingsLogo from '../assets/win-wings-logo.png'

// Group member logos. `wide` marks a landscape logo that needs a wider, shorter box.
const members = [
  { name: 'Contra Investment', logo: contraInvestmentLogo, wide: true },
  { name: 'WIN HOLDING — Sky & Beyond', logo: winHoldingLogo },
  { name: 'WIN GROUP — World Innovation Network', logo: winGroupLogo },
  { name: 'WIN EUROPE — Delivering Quality. Trusted Services', logo: winEuropeLogo },
  { name: 'WIN WINGS — Serving the World Above the Sky', logo: winWingsLogo },
]

export default function Presence() {
  return (
    <section id="group" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow !text-sm sm:!text-base">Global Group</p>
        <h2 className="mt-5 font-serif text-4xl font-medium text-ink sm:text-5xl">Across Borders, One Vision, One Standard</h2>
        <ContraGroupMark gold blink className="mt-10 block text-center text-3xl sm:text-4xl" />

        <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-10">
          {members.map((m) => (
            <li key={m.name} className={`flex items-center justify-center ${m.wide ? 'h-40 w-52' : 'h-40 w-32 sm:h-44 sm:w-36'}`}>
              <img src={m.logo} alt={m.name} className={`object-contain ${m.wide ? 'w-full' : 'h-full w-auto'}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
