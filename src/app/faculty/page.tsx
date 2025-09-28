import { Navigation } from '@/components/scaffolding/Navigation'
import { Footer } from '@/components/scaffolding/Footer'
import { HeroText } from '@/components/hero-text'
import { PageWrapper } from '@/components/scaffolding/PageWrapper'
import { StatsSection } from '@/sections/faculty/StatsSection'
import { LeadershipSection } from '@/sections/faculty/LeadershipSection'
import { FacultyExcellenceSection } from '@/sections/faculty/FacultyExcellenceSection'
import { DepartmentHighlightsSection } from '@/sections/faculty/DepartmenHighlightsSection'
import { SupportStaffSection } from '@/sections/faculty/SupportStaffSection'

export default function FacultyPage() {
  return (
    <PageWrapper>
      <Navigation />
      <HeroText
        title="Our Exceptional Faculty"
        subtitle="Dedicated educators who inspire, challenge, and support every student on their journey to excellence"
      />
      <LeadershipSection />
      <StatsSection />
      <FacultyExcellenceSection />

      {/* Department Highlights */}
      <DepartmentHighlightsSection />

      {/* Support Staff */}
      <SupportStaffSection />

      <Footer />
    </PageWrapper>
  )
}
