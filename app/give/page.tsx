import type { Metadata } from "next";
import Link from "next/link";
import { site, giving } from "@/lib/content";

export const metadata: Metadata = {
  title: "Give",
  description: giving.body,
};

export default function Give() {
  return (
    <>
      {/* ------------------------------------------------------------- Intro */}
      <section className="mx-auto max-w-site px-4 pb-16 pt-16 sm:pt-24">
        <p className="eyebrow">Giving</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight">
          {giving.heading}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{giving.body}</p>
      </section>

      <div className="wall wall--teal" />

      {/* ------------------------------------------------------------ Methods */}
      <section className="bg-teal-tint/50 py-20">
        <div className="mx-auto max-w-site px-4">
          <p className="eyebrow">Ways to give</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            Choose what works for you
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {giving.methods.map((m) => (
              <article key={m.title} className="rounded-sm bg-parchment p-6">
                <h3 className="font-display text-xl font-semibold">{m.title}</h3>
                <p className="mt-3 text-muted">{m.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs uppercase tracking-widest text-muted">
            Account details above are placeholders — update{" "}
            <code className="rounded-sm bg-ink/5 px-1.5 py-0.5">lib/content.ts</code>{" "}
            with your real giving information.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------- Designations */}
      <section className="bg-ink py-20 text-parchment">
        <div className="mx-auto max-w-site px-4">
          <p className="eyebrow !text-gold">Where your giving goes</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            Designate your gift
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {giving.designations.map((d) => (
              <article
                key={d.title}
                className="rounded-sm border border-parchment/15 p-6"
              >
                <h3 className="font-display text-xl font-semibold text-gold">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm text-parchment/80">{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- Contact */}
      <section className="mx-auto max-w-site px-4 py-20 text-center">
        <p className="eyebrow">Questions about giving?</p>
        <h2 className="mt-3 font-display text-3xl font-semibold">
          We&rsquo;re happy to help
        </h2>
        <p className="mt-4 text-muted">
          Reach out to us at{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-teal underline-offset-4 hover:underline"
          >
            {site.email}
          </a>{" "}
          or speak with a leader after any service.
        </p>
        <Link
          href="/get-involved#contact"
          className="mt-8 inline-block rounded-sm bg-teal px-8 py-3 font-medium text-parchment transition-colors hover:bg-teal-deep"
        >
          Contact us
        </Link>
      </section>
    </>
  );
}
