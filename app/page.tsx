import Link from "next/link";
import Image from "next/image";
import {
  site,
  pillars,
  programs,
  conferences,
  beliefs,
  testimonials,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------------------ Hero */}
      <section className="mx-auto max-w-site px-4 pb-20 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="rise">
            <p className="eyebrow">{site.scripture}</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] sm:text-7xl">
              A church empowered by{" "}
              <span className="italic text-teal">the Word</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{site.intro}</p>
            <p className="mt-3 max-w-xl text-sm text-muted">
              The place where God has placed His{" "}
              <strong className="text-gold">Word, Spirit &amp; Power</strong> —
              now with a designated name:{" "}
              <em className="font-display">{site.designation}</em>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/get-involved#contact"
                className="rounded-sm bg-teal px-6 py-3 font-medium text-parchment transition-colors hover:bg-teal-deep"
              >
                Plan a visit
              </Link>
              <Link
                href="/about"
                className="rounded-sm border border-ink/20 px-6 py-3 font-medium transition-colors hover:border-teal hover:text-teal"
              >
                Who we are
              </Link>
            </div>
          </div>

          <div className="photo aspect-[4/5] w-full">
            <Image
              src="/images/sanctuary.jpg"
              alt="The Watchman Fellowship Center sanctuary, The House of His Glory"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <div className="wall" />

      {/* --------------------------------------------------------- Pillars */}
      <section className="bg-teal-tint/50 py-20">
        <div className="mx-auto max-w-site px-4">
          <p className="eyebrow">What awaits you</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            Word · Spirit · Power
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.title} className="border-t-4 border-gold pt-5">
                <h3 className="font-display text-2xl font-semibold">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Annual programs */}
      <section className="mx-auto max-w-site px-4 py-20">
        <p className="eyebrow">Annual program</p>
        <h2 className="mt-3 font-display text-4xl font-semibold">
          A year on the watch
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Join us for a variety of events designed to enrich your faith and
          strengthen our community — the same rhythm, every year.
        </p>

        <ol className="mt-12 space-y-0">
          {programs.map((p, i) => (
            <li
              key={p.title}
              className="grid gap-4 border-t border-ink/10 py-8 sm:grid-cols-[8rem_1fr_auto]"
            >
              <span className="font-display text-xl italic text-teal">
                {p.month}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-2xl text-muted">{p.body}</p>
              </div>
              <Link
                href="/get-involved#contact"
                className="self-start text-sm font-medium text-teal underline-offset-4 hover:underline"
              >
                {p.cta} →
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* ----------------------------------------------------- Conferences */}
      <section className="bg-ink py-20 text-parchment">
        <div className="mx-auto max-w-site px-4">
          <p className="eyebrow !text-gold">Annual conferences</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            For every generation
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {conferences.map((c) => (
              <article
                key={c.title}
                className="rounded-sm border border-parchment/15 p-6"
              >
                <h3 className="font-display text-xl font-semibold text-gold">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-parchment/80">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Beliefs */}
      <section className="mx-auto max-w-site px-4 py-20">
        <p className="eyebrow">What we believe</p>
        <h2 className="mt-3 font-display text-4xl font-semibold">Our belief</h2>
        <p className="mt-3 max-w-2xl text-muted">
          The Watchman Catholic Charismatic Renewal Movement&rsquo;s beliefs are
          strongly based on scriptural references and our lifestyle.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {beliefs.map((b) => (
            <article key={b.title} className="border-l-4 border-teal pl-5">
              <h3 className="font-display text-xl font-semibold">{b.title}</h3>
              <p className="mt-3 text-muted">{b.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------- Sermons & giving */}
      <section className="mx-auto max-w-site px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-sm border-t-4 border-teal bg-teal-tint/50 p-8">
            <p className="eyebrow">Sermons &amp; media</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">
              Missed a service?
            </h3>
            <p className="mt-3 text-muted">
              Catch up on recent messages or watch live on our YouTube channel.
            </p>
            <Link
              href="/sermons"
              className="mt-6 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
            >
              Watch messages →
            </Link>
          </div>
          <div className="rounded-sm border-t-4 border-gold bg-gold-soft/40 p-8">
            <p className="eyebrow">Giving</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">
              Support the vision
            </h3>
            <p className="mt-3 text-muted">
              Your tithes and offerings sustain worship, outreach, and the
              annual programs that reach thousands.
            </p>
            <Link
              href="/give"
              className="mt-6 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
            >
              Ways to give →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Testimonials */}
      <section className="bg-teal-tint/50 py-20">
        <div className="mx-auto max-w-site px-4">
          <p className="eyebrow">Members&rsquo; experiences</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            Hear from those who found their place here
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.title} className="rounded-sm bg-parchment p-6">
                <p className="font-display text-lg italic">
                  &ldquo;{t.body}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-semibold text-teal">
                  {t.title}
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/get-involved"
              className="inline-block rounded-sm bg-gold px-8 py-3 font-semibold text-ink transition-colors hover:bg-gold-soft"
            >
              Become a member
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
