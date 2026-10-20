import logo from '../assets/win-holding-logo.png'
import ContraGroupMark from './ContraGroupMark'
import ContraInvestmentLogo from './ContraInvestmentLogo'

export default function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-ivory text-ink/60">
      {/* Three equal columns so the WIN HOLDING logo sits at the exact centre of the page */}
      <div className="mx-auto grid max-w-7xl items-center justify-items-center gap-8 px-6 py-12 md:grid-cols-3">
        {/* Same "Member of: THE WIN GROUP" mark as the header, on the left */}
        <div className="flex flex-col items-center gap-1.5 md:justify-self-start">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">Member of:</span>
          <ContraGroupMark className="text-base" />
          {/* Ultimate Group Investment logo at ~50% of its group-section size */}
          <div className="mt-4 w-[104px]">
            <ContraInvestmentLogo />
          </div>
        </div>
        {/* Copyright sits beside the logo, level with its "WIN HOLDING" wordmark (≈82.7% down); below it on phones */}
        <div className="flex flex-col items-center gap-6 md:relative">
          <img src={logo} alt="WIN HOLDING — Sky & Beyond" className="h-28 w-auto py-1 sm:h-36" />
          <p className="text-xs md:absolute md:left-full md:top-[82.7%] md:ml-10 md:-translate-y-1/2 md:whitespace-nowrap">
            © {new Date().getFullYear()} WIN HOLDING. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
