import type { MetadataRoute } from "next";

const BASE_URL = "https://waconiaminnesota.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1.0 },
    { path: "/dmv-waconia-mn", priority: 0.9 },
    { path: "/restaurants-waconia-mn", priority: 0.8 },
    { path: "/lake-waconia-mn", priority: 0.8 },
    { path: "/bars-waconia-mn", priority: 0.7 },
    { path: "/things-to-do-waconia-mn", priority: 0.8 },
    { path: "/city-of-waconia-mn", priority: 0.7 },
    { path: "/directions-to-waconia-mn", priority: 0.6 },
    { path: "/aldi-waconia-mn", priority: 0.6 },
    { path: "/great-clips-waconia-mn", priority: 0.6 },
    { path: "/emagine-waconia-mn", priority: 0.7 },
    { path: "/waconia-public-schools", priority: 0.7 },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));
}
