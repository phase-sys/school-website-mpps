import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  bg?: 'background' | 'muted' | 'transparent'
  width?: '4xl' | '7xl'
  className?: string
}

export function SectionWrapper({
  children,
  bg = 'background',
  width = '4xl',
  className,
}: SectionWrapperProps) {
  return (
    <section className={cn(`py-20 bg-${bg}`)}>
      <div
        className={cn(`max-w-${width} mx-auto px-4 sm:px-6 lg:px-8`, className)}
      >
        {children}
      </div>
    </section>
  )
}
