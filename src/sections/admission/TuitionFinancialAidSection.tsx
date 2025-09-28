import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'
import { DollarSign, Users, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function TuitionFinancialAidSection() {
  return (
    <SectionWrapper width="7xl" bg="muted">
      <SectionHeader
        title="Tuition & Financial Aid"
        subtitle="Investing in your child's future with transparent pricing and generous financial assistance"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tuition */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-6">
              <DollarSign className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-xl text-foreground">
                2024-2025 Tuition
              </h3>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Elementary (K-5)', value: '₱3,500' },
                { label: 'Middle School (6-8)', value: '₱3,000' },
                { label: 'High School (9-12)', value: '₱3,500' },
              ].map(({ label, value }, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 border-b border-border"
                >
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-bold text-foreground">{value}</span>
                </div>
              ))}
              <div className="mt-4 p-4 bg-accent rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Tuition includes textbooks, technology, most field trips, and
                  access to all facilities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Aid */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-6">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-xl text-foreground">
                Financial Aid
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We believe that financial circumstances should not prevent
                qualified students from receiving an excellent education. MPPS
                Inc offers need-based financial aid to families who qualify.
              </p>
              <ul className="space-y-2">
                {[
                  'Over ₱3 million awarded annually',
                  '35% of students receive financial aid',
                  'Average award covers 60% of tuition',
                  'Payment plans available',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="outline"
                className="w-full mt-4 bg-transparent"
              >
                <Link href="/financial-aid">
                  Learn More About Financial Aid
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  )
}
