import { Navigation } from '@/components/scaffolding/Navigation'
import { Footer } from '@/components/scaffolding/Footer'
import { CTASection } from '@/components/cta-section'
import { HeroSection } from '@/sections/home/HeroSection'
import { FeaturesSection } from '@/sections/home/FeaturesSection'
import { StatsSection } from '@/sections/home/StatsSection'
import { PageWrapper } from '@/components/scaffolding/PageWrapper'

export default function HomePage() {
  return (
    <PageWrapper>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection
        title="Ready to Join Our Community?"
        subtitle="Discover how Excellence Academy can help your child reach their full potential."
        primaryButtonText="Start Application"
        primaryButtonHref="/admissions"
        secondaryButtonText="Schedule Visit"
        secondaryButtonHref="/contact"
      />

      <Footer />
    </PageWrapper>
  )
}
