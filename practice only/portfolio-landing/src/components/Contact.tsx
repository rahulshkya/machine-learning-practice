import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { VideoBg } from './VideoBg'

export const Contact: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!marqueeRef.current) return

    const marquee = marqueeRef.current
    const marqueeContent = marquee.querySelector('.marquee-content') as HTMLElement

    if (marqueeContent) {
      gsap.to(marqueeContent, {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1,
      })
    }
  }, [])

  return (
    <section className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <VideoBg
          src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"
          overlay="heavy"
          flipped={true}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Marquee */}
        <div ref={marqueeRef} className="overflow-hidden mb-16 md:mb-24">
          <div className="marquee-content whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className="inline-block text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/20 mr-12 md:mr-24"
              >
                BUILDING THE FUTURE •
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div className="text-center mb-16 md:mb-24">
          <motion.a
            href="mailto:hello@michaelsmith.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-stroke hover:border-transparent text-base font-semibold group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 group-hover:animate-gradient-shift" />
            hello@michaelsmith.com
          </motion.a>
        </motion.div>

        {/* Footer Bar */}
        <div className="flex items-center justify-between pt-8 border-t border-stroke/30">
          <div className="flex items-center gap-6">
            {['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="text-xs text-muted hover:text-text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-muted">Available for projects</span>
          </div>
        </div>
      </div>
    </section>
  )
}
