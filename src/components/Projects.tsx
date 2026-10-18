"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useMotionTemplate, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const card = useRef<HTMLAnchorElement>(null);
  const inView = useInView(card, { margin: "80px" });
  const reduced = useReducedMotion();
  const x = useMotionValue(.5), y = useMotionValue(.5);
  const spring = { stiffness: 100, damping: 25, mass: .7 };
  const smoothX = useSpring(x, spring), smoothY = useSpring(y, spring);
  const rotateX = useTransform(smoothY, [0, 1], [2.5, -2.5]);
  const rotateY = useTransform(smoothX, [0, 1], [-2.5, 2.5]);
  const spotX = useTransform(smoothX, v => `${v * 100}%`);
  const spotY = useTransform(smoothY, v => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${spotX} ${spotY}, rgba(182,255,103,.09), transparent 75%)`;

  return (
    <motion.a ref={card} href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.title} — view repository`}
      className={`project-card project-${index} ${inView ? "motion-visible" : "motion-paused"}`}
      initial={{ opacity: 0, y: reduced ? 0 : 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }}
      transition={{ duration: .85, delay: (index % 2) * .08, ease: [.22, 1, .36, 1] }}
      style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY }}
      onPointerMove={e => { if (e.pointerType !== "mouse" || reduced) return; const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width); y.set((e.clientY - r.top) / r.height); }}
      onPointerLeave={() => { x.set(.5); y.set(.5); }}>
      {!reduced && <motion.div className="card-spotlight" aria-hidden="true" style={{ background: spotlight }} />}
      <div className="project-visual" aria-hidden="true">
        <span className="visual-index">EXPERIMENT / 0{index + 1}</span>
        <div className="project-art">{index === 0 ? <div className="pipeline-art">{["RETRIEVE", "REVIEW", "TRACE"].map((v, i) => <div key={v}><span>0{i + 1}</span>{v}<i /></div>)}</div>
          : index === 1 ? <div className="scan-art"><div className="scan-cross" /><div className="scan-window" /><span>VISION / RESEARCH</span></div>
          : index === 2 ? <div className="search-art">{[.42, .82, .65, .95, .57, .73, .36].map((v, i) => <i key={i} style={{ height: `${v * 100}%`, animationDelay: `${i * .17}s` }} />)}</div>
          : <div className="planet-art"><i /><i /><i /></div>}</div>
        <span className="visual-caption">{project.subtitle}</span><span className="project-open"><ArrowUpRight size={22} /></span>
      </div>
      <div className="project-copy"><div className="flex items-center justify-between gap-4"><h3>{project.title}</h3><span className="project-category">{project.category}</span></div><p>{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map(t => <span className="tech-tag" key={t}>{t}</span>)}</div><div className="project-bottom"><span>Explore the repository</span><ArrowUpRight size={15} /></div></div>
    </motion.a>
  );
}

export default function Projects() {
  return <Section id="projects" eyebrow="01 / Selected work" title="Experiments. Built into experiences."><p className="section-lead">A few places where machine learning meets thoughtful engineering. Open a project to explore its code, architecture and limitations.</p><div className="project-grid">{projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}</div></Section>;
}
