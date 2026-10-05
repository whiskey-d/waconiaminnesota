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
      "Craft beer and barbecue on West Main Street downtown, with 38 taps. Closed Mondays.",
    href: "/directory/iron-tap",
    cta: "View listing",
    image: "/images/dining-iron-tap.webp",
  },
  {
    category: "Best Breakfast",
    title: "Pangea Cafe",
    detail:
      "Breakfast and lunch on West 1st Street downtown, with breakfast served all day. Reservations are encouraged on weekends.",
    href: "/directory/pangea-cafe",
  },
  {
    category: "Best Craft Beverage Stop",
    title: "Schram Vineyards Winery & Brewery",
    detail:
      "A 32-acre winery, brewery and restaurant west of town with 10 acres of its own grapes. House-brewed beer is poured at Bonfire & Barrel, and there is live music nearly every weekend.",
    href: "/directory/schram-vineyards",
    image: "/images/brewing-waconia.webp",
  },
  {
    category: "Best Winery",
    title: "Sovereign Estate Wine",
    detail:
      "A winery on the north shore of Lake Waconia with a patio over the water and cold-climate wines.",
    href: "/directory/sovereign-estate-wine",
  },
  {
    category: "Best Lake Experience",
    title: "Lake Waconia Regional Park Beach",
    detail:
      "The county park's sandy swim beach, open Memorial Day to Labor Day. There are no lifeguards, so swim at your own risk. Coney Island is in view from the shore.",
    href: "/guides/lake-waconia-regional-park",
    cta: "Read the guide",
  },
  {
    category: "Best Hidden Gem",
    title: "Coney Island of Lake Waconia",
    detail:
      "A 34-acre island that held a resort from 1889 to the late 1930s, now part of the county park. Reach it by boat; there is a dock, picnic tables, grills and a half-mile trail.",
    href: "/guides/coney-island-lake-waconia",
    cta: "Read the guide",
  },
  {
    category: "Best Family Outing",
    title: "Carver County Fair",
    detail:
      "Five days every August at the fairgrounds on West 3rd Street. Demolition derby, tractor pull, midway and livestock. The 2027 fair runs August 11 to 15.",
    href: "/events/carver-county-fair-2026",
    cta: "Event details",
  },
  {
    category: "Best Free Event",
    title: "Nickle Dickle Day",
    detail:
      "The Chamber's downtown festival, held since 1961 on the second Saturday after Labor Day, 8am to 5pm. Free. The 2027 date is September 18.",
    href: "/events/nickle-dickle-day-2026",
    cta: "Event details",
  },
  {
    category: "Best Coffee",
    title: "Mocha Monkey",
    detail:
      "A downtown coffee shop on Olive Street since 2006 that roasts its own beans, with a Sunday bluegrass jam.",
    href: "/directory/mocha-monkey",
  },
  {
    category: "Best Movie Night",
    title: "Emagine Waconia",
    detail:
      "Downtown on West 1st Street. Leather power recliners in every auditorium, reserved seating and a theater bar. Rewards members get $5 tickets on Tuesdays.",
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
