import type { MetadataRoute } from "next";
import { businesses } from "./lib/businesses";
import { guides } from "./lib/guides";
import { events } from "./lib/events";

const SITE_URL = "https://waconiaminnesota.org";

// Bump this when structural site content changes (new pages, major edits).
// Using a stable date per deploy avoids the "everything changed today" signal
// that blanket `new Date()` timestamps send to crawlers.
const LAST_CONTENT_UPDATE = new Date("2026-04-16");

export default function sitemap(): MetadataRoute.Sitemap {
  const businessPages = businesses.map((b) => ({
    url: `${SITE_URL}/directory/${b.slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const guidePages = guides.map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.updatedDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const eventPages = events.map((e) => ({
    url: `${SITE_URL}/events/${e.slug}`,
    lastModified: new Date(e.dateSort),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: SITE_URL, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${SITE_URL}/directory`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/events`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/guides`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${SITE_URL}/hotels`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/foreclosures`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "weekly" as const, priority: 0.75 },
    ...guidePages,
    ...eventPages,
    ...businessPages,
  ];
}
