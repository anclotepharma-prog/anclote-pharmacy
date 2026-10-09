import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ClipboardList, HeartPulse, Phone, Scale, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medical Weight Loss Support in Tarpon Springs | Anclote Pharmacy',
  description:
    'Pharmacist-guided medical weight loss support in Tarpon Springs. Medication counseling, adherence help and care coordination. Call 727-944-5800.',
  alternates: {
    canonical: '/services/medical-weight-loss',
  },
}

const supportAreas = [
  'Medication counseling and safety review',
  'Insurance and prescription coordination when applicable',
  'Side effect and interaction checks with your current medication list',
  'Refill reminders and adherence support',
  'Progress check-ins with guidance to contact your prescriber when needed',
]

const faqs = [
  {
    question: 'Do I need a prescription for medical weight loss medication?',
    answer:
      'Yes. Prescription weight loss medications require evaluation and prescribing by a licensed medical provider. Our pharmacy team can help with medication counseling and prescription support once a therapy is prescribed.',
  },
  {
    question: 'Can the pharmacist review my current medications first?',
    answer:
      'Yes. We can review your medication list for potential interactions, duplicate therapy, side effects, and adherence concerns before or during treatment.',
  },
  {
    question: 'Do you guarantee weight loss results?',
    answer:
      'No. Results vary by patient, medical history, prescribed therapy, nutrition, activity, and follow-up care. We focus on safe medication support and clear pharmacist guidance.',
  },
]

export default function MedicalWeightLossPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">Medical weight loss support in Tarpon Springs</div>
            <h1 className="page-heading">Medical Weight Loss Support in Tarpon Springs</h1>
            <p className="page-intro">
              Pharmacist-guided support for patients using provider-directed weight loss care,
              including medication counseling, safety checks, refill coordination, and practical
              follow-through.
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
                  <Scale className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Weight Loss Management Pharmacy Support</h2>
                <p className="body-copy">
                  Medical weight loss can involve lifestyle changes, prescription therapy, and close
                  follow-up with a licensed provider. Anclote Pharmacy helps patients understand how
                  prescribed medications fit into their broader care plan and what to watch for
                  during treatment.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Medication Safety and Counseling</h2>
                <p className="body-copy">
                  Our pharmacist can review your current prescriptions, over-the-counter products,
                  allergies, and medication history to help identify possible interactions or
                  questions to discuss with your prescriber.
                </p>
              </div>
            </div>

            <div className="mt-12 tint-panel">
              <h2 className="mb-6 text-3xl font-semibold text-slate-950">How We Help</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {supportAreas.map((area) => (
                  <div key={area} className="flex items-start rounded-2xl bg-white p-5 shadow-sm">
                    <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                    <span className="body-copy">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
              <div className="card">
                <div className="feature-icon">
                  <ClipboardList className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">What to Bring or Have Ready</h2>
                <p className="body-copy">
                  Bring your insurance card, current medication list, any prescribed weight loss
                  therapy information, and questions from your provider visit. If you are comparing
                  coverage or costs, call ahead so we can review the details before you arrive.
                </p>
              </div>
              <div className="dark-panel">
                <HeartPulse className="mb-5 h-10 w-10 text-primary-200" />
                <h2 className="mb-4 text-3xl font-semibold">Start with a pharmacist conversation</h2>
                <p className="text-slate-300">
                  Call 727-944-5800 to ask about medication counseling, prescription coordination,
                  and availability for medical weight loss support.
                </p>
                <a href="tel:727-944-5800" className="btn-secondary gap-2">
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
            <h2 className="section-title text-center">Medical Weight Loss FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="card">
                  <h3 className="mb-2 text-xl font-semibold text-slate-950">{faq.question}</h3>
                  <p className="body-copy">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/contact" className="btn-primary">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
