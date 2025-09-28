import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'

interface Program {
  title: string
  description: string
  highlights: string[]
}

const programs: Program[] = [
  {
    title: 'International Baccalaureate (IB)',
    description:
      'Our IB Diploma Programme offers a rigorous, internationally recognized curriculum that develops critical thinking, intercultural understanding, and global perspectives. Students engage in extended research projects and community service.',
    highlights: [
      'Theory of Knowledge (TOK)',
      'Extended Essay research project',
      'Creativity, Activity, Service (CAS)',
      'Six subject areas of study',
    ],
  },
  {
    title: 'STEM Excellence Program',
    description:
      'Integrated Science, Technology, Engineering, and Mathematics curriculum with hands-on projects, robotics competitions, and partnerships with local universities and tech companies.',
    highlights: [
      'Advanced robotics and coding',
      'Engineering design challenges',
      'Research partnerships',
      'Science fair competitions',
    ],
  },
  {
    title: 'Advanced Placement (AP)',
    description:
      'Over 20 AP courses available across all subject areas, allowing students to earn college credit while still in high school. Our AP pass rates consistently exceed national averages.',
    highlights: [
      '20+ AP course offerings',
      'Dedicated AP preparation',
      'College credit opportunities',
      'Expert faculty instruction',
    ],
  },
  {
    title: 'Arts Integration Program',
    description:
      'Unique program that integrates arts education across all subjects, fostering creativity and innovative thinking. Students participate in performances, exhibitions, and community arts projects.',
    highlights: [
      'Cross-curricular arts integration',
      'Performance opportunities',
      'Community partnerships',
      'Digital arts and media',
    ],
  },
]

export function SignatureProgramsSection() {
  return (
    <SectionWrapper width="7xl" bg="background">
      <SectionHeader
        title="Signature Programs"
        subtitle="Specialized programs that set MPPS Inc apart"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {programs.map((program) => (
          <Card key={program.title}>
            <CardContent className="pt-6">
              <h3 className="font-bold text-xl text-foreground mb-4">
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {program.description}
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {program.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
