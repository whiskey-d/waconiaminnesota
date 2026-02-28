import type { Metadata } from "next";

const SITE_URL = "https://waconiaminnesota.org";
const SITE_NAME = "WaconiaMinnesota.org";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function buildMetadata({ title, description, path, ogImage }: PageMetaOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export { SITE_URL, SITE_NAME };
