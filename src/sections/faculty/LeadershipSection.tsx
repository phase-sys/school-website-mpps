// sections/leadership-section.tsx
import { SectionHeader } from '@/components/section-header'
import { PersonCardGroup } from '@/components/person-card-group'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { User } from 'lucide-react'

export function LeadershipSection() {
  const leaders = [
    {
      name: 'Dr. Emily Chen',
      role: 'Head of School',
      description:
        'Ed.D. in Educational Leadership, 20+ years in education. Passionate about innovative curriculum design and student-centered learning.',
      icon: User,
    },
    {
      name: 'Michael Thompson',
      role: 'Academic Director',
      description:
        'M.Ed. in Curriculum and Instruction, former classroom teacher. Specializes in STEM education and assessment strategies.',
      icon: User,
    },
    {
      name: 'Lisa Martinez',
      role: 'Student Affairs Director',
      description:
        'M.A. in School Counseling, dedicated to student wellness and creating inclusive learning environments for all students.',
      icon: User,
    },
  ]

  return (
    <SectionWrapper width="7xl" bg="background">
      <SectionHeader
        title="Leadership Team"
        subtitle="Meet the dedicated leaders who guide our educational mission"
      />

      <PersonCardGroup people={leaders} />
    </SectionWrapper>
  )
}
