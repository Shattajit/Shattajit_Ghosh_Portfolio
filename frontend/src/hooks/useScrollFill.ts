"use client";

import { useEffect, useRef, useState } from "react";

const ANCHOR_RATIO = 0.35;

/** Tracks how far a scroll "anchor" line (35% down the viewport) has
 * traveled through this element, as a pixel height from its top. */
export function useScrollFill<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    const measure = () => {
      const rect = node.getBoundingClientRect();
      const anchor = window.innerHeight * ANCHOR_RATIO;
      const px = Math.min(Math.max(anchor - rect.top, 0), rect.height);
      setFill(px);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { ref, fill };
}
