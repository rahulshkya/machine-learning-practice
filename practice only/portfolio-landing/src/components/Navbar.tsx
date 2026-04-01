import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

interface NavbarProps {
  scrollY: number
}

export const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const [activeLink, setActiveLink] = useState('home')

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
      style={{
        backdropFilter: 'blur(0px)',
      }}
    >
      <motion.div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-all duration-300 ${
          scrollY > 100 ? 'shadow-md shadow-black/10 border-white/20' : ''
        }`}
      >
        {/* Logo */}
        <motion.button
          className="w-9 h-9 rounded-full border-2 border-transparent hover:scale-110 transition-transform flex items-center justify-center relative group"
          whileHover={{ scale: 1.1 }}
        >
          <div className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 group-hover:animate-gradient-shift transition-opacity" />
          <div className="relative w-9 h-9 bg-bg rounded-full flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary font-bold">JA</span>
          </div>
        </motion.button>

        {/* Divider 1 */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Nav Links */}
        <div className="flex gap-2 sm:gap-1">
          {['Home', 'Work', 'Resume'].map((link) => (
            <motion.button
              key={link}
              onClick={() => setActiveLink(link.toLowerCase())}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300 ${
                activeLink === link.toLowerCase()
                  ? 'text-text-primary bg-stroke/50'
                  : 'text-muted hover:text-text-primary hover:bg-stroke/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link}
            </motion.button>
          ))}
        </div>

        {/* Divider 2 */}
        <div className="w-px h-5 bg-stroke mx-1" />

        {/* Say Hi Button */}
        <motion.button
          className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-muted hover:text-text-primary relative group transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 group-hover:animate-gradient-shift transition-opacity" />
          <span className="relative bg-surface rounded-full px-1 backdrop-blur-md block">
            Say hi ↗
          </span>
        </motion.button>
      </motion.div>
    </motion.nav>
  )
}
