import React, { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import MascotCanvas from './components/MascotCanvas.jsx';

export default function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after all components are mounted
    setTimeout(() => ScrollTrigger.refresh(), 200);
  }, []);

  return (
    <>
      <Hero />
      <Projects />
      <Contact />
      
      {/* 3D Mascot Container */}
      <div id="mascot-container" className="float">
        <MascotCanvas />
      </div>
    </>
  );
}
