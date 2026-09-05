import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="section-py bg-bg-alt">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-tag">06 · Education</p>
          <h2 className="section-title">Academic Background</h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-xl border border-border bg-surface p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-bold text-text">
                Jagannath University
              </h3>
              <span className="whitespace-nowrap font-mono text-sm text-text-faint">
                Jan 2019 — Oct 2024
              </span>
            </div>
            <p className="mb-2.5 mt-1 text-accent-2">
              BSc, Computer Science &amp; Engineering
            </p>
            <p className="text-[0.94rem] text-text-dim">
              Coursework: Object-Oriented Programming, Data Structures &amp;
              Algorithms, DBMS, Computer Networking, Operating Systems,
              Machine Learning.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
