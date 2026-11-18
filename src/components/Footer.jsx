import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Footer() {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="relative py-24 px-6 md:px-10 border-t border-white/8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif-display text-2xl md:text-4xl text-white tracking-tight"
        >
          Let's Build Something Great
        </motion.h3>

        <div className="flex gap-3">
          <a
            href={profile.socials.email}
            aria-label="Email"
            className="w-11 h-11 rounded-xl panel-glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <Mail size={17} />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-11 h-11 rounded-xl panel-glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <Github size={17} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 rounded-xl panel-glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <Linkedin size={17} />
          </a>
        </div>

        <button
          onClick={scrollTop}
          className="flex items-center gap-2 text-[10px] tracking-widest2 uppercase text-white/35 hover:text-white transition-colors mt-4"
        >
          <ArrowUp size={13} /> Back to top
        </button>

        <p className="text-[10px] text-white/20 mt-4">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Three.js.
        </p>
      </div>
    </footer>
  );
}
