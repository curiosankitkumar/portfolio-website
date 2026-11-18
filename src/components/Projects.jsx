import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import ProjectPlanet from './ProjectPlanet';
import { projects } from '../data/portfolio';

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setSelected(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="projects" className="relative py-32 md:py-44 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif-display section-heading text-white mb-6"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-white/40 text-sm mb-16 md:mb-24 tracking-wide"
        >
          Click a planet to explore the project.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-6 md:gap-x-10 place-items-center">
          {projects.map((project, i) => (
            <ProjectPlanet
              key={project.id}
              project={project}
              index={i}
              isMobile={isMobile}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 backdrop-blur-md px-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full panel-glass rounded-2xl p-8 md:p-10"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div
                className="w-14 h-14 rounded-full mb-6"
                style={{
                  background: `radial-gradient(circle at 35% 30%, ${selected.hue}, transparent 70%)`,
                  boxShadow: `0 0 30px ${selected.hue}66`,
                }}
              />

              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif-display text-2xl md:text-3xl text-white">
                  {selected.name}
                </h3>
                {selected.date && (
                  <span className="text-[10px] font-mono text-white/35 shrink-0 ml-3">
                    {selected.date}
                  </span>
                )}
              </div>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                {selected.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selected.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] tracking-wide uppercase px-3 py-1.5 rounded-full border border-white/10 text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-sm text-white/80 hover:text-white hover:border-white/30 transition-colors"
                >
                  <Github size={15} /> GitHub
                </a>
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 text-black text-sm font-medium hover:bg-white transition-colors"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
