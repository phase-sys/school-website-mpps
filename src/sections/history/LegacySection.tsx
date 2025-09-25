'use client'

import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/section-header'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'

const stats = [
  { value: '2,500+', label: 'Alumni Graduated' },
  { value: '98%', label: 'College Acceptance' },
  { value: '15', label: 'National Awards' },
  { value: '25', label: 'Years of Service' },
]

export function LegacySection() {
  return (
    <SectionWrapper width="4xl" bg="muted">
      <SectionHeader
        title="Our Legacy of Excellence"
        subtitle="The numbers tell our story of growth and achievement"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
