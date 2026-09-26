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
  const codeforces = items.find((a) => a.name === "Codeforces");
  const gridItems = items.filter((a) => a.name !== "Codeforces");

  return (
    <section id="achievements" className="section-py bg-bg">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-tag">05 · Achievements</p>
          <h2 className="section-title">Competitive Programming</h2>
        </Reveal>

        {stats.length > 0 && <StatBand stats={stats} />}

        <AchievementGrid items={gridItems} />

        <Reveal delay={180} className="flex flex-wrap gap-3.5 pb-14">
          {PROFILES.map((p) =>
            p.name === "Codeforces" && codeforces ? (
              <CodeforcesProfileBranch key={p.name} href={p.href} rating={codeforces.result} />
            ) : (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm text-text-dim transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                {p.name}
                <span className="text-xs opacity-70">↗</span>
              </a>
            )
          )}
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
              <span className="text-xs text-text-faint opacity-70 transition-opacity group-hover:opacity-100 group-hover:text-accent">
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

// The Codeforces profile pill branches down into a lit sub-box showing the
// rating — same trunk/box visual language as the skills tree, not a
// separate achievement card.
function CodeforcesProfileBranch({ href, rating }: { href: string; rating: string }) {
  return (
    <div className="relative">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm text-text-dim transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
      >
        Codeforces
        <span className="text-xs opacity-70">↗</span>
      </a>

      <svg width="10" height="22" viewBox="0 0 10 22" className="pointer-events-none absolute left-5 top-full overflow-visible" aria-hidden="true">
        <line x1="0" y1="0" x2="0" y2="22" className="tree-wire" />
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="22"
          className="tree-line-flow"
          style={{ ["--flow-dist" as string]: 22, strokeDasharray: "22" }}
        />
      </svg>

      <span
        className="tree-group-box absolute left-5 -translate-x-1/2 whitespace-nowrap"
        style={{ top: "calc(100% + 1.5rem)" }}
      >
        {rating}
      </span>
    </div>
  );
}
