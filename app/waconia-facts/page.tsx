import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../components/Breadcrumb";
import { buildMetadata, SITE_URL } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Waconia, MN Facts: Population, ZIP, County & Key Data (2026)",
  description:
    "Quick-reference facts about Waconia, Minnesota — population, ZIP code, county, area code, coordinates, school district, Lake Waconia stats, history, and signature events. A cited local data sheet.",
  path: "/waconia-facts",
});

interface Fact {
  label: string;
  value: string;
  href?: string;
}

interface FactGroup {
  heading: string;
  facts: Fact[];
}

// Every figure here is drawn from the same authoritative sources the rest of
// the site uses: US Census / City of Waconia (population), MN DNR LakeFinder
// DOW 10-0059-00 (lake stats), Carver County, and Destination Waconia. We do
// not list figures we can't source (e.g. land area, elevation) rather than
// guess.
const FACT_GROUPS: FactGroup[] = [
  {
    heading: "Location & Geography",
    facts: [
      { label: "County", value: "Carver County, Minnesota", href: "/glossary#carver-county" },
      { label: "Region", value: "Twin Cities metro (western edge)" },
      { label: "Distance to Minneapolis", value: "~35 miles (about a 45-minute drive)" },
      { label: "County seat", value: "Chaska — 8 miles east" },
      { label: "ZIP code", value: "55387", href: "/glossary#55387" },
      { label: "Area code", value: "952" },
      { label: "Time zone", value: "Central (CST/CDT)" },
      { label: "Coordinates", value: "44.8522° N, 93.7872° W" },
    ],
  },
  {
    heading: "People",
    facts: [
      { label: "Population", value: "~13,500 (13,461 at the 2020 Census)" },
      { label: "Growth", value: "One of the fastest-growing cities in Carver County" },
    ],
  },
  {
    heading: "History",
    facts: [
      { label: "Name origin", value: "Dakota language — generally translated 'fountain' or 'spring of water'" },
      { label: "Settled", value: "1856, by German immigrants" },
      { label: "Incorporated", value: "1882" },
    ],
  },
  {
    heading: "Civic & Institutions",
    facts: [
      { label: "School district", value: "ISD 110 — Waconia Public Schools", href: "/glossary#isd-110" },
      { label: "Hospital", value: "Ridgeview Medical Center (headquartered in Waconia)" },
      { label: "Library", value: "Carver County Library — Waconia branch" },
    ],
  },
  {
    heading: "Lake Waconia",
    facts: [
      { label: "Surface area", value: "3,080 acres", href: "/guides/lake-waconia" },
      { label: "Maximum depth", value: "37 feet", href: "/guides/lake-waconia-depth-map" },
      { label: "Shoreline", value: "12+ miles" },
      { label: "MN DNR lake number", value: "DOW 10-0059-00", href: "/glossary#dow-number" },
      { label: "Notable", value: "One of the largest lakes in the Twin Cities metro; spring-fed" },
    ],
  },
  {
    heading: "Signature Events",
    facts: [
      { label: "Carver County Fair", value: "Annually in August — a 114+ year tradition", href: "/guides/carver-county-fair" },
      { label: "Nickle Dickle Day", value: "September street festival at City Square Park", href: "/guides/nickle-dickle-day" },
      { label: "Farmers Market", value: "Thursdays, June–September, downtown", href: "/guides/waconia-farmers-market" },
    ],
  },
];

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is the population of Waconia, MN?",
    answer:
      "Waconia has approximately 13,500 residents. The 2020 Census recorded 13,461, and the city has continued to grow modestly since — it's one of the fastest-growing cities in Carver County.",
  },
  {
    question: "What county is Waconia, MN in?",
    answer:
      "Waconia is in Carver County, Minnesota. The county seat is Chaska, about 8 miles east. Waconia sits on the western edge of the Twin Cities metropolitan area.",
  },
  {
    question: "What is the ZIP code for Waconia, MN?",
    answer: "The ZIP code for Waconia is 55387. The telephone area code is 952.",
  },
  {
    question: "How far is Waconia from Minneapolis?",
    answer:
      "Waconia is about 35 miles west of Minneapolis — roughly a 45-minute drive off-peak via Highway 5 and I-494.",
  },
  {
    question: "What does the name 'Waconia' mean?",
    answer:
      "The name derives from the Dakota language and is generally translated as 'fountain' or 'spring of water,' a reference to Lake Waconia's clear, spring-fed character. The city was settled by German immigrants in 1856 and incorporated in 1882.",
  },
  {
    question: "How big is Lake Waconia?",
    answer:
      "Lake Waconia covers 3,080 acres with a maximum depth of 37 feet and more than 12 miles of shoreline. Its Minnesota DNR lake number is DOW 10-0059-00, and it's one of the largest lakes in the Twin Cities metro.",
  },
];

export default function WaconiaFactsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ label: "Waconia Facts" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mt-6 mb-4">
        Waconia, Minnesota: Key Facts
      </h1>
      <p className="waconia-facts-intro text-text-muted leading-relaxed text-lg mb-10">
        Waconia is a lakeside city of approximately 13,500 in Carver County,
        Minnesota, about 35 miles west of Minneapolis on the south shore of the
        3,080-acre Lake Waconia. This is a quick-reference data sheet — the
        numbers people and search engines ask for most, drawn from the US
        Census, the City of Waconia, the Minnesota DNR, and Carver County.
      </p>

      <div className="space-y-10">
        {FACT_GROUPS.map((group) => (
          <section key={group.heading}>
            <h2 className="text-xl font-bold text-text-primary tracking-tight mb-4">
              {group.heading}
            </h2>
            <div className="bg-surface rounded-xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {group.facts.map((f, i) => (
                    <tr
                      key={f.label}
                      className={
                        i < group.facts.length - 1 ? "border-b border-border" : ""
                      }
                    >
                      <th
                        scope="row"
                        className="py-3 px-4 text-left font-medium text-text-muted align-top w-2/5"
                      >
                        {f.label}
                      </th>
                      <td className="py-3 px-4 text-text-primary">
                        {f.href ? (
                          <Link href={f.href} className="text-primary hover:underline">
                            {f.value}
                          </Link>
                        ) : (
                          f.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>

      {/* FAQ */}
      <section className="waconia-facts-faq mt-14 pt-8 border-t border-border">
        <h2 className="text-2xl font-bold text-text-primary tracking-tight mb-6">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-5">
          {FAQS.map((faq) => (
            <div key={faq.question}>
              <dt className="font-semibold text-text-primary mb-2">
                {faq.question}
              </dt>
              <dd className="text-text-muted leading-relaxed">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-text-muted">
          Spotted a number that&apos;s out of date?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Tell us
          </Link>{" "}
          — we keep this sheet current.
        </p>
      </div>

      {/* JSON-LD: City entity — a structured, citation-ready record of Waconia
          for AI engines and the knowledge graph. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "City",
            "@id": `${SITE_URL}/waconia-facts#city`,
            name: "Waconia",
            alternateName: "Waconia, Minnesota",
            description:
              "Waconia is a lakeside city of approximately 13,500 in Carver County, Minnesota, about 35 miles west of Minneapolis on the south shore of Lake Waconia.",
            url: `${SITE_URL}/waconia-facts`,
            foundingDate: "1882",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 44.8522,
              longitude: -93.7872,
            },
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: "Carver County, Minnesota",
            },
            additionalProperty: [
              { "@type": "PropertyValue", name: "Population", value: "13,461 (2020 Census)" },
              { "@type": "PropertyValue", name: "ZIP code", value: "55387" },
              { "@type": "PropertyValue", name: "Area code", value: "952" },
              { "@type": "PropertyValue", name: "School district", value: "ISD 110 — Waconia Public Schools" },
            ],
            sameAs: [
              "https://en.wikipedia.org/wiki/Waconia,_Minnesota",
              "https://www.waconia.org/",
            ],
          }),
        }}
      />

      {/* Speakable — flags the intro + FAQ for voice/AI answer surfaces. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE_URL}/waconia-facts`,
            name: "Waconia, Minnesota: Key Facts",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [".waconia-facts-intro", ".waconia-facts-faq"],
            },
          }),
        }}
      />

      {/* FAQPage — the fact questions as a rich-result + GEO citation surface. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
    </div>
  );
}
