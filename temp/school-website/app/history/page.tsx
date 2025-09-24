import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Building, Award } from "lucide-react"

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Rich History</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Twenty-five years of educational excellence, innovation, and community building
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Milestones in Excellence</h2>
            <p className="text-lg text-muted-foreground">
              Key moments that shaped our journey to becoming a premier educational institution
            </p>
          </div>

          <div className="space-y-12">
            {/* 1999 - Founding */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">1999</span>
                </div>
              </div>
              <Card className="flex-1">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Building className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-2">Foundation & First Campus</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Excellence Academy was founded by Dr. Sarah Mitchell and Dr. James Rodriguez with just 50
                        students in grades K-6. Our first campus was a modest building with 8 classrooms, but our vision
                        was anything but small.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 2003 - Middle School */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">2003</span>
                </div>
              </div>
              <Card className="flex-1">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-2">Middle School Expansion</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Growing demand led us to expand to include grades 7-8, adding specialized science laboratories
                        and our first computer lab. Student enrollment reached 150 students with 20 dedicated faculty
                        members.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 2007 - High School */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">2007</span>
                </div>
              </div>
              <Card className="flex-1">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Building className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-2">High School & New Campus</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We completed our K-12 vision by adding grades 9-12 and moving to our current 50-acre campus. The
                        new facility included advanced science labs, an arts center, gymnasium, and library.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 2012 - Technology Integration */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">2012</span>
                </div>
              </div>
              <Card className="flex-1">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-2">Digital Learning Initiative</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Launched our 1:1 technology program, providing every student with a tablet or laptop. We also
                        introduced our first robotics team and coding curriculum across all grade levels.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 2018 - IB Program */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">2018</span>
                </div>
              </div>
              <Card className="flex-1">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-2">
                        International Baccalaureate Authorization
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Became an authorized IB World School, offering the International Baccalaureate Diploma
                        Programme. This milestone recognized our commitment to global education and academic rigor.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 2022 - Blue Ribbon */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">2022</span>
                </div>
              </div>
              <Card className="flex-1">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-2">Blue Ribbon School Recognition</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Received the prestigious Blue Ribbon School award from the U.S. Department of Education,
                        recognizing our outstanding academic achievement and progress in closing achievement gaps.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Legacy of Excellence</h2>
            <p className="text-lg text-muted-foreground">The numbers tell our story of growth and achievement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-muted-foreground">Alumni Graduated</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">College Acceptance</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">National Awards</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">25</div>
                <div className="text-muted-foreground">Years of Service</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Honoring Our Founders</h2>
            <p className="text-lg text-muted-foreground">The visionary educators who started it all</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">Dr. Sarah Mitchell</h3>
                  <p className="text-primary font-medium mb-4">Co-Founder & Former Head of School</p>
                  <p className="text-muted-foreground leading-relaxed">
                    A passionate advocate for child-centered learning, Dr. Mitchell brought 15 years of classroom
                    experience and a Ph.D. in Educational Psychology to create our innovative curriculum approach.
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
                  <h3 className="font-bold text-xl text-foreground mb-2">Dr. James Rodriguez</h3>
                  <p className="text-primary font-medium mb-4">Co-Founder & Former Academic Director</p>
                  <p className="text-muted-foreground leading-relaxed">
                    With expertise in STEM education and school administration, Dr. Rodriguez designed our integrated
                    curriculum model that continues to set us apart in preparing students for the 21st century.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
