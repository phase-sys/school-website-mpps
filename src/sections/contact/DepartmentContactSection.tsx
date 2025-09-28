import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'

const departments = [
  {
    title: 'Admissions Office',
    director: 'Ms. Jennifer Adams',
    phone: '(555) 123-4568',
    email: 'admissions@excellenceacademy.edu',
    note: 'Application questions, campus tours, enrollment information',
  },
  {
    title: 'Academic Affairs',
    director: 'Michael Thompson',
    phone: '(555) 123-4570',
    email: 'academics@excellenceacademy.edu',
    note: 'Curriculum questions, academic support, course planning',
  },
  {
    title: 'Student Affairs',
    director: 'Lisa Martinez',
    phone: '(555) 123-4571',
    email: 'studentaffairs@excellenceacademy.edu',
    note: 'Counseling services, college planning, student support',
  },
  {
    title: 'Athletics Department',
    director: 'Coach Mark Wilson',
    phone: '(555) 123-4569',
    email: 'athletics@excellenceacademy.edu',
    note: 'Sports programs, team tryouts, athletic schedules',
  },
  {
    title: 'Business Office',
    director: 'Ms. Patricia Lee',
    phone: '(555) 123-4572',
    email: 'business@excellenceacademy.edu',
    note: 'Tuition payments, financial aid, billing questions',
  },
  {
    title: 'Technology Support',
    director: 'Mr. Alex Chen',
    phone: '(555) 123-4573',
    email: 'tech@excellenceacademy.edu',
    note: 'IT support, device issues, online platform help',
  },
]

export function DepartmentContactsSection() {
  return (
    <SectionWrapper width="7xl" bg="muted">
      <SectionHeader
        title="Department Contacts"
        subtitle="Connect directly with specific departments for specialized assistance"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map(({ title, director, phone, email, note }) => (
          <Card key={title}>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg text-foreground mb-3">
                {title}
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <strong>Director:</strong> {director}
                </p>
                <p className="text-muted-foreground">
                  <strong>Phone:</strong> {phone}
                </p>
                <p className="text-muted-foreground">
                  <strong>Email:</strong> {email}
                </p>
                <p className="text-muted-foreground text-xs mt-3">{note}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
