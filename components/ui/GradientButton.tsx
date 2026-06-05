'use client'

import React from 'react'
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

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    )
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={baseClasses}
    >
      {content}
    </motion.button>
  )
}
