import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ClipboardList, HeartPulse, Phone, Shield, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Peptide Therapy Support in Tarpon Springs | Anclote Pharmacy',
  description:
    'Pharmacist support for provider-prescribed peptide therapy in Tarpon Springs. Medication review, counseling and care coordination. Call 727-944-5800.',
  alternates: {
    canonical: '/services/peptide-therapy',
  },
}

const supportItems = [
  'Medication list review before starting a prescribed therapy',
  'Counseling on storage, handling, directions, and refill timing',
  'Interaction and duplicate-therapy checks',
  'Questions to discuss with your prescribing provider',
  'Coordination support for eligible prescriptions',
]

const faqs = [
  {
    question: 'Does peptide therapy require a prescription?',
    answer:
      'Yes. Peptide therapy should be evaluated and prescribed by a licensed medical provider when appropriate. Our pharmacy role is to support safe medication use and answer pharmacy-related questions.',
  },
  {
    question: 'Can Anclote Pharmacy tell me which peptide is right for me?',
    answer:
      'Treatment selection belongs with your medical provider. Our pharmacist can help you understand directions, safety considerations, storage, and how a prescribed therapy fits with your current medications.',
  },
  {
    question: 'Can you review my current medications first?',
    answer:
      'Yes. Bring or send an updated medication list, supplements, allergies, and medical history notes your provider wants considered.',
  },
]

export default function PeptideTherapyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">Peptide therapy pharmacy support</div>
            <h1 className="page-heading">Peptide Therapy Support in Tarpon Springs</h1>
            <p className="page-intro">
              Pharmacist support for patients using provider-prescribed peptide therapy, with a
              focus on medication safety, clear directions, storage questions, and care
              coordination.
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
                  <Sparkles className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Provider-Prescribed Therapy Support</h2>
                <p className="body-copy">
                  Peptide therapy is a clinical decision that should start with a licensed provider.
                  Once therapy is prescribed, our pharmacy team can help patients understand the
                  medication instructions and stay organized with refills.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Pharmacist Safety Review</h2>
                <p className="body-copy">
                  We can review your current prescriptions, supplements, allergies, and medication
                  history to help identify questions that should be addressed before or during
                  treatment.
                </p>
              </div>
            </div>

            <div className="mt-12 tint-panel">
              <h2 className="mb-6 text-3xl font-semibold text-slate-950">How Anclote Pharmacy Helps</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {supportItems.map((item) => (
                  <div key={item} className="flex items-start rounded-2xl bg-white p-5 shadow-sm">
                    <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                    <span className="body-copy">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
              <div className="card">
                <div className="feature-icon">
                  <ClipboardList className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Before You Begin</h2>
                <p className="body-copy">
                  Talk with your provider about goals, medical history, labs, risks, benefits, and
                  alternatives. Then call Anclote Pharmacy with prescription details so our team can
                  help review pharmacy-related next steps.
                </p>
              </div>
              <div className="dark-panel">
                <HeartPulse className="mb-5 h-10 w-10 text-primary-200" />
                <h2 className="mb-4 text-3xl font-semibold">Have questions about a prescription?</h2>
                <p className="text-slate-300">
                  Call our pharmacist to discuss directions, refill coordination, storage, or
                  medication safety questions related to a prescribed peptide therapy.
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
            <h2 className="section-title text-center">Peptide Therapy FAQs</h2>
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
                Contact Our Pharmacy Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
