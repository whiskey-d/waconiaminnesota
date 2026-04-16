import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "../lib/metadata";
import { guides } from "../lib/guides";

export const metadata: Metadata = buildMetadata({
  title: "Waconia Guides — Lake, Fishing, and Local Life",
  description:
    "In-depth guides to Lake Waconia and the surrounding area: fishing by season, boating access, swimming, parks, trails, and everything visitors need to know.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
          Waconia Guides
        </h1>
        <p className="text-text-muted mt-3 text-lg max-w-2xl">
          Long-form guides to help you get the most out of Lake Waconia and
          the surrounding community — written and maintained by locals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={g.heroImage}
                alt={g.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors mb-2">
                {g.title}
              </h2>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                {g.metaDescription}
              </p>
              <div className="flex items-center gap-3 text-xs text-text-muted">
                <span>Updated {g.updatedDate}</span>
                <span>·</span>
                <span>By {g.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
