"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Globe, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "hello@henter.dev",
    href: "mailto:hello@henter.dev",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "@hungwahenry",
    href: "https://github.com/hungwahenry",
    icon: Github,
  },
  {
    label: "Website",
    value: "henter.dev",
    href: "https://henter.dev",
    icon: Globe,
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-accent/30 relative">
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
                04 / Contact
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Let&apos;s work together.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have a project in mind or want to discuss a collaboration? I&apos;m
                always open to new opportunities and interesting challenges.
              </p>
            </motion.div>
          </div>

          {/* Contact links */}
          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                rel={contact.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group p-8 bg-card border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <contact.icon className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  <p className="text-lg font-medium group-hover:text-foreground transition-colors">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Prefer a direct conversation?
            </p>
            <motion.a
              href="mailto:hello@henter.dev"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={20} />
              Send me an email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
