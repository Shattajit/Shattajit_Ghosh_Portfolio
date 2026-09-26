"use client";

import { ReactNode } from "react";
import { useScrollFill } from "@/hooks/useScrollFill";

export default function TimelineRail({
  children,
  className = "",
  dashed = false,
}: {
  children: ReactNode;
  className?: string;
  dashed?: boolean;
}) {
  const { ref, fill } = useScrollFill<HTMLDivElement>();

  return (
    <div ref={ref} className={`relative ${className}`}>
      <span
        className={`absolute left-0 top-0 h-full w-px ${
          dashed ? "border-l border-dashed border-border/70" : "bg-border"
        }`}
      />
      <span
        className="absolute left-0 top-0 w-px bg-accent shadow-[0_0_8px_rgba(94,234,212,0.5)] transition-[height] duration-150 ease-out"
        style={{ height: fill }}
      />
      {children}
    </div>
  );
}
