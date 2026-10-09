import type { Metadata } from 'next'
import Link from 'next/link'
import { Bell, Calendar, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medication Adherence Programs | Tarpon Springs Pharmacy',
  description:
    'Stay on track with your medications. Reminders, synchronization and pharmacist monitoring for seniors in Tarpon Springs. Call 727-944-5800.',
  alternates: {
    canonical: '/services/medication-adherence',
  },
}

const audiences = [
  {
    title: 'Seniors managing multiple prescriptions',
    text: "When you're taking five or more medications on different schedules, tracking them becomes a daily job. We simplify it.",
  },
  {
    title: 'Patients with chronic conditions',
    text: 'Diabetes, heart disease, and blood pressure medications only work when taken consistently.',
  },
  {
    title: 'Caregivers',
    text: "If you're managing a parent's or spouse's medications, our packaging and refill coordination reduce what you're keeping track of.",
  },
  {
    title: 'Patients recently discharged from hospital',
    text: 'New prescriptions and changed dosages are where mistakes happen. We review the full list with you.',
  },
]

export default function MedicationAdherencePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">
              Senior pharmacy services in Tarpon Springs
            </div>
            <h1 className="page-heading">
              Medication Adherence Support in Tarpon Springs
            </h1>
            <p className="page-intro">
              Support for patients, families, and caregivers who need an easier way to stay on top
              of daily medications.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="tint-panel">
              <h2 className="mb-6 text-3xl font-semibold text-slate-950">Why Medication Adherence Matters</h2>
              <p className="text-lg leading-relaxed text-slate-700">
                Roughly half of patients on long-term medication do not take it as prescribed.
                Missed doses lead to avoidable hospital visits, and the risk climbs with each
                additional prescription. Our adherence program exists to close that gap through
                reminders, simplified refills, and a pharmacist who notices when something is off.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="card">
                <div className="feature-icon">
                  <Bell className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Our Reminder and Refill System</h2>
                <p className="body-copy">
                  Automated reminder calls, texts, and refill follow-up help keep medications from
                  slipping through the cracks.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Calendar className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Medication Synchronization</h2>
                <p className="body-copy">
                  We can align refills to one pickup date each month through{' '}
                  <Link href="/services/medication-synchronization" className="font-semibold text-primary-700">
                    medication synchronization
                  </Link>{' '}
                  and pair it with{' '}
                  <Link href="/services/multi-dose-packaging" className="font-semibold text-primary-700">
                    multi-dose packaging
                  </Link>{' '}
                  when simpler daily dosing would help.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <TrendingUp className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Ongoing Pharmacist Monitoring</h2>
                <p className="body-copy">
                  We watch refill patterns, flag missed pickups, and help address side effects, cost
                  issues, or changing health needs before they become bigger problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="muted-band">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="section-title">Who Benefits Most</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {audiences.map((audience) => (
                <div key={audience.title} className="card">
                  <div className="feature-icon">
                    <Users className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-950">{audience.title}</h3>
                  <p className="body-copy">{audience.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 dark-panel">
              <h3 className="mb-4 text-2xl font-semibold">Start with one phone call</h3>
              <p className="text-slate-300">
                We will review your current routine, identify where doses are being missed, and help
                decide whether reminders, refill alignment, or packaging support is the best fit.
              </p>
              <a
                href="tel:727-944-5800"
                className="btn-secondary"
              >
                Call 727-944-5800
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
