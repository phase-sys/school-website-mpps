import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'

const faqs = [
  {
    question: 'What is the student-to-teacher ratio?',
    answer:
      'Our average student-to-teacher ratio is 12:1, ensuring personalized attention and support for every student.',
  },
  {
    question: 'Do you offer transportation?',
    answer:
      'Yes, we provide bus transportation from several locations throughout the metropolitan area. Routes are determined based on enrollment each year.',
  },
  {
    question: 'What extracurricular activities are available?',
    answer:
      'We offer over 50 clubs and activities including athletics, arts, academic competitions, community service, and special interest groups.',
  },
  {
    question: 'Can students transfer mid-year?',
    answer:
      'Yes, we accept transfer students throughout the year based on availability. We work closely with families to ensure a smooth transition.',
  },
]

export function FAQSection() {
  return (
    <SectionWrapper width="4xl" bg="background">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Common questions about our admission process"
      />

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg text-foreground mb-2">
                {faq.question}
              </h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
