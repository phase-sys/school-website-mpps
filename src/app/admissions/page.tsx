import { Navigation } from '@/components/scaffolding/Navigation'
import { Footer } from '@/components/scaffolding/Footer'
import { HeroText } from '@/components/hero-text'
import { AdmissionProcessSection } from '@/sections/admission/AdmissionProcessSection'
import { AdmissionRequirementsSection } from '@/sections/admission/AdmissionRequirementsSection'
import { ImportantDatesSection } from '@/sections/admission/ImportantDatesSection'
import { TuitionFinancialAidSection } from '@/sections/admission/TuitionFinancialAidSection'
import { CTASection } from '@/components/cta-section'
import { FAQSection } from '@/sections/admission/FAQSection'

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroText
        title="Join us at MPPS today"
        subtitle="Begin your child's journey toward academic excellence and personal growth. We welcome students who are ready to be challenged and inspired."
      />
      <AdmissionProcessSection />
      <AdmissionRequirementsSection />
      <ImportantDatesSection />
      <TuitionFinancialAidSection />

      <CTASection
        title="Ready to Apply?"
        subtitle="Take the first step toward joining our community of learners"
        primaryButtonText="Start Application"
        primaryButtonHref="/admissions"
        secondaryButtonText="Schedule Visit"
        secondaryButtonHref="/contact"
      />

      <FAQSection />
      <Footer />
    </div>
  )
}
