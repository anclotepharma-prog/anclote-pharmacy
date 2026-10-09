import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us in Tarpon Springs | Anclote Pharmacy',
  description:
    'Reach Anclote Pharmacy in Tarpon Springs — call (727) 944-5800, visit 1933 N Pinellas Ave, or send us a message. Open Mon–Fri 9am–5pm.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
