import { SkillCategory } from "@/lib/types";
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
              <h3 className="mb-3.5 text-sm font-semibold text-text-dim">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-surface px-4 py-2 font-mono text-sm text-text-dim transition-colors hover:border-accent hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
