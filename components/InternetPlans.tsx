'use client'

import { motion } from 'framer-motion'
import { Check, Wifi } from 'lucide-react'
import GradientButton from './ui/GradientButton'

const plans = [
  {
    name: 'Business Basic',
    speed: '100 Mbps',
    price: '$89',
    features: ['Symmetrical Speeds', '99.9% Uptime Guarantee', 'Basic Firewall', '24/7 Phone Support', 'Static IP (Optional)'],
    recommended: false
  },
  {
    name: 'Enterprise Pro',
    speed: '1 Gbps',
    price: '$249',
    features: ['Symmetrical Speeds', '99.99% SLA', 'Advanced DDoS Protection', 'Priority Support line', '1 Free Static IP', 'Failover Ready'],
    recommended: true
  },
  {
    name: 'Dedicated Fiber',
    speed: '10 Gbps',
    price: 'Custom',
    features: ['Dedicated Bandwidth', '99.999% SLA', 'Custom Network Architecture', 'Dedicated Account Manager', 'Multiple Static IPs', 'BGP Routing Support'],
    recommended: false
  }
]

export default function InternetPlans() {
  return (
    <section className="py-24 bg-gradient-to-b from-dark to-primary-dark/20 relative overflow-hidden">
      {/* Decorative Wifi Wave Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <Wifi size={800} className="text-white animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary-light font-semibold text-sm mb-6">
              <Wifi size={16} /> Enterprise ISP
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6">
              High-Speed <span className="text-white">Connectivity</span>
            </h2>
            <p className="text-blue-100/70 text-lg">
              Reliable, enterprise-grade internet provision designed to keep your business running without interruption.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 ${
                plan.recommended 
                  ? 'bg-gradient-to-b from-primary to-primary-dark border-2 border-accent shadow-[0_0_40px_rgba(26,107,255,0.4)]' 
                  : 'bg-glass-dark border border-white/10'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-dark font-bold font-syne px-6 py-1 rounded-full text-sm">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-syne font-bold mb-2 ${plan.recommended ? 'text-white' : 'text-primary-light'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold font-syne text-white">{plan.speed}</span>
                </div>
                <div className="text-3xl font-bold font-syne text-white/90">
                  {plan.price}
                  {plan.price !== 'Custom' && <span className="text-lg text-white/50 font-normal">/mo</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-white/80">
                    <Check size={20} className={`shrink-0 mt-0.5 ${plan.recommended ? 'text-accent' : 'text-primary'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10">
                {plan.recommended ? (
                  <button className="w-full py-3 rounded-full bg-white text-primary-dark font-bold hover:bg-accent transition-colors">
                    Get Started
                  </button>
                ) : (
                  <GradientButton className="w-full" href="/contact">
                    Get Started
                  </GradientButton>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
