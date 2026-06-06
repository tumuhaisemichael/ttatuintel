'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import GradientButton from './ui/GradientButton'
import ThemeToggle from './ThemeToggle'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-surface/80 backdrop-blur-md border-b border-black/10 dark:border-white/10 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/5 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-accent origin-left"
          animate={{ scaleX: scrollProgress / 100 }}
          transition={{ duration: 0.15 }}
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group z-50">
          <span className="font-syne font-bold text-2xl tracking-tighter text-gradient group-hover:text-gradient-hero transition-all">
            TTatuIntel
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors text-sm font-medium relative group ${
                pathname === link.href ? 'text-white' : 'text-text-muted hover:text-black dark:hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-accent transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <GradientButton href="/contact">Get Started</GradientButton>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2 z-50">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="text-black dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark-surface border-b border-white/10 shadow-2xl py-6 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-text-muted hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <GradientButton href="/contact" className="w-full text-center">
                Get Started
              </GradientButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
