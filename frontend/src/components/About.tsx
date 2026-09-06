import { AboutInfo } from "@/lib/types";
import { renderBoldText } from "@/lib/contentHelpers";
import Reveal from "./Reveal";

export default function About({ info }: { info: AboutInfo }) {
  return (
    <section id="about" className="section-py bg-bg">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-tag">01 · About</p>
          <h2 className="section-title">A bit about me</h2>
        </Reveal>

        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr]">
          <Reveal delay={80}>
            <div className="flex flex-col gap-4 text-[1.02rem] leading-relaxed text-text-dim">
              {info.paragraphs.map((p, i) => (
                <p key={i}>{renderBoldText(p)}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160} className="grid grid-cols-2 gap-4">
            {info.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40"
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
