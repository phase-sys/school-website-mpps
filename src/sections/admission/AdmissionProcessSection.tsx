import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'
import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    step: 1,
    title: 'Submit Application',
    desc: 'Complete our online application form with student information and academic history.',
  },
  {
    step: 2,
    title: 'Campus Visit',
    desc: 'Schedule a tour to experience our campus and meet with our admissions team.',
  },
  {
    step: 3,
    title: 'Assessment',
    desc: "Age-appropriate assessment to understand your child's academic readiness and interests.",
  },
  {
    step: 4,
    title: 'Decision',
    desc: 'Receive admission decision and enrollment information within two weeks.',
  },
]

export function AdmissionProcessSection() {
  return (
    <SectionWrapper width="7xl" bg="background">
      <SectionHeader
        title="Admission Process"
        subtitle="A straightforward process designed to get to know your child and family"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(({ step, title, desc }) => (
          <Card key={step} className="text-center h-full">
            <CardContent className="pt-6 flex flex-col items-center space-y-4 h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">{step}</span>
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
