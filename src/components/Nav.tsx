import { useEffect, useState } from 'react'
import { profile } from '../data/content'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6"
    >
      <nav
        className={`flex h-14 w-full max-w-[1200px] items-center justify-between gap-6 px-6 transition-all duration-300 md:w-auto md:min-w-[500px] md:rounded-full ${
          scrolled
            ? 'rounded-2xl border border-white/10 bg-ink/70 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl'
            : 'rounded-2xl border border-transparent bg-transparent'
        }`}
      >
        <a
          href="#top"
          className="font-display text-sm tracking-wide text-mist transition-colors hover:text-sage"
          style={{ fontWeight: 700 }}
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-mist-dim transition-colors hover:text-mist hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="group relative flex h-9 items-center justify-center overflow-hidden rounded-full bg-mist px-5 text-sm font-semibold text-ink transition-all hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">Say hello</span>
          <div className="absolute inset-0 bg-gradient-to-r from-sage to-sage-deep opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
        </a>
      </nav>
    </header>
  )
}
