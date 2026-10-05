import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../components/Breadcrumb";
import { buildMetadata, SITE_URL } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Waconia Glossary — Local Terms, Names & Place Definitions",
  description:
    "A quick-reference glossary of Waconia, MN — what 'Waconia' means, what locals call places and events, abbreviations, and definitions visitors and new residents ask about.",
  path: "/glossary",
});

interface Term {
  id: string;
  term: string;
  definition: string;
  links?: { label: string; href: string }[];
}

const TERMS: Term[] = [
  {
    id: "waconia",
    term: "Waconia",
    definition:
      "City of about 14,100 in Carver County, Minnesota, on the south shore of Lake Waconia. The name derives from the Dakota language, generally translated as 'fountain' or 'spring of water', a reference to the lake character. Settled by German immigrants in 1856; incorporated in 1882.",
    links: [
      { label: "Waconia History →", href: "/guides/waconia-history" },
    ],
  },
  {
    id: "lake-waconia",
    term: "Lake Waconia",
    definition:
      "3,080-acre lake with a maximum depth of 37 feet and about 11 miles of shoreline. Minnesota DNR lake number DOW 10-0059-00. One of the largest lakes in the Twin Cities metropolitan area. Zebra mussels and Eurasian watermilfoil are present, so clean, drain and dry boats and gear.",
    links: [
      { label: "Lake Waconia Guide →", href: "/guides/lake-waconia" },
      { label: "Depth Map →", href: "/guides/lake-waconia-depth-map" },
    ],
  },
  {
    id: "coney-island",
    term: "Coney Island of Lake Waconia",
    definition:
      "A 34-acre island in Lake Waconia, listed on the National Register of Historic Places in 1976. The Zeglin family ran a resort there from 1889 to the late 1930s. Today it is part of Lake Waconia Regional Park and is reached by boat.",
    links: [
      { label: "Coney Island Guide →", href: "/guides/coney-island-lake-waconia" },
    ],
  },
  {
    id: "carver-county",
    term: "Carver County",
    definition:
      "The Minnesota county that contains Waconia. County seat is Chaska, eight miles east. Carver County is one of the fastest-growing counties in Minnesota and one of the wealthiest by household income. Other major Carver County cities include Chanhassen, Chaska, and Victoria.",
  },
  {
    id: "isd-110",
    term: "ISD 110",
    definition:
      "Independent School District 110, Waconia Public Schools: Waconia High School, Waconia Middle School, and three elementary schools (Bayview, Laketown and Southview). Mascot: Wildcats. Conference: Metro West.",
    links: [
      { label: "Waconia Schools Guide →", href: "/guides/waconia-schools" },
    ],
  },
  {
    id: "55387",
    term: "55387",
    definition:
      "The ZIP code for the city of Waconia. Used in mailing addresses and in many local government and business directory listings.",
  },
  {
    id: "nickle-dickle",
    term: "Nickle Dickle Day",
    definition:
      "Waconia's flagship community festival, held since 1961 on the second Saturday after Labor Day at City Square Park downtown. Free, all-day, family-oriented; the Friday night before has a 21+ street dance at 1st and Vine Streets.",
    links: [
      { label: "Event Details →", href: "/events/nickle-dickle-day-2026" },
    ],
  },
  {
    id: "carver-county-fair",
    term: "Carver County Fair",
    definition:
      "Five-day annual fair held mid-August at the Carver County Fairgrounds in Waconia. Over 114 years running. 4-H shows, livestock, demolition derby, midway, and live music nightly.",
    links: [
      { label: "Event Details →", href: "/events/carver-county-fair-2026" },
    ],
  },
  {
    id: "destination-waconia",
    term: "Destination Waconia",
    definition:
      "The Waconia Chamber of Commerce, doing business as Destination Waconia. Organizes most of the city's signature community events — Nickle Dickle Day, Sister Saturday, the Scarecrow Tour, the Tree Lighting in the Park.",
  },
  {
    id: "ridgeview",
    term: "Ridgeview Medical Center",
    definition:
      "Regional hospital headquartered in Waconia at 500 South Maple Street. Full-service emergency, surgery, women's health, primary care, and a network of specialty clinics across Carver County. One of Waconia's largest employers.",
    links: [
      { label: "Listing →", href: "/directory/ridgeview-medical-center" },
    ],
  },
  {
    id: "regional-park",
    term: "Lake Waconia Regional Park",
    definition:
      "A 164-acre Carver County park on the south shore of Lake Waconia, open 6am to 10pm. It has a swim beach (no lifeguards; open Memorial Day to Labor Day), the DNR public boat access, and the Paradise Commons building.",
    links: [
      { label: "Park Guide →", href: "/guides/lake-waconia-regional-park" },
    ],
  },
  {
    id: "ais",
    term: "AIS (Aquatic Invasive Species)",
    definition:
      "A regulatory and conservation framework administered by the Minnesota DNR. Lake Waconia is an active AIS checkpoint — boaters and anglers are required to clean, drain, and dry equipment before launching to prevent the spread of zebra mussels, milfoil, and other invasives.",
  },
  {
    id: "dow-number",
    term: "DOW number",
    definition:
      "Minnesota's official lake identification number, used by the DNR LakeFinder database. Lake Waconia's DOW number is 10-0059-00 — useful for looking up bathymetric maps, fish surveys, and stocking history.",
  },
  {
    id: "city-square-park",
    term: "City Square Park",
    definition:
      "The community park in downtown Waconia, anchored by a gazebo. Venue for the Tree Lighting in the Park (Black Friday), the heart of Nickle Dickle Day, and many summer community gatherings.",
  },
  {
    id: "main-street",
    term: "Main Street",
    definition:
      "Waconia's downtown commercial spine, running east-west. Anchored by Iron Tap, Mocha Monkey, and a mix of independent shops. Free street parking; walkable end to end.",
  },
];

export default function GlossaryPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ label: "Glossary" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mt-6 mb-4">
        Waconia Glossary
      </h1>
      <p className="text-text-muted leading-relaxed text-lg mb-10">
        Quick reference for the terms, place names, and abbreviations that come
        up around Waconia, Minnesota — for visitors, new residents, and
        anyone trying to understand what locals are talking about.
      </p>

      <dl className="space-y-6">
        {TERMS.map((t) => (
          <div
            key={t.id}
            id={t.id}
            className="bg-surface rounded-xl border border-border p-6 scroll-mt-20"
          >
            <dt className="text-lg font-bold text-text-primary mb-2">
              {t.term}
            </dt>
            <dd className="text-text-muted leading-relaxed">
              {t.definition}
              {t.links && t.links.length > 0 && (
                <span className="block mt-3 flex flex-wrap gap-3">
                  {t.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {l.label}
                    </Link>
                  ))}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-text-muted">
          Missing a term?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Tell us
          </Link>{" "}
          — we&apos;ll add it.
        </p>
      </div>

      {/* JSON-LD DefinedTermSet — citation-friendly entity for AI engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            "@id": `${SITE_URL}/glossary`,
            name: "Waconia Glossary",
            description:
              "A quick-reference glossary of Waconia, Minnesota — local terms, place names, abbreviations, and definitions.",
            url: `${SITE_URL}/glossary`,
            hasDefinedTerm: TERMS.map((t) => ({
              "@type": "DefinedTerm",
              "@id": `${SITE_URL}/glossary#${t.id}`,
              name: t.term,
              description: t.definition,
              inDefinedTermSet: `${SITE_URL}/glossary`,
            })),
          }),
        }}
      />
    </div>
  );
}
