"use client";

import { useEffect, useRef, useState } from "react";

const ANCHOR_RATIO = 0.5;

/** True once the same scroll anchor line (the vertical middle of the
 * viewport) has scrolled past this element's top — used to "light up" in
 * sync with useScrollFill's line fill. */
export function useScrollPassed<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    const measure = () => {
      const rect = node.getBoundingClientRect();
      const anchor = window.innerHeight * ANCHOR_RATIO;
      setPassed(rect.top <= anchor);
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

  return { ref, passed };
}
