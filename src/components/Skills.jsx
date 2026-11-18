import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(e) {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({ x, y });
    }
    const el = containerRef.current;
    el?.addEventListener('mousemove', onMove);
    return () => el?.removeEventListener('mousemove', onMove);
  }, []);

  const flatSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({ skill, color: cat.color, category: cat.id }))
  );

  const visibleSkills =
    activeCategory === 'all' ? flatSkills : flatSkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-32 md:py-44 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif-display section-heading text-white mb-12 md:mb-16"
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-2.5 mb-16"
        >
          <CategoryPill
            active={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
            label="All"
          />
          {skillCategories.map((cat) => (
            <CategoryPill
              key={cat.id}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              label={cat.label}
              dot={cat.color}
            />
          ))}
        </motion.div>

        <div
          ref={containerRef}
          className="relative min-h-[280px] md:min-h-[340px] flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-10 py-10"
        >
          {visibleSkills.map((item, i) => (
            <motion.span
              key={item.skill + item.category}
              layout
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mouse.x * (10 + (i % 4) * 4),
                y: mouse.y * (10 + (i % 3) * 4),
              }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{
                fontSize: `${0.85 + (i % 4) * 0.18}rem`,
                color: item.color,
              }}
              className="font-medium select-none cursor-default animate-drift"
            >
              {item.skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryPill({ active, onClick, label, dot }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] tracking-wide uppercase border transition-colors ${
        active
          ? 'bg-white text-black border-white'
          : 'text-white/60 border-white/12 hover:text-white hover:border-white/30'
      }`}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full" style={{ background: dot }} />}
      {label}
    </button>
  );
}
