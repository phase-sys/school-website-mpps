import { Navigation } from '@/components/scaffolding/Navigation'
import { Footer } from '@/components/scaffolding/Footer'
import { HeroText } from '@/components/hero-text'
import { AccreditationAwardsSection } from '@/sections/about/AccreditationAwardsSection'
import { FeaturesSection } from '@/sections/about/FeaturesSection'
import { StorySection } from '@/sections/about/StorySection'
import { PageWrapper } from '@/components/scaffolding/PageWrapper'

export default function AboutPage() {
  return (
    <PageWrapper>
      <Navigation />
      <HeroText
        title="Mother Perpetua Parochial School Inc."
        subtitle="For over 25 years, we have been dedicated to providing exceptional education that nurtures the whole child and prepares students for lifelong success."
      />
      <FeaturesSection />
      <StorySection />
      <AccreditationAwardsSection />

      <Footer />
    </PageWrapper>
  )
}
