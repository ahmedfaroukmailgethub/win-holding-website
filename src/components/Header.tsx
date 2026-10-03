import { useEffect, useState } from 'react'
import Emblem from './Emblem'

const links = [
  { href: '#about', label: 'About' },
  { href: '#group', label: 'Our Group' },
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-navy-deep/95 shadow-lg backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3 text-gold">
          <Emblem className="h-10 w-10" />
          <span className="leading-tight">
            <span className="block text-sm font-medium tracking-[0.25em] text-white">WIN HOLDING</span>
            <span className="block font-serif text-sm tracking-[0.15em] text-gold-light">Sky &amp; Beyond</span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition hover:text-gold-light"
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
          <span className={`h-px w-6 bg-white transition ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-white transition ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-6 pb-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm uppercase tracking-[0.2em] text-white/80"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
