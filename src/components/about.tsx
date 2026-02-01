"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column - Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
              01 / About
            </span>
          </motion.div>

          {/* Right column - Content */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Building digital products that solve real problems.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                I&apos;m a full-stack developer with a passion for creating efficient,
                scalable solutions. My expertise spans across web development, mobile
                applications, and automation systems.
              </p>
              <p>
                With experience in Python, TypeScript, Rust, and PHP, I build everything
                from high-performance web applications to intelligent Telegram bots and
                AI-powered automations. I believe in writing clean, maintainable code
                that stands the test of time.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new technologies, contributing to
                open-source projects, and finding innovative ways to solve everyday problems
                through technology.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
            >
              {[
                { value: "26+", label: "Projects" },
                { value: "4+", label: "Languages" },
                { value: "3+", label: "Years Exp." },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
