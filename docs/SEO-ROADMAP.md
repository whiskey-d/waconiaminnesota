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

- [x] 3.1 Category landing pages: `/directory/restaurants`, `/breweries-wineries`, `/things-to-do`, `/services`, `/shopping`, `/lodging`
- [x] 3.2 Removed decorative pagination; all listings on a single page until count exceeds ~50
- [x] 3.3 Expanded directory from 9 → 23 listings

### Directory additions
Schram Vineyards Winery & Brewery, Sovereign Estate Wine, J. Carver Distillery,
Lola's Lakehouse Eatery, Mocha Monkey, Mucho Mexican, Island View Golf Club,
Carver County Historical Society, Waconia Public Library, Ridgeview Medical
Center, Coborn's, Westside Liquor, Lake Waconia Marine, Bayview Event Center.

## Phase 4 — New guide content (topical authority)

- [x] 4.1 `/guides/coney-island-lake-waconia` — historic island, "Coney Island of the West"
- [x] 4.2 `/guides/things-to-do-waconia` — broad commercial query
- [x] 4.3 `/guides/lake-waconia-regional-park` — beach + park
- [x] 4.4 `/guides/lake-waconia-boat-rentals` — high commercial intent
- [x] 4.5 `/guides/lake-waconia-ice-fishing` — seasonal split from general fishing
- [x] 4.6 `/guides/waconia-history` — Dakota etymology, settlement, Coney Island, modern
- [x] 4.7 `/guides/moving-to-waconia` — schools, commute, neighborhoods

## Deferred (next round)

- [s] Newsletter capture wiring — needs Mailchimp/Buttondown account decision; UI placeholder remains until provider is chosen
- [s] Outreach / backlink campaigns (per user request)
- [s] favicon.ico and apple-touch-icon.png — need raster export from favicon.svg (180x180 PNG, 32x32/16x16 ICO); SVG works in modern browsers
- [s] Real `?page=` directory pagination — single-page listings work until ~50 businesses
- [ ] Additional guide queue: `/guides/lake-waconia-depth-map`, `/guides/lake-waconia-swimming-beaches` (covered partly by Regional Park guide), `/guides/waconia-parks`, `/guides/waconia-schools`, `/guides/getting-to-waconia`
- [ ] Comparison content (Lake Waconia vs Lake Minnetonka)
- [ ] Glossary / local terms page
- [ ] Replace remaining Unsplash hero images on guides with locally-shot WebP

## Current site shape

- Home + 6 sections (directory, events, guides, hotels, foreclosures) + about/contact
- Directory: 23 businesses across 6 categories
- Guides: 9 long-form pieces (2 original + 7 new)
- Events: 7 recurring/annual
- Total static routes: ~50+

## Notes on accuracy

The expanded directory uses real Waconia institutions with publicly-verifiable
addresses. Operating hours marked "See website" should be re-verified annually
against each business's official source. Guide content is editorial — figures
sourced from MN DNR LakeFinder (DOW 10-0059-00), Carver County Historical
Society, Carver County, and Destination Waconia where applicable.

Lake Waconia name etymology: "spring of water" / "fountain" from Dakota — see
the Waconia History guide and the Carver County Historical Society for
authoritative sourcing.
