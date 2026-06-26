# SEO + GEO Roadmap

Living progress tracker for waconiaminnesota.org SEO/GEO work.
Started 2026-05-03.

> **Maintaining the site over time?** See **[`QUARTERLY-REFRESH.md`](./QUARTERLY-REFRESH.md)**
> for the runbook and **[`CONTENT-INVENTORY.md`](./CONTENT-INVENTORY.md)** for
> the full content cadence map. Run `npm run staleness` to flag stale guides.

## Status legend
- [ ] = not started
- [~] = in progress
- [x] = done
- [s] = skipped / deferred (with reason)

## Phase 1 — Schema & metadata fixes (foundational)

- [x] 1.1 BreadcrumbList JSON-LD in `Breadcrumb` component
- [x] 1.2 Organization/publisher JSON-LD in root layout
- [x] 1.3 Event schema: `endDate`, ISO datetime, `EventSeries` + `eventSchedule`
- [x] 1.4 Article schema: ISO `dateModified` + `datePublished`, Speakable
- [x] 1.5 Default OG image + per-page OG overrides via `buildMetadata`
- [x] 1.6 `llms.txt` + explicit AI bot allows in `robots.txt`
- [x] 1.7 Fix sitemap event `lastModified`
- [x] 1.8 Favicon (SVG) + `manifest.webmanifest` + theme-color viewport

## Phase 2 — Trust + GEO citation surface

- [x] 2.1 FAQPage schema + visible FAQ on guides + homepage
- [x] 2.2 `/about` page with editorial standards + AboutPage schema
- [x] 2.3 `/contact` page with ContactPage + ContactPoint schema

## Phase 3 — Directory expansion + categories

- [x] 3.1 Six category landing pages with ItemList schema
- [x] 3.2 Removed decorative pagination
- [x] 3.3 Expanded directory from 9 → 26 listings (rounds 3 + 11)

## Phase 4 — Topical authority guides (round 1, 7 guides)

All complete: Coney Island, Things to Do, Regional Park, Boat Rentals,
Ice Fishing, Waconia History, Moving to Waconia.

## Round 5 — Page-level FAQ retrofit + cleanup

- [x] 5.0 Removed dead newsletter UI
- [x] 5.1–5.4 FAQ + FAQPage schema on /events, /hotels, /foreclosures, /directory
- [x] 5.5 Place + BodyOfWater schema for Lake Waconia

## Round 6 — Guides round 2 + glossary

- [x] 6.1 `/guides/waconia-schools`
- [x] 6.2 `/guides/getting-to-waconia`
- [x] 6.3 `/guides/waconia-parks`
- [x] 6.4 `/guides/lake-waconia-depth-map`
- [x] 6.5 `/guides/lake-waconia-vs-lake-minnetonka`
- [x] 6.6 `/glossary` with DefinedTermSet JSON-LD

## Round 7 — Functional + entity-rich schema

- [x] 7.1 `/events.ics` calendar export route
- [x] 7.2 Custom `/not-found` page
- [x] 7.3 HowTo JSON-LD on boat-rentals + ice-fishing
- [x] 7.4 TouristDestination + TouristAttraction on things-to-do
- [x] 7.5 Article keywords + articleSection on top guides

## Round 8 — Seasonal landing pages

- [x] 8.1 `/guides/waconia-summer`
- [x] 8.2 `/guides/waconia-winter`
- [x] 8.3 `/guides/waconia-fall`

## Round 9 — Hub + entity cross-linking

- [x] 9.1 `/best-of-waconia` annual editorial hub
- [x] 9.2 glossaryTerms rail on top guides

## Round 10 — Open Graph generation + content polish

- [x] 10.1 Root `/opengraph-image.tsx` (dynamic ImageResponse, 1200x630)
- [x] 10.2 Per-guide `/guides/[slug]/opengraph-image.tsx` — branded design
      with the guide title, articleSection badge, updated date
- [x] 10.3 Backfilled `keywords` + `articleSection` + `glossaryTerms` on
      every remaining guide. **All 18 guides now ship full schema enrichment.**
- [x] 10.4 `/faqs` aggregated FAQ page — pulls every FAQ across guides +
      homepage extras into one page with FAQPage JSON-LD covering all of them
- [x] 10.5 `/guides` index restructured with topic clustering
      (sectioned by articleSection) + `CollectionPage` + `ItemList` JSON-LD

## Round 11 — More content + transparency

- [x] 11.1 `/guides/waconia-wineries-breweries-tour` — 4-stop day-tour
      content for the Waconia craft beverage cluster
- [x] 11.2 Directory: added Schram Haus Brewery, Lakeside Tavern, and the
      Waconia Public Schools (ISD 110) listing. **26 total listings.**
- [x] 11.3 `/changelog` page — chronological list of site updates
      (transparency + freshness signal)

## Round 12 — Monetization + dining content (GEO/SEO growth)

- [x] 12.0 `docs/CONTENT-STRATEGY.md` — GEO/SEO content + AdSense revenue plan
- [x] 12.1 Deliberate in-content ad placements on the guide template
      (`app/components/InContentAd.tsx` + `app/lib/adSlots.ts`). CLS-safe,
      renders nothing until real slot IDs are added; Auto Ads stays the
      fallback. **First manual ad inventory on the site** (was Auto-Ads-only).
- [x] 12.2 `/guides/best-restaurants-in-waconia` — dining roundup (best
      overall, lakeside, breakfast, craft beer & wine, family), cross-linked
      to 11 directory listings. New `Dining` articleSection.
- [x] 12.3 `/guides/cost-of-living-in-waconia` — category cost breakdown
      (housing, property tax, groceries, utilities, transport, income tax).
- [x] 12.4 `/guides/waconia-neighborhoods` — area-by-area living guide.
- [x] 12.5 `/guides/nickle-dickle-day` — editorial event guide cross-linked
      to the canonical `/events/nickle-dickle-day-2026` listing. New `Events`
      articleSection. **22 guides total.**
- [x] 12.6 Built the **Living in Waconia** cluster: moving ⇄ cost-of-living ⇄
      neighborhoods ⇄ schools now cross-link as a hub-and-spoke set.

## Round 13 — GEO citation page + event guides

- [x] 13.1 `/waconia-facts` — structured facts sheet (population, ZIP, county,
      coordinates, lake stats, history, events) with `City` + `FAQPage` +
      `Speakable` schema. GEO citation magnet; linked in footer + llms.txt.
- [x] 13.2 `/guides/carver-county-fair` — August fair guide, cross-linked to
      `/events/carver-county-fair-2026`.
- [x] 13.3 `/guides/waconia-farmers-market` — Thursday market guide,
      cross-linked to `/events/waconia-farmers-market-2026`. **24 guides total.**
- [x] 13.4 Surfaced both event guides from the summer seasonal rail.

### Next up (from CONTENT-STRATEGY.md)
- [ ] Fill real AdSense slot IDs into `app/lib/adSlots.ts` (user action)
- [ ] `senior-living-in-waconia` / `waconia-wedding-venues` (highest-CPC long tail)
- [ ] Geo expansion: `day-trips-from-minneapolis`, `victoria-mn`, `chaska-mn`
- [ ] Hub pages (Dining, Living in Waconia, Events) + "this weekend" surface

## Deferred (next round)

- [s] Newsletter capture wiring — confirmed deferred
- [s] Outreach / backlink campaigns
- [s] favicon.ico and apple-touch-icon.png — need raster export
- [s] Real `?page=` directory pagination — works until ~50 listings
- [ ] Replace remaining Unsplash hero images with locally-shot WebP
- [ ] Hire/credit a named human author with sameAs (LinkedIn / X)
- [ ] OpenStreetMap → interactive map upgrade (Mapbox or Leaflet)
- [ ] More directory listings (additional restaurants, retail, services)
- [ ] Per-event and per-business OG images
- [ ] Season-specific event filtering on /events

## Current site shape (after rounds 10+11)

- Home + 6 sections (directory, events, guides, hotels, foreclosures)
- Trust pages: about, contact, glossary, best-of, faqs, changelog (6)
- Directory: 26 businesses across 6 category landing pages
- Guides: 18 long-form pieces, organized into 8 topic sections on the
  guides index
- Events: 7 recurring/annual + ICS export
- Custom 404
- OG image generation: root + per-guide
- Total static + dynamic routes: ~74

## Schema coverage (cumulative)

`Organization`, `WebSite`, `BreadcrumbList`, `Article`, `FAQPage`, `Event`,
`EventSeries`, `LocalBusiness`, `ItemList`, `CollectionPage`, `AboutPage`,
`ContactPage`, `ContactPoint`, `Place`, `BodyOfWater`, `DefinedTermSet`,
`DefinedTerm`, `Speakable`, `HowTo`, `HowToStep`, `HowToTool`,
`MonetaryAmount`, `TouristDestination`, `TouristAttraction`.

## Notes on accuracy

The expanded directory uses real Waconia institutions with publicly-verifiable
addresses. Operating hours marked "See website" should be re-verified annually.
Guide content is editorial — figures sourced from MN DNR LakeFinder
(DOW 10-0059-00), Carver County Historical Society, Carver County, and
Destination Waconia where applicable.

Best-of list and changelog refresh cadence: annually for best-of (year stamp
in title and metadata); changelog updated whenever significant changes ship.
