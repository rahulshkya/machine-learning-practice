import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { VideoBg } from './VideoBg'

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = ['Creative', 'Fullstack', 'Founder', 'Scholar']

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from('.name-reveal', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        delay: 0.1,
        ease: 'power3.out',
      })

      tl.from(
        '.blur-in',
        {
          opacity: 0,
          y: 20,
          filter: 'blur(10px)',
          duration: 1,
          stagger: 0.1,
          delay: 0.3,
          ease: 'power3.out',
        },
        0
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <VideoBg src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent z-10" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <motion.p
          className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          COLLECTION '26
        </motion.p>

        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Michael Smith
        </h1>

        <div className="blur-in text-lg md:text-xl text-muted mb-8">
          A{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="font-display italic text-text-primary inline-block"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>{' '}
          lives in Chicago.
        </div>

        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-12">
          Designing seamless digital interactions by focusing on the unique nuances which bring systems to life.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex gap-4 flex-wrap justify-center">
          <motion.button
            className="rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg font-semibold hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Works
          </motion.button>
          <motion.button
            className="rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary font-semibold hover:scale-105 transition-all group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 group-hover:animate-gradient-shift" />
            Reach out...
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-center">
        <p className="text-xs text-muted uppercase tracking-[0.2em] mb-4">SCROLL</p>
        <motion.div
          className="w-px h-10 bg-stroke mx-auto"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-px h-2 bg-text-primary"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  )
}
