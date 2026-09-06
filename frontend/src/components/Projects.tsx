"use client";

import { PersonalProject } from "@/lib/types";
import { getTechIconInfo } from "@/lib/techIcons";
import { useStackReveal } from "@/hooks/useStackReveal";
import Reveal from "./Reveal";

const ICONS: Record<string, string> = {
  Omnitrix: "🛒",
  "Smart Attendance System": "📷",
};

export default function Projects({ projects }: { projects: PersonalProject[] }) {
  const ref = useStackReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section-py bg-bg">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-tag">03 · Projects</p>
          <h2 className="section-title">Personal Projects</h2>
        </Reveal>

        <div ref={ref} className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group h-full rounded-xl border border-border bg-surface p-7 opacity-0 transition-all hover:-translate-y-1 hover:border-accent/35"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-2xl">{ICONS[project.title] ?? "💻"}</span>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} repository`}
                    className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-border text-text-dim transition-all group-hover:border-accent group-hover:text-accent"
                  >
                    ↗
                  </a>
                )}
              </div>
              <h3 className="font-display text-lg font-extrabold tracking-tight text-text">
                {project.title}
              </h3>
              <p className="mb-3 text-sm text-accent-2">{project.subtitle}</p>
              <p className="mb-4 text-[0.95rem] text-text-dim">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => {
                  const { Icon, color } = getTechIconInfo(t);
                  return (
                    <span
                      key={t}
                      className="flex items-center gap-1.5 rounded-md border border-border bg-bg-alt px-2.5 py-1 font-mono text-xs text-text-dim transition-all hover:-translate-y-0.5 hover:border-accent/40"
                    >
                      <Icon style={{ color }} className="shrink-0 text-sm" />
                      {t}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
