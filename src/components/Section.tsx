"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  const reduceMotion = useReducedMotion();
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={title ? headingId : undefined} className={`relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32 ${className}`}>
      {(eyebrow || title) && (
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.6, margin: "0px 0px -45px 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.055 } },
          }}
          className="mb-12 md:mb-16"
        >
          {eyebrow && (
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] text-accent-2 uppercase"
            >
              <span aria-hidden="true" className="h-px w-7 bg-accent/60" />
              {eyebrow}
            </motion.span>
          )}
          {title && (
            <h2 id={headingId} aria-label={title} className="flex flex-wrap gap-x-[0.24em] font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.045em] text-white md:text-5xl">
              {title.split(" ").map((word, index) => (
                <span key={`${word}-${index}`} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                  <motion.span
                    className="inline-block"
                    variants={{
                      hidden: { y: "110%", rotate: 3, opacity: 0 },
                      visible: { y: 0, rotate: 0, opacity: 1 },
                    }}
                    transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
