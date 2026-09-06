"use client";

import { Achievement, Stat } from "@/lib/types";
import { useStackReveal } from "@/hooks/useStackReveal";
import Reveal from "./Reveal";

const PROFILES = [
  { name: "LeetCode", href: "https://leetcode.com/Shattajit/" },
  { name: "Codeforces", href: "https://codeforces.com/profile/ShattajiT_" },
  { name: "CodeChef", href: "https://www.codechef.com/users/a_pessimist" },
  { name: "LightOJ", href: "https://lightoj.com/user/raindust" },
];

export default function Achievements({
  items,
  stats,
}: {
  items: Achievement[];
  stats: Stat[];
}) {
  return (
    <section id="achievements" className="section-py bg-bg">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-tag">05 · Achievements</p>
          <h2 className="section-title">Competitive Programming</h2>
        </Reveal>

        {stats.length > 0 && <StatBand stats={stats} />}

        <AchievementGrid items={items} />

        <Reveal delay={180} className="flex flex-wrap gap-3.5">
          {PROFILES.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-4 py-2.5 text-sm text-text-dim transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              {p.name}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function StatBand({ stats }: { stats: Stat[] }) {
  const ref = useStackReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="mb-9 grid gap-px overflow-hidden rounded-xl border border-border bg-border"
      style={{ gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, 1fr)` }}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center gap-1 bg-bg-alt px-4 py-5 text-center opacity-0 transition-colors hover:bg-surface"
        >
          <span className="font-display text-[clamp(1.3rem,3vw,1.7rem)] font-extrabold tabular-nums text-accent">
            {stat.value}
          </span>
          <span className="text-[0.74rem] text-text-faint">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

function AchievementGrid({ items }: { items: Achievement[] }) {
  const ref = useStackReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="mb-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a) =>
        a.url ? (
          <a
            key={a.name}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1.5 rounded-lg border border-border bg-surface p-4 opacity-0 transition-all hover:-translate-y-0.5 hover:border-accent/40"
          >
            <span className="flex items-start justify-between gap-2">
              <strong className="text-sm text-text">{a.name}</strong>
              <span className="text-xs text-text-faint opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-accent">
                ↗
              </span>
            </span>
            <span className="font-mono text-sm text-accent">{a.result}</span>
          </a>
        ) : (
          <div
            key={a.name}
            className="flex flex-col gap-1.5 rounded-lg border border-border bg-surface p-4 opacity-0 transition-all hover:-translate-y-0.5 hover:border-accent/25"
          >
            <strong className="text-sm text-text">{a.name}</strong>
            <span className="font-mono text-sm text-accent">{a.result}</span>
          </div>
        )
      )}
    </div>
  );
}
