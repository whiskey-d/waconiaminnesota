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
- [x] 3.2 Removed decorative pagination; single page until count exceeds ~50
- [x] 3.3 Expanded directory from 9 → 23 listings

## Phase 4 — Topical authority guides (round 1)

- [x] 4.1 `/guides/coney-island-lake-waconia`
- [x] 4.2 `/guides/things-to-do-waconia`
- [x] 4.3 `/guides/lake-waconia-regional-park`
- [x] 4.4 `/guides/lake-waconia-boat-rentals`
- [x] 4.5 `/guides/lake-waconia-ice-fishing`
- [x] 4.6 `/guides/waconia-history`
- [x] 4.7 `/guides/moving-to-waconia`

## Round 5 — Page-level FAQ retrofit + cleanup

- [x] 5.0 Removed non-functional newsletter UI (footer + guide sidebar);
      replaced with directory/correction CTAs
- [x] 5.1 FAQ + FAQPage schema on `/events`
- [x] 5.2 FAQ + FAQPage schema on `/hotels`
- [x] 5.3 FAQ + FAQPage schema on `/foreclosures`
- [x] 5.4 FAQ + FAQPage schema on `/directory`
- [x] 5.5 `Place` + `BodyOfWater` schema for Lake Waconia (with `sameAs` to
      DNR LakeFinder + Wikipedia) on the canonical lake guide

## Round 6 — Topical authority guides (round 2) + glossary

- [x] 6.1 `/guides/waconia-schools` — ISD 110 deep dive
- [x] 6.2 `/guides/getting-to-waconia` — drive routes, MSP airport, parking
- [x] 6.3 `/guides/waconia-parks` — full city + county park inventory
- [x] 6.4 `/guides/lake-waconia-depth-map` — bathymetry, DOW data, structure
- [x] 6.5 `/guides/lake-waconia-vs-lake-minnetonka` — comparison, citation magnet
- [x] 6.6 `/glossary` — local terms (Waconia, Coney Island, ISD 110, AIS,
      DOW, etc.) with `DefinedTermSet` JSON-LD

## Deferred (next round)

- [s] Newsletter capture wiring — confirmed deferred; not implementing yet
- [s] Outreach / backlink campaigns (per user request)
- [s] favicon.ico and apple-touch-icon.png — need raster export from
      favicon.svg (180x180 PNG, 32x32/16x16 ICO)
- [s] Real `?page=` directory pagination — single-page works until ~50 businesses
- [ ] Replace remaining Unsplash hero images with locally-shot WebP
- [ ] Hire/credit a named human author with sameAs (LinkedIn / X) — bigger
      E-E-A-T lift than the generic "Editorial" byline
- [ ] Restaurants vs breweries comparison guide (parallel to lake comparison)
- [ ] Seasonal landing pages: `/guides/waconia-summer`, `/guides/waconia-winter`,
      `/guides/waconia-fall` — each with seasonal events + activities
- [ ] OpenStreetMap → interactive map upgrade (Mapbox or Leaflet) for the
      directory map
- [ ] `Recipe`/`HowTo` schema where applicable (ice fishing how-to could ship)
- [ ] Add ICS calendar export for events page

## Current site shape (after rounds 5+6)

- Home + 6 sections (directory, events, guides, hotels, foreclosures)
- Trust pages: about, contact, glossary (3)
- Directory: 23 businesses across 6 category landing pages
- Guides: 14 long-form pieces (2 original + 7 round 1 + 5 round 2)
- Events: 7 recurring/annual
- Total static routes: ~63

## Schema coverage

Every public page now ships at least one of:
`Organization`, `WebSite`, `BreadcrumbList`, `Article`, `FAQPage`, `Event`,
`EventSeries`, `LocalBusiness`, `ItemList`, `AboutPage`, `ContactPage`,
`ContactPoint`, `Place`, `BodyOfWater`, `DefinedTermSet`, `DefinedTerm`,
`Speakable`.

## Notes on accuracy

The expanded directory uses real Waconia institutions with publicly-verifiable
addresses. Operating hours marked "See website" should be re-verified annually
against each business's official source. Guide content is editorial — figures
sourced from MN DNR LakeFinder (DOW 10-0059-00), Carver County Historical
Society, Carver County, and Destination Waconia where applicable.

Lake Waconia name etymology: "spring of water" / "fountain" from Dakota — see
the Waconia History guide and the Carver County Historical Society for
authoritative sourcing.
