# Watchman Jos — Church Website

Next.js (App Router) + Tailwind CSS website for the Watchman Catholic
Charismatic Renewal Movement, Jos ("The House of His Glory").

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

All copy lives in one file: `lib/content.ts` — service times, programs,
beliefs, leadership, testimonials, contact details. Edit there; the pages
render from it.

## Pages

- `/` — Home: hero, Word·Spirit·Power pillars, annual program calendar,
  conferences, beliefs, sermons/giving teaser, testimonials
- `/about` — Mission, history timeline (1975 → today), leadership, branches
- `/sermons` — Recent messages and a link to the YouTube channel
- `/give` — Ways to give, giving designations
- `/get-involved` — Bible study groups, Sunday worship, volunteering, contact

## Before you publish

- **Giving details are placeholders.** `giving.methods` in `lib/content.ts`
  has `[add bank name]` / `[add account number]` placeholders — replace with
  real account details.
- **Sermons are sample data.** `sermons` in `lib/content.ts` is a placeholder
  list; replace with real messages or wire `/sermons` up to the YouTube Data
  API.
- **Set the real domain.** Set `NEXT_PUBLIC_SITE_URL` (used by the sitemap,
  robots.txt, and Open Graph tags) to your production URL when deploying.

## Photos

Placeholder blocks (`.photo`) mark where photos go. Put your images in
`public/images/` and swap the placeholders for `next/image` components —
see `public/images/README.md`.

## Contact form

The forms currently post to `mailto:`. For real submissions, wire them to a
service like Formspree, Resend, or a Next.js route handler.
