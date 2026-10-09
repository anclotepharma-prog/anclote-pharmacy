import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Clock, DollarSign, FileText, Fingerprint, Phone, Shield } from 'lucide-react'
import SuncoastLiveScanPortal from '@/components/SuncoastLiveScanPortal'

export const metadata: Metadata = {
  title: 'LiveScan Fingerprinting Services | Tarpon Springs, FL',
  description:
    'AHCA, FDLE and FD-258 fingerprinting in Tarpon Springs. Fast electronic submission for healthcare and employment screening. Call 727-944-5800.',
  alternates: {
    canonical: '/livescan',
  },
}

const faqs = [
  {
    question: 'How much does LiveScan fingerprinting cost?',
    answer: 'LiveScan fingerprinting is $95 without a photo and $120 with photos.',
  },
  {
    question: 'Do I need an appointment?',
    answer: 'Appointments are recommended. Use the scheduling link on this page or call 727-944-5800.',
  },
  {
    question: 'What do I need to bring?',
    answer: 'A valid government-issued photo ID and your ORI number or agency information.',
  },
  {
    question: 'How long do results take?',
    answer: 'Most electronic submissions process within 24 to 72 hours depending on the agency.',
  },
  {
    question: 'Do you provide FD-258 cards?',
    answer: 'Yes. FD-258 ink cards are completed in-store and given to you the same visit.',
  },
  {
    question: 'Can you fingerprint for ATF applications?',
    answer: 'Yes. We provide FD-258 cards accepted for ATF eForm submissions.',
  },
]

export default function LiveScanPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">
              LiveScan fingerprinting in Tarpon Springs
            </div>
            <h1 className="page-heading">
              LiveScan Fingerprinting in Tarpon Springs
            </h1>
            <p className="page-intro">
              AHCA, FDLE, and FD-258 fingerprinting for healthcare, employment, licensing, and
              background screening needs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#suncoast-livescan-portal"
                className="btn-secondary"
              >
                Schedule Online
              </a>
              <a
                href="tel:727-944-5800"
                className="btn-secondary gap-2 border-white/15 bg-white/10 text-white hover:border-white/30 hover:bg-white/15 hover:text-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 727-944-5800
              </a>
            </div>
          </div>
        </div>
      </section>

      <SuncoastLiveScanPortal />

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="section-title">Who Needs LiveScan Fingerprinting</h2>
              <p className="section-subtitle mt-4">
                We help healthcare workers, employers, licensing applicants, and other professionals
                who need fingerprinting processed quickly and accurately.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="card">
                <div className="feature-icon-accent">
                  <Shield className="h-8 w-8 text-accent-600" />
                </div>
                <h2 className="compact-title">AHCA and Healthcare Screening</h2>
                <p className="body-copy">
                  We process AHCA Level 2 background screening for healthcare workers, including
                  nurses, home health aides, assisted living staff, and medical office employees.
                  Bring your AHCA ORI number to your appointment. Results are submitted
                  electronically to FDLE and typically process within 24 to 72 hours.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon-accent">
                  <Fingerprint className="h-8 w-8 text-accent-600" />
                </div>
                <h2 className="compact-title">FD-258 Fingerprint Cards</h2>
                <p className="body-copy">
                  We provide FD-258 ink fingerprint cards for applications that require a physical
                  card rather than electronic submission, including ATF eForm submissions,
                  out-of-state licensing, and federal applications. Cards are completed in-store and
                  given to you the same visit.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="card">
                <div className="feature-icon-accent">
                  <FileText className="h-8 w-8 text-accent-600" />
                </div>
                <h2 className="compact-title">What to Bring</h2>
                <p className="body-copy">
                  Bring a valid government-issued photo ID and your ORI number or agency
                  information. If your employer or board gave you paperwork, bring that too.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon-accent">
                  <DollarSign className="h-8 w-8 text-accent-600" />
                </div>
                <h2 className="compact-title">Cost and Processing Time</h2>
                <p className="body-copy">
                  LiveScan fingerprinting is $95 without a photo and $120 with photos. Most
                  electronic submissions are sent immediately after your appointment, and results are
                  typically processed by the receiving agency within 24 to 72 hours.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon-accent">
                  <Clock className="h-8 w-8 text-accent-600" />
                </div>
                <h2 className="compact-title">Booking Options</h2>
                <p className="body-copy">
                  Appointments are recommended for the smoothest experience. You can schedule
                  online through Suncoast Livescan or call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="muted-band">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="section-title text-center">Fingerprinting FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="card">
                  <div className="mb-2 flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-accent-600" />
                    <h3 className="text-xl font-semibold text-slate-950">{faq.question}</h3>
                  </div>
                  <p className="body-copy">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 dark-panel">
              {/* Workbook note: pricing and turnaround should be confirmed with the client before publishing. */}
              <h3 className="mb-3 text-2xl font-semibold">Ready to schedule?</h3>
              <p className="text-slate-300">
                Choose the online scheduler or call our team if you have questions about agency
                requirements, ORI numbers, or card-based fingerprinting.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#suncoast-livescan-portal"
                  className="btn-secondary"
                >
                  Schedule Online
                </a>
                <a
                  href="tel:727-944-5800"
                  className="btn-secondary gap-2 border-white/15 bg-white/10 text-white hover:border-white/30 hover:bg-white/15 hover:text-white"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 727-944-5800
                </a>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
