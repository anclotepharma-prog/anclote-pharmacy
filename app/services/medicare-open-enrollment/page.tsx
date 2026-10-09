import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, CheckCircle, Phone, Shield, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medicare Open Enrollment Help | Tarpon Springs Pharmacy',
  description:
    'Free Medicare Part D plan reviews in Tarpon Springs. Compare plans and check drug coverage before you enroll. Call 727-944-5800.',
  alternates: {
    canonical: '/services/medicare-open-enrollment',
  },
}

const whatToBring = [
  'Your Medicare card',
  'Your current Part D or Advantage plan card',
  'A list of all medications you take, including doses',
  "Your preferred pharmacy, if it isn't us",
]

export default function MedicareOpenEnrollmentPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">
              Free Medicare plan reviews in Tarpon Springs
            </div>
            <h1 className="page-heading">
              Medicare Open Enrollment Help in Tarpon Springs
            </h1>
            <p className="page-intro">
              Compare Medicare Part D options with a local pharmacy team that looks at your real
              medication list, not a generic estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[32px] bg-accent-500 p-8 text-center text-white shadow-xl">
              {/* Update these dates each year before the next Medicare open enrollment season begins. */}
              <Calendar className="mx-auto mb-4 h-12 w-12" />
              <h2 className="mb-3 text-3xl font-semibold">Key Medicare Enrollment Dates</h2>
              <p className="text-lg">
                For the 2026 Medicare open enrollment period, dates are October 15, 2026 through
                December 7, 2026.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="card">
                <div className="feature-icon">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Free Plan Comparison Reviews</h2>
                <p className="body-copy">
                  We compare plans available in Pinellas and Pasco counties using your actual
                  prescriptions so you can see how formularies, premiums, and pharmacy networks
                  change your yearly costs.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Why Review Your Plan Every Year</h2>
                <p className="body-copy">
                  Part D plans change their drug formularies, premiums, and preferred pharmacies
                  each year. A plan that covered your medications last year may not cover them at
                  the same cost this year. We compare your current plan against available
                  alternatives and show what each option would cost you over the full year.
                </p>
              </div>
            </div>

            <div className="mt-12 tint-panel">
              <h2 className="mb-6 text-3xl font-semibold text-slate-950">What to Bring to Your Appointment</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {whatToBring.map((item) => (
                  <div key={item} className="flex items-start rounded-2xl bg-white p-5 shadow-sm">
                    <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                    <span className="body-copy">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 dark-panel md:p-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h2 className="mb-4 text-3xl font-semibold">Book Your Review</h2>
                  <p className="text-slate-300">
                    Call 727-944-5800 to schedule your plan review. Appointments during open
                    enrollment fill quickly, so book early. Reviews are free and there is no
                    obligation to change plans.
                  </p>
                </div>
                <a
                  href="tel:727-944-5800"
                  className="btn-secondary gap-2"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 727-944-5800
                </a>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
