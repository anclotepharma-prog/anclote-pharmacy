import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Home, Package, Phone, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Long Term Care Pharmacy Services | Tarpon Springs, FL',
  description:
    'Pharmacy services for assisted living and care facilities in Tarpon Springs. Unit dose packaging, delivery and 24/7 support. Call 727-944-5800.',
  alternates: {
    canonical: '/services/long-term-care',
  },
}

const onboardingSteps = [
  'We meet with your administrator and review current resident medication lists.',
  'We coordinate transfers with your existing pharmacy.',
  'We set delivery schedules and emergency contact procedures.',
  'We train your staff on our packaging and reorder process.',
]

export default function LongTermCarePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">
              Assisted living and facility pharmacy support
            </div>
            <h1 className="page-heading">
              Long Term Care Pharmacy Services in Tarpon Springs
            </h1>
            <p className="page-intro">
              Anclote Pharmacy provides pharmacy services to assisted living facilities, group homes,
              and long term care providers across Tarpon Springs, Palm Harbor, and Holiday. We are
              independent, which means facility administrators deal with our pharmacists directly
              instead of a regional call center.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="card">
                <div className="feature-icon">
                  <Home className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Services for Assisted Living Facilities</h2>
                <p className="body-copy">
                  We support administrators, nursing staff, and caregivers with dependable pharmacy
                  service, direct communication, and workflows built for resident safety.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Package className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Unit Dose and Compliance Packaging</h2>
                <p className="body-copy">
                  Packaging options include resident-specific unit dose support and coordination with{' '}
                  <Link href="/services/multi-dose-packaging" className="font-semibold text-primary-700">
                    multi-dose packaging
                  </Link>{' '}
                  when medication administration needs to be more organized.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Clock className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Delivery and Emergency Support</h2>
                <p className="body-copy">
                  We coordinate routine deliveries, urgent needs, and communication procedures so
                  medication changes do not disrupt resident care.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Clinical Collaboration</h2>
                <p className="body-copy">
                  Our pharmacists can coordinate with staff and prescribers when facilities need
                  medication review support such as{' '}
                  <Link
                    href="/services/medication-therapy-management"
                    className="font-semibold text-primary-700"
                  >
                    medication therapy management
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="mt-12 tint-panel">
              <h2 className="mb-6 text-3xl font-semibold text-slate-950">Facility Onboarding</h2>
              <p className="mb-8 body-copy">
                Switching pharmacy providers is straightforward, and we manage the transition.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {onboardingSteps.map((step, index) => (
                  <div key={step} className="rounded-2xl bg-white p-6 shadow-sm">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-xl font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="body-copy">{step}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 body-copy">
                Most facilities transition within two weeks with no interruption to resident
                medications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-8 text-slate-950 shadow-2xl md:p-12">
            <h2 className="mb-6 text-3xl font-semibold">Partner With Us</h2>
            <p className="text-lg text-slate-700">
              To discuss pharmacy services for your facility, call 727-944-5800 and ask for our
              long term care team. We&apos;ll arrange a site visit and provide a service proposal.
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
      </section>
    </>
  )
}
