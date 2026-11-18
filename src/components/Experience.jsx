import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { experience } from '../data/portfolio';

// Flatten groups into a single ordered list of "stars" while keeping their
// group label, so we can draw one continuous constellation.
function useConstellationNodes() {
  return useMemo(() => {
    const nodes = [];
    experience.forEach((group) => {
      group.nodes.forEach((node) => {
        nodes.push({ ...node, group: group.group });
      });
    });
    return nodes;
  }, []);
}

// Deterministic scattered positions (percentage based) so the layout is
// stable across renders but still feels hand-placed, like a constellation.
const POSITIONS = [
  { x: 18, y: 30 },
  { x: 38, y: 12 },
  { x: 58, y: 34 },
  { x: 76, y: 14 },
  { x: 88, y: 40 },
  { x: 50, y: 55 },
];

export default function Experience() {
  const nodes = useConstellationNodes();
  const [active, setActive] = useState(0);

  const positions = nodes.map((_, i) => POSITIONS[i % POSITIONS.length]);

  function go(delta) {
    setActive((a) => (a + delta + nodes.length) % nodes.length);
  }

  return (
    <section id="experience" className="relative py-32 md:py-44 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif-display section-heading text-white mb-16 md:mb-24"
        >
          Experience
        </motion.h2>

        {/* constellation map */}
        <div className="relative w-full h-[280px] md:h-[360px] mb-10">
          <svg className="absolute inset-0 w-full h-full overflow-visible" aria-hidden="true">
            {positions.slice(1).map((pos, i) => {
              const prev = positions[i];
              const isActiveLine = active === i || active === i + 1;
              return (
                <line
                  key={i}
                  x1={`${prev.x}%`}
                  y1={`${prev.y}%`}
                  x2={`${pos.x}%`}
                  y2={`${pos.y}%`}
                  stroke={isActiveLine ? 'rgba(155,180,255,0.55)' : 'rgba(255,255,255,0.12)'}
                  strokeWidth={1}
                />
              );
            })}
          </svg>

          {nodes.map((node, i) => {
            const pos = positions[i];
            const isActive = active === i;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center focus:outline-none"
                aria-label={node.title}
              >
                <motion.span
                  animate={{
                    scale: isActive ? 1.6 : 1,
                    boxShadow: isActive
                      ? '0 0 18px 4px rgba(180,200,255,0.6)'
                      : '0 0 6px 1px rgba(180,200,255,0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                  className={`block w-2.5 h-2.5 rounded-full ${isActive ? 'bg-white' : 'bg-white/50'}`}
                />
                <div
                  className={`mt-3 w-40 md:w-48 text-left transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 md:opacity-40'
                  }`}
                >
                  <p className="text-xs md:text-sm text-white font-medium leading-snug">{node.title}</p>
                  <p className="text-[10px] md:text-xs text-white/45 mt-1 leading-snug">{node.subtitle}</p>
                  <p className="text-[9px] md:text-[10px] text-white/30 mt-1 font-mono">{node.period}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* navigator */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            className="w-9 h-9 rounded-full panel-glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="text-center min-w-[140px]"
            >
              <p className="font-serif-display text-lg text-white">{nodes[active].group}</p>
              <p className="text-[10px] text-white/35 mt-1 tracking-wide">
                {active + 1} of {nodes.length}
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => go(1)}
            className="w-9 h-9 rounded-full panel-glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {nodes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                active === i ? 'bg-cosmic-blue' : 'bg-white/20'
              }`}
              aria-label={`Go to node ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
