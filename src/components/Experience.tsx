"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Section from "./Section";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-accent via-accent-2/50 to-transparent md:block" />
        <div className="space-y-10">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative pl-0 md:pl-14"
            >
              <span className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full bg-background card-border text-accent-2 md:flex">
                <Briefcase size={16} />
              </span>
              <div className="rounded-2xl card-border bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.05]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                  <span className="font-mono text-xs text-accent-2">{exp.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-400">{exp.org}</p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
