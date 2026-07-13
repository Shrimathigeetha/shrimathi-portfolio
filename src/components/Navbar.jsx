import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const isDark = stored ? stored === 'dark' : false
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <motion.header className="fixed w-full top-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-white/20" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent" whileHover={{ scale: 1.05 }}>
          Shrimathi
        </motion.a>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            { to: '#home', label: 'Home' },
            { to: '#about', label: 'About' },
            { to: '#skills', label: 'Skills' },
            { to: '#experience', label: 'Experience' },
            { to: '#projects', label: 'Projects' },
            { to: '#contact', label: 'Contact' },
          ].map((l) => (
            <motion.a key={l.to} href={l.to} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition" whileHover={{ scale: 1.1 }}>
              {l.label}
            </motion.a>
          ))}

          <motion.button onClick={toggleTheme} className="ml-4 p-2 rounded-lg bg-blue-100 dark:bg-slate-800" whileHover={{ scale: 1.1 }}>
            {dark ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-blue-600" />}
          </motion.button>

          <motion.a href="/Shrimathi_T_Resume_2026.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium" whileHover={{ scale: 1.05 }}>
            Resume
          </motion.a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
          <div className="px-4 py-4 flex flex-col space-y-3">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`} className="text-gray-700 dark:text-gray-300" onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <motion.a href="/Shrimathi_T_Resume_2026.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg text-center" whileHover={{ scale: 1.05 }}>
              Resume
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
