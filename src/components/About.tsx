"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Section from "./Section";
import { education, profile } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid gap-10 md:grid-cols-5">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="md:col-span-3 text-lg leading-relaxed text-zinc-400"
        >
          {profile.resumeNote}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="md:col-span-2"
        >
          <div className="rounded-2xl card-border bg-white/[0.03] p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-xl bg-accent/15 p-2.5 text-accent">
                <GraduationCap size={20} />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Education
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white">{education.school}</h3>
            <p className="mt-1 text-sm text-zinc-400">{education.degree}</p>
            <p className="mt-1 text-sm text-accent-2">{education.period}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400 card-border"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
