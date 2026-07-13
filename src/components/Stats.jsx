import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { value: '4+', label: 'Years Experience', icon: '📅' },
    { value: '15+', label: 'Projects Completed', icon: '🚀' },
    { value: '3', label: 'Companies', icon: '🏢' },
    { value: '10+', label: 'Tech Skills', icon: '⚙️' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-16 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm">
      <motion.div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {stats.map((stat) => (
          <motion.div key={stat.label} className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow" variants={itemVariants} whileHover={{ scale: 1.05 }}>
            <div className="text-4xl mb-2">{stat.icon}</div>
            <motion.div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              {stat.value}
            </motion.div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
