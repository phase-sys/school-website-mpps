import { Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'

interface DepartmentCardProps {
  title: string
  head: string
  role: string
  bio: string
  description: string
}

function DepartmentCard({
  title,
  head,
  role,
  bio,
  description,
}: DepartmentCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-bold text-xl text-foreground mb-4">{title}</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-medium text-foreground">{head}</h4>
              <p className="text-sm text-primary">{role}</p>
              <p className="text-xs text-muted-foreground">{bio}</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export function DepartmentHighlightsSection() {
  const departments = [
    {
      title: 'Mathematics Department',
      head: 'Dr. Jennifer Walsh',
      role: 'Department Head',
      bio: 'Ph.D. in Mathematics, MIT. Specializes in advanced calculus and mathematical modeling.',
      description:
        'Our mathematics department offers courses from basic arithmetic through multivariable calculus, with emphasis on problem-solving and real-world applications.',
    },
    {
      title: 'Science Department',
      head: 'Dr. Marcus Rodriguez',
      role: 'Department Head',
      bio: 'Ph.D. in Chemistry, Caltech. Former research scientist with 15+ publications.',
      description:
        'State-of-the-art laboratories support hands-on learning in biology, chemistry, physics, and environmental science with research opportunities.',
    },
    {
      title: 'English Department',
      head: 'Ms. Catherine Brooks',
      role: 'Department Head',
      bio: 'M.A. in English Literature, Yale. Published author and writing workshop leader.',
      description:
        'Comprehensive literacy program emphasizing critical reading, creative writing, and communication skills across diverse literary traditions.',
    },
    {
      title: 'Arts Department',
      head: 'Mr. David Chen',
      role: 'Department Head',
      bio: 'M.F.A. in Studio Arts, RISD. Professional artist with gallery exhibitions nationwide.',
      description:
        'Comprehensive arts education including visual arts, music, theater, and digital media with performance and exhibition opportunities.',
    },
  ]

  return (
    <SectionWrapper width="7xl" bg="muted">
      {/* Header stays centered */}
      <div className="text-center mb-12">
        <SectionHeader
          title="Department Highlights"
          subtitle="Meet some of our outstanding department leaders and teachers"
        />
      </div>

      {/* Cards stay left-aligned */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {departments.map((dept) => (
          <DepartmentCard key={dept.title} {...dept} />
        ))}
      </div>
    </SectionWrapper>
  )
}
