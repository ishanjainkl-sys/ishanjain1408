import { motion } from 'framer-motion'
import { education, profile } from '../data/content'

export function About() {
  return (
    <section id="about" className="section-pad relative py-24 md:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.18em] text-sage uppercase">
            About
          </p>
          <h2
            className="font-display text-4xl leading-tight tracking-[-0.02em] text-mist md:text-5xl"
            style={{ fontWeight: 700 }}
          >
            Engineer first. Product-minded always.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 text-base leading-relaxed text-mist-dim md:text-lg"
        >
          <p>
            I&apos;m {profile.name}, an Associate Software Engineer based in{' '}
            {profile.location}. I care about shipping features that feel fast,
            stable, and intentional — whether that means Electron desktop
            workflows, React interfaces, or backend services that stay out of
            the way.
          </p>
          <p>
            Day to day at Kadel Labs I work on TimeMachine: recording playback,
            patrol monitoring, camera streaming, and 360° viewing across web and
            desktop. Earlier roles sharpened my full-stack instincts — from
            React Native performance to auth systems and MySQL tuning.
          </p>
          <p>
            Before that, I published early experiments on{' '}
            <a
              href={profile.links.archive}
              target="_blank"
              rel="noreferrer"
              className="text-sage underline-offset-4 hover:underline"
            >
              my Google Sites portfolio
            </a>
            — Angular chat, map locators, and marketing pages — the foundation
            that led into production React, Electron, and AI systems.
          </p>
          <div className="border-t border-line pt-6">
            <p className="text-sm tracking-[0.12em] text-mist-faint uppercase">
              Education
            </p>
            <p
              className="mt-3 font-display text-xl text-mist"
              style={{ fontWeight: 600 }}
            >
              {education.degree}
            </p>
            <p className="mt-1 text-mist-dim">
              {education.school} · {education.period} · {education.detail}
            </p>
            <p className="mt-4 text-sm text-mist-faint">
              Languages: English & Hindi
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
