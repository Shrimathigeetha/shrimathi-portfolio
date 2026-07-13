export default function Achievements() {
  const items = [
    'Published open-source contributions',
    'Recipient of Hackathon award',
    'Employee recognition at Aeries Technology',
  ]

  return (
    <section id="achievements" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-white">Achievements</h2>
      <ul className="mt-4 list-disc list-inside text-gray-300">
        {items.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </section>
  )
}
