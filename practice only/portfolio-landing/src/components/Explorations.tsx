import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const explorations = [
  '🎨',
  '🌈',
  '✨',
  '🚀',
  '💫',
  '🌟',
]

export const Explorations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current || !containerRef.current) return

    gsap.registerPlugin()
    
    const pin = gsap.to(contentRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: contentRef.current,
        pinSpacing: false,
      },
    })

    return () => pin.scrollTrigger?.kill()
  }, [])

  return (
    <section ref={containerRef} className="min-h-[300vh] relative">
      {/* Pinned center content */}
      <div ref={contentRef} className="h-screen flex flex-col items-center justify-center sticky top-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">Explorations</p>
          <h2 className="text-5xl md:text-6xl font-display italic mb-8">
            Visual <span className="font-display italic">playground</span>
          </h2>
          <p className="text-muted max-w-md mx-auto mb-12">
            A collection of visual experiments and creative explorations.
          </p>
          <motion.button
            className="inline-flex items-center gap-2 text-sm rounded-full px-6 py-3 border-2 border-stroke group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 group-hover:animate-gradient-shift" />
            Explore on Dribbble →
          </motion.button>
        </motion.div>
      </div>

      {/* Parallax columns */}
      <div className="absolute top-0 left-0 right-0 h-screen z-20 overflow-hidden">
        <div className="grid grid-cols-2 gap-12 md:gap-40 max-w-[1400px] mx-auto px-6">
          {/* Column 1 */}
          <motion.div className="flex flex-col gap-40 pt-20">
            {explorations.slice(0, 3).map((item, idx) => (
              <motion.div
                key={idx}
                className="aspect-square max-w-[320px] rounded-2xl bg-surface border border-stroke flex items-center justify-center text-6xl cursor-pointer hover:scale-105 transition-transform"
                initial={{ y: 0 }}
                whileHover={{ y: -10 }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div className="flex flex-col gap-40 pt-80">
            {explorations.slice(3, 6).map((item, idx) => (
              <motion.div
                key={idx}
                className="aspect-square max-w-[320px] rounded-2xl bg-surface border border-stroke flex items-center justify-center text-6xl cursor-pointer hover:scale-105 transition-transform"
                initial={{ y: 0 }}
                whileHover={{ y: -10 }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
