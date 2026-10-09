import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, DollarSign, Heart, Phone, Pill } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prescription Services in Tarpon Springs | Anclote Pharmacy',
  description:
    'Fill or transfer prescriptions at Anclote Pharmacy in Tarpon Springs. Fast turnaround, competitive pricing, personal service. Call 727-944-5800.',
  alternates: {
    canonical: '/services/pharmacy',
  },
}

const transferSteps = [
  'Call us at 727-944-5800 or stop by the counter.',
  "Give us your name, date of birth, current pharmacy, and the medications you're transferring.",
  "We contact your pharmacy, pull the prescriptions, and text you when they're ready.",
]

const faqs = [
  {
    question: 'How long does a prescription transfer take?',
    answer:
      "Most are completed the same day. Call before noon and it's usually ready by afternoon.",
  },
  {
    question: 'What do you need from me to transfer?',
    answer:
      "Your name, date of birth, the pharmacy you're leaving, and which medications you want moved.",
  },
  {
    question: 'Do you accept my insurance?',
    answer:
      "We accept most major plans including Medicare Part D, Medicaid, and commercial insurance. Call 727-944-5800 with your card and we'll confirm before you transfer.",
  },
  {
    question: 'Can I transfer from a chain pharmacy?',
    answer: 'Yes. Transfers from CVS, Walgreens, Walmart, and Publix are routine.',
  },
  {
    question: 'Do you offer delivery?',
    answer: 'Call us to check availability in your area.',
  },
]

export default function PharmacyServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">
              Prescription pharmacy in Tarpon Springs
            </div>
            <h1 className="page-heading">
              Prescription Services in Tarpon Springs
            </h1>
            <p className="page-intro">
              Fill, refill, or transfer prescriptions with a local pharmacy team that answers the
              phone, moves quickly, and keeps your care personal.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="card">
              <div className="feature-icon">
                <Pill className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="compact-title">Prescription Filling and Refills</h2>
              <p className="body-copy">
                We fill new prescriptions and refills with fast turnaround, careful review, and
                access to a pharmacist who can answer questions before you leave the counter.
              </p>
            </div>
            <div className="card">
              <div className="feature-icon">
                <DollarSign className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="compact-title">Competitive Pricing and Insurance</h2>
              <p className="body-copy">
                We work with most major insurance plans and help compare lower-cost options,
                including generic alternatives, before you commit to a refill or transfer.
              </p>
            </div>
          </div>

          <div className="mt-12 tint-panel">
            <h2 className="mb-6 text-3xl font-semibold text-slate-950">How to Transfer Your Prescription</h2>
            <p className="mb-8 body-copy">
              Switching to Anclote Pharmacy takes about five minutes and you do not need to contact
              your current pharmacy. We handle that.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {transferSteps.map((step, index) => (
                <div key={step} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-xl font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="body-copy">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 body-copy">
              Most transfers are complete the same day. Controlled substances may require a new
              prescription from your doctor.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="card">
              <div className="feature-icon">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="compact-title">Personalized Pharmacist Care</h2>
              <p className="body-copy">
                You will work with pharmacists who know your medication history, watch for
                interactions, and take the time to explain how each prescription fits into your
                routine.
              </p>
            </div>
            <div className="dark-panel">
              <h2 className="mb-4 text-2xl font-semibold">Ready to move your prescriptions?</h2>
              <p className="text-slate-300">
                Call us or stop in with your current pharmacy information and we will take it from
                there.
              </p>
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
      </section>

      <section className="muted-band">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="section-title text-center">Prescription FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="card">
                  <h3 className="mb-2 text-xl font-semibold text-slate-950">{faq.question}</h3>
                  <p className="body-copy">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/refill"
                className="btn-primary"
              >
                Start a Refill or Transfer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
