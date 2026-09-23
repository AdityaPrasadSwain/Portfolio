import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
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
    <div className="relative bg-transparent selection:bg-primary/30 selection:text-black">
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
      <main className="min-h-screen pt-24">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<><WhyHireMe /><About /></>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<><Projects /><Certificates /></>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<InteractiveResume />} />
        </Routes>
      </main>

      {/* Footer & Global Actions */}
      <Footer />

      {/* Dynamic Premium Aurora Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-primary/20 blur-[120px] animate-float mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-secondary/20 blur-[120px] animate-float-delayed mix-blend-screen" />
        <div className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/20 blur-[120px] animate-float-slow mix-blend-screen" />
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-premium opacity-40" />
      </div>
    </div>
  );
}

export default App;
