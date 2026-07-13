import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, tags, repo, live }) {
  return (
    <motion.article whileHover={{ scale: 1.02 }} className="bg-slate-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow">
      <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-600 rounded-md flex items-center justify-center mb-4">
        <div className="text-gray-300">Preview</div>
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-300 text-sm">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-gray-700 text-gray-200 rounded-full">{t}</span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        {live && (
          <a href={live} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 bg-cyan-500 text-white rounded-md">View</a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border border-gray-600 text-gray-200 rounded-md">Repo</a>
        )}
      </div>
    </motion.article>
  )
}
