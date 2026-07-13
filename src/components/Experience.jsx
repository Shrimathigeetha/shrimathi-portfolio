const Entry = ({ period, role, company, details }) => (
  <div className="flex items-start gap-4">
    <div className="w-24 text-sm text-gray-400">{period}</div>
    <div className="flex-1">
      <div className="bg-slate-800 p-4 rounded-md">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white">{role}</div>
            <div className="text-sm text-gray-300">{company}</div>
          </div>
        </div>
        {details && <p className="mt-2 text-gray-300 text-sm">{details}</p>}
      </div>
    </div>
  </div>
)

export default function Experience() {
  const items = [
    { period: '2023 - Present', role: 'Software Engineer', company: 'Aeries Technology', details: 'Working on full-stack features using React and .NET Core.' },
    { period: '2021 - 2023', role: 'Frontend Developer', company: 'Bajaj Finserv', details: 'Built responsive UI and integrated REST APIs.' },
    { period: '2020', role: 'Intern', company: 'IBM', details: 'Contributed to internal tooling and automation.' },
    { period: '2019', role: 'Intern', company: 'Samsung', details: 'Worked on embedded UI components.' },
    { period: '2018 - Present', role: 'Contributor', company: 'Venmurasu Programming Team', details: 'Open-source and collaborative projects.' },
  ]

  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-white">Experience</h2>
      <div className="mt-6 space-y-6">
        {items.map((it) => (
          <Entry key={it.company + it.period} {...it} />
        ))}
      </div>
    </section>
  )
}
