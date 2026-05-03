import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist on WaconiaGuide. Try the links below or return home.",
  robots: { index: false, follow: false },
};

const POPULAR_LINKS = [
  { href: "/", label: "Home" },
  { href: "/guides/lake-waconia", label: "Lake Waconia Guide" },
  { href: "/guides/things-to-do-waconia", label: "Things to Do in Waconia" },
  { href: "/directory", label: "Business Directory" },
  { href: "/events", label: "Local Events" },
  { href: "/hotels", label: "Where to Stay" },
  { href: "/glossary", label: "Glossary" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
      <span className="text-6xl mb-6 block" aria-hidden="true">
        🌊
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
        Off the map
      </h1>
      <p className="text-text-muted leading-relaxed mb-10">
        We can&apos;t find that page. It may have moved, or the link that
        brought you here might be out of date. Try one of the popular pages
        below — or{" "}
        <Link href="/contact" className="text-primary hover:underline">
          let us know what you were looking for
        </Link>
        .
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {POPULAR_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="block bg-surface border border-border rounded-xl p-4 text-sm font-medium text-text-primary hover:border-primary/40 hover:text-primary transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-full transition-colors"
      >
        ← Back to home
      </Link>
    </div>
  );
}
