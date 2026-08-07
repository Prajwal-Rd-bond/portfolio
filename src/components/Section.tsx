"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32 ${className}`}>
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-12 md:mb-16"
        >
          {eyebrow && (
            <span className="mb-3 inline-block font-mono text-sm tracking-widest text-accent-2 uppercase">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {title}
            </h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
