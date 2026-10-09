import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, HeartPulse, MapPin, Phone, Shield, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pharmacy Serving Holiday, FL | Anclote Pharmacy',
  description:
    'Independent pharmacy near Holiday for prescriptions, transfers, immunizations, medical equipment, Medicare support and pharmacist care. Call 727-944-5800.',
  alternates: {
    canonical: '/locations/holiday',
  },
}

const services = [
  {
    title: 'Independent Pharmacy Near Holiday',
    text: 'Holiday patients can work with a locally owned pharmacy team instead of a chain-store call queue. We help with refills, transfers, insurance questions, and pharmacist counseling.',
  },
  {
    title: 'Prescription Refill and Transfer Help',
    text: 'Call 727-944-5800 with your current pharmacy information and we will help move eligible prescriptions to Anclote Pharmacy.',
  },
  {
    title: 'Medical Equipment and Daily Support',
    text: 'We stock and order durable medical equipment including mobility aids, CPAP supplies, diabetic supplies, bathroom safety products, and daily living aids.',
  },
  {
    title: 'Vaccines, Medicare Reviews, and Fingerprinting',
    text: 'Our nearby Tarpon Springs pharmacy also supports Holiday patients with immunizations, Medicare Part D plan reviews, and LiveScan fingerprinting services.',
  },
]

export default function HolidayLocationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">Independent pharmacy near Holiday</div>
            <h1 className="page-heading">Pharmacy Serving Holiday, FL</h1>
            <p className="page-intro">
              Anclote Pharmacy serves Holiday families, caregivers, and seniors from our nearby
              Tarpon Springs location with prescriptions, vaccines, medical equipment, Medicare
              support, and one-on-one pharmacist care.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
                A nearby pharmacy that knows your name
              </div>
              <h2 className="section-title max-w-xl">
                Personal pharmacy care for Holiday patients.
              </h2>
              <p className="section-subtitle mx-0 mt-4 max-w-xl">
                Our team helps Holiday patients simplify prescriptions, stay current on vaccines,
                compare Medicare drug coverage, and find the right medical equipment without
                bouncing between stores.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/new-patient" className="btn-primary gap-2">
                  Become a Patient
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:727-944-5800" className="btn-secondary gap-2">
                  <Phone className="h-4 w-4" />
                  Call 727-944-5800
                </a>
              </div>
            </div>

            <div className="dark-panel">
              <MapPin className="mb-5 h-10 w-10 text-primary-200" />
              <h2 className="mb-4 text-3xl font-semibold">Visit us from Holiday</h2>
              <p className="text-slate-300">
                We are located at 1933 N Pinellas Ave, Tarpon Springs, FL 34689. Call before you
                visit if you want us to check prescription transfer timing, vaccine availability,
                insurance coverage, or equipment stock.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                Open Monday through Friday, 9:00am to 5:00pm.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="muted-band">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
              Services for Holiday patients
            </div>
            <h2 className="section-title">Independent pharmacy help, minutes away.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={service.title} className="card">
                <div className="feature-icon">
                  {index === 0 && <HeartPulse className="h-8 w-8 text-primary-600" />}
                  {index === 1 && <Truck className="h-8 w-8 text-primary-600" />}
                  {index === 2 && <Shield className="h-8 w-8 text-primary-600" />}
                  {index === 3 && <CheckCircle className="h-8 w-8 text-primary-600" />}
                </div>
                <h3 className="compact-title">{service.title}</h3>
                <p className="body-copy">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
