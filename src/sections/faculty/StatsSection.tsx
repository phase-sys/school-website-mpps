import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { Stat, StatsGrid } from '@/components/stats-grid'

const stats: Stat[] = [
  { number: '75+', label: 'Faculty Members' },
  { number: '85%', label: 'Hold Advanced Degrees' },
  { number: '12', label: 'Average Years Experience' },
  { number: '12:1', label: 'Student-Teacher Ratio' },
]

export function StatsSection() {
  return (
    <SectionWrapper width="7xl" bg="muted">
      <StatsGrid stats={stats} />
    </SectionWrapper>
  )
}
