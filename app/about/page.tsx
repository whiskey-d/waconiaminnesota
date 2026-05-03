import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../components/Breadcrumb";
import { buildMetadata, SITE_URL } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About WaconiaGuide — Editorial Standards & Authorship",
  description:
    "WaconiaGuide is an independent local guide to Waconia, Minnesota. Learn how we research, fact-check, and update our coverage of Lake Waconia and the surrounding community.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ label: "About" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mt-6 mb-4">
        About WaconiaGuide
      </h1>
      <p className="text-text-muted leading-relaxed text-lg mb-8">
        WaconiaGuide is an independent local guide to Waconia, Minnesota — the
        lakeside Carver County city of about 13,500 residents on the south
        shore of Lake Waconia, 35 miles west of Minneapolis. We exist to help
        residents and visitors get the most out of the lake, downtown, and the
        rhythm of small-town Minnesota life.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text-primary tracking-tight mb-4">
          Our editorial approach
        </h2>
        <ul className="space-y-3 text-text-muted leading-relaxed">
          <li>
            <strong className="text-text-primary">Local-first.</strong> Every
            guide is written from on-the-ground knowledge of Waconia and Lake
            Waconia, not aggregated from generic travel sources.
          </li>
          <li>
            <strong className="text-text-primary">Sourced.</strong> Lake data,
            fish surveys, and stocking history come from the Minnesota DNR
            (LakeFinder DOW 10-0059-00). Event details come from{" "}
            <a
              href="https://destinationwaconia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Destination Waconia
            </a>{" "}
            (the Waconia Chamber of Commerce). Real-estate data comes from
            licensed providers.
          </li>
          <li>
            <strong className="text-text-primary">Updated.</strong> Every guide
            shows its last-updated date. We re-verify business hours, event
            dates, and prices at least annually, and immediately when a reader
            reports a change.
          </li>
          <li>
            <strong className="text-text-primary">
              Honest about affiliate links.
            </strong>{" "}
            Some lodging, real-estate, and booking links earn us a small
            commission. We disclose this clearly and recommend based on local
            knowledge, not commission rate.
          </li>
          <li>
            <strong className="text-text-primary">
              No fake reviews.
            </strong>{" "}
            Star ratings displayed in the directory are editorial summaries of
            third-party signals (Google, Yelp). We don&apos;t mark them up as
            first-party reviews and we don&apos;t solicit fake testimonials.
          </li>
        </ul>
      </section>

      <section className="mb-10" id="authors">
        <h2 className="text-2xl font-bold text-text-primary tracking-tight mb-4">
          Authors
        </h2>

        <div
          id="author-editorial"
          className="bg-surface rounded-2xl border border-border p-6"
        >
          <h3 className="font-semibold text-text-primary mb-1">
            WaconiaGuide Editorial
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            Articles attributed to &ldquo;WaconiaGuide Editorial&rdquo; are
            researched and edited by our local editorial team — Waconia
            residents and frequent Lake Waconia visitors who know the area
            seasonally and have contacted businesses, agencies, and event
            organizers directly. Sources are linked inline whenever possible.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text-primary tracking-tight mb-4">
          Corrections &amp; updates
        </h2>
        <p className="text-text-muted leading-relaxed">
          Found a mistake — wrong hours, an event that moved, a closed
          business? We want to know.{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Send us a correction
          </Link>{" "}
          and we&apos;ll update the page (and credit you if you&apos;d like).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text-primary tracking-tight mb-4">
          Independence
        </h2>
        <p className="text-text-muted leading-relaxed">
          WaconiaGuide is not affiliated with the City of Waconia, Carver
          County, the Waconia Chamber of Commerce, or any individual business.
          We link to those organizations when they are the authoritative
          source. Our recommendations are editorial.
        </p>
      </section>

      <div className="bg-accent-light rounded-xl p-6 mt-12">
        <h3 className="font-bold text-text-primary mb-2">
          Want to talk to us?
        </h3>
        <p className="text-sm text-text-muted mb-4">
          Tips, corrections, partnership inquiries, or just to say hi.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
        >
          Contact WaconiaGuide →
        </Link>
      </div>

      {/* JSON-LD AboutPage with publisher reference */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: `${SITE_URL}/about`,
            name: "About WaconiaGuide",
            mainEntity: { "@id": `${SITE_URL}#organization` },
          }),
        }}
      />
    </div>
  );
}
