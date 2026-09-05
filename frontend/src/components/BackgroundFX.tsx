"use client";

import { useEffect, useRef } from "react";

export default function BackgroundFX() {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine)");
    if (!mql.matches) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!frame) {
        frame = requestAnimationFrame(() => {
          spotlightRef.current?.style.setProperty("--spot-x", `${targetX}px`);
          spotlightRef.current?.style.setProperty("--spot-y", `${targetY}px`);
          frame = 0;
        });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />
      <div ref={spotlightRef} className="bg-spotlight" />
    </div>
  );
}
