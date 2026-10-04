import logo from '../assets/win-holding-logo.png'
import contraLogo from '../assets/contra-investment.png'

export default function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-ivory text-ink/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">
        <img src={logo} alt="WIN HOLDING — Sky & Beyond" className="h-24 w-auto py-1 sm:h-[115px]" />
        <div className="flex items-center gap-4">
          <span className="text-[11px] uppercase tracking-[0.25em]">Member of</span>
          <img src={contraLogo} alt="Contra Investment" className="h-9 w-auto" />
        </div>
        <p className="text-xs">© {new Date().getFullYear()} WIN HOLDING. All rights reserved.</p>
      </div>
    </footer>
  )
}
