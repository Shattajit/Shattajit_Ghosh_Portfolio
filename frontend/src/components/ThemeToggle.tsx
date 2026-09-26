"use client";

import { useEffect, useState } from "react";

const THEMES = [
  { id: "dark", label: "Current theme", icon: "🌙" },
  { id: "glacier", label: "Glacier theme", icon: "❄️" },
  { id: "white", label: "White theme", icon: "☀️" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeId>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as ThemeId | null;
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-bg-alt p-1">
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          aria-label={t.label}
          aria-pressed={theme === t.id}
          onClick={() => setTheme(t.id)}
          className={`flex h-7 w-7 items-center justify-center rounded-full text-xs leading-none transition-all ${
            theme === t.id
              ? "bg-accent text-bg"
              : "text-text-dim hover:text-text"
          }`}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
}
