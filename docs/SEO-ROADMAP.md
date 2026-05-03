# SEO + GEO Roadmap

Living progress tracker for waconiaminnesota.org SEO/GEO work.
Started 2026-05-03.

## Status legend
- [ ] = not started
- [~] = in progress
- [x] = done
- [s] = skipped / deferred (with reason)

## Phase 1 — Schema & metadata fixes (foundational)

- [ ] 1.1 BreadcrumbList JSON-LD in `Breadcrumb` component
- [ ] 1.2 Organization/publisher JSON-LD in root layout
- [ ] 1.3 Event schema: `endDate`, ISO datetime, `EventSeries` for recurring
- [ ] 1.4 Article schema: ISO `dateModified` + `datePublished`, Person author
- [ ] 1.5 Default OG image + per-page OG overrides
- [ ] 1.6 `llms.txt` + explicit AI bot allows in `robots.txt`
- [ ] 1.7 Fix sitemap event `lastModified` (use build/edit time, not event date)
- [ ] 1.8 Favicon set + `manifest.json`

## Phase 2 — Trust + GEO citation surface

- [ ] 2.1 FAQPage schema + visible FAQ on guides + homepage
- [ ] 2.2 `/about` page with author bios + sameAs
- [ ] 2.3 `/contact` page

## Phase 3 — Directory expansion + categories

- [ ] 3.1 Category landing pages: `/directory/restaurants`, `/breweries`, `/things-to-do`, `/services`, `/lodging`
- [ ] 3.2 Real directory pagination (replace decorative pagination)
- [ ] 3.3 Expand directory to ~25-30 high-value local listings

## Phase 4 — New guide content (topical authority)

- [ ] 4.1 `/guides/coney-island-lake-waconia` — historic island, "Coney Island of the West"
- [ ] 4.2 `/guides/things-to-do-waconia` — broad commercial query
- [ ] 4.3 `/guides/lake-waconia-regional-park` — beach + park
- [ ] 4.4 `/guides/lake-waconia-boat-rentals` — high commercial intent
- [ ] 4.5 `/guides/lake-waconia-ice-fishing` — seasonal split from general fishing
- [ ] 4.6 `/guides/waconia-history` — Dakota etymology, Carver County context
- [ ] 4.7 `/guides/moving-to-waconia` — pairs with foreclosures

## Deferred (next round)

- [s] Newsletter capture wiring — needs Mailchimp/Buttondown account decision; UI placeholder remains until provider is chosen
- [s] Outreach / backlink campaigns (per user request)
- [ ] Additional guide queue: `/guides/lake-waconia-depth-map`, `/guides/lake-waconia-swimming-beaches`, `/guides/waconia-parks`, `/guides/waconia-schools`, `/guides/getting-to-waconia`
- [ ] Speakable schema on guides (after FAQ ships)
- [ ] Comparison content (Lake Waconia vs Lake Minnetonka)
- [ ] Glossary / local terms page

## Notes on accuracy

The expanded directory uses real Waconia institutions with publicly-verifiable
addresses. Operating hours and phone numbers should be re-verified annually
against each business's official source — they're seeded conservatively and
flagged where ambiguous.
