import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import StarField from './components/StarField';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Reports from './components/Reports';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const progressRef = useRef(null);

  useEffect(() => {
    // A single, clearly-scoped GSAP + ScrollTrigger usage: a top progress
    // bar that fills as the visitor scrolls through the whole experience.
    const ctx = gsap.context(() => {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-space-black min-h-screen">
      <div className="grain-overlay" />
      <StarField />

      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left scale-x-0 z-[70] bg-gradient-to-r from-cosmic-blue via-cosmic-violet to-cosmic-cyan"
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Reports />
        <Experience />
        <Skills />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}