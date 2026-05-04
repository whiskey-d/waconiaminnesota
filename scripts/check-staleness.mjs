#!/usr/bin/env node
// Flags guides whose `updatedIso` is older than the configured threshold
// for their refresh cadence. Used by the quarterly refresh runbook.
//
// Usage:  node scripts/check-staleness.mjs
//
// No deps — pure Node + regex on the source files. Read-only.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

// Cadence map mirrors docs/CONTENT-INVENTORY.md. Anything not listed here
// defaults to "annual".
const CADENCE = {
  "lake-waconia-fishing": "quarterly",
  "lake-waconia": "annual",
  "coney-island-lake-waconia": "biennial",
  "things-to-do-waconia": "annual",
  "lake-waconia-regional-park": "annual",
  "lake-waconia-boat-rentals": "annual",
  "lake-waconia-ice-fishing": "annual",
  "waconia-history": "biennial",
  "moving-to-waconia": "annual",
  "waconia-schools": "annual",
  "getting-to-waconia": "biennial",
  "waconia-parks": "biennial",
  "lake-waconia-depth-map": "biennial",
  "lake-waconia-vs-lake-minnetonka": "biennial",
  "waconia-summer": "annual",
  "waconia-winter": "annual",
  "waconia-fall": "annual",
  "waconia-wineries-breweries-tour": "annual",
};

const THRESHOLDS_DAYS = {
  quarterly: 30 * 6,   // 6 months
  annual: 30 * 15,     // 15 months (a quarter past a year)
  biennial: 30 * 30,   // 30 months
};

function parseGuides() {
  const file = path.join(ROOT, "app/lib/guides.ts");
  const src = fs.readFileSync(file, "utf-8");
  const guides = [];
  // Crude block-by-block parser: split on `slug: "...",` markers.
  const slugRe = /slug:\s*"([a-z0-9-]+)"/g;
  const isoRe = /updatedIso:\s*"(\d{4}-\d{2}-\d{2})"/g;
  // Walk both regex streams in sequence; they should appear in tandem inside
  // each guide block, but we pair by index for safety.
  const slugs = [...src.matchAll(slugRe)].map((m) => m[1]);
  const isos = [...src.matchAll(isoRe)].map((m) => m[1]);
  if (slugs.length !== isos.length) {
    console.warn(
      `warn: found ${slugs.length} slugs but ${isos.length} updatedIso values — output may be misaligned`,
    );
  }
  for (let i = 0; i < Math.min(slugs.length, isos.length); i++) {
    guides.push({ slug: slugs[i], updatedIso: isos[i] });
  }
  return guides;
}

function daysSince(isoDate) {
  const then = new Date(isoDate + "T00:00:00Z").getTime();
  const now = Date.now();
  return Math.floor((now - then) / (1000 * 60 * 60 * 24));
}

function main() {
  const guides = parseGuides();
  if (guides.length === 0) {
    console.error("error: parsed 0 guides — check app/lib/guides.ts");
    process.exit(1);
  }

  const stale = [];
  const fresh = [];

  for (const g of guides) {
    const cadence = CADENCE[g.slug] ?? "annual";
    const threshold = THRESHOLDS_DAYS[cadence];
    const days = daysSince(g.updatedIso);
    const isStale = days > threshold;
    const row = {
      slug: g.slug,
      updatedIso: g.updatedIso,
      cadence,
      daysOld: days,
      thresholdDays: threshold,
    };
    if (isStale) stale.push(row);
    else fresh.push(row);
  }

  console.log(`\n📅 Staleness report — ${guides.length} guides scanned\n`);
  if (stale.length === 0) {
    console.log("✅ All guides are fresh.\n");
  } else {
    console.log(`⚠️  ${stale.length} stale guide${stale.length === 1 ? "" : "s"}:\n`);
    for (const r of stale) {
      console.log(
        `  ${r.slug.padEnd(36)} ${r.updatedIso}  ${String(r.daysOld).padStart(4)}d old  (${r.cadence}: refresh after ${r.thresholdDays}d)`,
      );
    }
    console.log("");
  }

  console.log(`📋 ${fresh.length} fresh guide${fresh.length === 1 ? "" : "s"}:\n`);
  for (const r of fresh) {
    console.log(
      `  ${r.slug.padEnd(36)} ${r.updatedIso}  ${String(r.daysOld).padStart(4)}d old  (${r.cadence})`,
    );
  }

  console.log("\nSee docs/QUARTERLY-REFRESH.md for refresh procedure.\n");
  process.exit(stale.length > 0 ? 1 : 0);
}

main();
