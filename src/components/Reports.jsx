import React from 'react';
import { motion } from 'framer-motion';
import { Radio, ArrowUpRight } from 'lucide-react';
import { reports, codingProfiles, achievements } from '../data/portfolio';

export default function Reports() {
  return (
    <section id="reports" className="relative py-32 md:py-44 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif-display section-heading text-white mb-16 md:mb-20"
        >
          Reports
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="panel-glass rounded-2xl overflow-hidden mb-10"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
            <div className="flex items-center gap-2 text-[10px] md:text-xs tracking-widest2 uppercase text-cosmic-cyan">
              <Radio size={13} /> Deep Space Network
            </div>
            <span className="text-[10px] md:text-xs text-white/30 tracking-wide">
              Signal Lock · {String(reports.length).padStart(2, '0')} Packets
            </span>
          </div>

          <ul>
            {reports.map((report, i) => (
              <motion.li
                key={report.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center justify-between gap-4 px-6 py-5 border-b border-white/5 last:border-none hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-center gap-5 min-w-0">
                  <span className="text-[10px] font-mono text-white/30 shrink-0">{report.id}</span>
                  <span className="text-sm md:text-base text-white/85 truncate">{report.title}</span>
                </div>
                <span className="text-[10px] md:text-xs font-mono text-white/35 shrink-0">
                  {report.type}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-14"
        >
          {codingProfiles.map((p) => (
            <a
              key={p.label}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full panel-glass text-xs md:text-sm text-white/65 hover:text-white hover:border-white/25 transition-colors"
            >
              {p.label} <ArrowUpRight size={13} />
            </a>
          ))}
        </motion.div>

        {achievements?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-[10px] md:text-xs tracking-widest2 uppercase text-white/35 mb-4">
              Achievements
            </p>
            <ul className="space-y-3">
              {achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/70">
                  <span className="mt-2 w-1 h-1 rounded-full bg-cosmic-cyan shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
