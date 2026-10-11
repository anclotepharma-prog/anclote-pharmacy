import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Droplets, Eye, Phone, ShieldCheck, Snowflake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Serum Eye Tears for Dry Eye | Anclote Pharmacy Tarpon Springs',
  description:
    'Autologous serum tears and serum eye drops for dry eye, prepared from your own blood at Anclote Pharmacy in Tarpon Springs, FL. A real option for severe dry eye treatment. Call 727-944-5800.',
  alternates: {
    canonical: '/services/serum-tears',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I prepare for my serum tears blood draw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drink plenty of water before your appointment. Being well hydrated makes the blood draw faster and easier.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should I get my serum tears home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide a cooler with an ice pack at pickup. Keep the bottles cold on the way home and get them into your freezer as soon as you arrive.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I store serum eye drops?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Store bottles in the freezer at -4°F, except the one bottle you are currently using — that one stays in the refrigerator.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do serum tears last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Frozen bottles are good for up to 1 year. Once thawed, a bottle is good for 30 days in the refrigerator.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does one 5mL bottle last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At one drop per eye, four times a day, a 5mL bottle lasts about 12 to 15 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I throw a bottle away?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Discard a bottle if it has been left out at room temperature or you suspect it may be contaminated. When in doubt, call us and we will guide you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What concentration are the drops?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical concentration is 20 to 30 percent. Your doctor decides what is right for your condition.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I travel with serum tears?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Carry the bottle you are using in a small cooler with an ice pack, and keep spare frozen bottles packed cold. Never leave them in a hot car.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a requisition or special paperwork?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Serum tears are not FDA regulated, so no requisition is required for concentrations up to 30% — just call us to get started.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my serum tears stop working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are usually three causes: the drops have degraded (check storage and dates), your condition has changed, or something else is irritating your eyes. Call us and we will help you sort through it with your doctor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I stop my other eye drops?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask your doctor. Do not stop any prescribed drops on your own — your doctor will tell you what to continue and what to taper.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there side effects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are no known side effects, since the drops are made from your own blood.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use serum tears during chemotherapy or with other diseases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is a question for your doctor, who knows your full medical picture. Bring it up at your next visit before starting.',
      },
    },
  ],
}

const howItWorks = [
  'No prescription needed for up to 30% serum tears — just call us to get started',
  'You come in for a simple blood draw — drink plenty of water beforehand',
  'Your blood is processed into sterile eye drops at the prescribed concentration',
  'Pick up your drops in a cooler with an ice pack, with clear storage instructions',
]

const faqs = [
  {
    question: 'How do I prepare for my serum tears blood draw?',
    answer:
      'Drink plenty of water before your appointment. Being well hydrated makes the blood draw faster and easier.',
  },
  {
    question: 'How should I get my serum tears home?',
    answer:
      'We provide a cooler with an ice pack at pickup. Keep the bottles cold on the way home and get them into your freezer as soon as you arrive.',
  },
  {
    question: 'How do I store serum eye drops?',
    answer:
      'Store bottles in the freezer at -4°F, except the one bottle you are currently using — that one stays in the refrigerator.',
  },
  {
    question: 'How long do serum tears last?',
    answer:
      'Frozen bottles are good for up to 1 year. Once thawed, a bottle is good for 30 days in the refrigerator.',
  },
  {
    question: 'How long does one 5mL bottle last?',
    answer:
      'At one drop per eye, four times a day, a 5mL bottle lasts about 12 to 15 days.',
  },
  {
    question: 'When should I throw a bottle away?',
    answer:
      'Discard a bottle if it has been left out at room temperature or you suspect it may be contaminated. When in doubt, call us and we will guide you.',
  },
  {
    question: 'What concentration are the drops?',
    answer:
      'A typical concentration is 20 to 30 percent. Your doctor decides what is right for your condition.',
  },
  {
    question: 'Can I travel with serum tears?',
    answer:
      'Yes. Carry the bottle you are using in a small cooler with an ice pack, and keep spare frozen bottles packed cold. Never leave them in a hot car.',
  },
  {
    question: 'Do I need a requisition or special paperwork?',
    answer:
      'No. Serum tears are not FDA regulated, so no requisition is required for concentrations up to 30% — just call us to get started.',
  },
  {
    question: 'What if my serum tears stop working?',
    answer:
      'There are usually three causes: the drops have degraded (check storage and dates), your condition has changed, or something else is irritating your eyes. Call us and we will help you sort through it with your doctor.',
  },
  {
    question: 'Should I stop my other eye drops?',
    answer:
      'Ask your doctor. Do not stop any prescribed drops on your own — your doctor will tell you what to continue and what to taper.',
  },
  {
    question: 'Are there side effects?',
    answer:
      'There are no known side effects, since the drops are made from your own blood.',
  },
  {
    question: 'Can I use serum tears during chemotherapy or with other diseases?',
    answer:
      'That is a question for your doctor, who knows your full medical picture. Bring it up at your next visit before starting.',
  },
]

export default function SerumTearsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">Serum eye drops for severe dry eye</div>
            <h1 className="page-heading">Serum Eye Tears in Tarpon Springs</h1>
            <p className="page-intro">
              Autologous serum tears — sterile eye drops made from your own blood — for people
              whose dry eye has not responded to regular drops. Prepared through Anclote Pharmacy,
              with your blood draw done right here at ARCpoint Labs in Tarpon Springs.
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
                  <Droplets className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">What Serum Tears Are</h2>
                <p className="body-copy">
                  Serum tears, also called autologous serum eye drops, are made from a small sample
                  of your own blood. The serum is separated and diluted into sterile eye drops at
                  the concentration your doctor prescribes — typically 20 to 30 percent. Because
                  the drops come from your own body, they closely match your natural tears and
                  carry healing factors that artificial tears do not have.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Eye className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Who They Are For</h2>
                <p className="body-copy">
                  Doctors prescribe serum tears for severe or chronic dry eye — when over-the-counter
                  drops and prescription drops like Restasis or Xiidra have not been enough. They
                  are commonly used for dry eye after LASIK, graft-versus-host disease, Sjogren&apos;s
                  syndrome, and other conditions where the eye surface needs more than lubrication.
                  There are no known side effects, since the drops are made from your own blood.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="mb-6 text-center text-3xl font-semibold text-slate-950">
                Watch: Serum Eye Tears, Explained
              </h2>
              <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/RB5Zi9eVcXE"
                    title="Serum Eye Tears — Patient Guide"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 tint-panel">
              <h2 className="mb-6 text-3xl font-semibold text-slate-950">How It Works</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {howItWorks.map((item) => (
                  <div key={item} className="flex items-start rounded-2xl bg-white p-5 shadow-sm">
                    <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                    <span className="body-copy">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 body-copy">
                No requisition or special paperwork is needed — serum tears are not FDA regulated,
                so no prescription is required for concentrations up to 30%.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
              <div className="card">
                <div className="feature-icon">
                  <Snowflake className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Storage Made Simple</h2>
                <p className="body-copy">
                  Keep your bottles in the freezer at -4°F, except the one bottle in use — that
                  one stays in the refrigerator. Frozen bottles are good for a year; a thawed
                  bottle is good for 30 days refrigerated. We send you home with a cooler and ice
                  pack so your drops stay cold from our door to yours.
                </p>
              </div>
              <div className="dark-panel">
                <ShieldCheck className="mb-5 h-10 w-10 text-primary-200" />
                <h2 className="mb-4 text-3xl font-semibold">Talk to our pharmacist</h2>
                <p className="text-slate-300">
                  Questions about serum tears, your prescription, storage, or refills? Call us —
                  we will walk you through it.
                </p>
<p className="mt-4 text-lg font-semibold text-white">
  

                 Call today for your price on a 6-month supply.</p>
  .
             
            
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
            <h2 className="section-title text-center">Serum Tears Patient Fact Sheet</h2>
            <p className="mx-auto mb-10 max-w-2xl text-center body-copy">
              Everything patients ask us about serum eye drops — preparing for your blood draw,
              storing your bottles, traveling with them, and what to do if something seems off.
            </p>
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
