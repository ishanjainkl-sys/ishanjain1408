import { motion } from 'framer-motion'
import { profile } from '../data/content'

const socials = [
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'GitHub', href: profile.links.github },
  { label: 'Archive site', href: profile.links.archive },
]

export function Contact() {
  return (
    <section id="contact" className="section-pad relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden border border-line bg-ink-soft px-6 py-16 md:px-14 md:py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 80% at 100% 0%, rgba(126, 184, 168, 0.18), transparent 55%)',
            }}
          />

          <div className="relative z-10 max-w-2xl">
            <p className="mb-3 text-sm font-medium tracking-[0.18em] text-sage uppercase">
              Contact
            </p>
            <h2
              className="font-display text-4xl leading-tight tracking-[-0.02em] text-mist md:text-5xl"
              style={{ fontWeight: 700 }}
            >
              Let&apos;s build something reliable together.
            </h2>
            <p className="mt-5 text-lg text-mist-dim">
              Open to roles, collaborations, and interesting product problems.
              Reach out anytime.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center bg-sage px-6 py-3 text-sm font-semibold text-ink transition-[transform,background] duration-300 hover:-translate-y-0.5 hover:bg-mist"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center border border-line px-6 py-3 text-sm font-medium text-mist transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-sage/50 hover:text-sage"
              >
                {profile.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-mist-dim transition-colors hover:text-sage"
                >
                  {item.label} ↗
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
