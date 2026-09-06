"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        scrolled
          ? "bg-bg/90 border-b border-border"
          : "bg-bg/60 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-5xl items-center justify-between px-6">
        <Link
          href="#home"
          className="font-mono text-lg font-bold text-text"
          onClick={() => setOpen(false)}
        >
          SG<span className="text-accent">.</span>
        </Link>

        <nav className="hidden gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-1 text-sm text-text-dim transition-colors hover:text-text"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="/Shattajit_Ghosh_Resume.pdf"
          download="Shattajit_Ghosh_Resume.pdf"
          className="hidden animate-pulse-glow rounded-lg border border-accent/40 bg-accent px-4 py-2 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 hover:brightness-110 md:inline-flex"
        >
          Resume
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-[2px] w-full bg-text transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-full bg-text transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-full bg-text transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-5 border-b border-border bg-bg px-6 py-6 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-text-dim hover:text-text"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Shattajit_Ghosh_Resume.pdf"
            download="Shattajit_Ghosh_Resume.pdf"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold text-accent"
          >
            Download Resume
          </a>
        </nav>
      )}
    </header>
  );
}
