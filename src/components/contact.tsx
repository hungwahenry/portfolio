"use client";

import { motion } from "framer-motion";
import { Mail, Github, Globe, ArrowUpRight } from "lucide-react";
import profile from "@/data/profile.json";
import { SectionHeading } from "@/components/section-heading";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Email: Mail,
  GitHub: Github,
  Website: Globe,
};

const contacts = [
  { label: "Email", value: profile.social.email, href: `mailto:${profile.social.email}` },
  { label: "GitHub", value: "@hungwahenry", href: profile.social.github },
  { label: "Website", value: "henter.dev", href: profile.social.website },
];

export function Contact() {
  return (
    <section id="contact" className="py-[var(--spacing-section)]">
      <div className="container-page">
        <SectionHeading
          index="04"
          label="Contact"
          title="Let's build something together."
          description="Have a product in mind or want to collaborate? I'm open to new opportunities and interesting problems."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {contacts.map((contact, index) => {
            const Icon = iconMap[contact.label] || Mail;
            const isMail = contact.href.startsWith("mailto");
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={isMail ? undefined : "_blank"}
                rel={isMail ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group bg-background p-7 transition-colors hover:bg-card"
              >
                <div className="mb-8 flex items-center justify-between">
                  <Icon
                    size={20}
                    className="text-muted-foreground transition-colors group-hover:text-foreground"
                  />
                  <ArrowUpRight
                    size={18}
                    className="text-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </div>
                <p className="text-sm text-muted">{contact.label}</p>
                <p className="mt-1 font-medium">{contact.value}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
