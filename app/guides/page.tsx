import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "../components/Breadcrumb";
import { buildMetadata, SITE_URL } from "../lib/metadata";
import { guides } from "../lib/guides";

export const metadata: Metadata = buildMetadata({
  title: "Waconia Guides — Lake, History, Schools, Real Estate & More",
  description:
    "In-depth local guides to Waconia, Minnesota — Lake Waconia, fishing, history, schools, real estate, parks, seasonal travel, and the best of downtown.",
  path: "/guides",
});

// Group guides by their articleSection for topic clustering on the index.
// Falls back to "Guides" when section is unset.
const SECTION_ORDER = [
  "Lake & Outdoors",
  "Fishing",
  "Boating",
  "Parks & Outdoors",
  "Travel & Things to Do",
  "Seasonal",
  "History",
  "Living in Waconia",
  "Guides",
];

function groupBySection() {
  const grouped: Record<string, typeof guides> = {};
  for (const g of guides) {
    const key = g.articleSection ?? "Guides";
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(g);
  }
  // Sort section keys by SECTION_ORDER, with unknown sections appended.
  const ordered: { section: string; items: typeof guides }[] = [];
  for (const key of SECTION_ORDER) {
    if (grouped[key]) ordered.push({ section: key, items: grouped[key] });
  }
  for (const key of Object.keys(grouped)) {
    if (!SECTION_ORDER.includes(key))
      ordered.push({ section: key, items: grouped[key] });
  }
  return ordered;
}

export default function GuidesIndexPage() {
  const sections = groupBySection();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ label: "Guides" }]} />

      <div className="mt-6 mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
          Waconia Guides
        </h1>
        <p className="text-text-muted mt-3 text-lg max-w-2xl">
          Long-form guides to help you get the most out of Waconia, Minnesota
          — written and maintained by locals. {guides.length} guides across{" "}
          {sections.length} topic areas.
        </p>
      </div>

      {/* Section nav */}
      <nav
        aria-label="Topic sections"
        className="bg-surface rounded-xl border border-border p-4 mb-12"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
          Browse by topic
        </p>
        <div className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <a
              key={s.section}
              href={`#${s.section.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="px-3 py-1.5 text-xs font-medium text-text-muted bg-white hover:text-primary hover:border-primary/30 rounded-full border border-border transition-colors"
            >
              {s.section} · {s.items.length}
            </a>
          ))}
        </div>
      </nav>

      {/* Sections */}
      <div className="space-y-16">
        {sections.map((s) => {
          const id = s.section.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return (
            <section key={s.section} id={id} className="scroll-mt-20">
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="text-2xl font-bold text-text-primary tracking-tight">
                  {s.section}
                </h2>
                <span className="text-sm text-text-muted">
                  {s.items.length} guide{s.items.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {s.items.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guides/${g.slug}`}
                    className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={g.heroImage}
                        alt={g.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors mb-2">
                        {g.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3 flex-1">
                        {g.metaDescription}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-text-muted">
                        <span>Updated {g.updatedDate}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* JSON-LD CollectionPage + ItemList of all guides */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            url: `${SITE_URL}/guides`,
            name: "Waconia Guides",
            description:
              "In-depth local guides to Waconia, Minnesota — written and maintained by locals.",
            isPartOf: { "@id": `${SITE_URL}#website` },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: guides.length,
              itemListElement: guides.map((g, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${SITE_URL}/guides/${g.slug}`,
                name: g.title,
              })),
            },
          }),
        }}
      />
    </div>
  );
}
