import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Foreclosures in Waconia, MN — Find Listings",
  description:
    "Search foreclosure listings in Waconia, MN and Carver County. Bank-owned homes, short sales, and distressed properties near Lake Waconia.",
  path: "/foreclosures",
});

export default function ForeclosuresPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
          Foreclosures in Waconia, MN
        </h1>
        <p className="text-text-muted mt-3 text-lg leading-relaxed max-w-2xl">
          Find bank-owned homes, short sales, and foreclosure listings in Waconia
          and Carver County. Updated daily from the nation&apos;s largest
          foreclosure database.
        </p>
      </div>

      {/* Foreclosure.com Widget */}
      <div className="bg-surface rounded-2xl border border-border p-6 mb-10">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <h2 className="text-lg font-bold text-text-primary">Live Foreclosure Listings</h2>
          <a
            href="https://www.foreclosure.com/?rsp=3579"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary font-medium hover:underline"
          >
            View all on Foreclosure.com →
          </a>
        </div>

        {/* Embedded search widget */}
        <div className="w-full overflow-hidden rounded-xl border border-border bg-white">
          <iframe
            src="https://www.foreclosure.com/listing/search.html?zip=55387&rsp=3579"
            width="100%"
            height="600"
            frameBorder="0"
            title="Foreclosure listings in Waconia MN"
            className="w-full"
          />
        </div>

        <p className="text-xs text-text-muted mt-3 text-center">
          Listings provided by{" "}
          <a href="https://www.foreclosure.com/?rsp=3579" target="_blank" rel="noopener noreferrer sponsored" className="text-primary hover:underline">
            Foreclosure.com
          </a>
          . Updated daily.
        </p>
      </div>

      {/* Info section */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-2xl border border-border p-6">
          <h3 className="font-bold text-text-primary text-lg mb-3">Why Buy a Foreclosure in Waconia?</h3>
          <ul className="space-y-2.5 text-sm text-text-muted">
            {[
              "Prices often 10–30% below market value",
              "Lake Waconia area homes appreciate consistently",
              "Carver County — one of MN's fastest-growing counties",
              "Strong rental demand from lake visitors",
              "Easy commute to Twin Cities metro (35 min to Minneapolis)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-border p-6">
          <h3 className="font-bold text-text-primary text-lg mb-3">Before You Buy</h3>
          <ul className="space-y-2.5 text-sm text-text-muted">
            {[
              "Get pre-approved — foreclosure deals move fast",
              "Budget for repairs — most are sold as-is",
              "Order a full inspection before closing",
              "Check for HOA liens and back taxes",
              "Work with a local Waconia area Realtor",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-3">Search All Waconia Foreclosures</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Access the full database of foreclosure listings, bank-owned properties, and short sales across Carver County and the greater Waconia area.
        </p>
        <a
          href="https://www.foreclosure.com/?rsp=3579"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
        >
          Search Foreclosure.com →
        </a>
      </div>

      {/* Internal links */}
      <div className="mt-10 pt-8 border-t border-border">
        <h3 className="font-semibold text-text-primary mb-4">More Waconia Real Estate</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/directory/amerivu-inn-suites" className="text-sm text-primary hover:underline">Hotels & Lodging</Link>
          <Link href="/guides/lake-waconia" className="text-sm text-primary hover:underline">Lake Waconia Guide</Link>
          <Link href="/directory" className="text-sm text-primary hover:underline">Business Directory</Link>
        </div>
      </div>
    </div>
  );
}
