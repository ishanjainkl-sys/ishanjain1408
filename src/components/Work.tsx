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

        <ul className="flex flex-col gap-16 py-12 md:gap-24 md:py-20">
          {projects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative grid items-center gap-8 rounded-3xl border border-white/5 bg-white/[0.01] p-6 transition-all hover:bg-white/[0.02] md:gap-16 md:p-10 ${project.image || project.images ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-sage/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              
              {/* Text Side */}
              <div className={`flex h-full flex-col ${index % 2 === 1 && (project.image || project.images) ? 'md:order-2' : ''}`}>
                <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                  <span className="flex h-7 items-center rounded-full border border-sage/20 bg-sage/10 px-3 font-medium text-sage">
                    {project.year}
                  </span>
                  <span className="text-mist-dim">{project.role}</span>
                </div>
                
                <h3
                  className="font-display text-3xl tracking-[-0.02em] text-mist transition-colors duration-300 group-hover:text-sage md:text-4xl"
                  style={{ fontWeight: 700 }}
                >
                  {project.title}
                </h3>
                
                <p className="mt-5 mb-8 text-base leading-relaxed text-mist-dim md:text-lg">
                  {project.summary}
                </p>

                <ul className="mb-8 space-y-4">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="relative pl-6 text-sm leading-relaxed text-mist-dim md:text-base"
                    >
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-mist-faint transition-colors group-hover:bg-sage"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-6">
                  <p className="flex flex-wrap gap-2 text-xs font-medium text-mist-faint">
                    {project.stack.map(tech => (
                      <span key={tech} className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1">
                        {tech}
                      </span>
                    ))}
                  </p>

                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-4 pt-2">
                      {project.links.map((link) => (
                        <a
                          key={link.href + link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group/btn relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-mist transition-all hover:border-sage/50 hover:bg-white/10 hover:text-sage hover:shadow-[0_0_15px_rgba(126,184,168,0.15)] active:scale-95"
                        >
                          <span className="relative z-10">{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Image Side */}
              {(project.images?.length ?? 0) > 1 ? (
                <div className={`relative w-full ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                    <Carousel images={project.images!} title={project.title} />
                  </div>
                </div>
              ) : project.image ? (
                <div
                  className={`relative aspect-video w-full overflow-hidden rounded-2xl border border-white/5 bg-[#0a0c10] shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02] ${index % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
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

          <ul className="grid gap-6 sm:grid-cols-2">
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
                className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.01] p-6 transition-all hover:bg-white/[0.03]"
              >
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium text-mist-faint">
                    <span className="rounded bg-white/5 px-2 py-1">{project.year}</span>
                    <span>{project.role}</span>
                  </div>
                  <h4
                    className="font-display text-xl text-mist group-hover:text-sage transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    {project.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-mist-dim">
                    {project.summary}
                  </p>
                </div>
                
                <div className="mt-6">
                  <p className="flex flex-wrap gap-1.5 text-[11px] font-medium text-mist-faint">
                    {project.stack.map(tech => (
                      <span key={tech} className="rounded border border-white/5 px-1.5 py-0.5">{tech}</span>
                    ))}
                  </p>
                  
                  {project.links.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-4 pt-4 border-t border-white/5">
                      {project.links.map((link) => (
                        <a
                          key={link.href + link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-sage hover:text-mist transition-colors"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
