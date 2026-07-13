import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import SkillsEnhanced from './components/SkillsEnhanced'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Stats />
        
        <div className="bg-white dark:bg-slate-900/50">
          <About />
        </div>
        
        <div className="bg-gray-50/50 dark:bg-slate-800/30">
          <SkillsEnhanced />
        </div>
        
        <div className="bg-white dark:bg-slate-900/50">
          <Experience />
        </div>
        
        <div className="bg-gray-50/50 dark:bg-slate-800/30">
          <Projects />
        </div>
        
        <div className="bg-white dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
            <Certifications />
            <Education />
            <Achievements />
          </div>
        </div>
        
        <div className="bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-950">
          <Contact />
        </div>
        
        <Footer />
      </main>
    </div>
  )
}

export default App
