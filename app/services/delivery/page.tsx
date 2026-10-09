import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Clock, MapPin, PackageCheck, Phone, Shield, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prescription Delivery in Tarpon Springs | Anclote Pharmacy',
  description:
    'Ask about prescription delivery from Anclote Pharmacy in Tarpon Springs. Refill coordination, medication packaging and local support. Call 727-944-5800.',
  alternates: {
    canonical: '/services/delivery',
  },
}

const deliverySteps = [
  'Call 727-944-5800 or request your refill online.',
  'Our team confirms prescription status, payment, delivery eligibility, and timing.',
  'We prepare your medication and coordinate the handoff instructions with you.',
]

const faqs = [
  {
    question: 'Do you deliver prescriptions?',
    answer:
      'Call 727-944-5800 to confirm delivery availability for your address, medication type, and timing.',
  },
  {
    question: 'Can delivery work with multi-dose packaging?',
    answer:
      'Yes. Patients using multi-dose packaging can ask our team about coordinated pickup or delivery options.',
  },
  {
    question: 'Can controlled substances be delivered?',
    answer:
      'Some medications have special rules. Call the pharmacy and we will explain what is allowed for your prescription.',
  },
]

export default function DeliveryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">Prescription delivery in Tarpon Springs</div>
            <h1 className="page-heading">Prescription Delivery Service</h1>
            <p className="page-intro">
              Ask about local prescription delivery support from Anclote Pharmacy, built for
              patients, caregivers, and families who need medications coordinated with less friction.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="card">
                <div className="feature-icon">
                  <Truck className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Local Delivery Coordination</h2>
                <p className="body-copy">
                  We help coordinate eligible prescription deliveries for patients who have trouble
                  getting to the pharmacy, caregivers managing multiple medications, and families
                  who need a simpler refill routine.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Safe Prescription Handoff</h2>
                <p className="body-copy">
                  Delivery timing, medication eligibility, payment, and handoff instructions are
                  confirmed before medication leaves the pharmacy, so the process stays clear and
                  accountable.
                </p>
              </div>
            </div>

            <div className="mt-12 tint-panel">
              <h2 className="mb-6 text-3xl font-semibold text-slate-950">How Delivery Works</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {deliverySteps.map((step, index) => (
                  <div key={step} className="rounded-2xl bg-white p-6 shadow-sm">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-xl font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="body-copy">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <MapPin className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-950">Service Area</h3>
                <p className="body-copy">
                  Call us to confirm availability for Tarpon Springs, Palm Harbor, Holiday, and
                  nearby addresses.
                </p>
              </div>
              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <PackageCheck className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-950">Packaging Support</h3>
                <p className="body-copy">
                  Pair delivery with refill reminders, medication synchronization, or multi-dose
                  packaging for easier monthly care.
                </p>
              </div>
              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <Clock className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-950">Call Ahead</h3>
                <p className="body-copy">
                  Same-day timing depends on prescription status, availability, and route capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="muted-band">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="section-title text-center">Delivery FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="card">
                  <div className="mb-2 flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                    <h3 className="text-xl font-semibold text-slate-950">{faq.question}</h3>
                  </div>
                  <p className="body-copy">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="tel:727-944-5800" className="btn-primary gap-2">
                <Phone className="mr-2 h-5 w-5" />
                Call 727-944-5800
              </a>
              <Link href="/refill" className="btn-secondary">
                Request a Refill
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
