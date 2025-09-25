import { Navigation } from '@/components/scaffolding/Navigation'
import { Footer } from '@/components/scaffolding/Footer'
import { HeroText } from '@/components/hero-text'
import { MilestonesSection } from '@/sections/history/MilestoneSection'
import { LegacySection } from '@/sections/history/LegacySection'
import { FoundersSection } from '@/sections/history/FounderSection'
import { PageWrapper } from '@/components/scaffolding/PageWrapper'

export default function HistoryPage() {
  return (
    <PageWrapper>
      <Navigation />
      <HeroText
        title="Our Rich History"
        subtitle="Twenty-five years of educational excellence, innovation, and community building."
      />
      <MilestonesSection />
      <LegacySection />
      <FoundersSection />
      <Footer />
    </PageWrapper>
  )
}
