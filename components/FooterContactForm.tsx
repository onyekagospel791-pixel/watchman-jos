"use client";

import { useState } from "react";
import { buildMailtoHref } from "@/lib/mailto";

export default function FooterContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const fromEmail = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Message from ${name || "the website"}`;
    const body = [message, "", `— ${name}${fromEmail ? ` (${fromEmail})` : ""}`].join(
      "\n"
    );

    const href = buildMailtoHref(email, subject, body);
    setSent(true);
    setTimeout(() => {
      window.location.href = href;
    }, 0);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 space-y-3">
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full rounded-sm bg-parchment/10 px-3 py-2 text-sm placeholder:text-parchment/50"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full rounded-sm bg-parchment/10 px-3 py-2 text-sm placeholder:text-parchment/50"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={3}
        required
        className="w-full rounded-sm bg-parchment/10 px-3 py-2 text-sm placeholder:text-parchment/50"
      />
      <button
        type="submit"
        className="rounded-sm bg-gold px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-gold-soft"
      >
        Send message
      </button>
      {sent && (
        <p className="text-xs text-gold" role="status">
          Opening your email app to send this.
        </p>
      )}
    </form>
  );
}
