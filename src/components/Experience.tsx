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

        <ol className="relative space-y-0">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[7px] w-px bg-line md:left-[11px]"
          />

          {experience.map((job, index) => (
            <motion.li
              key={job.company + job.period}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative grid gap-4 py-10 pl-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:py-12 md:pl-14"
            >
              <span
                aria-hidden
                className="absolute top-12 left-0 h-3.5 w-3.5 rounded-full border-2 border-sage bg-ink md:top-14 md:h-4 md:w-4"
              />

              <div>
                <p className="text-sm text-mist-faint">{job.period}</p>
                <p className="mt-1 text-sm text-mist-dim">
                  {job.location}
                </p>
              </div>

              <div>
                <h3
                  className="font-display text-2xl font-700 tracking-[-0.02em] text-mist md:text-3xl"
                  style={{ fontWeight: 700 }}
                >
                  {job.role}
                </h3>
                <p className="mt-1 text-base text-sage">{job.company}</p>
                <ul className="mt-5 space-y-3">
                  {job.impact.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-mist-dim md:text-base"
                    >
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
