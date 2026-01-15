import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import Background3D from './three/Background3D'
import About from './sections/About'
import InteractiveResume from './sections/InteractiveResume'

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

      {/* 3D Background Layer - Disabled as per request for clean white theme */}
      {/* <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]} gl={{ antialias: false, powerPreference: "high-performance" }}>
          <Suspense fallback={null}>
            <Background3D />
            <EffectComposer>
              <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={0.5} />
              <Noise opacity={0.05} />
              <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div> */}

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
          <InteractiveResume />
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
