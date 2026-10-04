import { useEffect, useState } from 'react'
import logo from '../assets/win-holding-logo.png'

const links = [
  { href: '#about', label: 'About' },
  { href: '#vision', label: 'Vision' },
  { href: '#mission', label: 'Mission' },
  { href: '#presence', label: 'Presence' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-gold/20 bg-ivory/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-6 sm:h-32">
        <a href="#top" aria-label="WIN HOLDING — home">
          <img src={logo} alt="WIN HOLDING — Sky & Beyond" className="h-24 w-auto py-1 sm:h-[115px]" />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-ink/75 transition hover:text-gold-dark"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-ink transition ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-ink transition ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/20 px-6 pb-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm uppercase tracking-[0.2em] text-ink/80"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
