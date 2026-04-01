import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Years Experience', value: '20+' },
  { label: 'Projects Done', value: '95+' },
  { label: 'Satisfied Clients', value: '200%' },
]

export const Stats: React.FC = () => {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.p
                className="text-6xl md:text-7xl font-display italic text-text-primary mb-2"
                whileInView={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-muted uppercase tracking-[0.2em] text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
