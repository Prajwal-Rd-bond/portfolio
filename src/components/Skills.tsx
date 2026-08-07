"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { certifications, skills } from "@/lib/data";
import { Award } from "lucide-react";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
            className="rounded-2xl card-border bg-white/[0.03] p-6"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent-2">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-zinc-300 card-border transition-colors hover:border-accent/50 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        className="mt-16"
      >
        <h3 className="mb-6 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
          Certifications
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-start gap-3 rounded-xl card-border bg-white/[0.03] p-4"
            >
              <span className="mt-0.5 shrink-0 rounded-lg bg-accent-2/15 p-2 text-accent-2">
                <Award size={16} />
              </span>
              <div>
                <p className="text-sm font-medium text-white">{cert.name}</p>
                <p className="mt-0.5 text-xs text-zinc-500">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
