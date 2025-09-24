"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselSlide {
  id: number
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  backgroundImage: string
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Excellence in Education",
    subtitle:
      "Nurturing young minds from kindergarten through 12th grade with innovative learning and dedicated faculty.",
    ctaText: "Start Application",
    ctaLink: "/admissions",
    secondaryCtaText: "Schedule Visit",
    secondaryCtaLink: "/contact",
    backgroundImage: "/modern-school-campus-students.png",
  },
  {
    id: 2,
    title: "STEM Excellence Program",
    subtitle:
      "Cutting-edge science, technology, engineering, and mathematics curriculum preparing students for tomorrow's challenges.",
    ctaText: "Learn More",
    ctaLink: "/academics",
    secondaryCtaText: "View Programs",
    secondaryCtaLink: "/academics",
    backgroundImage: "/students-in-science-laboratory-conducting-experime.jpg",
  },
  {
    id: 3,
    title: "Arts & Culture",
    subtitle: "Comprehensive arts education including music, theater, visual arts, and creative writing programs.",
    ctaText: "Explore Arts",
    ctaLink: "/academics",
    secondaryCtaText: "View Gallery",
    secondaryCtaLink: "/about",
    backgroundImage: "/students-performing-arts-music-theater-creative.jpg",
  },
  {
    id: 4,
    title: "Athletics & Wellness",
    subtitle: "Championship sports programs and comprehensive wellness education promoting healthy, active lifestyles.",
    ctaText: "Join Teams",
    ctaLink: "/admissions",
    secondaryCtaText: "View Sports",
    secondaryCtaLink: "/academics",
    backgroundImage: "/school-sports-teams-athletics-students-playing.jpg",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <div className="p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-pretty max-w-3xl mx-auto drop-shadow-sm">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <a href={slide.ctaLink}>{slide.ctaText}</a>
                  </Button>
                  {slide.secondaryCtaText && slide.secondaryCtaLink && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 text-lg font-semibold bg-white/5 shadow-md hover:shadow-lg transition-all duration-300"
                      asChild
                    >
                      <a href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white drop-shadow-sm" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white drop-shadow-sm" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
