import type { Metadata } from "next";
import Image from "next/image";
import { site, studyGroups, volunteering } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Discover ways to make a difference — Bible study groups, Sunday worship, volunteering, and more at Watchman Jos.",
};

export default function GetInvolved() {
  return (
    <>
      {/* ---------------------------------------------------------- Intro */}
      <section className="mx-auto max-w-site px-4 pb-16 pt-16 sm:pt-24">
        <p className="eyebrow">Join our community</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight">
          Discover ways to make a difference
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Experience the transformative power of faith through our diverse
          services. Your time and talents can impact lives.
        </p>
      </section>

      <div className="wall wall--teal" />

      {/* --------------------------------------------------- Bible study */}
      <section className="bg-teal-tint/50 py-20">
        <div className="mx-auto max-w-site px-4">
          <p className="eyebrow">Bible study groups</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            Deepen your understanding of the Bible
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {studyGroups.map((g) => (
              <article key={g.title} className="rounded-sm bg-parchment p-6">
                <h3 className="font-display text-xl font-semibold">
                  {g.title}
                </h3>
                <p className="mt-3 text-muted">{g.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Sunday worship */}
      <section className="mx-auto max-w-site px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="photo aspect-[4/3]">
            <Image
              src="/images/pastor-amos-youngo.jpg"
              alt="Pastor Amos Youngo preaching during a Sunday worship service at Watchman Jos"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Sunday worship service</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              A meaningful worship experience each week
            </h2>
            <div className="mt-6 space-y-6">
              <div className="border-l-4 border-gold pl-5">
                <h3 className="font-display text-xl font-semibold">
                  Engaging praise &amp; worship
                </h3>
                <p className="mt-2 text-muted">
                  Our Sunday services begin with uplifting music led by our
                  talented music team — the joy of praising God as a community,
                  setting the tone for a powerful message and fellowship.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-5">
                <h3 className="font-display text-xl font-semibold">
                  Inspiring sermons
                </h3>
                <p className="mt-2 text-muted">
                  Each week, our pastor delivers a sermon rooted in scripture,
                  designed to challenge and inspire your faith journey with
                  practical applications and insights.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-5">
                <h3 className="font-display text-xl font-semibold">
                  Community fellowship
                </h3>
                <p className="mt-2 text-muted">
                  After the service, connect with others during fellowship time
                  — meet new friends and build relationships that strengthen
                  your faith walk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- Volunteering */}
      <section className="bg-ink py-20 text-parchment">
        <div className="mx-auto max-w-site px-4">
          <p className="eyebrow !text-gold">Volunteer with us</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            Your time and talents can impact lives
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {volunteering.map((v) => (
              <article
                key={v.title}
                className="rounded-sm border border-parchment/15 p-6"
              >
                <h3 className="font-display text-xl font-semibold text-gold">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-parchment/80">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Contact */}
      <section id="contact" className="mx-auto max-w-site px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Get in touch with Watchman Church</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              We are here to connect and support you
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Join us in worship and fellowship — find us easily at{" "}
              {site.address}.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {site.serviceTimes.map((s) => (
                <li key={s.day} className="flex justify-between border-b border-ink/10 py-2 sm:max-w-md">
                  <span className="font-medium">{s.day}</span>
                  <span className="text-muted">{s.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Email:{" "}
              <a href={`mailto:${site.email}`} className="text-teal underline-offset-4 hover:underline">
                {site.email}
              </a>
            </p>
          </div>

          <ContactForm email={site.email} />
        </div>
      </section>
    </>
  );
}
