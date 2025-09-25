import { PersonCard, Person } from './person-card'

interface PersonCardGroupProps {
  people: Person[]
}

export function PersonCardGroup({ people }: PersonCardGroupProps) {
  return (
    <div
      className="grid gap-8"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(18rem, 1fr))`,
      }}
    >
      {people.map((person, idx) => (
        <PersonCard key={idx} {...person} />
      ))}
    </div>
  )
}
