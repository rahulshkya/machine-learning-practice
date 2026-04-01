import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SelectedWorks } from './components/SelectedWorks'
import { Journal } from './components/Journal'
import { Explorations } from './components/Explorations'
import { Stats } from './components/Stats'
import { Contact } from './components/Contact'
import './index.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="bg-bg text-text-primary overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <Hero />
      <SelectedWorks />
      <Journal />
      <Explorations />
      <Stats />
      <Contact />
    </div>
  )
}

export default App
