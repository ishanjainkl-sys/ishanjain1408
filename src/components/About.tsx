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
            {profile.summary}
          </p>
          <div className="border-t border-line pt-6">
            <p className="text-sm tracking-[0.12em] text-mist-faint uppercase">
              Education
            </p>
            <div className="mt-4 space-y-5">
              {education.map((edu, idx) => (
                <div key={idx}>
                  <p
                    className="font-display text-xl text-mist"
                    style={{ fontWeight: 600 }}
                  >
                    {edu.degree}
                  </p>
                  <p className="mt-1 text-mist-dim text-sm">
                    {edu.school} · {edu.period} · {edu.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-mist-faint">
              Languages: English & Hindi
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
