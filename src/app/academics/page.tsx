import { Navigation } from '@/components/scaffolding/Navigation'
import { Footer } from '@/components/scaffolding/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  BookOpen,
  Microscope,
  Palette,
  Globe,
  Calculator,
  Music,
} from 'lucide-react'
import Link from 'next/link'
import { HeroText } from '@/components/hero-text'
import { GradeLevelsOverviewSection } from '@/sections/academics/GradeLevelsOverviewSection'
import { CoreAcademicAreasSection } from '@/sections/academics/CoreAcademicsAreaSection'
import { SignatureProgramsSection } from '@/sections/academics/SignatureProgramsSection'
import { CTASection } from '@/components/cta-section'
import { AcademicSupportServicesSection } from '@/sections/academics/AcademicSupportServicesSection'

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroText
        title="Academic Excellence"
        subtitle="Comprehensive K-12 curriculum designed to challenge, inspire, and prepare students for success in college and beyond"
      />
      <GradeLevelsOverviewSection />
      <CoreAcademicAreasSection />
      <SignatureProgramsSection />
      <AcademicSupportServicesSection />
      <CTASection
        title="Experience Academic Excellence"
        subtitle="Discover how our comprehensive academic program can prepare your child for success"
        primaryButtonText="Apply Now"
        primaryButtonHref="/admissions"
        secondaryButtonText="Schedule a Visit"
        secondaryButtonHref="/contact"
      />
      <Footer />
    </div>
  )
}
