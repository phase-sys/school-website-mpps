import { HeroCarousel, CarouselSlide } from '@/components/hero-carousel'

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: 'Excellence in Education',
    subtitle:
      'Nurturing young minds from kindergarten through 12th grade with innovative learning and dedicated faculty.',
    ctaText: 'Start Application',
    ctaLink: '/admissions',
    secondaryCtaText: 'Schedule Visit',
    secondaryCtaLink: '/contact',
    backgroundImage: '/hero-carousel/modern-school-campus-students.jpg',
  },
  {
    id: 2,
    title: 'STEM Program',
    subtitle:
      "Cutting-edge science, technology, engineering, and mathematics curriculum preparing students for tomorrow's challenges.",
    ctaText: 'Learn More',
    ctaLink: '/academics',
    secondaryCtaText: 'View Programs',
    secondaryCtaLink: '/academics',
    backgroundImage:
      '/hero-carousel/students-in-science-laboratory-conducting-experime.jpg',
  },
  {
    id: 3,
    title: 'Arts & Culture',
    subtitle:
      'Comprehensive arts education including music, theater, visual arts, and creative writing programs.',
    ctaText: 'Explore Arts',
    ctaLink: '/academics',
    secondaryCtaText: 'View Gallery',
    secondaryCtaLink: '/about',
    backgroundImage:
      '/hero-carousel/students-performing-arts-music-theater-creative.jpg',
  },
]

export function HeroSection() {
  return <HeroCarousel slides={slides} />
}
