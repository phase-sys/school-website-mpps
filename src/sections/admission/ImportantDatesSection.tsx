import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'
import { Calendar, Clock } from 'lucide-react'

export function ImportantDatesSection() {
  return (
    <SectionWrapper width="4xl" bg="background">
      <SectionHeader
        title="Important Dates"
        subtitle="Key deadlines for the 2025-2026 academic year"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Application Deadlines */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-4">
              <Calendar className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-lg text-foreground">
                Application Deadlines
              </h3>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Early Decision', date: 'December 15, 2024' },
                { label: 'Regular Decision', date: 'February 1, 2025' },
                { label: 'Rolling Admissions', date: 'Through May 1, 2025' },
              ].map(({ label, date }, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-medium text-foreground">{date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Decision Notifications */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-lg text-foreground">
                Decision Notifications
              </h3>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Early Decision', date: 'January 15, 2025' },
                { label: 'Regular Decision', date: 'March 15, 2025' },
                { label: 'Enrollment Deposit Due', date: 'April 15, 2025' },
              ].map(({ label, date }, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-medium text-foreground">{date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  )
}
