'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'FinTech Mobile Banking',
    category: 'Mobile App',
    image: 'bg-gradient-to-br from-blue-900 to-slate-800',
    tags: ['Flutter', 'Node.js', 'AWS'],
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web App',
    image: 'bg-gradient-to-br from-purple-900 to-indigo-800',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
  {
    title: 'Healthcare Patient Portal',
    category: 'Web App & Hosting',
    image: 'bg-gradient-to-br from-teal-900 to-emerald-800',
    tags: ['React', 'HIPAA Compliant', 'Docker'],
  },
  {
    title: 'Enterprise ERP System',
    category: 'System Deployment',
    image: 'bg-gradient-to-br from-orange-900 to-red-800',
    tags: ['Kubernetes', 'Microservices', 'CI/CD'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-dark relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`w-full h-80 rounded-2xl mb-6 relative overflow-hidden ${project.image} border border-white/10`}>
                {/* Simulated mockup overlay */}
                <div className="absolute inset-x-8 -bottom-8 top-12 bg-dark-surface rounded-t-xl border-x border-t border-white/10 shadow-2xl transition-transform duration-500 group-hover:translate-y-4"></div>
                
                {/* Hover overlay CTA */}
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
        </div>
      </div>
    </section>
  )
}
