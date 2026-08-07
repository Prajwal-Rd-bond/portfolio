"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            whileHover={{ y: -6 }}
            className={`group relative overflow-hidden rounded-2xl card-border bg-white/[0.03] p-7 transition-colors hover:bg-white/[0.06] ${
              project.highlight ? "md:col-span-2" : ""
            }`}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

            <div className="relative flex items-start justify-between">
              <div>
                {project.highlight && (
                  <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent-2">
                    <Sparkles size={12} /> Featured
                  </span>
                )}
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-accent-2">{project.subtitle}</p>
              </div>
              <span className="rounded-full card-border bg-white/5 p-2 text-zinc-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
                <ArrowUpRight size={16} />
              </span>
            </div>

            <p className="relative mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400 card-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
