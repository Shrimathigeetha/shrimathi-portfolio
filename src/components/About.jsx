export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-white">About Me</h2>
      <p className="mt-4 text-gray-300 max-w-3xl">
        I'm a software engineer with 4+ years of experience building web applications using React,
        Angular and .NET Core. I design and implement REST APIs, work with SQL and PostgreSQL,
        and deploy solutions on Azure. I enjoy building scalable systems and improving user
        experiences through thoughtful frontend engineering.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
        <div>
          <h3 className="font-medium text-white">Core Technologies</h3>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>React, Angular</li>
            <li>.NET Core, C#</li>
            <li>PostgreSQL, SQL Server</li>
            <li>Azure (App Service, Functions)</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-white">Working Style</h3>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>API-first development</li>
            <li>Testable, maintainable code</li>
            <li>Agile collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
