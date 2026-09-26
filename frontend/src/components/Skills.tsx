"use client";

import { SkillCategory } from "@/lib/types";
import Reveal from "./Reveal";
import SkillsTree from "./SkillsTree";

export default function Skills({ categories }: { categories: SkillCategory[] }) {
  return (
    <section id="skills" className="section-py bg-bg-alt">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-tag">04 · Skills</p>
          <h2 className="section-title">Tools &amp; Technologies</h2>
        </Reveal>

        <Reveal delay={100} className="flex justify-center">
          <SkillsTree categories={categories} />
        </Reveal>

        <span className="sr-only">
          {categories.map((cat) => `${cat.title}: ${cat.items.join(", ")}. `).join("")}
        </span>
      </div>
    </section>
  );
}
