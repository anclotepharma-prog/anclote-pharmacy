import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Clock, FileText, Phone, Shield, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medication Therapy Management | Tarpon Springs Pharmacy',
  description:
    'One-on-one pharmacist review of your medications. Catch interactions, cut costs and simplify your routine. Tarpon Springs. Call 727-944-5800.',
  alternates: {
    canonical: '/services/medication-therapy-management',
  },
}

const benefits = [
  'Patients taking multiple medications',
  'People seeing several prescribers',
  'Medicare Part D members who use maintenance medications',
  'Anyone dealing with side effects, confusion, or rising medication costs',
]

const reviewSteps = [
  'An MTM review takes about 30 minutes and is done one-on-one with a pharmacist.',
  'We go through every medication you take, including over-the-counter products and supplements.',
  'We check for interactions, duplicate therapies, and doses that no longer match your needs.',
  'We look for lower-cost alternatives and generic options where they exist.',
  'We give you a written summary and, with your permission, send recommendations to your doctor.',
]

export default function MedicationTherapyManagementPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">
              One-on-one pharmacist reviews in Tarpon Springs
            </div>
            <h1 className="page-heading">
              Medication Therapy Management in Tarpon Springs
            </h1>
            <p className="page-intro">
              A structured medication review that helps catch interactions, reduce unnecessary costs,
              and make your treatment plan easier to follow.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="card">
                <div className="feature-icon">
                  <FileText className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">
                  What Is Medication Therapy Management
                </h2>
                <p className="body-copy">
                  Medication Therapy Management is a pharmacist-led review of your full medication
                  picture, including prescriptions, over-the-counter products, and supplements. It
                  is designed to improve safety, simplify your routine, and help your treatment work
                  as intended.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Who Benefits From MTM</h2>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                      <span className="body-copy">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 tint-panel">
              <h2 className="mb-6 text-3xl font-semibold text-slate-950">What Happens During Your Review</h2>
              <div className="space-y-4">
                {reviewSteps.map((step) => (
                  <div key={step} className="flex items-start rounded-2xl bg-white p-5 shadow-sm">
                    <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                    <p className="body-copy">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="card">
                <div className="feature-icon">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Insurance and Medicare Coverage</h2>
                <p className="body-copy">
                  Many Medicare Part D members qualify for MTM at no additional cost, and some
                  private plans offer similar coverage. If you are comparing plans during{' '}
                  <Link
                    href="/services/medicare-open-enrollment"
                    className="font-semibold text-primary-700"
                  >
                    Medicare Open Enrollment
                  </Link>
                  , we can help you understand how medication coverage affects your total cost.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Clock className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">How to Schedule</h2>
                <p className="body-copy">
                  Call 727-944-5800 to book a medication review. Bring all your current
                  prescriptions, any over-the-counter products you take regularly, and your
                  insurance card. If ongoing adherence is a challenge, we may also recommend{' '}
                  <Link href="/services/medication-adherence" className="font-semibold text-primary-700">
                    medication adherence support
                  </Link>
                  .
                </p>
                <a
                  href="tel:727-944-5800"
                  className="btn-primary"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 727-944-5800
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
