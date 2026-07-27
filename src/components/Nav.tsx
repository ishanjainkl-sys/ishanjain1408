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
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? 'border-b border-line bg-ink/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="section-pad mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6">
        <a
          href="#top"
          className="font-display text-sm font-700 tracking-wide text-mist transition-colors hover:text-sage"
          style={{ fontWeight: 700 }}
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-mist-dim transition-colors hover:text-mist"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="text-sm font-medium text-sage transition-colors hover:text-mist"
        >
          Say hello
        </a>
      </nav>
    </header>
  )
}
