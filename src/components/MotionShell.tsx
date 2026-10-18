"use client";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import type { ReactNode } from "react";
export default function MotionShell({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <MotionConfig reducedMotion="user" transition={{ duration: .7, ease: [.22, 1, .36, 1] }}><a className="skip-link" href="#main">Skip to content</a><motion.div className="scroll-progress" style={{ scaleX }} />{children}</MotionConfig>;
}
