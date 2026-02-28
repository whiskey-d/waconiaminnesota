import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "../components/Breadcrumb";
import { businesses } from "../lib/businesses";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Explore the Best of Waconia — Directory",
  description:
    "From lakeside dining to charming boutique shops, discover the heart of Minnesota's hidden gem. Browse Waconia's best businesses.",
  path: "/directory",
});

const categories = [
  { label: "All Categories", value: "all" },
  { label: "🍽 Dining", value: "DINING" },
  { label: "🍸 Bars", value: "BARS" },
  { label: "🛍 Retail", value: "RETAIL" },
  { label: "🌿 Wellness", value: "WELLNESS" },
  { label: "⚙ Filters", value: "filters" },
];

const categoryColors: Record<string, string> = {
  DINING: "bg-primary",
  BARS: "bg-purple-600",
  RETAIL: "bg-amber-500",
  "LOCAL SERVICES": "bg-gray-500",
};

export default function DirectoryPage() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left: Listings */}
        <div className="flex-1 lg:w-3/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
            <Breadcrumb items={[{ label: "Directory" }]} />

            <div className="flex items-center gap-3 mt-4 text-sm text-text-muted">
              <span className="inline-flex items-center gap-1">
                📍 Waconia, MN
              </span>
              <span className="inline-flex items-center gap-1">
                📅 {today}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mt-4 mb-2">
              Explore the Best of Waconia
            </h1>
            <p className="text-text-muted leading-relaxed mb-8">
              From lakeside dining to charming boutique shops, discover the
              heart of Minnesota&apos;s hidden gem.
            </p>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {categories.map((cat, i) => (
                <button
                  key={cat.value}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    i === 0
                      ? "bg-primary text-white"
                      : "bg-surface text-text-muted hover:bg-border"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
              <div className="ml-auto">
                <button className="px-4 py-2 text-sm font-medium text-text-muted bg-surface rounded-full hover:bg-border transition-colors">
                  Sort ↕
                </button>
              </div>
            </div>

            {/* Business Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {businesses.slice(0, 8).map((biz) => (
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
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span
                      className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        categoryColors[biz.category] ?? "bg-gray-500"
                      }`}
                    >
                      {biz.category}
                    </span>
                    <button
                      className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      aria-label={`Save ${biz.name}`}
                    >
                      <svg
                        className="w-4 h-4 text-text-muted"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
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
                    <p className="text-xs text-text-muted flex items-center gap-1">
                      📍 {biz.address}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 pb-12">
              <button className="w-10 h-10 rounded-full border border-border text-text-muted hover:bg-surface transition-colors text-sm">
                &larr;
              </button>
              <button className="w-10 h-10 rounded-full bg-primary text-white text-sm font-medium">
                1
              </button>
              <button className="w-10 h-10 rounded-full border border-border text-text-muted hover:bg-surface transition-colors text-sm">
                2
              </button>
              <button className="w-10 h-10 rounded-full border border-border text-text-muted hover:bg-surface transition-colors text-sm">
                3
              </button>
              <span className="text-text-muted text-sm">...</span>
              <button className="w-10 h-10 rounded-full border border-border text-text-muted hover:bg-surface transition-colors text-sm">
                &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Right: Map */}
        <div className="hidden lg:block lg:w-2/5 sticky top-16 h-[calc(100vh-4rem)]">
          <div className="h-full bg-surface relative">
            <iframe
              title="Map of Waconia, Minnesota"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-93.83%2C44.83%2C-93.74%2C44.87&layer=mapnik&marker=44.8522%2C-93.7872"
              className="w-full h-full border-0"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg px-4 py-2 text-sm">
              <p className="font-medium text-text-primary">
                Showing {businesses.slice(0, 8).length} results in Waconia
              </p>
              <button className="text-primary text-xs font-medium hover:underline">
                Search here
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Waconia Business Directory",
            description:
              "Local businesses in Waconia, Minnesota",
            itemListElement: businesses.slice(0, 8).map((biz, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "LocalBusiness",
                name: biz.name,
                address: biz.address,
                telephone: biz.phone || undefined,
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: biz.rating,
                  ratingCount: parseInt(biz.reviewCount.replace(/[^\d]/g, ""), 10) || 100,
                },
              },
            })),
          }),
        }}
      />
    </>
  );
}
