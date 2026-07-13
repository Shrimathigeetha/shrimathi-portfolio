import { motion } from 'framer-motion'

export default function SkillsEnhanced() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-cyan-400' },
        { name: 'Angular', level: 85, color: 'from-red-500 to-pink-400' },
        { name: 'TypeScript', level: 80, color: 'from-blue-600 to-blue-400' },
        { name: 'Tailwind CSS', level: 88, color: 'from-cyan-500 to-blue-400' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: '.NET Core', level: 88, color: 'from-purple-600 to-blue-400' },
        { name: 'REST APIs', level: 90, color: 'from-green-500 to-emerald-400' },
        { name: 'C#', level: 85, color: 'from-purple-500 to-pink-400' },
        { name: 'Node.js', level: 75, color: 'from-green-600 to-green-400' },
      ],
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'PostgreSQL', level: 85, color: 'from-blue-600 to-blue-400' },
        { name: 'Azure', level: 80, color: 'from-blue-500 to-cyan-400' },
        { name: 'SQL Server', level: 82, color: 'from-red-600 to-red-400' },
        { name: 'Docker', level: 75, color: 'from-blue-500 to-cyan-400' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          Technical Skills
        </motion.h2>

        <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {skillCategories.map((category) => (
            <motion.div key={category.title} className="bg-white/50 dark:bg-slate-800/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-slate-700" variants={itemVariants} whileHover={{ y: -10 }}>
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs font-bold text-transparent bg-gradient-to-r bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, rgb(59, 130, 246), rgb(6, 182, 212))` }}>
                        {skill.level}%
                      </span>
                    </div>
                    <motion.div className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div className={`h-full rounded-full bg-gradient-to-r ${skill.color}`} initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }} />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
