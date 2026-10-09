import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Patient Registration in Tarpon Springs | Anclote Pharmacy',
  description:
    'Become a patient at Anclote Pharmacy in Tarpon Springs — transfer prescriptions in minutes. Call (727) 944-5800 or register online.',
  alternates: {
    canonical: '/new-patient',
  },
}

export default function NewPatientLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
