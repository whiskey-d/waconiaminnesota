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
4. **`docs/CONTENT-STRATEGY.md`** — the GEO/SEO growth plan and monetization
   priorities. Check this before proposing new content beyond a refresh.

## Search Console

The site is verified in Google Search Console as a **URL-prefix property**
(`https://waconiaminnesota.org/`) — not a `sc-domain:` property. If a GSC tool
or script is available in your session, query real search data (top queries,
top pages, position) before deciding what content to add — Round 15 found
6 real local businesses with unmet search demand that guesswork would have
missed (see `docs/SEO-ROADMAP.md`). Don't guess the property identifier; a
`sc-domain:` query against this property will 403.

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

Each round of work gets its own branch off `main`, named `claude/<short-description>`
(e.g. `claude/gsc-directory-events-round15`). Commit cleanly with a prefixed
message (`feat(content):`, `feat(seo):`, `chore:`, etc.), open a PR to `main`,
and delete the branch after merge. Don't reuse an old round's branch name —
there is no single standing "default" branch.
