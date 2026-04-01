import React from 'react'
import { motion } from 'framer-motion'

const journal = [
  { title: 'The Future of Design', readTime: '5 min', date: 'March 2024', emoji: '✨' },
  { title: 'Building Better UX', readTime: '7 min', date: 'February 2024', emoji: '🎨' },
  { title: 'Web Performance Tips', readTime: '4 min', date: 'January 2024', emoji: '⚡' },
  { title: 'Design Systems', readTime: '6 min', date: 'December 2023', emoji: '🔧' },
]

export const Journal: React.FC = () => {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <p className="text-xs text-muted uppercase tracking-[0.3em]">Recent Thoughts</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-display italic mb-4">
            Recent <span className="font-display italic">thoughts</span>
          </h2>
          <p className="text-muted max-w-2xl">
            Insights and reflections on design, development, and digital innovation.
          </p>
        </motion.div>

        {/* Journal entries */}
        <div className="space-y-4">
          {journal.map((entry, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full group cursor-pointer transition-all"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Emoji/Image */}
              <div className="text-3xl flex-shrink-0">{entry.emoji}</div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary mb-1">{entry.title}</h3>
                <p className="text-xs text-muted">{entry.date}</p>
              </div>

              {/* Read time and arrow */}
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="text-xs text-muted whitespace-nowrap">{entry.readTime}</span>
                <motion.span
                  className="text-muted group-hover:text-text-primary transition-colors"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.button
          className="hidden md:inline-flex items-center gap-2 text-sm rounded-full px-6 py-3 border-2 border-stroke hover:border-transparent mt-12 font-semibold group relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 group-hover:animate-gradient-shift" />
          View all thoughts <span>→</span>
        </motion.button>
      </div>
    </section>
  )
}
