"use client";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
const reveal = { hidden: { opacity: 0, y: 35 }, show: { opacity: 1, y: 0, transition: { duration: .85, ease: [.22, 1, .36, 1] as const } } };
export default function Hero() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0), y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-.5, .5], [10, -10])), ry = useSpring(useTransform(x, [-.5, .5], [-14, 14]));
  return <section id="top" className="hero-section" onPointerMove={e => { if (e.pointerType !== "mouse" || reduced) return; const r=e.currentTarget.getBoundingClientRect(); x.set((e.clientX-r.left)/r.width-.5); y.set((e.clientY-r.top)/r.height-.5); }} onPointerLeave={()=>{x.set(0);y.set(0);}}>
    <div className="hero-grid mx-auto w-full max-w-6xl">
      <motion.div initial="hidden" animate="show" variants={{show:{transition:{staggerChildren:.12}}}} className="hero-copy">
        <motion.p variants={reveal} className="eyebrow"><span className="status-dot"/> Available Jan—Jun 2027 · UAE</motion.p>
        <motion.p variants={reveal} className="hero-intro">Hello, I’m {profile.name}.</motion.p>
        <motion.h1 variants={reveal}>Turning data<br/>into <span className="text-gradient">possibility.</span></motion.h1>
        <motion.p variants={reveal} className="hero-description">Applied AI, computer vision &amp; retrieval systems.<br/>From model experiments to experiences people can use.</motion.p>
        <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3"><a className="primary-cta" href="#projects">Explore selected work <ArrowUpRight size={18}/></a><a className="secondary-cta" href="#contact">Let’s connect <span>↗</span></a></motion.div>
        <motion.div variants={reveal} className="hero-footnote"><span>AI / ML undergraduate</span><span>UAE residence visa</span><span>Graduating Sep 2027</span></motion.div>
      </motion.div>
      <motion.div className="orbital-scene" aria-hidden="true" initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} transition={{duration:1.4}} style={{rotateX:reduced?0:rx,rotateY:reduced?0:ry}}>
        <div className="orbital-coordinate">PRD / SYSTEMS IN MOTION</div><div className="orbital-halo"/><div className="orbital-globe"><div className="globe-grid"/>{[0,1,2,3,4].map(i=><div className="globe-latitude" key={i} style={{top:`${18+i*16}%`,width:`${68+Math.sin(i/4*Math.PI)*30}%`}}/>)}<div className="globe-shine"/></div>
        <div className="orbit orbit-one"><i/></div><div className="orbit orbit-two"><i/></div><div className="orbit orbit-three"><i/></div>
        <div className="orbital-label label-one"><span>01</span> COMPUTER VISION</div><div className="orbital-label label-two"><span>02</span> RETRIEVAL SYSTEMS</div><div className="orbital-label label-three"><span>03</span> APPLIED AI</div><div className="orbital-caption">IDEA → EXPERIMENT → APPLICATION</div>
      </motion.div>
    </div>
    <a href="#projects" className="hero-scroll"><ArrowDown size={14}/> Scroll to explore <span>01 / 05</span></a>
  </section>;
}
