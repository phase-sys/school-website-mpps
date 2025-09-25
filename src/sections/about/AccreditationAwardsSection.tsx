import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'
import { CheckCircle, Award } from 'lucide-react'

export function AccreditationAwardsSection() {
  const accreditation = [
    'National Association of Independent Schools (NAIS)',
    'Western Association of Schools and Colleges (WASC)',
    'International Baccalaureate Organization (IBO)',
  ]

  const awards = [
    'Blue Ribbon School of Excellence (2022)',
    'STEM Education Award (2021)',
    'Outstanding Arts Program Recognition (2020)',
  ]

  const renderList = (items: string[], Icon: React.ElementType) => (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-4 p-4 rounded-xl bg-white shadow-sm border border-border min-h-[80px]"
        >
          {/* Icon container */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0">
            <Icon className="h-6 w-6 text-primary" />
          </div>

          {/* Text aligned left + vertically centered */}
          <div className="flex-1 flex items-center">
            <span className="text-foreground leading-snug text-left">
              {item}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )

  return (
    <SectionWrapper width="7xl" bg="background" className="text-center">
      <SectionHeader title="Accreditation & Recognition" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Accreditation */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Accredited By
          </h2>
          {renderList(accreditation, CheckCircle)}
        </div>

        {/* Awards */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Awards & Recognition
          </h2>
          {renderList(awards, Award)}
        </div>
      </section>
    </SectionWrapper>
  )
}
