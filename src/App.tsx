import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Experience } from './components/Experience'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useTheme } from './hooks/useTheme'

export default function App() {
  useTheme();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-mist transition-colors duration-500">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 transition-colors duration-500"
        style={{
          background: `
            radial-gradient(ellipse 80% 55% at 12% -10%, color-mix(in srgb, var(--color-sage-val) 16%, transparent), transparent 55%),
            radial-gradient(ellipse 60% 45% at 90% 8%, color-mix(in srgb, var(--color-sage-deep-val) 12%, transparent), transparent 50%),
            radial-gradient(ellipse 50% 40% at 50% 100%, color-mix(in srgb, var(--color-ink-soft-val) 90%, transparent), transparent 60%),
            linear-gradient(180deg, var(--color-ink-val) 0%, var(--color-ink-soft-val) 45%, var(--color-ink-val) 100%)
          `,
        }}
      />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <About />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
