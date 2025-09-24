import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title: string
  subtitle: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText: string
  secondaryButtonHref: string
  className?: string
}

export function CTASection({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  className = "",
}: CTASectionProps) {
  return (
    <section className={`py-20 bg-primary text-primary-foreground ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <a href={primaryButtonHref}>{primaryButtonText}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <a href={secondaryButtonHref}>{secondaryButtonText}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
