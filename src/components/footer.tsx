"use client";

import { Github, Globe, ArrowUp } from "lucide-react";
import profile from "@/data/profile.json";

const socialLinks = [
  { label: "GitHub", href: profile.social.github, Icon: Github },
  { label: "Website", href: profile.social.website, Icon: Globe },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#" className="text-base font-semibold tracking-tight">
          {profile.shortName}
          <span className="text-muted">.</span>
        </a>

        <p className="order-last text-sm text-muted sm:order-none">
          © {year} {profile.name}
        </p>

        <div className="flex items-center gap-1">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon size={18} />
            </a>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
