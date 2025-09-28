import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'

const storyParagraphs = [
  `MPPS Inc was founded in 1999 with a simple yet powerful vision: to create an educational environment where every student could thrive academically, socially, and emotionally. What started as a small school with 50 students has grown into a vibrant community of over 850 learners from kindergarten through 12th grade.`,

  `Our founders, Dr. Sarah Mitchell and Dr. James Rodriguez, were passionate educators who believed that small class sizes, innovative teaching methods, and a strong sense of community were the keys to unlocking every child’s potential. Today, their vision continues to guide our approach to education.`,

  `Over the years, we have consistently evolved our programs to meet the changing needs of our students and society. From introducing cutting-edge STEM laboratories to expanding our arts programs and implementing project-based learning, we remain committed to preparing our students for success in an ever-changing world.`,
]

export function StorySection() {
  return (
    <SectionWrapper width="4xl" bg="muted">
      <SectionHeader
        title="Our Story"
        subtitle="A legacy of educational excellence built on innovation and dedication"
      />

      <div className="prose prose-lg max-w-none text-muted-foreground">
        {storyParagraphs.map((text, index) => (
          <p key={index} className="text-lg leading-relaxed mb-6 last:mb-0">
            {text}
          </p>
        ))}
      </div>
    </SectionWrapper>
  )
}
