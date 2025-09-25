import { FeatureCard } from '@/components/feature-card'
import { LucideIcon } from 'lucide-react'

export interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureGroupProps {
  features: FeatureItem[]
}

export function FeaturesGroup({ features }: FeatureGroupProps) {
  return (
    <div
      className="grid gap-8"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
      }}
    >
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  )
}
