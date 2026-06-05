'use client'

import React from 'react'
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`relative group rounded-2xl ${className}`}
    >
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{ backgroundColor: glowColor }}
      ></div>
      <div className="relative h-full bg-glass-dark border border-white/10 rounded-2xl p-8 backdrop-blur-xl group-hover:border-white/20 transition-colors z-10 overflow-hidden">
        {/* Subtle inner highlight */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {children}
      </div>
    </motion.div>
  )
}
