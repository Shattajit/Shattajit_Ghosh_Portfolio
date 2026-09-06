import { Fragment, ReactNode } from "react";

type Tone = "accent" | "blue" | "violet";

const BULLET_ICON_RULES: { keywords: string[]; icon: string; tone: Tone }[] = [
  { keywords: ["fix", "fixed", "bug", "broken", "resolve"], icon: "🛠️", tone: "accent" },
  { keywords: ["security", "auth", "token", "session", "logout", "login"], icon: "🔐", tone: "accent" },
  { keywords: ["client", "stakeholder", "customer"], icon: "🤝", tone: "blue" },
  { keywords: ["schedule", "hangfire", "cron", "automat"], icon: "⏱️", tone: "accent" },
  { keywords: ["optimi", "performance", "resolver", "query", "queries"], icon: "🚀", tone: "violet" },
  { keywords: ["report", "invoice", "dashboard", "pdf", "data"], icon: "📊", tone: "blue" },
  { keywords: ["role", "admin", "permission", "management"], icon: "👥", tone: "violet" },
  { keywords: ["learn", "learned"], icon: "📚", tone: "accent" },
  { keywords: ["pattern", "architecture", "strategy", "pipeline", "design"], icon: "🏗️", tone: "violet" },
  { keywords: ["openai", "ai", "llm", "prompt", "llamaindex", "llamaparse"], icon: "🧠", tone: "accent" },
  { keywords: ["template", "document", "parse", "extract"], icon: "📄", tone: "blue" },
  { keywords: ["migrat"], icon: "🔧", tone: "blue" },
];

export function getBulletIcon(text: string): { icon: string; tone: Tone } {
  const lower = text.toLowerCase();
  for (const rule of BULLET_ICON_RULES) {
    if (rule.keywords.some((k) => lower.includes(k))) {
      return { icon: rule.icon, tone: rule.tone };
    }
  }
  return { icon: "💡", tone: "accent" };
}

export function renderBoldText(text: string): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-text">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

export function splitStack(stack: string): string[] {
  return stack
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean);
}
