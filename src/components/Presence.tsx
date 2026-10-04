import type { ReactNode } from 'react'
import AnimatedLogo from './AnimatedLogo'
import ContraGroupMark from './ContraGroupMark'
import FrameLogo from './FrameLogo'
import contraInvestmentLogo from '../assets/contra-investment-logo.png'
import winGroupFrame from '../assets/win-group-logo-frame.png'
import winGroupStill from '../assets/win-group-logo-still.png'
import winEuropeFrame from '../assets/win-europe-logo-frame.png'
import winEuropeStill from '../assets/win-europe-logo-still.png'
import winWingsFrame from '../assets/win-wings-logo-frame.png'
import winWingsStill from '../assets/win-wings-logo-still.png'
import frames from '../assets/frame-logos.json'

const logoClass = 'block h-full'

// Group member logos; the round ones rotate their decorative frame.
const members: { name: string; wide?: boolean; logo: ReactNode }[] = [
  {
    name: 'Contra Investment',
    wide: true,
    logo: <img src={contraInvestmentLogo} alt="Contra Investment" className="w-full object-contain" />,
  },
  { name: 'WIN HOLDING', logo: <AnimatedLogo className={`${logoClass} aspect-[586/751]`} /> },
  {
    name: 'WIN GROUP',
    logo: (
      <FrameLogo
        {...frames['win-group-logo']}
        frame={winGroupFrame}
        still={winGroupStill}
        alt="WIN GROUP — World Innovation Network"
        className={logoClass}
      />
    ),
  },
  {
    name: 'WIN EUROPE',
    logo: (
      <FrameLogo
        {...frames['win-europe-logo']}
        frame={winEuropeFrame}
        still={winEuropeStill}
        alt="WIN EUROPE — Delivering Quality. Trusted Services"
        className={logoClass}
      />
    ),
  },
  {
    name: 'WIN WINGS',
    logo: (
      <FrameLogo
        {...frames['win-wings-logo']}
        frame={winWingsFrame}
        still={winWingsStill}
        alt="WIN WINGS — Serving the World Above the Sky"
        className={logoClass}
      />
    ),
  },
]

export default function Presence() {
  return (
    <section id="group" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-center !text-sm sm:!text-base">Global Group</p>
        <h2 className="mt-5 text-center font-serif text-4xl font-medium text-ink sm:text-5xl">Across Borders, One Vision, One Standard</h2>
        <ContraGroupMark gold blink className="mt-10 block text-center text-3xl sm:text-4xl" />

        <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-10">
          {members.map((m) => (
            <li key={m.name} className={`flex items-center justify-center ${m.wide ? 'h-40 w-52' : 'h-40 w-32 sm:h-44 sm:w-36'}`}>
              {m.logo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
