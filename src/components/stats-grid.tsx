export interface Stat {
  number: string
  label: string
}

interface StatsGridProps {
  stats: Stat[]
  className?: string
}

export function StatsGrid({ stats, className = '' }: StatsGridProps) {
  return (
    <div
      className={`grid gap-8 ${className}`}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`,
      }}
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
            {stat.number}
          </div>
          <div className="text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
