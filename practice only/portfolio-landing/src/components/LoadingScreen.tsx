import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0)

  React.useEffect(() => {
    let animationFrameId: number
    const startTime = Date.now()
    const duration = 2700

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const newCount = Math.floor(progress * 100)
      setCount(newCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setTimeout(onComplete, 400)
      }
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [onComplete])

  const words = ['Design', 'Create', 'Inspire']
  const [wordIndex, setWordIndex] = useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 900)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top-left label */}
      <motion.div
        className="absolute top-8 left-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="text-xs text-muted uppercase tracking-[0.3em]">Portfolio</p>
      </motion.div>

      {/* Center rotating words */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          key={wordIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
        >
          {words[wordIndex]}
        </motion.div>
      </div>

      {/* Bottom-right counter */}
      <motion.div
        className="absolute bottom-16 right-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
          {String(count).padStart(3, '0')}
        </p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2.7 }}
      >
        <motion.div
          className="h-full accent-gradient"
          style={{ scaleX: count / 100 }}
          animate={{ boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)' }}
        />
      </motion.div>
    </motion.div>
  )
}
