"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Section from "./Section";
import { profile } from "@/lib/data";
import type { PointerEvent } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(500);
  const pointerY = useMotionValue(180);
  const glowX = useSpring(pointerX, { stiffness: 100, damping: 28 });
  const glowY = useSpring(pointerY, { stiffness: 100, damping: 28 });
  const spotlight = useMotionTemplate`radial-gradient(450px circle at ${glowX}px ${glowY}px, rgba(182,255,103,0.08), transparent 75%)`;

  function moveGlow(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left);
    pointerY.set(event.clientY - bounds.top);
  }

  return (
    <Section id="contact" className="pb-24 md:pb-32">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease }}
        onPointerMove={moveGlow}
        className="relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-[#0e1511] px-7 py-10 sm:p-12 md:p-16"
      >
        <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ background: spotlight }} />
        <div aria-hidden="true" className="pointer-events-none absolute -right-44 -top-44 -z-10 h-[640px] w-[640px] rounded-full border border-accent/[0.08]">
          <div className="absolute inset-14 rounded-full border border-accent/[0.07]" />
          <div className="absolute inset-28 rounded-full border border-accent/[0.06]" />
          <div className="absolute inset-44 rounded-full border border-accent/[0.05] bg-accent/[0.015]" />
        </div>

        <div className="mb-10 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.16em] uppercase">
          <span className="flex items-center gap-3 text-accent"><span aria-hidden="true" className="h-px w-7 bg-accent/60" />Have something in mind?</span>
          <span aria-hidden="true" className="hidden text-[#6e8175] sm:block">Let&apos;s connect ↗</span>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.35fr_0.65fr] md:items-end md:gap-12">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.6rem,5.5vw,4.6rem)] font-medium leading-[1.06] tracking-[-0.06em] text-white">
              Great ideas start<br />
              <span className="text-gradient">with a conversation.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#9aaa9f] sm:text-base">
              Exploring an idea, building a product, or solving an interesting AI problem? I&apos;d love to hear about it.
            </p>
          </div>

          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={reduceMotion ? undefined : { y: -5 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-accent/20 bg-accent/[0.06] p-5 transition-colors duration-300 hover:border-accent/50 hover:bg-accent/[0.1] sm:p-6"
          >
            <span>
              <span className="mb-2 flex items-center gap-2 text-xs text-[#9aaa9f]"><Mail size={13} /> Say hello</span>
              <span className="break-all text-sm font-medium tracking-tight text-white">{profile.email}</span>
            </span>
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent text-[#102008]">
              <ArrowUpRight size={22} className="transition-transform duration-500 ease-out group-hover:-translate-y-9 group-hover:translate-x-9" />
              <ArrowUpRight aria-hidden="true" size={22} className="absolute -translate-x-9 translate-y-9 transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </span>
          </motion.a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/[0.08] pt-6">
          <span className="font-mono text-[10px] tracking-[0.1em] text-[#6f8175] uppercase">Thoughtful ideas. Useful technology.</span>
          <div className="flex items-center gap-6">
            {[
              { href: profile.github, label: "GitHub", Icon: GithubIcon },
              { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 py-1 text-xs text-[#a3b1a9] transition-colors duration-300 hover:text-accent">
                <Icon size={15} />
                {label}
                <ArrowUpRight aria-hidden="true" size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
