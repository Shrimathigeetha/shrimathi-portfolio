import { useState, useEffect } from 'react'

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

  const links = [
    { to: '#home', label: 'Home' },
    { to: '#about', label: 'About' },
    { to: '#skills', label: 'Skills' },
    { to: '#experience', label: 'Experience' },
    { to: '#projects', label: 'Projects' },
    { to: '#contact', label: 'Contact' },
  ]

  return (
    <header className="w-full bg-transparent">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold text-white">Shrimathi T</a>

        <nav className="hidden md:flex items-center space-x-6">
          {links.map((l) => (
            <a key={l.to} href={l.to} className="text-gray-300 hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="/Shrimathi_T_Resume_2026.pdf" target="_blank" rel="noreferrer" className="ml-2 px-3 py-1 bg-cyan-500 text-white rounded-md text-sm">
            Resume
          </a>
          <button onClick={toggleTheme} className="ml-3 p-2 rounded-md bg-transparent text-gray-200">
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 116.707 2.707a8 8 0 0010.586 10.586z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.03a1 1 0 011.415 0l.708.707a1 1 0 11-1.414 1.415l-.709-.708a1 1 0 010-1.414zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zM6.34 4.343a1 1 0 010 1.414L5.63 6.464A1 1 0 114.216 5.05l.709-.707a1 1 0 011.414 0zM4 9a1 1 0 110 2H3a1 1 0 110-2h1zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm6.364-1.636a1 1 0 010 1.414l-.708.708a1 1 0 11-1.415-1.414l.708-.708a1 1 0 011.415 0zM6.343 15.657a1 1 0 01-1.414 0l-.708-.707a1 1 0 011.414-1.415l.708.708a1 1 0 010 1.414z" />
              </svg>
            )}
          </button>
        </nav>

        <button
          className="md:hidden p-2 text-gray-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-800">
          <div className="px-4 py-4 flex flex-col space-y-2">
            {links.map((l) => (
              <a key={l.to} href={l.to} className="text-gray-200" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="/Shrimathi_T_Resume_2026.pdf" target="_blank" rel="noreferrer" className="mt-2 px-3 py-1 bg-cyan-500 text-white rounded-md text-sm">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
