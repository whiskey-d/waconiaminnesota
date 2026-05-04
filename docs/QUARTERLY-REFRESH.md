# Quarterly Refresh Runbook

Living procedure for keeping waconiaminnesota.org content fresh and accurate.
Built so a fresh Claude session (or any maintainer) can execute a refresh
without rediscovering the codebase.

## Cadence at a glance

| When | What | Why |
|---|---|---|
| **Every quarter (Mar / Jun / Sep / Dec)** | Verify upcoming events, refresh fishing report, update changelog, bump `LAST_CONTENT_UPDATE` | Crawl freshness, accurate dates, FAQ accuracy |
| **Annually (each January)** | Bump year-stamped pages, add next year's events, refresh "Best of [Year]", review all guide `updatedIso`/`updatedDate` for accuracy, refresh seasonal guides | Year-stamped content gets stale fast in search results |
| **Annually (each spring before Memorial Day)** | Verify all directory hours, especially seasonal businesses; verify boat-rental pricing | Lake season starts |
| **Event-driven** | Update business listing when a closure / opening / relocation is reported | Trust + accuracy |

## Quarterly checklist

Run through this every three months. **Estimated time: 30-60 minutes.**

### 1. Events (`app/lib/events.ts`)
- [ ] For each event: is the `dateSort` (and `endDateSort`) in the future?
- [ ] If an annual event has passed, bump it to next year (e.g. `2026-09-19` → `2027-09-19`) and update the `slug` (e.g. `nickle-dickle-day-2026` → `nickle-dickle-day-2027`).
- [ ] If you change a slug, search the codebase for the old slug and update any cross-references.
- [ ] Verify `recurringNote` text reads correctly for the new year.

### 2. Sitemap (`app/sitemap.ts`)
- [ ] Bump `LAST_CONTENT_UPDATE` to today's date.
- [ ] Add any new pages added this quarter.
- [ ] Remove any pages that no longer exist.

### 3. Changelog (`app/changelog/page.tsx`)
- [ ] Add a new entry at the top of `ENTRIES` with today's date and a bullet list of what changed this quarter.
- [ ] If nothing meaningful changed, skip — don't fabricate updates for the sake of an entry.

### 4. Fishing report (optional but recommended)
- [ ] Either update an existing fishing-related guide's `updatedIso` if the seasonal info still holds, or ship a fresh `fishing-report-{spring|summer|fall|winter}-2026` style page.
- [ ] **Recommended pattern**: keep one canonical `lake-waconia-fishing` guide and roll seasonal observations into its existing seasonal sections. Bump `updatedIso` and `updatedDate` to today.

### 5. Spot-check stale data
Run the staleness checker:
```
node scripts/check-staleness.mjs
```
It flags any guide whose `updatedIso` is older than 9 months. Update those
guides — even a minor edit + new `updatedIso` is enough if the underlying
content is still accurate.

### 6. Directory hours spot-check
- [ ] Pick 3-5 directory listings randomly.
- [ ] Click through to their official websites and confirm hours match.
- [ ] Update any that are wrong.

### 7. Build + ship
- [ ] `npm run build` — must pass with the same route count as before (or higher).
- [ ] `npx next lint` — must pass clean.
- [ ] Commit on a `claude/quarterly-refresh-{YYYY-Q#}` branch.
- [ ] Open PR to main with the changelog entry as the PR body.

## Annual checklist (every January)

In addition to the quarterly steps above:

### Year-stamped pages
- [ ] **`/best-of-waconia`** (`app/best-of-waconia/page.tsx`): bump the `YEAR` constant. Review every `Pick` to see if it still holds. Replace any closed business, swap in any newly-deserving pick.
- [ ] **`/changelog`**: add the year-end summary entry.
- [ ] **`/llms.txt`** (`public/llms.txt`): refresh any year-tied facts.
- [ ] Search the codebase for hardcoded years (e.g. `2026`) and decide whether each needs a bump:
  ```
  grep -rn "202[5-9]" app/ public/ docs/ --exclude-dir=node_modules
  ```

### Events: next year's dates
- [ ] For each annual event, set the **next** occurrence in the events file. The recurring schema means search engines will surface the future date.
- [ ] Bump weekly recurring events' `dateSort` to a date in the new year (the first Thursday in June, etc.).
- [ ] Update `endDateSort` for events that span multiple days.

### Seasonal guides (`app/lib/guides.ts`)
For `waconia-summer`, `waconia-winter`, `waconia-fall`:
- [ ] Verify all weather averages still match recent NOAA data.
- [ ] Verify event dates referenced inside the body content match the new year.
- [ ] Bump `updatedIso` and `updatedDate`.

### Authoritative data
- [ ] Re-pull MN DNR LakeFinder Lake Waconia survey data (DOW 10-0059-00) — if a new survey published, refresh `lake-waconia-fishing`, `lake-waconia-ice-fishing`, and `lake-waconia-depth-map`.
- [ ] Verify ISD 110 enrollment / boundary information for `waconia-schools` guide.
- [ ] Verify Carver County Fair history-year claim (currently "114+ years" — increment annually).

### Best-of-Waconia year bump (procedure)
1. Open `app/best-of-waconia/page.tsx`.
2. Change `const YEAR = 2026;` to the new year.
3. For each pick, ask:
   - Still open? Still the best in its category?
   - If not, replace.
4. Update `metadata` description year reference if needed.
5. Add a changelog entry.

## Spring-only checklist (April–May, before Memorial Day)

- [ ] Verify Lake Waconia Marine pricing in `lake-waconia-boat-rentals` guide (currently `$400–$600` for full-day pontoon).
- [ ] Verify Lake Waconia Regional Park beach lifeguard schedule for the season.
- [ ] Verify Carver County Fair dates (mid-August) and update if shifted.
- [ ] Add any new lakefront / marina / outdoor businesses that opened over winter.

## Event-driven updates

When a reader reports — or you notice — a closed business or changed hours:

1. Open `app/lib/businesses.ts`.
2. Find the listing.
3. **Don't delete it for closures** — update the description: `"PERMANENTLY CLOSED — formerly..."` and remove from category arrays. The URL keeps working as a historical record (and any inbound links don't 404).
4. For hours changes: just update the `hours` array.
5. Add a one-line changelog entry.

## Where to find each content surface

| Content type | File(s) |
|---|---|
| Guides (long-form articles) | `app/lib/guides.ts` |
| Directory listings | `app/lib/businesses.ts` (with `CATEGORIES` enum) |
| Events | `app/lib/events.ts` |
| Homepage FAQ | `app/page.tsx` (`homepageFaqs` constant) |
| Page-level FAQs (events, hotels, foreclosures, directory) | Inline at the bottom of each page file |
| Glossary terms | `app/glossary/page.tsx` (`TERMS` array) |
| Best-of picks | `app/best-of-waconia/page.tsx` (`PICKS` array) |
| Sitemap (URL list + freshness) | `app/sitemap.ts` |
| Changelog | `app/changelog/page.tsx` (`ENTRIES` array) |
| llms.txt | `public/llms.txt` |
| robots.txt | `public/robots.txt` |

## Adding a new guide (procedure)

When the quarterly refresh introduces a new piece of content:

1. Add a new entry to the `guides` array in `app/lib/guides.ts`.
2. Required fields: `slug`, `title`, `metaDescription`, `heroImage`, `updatedDate`, `updatedIso`, `publishedIso`, `author`, `stats` (3 cards), `content` (sections), `relatedGuides`, `faqs`.
3. Optional but recommended: `keywords`, `articleSection`, `glossaryTerms`, `sidebarFacts` or `sidebarMap`.
4. If procedural: add `howTo` for a HowTo schema bonus.
5. The route is rendered automatically by `app/guides/[slug]/page.tsx` and the OG image by `app/guides/[slug]/opengraph-image.tsx`.
6. Add to `relatedGuides` of 1-2 sibling guides for cross-linking.
7. Update sitemap if the slug pattern is unusual (default `/guides/[slug]` is auto-handled).

## Adding a new directory listing (procedure)

1. Add an entry to the `businesses` array in `app/lib/businesses.ts`.
2. Required fields: `slug`, `name`, `category` (legacy display), `categoryLabel`, `categorySlugs` (array — used for filtering), `rating`, `reviewCount`, `priceLevel`, `shortDescription`, `description`, `address`, `lat`, `lng`, `phone`, `website`, `hours`, `tips`, `whatToExpect`, `image`.
3. Use `HOURS_VARIES` for any business whose hours you can't directly verify.
4. The route is rendered automatically by `app/directory/[slug]/page.tsx`.
5. The listing appears on `/directory`, on the relevant category page(s) via `categorySlugs`, and contributes to the `ItemList` JSON-LD.

## What to skip (intentional)

- **Don't bump `updatedIso` without a real edit.** Crawlers detect manipulation. Even a minor accuracy fix is fine; an empty bump is not.
- **Don't add events that haven't been confirmed.** Phantom events create trust problems.
- **Don't fabricate business hours.** Use `HOURS_VARIES` ("See website") if uncertain.
- **Don't change author byline without authentication.** "WaconiaGuide Editorial" is the editorial collective. If a real human author joins, set up `app/about` with their bio + `sameAs` first, then attribute.

## Reference

- Long-term progress: `docs/SEO-ROADMAP.md`
- Schema choices: see comments in the JSON-LD blocks of each page
- AI/LLM contract: `public/llms.txt`
