'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import {
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  Landmark,
  Lock,
  Mail,
  Phone,
  Scale,
  Shield,
  X,
  Zap,
} from 'lucide-react'

type OriService = {
  code: string
  title: string
}

type LiveScanService = {
  id: number
  title: string
  description: string
  category: string
  icon: typeof Shield
  oriServices?: OriService[]
}

type BookingDetails = {
  location: string
  firstName: string
  lastName: string
  email: string
  phone: string
  preferredDate: string
  preferredTime: string
  notes: string
}

type HelcimWindow = Window & {
  appendHelcimPayIframe?: (checkoutToken: string) => void
}

const services: LiveScanService[] = [
  {
    id: 1,
    title: 'AHCA and FL Department of Health',
    description: 'Healthcare administration and health department fingerprinting services.',
    category: 'Healthcare',
    icon: HeartPulse,
    oriServices: [
      { code: 'EDOH4420Z', title: 'RN by Endorsement (with Photo)' },
      { code: 'EDOH2550Z', title: 'RN/LPN by Exam-Initial (with Photo)' },
      { code: 'EDOH0380Z', title: 'CNA Applicants (with Photo)' },
      { code: 'EAHCA020Z', title: 'AHCA ALL (with Photo)' },
      { code: 'EDOH4410Z', title: 'LPN by Endorsement (with Photo)' },
      { code: 'EDOH4570Z', title: 'Dietetics/Nutrition (with Photo)' },
      { code: 'EDOH4510Z', title: 'Anesthesiologist Assistant (with Photo)' },
      { code: 'EDOH4530Z', title: 'Clinical Lab Personnel (with Photo)' },
      { code: 'EDOH4550Z', title: 'Clinical Social Work (with Photo)' },
      { code: 'EDOH4500Z', title: 'Acupuncture (with Photo)' },
      { code: 'EDOH2017Z', title: 'Podiatric Physician (with Photo)' },
      { code: 'EDOH2016Z', title: 'Chiropractic Physician (with Photo)' },
      { code: 'EDOH4690Z', title: 'Physical Therapy (with Photo)' },
      { code: 'EDOH4560Z', title: 'Dentistry (with Photo)' },
      { code: 'EDOH2015Z', title: 'Osteopathic Physician (with Photo)' },
      { code: 'EDOH4740Z', title: 'Speech-Language Pathology & Audiology (with Photo)' },
      { code: 'EDOH3415Z', title: 'Orthotist & Prosthetist (with Photo)' },
      { code: 'EDOH4590Z', title: 'Hearing Aid Specialist (with Photo)' },
      { code: 'EDOH4520Z', title: 'Athletic Training (with Photo)' },
      { code: 'EDOH4720Z', title: 'Respiratory Care (with Photo)' },
      { code: 'EDOH4580Z', title: 'Electrolysis (with Photo)' },
      { code: 'EDOH4610Z', title: 'Medical Physicist (with Photo)' },
      { code: 'EDOH4600Z', title: 'Massage Therapy (with Photo)' },
      { code: 'EDOH4660Z', title: 'Opticianry (with Photo)' },
      { code: 'EDOH4640Z', title: 'Nursing Home Admin (with Photo)' },
      { code: 'EDOH4670Z', title: 'Optometry (with Photo)' },
      { code: 'EDOH4680Z', title: 'Pharmacist (with Photo)' },
      { code: 'FL924890Z', title: 'DOH - Office of Medical Marijuana Use' },
      { code: 'EDOH4630Z', title: 'Naturopath (with Photo)' },
      { code: 'EDOH2014Z', title: 'Physician/Medical Doctor (with Photo)' },
      { code: 'EDOH4620Z', title: 'Midwifery (with Photo)' },
      { code: 'EDOH4710Z', title: 'Psychology (with Photo)' },
      { code: 'EDOH4700Z', title: 'Physician Assistant (with Photo)' },
      { code: 'EDOH4540Z', title: 'Clinical Nurse Specialist (with Photo)' },
      { code: 'EDOH4650Z', title: 'Occupational Therapy (with Photo)' },
      { code: 'EAHCA790Z', title: 'Managed Care (with Photo)' },
      { code: 'EAHCA013Z', title: 'Florida Medicaid Providers and Enrollees (with Photo)' },
      { code: 'EDOH4730Z', title: 'School Psychology (with Photo)' },
    ],
  },
  {
    id: 2,
    title: 'Vocational Rehabilitation',
    description: 'Rehabilitation services background checks and compliance.',
    category: 'Rehabilitation',
    icon: ClipboardCheck,
    oriServices: [
      { code: 'EDOEVR100', title: 'Vendor Registration Employee (with Photo)' },
      { code: 'EDOEVR200', title: 'Independent Living Employee (with Photo)' },
      { code: 'VDOEVR100', title: 'Vendor Registration Volunteer (with Photo)' },
      { code: 'VDOEVR200', title: 'Independent Living Volunteer (with Photo)' },
    ],
  },
  {
    id: 3,
    title: 'FL Highway Safety and Motor Vehicles',
    description: "Driver's license and motor vehicle related fingerprinting.",
    category: 'Transportation',
    icon: BadgeCheck,
    oriServices: [
      { code: 'FL924360Z', title: 'CDL School Instructor License' },
      { code: 'FL921700Z', title: 'Auto Dealer License' },
    ],
  },
  {
    id: 4,
    title: 'Florida OFR Office of Financial Regulation',
    description: 'Financial services licensing and compliance.',
    category: 'Financial',
    icon: Landmark,
    oriServices: [
      { code: 'FL921250Z', title: 'Division of Securities' },
      { code: 'FL737111Z', title: 'Florida Mortgage Loan Originator License' },
      { code: 'FL921050Z', title: 'Florida Mortgage Broker & Lender License' },
      { code: 'FL921060Z', title: 'Insurance Agent License' },
    ],
  },
  {
    id: 5,
    title: 'Florida Dept of Juvenile Justice',
    description: 'Juvenile justice system background checks.',
    category: 'Justice',
    icon: Scale,
    oriServices: [
      { code: 'EDJJ1940Z', title: 'Department of Juvenile Justice Employee (with Photo)' },
      { code: 'VDJJ1940Z', title: 'Department of Juvenile Justice Volunteer (with Photo)' },
    ],
  },
  {
    id: 6,
    title: 'Florida Department of Children and Families',
    description: 'Childcare and family services compliance.',
    category: 'Family Services',
    icon: Shield,
    oriServices: [
      { code: 'EDCFMH20Z', title: 'Mental Health Providers (with Photo)' },
      { code: 'EDCFCC40Z', title: 'Child Care Providers - New (with Photo)' },
      { code: 'EDCFGH50Z', title: 'Child Welfare Group Home Providers - New (with Photo)' },
      { code: 'EDCFGN10Z', title: 'General DCF (with Photo)' },
      { code: 'EDCFSC30Z', title: 'Summer Camp (with Photo)' },
    ],
  },
  {
    id: 7,
    title: 'FL Department of Revenue',
    description: 'Revenue department licensing and compliance.',
    category: 'Government',
    icon: Landmark,
    oriServices: [{ code: 'FL921650Z', title: 'Second-Hand Dealer License' }],
  },
  {
    id: 8,
    title: 'FL Department of Education',
    description: 'Educational institution staff background checks.',
    category: 'Education',
    icon: GraduationCap,
    oriServices: [
      { code: 'EDOEPUBS1', title: 'Teacher Certification (with Photo)' },
      { code: 'EDOEPUBS0', title: 'General Employment for Public School (with Photo)' },
      { code: 'EDOEPUBS2', title: 'Contractor/vendor (with Photo)' },
      { code: 'VDOEPUBS3', title: 'Volunteers (with Photo)' },
      { code: 'EDOEPRIV0', title: 'Private School Employees, Contractors and Vendors (with Photo)' },
      { code: 'EDOEPRIV1', title: 'Private Schools Owners and Operators (with Photo)' },
      { code: 'VDOEPRIV3', title: 'Private School Volunteers (with Photo)' },
    ],
  },
  {
    id: 9,
    title: 'Department of Elder Affairs',
    description: 'Elder care services and compliance.',
    category: 'Healthcare',
    icon: HeartPulse,
    oriServices: [{ code: 'EDOEA310Z', title: 'Department of Elder Affairs (with Photo)' }],
  },
  {
    id: 10,
    title: 'Agency For Persons With Disabilities',
    description: 'Disability services background verification.',
    category: 'Healthcare',
    icon: BadgeCheck,
    oriServices: [
      { code: 'EAPDFC20Z', title: 'APD CDC (with Photo)' },
      { code: 'EAPDGN10Z', title: 'APD General (with Photo)' },
    ],
  },
  {
    id: 11,
    title: 'The County Clerks',
    description: 'County clerk office requirements and compliance.',
    category: 'Government',
    icon: Building2,
    oriServices: [
      { code: 'FL923920Z', title: 'Marion County Name Change' },
      { code: 'FL923600Z', title: 'Citrus County Name Change' },
      { code: 'FL924030Z', title: 'Pinellas County Name Change' },
      { code: 'FL923790Z', title: 'Hillsborough County Name Change' },
      { code: 'FL009044Z', title: 'Non-Professional Guardianship' },
    ],
  },
  {
    id: 12,
    title: 'DBPR - FL Department of Business and Professional Regulation',
    description: 'Business and professional licensing services.',
    category: 'Business',
    icon: Briefcase,
    oriServices: [
      { code: 'FL925090Z', title: 'Florida Supreme Court - Mediators' },
      { code: 'FL920010Z', title: 'Real Estate Sales & Brokers' },
      { code: 'FL923400Z', title: 'Construction' },
      { code: 'FL920150Z', title: 'Alcoholic Beverages and Tobacco' },
      { code: 'FL924250Z', title: 'Home Inspectors' },
      { code: 'FL921932Z', title: 'Community Association Managers' },
      { code: 'FL737127Z', title: 'FL Court Dispute Resolution Center - Mediators' },
      { code: 'FL922050Z', title: 'Real Estate Appraisers' },
      { code: 'FL924260Z', title: 'Mold Remediation or Assessment' },
      { code: 'FL921880Z', title: 'Employee Leasing' },
      { code: 'FL920190Z', title: 'Florida Board of Bar Examiners' },
      { code: 'FL925184Z', title: 'Pari-Mutuel Occupational Licenses' },
      { code: 'FL925186Z', title: 'Cardroom Occupational Licenses' },
    ],
  },
  {
    id: 13,
    title: 'Department of Agriculture & Consumer Services',
    description: 'Agriculture licensing and consumer protection.',
    category: 'Government',
    icon: Building2,
  },
  {
    id: 14,
    title: 'DOA Security, PI, and Firearm Instructor',
    description: 'Security, private investigator, and firearm instructor licensing.',
    category: 'Security',
    icon: Lock,
  },
]

const solutions = [
  {
    title: 'LiveScan Fingerprinting',
    description: 'Digital fingerprinting for Florida agencies, employment, licensing, and certification.',
    icon: Shield,
    features: ['Fast processing', 'High-quality capture', 'Secure transmission', 'Agency-ready codes'],
  },
  {
    title: 'Background Checks',
    description: 'Support for background screening requirements tied to employment and professional licensing.',
    icon: ClipboardCheck,
    features: ['Criminal history', 'Licensing support', 'Employment screening', 'Compliance guidance'],
  },
  {
    title: 'Identity Verification',
    description: 'Reliable identity services for applicants, professionals, businesses, and organizations.',
    icon: BadgeCheck,
    features: ['Document review', 'Photo ID guidance', 'ORI matching', 'Clear instructions'],
  },
]

const emptyBookingDetails: BookingDetails = {
  location: 'Tarpon Springs',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  preferredDate: '',
  preferredTime: '',
  notes: '',
}

const pricingByOriCode: Record<string, number> = {
  EDOH4420Z: 85,
  EDOEVR100: 75,
  FL924360Z: 80,
  FL921700Z: 80,
}

const buildMailto = (
  selectedService: LiveScanService,
  selectedOri: OriService | null,
  details: BookingDetails,
  priceAmount: number,
  paymentTransactionId: string,
) => {
  const subject = `LiveScan booking request - ${selectedOri?.code || selectedService.category}`
  const body = [
    'LiveScan booking request',
    '',
    `Service category: ${selectedService.title}`,
    selectedOri ? `ORI code: ${selectedOri.code}` : 'ORI code: Please confirm',
    selectedOri ? `Specific service: ${selectedOri.title}` : `Specific service: ${selectedService.description}`,
    `Location: ${details.location}`,
    '',
    `Name: ${details.firstName} ${details.lastName}`.trim(),
    `Email: ${details.email}`,
    `Phone: ${details.phone}`,
    `Preferred date: ${details.preferredDate || 'Flexible'}`,
    `Preferred time: ${details.preferredTime || 'Flexible'}`,
    `Payment amount: $${priceAmount.toFixed(2)} USD`,
    `Payment transaction ID: ${paymentTransactionId || 'Paid - ID unavailable'}`,
    '',
    `Notes: ${details.notes || 'None'}`,
  ].join('\n')

  return `mailto:anclotepharma@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const timeSlots = [
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
]

const generateCalendarDays = (location: string) => {
  const days = []
  const today = new Date()

  for (let index = 0; index < 30; index += 1) {
    const date = new Date(today)
    date.setDate(today.getDate() + index)

    const dayOfWeek = date.getDay()
    const isOpenDay = location === 'Tampa' ? dayOfWeek >= 1 && dayOfWeek <= 5 : dayOfWeek >= 1 && dayOfWeek <= 5

    if (isOpenDay) {
      days.push({
        value: date.toISOString().slice(0, 10),
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        day: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        isToday: index === 0,
      })
    }
  }

  return days.slice(0, 14)
}

export default function SuncoastLiveScanPortal() {
  const [selectedService, setSelectedService] = useState<LiveScanService | null>(null)
  const [selectedOri, setSelectedOri] = useState<OriService | null>(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [bookingStep, setBookingStep] = useState(1)
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>(emptyBookingDetails)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const [paymentError, setPaymentError] = useState('')
  const [paymentComplete, setPaymentComplete] = useState(false)
  const [paymentTransactionId, setPaymentTransactionId] = useState('')
  const priceAmount = selectedOri?.code ? pricingByOriCode[selectedOri.code] ?? 65 : 65

  const mailtoUrl = useMemo(() => {
    if (!selectedService) return ''
    return buildMailto(
      selectedService,
      selectedOri,
      bookingDetails,
      priceAmount,
      paymentTransactionId,
    )
  }, [bookingDetails, paymentTransactionId, priceAmount, selectedOri, selectedService])

  const openService = (service: LiveScanService) => {
    setSelectedService(service)
    setSelectedOri(null)
    setBookingStep(1)
    setIsBookingOpen(!service.oriServices?.length)
  }

  const closeModal = () => {
    setSelectedService(null)
    setSelectedOri(null)
    setIsBookingOpen(false)
    setBookingStep(1)
    setBookingDetails(emptyBookingDetails)
    setIsProcessingPayment(false)
    setPaymentError('')
    setPaymentComplete(false)
    setPaymentTransactionId('')
  }

  const handleBookingSubmit = () => {
    if (!mailtoUrl) return
    window.location.href = mailtoUrl
    closeModal()
  }

  const openHelcimPay = async () => {
    if (isProcessingPayment || paymentComplete) return

    setPaymentError('')
    setIsProcessingPayment(true)

    try {
      const response = await fetch('/api/helcim/initialize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentType: 'purchase',
          amount: priceAmount,
          currency: 'USD',
          confirmationScreen: true,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data?.checkoutToken) {
        throw new Error(data?.error || 'Unable to start Helcim checkout')
      }

      const helcimWindow = window as HelcimWindow
      if (typeof helcimWindow.appendHelcimPayIframe !== 'function') {
        throw new Error('HelcimPay script not loaded. Please refresh and try again.')
      }
      const appendHelcimPayIframe = helcimWindow.appendHelcimPayIframe

      await new Promise<void>((resolve, reject) => {
        const eventName = `helcim-pay-js-${data.checkoutToken}`
        const timeoutId = window.setTimeout(() => {
          window.removeEventListener('message', handlePaymentMessage)
          reject(new Error('Payment session timed out. Please try again.'))
        }, 5 * 60 * 1000)

        function handlePaymentMessage(event: MessageEvent) {
          if (event?.data?.eventName !== eventName) return

          const status = event?.data?.eventStatus
          const rawMessage = event?.data?.eventMessage

          if (status === 'SUCCESS') {
            let transactionId = ''
            try {
              const parsed = rawMessage ? JSON.parse(rawMessage) : null
              transactionId = String(parsed?.data?.transactionId || '')
            } catch {
              transactionId = ''
            }

            setPaymentTransactionId(transactionId)
            setPaymentComplete(true)
            setBookingStep(5)

            window.clearTimeout(timeoutId)
            window.removeEventListener('message', handlePaymentMessage)
            resolve()
            return
          }

          if (status === 'ABORTED') {
            window.clearTimeout(timeoutId)
            window.removeEventListener('message', handlePaymentMessage)
            reject(new Error('Payment was declined or cancelled.'))
            return
          }

          if (status === 'ERROR') {
            window.clearTimeout(timeoutId)
            window.removeEventListener('message', handlePaymentMessage)
            reject(new Error('Payment failed. Please try again.'))
          }
        }

        window.addEventListener('message', handlePaymentMessage)
        appendHelcimPayIframe(data.checkoutToken)
      })
    } catch (error) {
      setPaymentError(String(error instanceof Error ? error.message : error))
    } finally {
      setIsProcessingPayment(false)
    }
  }

  const bookingSteps = ['Date', 'Time', 'Details', 'Payment', 'Request']
  const dateOptions = generateCalendarDays(bookingDetails.location)
  const selectedDateLabel = bookingDetails.preferredDate
    ? new Date(`${bookingDetails.preferredDate}T12:00:00`).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
    : ''
  const canContinueDetails = Boolean(
    bookingDetails.firstName &&
      bookingDetails.lastName &&
      bookingDetails.email &&
      bookingDetails.phone,
  )

  return (
    <section id="suncoast-livescan-portal" className="relative overflow-hidden bg-[#071a30] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(40,122,96,0.34),transparent_34%),radial-gradient(circle_at_88%_16%,rgba(54,116,176,0.2),transparent_30%),linear-gradient(145deg,#071a30_0%,#0b2341_58%,#102d38_100%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)] lg:items-center">
          <div>
            <div className="mb-6 inline-flex border-l-2 border-primary-300 pl-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary-100">
              Suncoast LiveScan now inside Anclote Pharmacy
            </div>
            <h2 className="max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.025em] md:text-7xl">
              Secure identity verification in Tampa and Tarpon Springs, Florida.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Professional fingerprinting services and background check support for healthcare,
              employment, licensing, legal, and agency requirements. Review the service categories
              below and start your booking request without leaving this website.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#livescan-services" className="btn-primary">
                Explore Services
              </a>
              <a href="tel:727-944-5800" className="btn-secondary border-white/15 bg-white/10 text-white hover:border-white/30 hover:bg-white/15 hover:text-white">
                <Phone className="mr-2 h-5 w-5" />
                Call 727-944-5800
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ['AHCA / FDLE support', Shield],
                ['Secure processing', Lock],
                ['Fast appointments', Zap],
              ].map(([label, Icon]) => {
                const TrustIcon = Icon as typeof Shield

                return (
                  <div key={label as string} className="border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-primary-50">
                    <TrustIcon className="mb-2 h-5 w-5 text-primary-200" />
                    {label as string}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.06] p-3 shadow-[0_40px_100px_-45px_rgba(0,0,0,0.95)]">
            <div className="relative overflow-hidden bg-white p-6 text-slate-950">
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary-50 blur-2xl" />
              <div className="absolute -bottom-16 left-4 h-36 w-36 rounded-full bg-accent-50 blur-2xl" />

              <div className="relative mb-6 overflow-hidden border border-slate-200 bg-gradient-to-br from-[#071a30] via-[#0b2341] to-[#174f40] p-5 shadow-[0_28px_70px_-45px_rgba(15,23,42,0.9)]">
                <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="relative mx-auto flex aspect-square max-w-[280px] items-center justify-center border border-white/10 bg-white/[0.06] p-5">
                  <Image
                    src="/images/livescan/fingerprint-thumbprint.png"
                    alt="Digital thumbprint graphic for LiveScan fingerprinting"
                    width={520}
                    height={520}
                    className="h-full w-full object-contain drop-shadow-[0_24px_45px_rgba(2,6,23,0.35)]"
                    priority={false}
                  />
                </div>
                <div className="relative mt-4 flex flex-wrap justify-center gap-2 text-xs font-semibold text-primary-50">
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                    Digital capture
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                    Agency-ready
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold">Get in and out quickly.</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Select your agency category, find the right ORI code, and send a booking request to
                the local team.
              </p>
              <div className="mt-6 space-y-3">
                {['AHCA Level 2 screening', 'FD-258 cards', 'Employment and licensing fingerprints'].map((item) => (
                  <div key={item} className="flex items-center gap-3 border-l-2 border-primary-200 bg-slate-50 px-4 py-3">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Our Solutions</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Comprehensive identity verification and background screening services to meet your
              specific requirements.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon

              return (
                <div key={solution.title} className="border border-white/10 bg-white/[0.06] p-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center bg-white text-primary-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-semibold">{solution.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{solution.description}</p>
                  <ul className="mt-5 space-y-3 text-sm text-slate-200">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <div id="livescan-services" className="mt-20 border border-white/10 bg-white p-6 text-slate-950 shadow-[0_40px_110px_-60px_rgba(0,0,0,0.9)] md:p-10">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
              LiveScan fingerprinting services
            </div>
            <h2 className="section-title">Choose your agency category.</h2>
            <p className="section-subtitle">
              Select a service card to view matching ORI codes or start a booking request.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => openService(service)}
                  className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-left transition duration-200 hover:-translate-y-px hover:border-primary-200 hover:bg-white hover:shadow-[0_20px_50px_-38px_rgba(15,23,42,0.5)]"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                  <div className="mt-5 text-sm font-semibold text-primary-700">
                    {service.oriServices?.length ? `View ${service.oriServices.length} ORI options` : 'Start booking request'}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="border border-white/10 bg-white/[0.06] p-7">
            <h3 className="text-2xl font-semibold">Why choose our LiveScan services?</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                'Convenient Tarpon Springs pharmacy location',
                'Advanced biometric LiveScan workflow',
                'Fast and efficient appointments',
                'State and federal compliance support',
              ].map((benefit) => (
                <div key={benefit} className="border-l-2 border-primary-300 bg-white/[0.06] p-4 text-sm leading-6 text-slate-200">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div className="border border-white/10 bg-white/[0.06] p-7">
            <h3 className="text-2xl font-semibold">Additional services</h3>
            <ul className="mt-6 space-y-4 text-slate-200">
              {[
                'FD-258 fingerprint cards',
                'Corporate and group account support',
                'Background check guidance',
                'Regulatory compliance support',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-200" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white text-slate-950 shadow-2xl">
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white/95 p-6 backdrop-blur">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
                  {isBookingOpen ? 'Booking request' : 'Select ORI service'}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{selectedService.title}</h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border border-slate-200 p-3 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                aria-label="Close LiveScan modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {!isBookingOpen ? (
              <div className="p-6 md:p-8">
                <p className="body-copy">
                  Select your specific service below. If you are unsure which ORI code applies, call
                  us and we will help you confirm before your appointment.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {selectedService.oriServices?.map((oriService) => (
                    <button
                      key={`${oriService.code}-${oriService.title}`}
                      type="button"
                      onClick={() => {
                        setSelectedOri(oriService)
                        setIsBookingOpen(true)
                        setBookingStep(1)
                      }}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-primary-200 hover:bg-primary-50"
                    >
                      <span className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary-700 ring-1 ring-primary-100">
                        {oriService.code}
                      </span>
                      <span className="block font-semibold text-slate-950">{oriService.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="border-b border-slate-200 bg-slate-50 px-5 py-5 md:px-8">
                  <div className="grid grid-cols-5 gap-2">
                    {bookingSteps.map((label, index) => {
                      const stepNumber = index + 1
                      const isActive = bookingStep >= stepNumber

                      return (
                        <div key={label} className="relative flex flex-col items-center gap-2">
                          {index < bookingSteps.length - 1 ? (
                            <div
                              className={`absolute left-[58%] right-[-42%] top-[15px] h-0.5 ${
                                bookingStep > stepNumber ? 'bg-primary-600' : 'bg-slate-200'
                              }`}
                            />
                          ) : null}
                          <div
                            className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                              isActive ? 'bg-primary-600 text-white' : 'bg-slate-200 text-slate-500'
                            }`}
                          >
                            {stepNumber}
                          </div>
                          <div
                            className={`text-xs font-semibold ${
                              isActive ? 'text-primary-700' : 'text-slate-500'
                            }`}
                          >
                            {label}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  {bookingStep === 1 ? (
                    <div>
                      <h4 className="text-2xl font-semibold text-slate-950">Select Location & Date</h4>
                      <p className="mt-2 leading-7 text-slate-600">
                        Choose where you want service and pick a preferred appointment date.
                      </p>

                      <div className="mt-6">
                        <label htmlFor="livescan-location" className="form-label">
                          Location
                        </label>
                        <select
                          id="livescan-location"
                          className="form-control"
                          value={bookingDetails.location}
                          onChange={(event) =>
                            setBookingDetails((details) => ({
                              ...details,
                              location: event.target.value,
                              preferredDate: '',
                              preferredTime: '',
                            }))
                          }
                        >
                          <option>Tarpon Springs</option>
                          <option>Tampa</option>
                        </select>
                      </div>

                      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-7">
                        {dateOptions.map((day) => {
                          const isSelected = bookingDetails.preferredDate === day.value

                          return (
                            <button
                              key={day.value}
                              type="button"
                              onClick={() => {
                                setBookingDetails((details) => ({
                                  ...details,
                                  preferredDate: day.value,
                                  preferredTime: '',
                                }))
                                setBookingStep(2)
                              }}
                              className={`min-h-20 rounded-xl border-2 p-2 text-center transition-all duration-300 hover:-translate-y-1 ${
                                isSelected
                                  ? 'border-primary-600 bg-primary-600 text-white shadow-[0_16px_35px_-24px_rgba(9,109,217,0.9)]'
                                  : day.isToday
                                    ? 'border-primary-700 bg-gradient-to-br from-primary-600 to-primary-800 text-white'
                                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-primary-200 hover:bg-primary-50'
                              }`}
                            >
                              <div className="text-[11px] font-bold uppercase">{day.dayName}</div>
                              <div className="text-lg font-bold">{day.day}</div>
                              <div className="text-[11px] font-semibold opacity-80">{day.month}</div>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ) : null}

                  {bookingStep === 2 ? (
                    <div>
                      <h4 className="text-2xl font-semibold text-slate-950">Select Time</h4>
                      <p className="mt-2 leading-7 text-slate-600">
                        Available preferred times for {selectedDateLabel || 'your selected date'}.
                      </p>

                      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                        {timeSlots.map((slot) => {
                          const isSelected = bookingDetails.preferredTime === slot

                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => {
                                setBookingDetails((details) => ({ ...details, preferredTime: slot }))
                                setBookingStep(3)
                              }}
                              className={`rounded-xl border-2 px-4 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${
                                isSelected
                                  ? 'border-primary-600 bg-primary-600 text-white'
                                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-primary-200 hover:bg-primary-50'
                              }`}
                            >
                              {slot}
                            </button>
                          )
                        })}
                      </div>

                      <div className="mt-8">
                        <button type="button" onClick={() => setBookingStep(1)} className="btn-secondary">
                          Back to Date Selection
                        </button>
                      </div>
                    </div>
                  ) : null}

                  {bookingStep === 3 ? (
                    <div>
                      <h4 className="text-2xl font-semibold text-slate-950">Contact Details</h4>
                      <p className="mt-2 leading-7 text-slate-600">
                        Enter your details so the pharmacy team can confirm your appointment request.
                      </p>

                      <div className="mt-6 grid gap-5 md:grid-cols-2">
                        <div>
                          <label htmlFor="livescan-first-name" className="form-label">
                            First Name *
                          </label>
                          <input
                            id="livescan-first-name"
                            className="form-control"
                            value={bookingDetails.firstName}
                            onChange={(event) => setBookingDetails((details) => ({ ...details, firstName: event.target.value }))}
                          />
                        </div>
                        <div>
                          <label htmlFor="livescan-last-name" className="form-label">
                            Last Name *
                          </label>
                          <input
                            id="livescan-last-name"
                            className="form-control"
                            value={bookingDetails.lastName}
                            onChange={(event) => setBookingDetails((details) => ({ ...details, lastName: event.target.value }))}
                          />
                        </div>
                        <div>
                          <label htmlFor="livescan-email" className="form-label">
                            Email *
                          </label>
                          <input
                            id="livescan-email"
                            type="email"
                            className="form-control"
                            value={bookingDetails.email}
                            onChange={(event) => setBookingDetails((details) => ({ ...details, email: event.target.value }))}
                          />
                        </div>
                        <div>
                          <label htmlFor="livescan-phone" className="form-label">
                            Phone *
                          </label>
                          <input
                            id="livescan-phone"
                            type="tel"
                            className="form-control"
                            value={bookingDetails.phone}
                            onChange={(event) => setBookingDetails((details) => ({ ...details, phone: event.target.value }))}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="livescan-notes" className="form-label">
                            Notes or agency instructions
                          </label>
                          <textarea
                            id="livescan-notes"
                            rows={4}
                            className="form-control"
                            value={bookingDetails.notes}
                            onChange={(event) => setBookingDetails((details) => ({ ...details, notes: event.target.value }))}
                            placeholder="Employer, licensing board, ORI questions, or special instructions"
                          />
                        </div>
                      </div>

                      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <h5 className="mb-3 font-semibold text-slate-950">Summary</h5>
                        <div className="grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                          <p><span className="font-semibold text-slate-800">Service:</span> {selectedOri?.title || selectedService.title}</p>
                          <p><span className="font-semibold text-slate-800">ORI:</span> {selectedOri?.code || 'Confirm with pharmacy'}</p>
                          <p><span className="font-semibold text-slate-800">Location:</span> {bookingDetails.location}</p>
                          <p><span className="font-semibold text-slate-800">Time:</span> {selectedDateLabel} at {bookingDetails.preferredTime}</p>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <button type="button" onClick={() => setBookingStep(2)} className="btn-secondary">
                          Back to Time
                        </button>
                        <button
                          type="button"
                          onClick={() => setBookingStep(4)}
                          disabled={!canContinueDetails}
                          className="btn-primary disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                        >
                          Continue to Payment
                        </button>
                      </div>
                    </div>
                  ) : null}

                  {bookingStep === 4 ? (
                    <div>
                      <h4 className="text-2xl font-semibold text-slate-950">Payment</h4>
                      <p className="mt-2 leading-7 text-slate-600">
                        Complete payment through Helcim before sending the appointment request.
                      </p>

                      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <h5 className="mb-4 text-lg font-semibold text-slate-950">Order summary</h5>
                        <div className="space-y-2 text-sm text-slate-700">
                          <p><span className="font-semibold">Service:</span> {selectedOri?.title || selectedService.description}</p>
                          <p><span className="font-semibold">ORI:</span> {selectedOri?.code || 'Confirm with pharmacy'}</p>
                          <p><span className="font-semibold">Preferred slot:</span> {selectedDateLabel} at {bookingDetails.preferredTime}</p>
                          <p><span className="font-semibold">Amount:</span> ${priceAmount.toFixed(2)} USD</p>
                        </div>
                      </div>

                      {paymentError ? (
                        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-700">
                          {paymentError}
                        </div>
                      ) : null}

                      {paymentComplete ? (
                        <div className="mt-5 rounded-2xl border border-primary-200 bg-primary-50 p-5 text-sm leading-6 text-primary-800">
                          Payment complete. Transaction ID: {paymentTransactionId || 'unavailable'}
                        </div>
                      ) : null}

                      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <button type="button" onClick={() => setBookingStep(3)} className="btn-secondary">
                          Back to Details
                        </button>
                        <button
                          type="button"
                          onClick={openHelcimPay}
                          disabled={isProcessingPayment || paymentComplete}
                          className="btn-primary disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                        >
                          {isProcessingPayment ? 'Opening Checkout...' : `Pay $${priceAmount.toFixed(2)}`}
                        </button>
                        {paymentComplete ? (
                          <button type="button" onClick={() => setBookingStep(5)} className="btn-primary">
                            Continue to Request
                          </button>
                        ) : null}
                      </div>
                    </div>
                  ) : null}

                  {bookingStep === 5 ? (
                    <div className="text-center">
                      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h4 className="text-2xl font-semibold text-slate-950">Ready to send your request</h4>
                      <p className="mx-auto mt-2 max-w-xl leading-7 text-slate-600">
                        Review the details below. This sends a prepared booking request to Anclote
                        Pharmacy so the team can confirm availability and next steps.
                      </p>

                      <div className="mx-auto mt-8 max-w-2xl rounded-2xl border-2 border-primary-200 bg-primary-50 p-6 text-left">
                        <h5 className="mb-4 text-lg font-semibold text-primary-800">Appointment request</h5>
                        <div className="space-y-2 text-sm text-slate-700">
                          <p><span className="font-semibold">Category:</span> {selectedService.title}</p>
                          <p><span className="font-semibold">Service:</span> {selectedOri?.title || selectedService.description}</p>
                          <p><span className="font-semibold">ORI:</span> {selectedOri?.code || 'Confirm with pharmacy'}</p>
                          <p><span className="font-semibold">Location:</span> {bookingDetails.location}</p>
                          <p><span className="font-semibold">Preferred slot:</span> {selectedDateLabel} at {bookingDetails.preferredTime}</p>
                          <p><span className="font-semibold">Payment:</span> ${priceAmount.toFixed(2)} paid</p>
                          <p><span className="font-semibold">Transaction:</span> {paymentTransactionId || 'unavailable'}</p>
                          <p><span className="font-semibold">Patient:</span> {bookingDetails.firstName} {bookingDetails.lastName}</p>
                        </div>
                      </div>

                      <p className="mt-6 text-sm italic text-slate-500">
                        This is a request, not a confirmed appointment. The pharmacy team will confirm.
                      </p>

                      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <button type="button" onClick={() => setBookingStep(4)} className="btn-secondary">
                          Back to Payment
                        </button>
                        <button type="button" onClick={handleBookingSubmit} className="btn-primary gap-2">
                          <Mail className="h-5 w-5" />
                          Send Booking Request
                        </button>
                        <a href="tel:727-944-5800" className="btn-secondary gap-2">
                          <Phone className="h-5 w-5" />
                          Call Instead
                        </a>
                      </div>
                    </div>
                  ) : null}

                  {selectedService.oriServices?.length ? (
                    <button
                      type="button"
                      onClick={() => {
                        setIsBookingOpen(false)
                        setSelectedOri(null)
                        setBookingStep(1)
                      }}
                      className="mt-8 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
                    >
                      Back to ORI Codes
                    </button>
                  ) : null}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
