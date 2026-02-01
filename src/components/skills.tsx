"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Smartphone,
  Bot,
  Sparkles,
  Database,
  Globe,
} from "lucide-react";
import skillsData from "@/data/skills.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Web Development": Globe,
  "Mobile Apps": Smartphone,
  "Telegram Bots": Bot,
  "AI Automations": Sparkles,
  "Backend Systems": Database,
  "Full-Stack Solutions": Code2,
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-accent/30 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref}>
          {/* Section header */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                02 / Skills & Services
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                A versatile toolkit for modern development challenges.
              </h2>
            </motion.div>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {skillsData.services.map((service, index) => {
              const Icon = iconMap[service.title] || Code2;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="group p-6 bg-card border border-border rounded-2xl hover:border-foreground/20 transition-colors"
                >
                  <Icon className="w-10 h-10 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm bg-background border border-border rounded-full hover:border-foreground/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
