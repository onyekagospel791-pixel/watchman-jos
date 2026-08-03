import Link from "next/link";
import { site } from "@/lib/content";
import FooterContactForm from "@/components/FooterContactForm";

export default function Footer() {
  return (
    <footer className="bg-ink text-parchment">
      <div className="wall" />
      <div className="mx-auto grid max-w-site gap-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-parchment/70">{site.fullName}</p>
          <p className="mt-4 font-display italic text-gold">
            &ldquo;{site.designation}&rdquo;
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-parchment/60">
            {site.scripture}
          </p>
        </div>

        <div>
          <p className="eyebrow !text-gold">Visit us</p>
          <p className="mt-3 text-sm text-parchment/80">{site.address}</p>
          <ul className="mt-4 space-y-1 text-sm text-parchment/80">
            {site.serviceTimes.map((s) => (
              <li key={s.day}>
                {s.day} — {s.time}
              </li>
            ))}
          </ul>
          <a
            href={site.youtube}
            className="mt-4 inline-block text-sm text-gold underline-offset-4 hover:underline"
          >
            Watch on YouTube
          </a>
        </div>

        <div>
          <p className="eyebrow !text-gold">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-gold">About us</Link></li>
            <li><Link href="/about#mission" className="hover:text-gold">Our mission</Link></li>
            <li><Link href="/about#leadership" className="hover:text-gold">Leadership</Link></li>
            <li><Link href="/sermons" className="hover:text-gold">Sermons &amp; media</Link></li>
            <li><Link href="/give" className="hover:text-gold">Give</Link></li>
            <li><Link href="/get-involved" className="hover:text-gold">Get involved</Link></li>
            <li><Link href="/get-involved#contact" className="hover:text-gold">Contact us</Link></li>
          </ul>
          <p className="mt-4 text-sm text-parchment/70">{site.email}</p>
        </div>

        <div>
          <p className="eyebrow !text-gold">Join us in faith &amp; fellowship</p>
          <FooterContactForm email={site.email} />
        </div>
      </div>

      <div className="border-t border-parchment/10">
        <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-parchment/50">
          <span>
            © {new Date().getFullYear()} {site.fullName}
          </span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-gold">Privacy policy</a>
            <a href="#" className="hover:text-gold">Terms &amp; conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
