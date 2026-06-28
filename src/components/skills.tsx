"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Bot, Sparkles, Database, Globe } from "lucide-react";
import skillsData from "@/data/skills.json";
import { SectionHeading } from "@/components/section-heading";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "Web Development": Globe,
  "Mobile Apps": Smartphone,
  "Telegram Bots": Bot,
  "AI Automations": Sparkles,
  "Backend Systems": Database,
  "Full-Stack Solutions": Code2,
};

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-card/40 py-[var(--spacing-section)]">
      <div className="container-page">
        <SectionHeading
          index="02"
          label="What I Do"
          title="A versatile toolkit for modern product development."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.services.map((service, index) => {
            const Icon = iconMap[service.title] || Code2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
                className="group bg-background p-7 transition-colors hover:bg-card"
              >
                <Icon
                  size={22}
                  className="mb-5 text-muted-foreground transition-colors group-hover:text-foreground"
                />
                <h3 className="mb-2 font-medium">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2"
        >
          <span className="eyebrow mr-1">Stack</span>
          {skillsData.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
