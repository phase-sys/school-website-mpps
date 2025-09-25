import { Navigation } from '@/components/scaffolding/Navigation'
import { Footer } from '@/components/scaffolding/Footer'
import { HeroCarousel } from '@/components/hero-carousel'
import { SectionHeader } from '@/components/section-header'
import { FeatureCard } from '@/components/feature-card'
import { StatsGrid } from '@/components/stats-grid'
import { CTASection } from '@/components/cta-section'
import { BookOpen, Users, Award, Calendar } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description:
        'Rigorous curriculum designed to challenge and inspire students at every level.',
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description:
        'Personalized attention with an average student-to-teacher ratio of 12:1.',
    },
    {
      icon: Award,
      title: 'Award-Winning Programs',
      description:
        'Recognized for excellence in STEM, arts, and athletics programs.',
    },
    {
      icon: Calendar,
      title: 'Extracurricular Activities',
      description:
        'Over 50 clubs and activities to help students explore their passions.',
    },
  ]

  const stats = [
    { number: '98%', label: 'College Acceptance Rate' },
    { number: '850+', label: 'Students Enrolled' },
    { number: '75+', label: 'Dedicated Faculty' },
    { number: '25', label: 'Years of Excellence' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroCarousel />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Excellence Academy?"
            subtitle="We provide a comprehensive educational experience that prepares students for success in college and beyond."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsGrid stats={stats} />
        </div>
      </section>

      <CTASection
        title="Ready to Join Our Community?"
        subtitle="Discover how Excellence Academy can help your child reach their full potential."
        primaryButtonText="Start Application"
        primaryButtonHref="/admissions"
        secondaryButtonText="Schedule Visit"
        secondaryButtonHref="/contact"
      />

      <Footer />
    </div>
  )
}
