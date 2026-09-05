"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ROLES = [
  "Backend Software Engineer",
  "ASP.NET Core Developer",
  "Competitive Programmer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex % ROLES.length];
    const speed = deleting ? 40 : 70;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-[68px]"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-12 px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 font-mono text-accent">{"// Hello, I'm"}</p>
          <h1 className="text-[clamp(2.6rem,6vw,4.2rem)] font-extrabold leading-[1.05] tracking-tight text-text">
            Shattajit Ghosh
          </h1>
          <h2 className="mt-3 min-h-[1.6em] font-mono text-[clamp(1.2rem,3vw,1.7rem)] font-semibold text-accent-2">
            {text}
            <span className="animate-pulse text-accent">|</span>
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] text-text-dim">
            Backend-focused Software Engineer building scalable APIs, clean
            architectures, and AI-integrated systems. Currently engineering at{" "}
            <strong className="text-text">Astha IT</strong>, Dhaka.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all hover:-translate-y-0.5 hover:bg-accent/90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-10 flex gap-5">
            <SocialLink
              href="https://github.com/Shattajit"
              label="GitHub"
              icon={
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              }
            />
            <SocialLink
              href="https://www.linkedin.com/in/shattajit-ghosh/"
              label="LinkedIn"
              icon={
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
              }
            />
            <SocialLink
              href="mailto:shattajitghosh89@gmail.com"
              label="Email"
              icon={
                <path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.01L12 13 22 6.01V6H2Zm20 2.24-9.36 6.49a1 1 0 0 1-1.14 0L2 8.24V18h20V8.24Z" />
              }
            />
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-accent/20 blur-2xl" />
          <Image
            src="/profile.jpg"
            alt="Shattajit Ghosh"
            width={280}
            height={280}
            priority
            className="h-40 w-40 rounded-full border-2 border-border object-cover sm:h-52 sm:w-52 md:h-64 md:w-64"
          />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-9 left-1/2 h-[42px] w-[26px] -translate-x-1/2 rounded-full border border-border"
      >
        <span className="absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 animate-bounce rounded-full bg-accent" />
      </a>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-text-dim transition-all hover:-translate-y-0.5 hover:text-accent"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        {icon}
      </svg>
    </a>
  );
}
