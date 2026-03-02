import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-background">
      {/* Global Grainy Texture */}
      <div className="grain-overlay" />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
