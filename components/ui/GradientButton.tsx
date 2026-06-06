'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface GradientButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function GradientButton({
  children,
  href,
  onClick,
  className = '',
  type = 'button',
}: GradientButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const baseClasses = `relative inline-flex items-center justify-center px-8 py-3 font-medium text-white transition-all duration-300 rounded-full group overflow-hidden ${className}`
  
  const content = (
    <>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
      <span className="absolute inset-0 w-full h-full bg-gradient-primary"></span>
      <span className="absolute inset-0 w-full h-full bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      <span className="relative z-10 flex items-center gap-2 font-syne font-semibold">{children}</span>
      <span className="absolute inset-0 w-[200%] h-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.3),transparent)] -translate-x-[100%] animate-shimmer group-hover:animate-shimmer"></span>
    </>
  )

  const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2

    setOffset({
      x: x * 0.14,
      y: y * 0.18,
    })
  }

  const handlePointerLeave = () => {
    setOffset({ x: 0, y: 0 })
  }

  if (href) {
    return (
      <motion.div
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: 'spring', stiffness: 240, damping: 18, mass: 0.7 }}
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
        className="inline-flex"
      >
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 240, damping: 18, mass: 0.7 }}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={baseClasses}
    >
      {content}
    </motion.button>
  )
}
