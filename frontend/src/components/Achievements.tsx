import { Achievement } from "@/lib/types";
import Reveal from "./Reveal";

const PROFILES = [
  { name: "LeetCode", href: "https://leetcode.com/Shattajit/" },
  { name: "Codeforces", href: "https://codeforces.com/profile/ShattajiT_" },
  { name: "CodeChef", href: "https://www.codechef.com/users/a_pessimist" },
  { name: "LightOJ", href: "https://lightoj.com/user/raindust" },
];

export default function Achievements({ items }: { items: Achievement[] }) {
  return (
    <section id="achievements" className="section-py bg-bg">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-tag">05 · Achievements</p>
          <h2 className="section-title">Competitive Programming</h2>
        </Reveal>

        <Reveal delay={60}>
          <p className="mb-9 max-w-xl text-[1.02rem] text-text-dim">
            Participated in <strong className="text-text">10+ national programming contests</strong> and
            solved <strong className="text-text">2200+ problems</strong> across
            Codeforces, CodeChef, LeetCode, SPOJ, and HackerRank.
          </p>
        </Reveal>

        <Reveal delay={120} className="mb-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((a) => (
            <div
              key={a.name}
              className="flex flex-col gap-1.5 rounded-lg border border-border bg-surface p-4"
            >
              <strong className="text-sm text-text">{a.name}</strong>
              <span className="font-mono text-sm text-accent">{a.result}</span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={180} className="flex flex-wrap gap-3.5">
          {PROFILES.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-4 py-2.5 text-sm text-text-dim transition-colors hover:border-accent hover:text-accent"
            >
              {p.name}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
