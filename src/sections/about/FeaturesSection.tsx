import { Target, Eye, Heart } from 'lucide-react'
import { FeaturesGroup } from '@/components/feature-group'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'

const features = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To provide a nurturing and challenging educational environment that empowers students to achieve academic excellence, develop strong character, and become responsible global citizens.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the premier K-12 educational institution that inspires lifelong learning, critical thinking, and innovation while fostering a diverse and inclusive community of learners.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description:
      'Excellence, Integrity, Respect, Innovation, and Community. These core values guide everything we do and shape the character of our students, faculty, and staff.',
  },
]

export function FeaturesSection() {
  return (
    <SectionWrapper width="7xl" bg="background">
      <FeaturesGroup features={features} />
    </SectionWrapper>
  )
}
