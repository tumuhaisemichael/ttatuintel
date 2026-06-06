'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const projects = [
  {
    title: 'FinTech Mobile Banking',
    category: 'Mobile',
    image: 'bg-gradient-to-br from-blue-900 to-slate-800',
    tags: ['Flutter', 'Node.js', 'AWS'],
    blurb: 'A secure mobile banking experience built for speed, trust, and daily engagement.',
    metrics: ['+42% daily usage', '4.8 App Store rating'],
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web',
    image: 'bg-gradient-to-br from-purple-900 to-indigo-800',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    blurb: 'A conversion-focused storefront with seamless checkout and real-time operations.',
    metrics: ['+31% conversion lift', 'Sub-2s page loads'],
  },
  {
    title: 'Healthcare Patient Portal',
    category: 'Cloud',
    image: 'bg-gradient-to-br from-teal-900 to-emerald-800',
    tags: ['React', 'HIPAA Compliant', 'Docker'],
    blurb: 'A patient portal combining accessibility, security, and resilient hosting.',
    metrics: ['99.95% uptime', 'HIPAA-ready workflows'],
  },
  {
    title: 'Enterprise ERP System',
    category: 'Infrastructure',
    image: 'bg-gradient-to-br from-orange-900 to-red-800',
    tags: ['Kubernetes', 'Microservices', 'CI/CD'],
    blurb: 'A modular ERP deployment that gave internal teams faster releases and better visibility.',
    metrics: ['70% faster releases', 'Zero-downtime deploys'],
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((project) => project.category)))],
    []
  )

  const filteredProjects = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter]
  )

  return (
    <section id="portfolio" className="py-24 bg-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,107,255,0.12),transparent_30%)] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-syne mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl">
              A glimpse into the digital solutions we've crafted for ambitious brands globally.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <a href="/portfolio" className="flex items-center gap-2 text-primary-light hover:text-white font-semibold transition-colors group">
              View All Projects 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full border text-sm transition-all ${
                activeFilter === filter
                  ? 'border-primary/50 bg-primary/15 text-white shadow-[0_0_25px_rgba(26,107,255,0.18)]'
                  : 'border-white/10 bg-white/5 text-text-muted hover:text-white hover:border-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className={`w-full h-80 rounded-[1.75rem] mb-6 relative overflow-hidden ${project.image} border border-white/10`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_35%)]" />
                <div className="absolute inset-x-8 -bottom-8 top-12 bg-dark-surface rounded-t-[1.4rem] border-x border-t border-white/10 shadow-2xl transition-transform duration-500 group-hover:translate-y-4">
                  <div className="p-5 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">{project.category}</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {project.metrics.map((metric) => (
                        <div key={metric} className="rounded-xl bg-white/5 border border-white/10 p-3 text-xs text-white/75">
                          {metric}
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto space-y-2">
                      {[78, 54, 89, 62, 94].map((height, barIndex) => (
                        <div key={barIndex} className="flex items-center gap-2">
                          <span className="w-12 text-[10px] text-white/30">{`0${barIndex + 1}`}</span>
                          <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                            <div className="h-full rounded-full bg-gradient-accent" style={{ width: `${height}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-3 bg-white text-primary-dark rounded-full font-bold font-syne transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Case Study
                  </span>
                </div>
              </div>
              
              <div>
                <p className="text-primary-light font-medium text-sm mb-2">{project.category}</p>
                <h3 className="text-2xl font-syne font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted mb-4 leading-relaxed">
                  {project.blurb}
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="inline-flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 size={16} className="text-emerald-400" />
                      {metric}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-text-muted bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
