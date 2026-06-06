'use client'

import { motion } from 'framer-motion'
import GradientButton from './ui/GradientButton'
import { ArrowDown, ArrowRight, BadgeCheck, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const typeWriterWords = [
  'Mobile App Development',
  'Web Application Development',
  'System Deployment & DevOps',
  'Website & System Hosting',
  'Internet Service Provision (ISP)',
]

const trustStats = [
  { label: 'Projects launched', value: '150+' },
  { label: 'Client satisfaction', value: '98%' },
  { label: 'Average uptime', value: '99.9%' },
]

const liveSignals = [
  { label: 'Deploy success', value: '24 releases', tone: 'text-emerald-400' },
  { label: 'Traffic growth', value: '+38% this quarter', tone: 'text-primary-light' },
  { label: 'Support response', value: '< 10 min', tone: 'text-accent' },
]

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % typeWriterWords.length)
    }, 2800)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-dark">
      <div className="absolute inset-0 bg-hero-mesh opacity-40 pointer-events-none" />
      <div className="absolute top-24 left-[12%] w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-orb-float pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-16 right-[10%] w-[26rem] h-[26rem] bg-secondary/20 rounded-full blur-[140px] animate-orb-float-reverse pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md mb-6"
            >
              <Sparkles size={16} className="text-accent" />
              Digital products, infrastructure, and connectivity — in one team
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-[1.02] mb-6 font-syne"
            >
              We build digital
              <br />
              <span className="text-gradient-hero animate-gradient-shift bg-[length:200%_auto]">
                experiences that move
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 min-h-[4.5rem]"
            >
              <p className="text-xl md:text-2xl text-text-muted font-medium leading-relaxed">
                We help ambitious teams launch better{' '}
                <span className="inline-block relative min-w-[16rem] text-primary-light font-semibold align-bottom">
                  {typeWriterWords.map((word, index) => (
                    <span
                      key={word}
                      className={`absolute left-0 top-0 whitespace-nowrap transition-all duration-500 ${
                        index === currentWordIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                  <span className="opacity-0 pointer-events-none">Web Application Development</span>
                </span>
                with premium UX, resilient systems, and motion that feels modern.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <GradientButton href="/contact" className="px-9 py-4 text-base shadow-[0_20px_60px_rgba(26,107,255,0.35)]">
                Start Your Project
              </GradientButton>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-white font-syne font-semibold px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
              >
                View Our Work
                <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              {trustStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
                  <div className="text-2xl md:text-3xl font-bold font-syne text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 text-sm text-white/80"
            >
              {['Fast delivery', 'Scalable architecture', 'Enterprise-grade reliability'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <BadgeCheck size={16} className="text-emerald-400" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:block h-[640px]"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 right-0 w-[520px] rounded-[2rem] border border-white/10 bg-glass-dark shadow-[0_30px_80px_rgba(2,8,23,0.45)] overflow-hidden"
            >
              <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-5 gap-3">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex-1 h-7 rounded-full bg-white/5 px-4 flex items-center text-[11px] text-white/35 font-mono">
                  https://ttatuintel.com/live-dashboard
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Active users', value: '12.4k', accent: 'from-primary/30 to-primary/5' },
                    { label: 'Deployments', value: '36', accent: 'from-secondary/30 to-secondary/5' },
                    { label: 'Uptime', value: '99.97%', accent: 'from-emerald-500/30 to-emerald-500/5' },
                  ].map((item) => (
                    <div key={item.label} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${item.accent} p-4`}>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-white/40 mb-2">{item.label}</div>
                      <div className="text-lg font-bold font-syne text-white">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-white">Experience performance</div>
                      <div className="text-xs text-white/40">weekly product metrics</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/15 text-primary-light text-xs">Live sync</div>
                  </div>
                  <div className="flex items-end gap-2 h-36">
                    {[42, 68, 54, 78, 66, 93, 74, 88].map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${value}%` }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.08 }}
                        className="flex-1 rounded-t-2xl bg-gradient-to-t from-primary via-primary-light to-secondary shadow-[0_0_20px_rgba(26,107,255,0.2)]"
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {liveSignals.map((signal) => (
                    <div key={signal.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/35 mb-1">{signal.label}</div>
                      <div className={`font-semibold ${signal.tone}`}>{signal.value}</div>
                    </div>
                  ))}
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 px-4 py-3">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/35 mb-1">Team capacity</div>
                    <div className="text-white font-semibold">Design, development, DevOps</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-14 left-0 w-[240px] rounded-[2rem] border border-primary/20 bg-[#09101f]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(26,107,255,0.2)] overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-syne text-white">Client touchpoints</div>
                  <div className="text-[11px] text-white/40">real-time service visibility</div>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="p-5 space-y-3">
                {[
                  ['Pipeline health', 'Healthy'],
                  ['Fiber latency', '12ms'],
                  ['Escalations', '0 open'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <span className="text-white/55">{label}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
      >
        <span className="text-xs uppercase tracking-[0.28em]">Scroll</span>
        <span className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center animate-bounce">
          <ArrowDown size={18} />
        </span>
      </motion.a>
    </section>
  )
}
