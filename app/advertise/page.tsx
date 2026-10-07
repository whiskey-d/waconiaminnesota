import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../components/Breadcrumb";
import { buildMetadata } from "../lib/metadata";
import { ADVERTISE_EMAIL } from "../lib/sponsors";

// noindex, follow: this page is for local businesses who find it from the
// footer or a listing, not a search landing page. Kept out of the sitemap and
// llms.txt so it adds nothing for Google to weigh.
export const metadata: Metadata = {
  ...buildMetadata({
    title: "Advertise on WaconiaGuide",
    description:
      "Sponsored placements on WaconiaGuide for Waconia-area businesses: directory category sponsorships and guide sponsorships.",
    path: "/advertise",
  }),
  robots: { index: false, follow: true },
};

const placements = [
  {
    title: "Directory category sponsor",
    body: "Your business shown as a sponsored card on every listing page in one directory category: restaurants, breweries and wineries, things to do, shopping, services, or lodging.",
  },
  {
    title: "Guide sponsor",
    body: "A sponsored card on one guide, such as the farmers market, apple orchards, or things-to-do guides. Pick the guide your customers already read.",
  },
];

const rules = [
  "Every placement is labelled Sponsored and sits beside the content, never inside it.",
  "Sponsorship doesn't buy a review, a ranking, or a spot on a best-of list. Editorial picks stay editorial.",
  "Your own directory listing stays free and stays accurate whether or not you advertise.",
  "We only run ads for real Waconia-area businesses, and we can decline any ad.",
];

export default function AdvertisePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ label: "Advertise" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mt-6 mb-4">
        Advertise on WaconiaGuide
      </h1>
      <p className="text-text-muted leading-relaxed text-lg mb-10">
        People use WaconiaGuide to plan a day in town: where to eat, what&apos;s
        on this weekend, which orchard is open. If you run a Waconia-area
        business, a sponsored placement puts you in front of them while
        they&apos;re deciding.
      </p>

      <h2 className="text-xl font-bold text-text-primary mb-4">Placements</h2>
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        {placements.map((p) => (
          <div
            key={p.title}
            className="bg-surface rounded-2xl border border-border p-6"
          >
            <h3 className="font-semibold text-text-primary mb-2">{p.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>

      <p className="text-text-muted leading-relaxed mb-10">
        Placements run by the month. Email us for current rates and
        availability, and we&apos;ll send recent visitor numbers for the
        pages you&apos;re interested in.
      </p>

      <h2 className="text-xl font-bold text-text-primary mb-4">How we run ads</h2>
      <ul className="list-disc pl-5 space-y-2 text-text-muted leading-relaxed mb-10">
        {rules.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>

      <div className="bg-navy text-white rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-3">Get rates</h2>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          Tell us your business name and which placement you&apos;re
          considering. We reply within two business days.
        </p>
        <a
          href={`mailto:${ADVERTISE_EMAIL}?subject=Advertising on WaconiaGuide`}
          className="inline-block bg-primary hover:bg-primary/90 text-white text-sm font-medium py-3 px-5 rounded-lg transition-colors"
        >
          {ADVERTISE_EMAIL}
        </a>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/contact"
          className="text-sm text-text-muted hover:text-primary"
        >
          Listing corrections and tips go to the contact page &rarr;
        </Link>
      </div>
    </div>
  );
}
