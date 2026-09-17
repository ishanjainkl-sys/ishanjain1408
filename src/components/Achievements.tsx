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

        <ul className="grid gap-6 md:grid-cols-2">
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
              className="group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-white/[0.01] p-8 transition-all hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(126,184,168,0.05)] md:p-10"
            >
              <div>
                <div className="mb-6 inline-flex items-center rounded-full border border-sage/20 bg-sage/10 px-4 py-1.5 text-sm font-medium text-sage">
                  {item.period}
                </div>
                <h3
                  className="font-display text-xl tracking-[-0.01em] text-mist md:text-2xl"
                  style={{ fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-mist-dim">{item.detail}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
