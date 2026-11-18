import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Planet from './Planet';

export default function ProjectPlanet({ project, index, onOpen, isMobile }) {
  const [hovered, setHovered] = useState(false);

  // stagger vertical offset for a scattered, floating layout
  const offsetY = index % 2 === 0 ? 0 : 34;

  return (
    <motion.button
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginTop: offsetY }}
      className="group relative flex flex-col items-center gap-4 focus:outline-none"
      aria-label={`Open ${project.name} project details`}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5 + (index % 3), repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-32 h-32 md:w-40 md:h-40"
      >
        <div
          className="absolute inset-0 rounded-full blur-2xl transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${project.hue}55, transparent 70%)`,
            opacity: hovered ? 0.9 : 0.4,
          }}
        />
        <motion.div
          animate={{ scale: hovered ? 1.12 : 1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full h-full"
        >
          <Canvas
            camera={{ position: [0, 0, 4], fov: 40 }}
            dpr={isMobile ? 1 : [1, 1.5]}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.7} />
            <directionalLight position={[2, 2, 3]} intensity={1.3} color="#ffffff" />
            <Suspense fallback={null}>
              <Planet
                color={project.hue}
                size={project.size || 1}
                ring={project.ring}
                rotationSpeed={0.25}
              />
            </Suspense>
          </Canvas>
        </motion.div>
      </motion.div>

      <span className="text-[11px] md:text-xs tracking-widest2 uppercase text-white/70 group-hover:text-white transition-colors text-center">
        {project.name}
      </span>
    </motion.button>
  );
}
