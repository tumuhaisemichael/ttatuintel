import Portfolio from '@/components/Portfolio'
import CTABanner from '@/components/CTABanner'

export default function PortfolioPage() {
  return (
    <main className="pt-32 pb-12">
      <div className="container mx-auto px-6 md:px-12 mb-12 text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold font-syne mb-6">
          Our <span className="text-gradient">Work</span>
        </h1>
        <p className="text-xl text-text-muted">
          Explore our portfolio of successful projects across mobile, web, and enterprise systems.
        </p>
      </div>

      <Portfolio />
      
      {/* Additional grid for more projects could go here */}
      
      <CTABanner />
    </main>
  )
}
