import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Add magnetic cursor logic or other global effects if needed
    console.log("Antigravity Protocol v2 Initialized");
  }, []);

  return (
    <div className="relative bg-background selection:bg-primary/30 selection:text-black">
      {/* Premium Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-[300] origin-left"
        style={{ scaleX }}
      />

      {/* Cinematic Grain Overlay */}
      <div className="grain-overlay" />

      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer & Global Actions */}
      <Footer />

      {/* Dynamic Background Noise/Lighting */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-premium opacity-30" />
      </div>
    </div>
  );
}

export default App;
