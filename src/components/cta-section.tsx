import { Button } from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'

interface CTASectionProps {
  title: string
  subtitle: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText: string
  secondaryButtonHref: string
  note?: string
  icon?: LucideIcon
  className?: string
}

export function CTASection({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  note,
  icon: Icon,
  className = '',
}: CTASectionProps) {
  return (
    <section
      className={`py-20 bg-primary text-primary-foreground ${className}`}
    >
      <div className="container mx-auto px-4 text-center max-w-4xl sm:px-6 lg:px-8">
        {Icon && <Icon className="h-16 w-16 mx-auto mb-6 opacity-90" />}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-8 opacity-90">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8"
            asChild
          >
            <a href={primaryButtonHref}>{primaryButtonText}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            asChild
          >
            <a href={secondaryButtonHref}>{secondaryButtonText}</a>
          </Button>
        </div>

        {note && <p className="text-sm mt-6 opacity-75">{note}</p>}
      </div>
    </section>
  )
}
