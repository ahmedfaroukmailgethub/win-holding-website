import Emblem from './Emblem'
import contraLogo from '../assets/contra-investment.png'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">
        <div className="flex items-center gap-3 text-gold">
          <Emblem className="h-9 w-9" />
          <span className="text-sm tracking-[0.25em] text-white">WIN HOLDING</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[11px] uppercase tracking-[0.25em]">Member of</span>
          <span className="bg-white px-3 py-1.5">
            <img src={contraLogo} alt="Contra Investment" className="h-8 w-auto" />
          </span>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} WIN HOLDING. All rights reserved.</p>
      </div>
    </footer>
  )
}
