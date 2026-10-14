import type { Metadata } from 'next'
import { Manrope, Source_Sans_3 } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import FlyerPopup from '@/components/FlyerPopup'

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const displayFont = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.anclotepharma.com'),
  title: 'Anclote Pharmacy',
  description: 'Independent pharmacy serving Tarpon Springs, FL with prescriptions, immunizations, medical equipment, and Medicare support.',
}

const pharmacySchema = {
  '@context': 'https://schema.org',
  '@type': 'Pharmacy',
  name: 'Anclote Pharmacy',
  url: 'https://www.anclotepharma.com',
  telephone: '+1-727-944-5800',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1933 N Pinellas Ave',
    addressLocality: 'Tarpon Springs',
    addressRegion: 'FL',
    postalCode: '34689',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.171963,
    longitude: -82.75258,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://secure.helcim.com/js/helcim.js" strategy="afterInteractive" />
        <Script src="https://arcpoint-labs-of-north-tampa.myhelcim.com/js/version2.js" strategy="afterInteractive" />
        <Script src="https://secure.helcim.app/helcim-pay/services/start.js" strategy="afterInteractive" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmacySchema) }}
        />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FlyerPopup />
      </body>
    </html>
  )
}
