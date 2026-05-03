import type { Metadata } from "next";

export const SITE_URL = "https://waconiaminnesota.org";
export const SITE_NAME = "WaconiaGuide";
export const DEFAULT_OG_IMAGE = "/images/hero-lake-waconia.webp";

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  ogType = "website",
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;
  const absoluteImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      images: [{ url: absoluteImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImage],
    },
  };
}
