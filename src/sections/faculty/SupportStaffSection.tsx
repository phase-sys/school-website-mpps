import { Users, BookOpen, Award } from 'lucide-react'
import { FeaturesGroup } from '@/components/feature-group'
import { SectionHeader } from '@/components/section-header'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'

const supportStaffFeatures = [
  {
    icon: Users,
    title: 'Counseling Services',
    description:
      'School counselors, college advisors, and mental health professionals supporting student wellness.',
  },
  {
    icon: BookOpen,
    title: 'Library & Technology',
    description:
      'Librarians and IT specialists ensuring access to resources and technology support.',
  },
  {
    icon: Award,
    title: 'Learning Support',
    description:
      'Special education coordinators and learning specialists providing individualized support.',
  },
  {
    icon: Users,
    title: 'Administrative Team',
    description:
      'Admissions, finance, facilities, and operations staff ensuring smooth daily operations.',
  },
]

export function SupportStaffSection() {
  return (
    <SectionWrapper width="7xl" bg="background">
      <SectionHeader
        title="Support Staff"
        subtitle="Dedicated professionals who make our school community thrive"
      />
      <FeaturesGroup features={supportStaffFeatures} />
    </SectionWrapper>
  )
}
