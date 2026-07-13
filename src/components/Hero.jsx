import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi'
import { FiYoutube } from 'react-icons/fi'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const techStack = ['React', 'Angular', 'MongoDB', 'SQL', 'Node.js', 'ASP.NET', 'Azure', 'AWS']

  return (
    <section id="home" className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating dots */}
        {[...Array(50)].map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 bg-cyan-400/20 rounded-full" initial={{ x: Math.random() * 1000 - 500, y: Math.random() * 1000 - 500 }} animate={{ y: [0, -30, 0], x: [0, Math.random() * 20 - 10, 0] }} transition={{ duration: Math.random() * 5 + 5, repeat: Infinity }} style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} />
        ))}
      </div>

      <motion.div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center" variants={containerVariants} initial="hidden" animate="visible">
        {/* Main Heading */}
        <motion.div className="mb-8" variants={itemVariants}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">SHRIMATHI T</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-8" variants={itemVariants}>
          Full Stack Web Developer
        </motion.h2>

        {/* Tech Stack */}
        <motion.div className="mb-12 flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base" variants={itemVariants}>
          {techStack.map((tech, idx) => (
            <span key={idx} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 border border-white/20 hover:border-cyan-400/50 transition">
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-6 justify-center mb-16" variants={itemVariants}>
          <motion.a href="#projects" className="px-8 sm:px-10 py-4 border-2 border-white/40 text-white rounded-full font-semibold hover:border-white hover:bg-white/5 transition text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            See My Latest Works
          </motion.a>
          <motion.a href="#contact" className="px-8 sm:px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex justify-center gap-6 items-center" variants={itemVariants}>
          <span className="text-gray-400 text-sm">Follow Me:</span>
          {[
            { icon: FiLinkedin, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
            { icon: FiGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
            { icon: FiInstagram, url: 'https://instagram.com/yourprofile', label: 'Instagram' },
            { icon: FiYoutube, url: 'https://youtube.com/@yourprofile', label: 'YouTube' },
          ].map((social) => (
            <motion.a key={social.label} href={social.url} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-orange-500 hover:border-orange-500 transition" whileHover={{ scale: 1.15, rotate: 10 }} whileTap={{ scale: 0.9 }}>
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <div className="text-gray-500 text-sm">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center mt-2">
          <motion.div className="w-1 h-2 bg-gray-500 rounded-full mt-2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  )
}
