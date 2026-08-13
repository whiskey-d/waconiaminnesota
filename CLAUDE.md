# Repo notes for Claude

This is `waconiaminnesota.org` — a Next.js 14 (app router) local guide site
for Waconia, Minnesota. Site brand is **WaconiaGuide**.

If you're picking up a fresh session, read these in order:

1. **`docs/SEO-ROADMAP.md`** — what's been done, what's deferred. Your map.
2. **`docs/QUARTERLY-REFRESH.md`** — the runbook for keeping content fresh.
   This is what you should follow if the user says "ship the quarterly refresh"
   or anything similar.
3. **`docs/CONTENT-INVENTORY.md`** — every content surface mapped to its
   refresh cadence and authoritative source.

## Quick commands

```
npm run dev        # local dev
npm run build      # production build (use to verify changes)
npm run lint       # lint check
npm run staleness  # flag guides whose updatedIso is past its cadence threshold
```

## Where things live

| What | Where |
|---|---|
| Long-form guides | `app/lib/guides.ts` |
| Directory listings | `app/lib/businesses.ts` |
| Events | `app/lib/events.ts` |
| Page-level FAQs | Inline at the bottom of each page file |
| Glossary | `app/glossary/page.tsx` |
| Sitemap | `app/sitemap.ts` (bump `LAST_CONTENT_UPDATE` when shipping) |
| robots.txt + llms.txt | `public/` |
| Schema choices documented inline | Comments in JSON-LD blocks |

## Operating facts (learned in practice — trust these)

- **Events = views = AdSense.** Traffic spikes around marquee events (confirmed
  2026-08-13, Carver County Fair week). Event pages + companion guides must be
  fresh 2–4 weeks *before* each event — follow the **Event lead-time calendar**
  in `docs/QUARTERLY-REFRESH.md`. This is the site's revenue rhythm.
- **Closed — do not re-add or recommend:** Waconia Brewing Co. (closed Jan 2026,
  255 W Main St) and Schram Haus Brewery (closed Dec 2025). Verified operating
  replacements in the directory: Parley Lake Winery + Deardorff Orchards
  (both on the Parley Lake Rd farmstead). If a buyer reopens the brewery,
  that's an event-driven update per the runbook.
- **Open TBA (Q4 2026):** the Waconia Christkindlsmarkt event page +
  `waconia-christmas` guide carry a "2026 dates TBA" placeholder (typically the
  first two December weekends). Replace it the moment christmasinwaconia.com
  announces — highest-leverage single edit of the quarter.
- **Remote-session network:** many authoritative sources are egress-blocked from
  the cloud sandbox (destinationwaconia.org, dnr.state.mn.us,
  christmasinwaconia.com, sovereignestatewine.com, images.unsplash.com…).
  Use WebSearch to verify facts instead of WebFetch, and prefer repo-proven
  image URLs over new Unsplash links you can't verify.

## Conventions

- **All dates** in code use ISO 8601 (`YYYY-MM-DD`) for `updatedIso`,
  `publishedIso`, `dateSort`, `endDateSort`. Display strings live alongside
  in fields like `updatedDate` and `date`.
- **Author byline** is `"WaconiaGuide Editorial"` — editorial collective.
  Don't introduce a personal byline without a real human + bio + `sameAs`.
- **Schema-first**: every public template ships JSON-LD. When adding a new
  template, look at sibling pages for the right schema set.
- **OG images** are generated dynamically via `app/opengraph-image.tsx` and
  per-guide `app/guides/[slug]/opengraph-image.tsx`. Don't ship static OG
  PNGs — let the runtime route render them.
- **Hours** for businesses you can't directly verify use the `HOURS_VARIES`
  constant ("See website").
- **Don't fabricate** events, hours, prices, or statistics. If unsure,
  flag in the user-visible text and use a placeholder.

## Branch strategy

Default development branch is `claude/seo-geo-audit-XwLIB` per the existing
session config. PRs go to `main`. Each round of work commits cleanly with a
prefixed message (`feat(seo):`, `feat(content):`, `chore:`, etc.).
