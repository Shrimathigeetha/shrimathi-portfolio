import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Asset Tagging System',
      description: 'Tag and manage organizational assets with scanning and reporting features.',
      tags: ['React', '.NET Core', 'PostgreSQL'],
      repo: '#',
      live: '#',
    },
    {
      title: 'Insurance Nomination System',
      description: 'Streamlined nomination flows for insurance policies with validations.',
      tags: ['Angular', 'Azure', 'SQL Server'],
      repo: '#',
      live: '#',
    },
    {
      title: 'IoT Greenhouse Monitor',
      description: 'Monitoring dashboard for greenhouse sensors with real-time updates.',
      tags: ['React', 'IoT', 'Azure'],
      repo: '#',
      live: '#',
    },
    {
      title: 'Smart Trolley',
      description: 'Retail assistance trolley with inventory interaction and analytics.',
      tags: ['React', 'Node.js'],
      repo: '#',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-white">Projects</h2>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}
