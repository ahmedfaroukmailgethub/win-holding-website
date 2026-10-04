import logo from '../assets/win-holding-logo.png'
import contraLogo from '../assets/contra-investment.png'

export default function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-ivory text-ink/60">
      {/* Three equal columns so the logo sits at the exact centre of the page */}
      <div className="mx-auto grid max-w-7xl items-center justify-items-center gap-8 px-6 py-12 md:grid-cols-3">
        <div className="flex items-center gap-4 md:justify-self-start">
          <span className="text-[11px] uppercase tracking-[0.25em]">Member of</span>
          <img src={contraLogo} alt="Contra Investment" className="h-9 w-auto" />
        </div>
        {/* Copyright hangs just to the right of the logo on wide screens, below it on phones */}
        <div className="flex flex-col items-center gap-6 md:relative">
          <img src={logo} alt="WIN HOLDING — Sky & Beyond" className="h-28 w-auto py-1 sm:h-36" />
          <p className="text-xs md:absolute md:left-full md:top-1/2 md:ml-10 md:-translate-y-1/2 md:whitespace-nowrap">
            © {new Date().getFullYear()} WIN HOLDING. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
