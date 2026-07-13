import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="about" className="py-20 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="flex flex-col items-center justify-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          {/* Tagline */}
          <motion.p className="text-lg sm:text-xl text-gray-400 mb-6 text-center max-w-2xl" variants={itemVariants}>
            Driving innovation through
          </motion.p>

          {/* Image */}
          <motion.div className="mb-12 w-full flex justify-center" variants={itemVariants}>
            <div className="relative w-64 h-48 sm:w-80 sm:h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <div className="relative rounded-full overflow-hidden border-4 border-orange-500/30 w-full h-full">
                <motion.img src={heroImg} alt="Shrimathi T" className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white">Crafting</span>
              <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Digital World</span>
              <span className="block text-white">With Code.</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p className="text-center text-gray-400 max-w-3xl text-lg mb-12 leading-relaxed" variants={itemVariants}>
            Full Stack expertise with <span className="text-orange-400 font-semibold">4+ years</span> of building scalable enterprise applications. Specialized in React, Angular, .NET Core, and cloud technologies. Passionate about transforming ideas into robust digital solutions.
          </motion.p>

          {/* CTA Button */}
          <motion.a href="#experience" className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} variants={itemVariants}>
            WHAT I DID?
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  )
}
