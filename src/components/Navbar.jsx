import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FiGithub, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const navLinks = [
    { to: '#home', label: 'Home' },
    { to: '#about', label: 'About' },
    { to: '#skills', label: 'Skills' },
    { to: '#experience', label: 'Experience' },
    { to: '#projects', label: 'Projects' },
    { to: '#contact', label: 'Contact' },
  ]

  const socials = [
    { icon: FiLinkedin, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: FiGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FiInstagram, url: 'https://instagram.com/yourprofile', label: 'Instagram' },
    { icon: FiYoutube, url: 'https://youtube.com/@yourprofile', label: 'YouTube' },
  ]

  return (
    <motion.header className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/10" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between h-20">
        {/* Logo */}
        <motion.a href="#home" className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">S</div>
          <span className="hidden sm:inline text-lg font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Shrimathi</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a key={link.to} href={link.to} className="text-gray-300 hover:text-orange-400 transition font-medium text-sm" whileHover={{ scale: 1.05 }}>
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Right Section - Social Icons + Menu */}
        <div className="flex items-center gap-4">
          {/* Desktop Social Icons */}
          <div className="hidden md:flex gap-3">
            {socials.map((social) => (
              <motion.a key={social.label} href={social.url} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-orange-500 hover:text-white transition" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <motion.div className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
          <div className="px-4 py-6 space-y-3 flex flex-col">
            {navLinks.map((link) => (
              <a key={link.to} href={link.to} className="text-gray-300 hover:text-orange-400 transition font-medium py-2" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            {/* Mobile Social Icons */}
            <div className="flex gap-3 pt-4 border-t border-white/10">
              {socials.map((social) => (
                <motion.a key={social.label} href={social.url} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-orange-500 hover:text-white transition" whileHover={{ scale: 1.1 }}>
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
