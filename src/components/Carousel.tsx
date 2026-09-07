import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
    }),
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
}

export function Carousel({ images, title }: { images: string[]; title: string }) {
    const [[page, direction], setPage] = useState([0, 0])

    const paginate = (newDirection: number) => {
        let newPage = page + newDirection
        if (newPage < 0) newPage = images.length - 1
        if (newPage >= images.length) newPage = 0
        setPage([newPage, newDirection])
    }

    const goToPage = (idx: number) => {
        setPage([idx, idx > page ? 1 : -1])
    }

    // Autoplay functionality
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1)
        }, 5000)

        return () => clearInterval(timer)
    }, [page, images.length])

    // Optional: Global keyboard navigation. Best practice is to bind only when in view,
    // but a simplified version bound natively works well for simple portfolios.
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Only trigger if focus isn't in an input/textarea to avoid side effects
            if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return
            if (e.key === 'ArrowLeft') paginate(-1)
            if (e.key === 'ArrowRight') paginate(1)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [page, images.length])

    return (
        <div className="group relative w-full aspect-video md:mt-0 rounded-2xl overflow-hidden border border-line bg-[#0a0a0d] shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={images[page]}
                    alt={`${title} preview slide ${page + 1}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(_e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x)
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1)
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1)
                        }
                    }}
                    className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing object-cover object-top touch-pan-y"
                />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 z-10 flex w-16 items-center pl-3 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 group-focus-within:opacity-100">
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        paginate(-1)
                    }}
                    className="pointer-events-auto rounded-full bg-black/50 p-2.5 text-white/80 backdrop-blur transition-colors hover:bg-black/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                    aria-label="Previous slide"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            <div className="absolute inset-y-0 right-0 z-10 flex w-16 items-center justify-end pr-3 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 group-focus-within:opacity-100">
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        paginate(1)
                    }}
                    className="pointer-events-auto rounded-full bg-black/50 p-2.5 text-white/80 backdrop-blur transition-colors hover:bg-black/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                    aria-label="Next slide"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2.5 rounded-full bg-black/20 px-3 py-2 backdrop-blur-sm">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={(e) => {
                            e.preventDefault()
                            goToPage(idx)
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-1 focus-visible:ring-offset-black/50 ${idx === page ? 'w-5 bg-sage' : 'w-1.5 bg-white/40 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Premium inner ring overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" />
        </div>
    )
}
