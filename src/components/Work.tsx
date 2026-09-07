import { motion } from 'framer-motion'
import { earlierWork, projects } from '../data/content'
import { Carousel } from './Carousel'

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

        <ul className="flex flex-col gap-16 md:gap-24 py-10 border-t border-line">
          {projects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group grid gap-8 md:gap-16 items-center ${project.image ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}
            >
              {/* Text Side */}
              <div className={`flex flex-col ${index % 2 === 1 && project.image ? 'md:order-2' : ''}`}>
                <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-mist-faint">
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
                <p className="mt-4 mb-6 text-base leading-relaxed text-mist-dim md:text-lg">
                  {project.summary}
                </p>

                <ul className="space-y-3 mb-6">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-mist-dim md:text-base relative pl-4"
                    >
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-medium text-mist-faint tracking-wide uppercase mb-8">
                  {project.stack.join(' · ')}
                </p>

                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-auto">
                    {project.links.map((link) => (
                      <a
                        key={link.href + link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 items-center justify-center rounded-full bg-mist/5 px-6 text-sm font-medium text-mist transition-colors hover:bg-sage/20 hover:text-sage border border-line"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Image Side - Only render if project.image or project.images exists */}
              {(project.images?.length ?? 0) > 1 ? (
                <div className={`relative w-full ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Carousel images={project.images!} title={project.title} />
                </div>
              ) : project.image ? (
                <div
                  className={`relative w-full aspect-video rounded-2xl overflow-hidden border border-line bg-[#161618] transition-transform duration-500 ease-out group-hover:scale-[1.02] ${index % 2 === 1 ? 'md:order-1' : ''
                    }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-opacity duration-300 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                </div>
              ) : null}
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
