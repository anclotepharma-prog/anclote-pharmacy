'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const STORAGE_KEY = 'anclote-flyer-popup-next-v1'

type Flyer = 'flu' | 'weightloss'

const FLYERS: Record<Flyer, { src: string; alt: string; label: string; width: number; height: number }> = {
  flu: {
    src: '/images/cold-flu-flyer.jpg',
    alt: "It's Cold and Flu Season — virtual visits with Dr. Kinchit Shah at Shreeji Clinic. Click to book your virtual visit at www.kinchitshahmd.com or call 336-310-6667",
    label: 'Cold and flu season virtual visits with Dr. Kinchit Shah',
    width: 1320,
    height: 1980,
  },
  weightloss: {
    src: '/images/weight-loss-flyer.png',
    alt: 'Medical Weight Loss tele-visit program at Anclote Pharmacy with Dr. Kinchit Shah — book at www.kinchitshahmd.com or 336-310-6667',
    label: 'Medical weight loss tele-visit program',
    width: 1080,
    height: 1560,
  },
}

export default function FlyerPopup() {
  const [open, setOpen] = useState(false)
  const [flyer, setFlyer] = useState<Flyer>('flu')

  useEffect(() => {
    let next: Flyer = 'flu'
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'flu' || stored === 'weightloss') next = stored
    } catch {
      /* storage unavailable — default to the flu flyer */
    }
    setFlyer(next)
    const t = setTimeout(() => setOpen(true), 1500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  if (!open) return null

  function close() {
    try {
      localStorage.setItem(STORAGE_KEY, flyer === 'flu' ? 'weightloss' : 'flu')
    } catch {
      /* storage unavailable — popup simply shows again next visit */
    }
    setOpen(false)
  }

  const f = FLYERS[flyer]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={f.label}
    >
      <div className="absolute inset-0 bg-black/70" onClick={close} />
      <div className="relative">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold leading-none text-slate-800 shadow-lg hover:bg-slate-100"
        >
          ×
        </button>
        <a
          href="https://www.kinchitshahmd.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book your virtual visit with Dr. Kinchit Shah"
        >
          <Image
            src={f.src}
            alt={f.alt}
            width={f.width}
            height={f.height}
            className="max-h-[92vh] w-auto rounded-xl shadow-2xl"
            priority
          />
        </a>
      </div>
    </div>
  )
}
