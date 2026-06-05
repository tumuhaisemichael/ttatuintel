import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TTatuIntel | Building the Digital Future',
  description: 'Mobile App Development, Web Application Development, Website & System Hosting, System Deployment & DevOps, Internet Service Provision (ISP)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-dm bg-dark text-white antialiased overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
