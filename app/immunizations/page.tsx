import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, CheckCircle, Clock, Phone, Shield, Syringe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Immunizations and Flu Shots in Tarpon Springs | Anclote Pharmacy',
  description:
    'Flu, shingles, COVID and travel vaccines in Tarpon Springs. Walk-ins welcome, most insurance accepted. Call 727-944-5800.',
  alternates: {
    canonical: '/immunizations',
  },
}

const vaccineFaqs = [
  {
    question: 'Do I need an appointment?',
    answer: 'No. Walk in during pharmacy hours and we will take care of it.',
  },
  {
    question: 'Does insurance cover vaccines?',
    answer:
      "Most plans cover routine vaccines including flu, shingles, and COVID at no cost. Bring your insurance card and we'll check before administering.",
  },
  {
    question: 'What should I bring?',
    answer: 'Your insurance card, photo ID, and your vaccination record if you have one.',
  },
  {
    question: 'Can I get more than one vaccine at the same visit?',
    answer: 'In most cases yes. Our pharmacist will confirm which combinations are appropriate for you.',
  },
  {
    question: 'How far in advance should I get travel vaccines?',
    answer: 'Four to six weeks before departure, as some vaccines need multiple doses or time to take effect.',
  },
]

export default function ImmunizationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">
              Walk-in vaccines in Tarpon Springs
            </div>
            <h1 className="page-heading">
              Immunizations and Vaccines in Tarpon Springs
            </h1>
            <p className="page-intro">
              Flu shots, shingles, COVID, and travel vaccine guidance from a local pharmacy team
              that makes the process simple.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="section-title">Vaccines We Offer</h2>
              <p className="section-subtitle mt-4">
                We offer common adult immunizations including flu, shingles, COVID, pneumonia,
                tetanus boosters, hepatitis vaccines, and more.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                'Flu shots',
                'COVID vaccines',
                'Shingles vaccines',
                'Pneumonia vaccines',
                'Tdap and tetanus boosters',
                'Travel vaccine guidance',
              ].map((vaccine) => (
                <div key={vaccine} className="card">
                  <div className="mb-3 flex items-center">
                    <Syringe className="mr-2 h-6 w-6 text-primary-600" />
                    <h3 className="text-lg font-semibold text-slate-950">{vaccine}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="card">
                <div className="feature-icon">
                  <Clock className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Flu Shots</h2>
                <p className="body-copy">
                  Flu shots are available from early autumn through the end of flu season. No
                  appointment is needed. Walk in during pharmacy hours. Most insurance plans cover
                  the flu vaccine at no cost to you, and high-dose flu vaccine is available for
                  patients 65 and over.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Travel Vaccines</h2>
                <p className="body-copy">
                  Traveling abroad? Come in at least four to six weeks before you leave. We will
                  review your destination and tell you which vaccines are recommended. Call
                  727-944-5800 to check availability for your specific destination.
                </p>
              </div>
            </div>

            <div className="mt-12 tint-panel">
              <h2 className="mb-6 text-3xl font-semibold text-slate-950">What to Bring</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {['Insurance card', 'Photo ID', 'Vaccination record if you have one'].map((item) => (
                  <div key={item} className="flex items-start rounded-2xl bg-white p-5 shadow-sm">
                    <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                    <span className="body-copy">{item}</span>
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
            <h2 className="section-title text-center">Vaccination FAQs</h2>
            <div className="space-y-6">
              {vaccineFaqs.map((faq) => (
                <div key={faq.question} className="card">
                  <h3 className="mb-2 text-xl font-semibold text-slate-950">{faq.question}</h3>
                  <p className="body-copy">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="btn-primary gap-2"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
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
    </>
  )
}
