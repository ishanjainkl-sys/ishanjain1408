import { motion } from 'framer-motion'
import { profile } from '../data/content'

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
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, transparent 0%, rgba(15, 20, 18, 0.35) 45%, rgba(15, 20, 18, 0.92) 78%, #0f1412 100%),
              radial-gradient(ellipse 70% 60% at 70% 35%, rgba(126, 184, 168, 0.22), transparent 55%),
              radial-gradient(ellipse 50% 40% at 20% 60%, rgba(79, 143, 127, 0.14), transparent 50%)
            `,
          }}
        />
        <div className="absolute inset-0 opacity-[0.18]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
                <path
                  d="M 64 0 L 0 0 0 64"
                  fill="none"
                  stroke="rgba(232,239,233,0.35)"
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

      <div className="section-pad relative z-10 mx-auto w-full max-w-[1200px]">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-5 text-sm font-medium tracking-[0.18em] text-sage uppercase"
        >
          {profile.title} · {profile.location}
        </motion.p>

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
            className="inline-flex items-center justify-center bg-sage px-6 py-3 text-sm font-semibold text-ink transition-[transform,background] duration-300 hover:bg-mist hover:-translate-y-0.5"
          >
            View selected work
          </a>
          <a
            href="#experience"
            className="inline-flex items-center justify-center border border-line px-6 py-3 text-sm font-medium text-mist transition-[border-color,color,transform] duration-300 hover:border-sage/50 hover:text-sage hover:-translate-y-0.5"
          >
            Career timeline
          </a>
        </motion.div>
      </div>
    </section>
  )
}
