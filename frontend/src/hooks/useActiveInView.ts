"use client";

import { useEffect, useRef, useState } from "react";

export function useActiveInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, active };
}
