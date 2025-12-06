import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Payd.plus | Unified Payment OS',
  description: 'The operating system for modern finance. Unify invoices, subscriptions, and cross-border settlements in one dashboard.',
  keywords: ['payment', 'fintech', 'payments', 'invoices', 'subscriptions', 'cross-border', 'settlements', 'payment OS'],
  authors: [{ name: 'Payd.plus' }],
  creator: 'Payd.plus',
  publisher: 'Payd.plus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://payd.plus'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Payd.plus | Unified Payment OS',
    description: 'The operating system for modern finance. Unify invoices, subscriptions, and cross-border settlements in one dashboard.',
    url: 'https://payd.plus',
    siteName: 'Payd.plus',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payd.plus | Unified Payment OS',
    description: 'The operating system for modern finance. Unify invoices, subscriptions, and cross-border settlements in one dashboard.',
    creator: '@paydplus',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased selection:bg-indigo-500 selection:text-white`}>
        {children}
      </body>
    </html>
  )
}

