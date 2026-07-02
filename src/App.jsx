import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import WhyHireMe from './sections/WhyHireMe';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Blog from './sections/Blog';
import InteractiveResume from './sections/InteractiveResume';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
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
      <main className="min-h-screen">
        <Hero />
        <WhyHireMe />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Blog />
        <InteractiveResume />
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
