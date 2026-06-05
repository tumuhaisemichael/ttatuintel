import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Marquee from '@/components/Marquee'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import InternetPlans from '@/components/InternetPlans'
import CTABanner from '@/components/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Marquee />
      <Portfolio />
      <Testimonials />
      <InternetPlans />
      <CTABanner />
    </>
  )
}
