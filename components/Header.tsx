'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Clock, MapPin, Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'

const serviceLinks = [
  { href: '/services/pharmacy', label: 'Pharmacy Services', note: 'Refills, transfers and personal support' },
  { href: '/services/delivery', label: 'Prescription Delivery', note: 'Eligible local delivery options' },
  { href: '/services/medication-adherence', label: 'Medication Adherence', note: 'Simple routines and pharmacist guidance' },
  { href: '/services/durable-medical-equipment', label: 'Medical Equipment', note: 'Mobility, diabetic and respiratory supplies' },
  { href: '/services/medical-weight-loss', label: 'Medical Weight Loss', note: 'Provider-directed medication support' },
  { href: '/services/serum-tears', label: 'Serum Tears', note: 'Custom serum eye drops for dry eye' },
  { href: '/services/peptide-therapy', label: 'Peptide Therapy', note: 'Counseling and prescription coordination' },
  { href: '/services/telehealth', label: 'Telehealth Support', note: 'Virtual care connected to local follow-up' },
  { href: '/services/medication-therapy-management', label: 'Medication Reviews', note: 'One-on-one therapy management' },
  { href: '/services/long-term-care', label: 'Long-Term Care', note: 'Support for facilities and caregivers' },
  { href: '/services/medicare-open-enrollment', label: 'Medicare Support', note: 'Clear, local plan guidance' },
  { href: '/services/multi-dose-packaging', label: 'Multi-Dose Packaging', note: 'Packets organized by date and time' },
  { href: '/services/medication-synchronization', label: 'Medication Sync', note: 'One convenient monthly pickup' },
]

const areaLinks = [
  { href: '/locations/palm-harbor', label: 'Palm Harbor' },
  { href: '/locations/holiday', label: 'Holiday' },
]

const navLink =
  'inline-flex min-h-11 items-center px-3 text-sm font-semibold text-slate-700 transition-colors hover:text-primary-700'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="border-b border-white/10 bg-[#0b2341] text-white">
        <div className="container mx-auto flex min-h-10 items-center justify-between gap-4 px-4 text-xs font-semibold sm:text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:727-944-5800" className="inline-flex items-center gap-2 hover:text-primary-100">
              <Phone className="h-3.5 w-3.5" />
              <span>(727) 944-5800</span>
            </a>
            <span className="hidden items-center gap-2 text-slate-300 md:inline-flex">
              <Clock className="h-3.5 w-3.5" /> Mon-Fri, 9am-5pm
            </span>
          </div>
          <a
            href="https://maps.google.com/?q=1933+N+Pinellas+Ave+Tarpon+Springs+FL+34689"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-slate-300 hover:text-white sm:inline-flex"
          >
            <MapPin className="h-3.5 w-3.5" /> Tarpon Springs, Florida
          </a>
          <span className="text-primary-100 sm:hidden">Local since 2012</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-[#fffefa]/95 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex h-[78px] items-center justify-between gap-5">
            <Link href="/" className="relative h-14 w-28 shrink-0" onClick={closeMenu}>
              <Image src="/images/logo.png" alt="Anclote Pharmacy" fill priority sizes="112px" className="object-contain" />
            </Link>

            <nav className="hidden items-center lg:flex" aria-label="Primary navigation">
              <Link href="/" className={navLink}>Home</Link>
              <div className="group relative">
                <button type="button" className={`${navLink} gap-1.5`} aria-haspopup="true">
                  Services <ChevronDown className="h-4 w-4" />
                </button>
                <div className="invisible absolute left-1/2 top-full w-[620px] -translate-x-1/2 translate-y-2 border border-slate-200 bg-white p-4 opacity-0 shadow-[0_28px_70px_-35px_rgba(11,35,65,0.38)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="mb-3 flex items-center justify-between border-b border-slate-100 px-2 pb-3">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary-700">Pharmacy care</span>
                    <span className="text-xs text-slate-400">Personal support, close to home</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {serviceLinks.map((item) => (
                      <Link key={item.href} href={item.href} className="group/item p-3 hover:bg-primary-50">
                        <span className="block text-sm font-semibold text-slate-800 group-hover/item:text-primary-800">{item.label}</span>
                        <span className="mt-0.5 block text-xs leading-5 text-slate-500">{item.note}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/immunizations" className={navLink}>Immunizations</Link>
              <Link href="/livescan" className={navLink}>LiveScan</Link>
              <div className="group relative">
                <button type="button" className={`${navLink} gap-1.5`} aria-haspopup="true">
                  Areas <ChevronDown className="h-4 w-4" />
                </button>
                <div className="invisible absolute left-0 top-full w-48 translate-y-2 border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {areaLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-primary-50 hover:text-primary-800">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/about" className={navLink}>About</Link>
              <Link href="/contact" className={navLink}>Contact</Link>
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <Link href="/refill" className="btn-secondary min-h-10 px-4 py-2 text-sm">Refill Rx</Link>
              <Link href="/new-patient" className="btn-primary min-h-10 px-4 py-2 text-sm">New Patient</Link>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {menuOpen && (
            <div className="max-h-[calc(100vh-118px)] overflow-y-auto border-t border-slate-200 py-4 lg:hidden">
              <nav className="grid gap-1" aria-label="Mobile navigation">
                <Link href="/" onClick={closeMenu} className="px-3 py-3 font-semibold text-slate-800">Home</Link>
                <button type="button" onClick={() => setServicesOpen((open) => !open)} className="flex items-center justify-between px-3 py-3 text-left font-semibold text-slate-800">
                  Services <ChevronDown className={`h-4 w-4 transition ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="grid gap-px border-l-2 border-primary-200 bg-slate-50 py-2 sm:grid-cols-2">
                    {serviceLinks.map((item) => (
                      <Link key={item.href} href={item.href} onClick={closeMenu} className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-primary-800">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
                <Link href="/immunizations" onClick={closeMenu} className="px-3 py-3 font-semibold text-slate-800">Immunizations</Link>
                <Link href="/livescan" onClick={closeMenu} className="px-3 py-3 font-semibold text-slate-800">LiveScan</Link>
                <button type="button" onClick={() => setAreasOpen((open) => !open)} className="flex items-center justify-between px-3 py-3 text-left font-semibold text-slate-800">
                  Service Areas <ChevronDown className={`h-4 w-4 transition ${areasOpen ? 'rotate-180' : ''}`} />
                </button>
                {areasOpen && areaLinks.map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeMenu} className="border-l-2 border-primary-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-600">{item.label}</Link>
                ))}
                <Link href="/about" onClick={closeMenu} className="px-3 py-3 font-semibold text-slate-800">About</Link>
                <Link href="/contact" onClick={closeMenu} className="px-3 py-3 font-semibold text-slate-800">Contact</Link>
                <div className="mt-3 grid grid-cols-2 gap-3 border-t border-slate-200 pt-4">
                  <Link href="/refill" onClick={closeMenu} className="btn-secondary px-3 text-sm">Refill Rx</Link>
                  <Link href="/new-patient" onClick={closeMenu} className="btn-primary px-3 text-sm">New Patient</Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
      <Link
        href="/services/delivery"
        className="block bg-accent-700 px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-accent-800"
      >
        Local delivery, medication packaging, and pharmacist support, all in one place
        <span className="ml-2 underline underline-offset-4">Explore delivery</span>
      </Link>
    </>
  )
}
