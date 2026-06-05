import GlowCard from '@/components/ui/GlowCard'
import CTABanner from '@/components/CTABanner'
import { Target, Lightbulb, Shield, Zap } from 'lucide-react'

const values = [
  {
    icon: <Target className="text-primary-light" size={32} />,
    title: 'Mission-Driven',
    description: 'We align our technological expertise with your business goals to deliver measurable results.'
  },
  {
    icon: <Lightbulb className="text-accent" size={32} />,
    title: 'Innovation First',
    description: 'Constantly exploring the edge of technology to bring you modern, future-proof solutions.'
  },
  {
    icon: <Shield className="text-emerald-400" size={32} />,
    title: 'Uncompromising Security',
    description: 'Security is built into everything we do, from infrastructure to application code.'
  },
  {
    icon: <Zap className="text-orange-400" size={32} />,
    title: 'High Performance',
    description: 'We engineer systems that are blazing fast, scalable, and highly available.'
  }
]

export default function AboutPage() {
  return (
    <main className="pt-32 pb-12">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold font-syne mb-6 leading-tight">
              Pioneers of the <br />
              <span className="text-gradient">Digital Frontier</span>
            </h1>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              Founded on the principle that technology should empower, not hinder, TTatuIntel has grown into a premier technology partner for businesses worldwide.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              We bridge the gap between complex technical challenges and elegant, scalable solutions across mobile, web, cloud infrastructure, and connectivity.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-[100px] opacity-30 rounded-full"></div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-glass-dark p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl font-bold font-syne text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20 mb-2">10+</div>
                <div className="text-2xl text-primary-light font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-dark-surface border-y border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-syne mb-4">Our Core <span className="text-gradient">Values</span></h2>
            <p className="text-text-muted max-w-2xl mx-auto">The principles that guide our work and define our culture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <GlowCard key={value.title} delay={i * 0.1} className="h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold font-syne mb-3 text-white">{value.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{value.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
