import { Metadata } from "next";
import {
  Mail,
  MapPin,
  Globe,
  Github,
  GraduationCap,
  Award,
  Briefcase,
  Code2,
  Languages,
  Heart,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { PrintButton } from "@/components/print-button";
import profile from "@/data/profile.json";
import cv from "@/data/cv.json";
import projectsData from "@/data/projects.json";

export const metadata: Metadata = {
  title: `CV — ${profile.name}`,
  description: `Curriculum vitae of ${profile.name}, ${profile.title}.`,
};

interface CVProject {
  title: string;
  tagline?: string;
  description: string;
  tags: string[];
  platforms?: string[];
  status?: string;
  featured: boolean;
}

const skillGroups: { label: string; key: keyof typeof cv.skills }[] = [
  { label: "Languages", key: "languages" },
  { label: "Frontend", key: "frontend" },
  { label: "Backend", key: "backend" },
  { label: "Mobile", key: "mobile" },
  { label: "Databases", key: "databases" },
  { label: "Tools & Platforms", key: "tools" },
];

export default function CVPage() {
  const projects = projectsData as unknown as CVProject[];
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Controls — hidden on print */}
      <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 print:hidden">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-accent"
        >
          <ArrowLeft size={15} />
          Portfolio
        </a>
        <PrintButton />
      </div>

      <main className="container-page max-w-3xl py-24 print:py-0">
        {/* Header */}
        <header className="border-b border-border pb-8">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-lg text-muted-foreground">{profile.title}</p>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <a
              href={`mailto:${profile.social.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Mail size={14} />
              {profile.social.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              {profile.location}
            </span>
            <a
              href={profile.social.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Globe size={14} />
              henter.dev
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Github size={14} />
              hungwahenry
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="py-8">
          <p className="leading-relaxed text-muted-foreground">{cv.summary}</p>
        </section>

        <div className="grid gap-10 md:grid-cols-3 print:gap-8">
          {/* Main column */}
          <div className="space-y-10 md:col-span-2 print:space-y-7">
            <section>
              <CVHeading icon={<Briefcase size={16} />}>
                Projects & Experience
              </CVHeading>
              <div className="space-y-5">
                {featured.map((project) => (
                  <div
                    key={project.title}
                    className="border-l-2 border-border pl-4"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-2.5">
                      <h3 className="font-medium">{project.title}</h3>
                      {project.status && (
                        <span className="text-xs text-muted">
                          {project.status}
                        </span>
                      )}
                      {project.platforms && (
                        <span className="text-xs text-muted">
                          · {project.platforms.join(" · ")}
                        </span>
                      )}
                    </div>
                    {project.tagline && (
                      <p className="mt-0.5 text-sm text-foreground/90">
                        {project.tagline}
                      </p>
                    )}
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <CVHeading icon={<GraduationCap size={16} />}>Education</CVHeading>
              <div className="space-y-4">
                {cv.education.map((edu) => (
                  <div
                    key={edu.institution}
                    className="border-l-2 border-border pl-4"
                  >
                    <h3 className="font-medium">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution} · {edu.status}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <CVHeading icon={<Award size={16} />}>Certifications</CVHeading>
              <ul className="space-y-2">
                {cv.certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    <span>
                      <span className="font-medium">{cert.name}</span>
                      <span className="text-muted-foreground">
                        {" "}
                        — {cert.issuer}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 print:space-y-6">
            <section>
              <CVHeading icon={<Code2 size={16} />}>Skills</CVHeading>
              <div className="space-y-4">
                {skillGroups.map(({ label, key }) => (
                  <div key={label}>
                    <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                      {label}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cv.skills[key].map((skill) => (
                        <span
                          key={skill}
                          className="rounded border border-border px-2 py-0.5 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <CVHeading icon={<Languages size={16} />}>Languages</CVHeading>
              <div className="space-y-1">
                {cv.languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="flex justify-between text-sm"
                  >
                    <span>{lang.language}</span>
                    <span className="text-muted-foreground">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <CVHeading icon={<Heart size={16} />}>Work Style</CVHeading>
              <div className="mb-3 flex gap-1.5">
                {cv.workPreferences.remote && <Pill>Remote</Pill>}
                {cv.workPreferences.hybrid && <Pill>Hybrid</Pill>}
              </div>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {cv.workPreferences.traits.map((trait) => (
                  <li key={trait} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                    {trait}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <CVHeading icon={<Sparkles size={16} />}>Interests</CVHeading>
              <div className="flex flex-wrap gap-1.5">
                {cv.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded border border-border px-2 py-0.5 text-xs"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function CVHeading({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
      {icon}
      {children}
    </h2>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-accent px-2 py-0.5 text-xs">{children}</span>
  );
}
