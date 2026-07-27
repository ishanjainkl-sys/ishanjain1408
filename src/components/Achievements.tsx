import { motion } from 'framer-motion'
import { achievements } from '../data/content'

export function Achievements() {
  return (
    <section id="achievements" className="section-pad relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl md:mb-16"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.18em] text-sage uppercase">
            Recognition
          </p>
          <h2
            className="font-display text-4xl leading-tight font-700 tracking-[-0.02em] text-mist md:text-5xl"
            style={{ fontWeight: 700 }}
          >
            Milestones beyond the day job.
          </h2>
        </motion.div>

        <ul className="divide-y divide-line border-y border-line">
          {achievements.map((item, index) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-2 py-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10 md:py-10"
            >
              <p className="text-sm text-mist-faint">{item.period}</p>
              <div>
                <h3
                  className="font-display text-xl font-600 text-mist md:text-2xl"
                  style={{ fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-mist-dim">{item.detail}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
