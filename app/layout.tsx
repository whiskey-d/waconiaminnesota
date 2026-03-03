import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { Analytics } from "./components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://waconiaminnesota.org"),
  title: {
    default: "WaconiaGuide — Discover Waconia, Minnesota",
    template: "%s | WaconiaGuide",
  },
  description:
    "Your definitive guide to Waconia, Minnesota. Discover local dining, events, lake activities, and everything that makes this lakeside community unique.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "WaconiaGuide",
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
      </body>
    </html>
  );
}
