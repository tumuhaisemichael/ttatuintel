'use client'

import { motion } from 'framer-motion'
import GradientButton from './ui/GradientButton'
import { ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const typeWriterWords = [
  'Mobile App Development',
  'Web Application Development',
  'System Deployment & DevOps',
  'Website & System Hosting',
  'Internet Service Provision (ISP)'
]

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % typeWriterWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-dark">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-orb-float pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[120px] animate-orb-float-reverse pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 font-syne">
                Building the <br />
                <span className="text-gradient-hero animate-gradient-shift bg-[length:200%_auto]">
                  Digital Future
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 h-16"
            >
              <p className="text-xl md:text-2xl text-text-muted font-medium">
                Expert solutions in{' '}
                <span className="text-primary-light inline-block relative font-semibold">
                  {typeWriterWords.map((word, index) => (
                    <span
                      key={word}
                      className={`absolute left-0 top-0 whitespace-nowrap transition-all duration-500 ${
                        index === currentWordIndex ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                  {/* Invisible spacer to maintain height */}
                  <span className="opacity-0 pointer-events-none">Web Application Development</span>
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <GradientButton href="/contact">
                Start Your Project
              </GradientButton>
              <a href="#portfolio" className="text-white font-syne font-semibold px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors">
                View Our Work
              </a>
            </motion.div>
          </div>

          {/* 3D-style Device Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative hidden lg:block h-[600px]"
          >
            {/* Browser Mockup */}
            <div className="absolute top-10 right-10 w-[500px] h-[350px] bg-dark-surface rounded-xl border border-white/10 shadow-2xl overflow-hidden animate-bounce-gentle">
              <div className="h-8 bg-white/5 flex items-center px-4 gap-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="p-6 h-full flex flex-col gap-4 opacity-50">
                <div className="w-full h-8 bg-white/5 rounded"></div>
                <div className="w-3/4 h-8 bg-white/5 rounded"></div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="h-24 bg-primary/20 rounded-lg"></div>
                  <div className="h-24 bg-secondary/20 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="absolute bottom-10 left-0 w-[240px] h-[480px] bg-dark rounded-[2rem] border-4 border-white/10 shadow-[0_0_50px_rgba(26,107,255,0.3)] overflow-hidden animate-bounce-gentle" style={{ animationDelay: '1s' }}>
              <div className="absolute top-0 w-full h-6 bg-black rounded-t-[1.8rem] flex justify-center">
                <div className="w-1/3 h-4 bg-dark-surface rounded-b-xl"></div>
              </div>
              <div className="mt-10 mx-4 space-y-4 opacity-70">
                <div className="h-16 w-16 bg-primary-light/30 rounded-full mx-auto"></div>
                <div className="h-4 w-3/4 bg-white/10 rounded mx-auto"></div>
                <div className="h-4 w-1/2 bg-white/10 rounded mx-auto"></div>
                <div className="mt-8 space-y-3">
                  <div className="h-12 w-full bg-white/5 rounded-xl"></div>
                  <div className="h-12 w-full bg-white/5 rounded-xl"></div>
                  <div className="h-12 w-full bg-white/5 rounded-xl"></div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50 hover:text-white transition-colors"
      >
        <a href="#services">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  )
}
