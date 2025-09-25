import { Navigation } from '@/components/scaffolding/Navigation'
import { Footer } from '@/components/scaffolding/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Award, BookOpen } from 'lucide-react'
import { HeroText } from '@/components/hero-text'
import { PageWrapper } from '@/components/scaffolding/PageWrapper'
import { StatsSection } from '@/sections/faculty/StatsSection'
import { LeadershipSection } from '@/sections/faculty/LeadershipSection'
import { FacultyExcellenceSection } from '@/sections/faculty/FacultyExcellenceSection'

export default function FacultyPage() {
  return (
    <PageWrapper>
      <Navigation />
      <HeroText
        title="Our Exceptional Faculty"
        subtitle="Dedicated educators who inspire, challenge, and support every student on their journey to excellence"
      />
      <LeadershipSection />
      <StatsSection />
      <FacultyExcellenceSection />

      {/* Department Highlights */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Department Highlights
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet some of our outstanding department leaders and teachers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl text-foreground mb-4">
                  Mathematics Department
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Dr. Jennifer Walsh
                      </h4>
                      <p className="text-sm text-primary">Department Head</p>
                      <p className="text-xs text-muted-foreground">
                        Ph.D. in Mathematics, MIT. Specializes in advanced
                        calculus and mathematical modeling.
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our mathematics department offers courses from basic
                    arithmetic through multivariable calculus, with emphasis on
                    problem-solving and real-world applications.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl text-foreground mb-4">
                  Science Department
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Dr. Marcus Rodriguez
                      </h4>
                      <p className="text-sm text-primary">Department Head</p>
                      <p className="text-xs text-muted-foreground">
                        Ph.D. in Chemistry, Caltech. Former research scientist
                        with 15+ publications.
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    State-of-the-art laboratories support hands-on learning in
                    biology, chemistry, physics, and environmental science with
                    research opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl text-foreground mb-4">
                  English Department
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Ms. Catherine Brooks
                      </h4>
                      <p className="text-sm text-primary">Department Head</p>
                      <p className="text-xs text-muted-foreground">
                        M.A. in English Literature, Yale. Published author and
                        writing workshop leader.
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Comprehensive literacy program emphasizing critical reading,
                    creative writing, and communication skills across diverse
                    literary traditions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl text-foreground mb-4">
                  Arts Department
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Mr. David Chen
                      </h4>
                      <p className="text-sm text-primary">Department Head</p>
                      <p className="text-xs text-muted-foreground">
                        M.F.A. in Studio Arts, RISD. Professional artist with
                        gallery exhibitions nationwide.
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Comprehensive arts education including visual arts, music,
                    theater, and digital media with performance and exhibition
                    opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Support Staff
            </h2>
            <p className="text-lg text-muted-foreground">
              Dedicated professionals who make our school community thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Counseling Services
                </h3>
                <p className="text-muted-foreground text-sm">
                  School counselors, college advisors, and mental health
                  professionals supporting student wellness.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Library & Technology
                </h3>
                <p className="text-muted-foreground text-sm">
                  Librarians and IT specialists ensuring access to resources and
                  technology support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Learning Support</h3>
                <p className="text-muted-foreground text-sm">
                  Special education coordinators and learning specialists
                  providing individualized support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Administrative Team
                </h3>
                <p className="text-muted-foreground text-sm">
                  Admissions, finance, facilities, and operations staff ensuring
                  smooth daily operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  )
}
