import { BookOpen, Users, Award, Calendar } from 'lucide-react'
import { FeaturesGroup } from '@/components/feature-group'
import { SectionHeader } from '@/components/section-header'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'

const features = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description:
      'Rigorous curriculum designed to challenge and inspire students at every level.',
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    description:
      'Personalized attention with an average student-to-teacher ratio of 12:1.',
  },
  {
    icon: Award,
    title: 'Award-Winning Programs',
    description:
      'Recognized for excellence in STEM, arts, and athletics programs.',
  },
  {
    icon: Calendar,
    title: 'Extracurricular Activities',
    description:
      'Over 50 clubs and activities to help students explore their passions.',
  },
]

export function FeaturesSection() {
  return (
    <SectionWrapper width="7xl" bg="background">
      <SectionHeader
        title="Why Choose MPPS?"
        subtitle="We provide a comprehensive educational experience that prepares students for success in college and beyond."
      />
      <FeaturesGroup features={features} />
    </SectionWrapper>
  )
}
