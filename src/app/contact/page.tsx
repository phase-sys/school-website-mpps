import { Navigation } from '@/components/scaffolding/Navigation'
import { Footer } from '@/components/scaffolding/Footer'
import { Calendar } from 'lucide-react'
import { HeroText } from '@/components/hero-text'
import { ContactSection } from '@/sections/contact/ContactSection'
import { DepartmentContactsSection } from '@/sections/contact/DepartmentContactSection'
import { CTASection } from '@/components/cta-section'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroText
        title="Contact Us"
        subtitle="We're here to answer your questions and help you learn more about MPPS Inc"
      />

      <ContactSection />
      <DepartmentContactsSection />
      <CTASection
        icon={Calendar}
        title="Schedule a Campus Visit"
        subtitle="Experience MPPS Inc firsthand with a personalized campus tour"
        primaryButtonText="Call to Schedule"
        primaryButtonHref="tel:+15551234568"
        secondaryButtonText="Email Admissions"
        secondaryButtonHref="mailto:admissions@excellenceacademy.edu"
        note="Tours available Monday-Friday at 9:00 AM, 11:00 AM, and 2:00 PM"
      />

      <Footer />
    </div>
  )
}
