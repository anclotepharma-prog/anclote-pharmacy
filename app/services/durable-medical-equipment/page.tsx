import type { Metadata } from 'next'
import Link from 'next/link'
import { Accessibility, Heart, Phone, Shield, ShoppingBag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Durable Medical Equipment in Tarpon Springs | Anclote Pharmacy',
  description:
    'Wheelchairs, walkers, CPAP supplies and diabetic supplies in Tarpon Springs. Insurance billing and fitting help. Call 727-944-5800.',
  alternates: {
    canonical: '/services/durable-medical-equipment',
  },
}

const faqs = [
  {
    question: 'Do you bill Medicare for medical equipment?',
    answer:
      "Yes. We bill Medicare and most commercial insurance directly. Call 727-944-5800 with your plan details and we'll confirm coverage before you order.",
  },
  {
    question: 'Can I rent equipment instead of buying?',
    answer: 'Yes. Wheelchairs, walkers, and other mobility equipment are available to rent short term.',
  },
  {
    question: 'Do I need a prescription for medical equipment?',
    answer: "Some items require one for insurance coverage and others do not. Call and we'll tell you which applies.",
  },
  {
    question: "What if the item I need isn't in stock?",
    answer: "We order it and call you when it arrives, usually within two business days.",
  },
  {
    question: 'Can you help me fit the equipment?',
    answer: "Yes. Bring the patient in and we'll size and adjust it in-store.",
  },
]

export default function DurableMedicalEquipmentPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">
              Medical equipment and supplies in Tarpon Springs
            </div>
            <h1 className="page-heading">
              Durable Medical Equipment in Tarpon Springs
            </h1>
            <p className="page-intro">
              Local help with mobility equipment, CPAP supplies, diabetic supplies, and everyday
              home-safety items.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="card">
                <h2 className="compact-title">Mobility Equipment</h2>
                <p className="body-copy">
                  Wheelchairs, transport chairs, walkers, rollators, canes, and crutches. Available
                  to purchase or rent. We fit the equipment to you in-store rather than handing over
                  a box.
                </p>
              </div>
              <div className="card">
                <h2 className="compact-title">CPAP and Respiratory Supplies</h2>
                <p className="body-copy">
                  CPAP masks, tubing, filters, humidifier chambers, and replacement parts. We stock
                  common sizes and can order specialty items, usually within two business days.
                </p>
              </div>
              <div className="card">
                <h2 className="compact-title">Diabetic Supplies</h2>
                <p className="body-copy">
                  Blood glucose meters, test strips, lancets, control solution, and diabetic
                  footwear. We check your insurance coverage before you buy so there are no
                  surprises.
                </p>
              </div>
              <div className="card">
                <h2 className="compact-title">
                  Bathroom Safety and Daily Living Aids
                </h2>
                <p className="body-copy">
                  Shower chairs, grab bars, raised toilet seats, bed rails, and reachers. If you
                  are setting up a home after a hospital discharge, call us and we will walk through
                  what you need.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <ShoppingBag className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-950">Insurance and Medicare Coverage</h3>
                <p className="body-copy">
                  We review plan requirements before ordering so you know what is covered and what
                  documentation may be needed.
                </p>
              </div>
              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <Accessibility className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-950">In-Store Fitting Help</h3>
                <p className="body-copy">
                  Our team helps size and adjust many products so you leave with equipment that
                  feels usable right away.
                </p>
              </div>
              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-950">Local Support</h3>
                <p className="body-copy">
                  Questions after purchase are handled by the same local pharmacy team, not a
                  national call center.
                </p>
              </div>
            </div>

            <div className="mt-12 dark-panel">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h2 className="mb-3 text-3xl font-semibold">Need help finding the right equipment?</h2>
                  <p className="text-slate-300">
                    Call before you come in and we can review your insurance coverage, stock status,
                    and whether a prescription is needed.
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
          </div>
        </div>
      </section>

      <section className="muted-band">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="section-title text-center">Equipment FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="card">
                  <div className="mb-2 flex items-start">
                    <Shield className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                    <h3 className="text-xl font-semibold text-slate-950">{faq.question}</h3>
                  </div>
                  <p className="body-copy">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Contact Our Equipment Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
