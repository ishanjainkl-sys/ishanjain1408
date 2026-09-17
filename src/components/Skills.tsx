import { motion } from 'framer-motion'
import { skills } from '../data/content'

export function Skills() {
  const entries = Object.entries(skills)

  return (
    <section id="skills" className="section-pad relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl md:mb-16"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.18em] text-sage uppercase">
            Skills
          </p>
          <h2
            className="font-display text-4xl leading-tight font-700 tracking-[-0.02em] text-mist md:text-5xl"
            style={{ fontWeight: 700 }}
          >
            Tools I use to ship reliable software.
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {entries.map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(126,184,168,0.05)]"
            >
              <h3 className="mb-6 flex items-center gap-3 text-sm font-semibold tracking-[0.14em] text-sage uppercase">
                <div className="h-px flex-1 bg-gradient-to-r from-sage/30 to-transparent"></div>
                {category}
                <div className="h-px flex-1 bg-gradient-to-l from-sage/30 to-transparent"></div>
              </h3>
              <ul className="flex flex-wrap justify-center gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="cursor-default rounded-full border border-white/5 bg-white/5 px-4 py-2 text-sm font-medium text-mist-dim transition-all hover:-translate-y-0.5 hover:border-sage/30 hover:bg-sage/10 hover:text-mist hover:shadow-[0_0_15px_rgba(126,184,168,0.2)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
