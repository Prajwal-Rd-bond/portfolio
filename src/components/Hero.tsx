"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-28">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full card-border bg-white/5 px-4 py-1.5 font-mono text-xs tracking-wide text-zinc-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to AI Engineering &amp; SDE internships
        </motion.div>

        <motion.h1
          variants={item}
          className="font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m {profile.name.split(" ")[0]}{" "}
          <span className="text-zinc-500">{profile.name.split(" ").slice(1).join(" ")}</span>
          <br />
          <span className="text-gradient">{profile.role}.</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full card-border bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Get in touch
          </a>

          <div className="ml-2 flex items-center gap-3 pl-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <LinkedinIcon size={19} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-full p-2.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Mail size={19} />
            </a>
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-20 flex flex-wrap gap-x-10 gap-y-4 text-sm text-zinc-500">
          <div>
            <span className="block font-[family-name:var(--font-display)] text-2xl font-semibold text-white">5+</span>
            Projects shipped
          </div>
          <div>
            <span className="block font-[family-name:var(--font-display)] text-2xl font-semibold text-white">2</span>
            Internships completed
          </div>
          <div>
            <span className="block font-[family-name:var(--font-display)] text-2xl font-semibold text-white">4</span>
            Certifications earned
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-full card-border bg-white/5 p-2 text-zinc-400"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
