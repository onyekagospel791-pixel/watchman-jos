import type { Metadata } from "next";
import { site, sermons } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sermons & media",
  description:
    "Catch up on recent messages from Watchman Jos, or watch live and past services on our YouTube channel.",
};

export default function Sermons() {
  return (
    <>
      {/* ------------------------------------------------------------- Intro */}
      <section className="mx-auto max-w-site px-4 pb-16 pt-16 sm:pt-24">
        <p className="eyebrow">Sermons &amp; media</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight">
          Messages to feed your spirit
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Missed a service, or want to revisit a message that spoke to you?
          Every Sunday, Tuesday, and Thursday gathering is recorded and shared
          on our YouTube channel.
        </p>
        <a
          href={site.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-sm bg-teal px-6 py-3 font-medium text-parchment transition-colors hover:bg-teal-deep"
        >
          Watch on YouTube →
        </a>
      </section>

      <div className="wall wall--teal" />

      {/* --------------------------------------------------------- Recent list */}
      <section className="mx-auto max-w-site px-4 py-20">
        <p className="eyebrow">Recent messages</p>
        <h2 className="mt-3 font-display text-4xl font-semibold">
          Latest from the pulpit
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sermons.map((s) => (
            <article key={s.title} className="border-t-4 border-gold pt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal">
                {s.date} · {s.scripture}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {s.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted">{s.speaker}</p>
              <p className="mt-3 text-muted">{s.body}</p>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
              >
                Watch →
              </a>
            </article>
          ))}
        </div>
        <p className="mt-10 text-xs uppercase tracking-widest text-muted">
          Sample listing — replace with your actual uploads in{" "}
          <code className="rounded-sm bg-ink/5 px-1.5 py-0.5">lib/content.ts</code>,
          or wire this page up to the YouTube Data API.
        </p>
      </section>

      {/* ------------------------------------------------------------- Subscribe */}
      <section className="bg-ink py-20 text-parchment">
        <div className="mx-auto max-w-site px-4 text-center">
          <p className="eyebrow !text-gold">Never miss a message</p>
          <h2 className="mt-3 font-display text-3xl font-semibold">
            Subscribe to Watchman Jos on YouTube
          </h2>
          <a
            href={site.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-sm bg-gold px-8 py-3 font-semibold text-ink transition-colors hover:bg-gold-soft"
          >
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </>
  );
}
