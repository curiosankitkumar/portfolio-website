import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, ChevronDown, Circle } from 'lucide-react';
import Planet from './Planet';
import { profile } from '../data/portfolio';

function WebGLFallback() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[45vh] flex items-end justify-center pointer-events-none">
      <div className="w-[80vw] max-w-2xl h-[80vw] max-h-96 rounded-full bg-gradient-to-t from-cosmic-blue/40 via-cosmic-blue/10 to-transparent blur-2xl" />
    </div>
  );
}

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

export default function Hero() {
  const sectionRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setHasWebGL(supportsWebGL());
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const planetY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 3D planet */}
      <motion.div
        style={{ y: planetY }}
        className="absolute inset-x-0 bottom-0 h-[55vh] md:h-[65vh]"
      >
        {hasWebGL ? (
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={isMobile ? 1 : [1, 1.5]}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 2, 4]} intensity={1.4} color="#dfe8ff" />
            <directionalLight position={[-4, -1, -2]} intensity={0.3} color="#5b8def" />
            <Suspense fallback={null}>
              <Planet
                color="#2f6fdb"
                size={2.6}
                position={[0, -2.6, 0]}
                rotationSpeed={0.05}
              />
            </Suspense>
          </Canvas>
        ) : (
          <WebGLFallback />
        )}
      </motion.div>

      {/* floating rocket */}
      <motion.div
        className="absolute top-[22%] right-[12%] hidden sm:block text-white/70"
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Rocket size={26} strokeWidth={1.2} />
      </motion.div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          style={{ y: badgeY }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full panel-glass text-[10px] md:text-xs tracking-widest2 uppercase text-white/70"
        >
          <Circle size={7} className="fill-emerald-400 text-emerald-400" />
          {profile.badge}
        </motion.div>

        <motion.h1
          style={{ y: titleY, opacity: titleOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-display text-glow text-white section-heading"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-6 space-y-1"
        >
          <p className="text-sm md:text-base text-white/70">{profile.tagline}</p>
          <p className="text-xs md:text-sm text-white/40 tracking-wide">{profile.subtagline}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] tracking-widest2 uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
