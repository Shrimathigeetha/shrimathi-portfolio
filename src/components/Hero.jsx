import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import heroImg from '../assets/hero.png'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-0 w-72 h-72 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <motion.div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="flex-1" variants={itemVariants}>
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent" whileHover={{ scale: 1.02 }}>
            Hi, I'm Shrimathi 👋
          </motion.h1>

          <motion.div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 h-16">
            <span className="font-semibold">I'm a</span>{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text font-bold">
              <Typewriter
                words={['Full Stack Developer', 'React Specialist', '.NET Engineer', 'Cloud Architect']}
                loop={0}
                cursor
                cursorStyle="▮"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.div>

          <motion.p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl leading-relaxed" variants={itemVariants}>
            With 4+ years of experience building scalable web applications using React, Angular, .NET Core, and Azure. Passionate about clean code, innovative solutions, and creating seamless user experiences.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 mb-8" variants={itemVariants}>
            <motion.a href="/Shrimathi_T_Resume_2026.pdf" target="_blank" rel="noreferrer" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold flex items-center gap-2 group" whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }} whileTap={{ scale: 0.95 }}>
              Download Resume <FiArrowRight className="group-hover:translate-x-1 transition" />
            </motion.a>
            <motion.a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-slate-800 transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <FiGithub /> GitHub
            </motion.a>
            <motion.a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-slate-800 transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <FiLinkedin /> LinkedIn
            </motion.a>
          </motion.div>

          <motion.div className="flex gap-6" variants={itemVariants}>
            {[
              { icon: FiGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
              { icon: FiLinkedin, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
              { icon: FiMail, url: 'mailto:your.email@example.com', label: 'Email' },
            ].map((social) => (
              <motion.a key={social.label} href={social.url} className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition" whileHover={{ scale: 1.2, rotate: 10 }}>
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="flex-1 flex justify-center" variants={itemVariants}>
          <motion.div className="relative w-64 h-64 md:w-80 md:h-80" animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-2xl"></div>
            <motion.img src={heroImg} alt="profile" className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl relative z-10" whileHover={{ scale: 1.05 }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
