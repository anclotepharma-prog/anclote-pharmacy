'use client'

import { Star, MapPin, PenLine } from 'lucide-react'

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/ANCLOTE+PHARMACY/@28.1719632,-82.7525798,17z/data=!3m1!4b1!4m6!3m5!1s0x88c28d96a4e79589:0x7b388278d8c0c0d7!8m2!3d28.1719632!4d-82.7525798!16s%2Fg%2F11b7grqh8_?entry=ttu'

const GOOGLE_REVIEW_URL = 'https://g.page/r/CdfAwNh4gjh7EAE/review'

const RATING = 4.8
const REVIEW_COUNT = 142

const featuredReviews = [
  {
    name: 'Timothy',
    text: 'One of the best pharmacists — caring, patient, and understanding. He and his team treat patients like family.',
  },
  {
    name: 'Tiger Bill',
    text: 'Highly recommend Anclote Rx. Chetan and the team are prompt and courteous, and the free delivery service is great.',
  },
  {
    name: 'Robert Bergeron',
    text: 'The phone was answered immediately, even outside working hours. They worked around my complicated schedule. 10/10 would recommend.',
  },
  {
    name: 'Joseph Inserra',
    text: "I've been with them for 20 years. Moved an hour away and still use them — they've always treated me like family.",
  },
  {
    name: 'Justin Amos',
    text: 'Wonderful customer service, very polite and professional.',
  },
  {
    name: 'Miguel Arencibia',
    text: 'Excellent services!!!!',
  },
]

const ratingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Pharmacy',
  name: 'Anclote Pharmacy',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: RATING.toFixed(1),
    reviewCount: REVIEW_COUNT,
  },
  review: featuredReviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: '5' },
    reviewBody: r.text,
  })),
}

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void }

function trackEvent(eventName: string) {
  if (typeof window === 'undefined') return
  const gtag = (window as GtagWindow).gtag
  if (typeof gtag === 'function') {
    gtag('event', eventName)
  }
}

function Stars({ size = 'h-5 w-5' }: { size?: string }) {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`${size} fill-amber-400 text-amber-400`} />
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">Patient reviews</div>
            <h1 className="page-heading">What Our Patients Say</h1>
            <p className="page-intro mb-8">
              Real reviews from our patients on Google — this is why we do what we do.
            </p>
            <div className="inline-flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-sm">
              <span className="text-5xl font-bold text-slate-950">{RATING.toFixed(1)}</span>
              <div>
                <Stars />
                <p className="mt-1 text-sm text-slate-600">
                  Based on {REVIEW_COUNT} Google reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Google Reviews */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredReviews.map((r) => (
                <div key={r.name} className="card">
                  <Stars size="h-4 w-4" />
                  <p className="mt-4 body-copy">&ldquo;{r.text}&rdquo;</p>
                  <p className="mt-4 text-sm font-semibold text-slate-950">
                    {r.name}
                    <span className="ml-2 font-normal text-slate-500">via Google</span>
                  </p>
                </div>
              ))}
              <div className="card tint-panel flex flex-col justify-center">
                <h3 className="compact-title">Read all {REVIEW_COUNT} reviews</h3>
                <p className="body-copy mt-2">
                  See everything our patients have shared on Google.
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('read_all_reviews_click')}
                  className="btn-secondary mt-6 gap-2"
                >
                  <MapPin className="h-5 w-5" />
                  Open Google Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Write a Google Review */}
      <section className="muted-band">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">Share Your Experience</h2>
            <p className="mx-auto mb-10 max-w-2xl body-copy">
              Had a good visit? A Google review takes less than a minute — and it is the
              fastest way to help others find us.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('write_google_review_click')}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <PenLine className="h-5 w-5" />
              Write a Google Review
            </a>
            <p className="mt-6 text-sm text-slate-500">
              You will be taken to Google to post your review.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
