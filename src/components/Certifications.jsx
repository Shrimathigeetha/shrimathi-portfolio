export default function Certifications() {
  const certs = [
    { title: 'Azure Fundamentals', org: 'Microsoft' },
    { title: 'React - Advanced', org: 'Online Course' },
    { title: 'Design Patterns', org: 'Udemy' },
  ]

  return (
    <section id="certifications" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-white">Certifications</h2>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {certs.map((c) => (
          <div key={c.title} className="bg-slate-800 p-4 rounded-md">
            <div className="font-medium text-white">{c.title}</div>
            <div className="text-sm text-gray-300">{c.org}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
