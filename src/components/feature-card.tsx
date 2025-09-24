import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon: Icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <Card className={className}>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 bg-primary/10 rounded-full">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
