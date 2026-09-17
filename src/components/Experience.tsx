import { motion } from 'framer-motion'
import { experience } from '../data/content'

export function Experience() {
  return (
    <section id="experience" className="section-pad relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl md:mb-20"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.18em] text-sage uppercase">
            Experience
          </p>
          <h2
            className="font-display text-4xl leading-tight font-700 tracking-[-0.02em] text-mist md:text-5xl"
            style={{ fontWeight: 700 }}
          >
            A clear path from trainee to product engineer.
          </h2>
        </motion.div>

        <ol className="relative space-y-8">
          <div
            aria-hidden
            className="absolute top-8 bottom-8 left-[23px] w-px bg-gradient-to-b from-transparent via-sage/30 to-transparent md:left-[39px]"
          />

          {experience.map((job, index) => (
            <motion.li
              key={job.company + job.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-16 md:pl-24"
            >
              <div
                aria-hidden
                className="absolute top-10 left-[16px] h-[15px] w-[15px] rounded-full border-2 border-sage bg-ink shadow-[0_0_15px_rgba(126,184,168,0.5)] md:left-[32px]"
              />

              <div className="group relative rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(126,184,168,0.05)] md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3
                      className="font-display text-2xl tracking-[-0.02em] text-mist md:text-3xl"
                      style={{ fontWeight: 700 }}
                    >
                      {job.role}
                    </h3>
                    <p className="mt-1 flex items-center gap-2 text-lg font-medium text-sage">
                      {job.company}
                      <span className="text-mist-dim text-sm px-2 py-0.5 rounded-full bg-white/5 border border-white/5">{job.location}</span>
                    </p>
                  </div>
                  <div className="text-left text-sm text-mist-dim md:text-right shrink-0">
                    <p className="font-medium text-mist">{job.period}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {job.impact.map((item) => (
                    <li
                      key={item}
                      className="relative pl-6 text-sm leading-relaxed text-mist-dim md:text-base"
                    >
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-mist-faint transition-colors group-hover:bg-sage"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
