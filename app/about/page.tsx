import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, CheckCircle, Heart, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Anclote Pharmacy | Family Owned in Tarpon Springs',
  description:
    'Family owned and operated in Tarpon Springs since 2012. Meet the pharmacists behind Anclote Pharmacy and see how we care for our community.',
  alternates: {
    canonical: '/about',
  },
}

const differentiators = [
  'You will speak to the same pharmacists each visit, and they will remember what you are taking and why.',
  'We offer services many chain pharmacies do not, including multi-dose packaging, medication synchronization, medication therapy management, and long term care support.',
  'If something is not in stock, we order it and call you when it arrives instead of sending you elsewhere.',
]

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">
              Family Owned Since 2012
            </div>
            <h1 className="page-heading">
              About Anclote Pharmacy - Family Owned in Tarpon Springs
            </h1>
            <p className="page-intro">
              Independent pharmacy care built on relationships, local trust, and direct access to
              the people filling your prescriptions.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-semibold text-slate-950">Our Story</h2>
                <p className="text-lg leading-8 text-slate-600">
                  Anclote Pharmacy opened in Tarpon Springs in 2012 with a straightforward idea: a
                  pharmacy should know its patients. We are family owned and independently operated,
                  which means decisions get made here, not at a corporate office three states away.
                  Over a decade later, we still fill prescriptions for the families who walked in
                  during our first month.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                <Image
                  src="/images/pharmacy/pharmacy-customer.jpg"
                  alt="Friendly service at Anclote Pharmacy"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="muted-band">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-semibold text-slate-950">
              What Makes Us Different
            </h2>
            <div className="space-y-6">
              {differentiators.map((item) => (
                <div key={item} className="card">
                  <div className="flex items-start">
                    <CheckCircle className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-primary-600" />
                    <p className="body-copy">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              <Link
                href="/services/multi-dose-packaging"
                className="link-tile"
              >
                Explore Multi-Dose Packaging
              </Link>
              <Link
                href="/services/medication-synchronization"
                className="link-tile"
              >
                Explore Medication Synchronization
              </Link>
              <Link
                href="/services/medication-therapy-management"
                className="link-tile"
              >
                Explore Medication Therapy Management
              </Link>
              <Link
                href="/services/long-term-care"
                className="link-tile"
              >
                Explore Long Term Care Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="section-title">Our Mission and Values</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <Target className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="compact-title">Our Mission</h3>
                <p className="body-copy">
                  To provide exceptional pharmacy care that makes treatment simpler, safer, and more
                  personal for families across Tarpon Springs.
                </p>
              </div>
              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="compact-title">Our Values</h3>
                <p className="body-copy">
                  Compassion, reliability, clear communication, and real accountability to the
                  community we serve every day.
                </p>
              </div>
              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <Award className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="compact-title">Our Promise</h3>
                <p className="body-copy">
                  Faster answers, direct access to a pharmacist, and follow-through that keeps your
                  care moving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold">Meet Our Pharmacy Team</h2>
            </div>
            <div className="rounded-[32px] bg-white p-6 text-slate-950 shadow-2xl md:p-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:items-center">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-slate-200">
                  <Image
                    src="/images/team/chetan-shah-pharmacist.png"
                    alt="Chetan Shah, pharmacist at Anclote Pharmacy"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 220px, 100vw"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Chetan Shah, PharmD</h3>
                  <p className="mt-3 text-slate-700">
                    30 years in community pharmacy. Specializes in compounding for humans and pets.
                    Licensed in Florida.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="btn-secondary"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
