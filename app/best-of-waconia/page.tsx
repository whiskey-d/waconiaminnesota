import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "../components/Breadcrumb";
import { buildMetadata, SITE_URL } from "../lib/metadata";

const YEAR = 2026;

export const metadata: Metadata = buildMetadata({
  title: `Best of Waconia ${YEAR} — Editor's Picks`,
  description: `WaconiaGuide's annual best-of list — the best restaurants, breweries, lake experiences, events, and family activities in Waconia, Minnesota for ${YEAR}.`,
  path: "/best-of-waconia",
});

interface Pick {
  category: string;
  title: string;
  detail: string;
  href: string;
  cta?: string;
  image?: string;
}

const PICKS: Pick[] = [
  {
    category: "Best Restaurant",
    title: "Iron Tap",
    detail:
      "Father Bob Burger, craft cocktails, the lively downtown corner that the locals send every visitor to. The 2026 default for dinner.",
    href: "/directory/iron-tap",
    cta: "View listing",
    image: "/images/dining-iron-tap.webp",
  },
  {
    category: "Best Breakfast",
    title: "Egg-Cetera Cafe",
    detail:
      "All-day breakfast, rotating omelet specials, weekend waits that prove the point. The only correct answer when someone asks where to eat eggs in Waconia.",
    href: "/directory/egg-cetera-cafe",
  },
  {
    category: "Best Brewery",
    title: "Waconia Brewing Co.",
    detail:
      "Family-owned since 2014, the cornerstone of downtown craft beer. Trivia Wednesdays, live music Fridays, dog-friendly patio.",
    href: "/directory/waconia-brewing-company",
    image: "/images/brewing-waconia.webp",
  },
  {
    category: "Best Winery",
    title: "Sovereign Estate Wine",
    detail:
      "Lakefront tiered patio, cold-climate estate wines, west-facing for sunsets. The single most photogenic outdoor seat in Waconia.",
    href: "/directory/sovereign-estate-wine",
  },
  {
    category: "Best Lake Experience",
    title: "Lake Waconia Regional Park Beach",
    detail:
      "Free, sandy entry, lifeguards in season, ample free parking, Coney Island in view from the water. The most-used outdoor space in Waconia.",
    href: "/guides/lake-waconia-regional-park",
    cta: "Read the guide",
  },
  {
    category: "Best Hidden Gem",
    title: "Coney Island of Lake Waconia",
    detail:
      "31-acre wooded island, foundations of a Gilded-Age resort, accessible only by boat. Bring a kayak and a sense of history.",
    href: "/guides/coney-island-lake-waconia",
    cta: "Read the guide",
  },
  {
    category: "Best Family Outing",
    title: "Carver County Fair",
    detail:
      "Five days every August. Demolition derby, midway, livestock, live music. Plan multiple visits — one day is not enough.",
    href: "/events/carver-county-fair-2026",
    cta: "Event details",
  },
  {
    category: "Best Free Event",
    title: "Nickle Dickle Day",
    detail:
      "The flagship community festival every September. Free, all-day, downtown, with the Friday-night street dance kicking it off.",
    href: "/events/nickle-dickle-day-2026",
    cta: "Event details",
  },
  {
    category: "Best Cocktail Room",
    title: "J. Carver Distillery",
    detail:
      "Small-batch craft spirits, weekend distillery tours, a serious old fashioned. The grown-up alternative to a brewery night.",
    href: "/directory/j-carver-distillery",
  },
  {
    category: "Best Coffee",
    title: "Mocha Monkey",
    detail:
      "Local coffeehouse, fresh pastries, reliable Wi-Fi, sidewalk seating. The morning anchor of downtown.",
    href: "/directory/mocha-monkey",
  },
  {
    category: "Best Movie Night",
    title: "Emagine Waconia",
    detail:
      "Reclining leather seats, EMAX large-format screen, food and drink to your seat. Tuesdays are discounted.",
    href: "/directory/emagine-waconia",
  },
  {
    category: "Best Reason to Move Here",
    title: "ISD 110 + the lake",
    detail:
      "Strong school district, 3,080-acre lake, walkable downtown, 45 minutes to Minneapolis. The combination is the pitch.",
    href: "/guides/moving-to-waconia",
    cta: "Read the guide",
  },
];

export default function BestOfPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ label: `Best of Waconia ${YEAR}` }]} />

      <div className="mt-6 mb-10">
        <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          {YEAR} Editor&apos;s Picks
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
          Best of Waconia {YEAR}
        </h1>
        <p className="text-text-muted leading-relaxed text-lg max-w-2xl">
          The WaconiaGuide team&apos;s annual list of the best of Waconia,
          Minnesota — restaurants, breweries, lake experiences, events,
          family outings, and the best reasons the town keeps growing.
          Editorial — no commission, no pay-to-play.
        </p>
      </div>

      <div className="space-y-6">
        {PICKS.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="group block bg-white rounded-2xl border border-border hover:border-primary/40 hover:shadow-md transition-all overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row">
              {p.image && (
                <div className="relative w-full sm:w-56 shrink-0 aspect-[4/3] sm:aspect-auto sm:h-auto min-h-[160px]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 640px) 14rem, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="flex-1 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  {p.category}
                </p>
                <h2 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors mb-2">
                  {p.title}
                </h2>
                <p className="text-text-muted leading-relaxed text-sm mb-3">
                  {p.detail}
                </p>
                <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                  {p.cta ?? "View listing"}{" "}
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-text-muted">
          Disagree with a pick? Have a local favorite we&apos;re missing?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Tell us
          </Link>{" "}
          — the best-of list is updated annually.
        </p>
      </div>

      {/* JSON-LD ItemList — annual editorial best-of with publisher reference */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `Best of Waconia ${YEAR}`,
            description: `WaconiaGuide's annual best-of list for ${YEAR}.`,
            url: `${SITE_URL}/best-of-waconia`,
            numberOfItems: PICKS.length,
            itemListOrder: "https://schema.org/ItemListOrderAscending",
            itemListElement: PICKS.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `${p.category}: ${p.title}`,
              url: p.href.startsWith("http") ? p.href : `${SITE_URL}${p.href}`,
            })),
          }),
        }}
      />
    </div>
  );
}
