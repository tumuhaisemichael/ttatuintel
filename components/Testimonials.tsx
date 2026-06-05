'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "TTatuIntel completely transformed our digital infrastructure. Their mobile app development team delivered a product that exceeded all our expectations.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow",
    initials: "SJ"
  },
  {
    quote: "The DevOps solutions provided by TTatuIntel reduced our deployment times by 70%. Highly recommend their expert team for cloud infrastructure.",
    author: "Michael Chang",
    role: "CTO, DataSync",
    initials: "MC"
  },
  {
    quote: "Reliable ISP services are hard to find, but TTatuIntel has provided us with flawless connectivity and exceptional customer support since day one.",
    author: "Elena Rodriguez",
    role: "Operations Director, GlobalNet",
    initials: "ER"
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-syne mb-4">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our partners have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-glass p-8 rounded-2xl relative group hover:bg-glass-dark transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors w-12 h-12" />
              
              <div className="mb-8 relative z-10">
                {/* 5 Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 text-lg leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold font-syne text-white shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white font-syne">{t.author}</h4>
                  <p className="text-sm text-primary-light">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
