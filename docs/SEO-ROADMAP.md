# SEO + GEO Roadmap

Living progress tracker for waconiaminnesota.org SEO/GEO work.
Started 2026-05-03.

## Status legend
- [ ] = not started
- [~] = in progress
- [x] = done
- [s] = skipped / deferred (with reason)

## Phase 1 — Schema & metadata fixes (foundational)

- [x] 1.1 BreadcrumbList JSON-LD in `Breadcrumb` component
- [x] 1.2 Organization/publisher JSON-LD in root layout
- [x] 1.3 Event schema: `endDate`, ISO datetime, `EventSeries` + `eventSchedule` for recurring
- [x] 1.4 Article schema: ISO `dateModified` + `datePublished`, author with sameAs, `Speakable`
- [x] 1.5 Default OG image + per-page OG overrides via `buildMetadata`
- [x] 1.6 `llms.txt` + explicit AI bot allows in `robots.txt`
- [x] 1.7 Fix sitemap event `lastModified` (deploy timestamp, not event date)
- [x] 1.8 Favicon (SVG) + `manifest.webmanifest` + theme-color viewport

## Phase 2 — Trust + GEO citation surface

- [x] 2.1 FAQPage schema + visible FAQ on guides + homepage
- [x] 2.2 `/about` page (editorial standards, author block, AboutPage schema)
- [x] 2.3 `/contact` page (tiered intents, ContactPage + ContactPoint schema)

## Phase 3 — Directory expansion + categories

- [x] 3.1 Category landing pages (6 categories with ItemList schema)
- [x] 3.2 Removed decorative pagination
- [x] 3.3 Expanded directory from 9 → 23 listings

## Phase 4 — Topical authority guides (round 1, 7 guides)

All complete: Coney Island, Things to Do, Regional Park, Boat Rentals, Ice
Fishing, Waconia History, Moving to Waconia.

## Round 5 — Page-level FAQ retrofit + cleanup

- [x] 5.0 Removed dead newsletter UI
- [x] 5.1–5.4 FAQ + FAQPage schema on /events, /hotels, /foreclosures, /directory
- [x] 5.5 `Place` + `BodyOfWater` schema for Lake Waconia

## Round 6 — Topical authority guides (round 2, 5 guides + glossary)

- [x] 6.1 `/guides/waconia-schools`
- [x] 6.2 `/guides/getting-to-waconia`
- [x] 6.3 `/guides/waconia-parks`
- [x] 6.4 `/guides/lake-waconia-depth-map`
- [x] 6.5 `/guides/lake-waconia-vs-lake-minnetonka`
- [x] 6.6 `/glossary` with DefinedTermSet JSON-LD

## Round 7 — Functional + entity-rich schema

- [x] 7.1 `/events.ics` calendar export route (force-static, RFC 5545
      compliant with VTIMEZONE references and recurring RRULEs); "Add to
      Calendar" CTA on the events index
- [x] 7.2 Custom `/not-found` page with branded 404 + popular-link redirects
      and `robots: noindex,nofollow`
- [x] 7.3 `HowTo` JSON-LD on the boat-rentals and ice-fishing guides — six-
      and seven-step structured procedures with tools, totalTime, and
      estimatedCost
- [x] 7.4 `TouristDestination` + nested `TouristAttraction` schema on the
      things-to-do guide
- [x] 7.5 `keywords` + `articleSection` enriched on the 6 highest-value guides

## Round 8 — Seasonal landing pages

- [x] 8.1 `/guides/waconia-summer`
- [x] 8.2 `/guides/waconia-winter`
- [x] 8.3 `/guides/waconia-fall`

## Round 9 — Hub + entity cross-linking

- [x] 9.1 `/best-of-waconia` annual editorial hub (12 picks, ItemList JSON-LD,
      year-stamped 2026, refreshable annually) — promoted in footer
- [x] 9.2 `glossaryTerms` field on Guide + sidebar rail rendering anchor
      links to `/glossary#term`. Populated on the 6 highest-value guides
      (lake-waconia, lake-waconia-fishing, coney-island, things-to-do,
      moving-to-waconia, waconia-history)

## Deferred (next round)

- [s] Newsletter capture wiring — confirmed deferred
- [s] Outreach / backlink campaigns
- [s] favicon.ico and apple-touch-icon.png — need raster export from
      favicon.svg
- [s] Real `?page=` directory pagination — single-page works until ~50
- [ ] Replace remaining Unsplash hero images with locally-shot WebP
- [ ] Hire/credit a named human author with `sameAs` (LinkedIn / X) — bigger
      E-E-A-T lift than the generic "Editorial" byline
- [ ] OpenStreetMap → interactive map upgrade (Mapbox or Leaflet)
- [ ] Per-guide dynamic OG images via Next's `opengraph-image.tsx` route
      (current OG is the hero image — fine but generic)
- [ ] Expand `keywords` + `articleSection` to remaining 8 guides
- [ ] Glossary rail on remaining guides (currently 6/17 guides have it)
- [ ] Restaurants vs breweries comparison guide (parallel to lake comparison)
- [ ] More directory listings (Schram Haus Brewery, additional restaurants
      and services as inventory grows)

## Current site shape (after rounds 7+8+9)

- Home + 6 sections (directory, events, guides, hotels, foreclosures)
- Trust pages: about, contact, glossary, best-of-waconia (4)
- Directory: 23 businesses across 6 category landing pages
- Guides: 17 long-form pieces
- Events: 7 recurring/annual + ICS export
- Custom 404
- Total static routes: ~70+

## Schema coverage (cumulative)

`Organization`, `WebSite`, `BreadcrumbList`, `Article`, `FAQPage`, `Event`,
`EventSeries`, `LocalBusiness`, `ItemList`, `AboutPage`, `ContactPage`,
`ContactPoint`, `Place`, `BodyOfWater`, `DefinedTermSet`, `DefinedTerm`,
`Speakable`, `HowTo`, `HowToStep`, `HowToTool`, `MonetaryAmount`,
`TouristDestination`, `TouristAttraction`.

## Notes on accuracy

The expanded directory uses real Waconia institutions with publicly-verifiable
addresses. Operating hours marked "See website" should be re-verified annually
against each business's official source. Guide content is editorial — figures
sourced from MN DNR LakeFinder (DOW 10-0059-00), Carver County Historical
Society, Carver County, and Destination Waconia where applicable.

Lake Waconia name etymology: "spring of water" / "fountain" from Dakota.
Best-of list refresh cadence: annually (year stamp in title and URL meta).
