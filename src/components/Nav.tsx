import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/content'
import { useTheme } from '../hooks/useTheme'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

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

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-mist/10 text-mist transition-all hover:bg-mist/20 hover:scale-105 active:scale-95"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.svg
                  key="moon"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="sun"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
          
          <a
            href={`mailto:${profile.email}`}
            className="group relative flex h-9 items-center justify-center overflow-hidden rounded-full bg-mist px-5 text-sm font-semibold text-ink transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Say hello</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sage to-sage-deep opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
          </a>
        </div>
      </nav>
    </header>
  )
}
