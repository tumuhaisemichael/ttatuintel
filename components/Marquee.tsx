'use client'

import { SiReact, SiNextdotjs, SiFlutter, SiNodedotjs, SiDocker, SiKubernetes, SiFirebase, SiPostgresql, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const row1 = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
]

const row2 = [
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
]

export default function Marquee() {
  return (
    <section className="py-24 bg-dark-surface overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
        <h3 className="text-2xl font-syne font-bold text-white mb-2">Technologies We Master</h3>
        <p className="text-text-muted">Built with industry-leading tools and frameworks.</p>
      </div>

      <div className="relative flex flex-col gap-8 w-full max-w-[100vw] overflow-hidden mask-horizontal">
        
        {/* Row 1 */}
        <div className="flex w-max animate-marquee hover:pause">
          {[...row1, ...row1, ...row1, ...row1].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 mx-4 backdrop-blur-sm whitespace-nowrap group hover:bg-white/10 transition-colors"
            >
              <tech.icon size={24} style={{ color: tech.color }} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium text-white/80 group-hover:text-white">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-max animate-marquee-reverse hover:pause">
          {[...row2, ...row2, ...row2, ...row2].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 mx-4 backdrop-blur-sm whitespace-nowrap group hover:bg-white/10 transition-colors"
            >
              <tech.icon size={24} style={{ color: tech.color }} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium text-white/80 group-hover:text-white">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Gradient fades for edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-dark-surface to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dark-surface to-transparent pointer-events-none"></div>
      </div>
    </section>
  )
}
