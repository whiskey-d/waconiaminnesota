# Content Inventory

Every content surface on waconiaminnesota.org with its refresh cadence and
authoritative source. Used by the quarterly refresh runbook.

## Guides (`app/lib/guides.ts`)

Each guide has `updatedIso` (ISO date the page was last refreshed) and
`publishedIso` (first publication). Guides are scored for "freshness needed"
based on whether the underlying facts can shift.

| Slug | Cadence | Fact volatility | Notes |
|---|---|---|---|
| `lake-waconia-fishing` | Quarterly | Medium | Seasonal fishing patterns described per-season; verify each season |
| `lake-waconia` | Annual | Low | Lake stats (depth, surface area) are stable |
| `coney-island-lake-waconia` | Biennial | Very low | Historical content, mostly stable |
| `things-to-do-waconia` | Annual | Medium | Lists current businesses; check for closures |
| `lake-waconia-regional-park` | Annual | Low | Park amenities stable; verify season dates |
| `lake-waconia-boat-rentals` | Annual (spring) | Medium | Pricing changes year-over-year |
| `lake-waconia-ice-fishing` | Annual (winter) | Medium | Crappie Contest date, ice safety |
| `waconia-history` | Biennial | Very low | Historical |
| `moving-to-waconia` | Annual | Medium | Tax rates, school stats, commute times |
| `waconia-schools` | Annual | Medium | ISD 110 enrollment, boundaries |
| `getting-to-waconia` | Biennial | Low | Route info stable; verify rideshare cost band |
| `waconia-parks` | Biennial | Low | Park inventory stable |
| `lake-waconia-depth-map` | Biennial | Low | DNR survey data; refresh when DNR publishes a new survey |
| `lake-waconia-vs-lake-minnetonka` | Biennial | Low | Comparison facts stable |
| `waconia-summer` | Annual (spring) | Medium | Refresh event dates |
| `waconia-winter` | Annual (fall) | Medium | Refresh Crappie Contest year, igloos |
| `waconia-fall` | Annual (summer) | Medium | Refresh Scarecrow Tour dates |
| `waconia-wineries-breweries-tour` | Annual | Medium | Producer hours, pricing band |

## Events (`app/lib/events.ts`)

Every annual event needs its `dateSort` bumped to the next occurrence after
that year's date passes.

| Slug | Cadence | Source |
|---|---|---|
| `nickle-dickle-day-2026` | Annual | destinationwaconia.org |
| `waconia-farmers-market-2026` | Annual (spans season) | destinationwaconia.org |
| `carver-county-fair-2026` | Annual | carvercountyfair.com |
| `sister-saturday-2026` | Annual | destinationwaconia.org |
| `scarecrow-tour-2026` | Annual | destinationwaconia.org |
| `tree-lighting-2026` | Annual | destinationwaconia.org |
| `waconia-trivia-night` | Weekly (no slug bump needed) | Waconia Brewing Co. |

## Directory listings (`app/lib/businesses.ts`)

26 listings as of 2026-05-03. Hours marked `HOURS_VARIES` ("See website")
should be re-verified against the business's official source before the next
refresh.

**Verify hours annually before Memorial Day weekend** (peak lake season):
- iron-tap, waconia-brewing-company, schram-vineyards, sovereign-estate-wine,
  j-carver-distillery, lolas-lakehouse, egg-cetera-cafe, mocha-monkey,
  mucho-mexican, emagine-waconia, garage-bowling-bar, island-view-golf-club,
  carver-county-historical-society, waconia-public-library,
  ridgeview-medical-center, great-clips-waconia, aldi-waconia, coborns-waconia,
  westside-liquor-waconia, lake-waconia-marine, amerivu-inn-suites,
  dmv-waconia-mn, bayview-event-center, schram-haus-brewery,
  lakeside-tavern-waconia, waconia-public-schools-isd-110

## Trust + hub pages

| Path | Cadence | Notes |
|---|---|---|
| `/about` | Biennial | Author bios, editorial standards |
| `/contact` | Biennial | Email, channels |
| `/glossary` | Annual | Add new local terms; bump definitions for accuracy |
| `/best-of-waconia` | **Annual (January)** | Year-stamped; bump `YEAR` constant + review every pick |
| `/faqs` | Auto-aggregates from guides | Refresh by refreshing the underlying guides |
| `/changelog` | Quarterly | Add an entry per refresh |

## Configuration files

| Path | Cadence | Purpose |
|---|---|---|
| `public/llms.txt` | Annual | AI crawler facts; bump entity facts when stats change |
| `public/robots.txt` | When new bots emerge | Add explicit allows for new AI crawlers |
| `public/manifest.webmanifest` | When brand changes | PWA metadata |
| `app/sitemap.ts` | Quarterly | Bump `LAST_CONTENT_UPDATE` |
| `public/ads.txt` | When AdSense publisher changes | AdSense verification |

## Authoritative external sources

When you need to verify a fact, here's where to look first.

| Topic | Source |
|---|---|
| Lake Waconia data (depth, surface area, fish species, stocking) | [MN DNR LakeFinder DOW 10-0059-00](https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900) |
| Carver County Fair | [carvercountyfair.com](https://www.carvercountyfair.com) |
| Chamber events (Nickle Dickle Day, Scarecrow Tour, Tree Lighting, Sister Saturday) | [destinationwaconia.org](https://destinationwaconia.org) |
| Carver County Parks (Lake Waconia Regional Park) | [Carver County](https://www.co.carver.mn.us) |
| Schools | [isd110.org](https://isd110.org) |
| Hospital | [ridgeviewmedical.org](https://ridgeviewmedical.org) |
| Population, ZIP, county data | US Census, City of Waconia |
| Coney Island history | Carver County Historical Society |

## Staleness thresholds

A guide is "stale" if `updatedIso` is older than:
- **6 months** for guides marked **Quarterly** cadence
- **15 months** for guides marked **Annual** cadence
- **30 months** for guides marked **Biennial** cadence

The `scripts/check-staleness.mjs` script flags any guide past these thresholds.
