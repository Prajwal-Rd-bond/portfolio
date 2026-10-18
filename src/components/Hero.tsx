"use client";

import { useRef } from "react";
import {
  motion, useInView, useMotionValue, useReducedMotion,
  useScroll, useSpring, useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const ease = [.22, 1, .36, 1] as const;
const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: .85, ease } },
};
const spring = { stiffness: 85, damping: 24, mass: .7 };

export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const inView = useInView(section, { margin: "100px" });
  const reduced = useReducedMotion();
  const x = useMotionValue(0), y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-.5, .5], [7, -7]), spring);
  const ry = useSpring(useTransform(x, [-.5, .5], [-10, 10]), spring);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end start"] });
  const lift = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const copyOpacity = useTransform(scrollYProgress, [0, .7], [1, .25]);

  return (
    <section ref={section} id="top" className={`hero-section ${inView ? "motion-visible" : "motion-paused"}`}
      onPointerMove={e => {
        if (e.pointerType !== "mouse" || reduced) return;
        const bounds = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - bounds.left) / bounds.width - .5);
        y.set((e.clientY - bounds.top) / bounds.height - .5);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}>
      <div className="hero-horizon" aria-hidden="true" />
      <div className="hero-grid mx-auto w-full max-w-6xl">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: .1, delayChildren: .1 } } }} className="hero-copy" style={{ opacity: reduced ? 1 : copyOpacity }}>
          <motion.p variants={reveal} className="eyebrow"><span className="status-dot" /> Applied intelligence. Thoughtfully built.</motion.p>
          <motion.p variants={reveal} className="hero-intro">Hello, I’m {profile.name}.</motion.p>
          <h1 aria-label="Turning data into possibility.">
            {["Turning data", "into possibility."].map((line, i) => (
              <span className="headline-mask" key={line} aria-hidden="true">
                <motion.span className="headline-line" initial={{ y: reduced ? 0 : "110%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: reduced ? .2 : 1.05, delay: .2 + i * .12, ease }}>
                  {i === 0 ? line : <>into <span className="text-gradient">possibility.</span></>}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p variants={reveal} className="hero-description">Applied AI, computer vision &amp; retrieval systems.<br />From model experiments to experiences people can use.</motion.p>
          <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3">
            <a className="primary-cta" href="#projects">Explore selected work <ArrowUpRight size={18} /></a>
            <a className="secondary-cta" href="#contact">Let’s connect <ArrowUpRight size={16} /></a>
          </motion.div>
          <motion.div variants={reveal} className="hero-footnote"><span>AI / ML undergraduate</span><span>Research → real applications</span><span>Graduating Sep 2027</span></motion.div>
        </motion.div>
        <motion.div className="orbital-parallax" style={{ y: reduced ? 0 : lift }}>
          <motion.div className="orbital-scene" aria-hidden="true" initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease }} style={{ rotateX: reduced ? 0 : rx, rotateY: reduced ? 0 : ry }}>
            <div className="orbital-coordinate">PRD / SYSTEMS IN MOTION</div>
            <div className="orbital-stars">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ left: `${(i * 37 + 9) % 100}%`, top: `${(i * 23 + 7) % 100}%`, animationDelay: `${i * -.7}s` }} />)}</div>
            <div className="orbital-halo" />
            <div className="orbital-globe"><div className="globe-grid" />{[0, 1, 2, 3, 4].map(i => <div className="globe-latitude" key={i} style={{ top: `${18 + i * 16}%`, width: `${68 + Math.sin(i / 4 * Math.PI) * 30}%` }} />)}<div className="globe-shine" /><div className="globe-meridian" /></div>
            <div className="orbit orbit-one"><i /></div><div className="orbit orbit-two"><i /></div><div className="orbit orbit-three"><i /></div>
            <div className="orbital-label label-one"><span>01</span> COMPUTER VISION</div>
            <div className="orbital-label label-two"><span>02</span> RETRIEVAL SYSTEMS</div>
            <div className="orbital-label label-three"><span>03</span> APPLIED AI</div>
            <div className="orbital-caption">IDEA → EXPERIMENT → APPLICATION</div>
          </motion.div>
        </motion.div>
      </div>
      <a href="#projects" className="hero-scroll"><span className="scroll-cue"><ArrowDown size={14} /></span> Scroll to explore <span>01 / 05</span></a>
    </section>
  );
}
