// sections/faculty-excellence-section.tsx
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { Card, CardContent } from '@/components/ui/card'

export function FacultyExcellenceSection() {
  const qualifications = [
    "85% of faculty hold master's degrees or higher",
    'Average of 12 years teaching experience',
    'Ongoing professional development and training',
    'Subject matter expertise and specialized certifications',
  ]

  const professionalDevelopment = [
    'Annual professional development budget of $150,000',
    'Conference attendance and workshop participation',
    'Collaborative planning and peer observation',
    'Technology integration and innovative teaching methods',
  ]

  const renderList = (items: string[]) => (
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span className="text-muted-foreground text-sm">{item}</span>
        </li>
      ))}
    </ul>
  )

  return (
    <SectionWrapper width="4xl" bg="background">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Faculty Excellence
        </h2>
        <p className="text-lg text-muted-foreground">
          Our commitment to hiring and retaining exceptional educators
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg text-foreground mb-4">
              Qualifications & Experience
            </h3>
            {renderList(qualifications)}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg text-foreground mb-4">
              Professional Development
            </h3>
            {renderList(professionalDevelopment)}
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  )
}
