import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Clock, Package, Shield, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Multi-Dose Medication Packaging | Tarpon Springs, FL',
  description:
    'Pre-sorted medication packets by date and time. Simplify daily dosing for seniors in Tarpon Springs. Call 727-944-5800 to get started.',
  alternates: {
    canonical: '/services/multi-dose-packaging',
  },
}

const steps = [
  'We review every prescription you take and map out when each dose belongs.',
  'Your medications are packed into clearly labeled packets by date and time.',
  'You pick up one organized supply instead of managing multiple pill bottles.',
]

const packetItems = [
  'Patient name',
  'Date and time to take the packet',
  'List of medications inside',
  'Clear labeling that reduces mix-ups at home or while traveling',
]

export default function MultiDosePackagingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">
              Pill packs for Tarpon Springs patients and caregivers
            </div>
            <h1 className="page-heading">
              Multi-Dose Medication Packaging in Tarpon Springs
            </h1>
            <p className="page-intro">
              Pre-sorted medication packets that make daily routines easier for patients, families,
              and caregivers.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="section-title">How Multi-Dose Packaging Works</h2>
              <p className="section-subtitle mt-4">
                Instead of opening several bottles every day, you get medications grouped into one
                packet for each dose time.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step} className="card">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-xl font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="body-copy">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="card">
                <div className="feature-icon">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Who Benefits From Pill Packs</h2>
                <p className="body-copy">
                  Multi-dose packaging is especially helpful for seniors, patients taking several
                  medications, caregivers supporting loved ones, and anyone who wants a simpler,
                  more reliable routine.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Package className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">What&apos;s Inside Each Packet</h2>
                <ul className="space-y-3">
                  {packetItems.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                      <span className="body-copy">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="muted-band">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="section-title text-center">Common Questions</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="card">
                <div className="feature-icon">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-slate-950">Cost and Insurance</h3>
                <p className="body-copy">
                  There is no additional charge for multi-dose packaging at Anclote Pharmacy. You
                  pay your standard copay for the medications themselves, and the packaging is part
                  of our service. Insurance covers the prescriptions exactly as it would with
                  standard bottles.
                </p>
              </div>
              <div className="dark-panel">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold">How to Get Started</h3>
                <p className="text-slate-300">
                  Call 727-944-5800 to confirm your plan, review your medications, and set up your
                  first pack.
                </p>
                <Link
                  href="/contact"
                  className="btn-secondary"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
