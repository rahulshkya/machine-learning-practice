import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  { title: 'Automotive Motion', span: 'md:col-span-7' },
  { title: 'Urban Architecture', span: 'md:col-span-5' },
  { title: 'Human Perspective', span: 'md:col-span-5' },
  { title: 'Brand Identity', span: 'md:col-span-7' },
]

export const SelectedWorks: React.FC = () => {
  return (
    <section className="bg-bg py-12 md:py-16">
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
            <p className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-display italic mb-4">
            Featured <span className="font-display italic">projects</span>
          </h2>
          <p className="text-muted max-w-2xl">
            A selection of projects I've worked on, from concept to launch.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`${project.span} bg-surface border border-stroke rounded-3xl overflow-hidden group cursor-pointer relative`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background image placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-stroke/20 to-muted/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-no-repeat opacity-20 mix-blend-multiply" />
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-stroke/40 to-muted/20"
                  whileGroup-hover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-bg/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                whileHover={{ opacity: 1 }}
              >
                <div className="inline-flex items-center rounded-full border-2 border-transparent bg-text-primary text-bg px-6 py-3 group-hover:border-accent font-semibold">
                  <span>View — </span>
                  <span className="font-display italic ml-1">{project.title}</span>
                </div>
              </motion.div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-bg to-transparent">
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.button
          className="hidden md:inline-flex items-center gap-2 text-sm rounded-full px-6 py-3 border-2 border-stroke hover:border-transparent mt-8 font-semibold group relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 group-hover:animate-gradient-shift" />
          View all work <span>→</span>
        </motion.button>
      </div>
    </section>
  )
}
