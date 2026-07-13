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

  const navLinks = [
    { to: '#home', label: 'Home' },
    { to: '#about', label: 'About' },
    { to: '#skills', label: 'Skills' },
    { to: '#experience', label: 'Experience' },
    { to: '#projects', label: 'Projects' },
    { to: '#contact', label: 'Contact' },
  ]

  return (
    <motion.header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between h-20">
        {/* Logo */}
        <motion.a href="#home" className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">S</div>
          <span className="hidden sm:inline text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Shrimathi T</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a key={link.to} href={link.to} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition font-medium text-sm" whileHover={{ scale: 1.05 }}>
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-700 transition" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            {dark ? <FiSun className="text-yellow-400" size={20} /> : <FiMoon className="text-blue-600" size={20} />}
          </motion.button>

          {/* Resume Button */}
          <motion.a href="/Shrimathi_T_Resume_2026.pdf" target="_blank" rel="noreferrer" className="hidden sm:inline px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold text-sm" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Resume
          </motion.a>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <motion.div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-slate-800" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
          <div className="px-4 py-4 space-y-3 flex flex-col">
            {navLinks.map((link) => (
              <a key={link.to} href={link.to} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition font-medium py-2" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <motion.a href="/Shrimathi_T_Resume_2026.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg text-center font-semibold mt-2" whileHover={{ scale: 1.05 }}>
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
