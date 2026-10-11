import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))]">
          <div className="max-w-sm">
            <div className="relative mb-6 h-16 w-28">
              <Image src="/images/logo.png" alt="Anclote Pharmacy Logo" fill sizes="112px" className="object-contain" />
            </div>
            <p className="text-sm leading-7 text-slate-400">
              Locally owned pharmacy care for Tarpon Springs families, caregivers, and long-term care
              partners. We keep prescriptions, vaccines, medical equipment, and Medicare support close
              to home.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-200">
              <a
                href="tel:727-944-5800"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-primary-300" />
                <span>(727) 944-5800</span>
              </a>
              <a
                href="mailto:anclotepharma@gmail.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-primary-300" />
                <span>anclotepharma@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">
              Visit
            </h3>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary-300" />
                <div>
                  <p>1933 N Pinellas Ave</p>
                  <p>Tarpon Springs, FL 34689</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary-300" />
                <div>
                  <p>Mon-Fri: 9:00am - 5:00pm</p>
                  <p>Sat-Sun: Closed</p>
                </div>
              </div>
              <div>
                <p className="mb-2 font-semibold text-slate-200">Service areas</p>
                <div className="space-y-2">
                  <Link href="/locations/palm-harbor" className="block transition-colors hover:text-white">
                    Palm Harbor
                  </Link>
                  <Link href="/locations/holiday" className="block transition-colors hover:text-white">
                    Holiday
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services/pharmacy" className="transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/services/delivery" className="transition-colors hover:text-white">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="/immunizations" className="transition-colors hover:text-white">
                  Immunizations
                </Link>
              </li>
              <li>
                <Link href="/services/medical-weight-loss" className="transition-colors hover:text-white">
                  Medical Weight Loss
                </Link>
              </li>
              <li>
                <Link href="/services/peptide-therapy" className="transition-colors hover:text-white">
                  Peptide Therapy
                </Link>
              </li>
              <li>
                <Link href="/services/telehealth" className="transition-colors hover:text-white">
                  Telehealth
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/refill" className="transition-colors hover:text-white">
                  Refill Prescription
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">
              Patient Actions
            </h3>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-400">
                Need a refill, want to become a patient, or want to share your experience with the
                team?
              </p>
              <div className="mt-5 space-y-3">
                <Link
                  href="/new-patient"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary-200"
                >
                  Become a patient
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/refill"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary-200"
                >
                  Request a refill
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary-200"
                >
                  Leave a review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-6 rounded-2xl border border-primary-400/20 bg-primary-500/10 px-4 py-3 text-sm text-primary-50">
                Same-day prescription transfer help is available by phone during pharmacy hours.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-sm text-slate-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Anclote Pharmacy. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="transition-colors hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
