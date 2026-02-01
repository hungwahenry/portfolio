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
} from "lucide-react";
import { PrintButton } from "@/components/print-button";
import profile from "@/data/profile.json";
import cv from "@/data/cv.json";
import projects from "@/data/projects.json";

export const metadata: Metadata = {
  title: `CV - ${profile.name}`,
  description: `Professional CV of ${profile.name} - ${profile.title}`,
};

export default function CVPage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Print button - hidden on print */}
      <div className="fixed top-6 right-6 print:hidden z-50">
        <PrintButton />
      </div>

      {/* Back link - hidden on print */}
      <div className="fixed top-6 left-6 print:hidden z-50">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm font-medium hover:bg-accent transition-colors"
        >
          Back to Portfolio
        </a>
      </div>

      <main className="max-w-4xl mx-auto px-8 py-16 print:py-8 print:px-0">
        {/* Header */}
        <header className="mb-12 print:mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2 print:text-3xl">
            {profile.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-4 print:text-lg">
            {profile.title}
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a
              href={`mailto:${profile.social.email}`}
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
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
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Globe size={14} />
              henter.dev
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Github size={14} />
              hungwahenry
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-10 print:mb-6">
          <p className="text-muted-foreground leading-relaxed">
            {cv.summary}
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-10 print:gap-6">
          {/* Main column */}
          <div className="md:col-span-2 space-y-10 print:space-y-6">
            {/* Projects as Experience */}
            <section>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 print:mb-3">
                <Briefcase size={18} />
                Projects & Experience
              </h2>
              <div className="space-y-6 print:space-y-4">
                {featuredProjects.map((project) => (
                  <div key={project.title} className="border-l-2 border-border pl-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-medium">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs bg-accent text-accent-foreground rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 print:mb-3">
                <GraduationCap size={18} />
                Education
              </h2>
              <div className="space-y-4">
                {cv.education.map((edu) => (
                  <div key={edu.institution} className="border-l-2 border-border pl-4">
                    <h3 className="font-medium">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution} • {edu.status}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 print:mb-3">
                <Award size={18} />
                Certifications
              </h2>
              <div className="space-y-2">
                {cv.certifications.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                    <div>
                      <span className="font-medium">{cert.name}</span>
                      <span className="text-muted-foreground"> — {cert.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 print:space-y-5">
            {/* Technical Skills */}
            <section>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 print:mb-3">
                <Code2 size={18} />
                Skills
              </h2>
              <div className="space-y-4 print:space-y-3">
                <div>
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cv.skills.languages.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs border border-border rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cv.skills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs border border-border rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cv.skills.backend.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs border border-border rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Mobile
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cv.skills.mobile.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs border border-border rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Tools & Platforms
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cv.skills.tools.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs border border-border rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 print:mb-3">
                <Languages size={18} />
                Languages
              </h2>
              <div className="space-y-1">
                {cv.languages.map((lang) => (
                  <div key={lang.language} className="flex justify-between text-sm">
                    <span>{lang.language}</span>
                    <span className="text-muted-foreground">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Work Preferences */}
            <section>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 print:mb-3">
                <Heart size={18} />
                Work Style
              </h2>
              <div className="space-y-3">
                <div className="flex gap-2">
                  {cv.workPreferences.remote && (
                    <span className="px-2 py-1 text-xs bg-accent rounded">Remote</span>
                  )}
                  {cv.workPreferences.hybrid && (
                    <span className="px-2 py-1 text-xs bg-accent rounded">Hybrid</span>
                  )}
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {cv.workPreferences.traits.map((trait) => (
                    <li key={trait} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
