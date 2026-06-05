/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A6BFF',
        'primary-dark': '#0047CC',
        'primary-light': '#4D8FFF',
        secondary: '#7B2FFF',
        'secondary-dark': '#5500CC',
        'secondary-light': '#A56FFF',
        accent: '#00D4FF',
        'off-white': '#F0F4FF',
        dark: '#050A1A',
        'dark-surface': '#0D1426',
        'text-muted': '#8A9ABB',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1A6BFF, #7B2FFF, #5500CC)',
        'gradient-accent': 'linear-gradient(135deg, #00D4FF, #1A6BFF)',
        'gradient-hero': 'radial-gradient(ellipse at 20% 50%, rgba(26,107,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(123,47,255,0.15) 0%, transparent 60%)',
      },
      animation: {
        'orb-float': 'orbFloat 8s ease-in-out infinite',
        'orb-float-reverse': 'orbFloatReverse 10s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        'gradient-shift': 'gradientShift 5s ease infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        orbFloat: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        orbFloatReverse: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-40px, 30px) scale(1.08)' },
          '66%': { transform: 'translate(25px, -25px) scale(0.92)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(26,107,255,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(26,107,255,0.8), 0 0 60px rgba(123,47,255,0.4)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
}
