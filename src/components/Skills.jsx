const Skill = ({ name, pct }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm text-gray-300">
      <span>{name}</span>
      <span>{pct}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded h-2 mt-1">
      <div className="h-2 rounded bg-cyan-500" style={{ width: `${pct}%` }} />
    </div>
  </div>
)

export default function Skills() {
  const skills = [
    { name: 'React', pct: 90 },
    { name: 'Angular', pct: 80 },
    { name: '.NET Core', pct: 85 },
    { name: 'PostgreSQL', pct: 80 },
    { name: 'Azure', pct: 75 },
    { name: 'TypeScript', pct: 70 },
  ]

  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-white">Skills</h2>
      <div className="mt-6 max-w-3xl">
        {skills.map((s) => (
          <Skill key={s.name} name={s.name} pct={s.pct} />
        ))}
      </div>
    </section>
  )
}
