import { motion } from 'framer-motion'
import { education, profile, volunteering } from '../data/content'

export function About() {
  return (
    <section id="about" className="section-pad relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-20"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.18em] text-sage uppercase">
            About
          </p>
          <h2
            className="font-display text-4xl leading-tight tracking-[-0.02em] text-mist md:text-5xl"
            style={{ fontWeight: 700 }}
          >
            Engineer first. <br className="hidden md:block" /> Product-minded always.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] md:p-10"
          >
            <div className="space-y-6 text-base leading-relaxed text-mist-dim md:text-lg">
              {/* @ts-ignore */}
              {profile.summary.map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 text-sm text-mist-faint">
              Languages: English & Hindi
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] md:p-10"
          >
            <p className="mb-8 text-sm tracking-[0.12em] text-sage uppercase">
              Education
            </p>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-mist-faint group-hover:bg-sage transition-colors"></div>
                  <div className="absolute left-[3px] top-4 -bottom-6 w-px bg-white/5 last:hidden"></div>
                  <p
                    className="font-display text-xl text-mist"
                    style={{ fontWeight: 600 }}
                  >
                    {edu.degree}
                  </p>
                  <p className="mt-2 text-mist-dim text-base">
                    {edu.school}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-mist-faint">
                    <span className="rounded-full bg-white/5 px-3 py-1">{edu.period}</span>
                    <span>{edu.detail}</span>
                  </div>
                  {/* @ts-ignore */}
                  {edu.bullets && edu.bullets.length > 0 && (
                    <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-mist-dim marker:text-mist-faint">
                      {/* @ts-ignore */}
                      {edu.bullets.map((bullet: string, i: number) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <p className="mb-8 mt-12 text-sm tracking-[0.12em] text-sage uppercase">
              Volunteering
            </p>
            <div className="space-y-8">
              {volunteering.map((vol, idx) => (
                <div key={idx} className="relative pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-mist-faint group-hover:bg-sage transition-colors"></div>
                  <div className="absolute left-[3px] top-4 -bottom-6 w-px bg-white/5 last:hidden"></div>
                  <p
                    className="font-display text-xl text-mist"
                    style={{ fontWeight: 600 }}
                  >
                    {vol.role}
                  </p>
                  <p className="mt-2 text-mist-dim text-base">
                    {vol.organization}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-mist-faint">
                    <span className="rounded-full bg-white/5 px-3 py-1">{vol.period}</span>
                    <span>{vol.detail}</span>
                  </div>
                  {/* @ts-ignore */}
                  {vol.bullets && vol.bullets.length > 0 && (
                    <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-mist-dim marker:text-mist-faint">
                      {/* @ts-ignore */}
                      {vol.bullets.map((bullet: string, i: number) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
