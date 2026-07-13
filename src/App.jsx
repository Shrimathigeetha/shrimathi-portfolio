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
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Stats />
        <About />
        <SkillsEnhanced />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
