import type { MetadataRoute } from "next";
import { businesses } from "./lib/businesses";
import { guides } from "./lib/guides";

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

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/directory`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/events`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...guidePages,
    ...businessPages,
  ];
}
