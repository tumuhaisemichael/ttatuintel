'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  delay?: number
}

export default function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(26,107,255,0.3)', // primary color
  delay = 0,
}: GlowCardProps) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 })
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    const rotateY = ((x - 50) / 50) * 6
    const rotateX = ((50 - y) / 50) * 6

    setSpotlight({ x, y })
    setRotation({ rotateX, rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 })
    setSpotlight({ x: 50, y: 50 })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className={`relative group rounded-2xl transform-gpu ${className}`}
    >
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{ backgroundColor: glowColor }}
      ></div>
      <motion.div
        animate={rotation}
        transition={{ type: 'spring', stiffness: 180, damping: 16, mass: 0.8 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative h-full bg-glass-dark border border-white/10 rounded-2xl p-8 backdrop-blur-xl group-hover:border-white/20 transition-colors z-10 overflow-hidden will-change-transform"
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.14), transparent 32%)`,
          }}
        />
        {/* Subtle inner highlight */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {children}
      </motion.div>
    </motion.div>
  )
}
