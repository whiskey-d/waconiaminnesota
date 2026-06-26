# Content & GEO/SEO Growth Strategy

Goal: grow organic + generative-engine reach for waconiaminnesota.org, increase
clicks, pageviews/session, and dwell time, and convert that traffic into
**AdSense revenue** as the primary monetization driver.

Owner cadence: revisit this doc each quarter alongside `QUARTERLY-REFRESH.md`.
Authored: 2026-06-24. Last updated: 2026-06-25 (see §0 progress log).

> **GEOSCO** = the combined discipline of **GEO** (Generative Engine
> Optimization — getting cited by ChatGPT / Gemini / Perplexity / AI Overviews)
> and **SEO** (classic Google ranking). They share inputs (entity clarity,
> schema, freshness, unique data) but reward different formats. This plan plays
> both.

---

## 0. Progress log — where we left off

**Last worked: 2026-06-25.** Read this first when picking the work back up.

### Shipped so far (PRs #9 + #10, both based on this strategy)
- **Monetization wired (not yet earning):** `app/components/InContentAd.tsx` +
  `app/lib/adSlots.ts` add CLS-safe in-content ad slots to the guide template
  (after intro + before FAQ). They render nothing until real slot IDs exist.
  **➜ NEXT MANUAL STEP (user): paste real AdSense slot IDs into
  `app/lib/adSlots.ts`.** Until then the site is still Auto-Ads-only.
- **Content: 18 → 26 guides.** New clusters:
  - *Dining:* `best-restaurants-in-waconia`
  - *Living in Waconia:* `cost-of-living-in-waconia`, `waconia-neighborhoods`,
    `waconia-wedding-venues`, `senior-living-in-waconia` (joins moving + schools)
  - *Events:* `nickle-dickle-day`, `carver-county-fair`, `waconia-farmers-market`
    (each cross-links to its canonical `/events/<slug>` entity — no duplicate
    Event schema)
- **GEO citation page:** `/waconia-facts` — structured facts sheet with
  `City` + `FAQPage` + `Speakable` JSON-LD; linked in footer + `llms.txt`.
- Site is now 83 static routes (was ~74).

### Next up (in priority order)
1. **User:** drop real AdSense slot IDs into `app/lib/adSlots.ts`.
2. **Geo expansion** (multiplies addressable search): `day-trips-from-minneapolis`,
   `victoria-mn`, `chaska-mn`.
3. **Hub pages** (Dining / Living in Waconia / Events) to distribute authority
   + pageviews, plus a **"this weekend in Waconia"** dynamic surface fed by
   events data (best return-visit + GEO freshness driver).
4. **More dining/real-estate spokes** from §4 Tier 2/3 (restaurants-on-lake,
   coffee-shops, property-taxes, renting-in-waconia) as time allows.

### Conventions established this session (keep following)
- New guides go in `app/lib/guides.ts`; answer-first intro, full Article +
  FAQPage schema (automatic via template), `keywords` + `articleSection` +
  `glossaryTerms`, and **cross-link from 1–2 sibling `relatedGuides` rails**.
- **Never fabricate** prices/hours/stats/facilities. Reuse verified repo data
  or point to authoritative sources (DNR, Census, Carver County, Care Compare).
- Event *guides* are editorial companions that link to the canonical
  `/events/<slug>` page; don't duplicate Event JSON-LD.
- After shipping: bump `app/sitemap.ts` `LAST_CONTENT_UPDATE`, add a
  `/changelog` entry, tick the round in `SEO-ROADMAP.md`, add new pages to
  `CONTENT-INVENTORY.md`, and run `npm run build` + `npx next lint`.

---

## 1. Where we are (snapshot)

| Dimension | State |
|---|---|
| Technical SEO / schema | **Mature.** Full JSON-LD set, breadcrumbs, OG generation, sitemap, robots + `llms.txt`. Little left to do here. |
| Content depth | 18 long-form guides, 46 directory listings, 6 categories, 7 events, glossary, best-of, FAQ hub. |
| Topical coverage | **Lake / outdoors / relocation heavy.** Strong: fishing, lake, parks, boating, moving, schools. |
| Generative surface | Good: `llms.txt`, FAQPage, Speakable, definitional glossary. Citable *data* assets are thin. |
| Monetization | **Under-built. Auto Ads only.** `AdUnit` component exists but is used on zero pages → no deliberate in-content units on high-RPM pages. |
| Analytics | GA4 wired (`Analytics.tsx`), event tracking helper present. |

**The single biggest gap:** the foundation is built for traffic but the site
isn't structured to *monetize* the traffic it gets. Two levers are wide open —
(a) more high-intent / high-CPC content, and (b) deliberate ad placement.

---

## 2. Strategy thesis — the flywheel

```
  More high-intent content  ─►  more impressions in Search + AI answers
            ▲                                   │
            │                                   ▼
  Reinvest / prioritize        more clicks + deeper sessions (internal links)
            ▲                                   │
            │                                   ▼
     AdSense revenue   ◄───  more pageviews × higher RPM per page
```

Two RPM (revenue-per-mille) multipliers we control:
1. **Pageviews per session** — internal linking, hubs, "next read" rails.
2. **CPC of the page's ad context** — Google serves ads matched to page content.
   Pages about *real estate, home services, insurance, weddings, finance, legal*
   earn multiples of what a "history of Waconia" page earns. We should
   deliberately grow the high-CPC clusters where it's authentic to do so.

So content priority = **(search demand) × (commercial/ad value) × (we can win it)**.

---

## 3. Content pillars & gap analysis

We keep the existing pillars and add three commercially-stronger ones.

### Existing pillars (maintain + refresh)
- **Lake & Outdoors** — fishing, boating, parks, depth map. Keep fresh; low CPC but high volume + great GEO citation magnet.
- **History & Culture** — Coney Island, Waconia history. Brand/authority, low CPC. Maintain, don't expand much.
- **Seasonal** — summer/winter/fall. High seasonal traffic spikes; keep.

### New / under-built pillars (growth focus)

**A. Dining & Drinking** (high engagement, decent CPC, very GEO-friendly)
- Gap: we list restaurants in the directory but have almost no *roundup* content,
  which is exactly what people and AI engines query ("best restaurants in
  Waconia", "where to eat on Lake Waconia", "Waconia patios/brunch").

**B. Living in Waconia / Real Estate** (highest CPC cluster)
- Gap: have `moving-to-waconia` + `waconia-schools`. Missing the whole
  high-value middle: cost of living, neighborhoods, new construction, rentals,
  senior living, property taxes, utilities/services setup. Real-estate-adjacent
  context = top-tier AdSense RPM.

**C. Events & "What's happening"** (recurring traffic + freshness/GEO signal)
- Gap: events exist as data but each marquee event has no destination guide.
  Event guides rank for "[event] 2026" every year and spike hard.

**D. Nearby / Geo expansion** (volume + capturing the metro long tail)
- Gap: everything is Waconia-centric. Adjacent towns (Victoria, Chaska, Mayer,
  New Germany, St. Bonifacius, Norwood Young America) and "day trips from
  Minneapolis" capture a much larger search footprint and funnel back to us.

---

## 4. Prioritized content roadmap (next 2 quarters)

Ranked by **ROI = demand × ad value × winnability**. Each item notes the
target query, the pillar, and the monetization rationale. Format every one
**answer-first** (direct answer in the first 2-3 sentences) for GEO + AI
Overviews, then long-form for SEO + dwell time, then FAQPage schema.

### Tier 1 — ship first (high demand × high ad value)

| # | Working title / slug | Pillar | Why it earns |
|---|---|---|---|
| 1 | `best-restaurants-in-waconia` — "Best Restaurants in Waconia (2026): A Local's Picks" | Dining | Top dining query; dining ads + reuse of directory data; updates annually (freshness). |
| 2 | `cost-of-living-in-waconia` — taxes, housing, utilities, groceries | Real Estate | Highest-CPC context on the site; pairs with `moving-to-waconia`. |
| 3 | `waconia-neighborhoods` — guide to areas/subdivisions + price bands | Real Estate | Real-estate intent; strong internal-link hub to moving/schools/parks. |
| 4 | `nickle-dickle-day` — definitive annual event guide | Events | Spikes every Sept; year-stamped; cross-links directory + parking + dining. |
| 5 | `waconia-breweries-wineries` roundup (upgrade the existing tour into a cluster hub) | Dining | We already have 5 producers in the directory — this monetizes them. |

### Tier 2 — ship next (solid demand, builds clusters)

| # | Working title / slug | Pillar | Why |
|---|---|---|---|
| 6 | `carver-county-fair` guide | Events | Big August spike; regional reach beyond Waconia. |
| 7 | `waconia-farmers-market` guide | Events/Dining | Recurring seasonal, local-intent. |
| 8 | `things-to-do-in-waconia-this-weekend` — auto-fed "what's on now" hub | Events | Freshness engine; high return-visit + GEO "current info" value. |
| 9 | `restaurants-on-lake-waconia` / patios roundup | Dining | Long-tail dining; lakeside intent. |
| 10 | `day-trips-from-minneapolis` (Waconia as the answer) | Geo expansion | Captures metro-wide search; funnels inbound. |
| 11 | `victoria-mn` + `chaska-mn` lightweight area pages | Geo expansion | Expands entity footprint; low competition. |

### Tier 3 — fill out clusters (long tail, lower urgency)

| # | Title | Pillar |
|---|---|---|
| 12 | `waconia-property-taxes` deep-dive | Real Estate |
| 13 | `renting-in-waconia` / apartments | Real Estate |
| 14 | `senior-living-in-waconia` | Real Estate (very high CPC) |
| 15 | `waconia-wedding-venues` (Bayview + others) | Events (very high CPC) |
| 16 | `lake-waconia-water-quality-and-swimming` | Lake & Outdoors |
| 17 | `lake-waconia-boat-launches-and-access` | Lake & Outdoors |
| 18 | `waconia-coffee-shops` roundup | Dining |

**Cadence target:** 2–3 new guides per month, leading with Tier 1. That's a
realistic pace that compounds without diluting quality or tripping
thin-content flags.

---

## 5. GEO-specific tactics (get cited by AI engines)

AI engines cite pages that are *structured, unique, current, and authoritative*.
We're strong on structure; the wins are in **unique data** and **answer-first format**.

1. **Answer-first openings.** First 2–3 sentences of every page must directly
   answer the title's implicit question. This is what gets lifted into AI
   Overviews and Perplexity citations.
2. **Build citable data assets.** AI engines love a single page that *is* the
   canonical number. Candidates:
   - A maintained **Waconia facts page** (population, ZIP, elevation, lake
     stats, distances, tax rate) — expand `llms.txt` facts into a human page too.
   - Lake Waconia **depth/temperature/ice-condition** data (we have the depth map;
     extend to seasonal observations).
   - A **price-band table** for boat rentals, dining `$` levels, home prices.
3. **Comparison content** (already proven with `lake-waconia-vs-lake-minnetonka`).
   Expand: "Waconia vs Chaska to live in", "Lake Waconia vs Lake Minnewashta".
   Comparisons over-index in AI answers.
4. **Keep `llms.txt` current** and add new high-value pages to it as they ship.
5. **Freshness signals**: the "this weekend / what's on now" hub plus diligent
   `updatedIso` bumps tell AI engines the site has *current* local info —
   a major differentiator vs. static competitors.
6. **Entity completeness**: every business/place page should carry full
   `LocalBusiness`/`Place` schema with geo, hours, sameAs. We mostly do this;
   audit for gaps as the directory grows.

---

## 6. AdSense / monetization plan (the explicit priority)

Right now we run **Auto Ads only**, with the `AdUnit` component sitting unused.
Auto Ads is fine as a floor, but it under-monetizes long-form guides and gives
us no control over placement, density, or layout stability. Plan:

### 6.1 Add deliberate in-content units on high-traffic templates
Wire the existing `AdUnit` into the templates that already get/will get the most
pageviews, in the slots that earn without wrecking UX:
- **Guide template** (`app/guides/[slug]/page.tsx`): one unit after the intro,
  one mid-article (between sections), one before the FAQ/related rail. These are
  our longest, highest-dwell pages — the best inventory we own.
- **Directory listing template**: one in-content unit + the listing already has
  high commercial intent.
- **Category + index pages** (`/guides`, `/directory`, `/events`): one
  responsive unit above the fold of the list.
- **Roundup posts** (new Tier 1 dining/real-estate content): in-content units
  between list items — these pages get high CPC context.

Keep **Auto Ads on** for everything else as the catch-all.

### 6.2 Protect Core Web Vitals (ads only pay if they're viewable)
- Reserve fixed height for each ad slot to avoid **CLS** (layout shift) — pass a
  min-height to the `AdUnit` wrapper. CLS hurts both rankings and viewability.
- Lazy-load below-the-fold units (Auto Ads already does; manual units should too).
- Don't stack more than ~1 ad per viewport-height of content (policy + UX).

### 6.3 Steer content mix toward higher RPM
- The Tier 1/Tier 3 real-estate, dining, and (later) wedding/senior-living
  content isn't just traffic — it changes *which ads Google serves*, lifting
  page RPM well above what lake/history pages earn.
- Track RPM **by page template / pillar** in AdSense + GA4 so we reinvest in
  what actually pays, not just what gets clicks.

### 6.4 Maximize pageviews per session
Every extra pageview is an extra ad impression at near-zero cost:
- Strong "Next read" / related-guide rails (we have these — make them
  ever-present and relevant).
- Topic **hub pages** that link the cluster (dining hub, living-in-Waconia hub,
  events hub) so users and crawlers traverse deeper.
- Internal links from high-traffic guides to monetizable roundups.

### 6.5 Compliance guardrails
- No ads on thin/utility pages (404, contact) — policy risk.
- Maintain content quality; AdSense penalizes thin/scraped content. Our
  editorial standards page already supports this.
- Keep `ads.txt` accurate (currently `pub-0091095090973336`, DIRECT).

---

## 7. Engagement & internal architecture

- **Hub-and-spoke**: build 3 hub pages (Dining, Living in Waconia, Events) that
  each link to their spoke guides + relevant directory listings. Hubs rank for
  head terms and distribute authority + pageviews.
- **"This weekend in Waconia"** dynamic surface fed by events data — the single
  best return-visit driver and a GEO freshness signal.
- **Revisit the deferred newsletter** once "what's on now" exists — a reason to
  return is now in place. (Still deferred until there's content worth a send.)
- **Comparison tables and `$`/price bands** in roundups increase dwell time and
  scannability (and feed AI answers).

---

## 8. Measurement — what we watch

| Metric | Source | Why |
|---|---|---|
| Organic clicks + impressions by query/page | Search Console | Demand validation; find rising queries to feed Tier 2/3. |
| AI/referral traffic (Perplexity, ChatGPT, Gemini) | GA4 referrers | GEO is working when these grow. |
| Pageviews / session, avg. engagement time | GA4 | Internal-linking + hub effectiveness. |
| **Page RPM by template/pillar** | AdSense + GA4 | The money metric. Reinvest where RPM is high. |
| Core Web Vitals (LCP/CLS/INP) | Search Console / PSI | Ad viewability + rankings. |
| Staleness flags | `npm run staleness` | Freshness for SEO + GEO. |

**Quarterly review question:** which pillar produced the best *revenue per
published guide*? Double down there next quarter.

---

## 9. Quick wins vs. big bets

**Quick wins (do in the next sprint):**
1. Wire `AdUnit` into the guide template (3 slots) + add CLS-safe min-heights. *(Revenue lever, no new content needed.)*
2. Ship Tier 1 #1 `best-restaurants-in-waconia` (reuses existing directory data).
3. Ship Tier 1 #4 `nickle-dickle-day` ahead of the September spike.
4. Add a human "Waconia facts" page (expand `llms.txt` facts) as a GEO citation magnet.

**Big bets (this/next quarter):**
1. Build the **Living in Waconia** real-estate cluster (cost of living,
   neighborhoods, taxes, rentals) — highest-RPM content on the site.
2. Stand up the three **hub pages** + "this weekend" dynamic surface.
3. Begin **geo expansion** (Victoria, Chaska, day-trips) to multiply the
   addressable search footprint.

---

## Appendix — proposed new slugs (for `app/lib/guides.ts`)

```
best-restaurants-in-waconia        (Dining)
cost-of-living-in-waconia          (Living in Waconia)
waconia-neighborhoods              (Living in Waconia)
nickle-dickle-day                  (Events)        [or year-stamped, see events convention]
waconia-breweries-wineries         (Dining — hub upgrade of existing tour)
carver-county-fair                 (Events)
waconia-farmers-market             (Events)
things-to-do-in-waconia-this-weekend (Events hub)
restaurants-on-lake-waconia        (Dining)
day-trips-from-minneapolis         (Geo)
victoria-mn / chaska-mn            (Geo)
waconia-property-taxes             (Living in Waconia)
renting-in-waconia                 (Living in Waconia)
senior-living-in-waconia           (Living in Waconia — high CPC)
waconia-wedding-venues             (Events — high CPC)
lake-waconia-water-quality-and-swimming (Lake & Outdoors)
lake-waconia-boat-launches-and-access   (Lake & Outdoors)
waconia-coffee-shops               (Dining)
```

Each follows the standard guide procedure in `QUARTERLY-REFRESH.md`
(answer-first intro, full schema, FAQPage, related-guide rail, add to a
sibling's `relatedGuides`, add to `llms.txt` if it's a citable asset).
