import { site, giving } from "@/lib/content";

export const metadata = {
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

      {/* ------------------------------------------------------------ Account */}
      <section className="bg-teal-tint/50 py-20">
        <div className="mx-auto max-w-site px-4">
          <p className="eyebrow">Account details</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            Give by bank transfer
          </h2>
          <dl className="mt-10 max-w-xl space-y-4 rounded-sm bg-parchment p-6">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">Account name</dt>
              <dd className="font-display text-xl font-semibold">{giving.account.name}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">Bank</dt>
              <dd className="font-display text-xl font-semibold">{giving.account.bank}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">Account number</dt>
              <dd className="font-display text-xl font-semibold">{giving.account.number}</dd>
            </div>
          </dl>
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
        <a
          href="/get-involved#contact"
          className="mt-8 inline-block rounded-sm bg-teal px-8 py-3 font-medium text-parchment transition-colors hover:bg-teal-deep"
        >
          Contact us
        </a>
      </section>
    </>
  );
}
