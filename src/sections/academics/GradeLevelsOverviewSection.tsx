import { BookOpen, Microscope, Globe } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'

interface GradeLevel {
  icon: React.ElementType
  title: string
  description: string
  subjects: string[]
}

const gradeLevels: GradeLevel[] = [
  {
    icon: BookOpen,
    title: 'Elementary (K-5)',
    description:
      'Foundation building through play-based learning, literacy development, and mathematical reasoning. Small class sizes ensure personalized attention.',
    subjects: [
      'Reading & Language Arts',
      'Mathematics Foundations',
      'Science Exploration',
      'Social Studies',
      'Arts & Music',
    ],
  },
  {
    icon: Microscope,
    title: 'Middle School (6-8)',
    description:
      'Transitional years focusing on critical thinking, research skills, and academic independence. Introduction to advanced concepts and electives.',
    subjects: [
      'Advanced Mathematics',
      'Laboratory Sciences',
      'World Languages',
      'Technology & Engineering',
      'Elective Courses',
    ],
  },
  {
    icon: Globe,
    title: 'High School (9-12)',
    description:
      'College-preparatory curriculum with AP courses, IB Diploma Programme, and specialized tracks. Focus on college readiness and career preparation.',
    subjects: [
      'AP & IB Courses',
      'College Counseling',
      'Internship Programs',
      'Research Projects',
      'Leadership Opportunities',
    ],
  },
]

export function GradeLevelsOverviewSection() {
  return (
    <SectionWrapper width="7xl" bg="background" className="text-center">
      <SectionHeader
        title="Programs by Grade Level"
        subtitle="Age-appropriate curriculum that builds upon itself year after year"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gradeLevels.map((level) => (
          <Card key={level.title}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <level.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2">
                  {level.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {level.description}
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  {level.subjects.map((subject) => (
                    <li key={subject}>• {subject}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
