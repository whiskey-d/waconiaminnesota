import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "../components/Breadcrumb";
import type { Business, Category } from "../lib/businesses";
import { SITE_URL } from "../lib/metadata";

interface Props {
  category: Category;
  businesses: Business[];
}

export function CategoryPage({ category, businesses: items }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb
        items={[
          { label: "Directory", href: "/directory" },
          { label: category.label },
        ]}
      />

      <div className="mt-6 mb-10">
        <span className="text-3xl mb-3 block">{category.emoji}</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-3">
          {category.label} in Waconia, MN
        </h1>
        <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
          {category.longDescription}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="bg-surface rounded-2xl border border-border p-10 text-center">
          <p className="text-text-muted">
            No listings yet in this category. Know a business that should be
            here?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Tell us
            </Link>
            .
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {items.map((biz) => (
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
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {biz.categoryLabel}
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
      )}

      <div className="pt-6 border-t border-border">
        <p className="text-sm text-text-muted mb-3">
          Browse other categories:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/directory"
            className="px-3 py-1.5 text-xs font-medium text-text-muted bg-surface hover:bg-border rounded-full border border-border"
          >
            All Listings
          </Link>
          {[
            { slug: "restaurants", label: "🍽 Restaurants" },
            { slug: "breweries-wineries", label: "🍺 Breweries & Wineries" },
            { slug: "things-to-do", label: "🎯 Things to Do" },
            { slug: "services", label: "🛠 Services" },
            { slug: "shopping", label: "🛍 Shopping" },
            { slug: "lodging", label: "🛏 Lodging" },
          ]
            .filter((c) => c.slug !== category.slug)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/directory/${c.slug}`}
                className="px-3 py-1.5 text-xs font-medium text-text-muted bg-surface hover:bg-border rounded-full border border-border"
              >
                {c.label}
              </Link>
            ))}
        </div>
      </div>

      {/* JSON-LD ItemList for the category */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${category.label} in Waconia, MN`,
            description: category.shortDescription,
            url: `${SITE_URL}/directory/${category.slug}`,
            numberOfItems: items.length,
            itemListElement: items.map((biz, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE_URL}/directory/${biz.slug}`,
              name: biz.name,
            })),
          }),
        }}
      />
    </div>
  );
}
