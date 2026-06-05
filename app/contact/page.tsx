'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'
import GradientButton from '@/components/ui/GradientButton'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormState({ name: '', email: '', phone: '', service: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="pt-32 pb-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold font-syne mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl text-text-muted">
            Have a project in mind or need enterprise connectivity? Reach out to our team of experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-glass-dark border border-white/10 p-8 rounded-3xl h-full">
              <h3 className="text-2xl font-bold font-syne mb-8 text-white">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <MapPin className="text-primary-light" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Our Office</h4>
                    <p className="text-text-muted text-sm">123 Tech Boulevard<br/>Innovation District<br/>City, Country</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                    <Phone className="text-secondary-light" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-text-muted text-sm">+1 (555) 123-4567<br/>Mon-Fri, 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-text-muted text-sm">hello@ttatuintel.com<br/>support@ttatuintel.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-glass border border-white/10 p-8 md:p-10 rounded-3xl relative">
              
              {/* Success Toast overlay */}
              {isSuccess && (
                <div className="absolute inset-0 z-20 bg-dark-surface/90 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center text-center p-8 border border-emerald-500/30">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mb-4">
                    <CheckCircle2 size={64} className="text-emerald-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold font-syne text-white mb-2">Message Sent!</h3>
                  <p className="text-text-muted">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input 
                      type="text" 
                      name="name"
                      id="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-dark-surface/50 border border-white/10 rounded-xl px-5 pt-6 pb-2 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary peer transition-all placeholder-transparent"
                      placeholder="Name"
                    />
                    <label htmlFor="name" className="absolute left-5 top-2 text-xs text-text-muted font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-light pointer-events-none">
                      Your Name
                    </label>
                  </div>
                  
                  <div className="relative group">
                    <input 
                      type="email" 
                      name="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-dark-surface/50 border border-white/10 rounded-xl px-5 pt-6 pb-2 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary peer transition-all placeholder-transparent"
                      placeholder="Email"
                    />
                    <label htmlFor="email" className="absolute left-5 top-2 text-xs text-text-muted font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-light pointer-events-none">
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input 
                      type="tel" 
                      name="phone"
                      id="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full bg-dark-surface/50 border border-white/10 rounded-xl px-5 pt-6 pb-2 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary peer transition-all placeholder-transparent"
                      placeholder="Phone"
                    />
                    <label htmlFor="phone" className="absolute left-5 top-2 text-xs text-text-muted font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-light pointer-events-none">
                      Phone Number
                    </label>
                  </div>

                  <div className="relative group">
                    <select 
                      name="service"
                      id="service"
                      required
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full bg-dark-surface/50 border border-white/10 rounded-xl px-5 pt-6 pb-2 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary peer transition-all appearance-none"
                    >
                      <option value="" disabled className="text-gray-500">Select a service...</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="web">Web Development</option>
                      <option value="hosting">System Hosting</option>
                      <option value="devops">DevOps & Deployment</option>
                      <option value="isp">Internet Service Provision</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                    <label htmlFor="service" className="absolute left-5 top-2 text-xs text-primary-light font-medium pointer-events-none">
                      Interested In
                    </label>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <textarea 
                    name="message"
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-dark-surface/50 border border-white/10 rounded-xl px-5 pt-6 pb-2 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary peer transition-all placeholder-transparent resize-none"
                    placeholder="Message"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-5 top-2 text-xs text-text-muted font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-light pointer-events-none">
                    Your Message
                  </label>
                </div>

                <div className="pt-2">
                  <GradientButton 
                    type="submit" 
                    className={`w-full ${isSubmitting ? 'opacity-80 cursor-wait' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </GradientButton>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
