import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "../components/Breadcrumb";
import { businesses, CATEGORIES } from "../lib/businesses";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Waconia Business Directory — Restaurants, Breweries & More",
  description:
    "Browse local businesses in Waconia, MN — restaurants, breweries and wineries, things to do, services, shopping, and lodging. Curated by locals.",
  path: "/directory",
});

const categoryColors: Record<string, string> = {
  DINING: "bg-primary",
  BARS: "bg-purple-600",
  RETAIL: "bg-amber-500",
  "LOCAL SERVICES": "bg-gray-500",
};

export default function DirectoryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumb items={[{ label: "Directory" }]} />

      <div className="flex items-center gap-3 mt-4 text-sm text-text-muted">
        <span className="inline-flex items-center gap-1">📍 Waconia, MN</span>
        <span>·</span>
        <span>{businesses.length} listings</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mt-4 mb-3">
        Waconia Business Directory
      </h1>
      <p className="text-text-muted leading-relaxed max-w-2xl mb-10">
        From lakeside dining to estate wineries to the only hotel in town —
        every Waconia business worth knowing, organized by what you&apos;re
        looking for.
      </p>

      {/* Category landings */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-text-primary mb-4">
          Browse by category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/directory/${cat.slug}`}
              className="group bg-white rounded-xl border border-border p-5 hover:shadow-md hover:border-primary/30 transition-all"
            >
              <span className="text-2xl mb-2 block">{cat.emoji}</span>
              <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                {cat.label}
              </h3>
              <p className="text-xs text-text-muted mt-1 line-clamp-2">
                {cat.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* All listings grid */}
      <section className="mb-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl font-bold text-text-primary">All Listings</h2>
          <p className="text-sm text-text-muted">
            {businesses.length} businesses
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {businesses.map((biz) => (
            <Link
              key={biz.slug}
              href={`/directory/${biz.slug}`}
              className="group block bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={biz.image}
                  alt={biz.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    categoryColors[biz.category] ?? "bg-gray-500"
                  }`}
                >
                  {biz.category}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                    {biz.name}
                  </h3>
                  <span className="flex items-center gap-1 text-sm text-text-muted">
                    ⭐ {biz.rating}
                  </span>
                </div>
                <p className="text-sm text-text-muted line-clamp-2 mb-2">
                  {biz.shortDescription}
                </p>
                <p className="text-xs text-text-muted">📍 {biz.address}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* JSON-LD — full ItemList of every business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Waconia Business Directory",
            description: "Local businesses in Waconia, Minnesota",
            numberOfItems: businesses.length,
            itemListElement: businesses.map((biz, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://waconiaminnesota.org/directory/${biz.slug}`,
              name: biz.name,
            })),
          }),
        }}
      />
    </div>
  );
}
