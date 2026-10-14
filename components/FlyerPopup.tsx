'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const STORAGE_KEY = 'anclote-flyer-popup-seen-v1'

export default function FlyerPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return
    } catch {
      return
    }
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
  }, [open])

  if (!open) return null

  function close() {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* storage unavailable — popup simply shows again next visit */
    }
    setOpen(false)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Medical weight loss tele-visit program"
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
        <Image
          src="/images/weight-loss-flyer.png"
          alt="Medical Weight Loss tele-visit program at Anclote Pharmacy with Dr. Kinchit Shah — book at www.kinchitshahmd.com or 336-310-6667"
          width={1080}
          height={1560}
          className="max-h-[92vh] w-auto rounded-xl shadow-2xl"
          priority
        />
      </div>
    </div>
  )
}
