import { Navigation } from '@/components/scaffolding/Navigation'
import { Footer } from '@/components/scaffolding/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Target, Eye, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            About Excellence Academy
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            For over 25 years, we have been dedicated to providing exceptional
            education that nurtures the whole child and prepares students for
            lifelong success.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a nurturing and challenging educational environment
                  that empowers students to achieve academic excellence, develop
                  strong character, and become responsible global citizens.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the premier K-12 educational institution that inspires
                  lifelong learning, critical thinking, and innovation while
                  fostering a diverse and inclusive community of learners.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Values
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Excellence, Integrity, Respect, Innovation, and Community.
                  These core values guide everything we do and shape the
                  character of our students, faculty, and staff.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground">
              A legacy of educational excellence built on innovation and
              dedication
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Excellence Academy was founded in 1999 with a simple yet powerful
              vision: to create an educational environment where every student
              could thrive academically, socially, and emotionally. What started
              as a small school with 50 students has grown into a vibrant
              community of over 850 learners from kindergarten through 12th
              grade.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Our founders, Dr. Sarah Mitchell and Dr. James Rodriguez, were
              passionate educators who believed that small class sizes,
              innovative teaching methods, and a strong sense of community were
              the keys to unlocking every child's potential. Today, their vision
              continues to guide our approach to education.
            </p>

            <p className="text-lg leading-relaxed">
              Over the years, we have consistently evolved our programs to meet
              the changing needs of our students and society. From introducing
              cutting-edge STEM laboratories to expanding our arts programs and
              implementing project-based learning, we remain committed to
              preparing our students for success in an ever-changing world.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the dedicated leaders who guide our educational mission
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
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ed.D. in Educational Leadership, 20+ years in education.
                    Passionate about innovative curriculum design and
                    student-centered learning.
                  </p>
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
                    Michael Thompson
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    Academic Director
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    M.Ed. in Curriculum and Instruction, former classroom
                    teacher. Specializes in STEM education and assessment
                    strategies.
                  </p>
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
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    M.A. in School Counseling, dedicated to student wellness and
                    creating inclusive learning environments for all students.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Accreditation & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  Accredited By
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• National Association of Independent Schools (NAIS)</li>
                  <li>• Western Association of Schools and Colleges (WASC)</li>
                  <li>• International Baccalaureate Organization (IBO)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  Awards & Recognition
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Blue Ribbon School of Excellence (2022)</li>
                  <li>• STEM Education Award (2021)</li>
                  <li>• Outstanding Arts Program Recognition (2020)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
