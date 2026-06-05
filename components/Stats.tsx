'use client'

import { motion } from 'framer-motion'
import { Code2, Users, Activity, Clock } from 'lucide-react'
import AnimatedCounter from './ui/AnimatedCounter'

const stats = [
  {
    icon: <Code2 size={24} className="text-primary-light" />,
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    icon: <Users size={24} className="text-secondary-light" />,
    value: 50,
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    icon: <Activity size={24} className="text-accent" />,
    value: 99,
    suffix: '.9%',
    label: 'Uptime Guaranteed',
  },
  {
    icon: <Clock size={24} className="text-emerald-400" />,
    value: 10,
    suffix: '+',
    label: 'Years Experience',
  },
]

export default function Stats() {
  return (
    <section className="py-20 bg-dark relative overflow-hidden border-y border-white/5 clip-diagonal-reverse">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-dark to-secondary/5"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <h4 className="text-4xl md:text-5xl text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </h4>
              <p className="text-text-muted font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
