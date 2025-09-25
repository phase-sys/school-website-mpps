import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon, Users } from 'lucide-react'

export interface Person {
  name: string
  role: string
  description: string
  icon?: LucideIcon
}

export function PersonCard({
  name,
  role,
  description,
  icon: Icon = Users,
}: Person) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon className="h-12 w-12 text-primary" />
          </div>
          <h3 className="font-bold text-xl text-foreground mb-2">{name}</h3>
          <p className="text-primary font-medium mb-4">{role}</p>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
