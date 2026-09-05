import { ExperienceEntry } from "@/lib/types";
import Reveal from "./Reveal";

export default function Experience({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <section id="experience" className="section-py bg-bg-alt">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-tag">02 · Experience</p>
          <h2 className="section-title">Where I&apos;ve worked</h2>
        </Reveal>

        <div className="border-l border-border pl-6 sm:pl-8">
          {entries.map((entry, i) => (
            <Reveal
              key={entry.role + entry.period}
              delay={i * 60}
              className="relative mb-16 last:mb-0"
            >
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(94,234,212,0.12)] sm:-left-[37px]" />

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold text-text">{entry.role}</h3>
                <span className="whitespace-nowrap font-mono text-sm text-text-faint">
                  {entry.period}
                </span>
              </div>
              <p className="mb-4 mt-1 text-accent-2">{entry.organization}</p>

              {entry.badge && (
                <span className="mb-5 inline-block rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[0.82rem] text-accent">
                  🏆 {entry.badge}
                </span>
              )}

              {entry.projects.map((project, pi) => (
                <div
                  key={project.title}
                  className={`${
                    pi === 0 ? "" : "mt-5 border-t border-dashed border-border pt-5"
                  }`}
                >
                  <h4 className="flex flex-col gap-1 text-[1.02rem] font-bold text-text">
                    {project.title}
                    <span className="font-mono text-[0.78rem] font-normal text-text-faint">
                      {project.stack}
                    </span>
                  </h4>
                  <ul className="mt-2.5 flex flex-col gap-2">
                    {project.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-[18px] text-[0.94rem] text-text-dim"
                      >
                        <span className="absolute left-0 text-accent">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
