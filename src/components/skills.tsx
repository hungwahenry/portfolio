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

const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "Rust", "PHP", "JavaScript", "Dart"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "FastAPI", "Laravel", "Express", "Django"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "React Native", "Expo"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Linux", "AWS", "Vercel"],
  },
];

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive web applications built with React, Next.js, and other cutting-edge technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications using Flutter and React Native for iOS and Android.",
  },
  {
    icon: Bot,
    title: "Telegram Bots",
    description:
      "Custom Telegram bots with aiogram and Telegraf for automation, notifications, and user engagement.",
  },
  {
    icon: Sparkles,
    title: "AI Automations",
    description:
      "Intelligent automation systems leveraging AI APIs to streamline workflows and processes.",
  },
  {
    icon: Database,
    title: "Backend Systems",
    description:
      "Scalable backend architectures with APIs, databases, and cloud infrastructure.",
  },
  {
    icon: Code2,
    title: "Full-Stack Solutions",
    description:
      "End-to-end development from concept to deployment with ongoing maintenance.",
  },
];

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
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-foreground/20 transition-colors"
              >
                <service.icon className="w-10 h-10 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold">Tech Stack</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + groupIndex * 0.1 }}
                >
                  <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-background border border-border rounded-full hover:border-foreground/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
