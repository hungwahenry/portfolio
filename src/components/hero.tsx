"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import profile from "@/data/profile.json";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center">
      <div className="container-page py-32">
        <div className="max-w-3xl">
          {/* Avatar + role */}
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-7 flex items-center gap-3"
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border-strong">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-sm text-muted-foreground">{profile.title}</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-balance text-6xl font-semibold leading-[1.02] tracking-tight sm:text-7xl md:text-8xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            {profile.tagline}
          </motion.p>

          {/* Actions */}
          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              Get in touch
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Github size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
