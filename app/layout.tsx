import type { Metadata } from 'next'
import { Bricolage_Grotesque, Geist } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dtrglobal.com'),
  title: {
    template: '%s | DTR Global',
    default: 'DTR Global — Discover Events',
  },
  description:
    'Parties, concerts, and cultural events — curated in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${geist.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-ink text-cream">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}