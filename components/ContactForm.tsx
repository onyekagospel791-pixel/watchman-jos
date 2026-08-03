"use client";

import { useState } from "react";
import { buildMailtoHref } from "@/lib/mailto";

export default function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const fromEmail = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const name = [firstName, lastName].filter(Boolean).join(" ");

    const subject = `Message from ${name || "the website"}`;
    const body = [message, "", `— ${name}${fromEmail ? ` (${fromEmail})` : ""}`].join(
      "\n"
    );

    const href = buildMailtoHref(email, subject, body);
    setSent(true);
    // Let the confirmation message paint before handing off to the mail client.
    setTimeout(() => {
      window.location.href = href;
    }, 0);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-sm bg-teal-tint/50 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          First name
          <input
            type="text"
            name="firstName"
            required
            className="mt-1 w-full rounded-sm border border-ink/15 bg-parchment px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          Last name
          <input
            type="text"
            name="lastName"
            className="mt-1 w-full rounded-sm border border-ink/15 bg-parchment px-3 py-2"
          />
        </label>
      </div>
      <label className="block text-sm">
        Email
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-sm border border-ink/15 bg-parchment px-3 py-2"
        />
      </label>
      <label className="block text-sm">
        Message
        <textarea
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-sm border border-ink/15 bg-parchment px-3 py-2"
        />
      </label>
      <button
        type="submit"
        className="rounded-sm bg-teal px-6 py-3 font-medium text-parchment transition-colors hover:bg-teal-deep"
      >
        Send message
      </button>
      {sent && (
        <p className="text-sm text-teal" role="status">
          Opening your email app so you can send this message to us.
        </p>
      )}
    </form>
  );
}
