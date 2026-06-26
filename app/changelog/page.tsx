import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../components/Breadcrumb";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "WaconiaGuide Changelog — What's New & Updated",
  description:
    "Recent updates to WaconiaGuide — new guides, directory expansions, structured-data improvements, and editorial corrections. Updated as the site evolves.",
  path: "/changelog",
});

interface ChangelogEntry {
  date: string; // ISO YYYY-MM-DD
  highlights: string[];
}

const ENTRIES: ChangelogEntry[] = [
  {
    date: "2026-06-25",
    highlights: [
      "Added /waconia-facts — a structured, citation-ready facts sheet (population, ZIP, county, coordinates, Lake Waconia stats, history, events) with City + FAQPage + Speakable schema. Built as a GEO citation magnet for AI engines.",
      "Added /guides/carver-county-fair — guide to the August fair (dates, what to see, tips), cross-linked to the event listing.",
      "Added /guides/waconia-farmers-market — Thursday-evening market guide (June–September), cross-linked to the event listing.",
      "Linked Waconia Facts in the footer and llms.txt; surfaced the new event guides from the summer seasonal rail. 24 guides total.",
    ],
  },
  {
    date: "2026-06-24",
    highlights: [
      "Added /guides/best-restaurants-in-waconia — a local's dining roundup (best overall, lakeside, breakfast, craft beer & wine, family) cross-linked to 11 directory listings.",
      "Added /guides/cost-of-living-in-waconia — category breakdown of housing, property taxes, groceries, utilities, transportation, and income tax.",
      "Added /guides/waconia-neighborhoods — area-by-area guide to downtown, lakefront, north-side, and rural-fringe living.",
      "Added /guides/nickle-dickle-day — editorial guide to Waconia's September street festival, cross-linked to the event listing.",
      "New 'Living in Waconia' cluster (moving + cost-of-living + neighborhoods + schools) and a new 'Events' guide section. 22 guides total.",
      "Added deliberate, CLS-safe in-content ad placements on the guide template (configurable via app/lib/adSlots.ts; Auto Ads remains the fallback).",
      "Published docs/CONTENT-STRATEGY.md — GEO/SEO content & AdSense monetization roadmap.",
    ],
  },
  {
    date: "2026-05-03",
    highlights: [
      "Launched /best-of-waconia annual editorial hub (12 picks, year-stamped 2026).",
      "Added /faqs aggregated FAQ page pulling every question across the site.",
      "Added /changelog (this page).",
      "Added /guides/waconia-wineries-breweries-tour day-tour guide.",
      "Added /guides/waconia-summer, /guides/waconia-winter, /guides/waconia-fall seasonal landing pages.",
      "Added 5 more topical guides — Waconia Schools, Getting to Waconia, Waconia Parks, Lake Waconia Depth Map, Lake Waconia vs Lake Minnetonka.",
      "Added 7 long-form guides — Coney Island, Things to Do, Regional Park, Boat Rentals, Ice Fishing, Waconia History, Moving to Waconia.",
      "Added /glossary with 15+ defined local terms (Waconia, Coney Island, ISD 110, AIS, DOW number, etc.).",
      "Added /about and /contact pages with editorial standards, author block, and tiered contact intents.",
      "Expanded directory from 9 to 26 listings (added Schram Vineyards, Sovereign Estate Wine, J. Carver Distillery, Lola's Lakehouse, Mocha Monkey, Mucho Mexican, Island View Golf Club, Carver County Historical Society, Waconia Public Library, Ridgeview Medical Center, Coborn's, Westside Liquor, Lake Waconia Marine, Bayview Event Center, Schram Haus Brewery, Lakeside Tavern, Waconia Public Schools).",
      "Added 6 directory category landing pages: Restaurants, Breweries & Wineries, Things to Do, Services, Shopping, Lodging.",
      "Added FAQ sections + FAQPage JSON-LD on /events, /hotels, /foreclosures, /directory, every guide, and the homepage.",
      "Added per-page Open Graph image generation via opengraph-image.tsx (root + per-guide).",
      "Added /events.ics calendar export (RFC 5545 with RRULE for recurring events).",
      "Added custom 404 page with branded popular-link grid.",
      "Schema upgrades: Organization, BreadcrumbList, Article (ISO dates + Speakable + keywords + articleSection), Event with EventSeries + eventSchedule, Place + BodyOfWater for Lake Waconia, HowTo for procedural guides, TouristDestination for things-to-do, DefinedTermSet for glossary.",
      "Added llms.txt and explicit AI bot allows in robots.txt (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, etc.).",
      "Removed dead newsletter UI from footer and guide sidebars; replaced with directory and correction CTAs.",
      "Reorganized /guides index with topic clustering and CollectionPage JSON-LD.",
      "Added glossary cross-link rail to high-traffic guides.",
      "Added SVG favicon + manifest.webmanifest + theme-color viewport.",
    ],
  },
  {
    date: "2026-04-16",
    highlights: [
      "Initial site launch (homepage, directory, events, guides, hotels, foreclosures).",
      "Google Analytics 4 + AdSense integration.",
      "Added 7 Waconia events with Event JSON-LD.",
      "Added 9 initial directory listings.",
      "Added 2 initial Lake Waconia long-form guides (general + fishing).",
    ],
  },
];

function formatDate(iso: string): string {
  const d = new Date(iso + "T12:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function ChangelogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ label: "Changelog" }]} />

      <div className="mt-6 mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
          Changelog
        </h1>
        <p className="text-text-muted leading-relaxed text-lg max-w-2xl">
          What&apos;s new and updated on WaconiaGuide. We update this page when
          we ship new guides, expand the directory, or improve the way the
          site works.{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Spotted something off?
          </Link>
        </p>
      </div>

      <div className="space-y-12">
        {ENTRIES.map((entry) => (
          <section key={entry.date} className="border-l-2 border-primary pl-6">
            <time
              dateTime={entry.date}
              className="block text-sm font-bold uppercase tracking-wider text-primary mb-3"
            >
              {formatDate(entry.date)}
            </time>
            <ul className="space-y-2.5">
              {entry.highlights.map((h) => (
                <li
                  key={h}
                  className="text-text-muted leading-relaxed text-sm flex items-start gap-3"
                >
                  <svg
                    className="w-4 h-4 text-primary mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-border text-sm text-text-muted">
        <p>
          For the underlying code-level history, our SEO/GEO progress is
          tracked in the repository&apos;s{" "}
          <code className="text-xs bg-surface px-2 py-0.5 rounded">
            docs/SEO-ROADMAP.md
          </code>
          .
        </p>
      </div>
    </div>
  );
}
