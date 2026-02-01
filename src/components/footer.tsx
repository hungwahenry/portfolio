"use client";

import { motion } from "framer-motion";
import { Github, Globe, ArrowUp } from "lucide-react";
import profile from "@/data/profile.json";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  GitHub: Github,
  Website: Globe,
};

const socialLinks = [
  {
    label: "GitHub",
    href: profile.social.github,
  },
  {
    label: "Website",
    href: profile.social.website,
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-semibold tracking-tight"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {profile.shortName}<span className="text-muted">.</span>
          </motion.a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label] || Globe;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            Back to top
            <ArrowUp size={16} />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} {profile.name}. Built with Next.js & Framer
            Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
