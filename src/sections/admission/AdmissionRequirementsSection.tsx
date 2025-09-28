import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'
import { CheckCircle } from 'lucide-react'

export function AdmissionRequirementsSection() {
  return (
    <SectionWrapper width="7xl" bg="muted">
      <SectionHeader
        title="Admission Requirements"
        subtitle="Requirements vary by grade level to ensure appropriate placement"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Elementary */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold text-xl text-foreground mb-4">
              Elementary (K-5)
            </h3>
            <ul className="space-y-3">
              {[
                'Completed application form',
                'Birth certificate and immunization records',
                'Previous school records (if applicable)',
                'Parent/student interview',
                'Readiness assessment (grades 1-5)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Middle School */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold text-xl text-foreground mb-4">
              Middle School (6-8)
            </h3>
            <ul className="space-y-3">
              {[
                'Completed application form',
                'Official transcripts from previous schools',
                'Teacher recommendations (2)',
                'Academic assessment in math and English',
                'Student interview',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* High School */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold text-xl text-foreground mb-4">
              High School (9-12)
            </h3>
            <ul className="space-y-3">
              {[
                'Completed application form',
                'Official high school transcripts',
                'Teacher recommendations (3)',
                'Personal essay',
                'Entrance exam (SSAT or equivalent)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  )
}
