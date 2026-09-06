"use client";

import { SkillCategory } from "@/lib/types";
import { getTechIconInfo } from "@/lib/techIcons";
import { useStackReveal } from "@/hooks/useStackReveal";
import Reveal from "./Reveal";

export default function Skills({ categories }: { categories: SkillCategory[] }) {
  return (
    <section id="skills" className="section-py bg-bg-alt">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-tag">04 · Skills</p>
          <h2 className="section-title">Tools &amp; Technologies</h2>
        </Reveal>

        <div className="flex flex-col gap-8">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <span className="mb-3.5 block text-[0.68rem] font-bold uppercase tracking-wider text-text-faint">
                {cat.title}
              </span>
              <SkillChipRow items={cat.items} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillChipRow({ items }: { items: string[] }) {
  const ref = useStackReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="flex flex-wrap gap-2.5">
      {items.map((item) => {
        const { Icon, color } = getTechIconInfo(item);
        return (
          <span
            key={item}
            className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text-dim opacity-0 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Icon style={{ color }} className="shrink-0 text-sm" />
            {item}
          </span>
        );
      })}
    </div>
  );
}
