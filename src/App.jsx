import { useState, useEffect } from 'react'
import About from './sections/About'

import Contact from './sections/Contact'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

import Navbar from './components/Navbar'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading/decoding assets
    const timer = setTimeout(() => setIsLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-background text-textMain">
      <Navbar />

      {/* Cinematic Loader */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-1000 pointer-events-none ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
      >
        <span className="text-primary text-3xl font-light tracking-widest animate-pulse">A P S</span>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mt-4" />
      </div>

      {/* Main Content Layer */}
      <main
        className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6">
          <Hero />
          <About />
          <Projects />
          <Education />
          <Skills />

          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default App
