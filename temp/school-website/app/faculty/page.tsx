import { Navigation } from '@/components/scaffolding/Navigation'
import { Footer } from '@/components/scaffolding/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Users, GraduationCap, Award, BookOpen } from 'lucide-react'

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Exceptional Faculty
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Dedicated educators who inspire, challenge, and support every
            student on their journey to excellence
          </p>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                75+
              </div>
              <div className="text-muted-foreground">Faculty Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                85%
              </div>
              <div className="text-muted-foreground">Hold Advanced Degrees</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                12
              </div>
              <div className="text-muted-foreground">
                Average Years Experience
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                12:1
              </div>
              <div className="text-muted-foreground">Student-Teacher Ratio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Experienced administrators guiding our educational mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    Dr. Emily Chen
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    Head of School
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Ed.D. in Educational Leadership from Harvard University. 20+
                    years in education with expertise in curriculum design and
                    school transformation.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <p>Previous: Principal at Lincoln Academy</p>
                    <p>
                      Specialties: Innovative Learning, Leadership Development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    Michael Thompson
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    Academic Director
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    M.Ed. in Curriculum and Instruction from Stanford. Former
                    high school mathematics teacher with expertise in STEM
                    education and assessment.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <p>Previous: Math Department Head</p>
                    <p>Specialties: STEM Integration, Data Analysis</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    Lisa Martinez
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    Student Affairs Director
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    M.A. in School Counseling from UCLA. Dedicated to student
                    wellness, college counseling, and creating inclusive
                    learning environments.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <p>Previous: School Counselor, 15 years</p>
                    <p>Specialties: Student Support, College Prep</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    Dr. Robert Kim
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    Elementary Principal
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Ph.D. in Elementary Education from Columbia. Passionate
                    about early childhood development and foundational learning
                    experiences.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <p>Previous: Elementary Teacher, 18 years</p>
                    <p>Specialties: Early Learning, Child Development</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    Sarah Johnson
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    Middle School Principal
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    M.Ed. in Middle Level Education from Vanderbilt. Expert in
                    adolescent development and middle school best practices.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <p>Previous: Middle School Teacher & Coach</p>
                    <p>
                      Specialties: Adolescent Learning, Social-Emotional
                      Development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    Dr. Amanda Foster
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    High School Principal
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Ed.D. in Secondary Education from University of
                    Pennsylvania. Specialist in college preparation and advanced
                    academic programs.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <p>Previous: IB Coordinator & AP Teacher</p>
                    <p>Specialties: College Prep, Advanced Academics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Highlights */}
      <section className="py-20 bg-background">
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

      {/* Faculty Excellence */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Faculty Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to hiring and retaining exceptional educators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-4">
                  Qualifications & Experience
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">
                      85% of faculty hold master's degrees or higher
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">
                      Average of 12 years teaching experience
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">
                      Ongoing professional development and training
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">
                      Subject matter expertise and specialized certifications
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-4">
                  Professional Development
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">
                      Annual professional development budget of $150,000
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">
                      Conference attendance and workshop participation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">
                      Collaborative planning and peer observation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">
                      Technology integration and innovative teaching methods
                    </span>
                  </li>
                </ul>
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
    </div>
  )
}
