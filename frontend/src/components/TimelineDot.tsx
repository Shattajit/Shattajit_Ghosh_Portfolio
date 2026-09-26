"use client";

import { useActiveInView } from "@/hooks/useActiveInView";

export default function TimelineDot({ size = "lg" }: { size?: "lg" | "sm" }) {
  const { ref, active } = useActiveInView<HTMLSpanElement>();
  const dims = size === "lg" ? "h-3 w-3" : "h-2.5 w-2.5";
  const offset =
    size === "lg" ? "-left-[29px] sm:-left-[37px]" : "-left-[23px] sm:-left-[29px]";

  return (
    <span
      ref={ref}
      className={`absolute top-1 ${offset} ${dims} shrink-0 rounded-full transition-all duration-300 ${
        active
          ? "scale-110 bg-accent shadow-[0_0_0_4px_rgba(94,234,212,0.15)]"
          : "border-2 border-border bg-bg-alt"
      }`}
    />
  );
}
