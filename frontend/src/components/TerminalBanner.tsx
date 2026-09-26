"use client";

import { useEffect, useState } from "react";

const PHRASE = "let's build something great together.";
const TYPE_SPEED = 65;
const DELETE_SPEED = 35;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 500;

type Phase = "typing" | "deleting";

export default function TerminalBanner() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < PHRASE.length) {
        timeout = setTimeout(() => setText(PHRASE.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(PHRASE.slice(0, text.length - 1)), DELETE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("typing"), PAUSE_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase]);

  return (
    <section className="bg-bg py-6">
      <div className="mx-auto w-full max-w-2xl px-6">
        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-xs text-text-faint">
              shattajit@portfolio: ~
            </span>
          </div>
          <div className="px-5 py-5 font-mono text-sm leading-relaxed">
            <div>
              <span className="text-accent">┌─[</span>
              <span className="text-accent-2">shattajit</span>
              <span className="text-text-faint">@</span>
              <span className="text-accent-2">portfolio</span>
              <span className="text-accent">]─[~]</span>
            </div>
            <div>
              <span className="text-accent">└─$ </span>
              <span className="text-text">{text}</span>
              <span className="animate-pulse text-accent">▌</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
