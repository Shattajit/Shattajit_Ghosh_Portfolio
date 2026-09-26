"use client";

import { useEffect, useState } from "react";

const PHRASE = "let's build something great together.";

export default function TerminalBanner() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = PHRASE.slice(0, text.length + 1);
        setText(next);
        if (next === PHRASE) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        const next = PHRASE.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setTimeout(() => setDeleting(false), 500);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting]);

  return (
    <section className="bg-bg py-16">
      <div className="mx-auto w-full max-w-2xl px-6">
        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-xs text-text-faint">powershell</span>
          </div>
          <div className="px-5 py-5 font-mono text-sm">
            <span className="text-accent-2">PS </span>
            <span className="text-text-faint">C:\Users\Shattajit&gt;</span>{" "}
            <span className="text-text">{text}</span>
            <span className="animate-pulse text-accent">▌</span>
          </div>
        </div>
      </div>
    </section>
  );
}
