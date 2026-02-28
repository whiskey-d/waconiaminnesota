import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Hotels & Lodging in Waconia, MN — Where to Stay",
  description:
    "Find the best hotels, cabins, and Airbnbs near Lake Waconia, MN. Book your stay at AmeriVu Inn, or search Expedia for all lodging options near Waconia.",
  path: "/hotels",
});

// Expedia affiliate — update with actual EAN/affiliate ID when registered
const EXPEDIA_SEARCH_URL =
  "https://www.expedia.com/Hotel-Search?destination=Waconia%2C+Minnesota&adults=2";

const LODGING_OPTIONS = [
  {
    name: "AmeriVu Inn & Suites",
    type: "Hotel",
    priceRange: "$$",
    rating: 4.3,
    address: "493 Holiday Dr, Waconia, MN 55387",
    phone: "(952) 442-0000",
    highlights: ["Complimentary breakfast", "Free parking", "Near Lake Waconia", "Pet friendly"],
    href: "/directory/amerivu-inn-suites",
    badge: "Only hotel in Waconia",
  },
  {
    name: "Airbnb Rentals",
    type: "Short-Term Rental",
    priceRange: "$–$$$",
    rating: 4.7,
    address: "Various locations, Waconia MN",
    phone: null,
    highlights: ["Lakefront properties available", "Full kitchens", "Great for families", "Private docks"],
    href: "https://www.airbnb.com/s/Waconia--Minnesota/homes",
    badge: "Lakefront options",
  },
  {
    name: "Hotels in Chaska (8 mi)",
    type: "Nearby Hotels",
    priceRange: "$$",
    rating: 4.2,
    address: "Chaska, MN 55318",
    phone: null,
    highlights: ["Hampton Inn, Comfort Inn, Best Western", "10 min drive to Waconia", "More availability", "Lower prices"],
    href: EXPEDIA_SEARCH_URL,
    badge: "Most options nearby",
  },
];

const CABINS = [
  { name: "Lake Waconia Lakefront Cabin", guests: "Up to 8", lake: true },
  { name: "Cozy Lakeview Cottage", guests: "Up to 4", lake: true },
  { name: "Downtown Waconia Apartment", guests: "Up to 2", lake: false },
];

export default function HotelsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
          Hotels &amp; Lodging Near Waconia, MN
        </h1>
        <p className="text-text-muted mt-3 text-lg max-w-2xl">
          From the only hotel in Waconia to lakefront Airbnb cabins — find the
          perfect place to stay for your Lake Waconia visit.
        </p>
      </div>

      {/* Expedia search CTA */}
      <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="font-bold text-text-primary text-lg">Search All Hotels Near Waconia</h2>
          <p className="text-text-muted text-sm mt-1">Compare prices across Expedia, Hotels.com, and more</p>
        </div>
        <a
          href={EXPEDIA_SEARCH_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap shrink-0"
        >
          Search on Expedia →
        </a>
      </div>

      {/* Lodging options */}
      <div className="space-y-5 mb-12">
        {LODGING_OPTIONS.map((option) => (
          <div key={option.name} className="bg-white rounded-2xl border border-border p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h3 className="font-bold text-text-primary text-xl">{option.name}</h3>
                  <span className="text-xs bg-accent-light text-primary font-semibold px-2.5 py-1 rounded-full">{option.badge}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted mb-3 flex-wrap">
                  <span>{option.type}</span>
                  <span>·</span>
                  <span>{option.priceRange}</span>
                  <span>·</span>
                  <span>⭐ {option.rating}</span>
                  {option.address && <span>· 📍 {option.address}</span>}
                </div>
                <div className="flex flex-wrap gap-2">
                  {option.highlights.map((h) => (
                    <span key={h} className="text-xs bg-surface text-text-muted px-2.5 py-1 rounded-full border border-border">{h}</span>
                  ))}
                </div>
              </div>
              <a
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={option.href.startsWith("http") ? "noopener noreferrer sponsored" : undefined}
                className="bg-primary hover:bg-primary/90 text-white font-medium px-5 py-2.5 rounded-full transition-colors text-sm shrink-0"
              >
                {option.href.startsWith("/") ? "View Details →" : "Check Availability →"}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Lakefront cabins section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-text-primary mb-6">Lakefront Cabin Rentals</h2>
        <p className="text-text-muted mb-6">
          The best Waconia experience is waking up to Lake Waconia outside your window.
          These short-term rental options offer private lake access, docks, and stunning views.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {CABINS.map((c) => (
            <div key={c.name} className="bg-white rounded-xl border border-border p-4">
              <div className="text-2xl mb-2">{c.lake ? "🌊" : "🏠"}</div>
              <h3 className="font-semibold text-text-primary text-sm mb-1">{c.name}</h3>
              <p className="text-xs text-text-muted">{c.guests} · {c.lake ? "Lakefront" : "Downtown"}</p>
            </div>
          ))}
        </div>
        <a
          href="https://www.airbnb.com/s/Waconia--Minnesota/homes?amenities=12"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
        >
          Browse Lakefront Airbnbs →
        </a>
      </div>

      {/* Tips */}
      <div className="bg-navy rounded-2xl p-8 text-white mb-8">
        <h3 className="text-xl font-bold mb-4">Waconia Lodging Tips</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: "📅", tip: "Book summer weekends 4–6 weeks early — lake weekends fill fast" },
            { icon: "🚗", tip: "Chaska hotels (8 mi) offer more availability and lower prices" },
            { icon: "🏖", tip: "Lakefront Airbnbs book out months in advance for July 4th weekend" },
            { icon: "🐕", tip: "AmeriVu Inn & Suites is pet-friendly — best option for dog owners" },
          ].map((t) => (
            <div key={t.icon} className="flex items-start gap-3">
              <span className="text-xl shrink-0">{t.icon}</span>
              <p className="text-gray-300 text-sm leading-relaxed">{t.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Internal links */}
      <div className="pt-6 border-t border-border">
        <h3 className="font-semibold text-text-primary mb-4">Plan Your Waconia Visit</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/guides/lake-waconia" className="text-sm text-primary hover:underline">Lake Waconia Guide</Link>
          <Link href="/events" className="text-sm text-primary hover:underline">Local Events</Link>
          <Link href="/directory" className="text-sm text-primary hover:underline">Restaurants & Bars</Link>
          <Link href="/foreclosures" className="text-sm text-primary hover:underline">Buy a Home in Waconia</Link>
        </div>
      </div>
    </div>
  );
}
