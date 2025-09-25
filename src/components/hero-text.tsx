interface HeroSectionProps {
  title: string
  subtitle: string
  className?: string
}

export function HeroText({
  title,
  subtitle,
  className = '',
}: HeroSectionProps) {
  return (
    <section
      className={`py-20 bg-gradient-to-br from-primary/5 to-accent/10 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground text-pretty">{subtitle}</p>
      </div>
    </section>
  )
}
