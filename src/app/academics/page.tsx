import { Navigation } from '@/components/scaffolding/Navigation'
import { Footer } from '@/components/scaffolding/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  BookOpen,
  Microscope,
  Palette,
  Globe,
  Calculator,
  Music,
} from 'lucide-react'
import Link from 'next/link'

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Academic Excellence
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Comprehensive K-12 curriculum designed to challenge, inspire, and
            prepare students for success in college and beyond
          </p>
        </div>
      </section>

      {/* Grade Levels Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Programs by Grade Level
            </h2>
            <p className="text-lg text-muted-foreground">
              Age-appropriate curriculum that builds upon itself year after year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">
                    Elementary (K-5)
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Foundation building through play-based learning, literacy
                    development, and mathematical reasoning. Small class sizes
                    ensure personalized attention.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Reading & Language Arts</li>
                    <li>• Mathematics Foundations</li>
                    <li>• Science Exploration</li>
                    <li>• Social Studies</li>
                    <li>• Arts & Music</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Microscope className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">
                    Middle School (6-8)
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Transitional years focusing on critical thinking, research
                    skills, and academic independence. Introduction to advanced
                    concepts and electives.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Advanced Mathematics</li>
                    <li>• Laboratory Sciences</li>
                    <li>• World Languages</li>
                    <li>• Technology & Engineering</li>
                    <li>• Elective Courses</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">
                    High School (9-12)
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    College-preparatory curriculum with AP courses, IB Diploma
                    Programme, and specialized tracks. Focus on college
                    readiness and career preparation.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• AP & IB Courses</li>
                    <li>• College Counseling</li>
                    <li>• Internship Programs</li>
                    <li>• Research Projects</li>
                    <li>• Leadership Opportunities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Subjects */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Academic Areas
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive curriculum covering all essential subjects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      English Language Arts
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Comprehensive literacy program emphasizing reading
                      comprehension, creative writing, critical analysis, and
                      communication skills across all grade levels.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Calculator className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      Mathematics
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Progressive math curriculum from basic numeracy through
                      advanced calculus and statistics, with emphasis on
                      problem-solving and real-world applications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Microscope className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      Science
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Hands-on science education covering biology, chemistry,
                      physics, and earth sciences with state-of-the-art
                      laboratory facilities and research opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      Social Studies
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Comprehensive study of history, geography, civics, and
                      economics to develop informed global citizens with
                      critical thinking skills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Palette className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      Arts
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Rich arts program including visual arts, music, theater,
                      and digital media to foster creativity and self-expression
                      in all students.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Music className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      World Languages
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Foreign language instruction in Spanish, French, and
                      Mandarin Chinese, with cultural immersion experiences and
                      exchange programs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Signature Programs
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized programs that set Excellence Academy apart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl text-foreground mb-4">
                  International Baccalaureate (IB)
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our IB Diploma Programme offers a rigorous, internationally
                  recognized curriculum that develops critical thinking,
                  intercultural understanding, and global perspectives. Students
                  engage in extended research projects and community service.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Theory of Knowledge (TOK)</li>
                  <li>• Extended Essay research project</li>
                  <li>• Creativity, Activity, Service (CAS)</li>
                  <li>• Six subject areas of study</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl text-foreground mb-4">
                  STEM Excellence Program
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Integrated Science, Technology, Engineering, and Mathematics
                  curriculum with hands-on projects, robotics competitions, and
                  partnerships with local universities and tech companies.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Advanced robotics and coding</li>
                  <li>• Engineering design challenges</li>
                  <li>• Research partnerships</li>
                  <li>• Science fair competitions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl text-foreground mb-4">
                  Advanced Placement (AP)
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Over 20 AP courses available across all subject areas,
                  allowing students to earn college credit while still in high
                  school. Our AP pass rates consistently exceed national
                  averages.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 20+ AP course offerings</li>
                  <li>• Dedicated AP preparation</li>
                  <li>• College credit opportunities</li>
                  <li>• Expert faculty instruction</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl text-foreground mb-4">
                  Arts Integration Program
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Unique program that integrates arts education across all
                  subjects, fostering creativity and innovative thinking.
                  Students participate in performances, exhibitions, and
                  community arts projects.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cross-curricular arts integration</li>
                  <li>• Performance opportunities</li>
                  <li>• Community partnerships</li>
                  <li>• Digital arts and media</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Academic Support Services
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Comprehensive support to ensure every student reaches their full
            potential
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-3">
                  Learning Support
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Individualized support for students with diverse learning
                  needs, including tutoring, study skills development, and
                  accommodations for learning differences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-3">
                  College Counseling
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Dedicated college counselors work with students and families
                  from 9th grade through graduation to navigate the college
                  application process and career planning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-3">
                  Enrichment Programs
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Advanced learning opportunities for gifted students, including
                  independent study, mentorship programs, and acceleration
                  options in specific subject areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-3">
                  Technology Integration
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  1:1 device program with comprehensive digital literacy
                  curriculum, coding classes, and integration of technology
                  across all subject areas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Academic Excellence
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our comprehensive academic program can prepare your
            child for success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="text-lg px-8"
            >
              <Link href="/admissions">Apply Now</Link>
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

      <Footer />
    </div>
  )
}
