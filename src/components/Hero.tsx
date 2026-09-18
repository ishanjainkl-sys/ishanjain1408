import { motion } from 'framer-motion'
import { profile } from '../data/content'
import heroImg from '../assets/profile.jpeg'

const easeOut = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.1, duration: 0.7, ease: easeOut },
  }),
}

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:pb-20 md:pt-32"
    >
      {/* Full-bleed visual plane */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 transition-colors duration-500"
          style={{
            background: `
              linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--color-ink-val) 35%, transparent) 45%, color-mix(in srgb, var(--color-ink-val) 92%, transparent) 78%, var(--color-ink-val) 100%),
              radial-gradient(ellipse 70% 60% at 70% 35%, color-mix(in srgb, var(--color-sage-val) 22%, transparent), transparent 55%),
              radial-gradient(ellipse 50% 40% at 20% 60%, color-mix(in srgb, var(--color-sage-deep-val) 14%, transparent), transparent 50%)
            `,
          }}
        />
        <div className="absolute inset-0 opacity-[0.18]">
          <svg className="h-full w-full text-mist/35 transition-colors duration-500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
                <path
                  d="M 64 0 L 0 0 0 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: easeOut }}
          className="absolute -right-[8%] top-[12%] hidden select-none font-display text-[min(42vw,28rem)] font-800 leading-none text-mist/[0.04] md:block"
          style={{ fontWeight: 800 }}
        >
          IJ
        </motion.div>
        <div
          className="absolute bottom-[28%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent md:bottom-[32%]"
          aria-hidden
        />
      </div>

      <div className="section-pad relative z-10 mx-auto flex w-full max-w-[1200px] flex-col-reverse gap-10 md:flex-row md:items-end md:justify-between md:gap-8">
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-5 flex flex-col gap-1.5 text-sm font-medium tracking-[0.18em] text-sage uppercase"
          >
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <span>FULL STACK DEVELOPER</span>
              <span className="hidden h-1 w-1 rounded-full bg-sage/50 md:block"></span>
              <span>MERN STACK</span>
              <span className="hidden h-1 w-1 rounded-full bg-sage/50 md:block"></span>
              <span>AI</span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-[0.85em] text-mist-dim md:gap-3">
              <span className="rounded-full border border-sage/30 bg-sage/10 px-2.5 py-0.5 text-sage">IMMEDIATE JOINER</span>
              <span className="hidden h-1 w-1 rounded-full bg-mist-dim/50 md:block"></span>
              <span>{profile.location.toUpperCase()}</span>
            </div>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-[clamp(3.2rem,11vw,7.5rem)] leading-[0.92] font-800 tracking-[-0.03em] text-mist"
            style={{ fontWeight: 800 }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg text-mist-dim text-balance md:text-xl"
          >
            {profile.headline}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-mist px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_0_20px_color-mix(in_srgb,var(--color-mist-val)_10%,transparent)] transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sage to-sage-deep opacity-0 transition-opacity duration-300 group-hover:opacity-15"></div>
            </a>
            <a
              href="/resume/Ishan Jain's Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center rounded-full border border-mist/10 bg-mist/5 px-8 py-3.5 text-sm font-medium text-mist backdrop-blur-sm transition-all hover:border-sage/50 hover:bg-mist/10 hover:text-sage hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-sage-val)_15%,transparent)] active:scale-95"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative md:mr-8 lg:mr-16 shrink-0"
        >
          <div className="relative h-40 w-32 md:h-64 md:w-48 lg:h-72 lg:w-56 overflow-hidden rounded-[2rem] border border-sage/20 bg-ink/50 shadow-[0_0_40px_color-mix(in_srgb,var(--color-sage-val)_15%,transparent)] ring-1 ring-mist/5 md:rounded-[2.5rem] transition-colors duration-500">
            <img
              src={heroImg}
              alt="Ishan Jain profile photo"
              className="h-full w-full object-cover object-top"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] ring-1 ring-inset ring-mist/10 pointer-events-none transition-colors duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
