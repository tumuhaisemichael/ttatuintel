'use client'

import { motion } from 'framer-motion'
import { Smartphone, Monitor, Server, Cloud, Wifi } from 'lucide-react'

const services = [
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile App Development',
    description: 'Native iOS and Android applications built for performance, scalability, and exceptional user experience.',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: <Monitor size={32} />,
    title: 'Web Application Development',
    description: 'Modern, responsive web apps using cutting-edge frameworks like React and Next.js.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Server size={32} />,
    title: 'Website & System Hosting',
    description: 'Secure, high-availability hosting solutions tailored to your traffic and performance needs.',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    icon: <Cloud size={32} />,
    title: 'System Deployment & DevOps',
    description: 'Automated CI/CD pipelines, containerization, and cloud infrastructure management.',
    color: 'from-orange-400 to-red-500'
  },
  {
    icon: <Wifi size={32} />,
    title: 'Internet Service Provision',
    description: 'High-speed, reliable enterprise-grade internet connectivity for businesses of all sizes.',
    color: 'from-primary to-secondary'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-dark-surface relative">
      {/* Decorative divider */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-dark/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your business in the modern landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-glass p-8 rounded-2xl hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(26,107,255,0.2)] transition-all duration-300 border-white/5 relative group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-10 backdrop-blur-sm shadow-inner group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow`}>
                <div className="text-white drop-shadow-md">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-syne font-semibold mb-4 group-hover:text-primary-light transition-colors">
                {service.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {service.description}
              </p>
              
              {/* Card Hover Glow Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-dark/30 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
