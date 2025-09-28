import {
  BookOpen,
  Calculator,
  Microscope,
  Globe,
  Palette,
  Music,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'

interface AcademicArea {
  icon: React.ElementType
  title: string
  description: string
}

const academicAreas: AcademicArea[] = [
  {
    icon: BookOpen,
    title: 'English Language Arts',
    description:
      'Comprehensive literacy program emphasizing reading comprehension, creative writing, critical analysis, and communication skills across all grade levels.',
  },
  {
    icon: Calculator,
    title: 'Mathematics',
    description:
      'Progressive math curriculum from basic numeracy through advanced calculus and statistics, with emphasis on problem-solving and real-world applications.',
  },
  {
    icon: Microscope,
    title: 'Science',
    description:
      'Hands-on science education covering biology, chemistry, physics, and earth sciences with state-of-the-art laboratory facilities and research opportunities.',
  },
  {
    icon: Globe,
    title: 'Social Studies',
    description:
      'Comprehensive study of history, geography, civics, and economics to develop informed global citizens with critical thinking skills.',
  },
  {
    icon: Palette,
    title: 'Arts',
    description:
      'Rich arts program including visual arts, music, theater, and digital media to foster creativity and self-expression in all students.',
  },
  {
    icon: Music,
    title: 'World Languages',
    description:
      'Foreign language instruction in Spanish, French, and Mandarin Chinese, with cultural immersion experiences and exchange programs.',
  },
]

export function CoreAcademicAreasSection() {
  return (
    <SectionWrapper width="7xl" bg="muted">
      <SectionHeader
        title="Core Academic Areas"
        subtitle="Comprehensive curriculum covering all essential subjects"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {academicAreas.map((area) => (
          <Card key={area.title}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <area.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
