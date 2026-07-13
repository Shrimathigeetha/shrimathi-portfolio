import heroImg from '../assets/hero.png'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex items-center">
      <div className="max-w-5xl mx-auto px-4 w-full flex flex-col md:flex-row items-center gap-8">
        <motion.div className="flex-1 text-center md:text-left" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Hi, I'm Shrimathi</h1>
          <p className="mt-3 text-cyan-200 text-lg">
            <Typewriter
              words={["Frontend Engineer", "React Developer", ".NET Enthusiast", "Azure Practitioner"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
            <a href="/Shrimathi_T_Resume_2026.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 bg-cyan-500 text-white rounded-md">Download Resume</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="px-3 py-2 border border-gray-600 text-gray-200 rounded-md">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="px-3 py-2 border border-gray-600 text-gray-200 rounded-md">LinkedIn</a>
          </div>
        </motion.div>

        <motion.div className="flex-1 flex justify-center md:justify-end" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <img src={heroImg} alt="profile" className="w-40 h-40 rounded-full object-cover border-2 border-white/10 shadow-lg" />
        </motion.div>
      </div>
    </section>
  )
}
