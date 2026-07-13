import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import heroImg from '../assets/hero.png'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section id="home" className="min-h-screen w-full pt-32 pb-20 relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-40 w-80 h-80 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <motion.div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" variants={containerVariants} initial="hidden" animate="visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div className="flex flex-col justify-center" variants={itemVariants}>
            <motion.div className="mb-6" variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="block">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">Shrimathi T</span>
              </h1>
            </motion.div>

            <motion.div className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 h-20 flex items-start" variants={itemVariants}>
              <span className="text-gray-700 dark:text-gray-300">I build</span>
              <span className="ml-3 text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                <Typewriter
                  words={['Beautiful Web Apps', 'Scalable Solutions', 'Modern Interfaces', 'Cloud Applications']}
                  loop={0}
                  cursor
                  cursorStyle="▮"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={2500}
                />
              </span>
            </motion.div>

            <motion.p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg" variants={itemVariants}>
              Full-stack developer with 4+ years of experience building enterprise applications. Specialized in React, Angular, .NET Core, and Azure cloud solutions. Passionate about clean code and scalable architecture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 mb-10" variants={itemVariants}>
              <motion.a href="/Shrimathi_T_Resume_2026.pdf" target="_blank" rel="noreferrer" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg" whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.4)' }} whileTap={{ scale: 0.95 }}>
                Download Resume <FiArrowRight className="group-hover:translate-x-1 transition" />
              </motion.a>
              <motion.a href="#projects" className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-slate-800 transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View My Work
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-6 items-center" variants={itemVariants}>
              <span className="text-gray-600 dark:text-gray-400 font-medium">Connect:</span>
              {[
                { icon: FiGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
                { icon: FiLinkedin, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
                { icon: FiMail, url: 'mailto:your.email@example.com', label: 'Email' },
              ].map((social) => (
                <motion.a key={social.label} href={social.url} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 transition" whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div className="flex justify-center items-center" variants={itemVariants}>
            <motion.div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96" animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
              {/* Glow Background */}
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-3xl blur-3xl" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} />

              {/* Image Container */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-4 border-white/20 dark:border-slate-700/50 shadow-2xl backdrop-blur-sm">
                <motion.img src={heroImg} alt="Shrimathi T" className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
              </div>

              {/* Decorative Rings */}
              <motion.div className="absolute -inset-4 border-2 border-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-3xl" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
              <motion.div className="absolute -inset-8 border border-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-3xl" animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
