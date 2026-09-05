import Reveal from "./Reveal";

const STATS = [
  { value: "2200+", label: "Problems Solved" },
  { value: "10+", label: "National Contests" },
  { value: "5", label: "Production Projects" },
  { value: "1643", label: "Codeforces Max Rating" },
];

export default function About() {
  return (
    <section id="about" className="section-py bg-bg">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-tag">01 · About</p>
          <h2 className="section-title">A bit about me</h2>
        </Reveal>

        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr]">
          <Reveal delay={80}>
            <p className="text-[1.02rem] leading-relaxed text-text-dim">
              I&apos;m a Software Engineer at <strong className="text-text">Astha IT</strong> in
              Dhaka, where I build backend systems on{" "}
              <strong className="text-text">ASP.NET Core</strong> — from
              AI-integrated document pipelines to production dashboards used
              by real business clients. I care about clean architecture,
              pragmatic design patterns, and shipping code that&apos;s easy
              for the next engineer to extend.
              <br />
              <br />
              Before this, I spent years sharpening problem-solving
              fundamentals through competitive programming —{" "}
              <strong className="text-text">2200+ problems solved</strong>{" "}
              across Codeforces, CodeChef, LeetCode, SPOJ and HackerRank, and
              multiple national-level ICPC/IUPC contests. That background
              shapes how I approach engineering: reduce a messy problem to its
              core, then build the simplest correct solution.
              <br />
              <br />I graduated with a{" "}
              <strong className="text-text">
                BSc in Computer Science &amp; Engineering
              </strong>{" "}
              from Jagannath University in 2024.
            </p>
          </Reveal>

          <Reveal delay={160} className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <span className="font-mono text-3xl font-bold text-accent">
                  {s.value}
                </span>
                <p className="mt-1 text-sm text-text-faint">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
