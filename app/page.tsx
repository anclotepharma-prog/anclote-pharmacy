import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  Clock3,
  Droplets,
  Fingerprint,
  HeartHandshake,
  MapPin,
  PackageCheck,
  Phone,
  Pill,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Truck,
  UserRound,
  UsersRound,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Independent Pharmacy in Tarpon Springs, FL | Anclote Pharmacy',
  description:
    'Locally owned pharmacy serving Tarpon Springs since 2012. Prescriptions, immunizations, medical equipment and Medicare support. Call 727-944-5800.',
  alternates: {
    canonical: '/',
  },
}

const benefits = [
  'Fast prescription transfers',
  'Most insurance plans accepted',
  'Local delivery available',
  'A pharmacist you can reach',
]

const careOptions = [
  {
    href: '/refill',
    title: 'Refill or transfer',
    description: 'Request your next refill or move prescriptions from another pharmacy with local help.',
    action: 'Manage prescriptions',
    icon: Pill,
    tone: 'bg-[#e9f5f1]',
  },
  {
    href: '/services/delivery',
    title: 'Delivery and packaging',
    description: 'Ask about eligible delivery, medication synchronization, and packets sorted by dose time.',
    action: 'Explore convenience services',
    icon: PackageCheck,
    tone: 'bg-[#edf3fb]',
  },
  {
    href: '/immunizations',
    title: 'Vaccines and wellness',
    description: 'Walk-in immunizations, medication reviews, and practical support for everyday health needs.',
    action: 'View wellness services',
    icon: Syringe,
    tone: 'bg-[#fff4dc]',
  },
]

const services = [
  { href: '/services/pharmacy', title: 'Prescription services', icon: Pill },
  { href: '/immunizations', title: 'Immunizations', icon: Syringe },
  { href: '/services/durable-medical-equipment', title: 'Medical equipment', icon: Stethoscope },
  { href: '/services/medical-weight-loss', title: 'Medical weight loss', icon: HeartHandshake },
  { href: '/services/serum-tears', title: 'Serum tears', icon: Droplets },
  { href: '/services/telehealth', title: 'Telehealth support', icon: UserRound },
  { href: '/services/long-term-care', title: 'Long-term care', icon: UsersRound },
]

const steps = [
  {
    title: 'Tell us what you need',
    description: 'Call, send a refill request, or ask your prescriber to send your prescription to Anclote Pharmacy.',
  },
  {
    title: 'We coordinate the details',
    description: 'Our local team works with your prescriber, insurance plan, and previous pharmacy when needed.',
  },
  {
    title: 'Pick up or ask about delivery',
    description: 'We prepare your medication, answer your questions, and help keep future refills on schedule.',
  },
]

const testimonials = [
  {
    quote: 'The owner is very compassionate and caring. He treated us like we matter, not like we are just a number.',
    name: 'Derek Arnold',
  },
  {
    quote: 'CK is an amazing pharmacist. He is really knowledgeable and wants to help people achieve a healthy lifestyle.',
    name: 'Roseanne Stagg',
  },
  {
    quote: 'Mr. Chetan Shah was very professional and provided quick service. I recommend this place.',
    name: 'Samantha Delint',
  },
]

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-[#f1f7f4]">
        <div className="container mx-auto grid min-h-[650px] items-center gap-10 px-4 py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(460px,1.1fr)] lg:py-16">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
              Independent pharmacy care since 2012
            </div>
            <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] text-[#14243b] sm:text-6xl lg:text-7xl">
              Your health, made simpler.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
              Prescriptions, vaccines, medical equipment, and real pharmacist support from a local
              team that knows Tarpon Springs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/new-patient" className="btn-primary gap-2 px-7">
                Become a Patient <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/refill" className="btn-secondary px-7">
                Refill or Transfer
              </Link>
            </div>
            <div className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
              <Link href="/services/medicare-open-enrollment" className="inline-flex items-center gap-2 text-primary-800 underline decoration-primary-300 underline-offset-4">
                Check your Medicare and insurance support options <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-2 text-slate-600">
                <ShieldCheck className="h-4 w-4 text-primary-700" />
                Your health information is always handled privately.
              </div>
            </div>
          </div>

          <div className="relative min-h-[430px] sm:min-h-[520px]">
            <div className="absolute inset-x-[8%] bottom-[4%] top-[8%] rounded-[48%] bg-[#8bc7b8]" />
            <div className="absolute left-[3%] top-[12%] h-20 w-20 rounded-full bg-[#f6c85f] sm:h-28 sm:w-28" />
            <div className="absolute bottom-[10%] right-[3%] h-24 w-24 rounded-full bg-accent-200 sm:h-36 sm:w-36" />
            <div className="absolute inset-x-[12%] bottom-0 top-0 overflow-hidden rounded-t-[48%] bg-white shadow-[0_30px_80px_-45px_rgba(15,35,55,0.5)]">
              <Image
                src="/images/team/chetan-shah-pharmacist.png"
                alt="Chetan Shah, pharmacist at Anclote Pharmacy"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 90vw"
                className="object-cover object-[62%_center]"
              />
            </div>
            <div className="absolute bottom-5 left-0 max-w-[250px] border border-slate-200 bg-white p-4 shadow-[0_18px_45px_-24px_rgba(15,35,55,0.45)] sm:left-4 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-800">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-[#14243b]">Meet Chetan Shah</p>
                  <p className="text-sm text-slate-500">Your local pharmacist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container mx-auto grid px-4 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={benefit} className={`flex items-center gap-3 py-5 sm:px-5 ${index > 0 ? 'sm:border-l sm:border-slate-200' : ''}`}>
              <CheckCircle2 className="h-5 w-5 shrink-0 fill-primary-200 text-primary-800" />
              <span className="text-sm font-bold text-slate-700">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f1edf6] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">Start with what you need today.</h2>
            <p className="section-subtitle">
              Clear next steps for prescriptions, everyday convenience, and preventive care.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {careOptions.map((option) => {
              const Icon = option.icon
              return (
                <Link key={option.href} href={option.href} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-[0_22px_55px_-35px_rgba(15,35,55,0.45)]">
                  <div className={`flex h-44 items-center justify-center ${option.tone}`}>
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/80 bg-white/75 text-primary-800 shadow-sm">
                      <Icon className="h-11 w-11" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-[#14243b]">{option.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{option.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-bold text-primary-800">
                      {option.action} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf6fb] py-20 md:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-xl py-10">
            <div className="absolute inset-0 rounded-[48%] bg-[#b8deea]" />
            <div className="relative mx-auto max-w-md rotate-[-3deg] rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_28px_65px_-38px_rgba(15,35,55,0.45)]">
              <div className="flex items-start justify-between border-b border-slate-200 pb-7">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary-700">Anclote Pharmacy</p>
                  <p className="mt-3 text-2xl font-bold text-[#14243b]">Insurance support</p>
                </div>
                <ShieldCheck className="h-10 w-10 text-primary-700" />
              </div>
              <div className="mt-7 grid grid-cols-2 gap-5 text-sm">
                <div><p className="text-slate-400">Member</p><p className="mt-1 font-bold text-slate-700">LOCAL PATIENT</p></div>
                <div><p className="text-slate-400">Support</p><p className="mt-1 font-bold text-slate-700">RX + MEDICARE</p></div>
              </div>
              <div className="mt-8 flex items-center gap-2 rounded-xl bg-primary-50 px-4 py-3 text-sm font-bold text-primary-800">
                <Check className="h-4 w-4" /> We help explain the next step
              </div>
            </div>
          </div>
          <div className="max-w-xl">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-accent-700">Insurance and Medicare</div>
            <h2 className="section-title">Most insurance plans accepted.</h2>
            <p className="section-subtitle mx-0">
              We help patients understand coverage, coordinate prescriptions, and get straightforward
              answers about Medicare options without sending them through a call-center maze.
            </p>
            <Link href="/services/medicare-open-enrollment" className="btn-primary mt-8 gap-2">
              Explore Medicare Support <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-700">Local convenience</div>
            <h2 className="section-title">Skip the pharmacy run when life gets busy.</h2>
            <p className="section-subtitle mx-0">
              Ask about prescription delivery, synchronized refill dates, and multi-dose packaging.
              Our team coordinates the details and keeps you informed along the way.
            </p>
            <ul className="mt-7 space-y-3 text-base font-semibold text-slate-700">
              {['Eligible local prescription delivery', 'Refills aligned to one monthly date', 'Packets organized by date and dose time'].map((item) => (
                <li key={item} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary-700" />{item}</li>
              ))}
            </ul>
            <Link href="/services/delivery" className="btn-primary mt-8 gap-2">
              See Delivery Options <Truck className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-2xl bg-[#f3f5ee]">
            <Image src="/images/pharmacy/pharmacy-customer.jpg" alt="Personal pharmacy service at Anclote Pharmacy" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/95 p-5 shadow-lg backdrop-blur">
              <div className="flex items-center gap-3"><Clock3 className="h-5 w-5 text-primary-700" /><p className="font-bold text-[#14243b]">Monday-Friday, 9:00am-5:00pm</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff4dc] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">How switching to Anclote works.</h2>
            <p className="section-subtitle">Most prescription transfers begin with one quick phone call.</p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#14243b] font-display text-2xl font-bold text-white">{index + 1}</div>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.03em] text-[#14243b]">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="tel:727-944-5800" className="btn-primary gap-2"><Phone className="h-4 w-4" /> Call (727) 944-5800</a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-700">More ways we can help</div>
              <h2 className="section-title">Care for every season of life.</h2>
            </div>
            <Link href="/services/pharmacy" className="inline-flex items-center gap-2 font-bold text-primary-800">View all pharmacy services <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.href} href={service.href} className="group flex min-h-40 items-center gap-5 bg-white p-6 transition hover:bg-primary-50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-800"><Icon className="h-6 w-6" /></div>
                  <div className="flex-1"><h3 className="text-lg font-bold text-[#14243b]">{service.title}</h3><span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-primary-800">Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span></div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#14243b] py-20 text-white md:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-[1fr_0.8fr]">
          <div className="max-w-2xl">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-200">LiveScan at Anclote</div>
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.04em] md:text-6xl">Fingerprinting without another errand.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">AHCA, FDLE, licensing, employment, and FD-258 fingerprint services are available through the same convenient Tarpon Springs location.</p>
            <Link href="/livescan" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#f6c85f] px-6 py-3 font-bold text-[#14243b] transition hover:bg-[#f9d67f]">Explore LiveScan <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-full bg-primary-600/35 p-12">
            <Image src="/images/livescan/fingerprint-thumbprint.png" alt="Digital fingerprint for LiveScan services" width={520} height={520} className="h-full w-full object-contain drop-shadow-[0_24px_35px_rgba(0,0,0,0.3)]" />
            <div className="absolute bottom-5 right-0 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#14243b] shadow-xl"><Fingerprint className="h-5 w-5 text-primary-700" />Book locally</div>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf6fb] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <div className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
                  Telehealth with local follow-through
                </div>
                <h2 className="section-title">Meet your telehealth provider.</h2>
                <p className="section-subtitle mx-0">
                  Connect with an Internal Medicine provider online, then ask that eligible
                  prescriptions be sent to Anclote Pharmacy for local medication support.
                </p>
              </div>
              <Link href="/services/telehealth" className="btn-primary shrink-0 gap-2">
                Telehealth Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_22px_55px_-38px_rgba(15,35,55,0.45)]">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-slate-100 px-4 py-3">
                <div className="flex min-w-0 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm sm:min-w-80">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-primary-700" />
                  <span className="truncate">kinchitshahmd.com</span>
                </div>
                <a
                  href="https://kinchitshahmd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden text-sm font-bold text-primary-800 sm:inline-flex sm:items-center sm:gap-2"
                >
                  Open full website <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <iframe
                src="/api/telehealth-provider"
                title="Kinchit Shah MD telehealth provider profile"
                className="h-[640px] w-full bg-white md:h-[760px]"
                referrerPolicy="strict-origin-when-cross-origin"
              />

              <div className="flex items-start gap-3 border-t border-slate-200 bg-[#fff4dc] p-5 text-sm leading-6 text-slate-700 md:px-8">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" />
                <p>
                  Kinchit Shah MD is a separate provider. Appointment information is handled by
                  the provider and is not collected through Anclote Pharmacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef6f2] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center"><h2 className="section-title">What local patients are saying.</h2></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-2xl border border-slate-200 bg-white p-7">
                <div className="mb-5 flex gap-1 text-[#d89b18]" aria-label="Five star review">★★★★★</div>
                <blockquote className="text-lg font-semibold leading-8 text-[#14243b]">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-6 text-sm font-bold text-slate-500">{testimonial.name}, Anclote patient</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-700">Visit Anclote Pharmacy</div>
            <h2 className="section-title">Your neighborhood pharmacy is right here.</h2>
            <p className="section-subtitle mx-0">Serving Tarpon Springs, Palm Harbor, Holiday, and nearby communities with the personal follow-through only a local team can provide.</p>
          </div>
          <div className="rounded-2xl bg-[#f1f7f4] p-7">
            <div className="flex items-start gap-4"><MapPin className="mt-1 h-6 w-6 shrink-0 text-primary-700" /><div><p className="font-bold text-[#14243b]">1933 N Pinellas Ave</p><p className="text-slate-600">Tarpon Springs, FL 34689</p></div></div>
            <div className="mt-5 flex items-start gap-4"><Clock3 className="mt-1 h-6 w-6 shrink-0 text-primary-700" /><div><p className="font-bold text-[#14243b]">Monday-Friday</p><p className="text-slate-600">9:00am-5:00pm</p></div></div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href="https://maps.google.com/?q=1933+N+Pinellas+Ave+Tarpon+Springs+FL+34689" target="_blank" rel="noreferrer" className="btn-primary flex-1">Get Directions</a><a href="tel:727-944-5800" className="btn-secondary flex-1">Call the Pharmacy</a></div>
          </div>
        </div>
      </section>
    </>
  )
}
