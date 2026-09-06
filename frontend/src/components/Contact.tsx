"use client";

import { FormEvent, useState } from "react";
import { sendContactMessage } from "@/lib/api";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    setStatus("sending");
    const result = await sendContactMessage(payload);
    setFeedback(result.message);
    setStatus(result.ok ? "success" : "error");
    if (result.ok) form.reset();
  }

  return (
    <section id="contact" className="section-py bg-bg text-center">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-tag">07 · Contact</p>
          <h2 className="section-title">Let&apos;s work together</h2>
          <p className="mx-auto mb-10 max-w-md text-text-dim">
            Have an opportunity, a project, or just want to talk backend
            architecture? My inbox is open.
          </p>
        </Reveal>

        <Reveal delay={80} className="mx-auto max-w-lg text-left">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-text-dim">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                minLength={2}
                maxLength={100}
                className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-text-dim">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={200}
                className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-text-dim">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={2000}
                rows={5}
                className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-text outline-none transition-colors focus:border-accent"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all hover:-translate-y-0.5 hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send Email"}
            </button>
            {status === "success" && (
              <p className="text-sm text-accent">{feedback}</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">{feedback}</p>
            )}
          </form>
        </Reveal>

        <Reveal delay={140} className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard label="Email" value="shattajitghosh89@gmail.com" href="mailto:shattajitghosh89@gmail.com" />
          <ContactCard label="Phone" value="+880 1894 097578" href="tel:+8801894097578" />
          <ContactCard label="LinkedIn" value="/in/shattajit-ghosh" href="https://www.linkedin.com/in/shattajit-ghosh/" />
          <ContactCard label="GitHub" value="/Shattajit" href="https://github.com/Shattajit" />
        </Reveal>

        <p className="mt-9 text-sm text-text-faint">📍 Savar, Dhaka, Bangladesh</p>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex flex-col gap-1.5 rounded-xl border border-border bg-surface p-5 text-center transition-all hover:-translate-y-1 hover:border-accent"
    >
      <span className="font-mono text-xs text-text-faint">{label}</span>
      <span className="break-words text-sm text-text">{value}</span>
    </a>
  );
}
