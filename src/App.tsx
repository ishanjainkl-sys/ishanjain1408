import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Experience } from './components/Experience'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-mist">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 55% at 12% -10%, rgba(126, 184, 168, 0.16), transparent 55%),
            radial-gradient(ellipse 60% 45% at 90% 8%, rgba(79, 143, 127, 0.12), transparent 50%),
            radial-gradient(ellipse 50% 40% at 50% 100%, rgba(22, 28, 25, 0.9), transparent 60%),
            linear-gradient(180deg, #0f1412 0%, #121816 45%, #0f1412 100%)
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
