'use client'

import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-48 h-48 animate-pulse-opacity">
        <Image
          src="/logo.png"
          alt="Loading"
          fill
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}
