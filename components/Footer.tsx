import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-dark/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-syne font-bold text-2xl tracking-tighter text-gradient">
                TTatuIntel
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Empowering businesses with cutting-edge digital solutions. From mobile apps to robust cloud infrastructure, we build the digital future.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Linkedin size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Facebook size={18} />} />
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-syne text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              <FooterLink href="/services#mobile">Mobile App Development</FooterLink>
              <FooterLink href="/services#web">Web Development</FooterLink>
              <FooterLink href="/services#hosting">System Hosting</FooterLink>
              <FooterLink href="/services#devops">DevOps & Deployment</FooterLink>
              <FooterLink href="/services#isp">Internet Service Provision</FooterLink>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-syne text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/portfolio">Portfolio</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-syne text-lg font-semibold mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>123 Tech Boulevard, Innovation District, City, Country</span>
              </li>
              <li className="flex items-center gap-3 text-text-muted text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-text-muted text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@ttatuintel.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} TTatuIntel. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-muted">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-text-muted text-sm hover:text-primary-light transition-colors relative group inline-flex items-center"
      >
        <span className="w-0 h-px bg-primary-light mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
        {children}
      </Link>
    </li>
  )
}
