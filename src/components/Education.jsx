export default function Education() {
  const items = [
    { degree: 'B.Tech - Computer Science', school: 'Your University', year: '2018' },
  ]

  return (
    <section id="education" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-white">Education</h2>
      <div className="mt-6 space-y-4">
        {items.map((it) => (
          <div key={it.school} className="bg-slate-800 p-4 rounded-md">
            <div className="font-medium text-white">{it.degree}</div>
            <div className="text-sm text-gray-300">{it.school} • {it.year}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
