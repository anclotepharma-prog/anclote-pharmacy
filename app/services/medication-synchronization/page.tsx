import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, CheckCircle, Clock, Package, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medication Synchronization | Anclote Pharmacy Tarpon Springs',
  description:
    'Align all your prescription refills to one monthly pickup date. Fewer trips, no missed doses. Tarpon Springs. Call 727-944-5800.',
  alternates: {
    canonical: '/services/medication-synchronization',
  },
}

const faqs = [
  {
    question: 'Is there a cost for medication synchronization?',
    answer: 'No. Medication synchronization is a free service.',
  },
  {
    question: 'Can I change my pickup date?',
    answer: 'Yes. Let us know and we will adjust your monthly schedule.',
  },
  {
    question: 'Will this work with my insurance?',
    answer: 'Yes. We process your insurance the same way we do standard refills.',
  },
  {
    question: "What if I'm prescribed a new medication mid-cycle?",
    answer: "Call us and we'll add it to your sync schedule at your next pickup.",
  },
  {
    question: 'Can I still get an early refill if I travel?',
    answer: "Yes. Let us know your dates and we'll adjust your pickup ahead of time.",
  },
]

export default function MedicationSynchronizationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">
              One pickup date for Tarpon Springs refills
            </div>
            <h1 className="page-heading">
              Medication Synchronization in Tarpon Springs
            </h1>
            <p className="page-intro">
              Align all your prescription refills to one monthly pickup date and make medication
              management easier at home.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="tint-panel">
              <h2 className="mb-6 text-3xl font-semibold text-slate-950">How Medication Synchronization Works</h2>
              <p className="text-lg leading-relaxed text-slate-700">
                We align all your maintenance prescriptions to the same pickup day each month so
                you make fewer trips, miss fewer doses, and always know what is ready. It works
                especially well when combined with{' '}
                <Link href="/services/medication-adherence" className="font-semibold text-primary-700">
                  medication adherence support
                </Link>{' '}
                or{' '}
                <Link href="/services/multi-dose-packaging" className="font-semibold text-primary-700">
                  multi-dose packaging
                </Link>
                .
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="card">
                <div className="feature-icon">
                  <Calendar className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Benefits of One Pickup Date</h2>
                <p className="body-copy">
                  Fewer pharmacy trips, fewer missed refills, and a monthly rhythm that is easier to
                  manage for patients and caregivers.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <TrendingUp className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Monthly Pharmacist Review</h2>
                <p className="body-copy">
                  Each month we review what is due, check for refill authorizations, and make sure
                  everything is lined up before your pickup day.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Package className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Flexible Support</h2>
                <p className="body-copy">
                  We can adapt when medications change, travel comes up, or you need packaging
                  support added later.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-gray-100 md:p-12">
              <h2 className="mb-6 text-3xl font-semibold text-slate-950">How to Enroll</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                {[
                  'Call 727-944-5800 and tell us you would like to sync your medications.',
                  'We review your current prescriptions and choose a monthly pickup date that works for you.',
                  'We coordinate with your doctors on any refills that need authorization.',
                  'You pick everything up on the same day each month, and we call you a few days before.',
                ].map((step, index) => (
                  <div key={step} className="rounded-2xl bg-primary-50 p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-xl font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="body-copy">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="muted-band">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="card">
                  <h3 className="mb-2 text-xl font-semibold text-slate-950">{faq.question}</h3>
                  <p className="body-copy">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href="tel:727-944-5800"
                className="btn-primary gap-2"
              >
                <Clock className="mr-2 h-5 w-5" />
                Call to Enroll
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
