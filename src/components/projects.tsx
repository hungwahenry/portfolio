"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Store } from "lucide-react";
import projectsData from "@/data/projects.json";
import profile from "@/data/profile.json";
import { SectionHeading } from "@/components/section-heading";

interface Project {
  title: string;
  tagline?: string;
  description: string;
  tags: string[];
  platforms?: string[];
  status?: string;
  featured: boolean;
  stars?: number;
  links?: {
    live?: string;
    github?: string;
    business?: string;
  };
}

function StatusBadge({ status }: { status?: string }) {
  if (!status) return null;
  const live = status === "Live";
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
      {live && (
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
      )}
      {status}
    </span>
  );
}

export function Projects() {
  const projects = projectsData as unknown as Project[];
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-[var(--spacing-section)]">
      <div className="container-page">
        <SectionHeading
          index="03"
          label="Projects"
          title="Selected work."
          description="Products I've designed and shipped, plus a few open-source tools."
        />

        {/* Featured */}
        <div className="space-y-5">
          {featured.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-border-strong md:p-9"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <StatusBadge status={project.status} />
                {project.platforms && (
                  <span className="text-xs text-muted">
                    {project.platforms.join(" · ")}
                  </span>
                )}
              </div>

              {project.tagline && (
                <p className="mt-2 text-base text-foreground/90">
                  {project.tagline}
                </p>
              )}

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent px-2.5 py-1 font-mono text-xs text-accent-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Visit site
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
                {project.links?.business && (
                  <a
                    href={project.links.business}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                  >
                    <Store size={15} />
                    For Business
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                  >
                    <Github size={15} />
                    Code
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <h3 className="eyebrow mb-6 mt-16">Also building</h3>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {others.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.links?.github || project.links?.live || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
                  className="group bg-background p-6 transition-colors hover:bg-card"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <Github
                      size={20}
                      className="text-muted-foreground transition-colors group-hover:text-foreground"
                    />
                    <ArrowUpRight
                      size={16}
                      className="text-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </div>
                  <h4 className="flex items-center gap-2 font-medium">
                    {project.title}
                    {project.stars ? (
                      <span className="text-xs font-normal text-muted">
                        ★ {project.stars}
                      </span>
                    ) : null}
                  </h4>
                  <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                    {project.tagline || project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="font-mono text-xs text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </>
        )}

        <div className="mt-12 text-center">
          <a
            href={`${profile.social.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all repositories on GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
