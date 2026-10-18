"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Section from "./Section";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative overflow-hidden rounded-3xl card-border bg-white/[0.03] p-10 text-center md:p-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10" />
        <span className="relative mb-4 inline-block font-mono text-sm tracking-widest text-accent-2 uppercase">
          Contact
        </span>
        <h2 className="relative font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          Let&apos;s build something
          <br />
          <span className="text-gradient">intelligent together.</span>
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-zinc-400">
          Seeking paid UAE AI/ML internships for January–June 2027. I hold a valid UAE residence visa and do not need residence visa sponsorship.
        </p>

        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            <Mail size={16} />
            {profile.email}
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="relative mt-8 flex items-center justify-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full card-border bg-white/5 p-3 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full card-border bg-white/5 p-3 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
