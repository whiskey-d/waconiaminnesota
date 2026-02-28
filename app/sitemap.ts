import type { MetadataRoute } from "next";
import { businesses } from "./lib/businesses";
import { guides } from "./lib/guides";
import { events } from "./lib/events";

const SITE_URL = "https://waconiaminnesota.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const businessPages = businesses.map((b) => ({
    url: `${SITE_URL}/directory/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const guidePages = guides.map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const eventPages = events.map((e) => ({
    url: `${SITE_URL}/events/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    { url: `${SITE_URL}/directory`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${SITE_URL}/events`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/guides/lake-waconia`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/hotels`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/foreclosures`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.75 },
    ...guidePages,
    ...eventPages,
    ...businessPages,
  ];
}
