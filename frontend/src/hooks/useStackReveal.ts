"use client";

import { useEffect, useRef } from "react";

const HOLD_MS = 450;

/**
 * Cards inside the returned container start fully overlapped (a shuffled
 * stack anchored on the first card), hold there briefly, then peel apart
 * into their real grid positions once the group scrolls into view.
 */
export function useStackReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const group = ref.current;
    if (!group) return;

    const items = Array.from(group.children) as HTMLElement[];
    if (!items.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    const anchor = items[0].getBoundingClientRect();
    const stackCx = anchor.left + anchor.width / 2;
    const stackCy = anchor.top + anchor.height / 2;

    items.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = stackCx - cx;
      const dy = stackCy - cy;
      const rot = (i % 2 === 0 ? 1 : -1) * (3 + (i % 4) * 2.5);

      el.style.transition = "none";
      el.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;
      el.style.zIndex = String(items.length - i);
      el.style.boxShadow = "0 10px 24px rgba(0,0,0,0.35)";
      el.style.opacity = "1";
    });

    void group.offsetHeight;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setTimeout(() => {
          items.forEach((el, i) => {
            const delay = i * 90;
            el.style.transitionDelay = `${delay}ms`;
            el.style.transition = `transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, box-shadow 0.65s ease-out ${delay}ms`;
            el.style.boxShadow = "none";
            el.style.transform = "none";
          });
        }, HOLD_MS);

        observer.disconnect();
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(group);
    return () => observer.disconnect();
  }, []);

  return ref;
}
