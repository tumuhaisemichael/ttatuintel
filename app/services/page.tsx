import { Smartphone, Monitor, Server, Cloud, Wifi, CheckCircle2 } from 'lucide-react'
import GlowCard from '@/components/ui/GlowCard'
import CTABanner from '@/components/CTABanner'

const serviceDetails = [
  {
    id: 'mobile',
    icon: <Smartphone size={40} className="text-blue-400" />,
    title: 'Mobile App Development',
    description: 'We build high-performance native and cross-platform mobile applications that users love.',
    features: ['iOS Native (Swift)', 'Android Native (Kotlin)', 'Cross-platform (Flutter/React Native)', 'UI/UX Design', 'App Store Optimization']
  },
  {
    id: 'web',
    icon: <Monitor size={40} className="text-purple-400" />,
    title: 'Web Application Development',
    description: 'Scalable, secure, and blazing-fast web applications engineered for modern business needs.',
    features: ['Next.js / React Frameworks', 'Custom API Development', 'Progressive Web Apps (PWA)', 'E-commerce Solutions', 'Real-time Applications']
  },
  {
    id: 'hosting',
    icon: <Server size={40} className="text-teal-400" />,
    title: 'Website & System Hosting',
    description: 'Enterprise-grade hosting solutions with guaranteed uptime and robust security measures.',
    features: ['Dedicated Servers', 'VPS Hosting', 'Automated Backups', 'DDoS Protection', '24/7 Server Monitoring']
  },
  {
    id: 'devops',
    icon: <Cloud size={40} className="text-orange-400" />,
    title: 'System Deployment & DevOps',
    description: 'Streamline your development lifecycle with automated deployment pipelines and cloud infrastructure.',
    features: ['CI/CD Pipeline Setup', 'Docker Containerization', 'Kubernetes Orchestration', 'Infrastructure as Code', 'AWS/Azure/GCP Management']
  },
  {
    id: 'isp',
    icon: <Wifi size={40} className="text-primary-light" />,
    title: 'Internet Service Provision',
    description: 'Ultra-fast, reliable enterprise connectivity tailored for business-critical operations.',
    features: ['Dedicated Fiber Optics', 'Symmetrical Upload/Download', '99.99% SLA Guarantee', 'Static IPs', 'Failover Connections']
  }
]

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-12">
      <div className="container mx-auto px-6 md:px-12 mb-20 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold font-syne mb-6">
          Our <span className="text-gradient">Services</span>
        </h1>
        <p className="text-xl text-text-muted">
          End-to-end digital solutions designed to accelerate your growth, optimize your operations, and connect you to the future.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 mb-24 space-y-12">
        {serviceDetails.map((service, index) => (
          <div key={service.id} id={service.id} className="scroll-mt-32">
            <GlowCard delay={index * 0.1}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold font-syne mb-4">{service.title}</h2>
                  <p className="text-lg text-text-muted mb-6 max-w-3xl">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3 text-white/90">
                        <CheckCircle2 size={18} className="text-primary-light" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        ))}
      </div>

      <CTABanner />
    </main>
  )
}
