"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile.json";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="py-[var(--spacing-section)]">
      <div className="container-page">
        <SectionHeading
          index="01"
          label="About"
          title="Building digital products that solve real problems."
        />

        <div className="grid gap-12 md:grid-cols-[10rem_1fr] md:gap-12">
          <div className="hidden md:block" />
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="space-y-5 text-lg leading-relaxed text-muted-foreground"
            >
              <p>{profile.bio}</p>
              <p>{profile.bioExtended}</p>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8"
            >
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  );
}
