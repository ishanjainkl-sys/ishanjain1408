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

        <div className="grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-3">
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
            >
              <h3 className="mb-4 text-sm tracking-[0.14em] text-sage uppercase">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="text-base text-mist-dim">
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
