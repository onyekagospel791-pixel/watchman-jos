import type { Metadata } from "next";
import Link from "next/link";
import { site, mission, history, leaders, branches } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: mission.body,
};

export default function About() {
  return (
    <>
      {/* ------------------------------------------------------- Mission */}
      <section id="mission" className="mx-auto max-w-site px-4 pb-16 pt-16 sm:pt-24">
        <p className="eyebrow">Who we are</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight">
          {mission.heading}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted">{mission.body}</p>

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">
            Our focus is centered on
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {mission.focus.map((f) => (
              <li
                key={f}
                className="rounded-sm border border-teal/30 bg-teal-tint/50 px-4 py-2 text-sm font-medium"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="wall wall--teal" />

      {/* ------------------------------------------------------- History */}
      <section className="bg-ink py-20 text-parchment">
        <div className="mx-auto max-w-site px-4">
          <p className="eyebrow !text-gold">Our history &amp; journey</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            Inspired by God
          </h2>
          <ol className="mt-12 space-y-10 border-l-2 border-gold/40 pl-8">
            {history.map((h) => (
              <li key={h.title} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-gold bg-ink"
                />
                <p className="font-display text-xl italic text-gold">{h.year}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold">
                  {h.title}
                </h3>
                <p className="mt-2 max-w-3xl text-parchment/80">{h.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------- Leadership */}
      <section id="leadership" className="mx-auto max-w-site px-4 py-20">
        <p className="eyebrow">Our leadership</p>
        <h2 className="mt-3 font-display text-4xl font-semibold">
          Meet the heart of Watchman Church
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l) => (
            <article key={l.name}>
              <div className="photo aspect-[3/4]">
                <span>Photo — {l.name}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">
                {l.name}
              </h3>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal">
                {l.role}
              </p>
              <p className="mt-2 text-sm text-muted">{l.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------ Branches */}
      <section className="bg-teal-tint/50 py-20">
        <div className="mx-auto max-w-site px-4">
          <p className="eyebrow">Welcome to Watchman Church</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold">
            Many branches, one flexible worship &amp; engagement
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {branches.map((b) => (
              <div
                key={b}
                className="rounded-sm border-t-4 border-gold bg-parchment p-6"
              >
                <h3 className="font-display text-xl font-semibold">{b}</h3>
                <Link
                  href="/get-involved#contact"
                  className="mt-3 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
