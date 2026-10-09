import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, ClipboardList, ExternalLink, Phone, Shield, Video } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Telehealth Doctor Support in Tarpon Springs | Anclote Pharmacy',
  description:
    'Telehealth support for Tarpon Springs patients. Connect with a provider, coordinate prescriptions and get pharmacist follow-up. Call 727-944-5800.',
  alternates: {
    canonical: '/services/telehealth',
  },
}

const supportSteps = [
  'Schedule or complete your telehealth visit with a licensed provider.',
  'Ask the provider to send eligible prescriptions to Anclote Pharmacy.',
  'Our pharmacist reviews the prescription, checks your profile, and contacts you with next steps.',
]

const faqs = [
  {
    question: 'Can a telehealth provider send prescriptions to Anclote Pharmacy?',
    answer:
      'Yes. Ask your provider to send eligible prescriptions to Anclote Pharmacy in Tarpon Springs, and call us if you want to confirm we received it.',
  },
  {
    question: 'Can the pharmacist answer questions after a virtual visit?',
    answer:
      'Yes. We can review medication directions, interactions, refill timing, insurance questions, and next steps once your prescription is received.',
  },
  {
    question: 'Is telehealth right for emergencies?',
    answer:
      'No. For urgent or life-threatening symptoms, call 911 or go to the nearest emergency department.',
  },
]

export default function TelehealthPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">Telehealth support in Tarpon Springs</div>
            <h1 className="page-heading">Telehealth Doctor and Pharmacy Support</h1>
            <p className="page-intro">
              Connect virtual provider care with local pharmacy follow-through, including
              prescription coordination, pharmacist counseling, insurance help, and refill support.
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
                  <Video className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Virtual Visit, Local Pharmacy Help</h2>
                <p className="body-copy">
                  Telehealth can make it easier to talk with a provider from home. Anclote Pharmacy
                  helps close the loop locally when a prescription, medication question, or follow-up
                  support is needed after your visit.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Medication Review After Telehealth</h2>
                <p className="body-copy">
                  Our pharmacist can review directions, check for interactions with your current
                  medications, answer safety questions, and help coordinate refills after your
                  provider sends a prescription.
                </p>
              </div>
            </div>

            <div className="mt-12 tint-panel">
              <h2 className="mb-6 text-3xl font-semibold text-slate-950">How It Works</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {supportSteps.map((step, index) => (
                  <div key={step} className="rounded-2xl bg-white p-6 shadow-sm">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-xl font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="body-copy">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_22px_55px_-38px_rgba(15,35,55,0.45)]">
              <div className="flex flex-col justify-between gap-5 border-b border-slate-200 bg-[#eaf6fb] p-6 md:flex-row md:items-center md:p-8">
                <div className="max-w-2xl">
                  <div className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent-700">
                    Embedded telehealth provider profile
                  </div>
                  <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#14243b]">
                    Kinchit Shah MD FACP
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    Review the provider profile and book below. Ask that eligible prescriptions be
                    sent to Anclote Pharmacy for local pharmacist support after your visit.
                  </p>
                </div>
                <a
                  href="https://kinchitshahmd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shrink-0 gap-2"
                >
                  Open Full Website
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="border-b border-slate-200 bg-slate-100 px-4 py-3">
                <div className="mx-auto flex max-w-xl items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm">
                  <Shield className="h-4 w-4 text-primary-700" />
                  kinchitshahmd.com
                </div>
              </div>

              <iframe
                src="/api/telehealth-provider"
                title="Kinchit Shah MD telehealth provider website"
                className="h-[640px] w-full bg-white md:h-[760px]"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />

              <div className="flex items-start gap-3 bg-[#fff4dc] p-5 text-sm leading-6 text-slate-700 md:px-8">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" />
                <p>
                  Kinchit Shah MD is a separate provider website. Information submitted inside the
                  embedded page is sent directly to that provider and is not collected by Anclote
                  Pharmacy.
                </p>
              </div>
            </div>

            <div className="mt-12 card">
              <div className="feature-icon">
                <ClipboardList className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="compact-title">What to Have Ready</h2>
              <p className="body-copy">
                Keep your medication list, allergy history, insurance card, preferred pharmacy
                information, and provider instructions available during your virtual visit. If a
                prescription is sent to us, call 727-944-5800 to confirm next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="muted-band">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="section-title text-center">Telehealth FAQs</h2>
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
              <Link href="/contact" className="btn-secondary gap-2">
                Contact the Pharmacy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
