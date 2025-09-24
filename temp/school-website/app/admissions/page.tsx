import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, DollarSign, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Join Excellence Academy</h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            Begin your child's journey toward academic excellence and personal growth. We welcome students who are ready
            to be challenged and inspired.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="#application">Start Your Application</Link>
          </Button>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Admission Process</h2>
            <p className="text-lg text-muted-foreground">
              A straightforward process designed to get to know your child and family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Submit Application</h3>
                <p className="text-muted-foreground text-sm">
                  Complete our online application form with student information and academic history.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Campus Visit</h3>
                <p className="text-muted-foreground text-sm">
                  Schedule a tour to experience our campus and meet with our admissions team.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Assessment</h3>
                <p className="text-muted-foreground text-sm">
                  Age-appropriate assessment to understand your child's academic readiness and interests.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">4</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Decision</h3>
                <p className="text-muted-foreground text-sm">
                  Receive admission decision and enrollment information within two weeks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements by Grade Level */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Admission Requirements</h2>
            <p className="text-lg text-muted-foreground">
              Requirements vary by grade level to ensure appropriate placement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl text-foreground mb-4">Elementary (K-5)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Completed application form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Birth certificate and immunization records</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Previous school records (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Parent/student interview</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Readiness assessment (grades 1-5)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl text-foreground mb-4">Middle School (6-8)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Completed application form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Official transcripts from previous schools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Teacher recommendations (2)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Academic assessment in math and English</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Student interview</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl text-foreground mb-4">High School (9-12)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Completed application form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Official high school transcripts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Teacher recommendations (3)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Personal essay</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Entrance exam (SSAT or equivalent)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Important Dates</h2>
            <p className="text-lg text-muted-foreground">Key deadlines for the 2025-2026 academic year</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-lg text-foreground">Application Deadlines</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Early Decision</span>
                    <span className="font-medium text-foreground">December 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Regular Decision</span>
                    <span className="font-medium text-foreground">February 1, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Rolling Admissions</span>
                    <span className="font-medium text-foreground">Through May 1, 2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-lg text-foreground">Decision Notifications</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Early Decision</span>
                    <span className="font-medium text-foreground">January 15, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Regular Decision</span>
                    <span className="font-medium text-foreground">March 15, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Enrollment Deposit Due</span>
                    <span className="font-medium text-foreground">April 15, 2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tuition and Financial Aid */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tuition & Financial Aid</h2>
            <p className="text-lg text-muted-foreground">
              Investing in your child's future with transparent pricing and generous financial assistance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-xl text-foreground">2024-2025 Tuition</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Elementary (K-5)</span>
                    <span className="font-bold text-foreground">$18,500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Middle School (6-8)</span>
                    <span className="font-bold text-foreground">$21,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">High School (9-12)</span>
                    <span className="font-bold text-foreground">$24,500</span>
                  </div>
                  <div className="mt-4 p-4 bg-accent rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Tuition includes textbooks, technology, most field trips, and access to all facilities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-xl text-foreground">Financial Aid</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We believe that financial circumstances should not prevent qualified students from receiving an
                    excellent education. Excellence Academy offers need-based financial aid to families who qualify.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Over $2 million awarded annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">35% of students receive financial aid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Average award covers 60% of tuition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Payment plans available</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full mt-4 bg-transparent">
                    <Link href="/financial-aid">Learn More About Financial Aid</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="application" className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 opacity-90">Take the first step toward joining our community of learners</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="text-lg px-8">
              <Link href="/apply">Start Application</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Common questions about our admission process</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-2">What is the student-to-teacher ratio?</h3>
                <p className="text-muted-foreground">
                  Our average student-to-teacher ratio is 12:1, ensuring personalized attention and support for every
                  student.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-2">Do you offer transportation?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide bus transportation from several locations throughout the metropolitan area. Routes are
                  determined based on enrollment each year.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  What extracurricular activities are available?
                </h3>
                <p className="text-muted-foreground">
                  We offer over 50 clubs and activities including athletics, arts, academic competitions, community
                  service, and special interest groups.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-2">Can students transfer mid-year?</h3>
                <p className="text-muted-foreground">
                  Yes, we accept transfer students throughout the year based on availability. We work closely with
                  families to ensure a smooth transition.
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
