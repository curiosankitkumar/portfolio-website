import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, User } from 'lucide-react';
import { profile } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-44 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="font-serif-display section-heading text-white mb-16 md:mb-20"
        >
          {profile.about.heading}
        </motion.h2>

        <div className="grid md:grid-cols-[280px_1fr] gap-14 items-start">
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cosmic-blue/50 to-cosmic-violet/50 blur-xl opacity-50 animate-pulseGlow" />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/15 panel-glass flex items-center justify-center">
                {profile.avatar ? (
                  <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                ) : (
                  <User size={64} className="text-white/25" strokeWidth={1} />
                )}
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p
              variants={fadeUp}
              custom={1.5}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-10"
            >
              {profile.about.bio}
            </motion.p>

            <div className="divide-y divide-white/8 border-t border-b border-white/8">
              {profile.about.fields.map((field, i) => (
                <motion.div
                  key={field.label}
                  variants={fadeUp}
                  custom={i + 2}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] gap-4 py-4"
                >
                  <span className="text-[10px] md:text-xs tracking-widest2 uppercase text-white/40 self-center">
                    {field.label}
                  </span>
                  <span className="text-sm md:text-base text-white/90">{field.value}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              custom={profile.about.fields.length + 2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex gap-3 mt-10"
            >
              <SocialIcon href={profile.socials.email} icon={<Mail size={17} />} label="Email" />
              <SocialIcon href={profile.socials.github} icon={<Github size={17} />} label="GitHub" />
              <SocialIcon href={profile.socials.linkedin} icon={<Linkedin size={17} />} label="LinkedIn" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-11 h-11 rounded-xl panel-glass flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
