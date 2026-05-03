import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { Analytics } from "./components/Analytics";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "./lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WaconiaGuide — Discover Waconia, Minnesota",
    template: "%s | WaconiaGuide",
  },
  description:
    "Your definitive guide to Waconia, Minnesota. Discover local dining, events, lake activities, and everything that makes this lakeside community unique.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Lake Waconia, Minnesota at golden hour" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    // Note: favicon.ico and apple-touch-icon.png should be added as raster
    // exports of favicon.svg (180x180 PNG and 32x32/16x16 ICO) before launch.
  },
  manifest: "/manifest.webmanifest",
  verification: {
    other: {
      "google-adsense-account": ["ca-pub-0091095090973336"],
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: SITE_NAME,
  alternateName: "Waconia Guide",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    "Independent local guide to Waconia, Minnesota — covering Lake Waconia, dining, events, lodging, and community.",
  areaServed: {
    "@type": "City",
    name: "Waconia",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Carver County, Minnesota",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white min-h-screen flex flex-col">
        <Analytics />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
