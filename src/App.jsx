import Navbar from './components/Navbar'
import Hero from './components/Hero'
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
    <div className="w-full min-h-screen bg-slate-950 dark">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        
        <div className="bg-slate-900">
          <SkillsEnhanced />
        </div>
        
        <div className="bg-slate-950">
          <Experience />
        </div>
        
        <div className="bg-slate-900">
          <Projects />
        </div>
        
        <div className="bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
            <Certifications />
            <Education />
            <Achievements />
          </div>
        </div>
        
        <div className="bg-slate-900">
          <Contact />
        </div>
        
        <Footer />
      </main>
    </div>
  )
}

export default App
