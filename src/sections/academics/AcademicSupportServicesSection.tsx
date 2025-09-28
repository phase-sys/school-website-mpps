import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'

interface SupportService {
  title: string
  description: string
}

const supportServices: SupportService[] = [
  {
    title: 'Learning Support',
    description:
      'Individualized support for students with diverse learning needs, including tutoring, study skills development, and accommodations for learning differences.',
  },
  {
    title: 'College Counseling',
    description:
      'Dedicated college counselors work with students and families from 9th grade through graduation to navigate the college application process and career planning.',
  },
  {
    title: 'Enrichment Programs',
    description:
      'Advanced learning opportunities for gifted students, including independent study, mentorship programs, and acceleration options in specific subject areas.',
  },
  {
    title: 'Technology Integration',
    description:
      '1:1 device program with comprehensive digital literacy curriculum, coding classes, and integration of technology across all subject areas.',
  },
]

export function AcademicSupportServicesSection() {
  return (
    <SectionWrapper width="4xl" bg="muted" className="text-center">
      <SectionHeader
        title="Academic Support Services"
        subtitle="Comprehensive support to ensure every student reaches their full potential"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {supportServices.map((service) => (
          <Card key={service.title}>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
