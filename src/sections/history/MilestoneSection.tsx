'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Building, Users, Award } from 'lucide-react'
import { SectionHeader } from '../../components/section-header'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'

interface Milestone {
  year: string
  icon: React.ReactNode
  title: string
  description: string
}

function MilestoneItem({ year, icon, title, description }: Milestone) {
  return (
    <div className="relative flex flex-col md:flex-row gap-8 items-start">
      {/* Year badge */}
      <div className="flex-shrink-0 relative z-10">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">
            {year}
          </span>
        </div>
      </div>

      {/* Card content */}
      <Card className="flex-1">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="h-6 w-6 text-primary mt-1 flex-shrink-0">
              {icon}
            </div>
            <div>
              <h3 className="font-bold text-xl text-foreground mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function MilestonesSection() {
  const milestones: Milestone[] = [
    {
      year: '1999',
      icon: <Building className="h-6 w-6" />,
      title: 'Foundation & First Campus',
      description:
        'Excellence Academy was founded by Dr. Sarah Mitchell and Dr. James Rodriguez with just 50 students in grades K-6. Our first campus was a modest building with 8 classrooms, but our vision was anything but small.',
    },
    {
      year: '2003',
      icon: <Users className="h-6 w-6" />,
      title: 'Middle School Expansion',
      description:
        'Growing demand led us to expand to include grades 7-8, adding specialized science laboratories and our first computer lab. Student enrollment reached 150 students with 20 dedicated faculty members.',
    },
    {
      year: '2007',
      icon: <Building className="h-6 w-6" />,
      title: 'High School & New Campus',
      description:
        'We completed our K-12 vision by adding grades 9-12 and moving to our current 50-acre campus. The new facility included advanced science labs, an arts center, gymnasium, and library.',
    },
    {
      year: '2012',
      icon: <Award className="h-6 w-6" />,
      title: 'Digital Learning Initiative',
      description:
        'Launched our 1:1 technology program, providing every student with a tablet or laptop. We also introduced our first robotics team and coding curriculum across all grade levels.',
    },
    {
      year: '2018',
      icon: <Award className="h-6 w-6" />,
      title: 'International Baccalaureate Authorization',
      description:
        'Became an authorized IB World School, offering the International Baccalaureate Diploma Programme. This milestone recognized our commitment to global education and academic rigor.',
    },
    {
      year: '2022',
      icon: <Award className="h-6 w-6" />,
      title: 'Blue Ribbon School Recognition',
      description:
        'Received the prestigious Blue Ribbon School award from the U.S. Department of Education, recognizing our outstanding academic achievement and progress in closing achievement gaps.',
    },
  ]

  return (
    <SectionWrapper width="4xl" bg="background">
      <SectionHeader
        title="Milestones in Excellence"
        subtitle="Key moments that shaped our journey to becoming a premier educational institution"
      />

      {/* Timeline wrapper */}
      <div className="relative space-y-12">
        {/* Vertical dashed line */}
        <div className="absolute top-10 bottom-0 left-10 md:left-10 w-px border-l-2 border-dashed border-primary/40" />

        {milestones.map((m, i) => (
          <MilestoneItem key={i} {...m} />
        ))}
      </div>
    </SectionWrapper>
  )
}
