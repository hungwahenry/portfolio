"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  index,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 grid gap-6 md:grid-cols-[10rem_1fr] md:gap-12">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="eyebrow pt-1"
      >
        {index} / {label}
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl space-y-4"
      >
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
