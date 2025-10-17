import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Golden Hills Ranch - Premium Grass-Fed Beef & Dairy',
  description: 'Family-owned ranch offering the finest grass-fed beef, raw milk, and artisan cheeses. 100% grass-fed, no hormones or antibiotics, sustainably raised.',
  keywords: 'grass-fed beef, raw milk, artisan cheese, sustainable farming, Golden Hills Ranch',
  openGraph: {
    title: 'Golden Hills Ranch - Premium Grass-Fed Beef & Dairy',
    description: 'Family-owned ranch offering the finest grass-fed beef, raw milk, and artisan cheeses.',
    type: 'website',
    images: [
      {
        url: 'https://imgix.cosmicjs.com/498d2400-ab08-11f0-8dcc-651091f6a7c0-photo-1500595046743-cd271d694d30-1760671250825.jpg?w=1200&h=630&fit=crop&auto=format,compress',
        width: 1200,
        height: 630,
        alt: 'Golden Hills Ranch',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  
  return (
    <html lang="en">
      <head>
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-earth-50">
          {children}
        </main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}