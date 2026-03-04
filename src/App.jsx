import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Single page routing logic: scroll to section when path changes
    const path = location.pathname.replace('/', '');
    if (path) {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

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
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
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
