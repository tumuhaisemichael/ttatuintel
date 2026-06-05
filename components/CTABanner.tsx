'use client'

import { motion } from 'framer-motion'
import GradientButton from './ui/GradientButton'

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-secondary-dark to-dark animate-gradient-shift bg-[length:200%_auto] opacity-50"></div>
      
      {/* Decorative meshes */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-dark-surface/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-20 max-w-5xl mx-auto shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-syne mb-6 text-white leading-tight">
            Ready to Build <br />
            <span className="text-gradient">Something Great?</span>
          </h2>
          <p className="text-text-muted text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let's turn your vision into reality. Partner with TTatuIntel for cutting-edge digital solutions tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <GradientButton href="/contact" className="w-full sm:w-auto text-lg px-10 py-4">
              Start Your Project
            </GradientButton>
            <a href="mailto:hello@ttatuintel.com" className="text-white hover:text-primary-light font-syne font-semibold transition-colors">
              hello@ttatuintel.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
