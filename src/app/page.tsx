'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-black dark:bg-black dark:text-white transition-colors">
      <h1 className="text-3xl font-bold mb-6">Dark Mode Demo</h1>

      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />

      <p className="mt-4 text-lg">
        This text changes color based on{' '}
        <span className="font-semibold">dark mode</span>.
      </p>

      <button
        onClick={() => {
          document.documentElement.classList.toggle('dark')
        }}
        className="mt-6 px-4 py-2 rounded bg-gray-200 dark:bg-gray-800"
      >
        Toggle Dark Mode
      </button>
    </div>
  )
}
