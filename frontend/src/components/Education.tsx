import { EducationEntry } from "@/lib/types";
import Reveal from "./Reveal";

export default function Education({ entries }: { entries: EducationEntry[] }) {
  return (
    <section id="education" className="section-py bg-bg-alt">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-tag">06 · Education</p>
          <h2 className="section-title">Academic Background</h2>
        </Reveal>

        {entries.map((entry, i) => (
          <Reveal key={entry.institution} delay={80 + i * 80}>
            <div className="rounded-xl border border-border bg-surface p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold text-text">{entry.institution}</h3>
                <span className="whitespace-nowrap font-mono text-sm text-text-faint">
                  {entry.period}
                </span>
              </div>
              <p className="mb-2.5 mt-1 text-accent-2">{entry.degree}</p>
              <p className="text-[0.94rem] text-text-dim">
                Coursework: {entry.coursework}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
