"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/sermons", label: "Sermons" },
  { href: "/get-involved", label: "Get involved" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-parchment/95 backdrop-blur">
      {/* Service times strip */}
      <div className="bg-ink text-parchment">
        <div className="mx-auto flex max-w-site flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-1.5 text-[11px] uppercase tracking-widest sm:justify-between">
          <span className="text-gold">{site.designation}</span>
          <span className="hidden gap-6 sm:flex">
            {site.serviceTimes.map((s) => (
              <span key={s.day}>
                {s.day} · {s.time}
              </span>
            ))}
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-site items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/crest.png"
            alt=""
            aria-hidden
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border-2 border-teal object-contain p-0.5"
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">
              {site.name}
            </span>
            <span className="block text-[11px] uppercase tracking-widest text-muted">
              WCCRM
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-teal">
              {l.label}
            </Link>
          ))}
          <Link
            href="/give"
            className="rounded-sm bg-gold px-4 py-2 text-ink transition-colors hover:bg-gold-soft"
          >
            Give
          </Link>
          <Link
            href="/get-involved#contact"
            className="rounded-sm bg-teal px-4 py-2 text-parchment transition-colors hover:bg-teal-deep"
          >
            Plan a visit
          </Link>
        </nav>

        <button
          className="relative h-6 w-6 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`absolute left-0 block h-0.5 w-6 bg-ink transition-transform duration-200 ${
              open ? "top-[11px] rotate-45" : "top-[5px]"
            }`}
          />
          <span
            className={`absolute left-0 top-[11px] block h-0.5 w-6 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-6 bg-ink transition-transform duration-200 ${
              open ? "top-[11px] -rotate-45" : "top-[17px]"
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/give"
            className="block py-2 font-medium"
            onClick={() => setOpen(false)}
          >
            Give
          </Link>
          <Link
            href="/get-involved#contact"
            className="mt-2 inline-block rounded-sm bg-teal px-4 py-2 text-parchment"
            onClick={() => setOpen(false)}
          >
            Plan a visit
          </Link>
        </nav>
      )}

      <div className="wall wall--teal" />
    </header>
  );
}
