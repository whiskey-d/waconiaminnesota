import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../components/Breadcrumb";
import { buildMetadata, SITE_URL } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact WaconiaGuide — Tips, Corrections, Partnerships",
  description:
    "Reach the WaconiaGuide editorial team with tips, corrections, business listing requests, or partnership inquiries about Waconia, Minnesota.",
  path: "/contact",
});

const CONTACT_EMAIL = "hello@waconiaminnesota.org";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ label: "Contact" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mt-6 mb-4">
        Contact WaconiaGuide
      </h1>
      <p className="text-text-muted leading-relaxed text-lg mb-10">
        Tips, corrections, business listing requests, partnership inquiries —
        we&apos;d love to hear from you.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-surface rounded-2xl border border-border p-6">
          <h2 className="font-semibold text-text-primary mb-2">
            Editorial &amp; corrections
          </h2>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            Spotted a mistake? Hours changed? Business closed? Let us know and
            we&apos;ll update the page within a few business days.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Correction`}
            className="text-primary hover:underline text-sm font-medium"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="bg-surface rounded-2xl border border-border p-6">
          <h2 className="font-semibold text-text-primary mb-2">
            Business listings
          </h2>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            Run a Waconia business that should be in our directory? Send us
            your name, address, hours, and a sentence on what makes you you.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Directory listing`}
            className="text-primary hover:underline text-sm font-medium"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="bg-surface rounded-2xl border border-border p-6">
          <h2 className="font-semibold text-text-primary mb-2">
            Tips &amp; story ideas
          </h2>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            New restaurant opening? Lake event? Local angle worth covering?
            Tip us off — we live here too.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Tip`}
            className="text-primary hover:underline text-sm font-medium"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="bg-surface rounded-2xl border border-border p-6">
          <h2 className="font-semibold text-text-primary mb-2">Partnerships</h2>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            Tourism partners, local newsrooms, regional travel sites — get in
            touch about content collaborations or cross-linking.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Partnership`}
            className="text-primary hover:underline text-sm font-medium"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="bg-navy text-white rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-3">Looking for the city?</h2>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          WaconiaGuide is independent — we&apos;re not the City of Waconia or
          the Chamber of Commerce. Try these official sources:
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="https://www.waconia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              City of Waconia (waconia.org)
            </a>{" "}
            — government, permits, utilities
          </li>
          <li>
            <a
              href="https://destinationwaconia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Destination Waconia (Chamber of Commerce)
            </a>{" "}
            — events, member businesses
          </li>
          <li>
            <a
              href="https://www.co.carver.mn.us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Carver County
            </a>{" "}
            — county services, taxes, parks
          </li>
        </ul>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/about"
          className="text-sm text-text-muted hover:text-primary"
        >
          ← Back to About WaconiaGuide
        </Link>
      </div>

      {/* JSON-LD ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: `${SITE_URL}/contact`,
            name: "Contact WaconiaGuide",
            mainEntity: {
              "@id": `${SITE_URL}#organization`,
              "@type": "Organization",
              email: CONTACT_EMAIL,
              contactPoint: {
                "@type": "ContactPoint",
                email: CONTACT_EMAIL,
                contactType: "Editorial",
                availableLanguage: "English",
              },
            },
          }),
        }}
      />
    </div>
  );
}
