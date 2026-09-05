import { PersonalProject } from "@/lib/types";
import Reveal from "./Reveal";

const ICONS: Record<string, string> = {
  Omnitrix: "🛒",
  "Smart Attendance System": "📷",
};

export default function Projects({ projects }: { projects: PersonalProject[] }) {
  return (
    <section id="projects" className="section-py bg-bg">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-tag">03 · Projects</p>
          <h2 className="section-title">Personal Projects</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <article className="group h-full rounded-xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:border-accent/35">
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
                <h3 className="text-lg font-bold text-text">{project.title}</h3>
                <p className="mb-3 text-sm text-accent-2">{project.subtitle}</p>
                <p className="mb-4 text-[0.95rem] text-text-dim">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-bg-alt px-2.5 py-1 font-mono text-xs text-text-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
