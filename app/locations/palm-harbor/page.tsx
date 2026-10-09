import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, HeartPulse, MapPin, Phone, Shield, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pharmacy Serving Palm Harbor, FL | Anclote Pharmacy',
  description:
    'Independent pharmacy near Palm Harbor for prescriptions, transfers, durable medical equipment, flu shots, Medicare support and LiveScan. Call 727-944-5800.',
  alternates: {
    canonical: '/locations/palm-harbor',
  },
}

const services = [
  {
    title: 'Prescription Transfers From Palm Harbor',
    text: 'Switching to Anclote Pharmacy usually starts with one phone call. We contact your current pharmacy, move eligible prescriptions, and let you know when they are ready.',
  },
  {
    title: 'Durable Medical Equipment Near Palm Harbor',
    text: 'We help Palm Harbor patients find wheelchairs, walkers, CPAP supplies, diabetic supplies, bathroom safety items, and other home medical equipment.',
  },
  {
    title: 'Medication Packaging and Adherence',
    text: 'Multi-dose packaging, refill reminders, medication synchronization, and pharmacist monitoring can make daily routines easier for seniors and caregivers.',
  },
  {
    title: 'Immunizations, Medicare, and LiveScan',
    text: 'Patients from Palm Harbor can visit us for flu shots, travel vaccine guidance, Medicare Part D reviews, and AHCA, FDLE, or FD-258 fingerprinting.',
  },
]

export default function PalmHarborLocationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">Independent pharmacy near Palm Harbor</div>
            <h1 className="page-heading">Pharmacy Serving Palm Harbor, FL</h1>
            <p className="page-intro">
              Anclote Pharmacy is a locally owned pharmacy in nearby Tarpon Springs serving Palm
              Harbor patients with prescriptions, medical equipment, vaccines, Medicare support, and
              personal pharmacist care.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
                Close to home, never chain-store generic
              </div>
              <h2 className="section-title max-w-xl">
                A Palm Harbor pharmacy option with real follow-through.
              </h2>
              <p className="section-subtitle mx-0 mt-4 max-w-xl">
                If you live in Palm Harbor and want a pharmacy team that answers the phone, checks
                details, and helps coordinate care, our Tarpon Springs counter is a short trip away.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/services/pharmacy" className="btn-primary gap-2">
                  Transfer Prescriptions
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
              <h2 className="mb-4 text-3xl font-semibold">Visit us from Palm Harbor</h2>
              <p className="text-slate-300">
                Anclote Pharmacy is located at 1933 N Pinellas Ave, Tarpon Springs, FL 34689. Call
                ahead if you want us to confirm prescription transfer details, equipment stock, or
                vaccine availability before you come in.
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
              Services for Palm Harbor patients
            </div>
            <h2 className="section-title">Pharmacy support built around practical care.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={service.title} className="card">
                <div className="feature-icon">
                  {index === 0 && <Truck className="h-8 w-8 text-primary-600" />}
                  {index === 1 && <Shield className="h-8 w-8 text-primary-600" />}
                  {index === 2 && <HeartPulse className="h-8 w-8 text-primary-600" />}
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
