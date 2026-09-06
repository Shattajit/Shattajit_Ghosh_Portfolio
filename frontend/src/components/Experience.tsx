"use client";

import { ExperienceEntry } from "@/lib/types";
import { getBulletIcon, renderBoldText, splitStack } from "@/lib/contentHelpers";
import { getTechIconInfo } from "@/lib/techIcons";
import { useStackReveal } from "@/hooks/useStackReveal";
import Reveal from "./Reveal";

const TONE_CLASSES: Record<string, string> = {
  accent: "bg-accent/10 text-accent",
  blue: "bg-accent-2/10 text-accent-2",
  violet: "bg-violet-400/10 text-violet-400",
};

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
                <h3 className="font-display text-xl font-extrabold tracking-tight text-text">
                  {entry.role}
                </h3>
                <span className="whitespace-nowrap font-mono text-sm text-text-faint">
                  {entry.period}
                </span>
              </div>
              {entry.organizationUrl ? (
                <a
                  href={entry.organizationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-6 mt-1 inline-flex items-center gap-1 text-accent-2 hover:underline"
                >
                  {entry.organization}
                  <span className="text-xs opacity-70">↗</span>
                </a>
              ) : (
                <p className="mb-6 mt-1 text-accent-2">{entry.organization}</p>
              )}

              {entry.badge && (
                <span className="mb-7 inline-block rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[0.82rem] text-accent">
                  🏆 {entry.badge}
                </span>
              )}

              {entry.projects.map((project, pi) => (
                <div
                  key={project.title}
                  className={`${
                    pi === 0 ? "" : "mt-9 border-t border-dashed border-border pt-8"
                  }`}
                >
                  <h4 className="mb-5 font-display text-[1.05rem] font-extrabold tracking-tight text-text">
                    {project.title}
                  </h4>

                  <div className="mb-6">
                    <span className="mb-2.5 block text-[0.68rem] font-bold uppercase tracking-wider text-text-faint">
                      Tech stack
                    </span>
                    <StackChipRow stack={project.stack} />
                  </div>

                  <div>
                    <span className="mb-2.5 block text-[0.68rem] font-bold uppercase tracking-wider text-text-faint">
                      What I did
                    </span>
                    <HighlightGrid bullets={project.bullets} />
                  </div>
                </div>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StackChipRow({ stack }: { stack: string }) {
  const ref = useStackReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="flex flex-wrap gap-2">
      {splitStack(stack).map((tech) => {
        const { Icon, color } = getTechIconInfo(tech);
        return (
          <span
            key={tech}
            className="flex items-center gap-1.5 rounded-md border border-border bg-bg-alt px-2.5 py-1.5 text-xs font-medium text-text-dim opacity-0 transition-all hover:-translate-y-0.5 hover:border-accent/40"
          >
            <Icon style={{ color }} className="shrink-0 text-sm" />
            {tech}
          </span>
        );
      })}
    </div>
  );
}

function HighlightGrid({ bullets }: { bullets: string[] }) {
  const ref = useStackReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="grid gap-3 sm:grid-cols-2">
      {bullets.map((bullet) => {
        const { icon, tone } = getBulletIcon(bullet);
        return (
          <div
            key={bullet}
            className="flex items-start gap-2.5 rounded-[10px] border border-border bg-surface p-3.5 opacity-0 transition-all hover:-translate-y-0.5 hover:border-accent/35"
          >
            <span
              className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[7px] text-sm ${TONE_CLASSES[tone]}`}
            >
              {icon}
            </span>
            <span className="text-[0.88rem] leading-relaxed text-text-dim">
              {renderBoldText(bullet)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
