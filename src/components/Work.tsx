import { motion } from 'framer-motion'
import { earlierWork, projects } from '../data/content'

export function Work() {
  return (
    <section id="work" className="section-pad relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl md:mb-20"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.18em] text-sage uppercase">
            Selected work
          </p>
          <h2
            className="font-display text-4xl leading-tight tracking-[-0.02em] text-mist md:text-5xl"
            style={{ fontWeight: 700 }}
          >
            Projects that show how I think and ship.
          </h2>
        </motion.div>

        <ul className="divide-y divide-line border-y border-line">
          {projects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-6 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-12 md:py-14"
            >
              <div>
                <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-mist-faint">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span aria-hidden>·</span>
                  <span>{project.year}</span>
                  <span aria-hidden>·</span>
                  <span>{project.role}</span>
                </div>
                <h3
                  className="font-display text-3xl tracking-[-0.02em] text-mist transition-colors duration-300 group-hover:text-sage md:text-4xl"
                  style={{ fontWeight: 700 }}
                >
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-mist-dim md:text-lg">
                  {project.summary}
                </p>
                {project.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.href + link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-sage underline-offset-4 transition-colors hover:text-mist hover:underline"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between gap-8">
                <ul className="space-y-3">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-mist-dim md:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-sage" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-mist-faint">
                  {project.stack.join(' · ')}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-24"
        >
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-sm font-medium tracking-[0.18em] text-sage uppercase">
              Earlier work
            </p>
            <h3
              className="font-display text-2xl tracking-[-0.02em] text-mist md:text-3xl"
              style={{ fontWeight: 700 }}
            >
              Foundations from my first public portfolio.
            </h3>
            <p className="mt-3 text-base text-mist-dim">
              Projects originally listed on{' '}
              <a
                href="https://sites.google.com/view/ishanjain1408"
                target="_blank"
                rel="noreferrer"
                className="text-sage underline-offset-4 hover:underline"
              >
                sites.google.com/view/ishanjain1408
              </a>
              — kept here to show the full trajectory.
            </p>
          </div>

          <ul className="grid gap-0 border-t border-line sm:grid-cols-2">
            {earlierWork.map((project, index) => (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-line py-7 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"
              >
                <div className="mb-2 flex flex-wrap items-baseline gap-x-2 text-sm text-mist-faint">
                  <span>{project.year}</span>
                  <span aria-hidden>·</span>
                  <span>{project.role}</span>
                </div>
                <h4
                  className="font-display text-xl text-mist"
                  style={{ fontWeight: 600 }}
                >
                  {project.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-mist-dim">
                  {project.summary}
                </p>
                <p className="mt-3 text-xs text-mist-faint">
                  {project.stack.join(' · ')}
                </p>
                {project.links.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href + link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-sage underline-offset-4 hover:underline"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
