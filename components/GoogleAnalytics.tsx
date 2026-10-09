'use client'

import Script from 'next/script'

// Renders the Google Analytics 4 tag only when a measurement ID is configured.
// Set NEXT_PUBLIC_GA_MEASUREMENT_ID in the hosting environment (e.g. Vercel
// project settings) — the ID looks like "G-XXXXXXXXXX" and comes from
// https://analytics.google.com when the GA4 property is created.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}
