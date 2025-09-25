import { PersonCardGroup } from '@/components/person-card-group'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'
import { User } from 'lucide-react'

export function FoundersSection() {
  const founders = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Co-Founder & Former Head of School',
      description:
        'A passionate advocate for child-centered learning, Dr. Mitchell brought 15 years of classroom experience and a Ph.D. in Educational Psychology to create our innovative curriculum approach.',
      icon: User,
    },
    {
      name: 'Dr. James Rodriguez',
      role: 'Co-Founder & Former Academic Director',
      description:
        'With expertise in STEM education and school administration, Dr. Rodriguez designed our integrated curriculum model that continues to set us apart in preparing students for the 21st century.',
      icon: User,
    },
  ]

  return (
    <SectionWrapper width="4xl" bg="background">
      <SectionHeader
        title="Honoring Our Founders"
        subtitle="The visionary educators who started it all"
      />

      <PersonCardGroup people={founders} />
    </SectionWrapper>
  )
}
