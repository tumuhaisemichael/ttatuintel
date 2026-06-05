'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
}

export default function AnimatedCounter({ value, duration = 2, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Easing function (easeOutQuart)
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * value));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="inline-block font-syne font-bold">
      {prefix}{count}{suffix}
    </span>
  )
}
