import { Card, CardContent } from '@/components/ui/card'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <Card className={className}>
      <CardContent className="pt-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
