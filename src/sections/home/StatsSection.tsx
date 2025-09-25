import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { Stat, StatsGrid } from '@/components/stats-grid'

const stats: Stat[] = [
  { number: '98%', label: 'College Acceptance Rate' },
  { number: '850+', label: 'Students Enrolled' },
  { number: '75+', label: 'Dedicated Faculty' },
  { number: '25', label: 'Years of Excellence' },
]

export function StatsSection() {
  return (
    <SectionWrapper width="7xl" bg="muted">
      <StatsGrid stats={stats} />
    </SectionWrapper>
  )
}
