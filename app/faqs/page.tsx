import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../components/Breadcrumb";
import { guides } from "../lib/guides";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Waconia FAQs — Everything People Ask About Waconia, MN",
  description:
    "Aggregated answers to the questions people most often ask about Waconia, Minnesota — Lake Waconia, schools, history, things to do, hotels, real estate, and more.",
  path: "/faqs",
});

interface Section {
  heading: string;
  guideHref?: string;
  faqs: { question: string; answer: string }[];
}

// Extra page-level FAQs (not tied to a single guide).
const HOMEPAGE_FAQS = [
  {
    question: "Where is Waconia, Minnesota?",
    answer:
      "Waconia is a lakeside city in Carver County, Minnesota, about 35 miles west of downtown Minneapolis via Highway 5. It sits on the south shore of Lake Waconia.",
  },
  {
    question: "What is Waconia known for?",
    answer:
      "Waconia is best known for Lake Waconia (3,080 acres — one of the largest lakes in the Twin Cities metro), its historic downtown, the annual Carver County Fair, Nickle Dickle Day, Waconia Brewing Company, and the historic Coney Island of Lake Waconia.",
  },
  {
    question: "What does the name 'Waconia' mean?",
    answer:
      "'Waconia' is derived from the Dakota language, generally translated as 'fountain' or 'spring of water' — a reference to the lake's clear spring-fed waters.",
  },
  {
    question: "What is the population of Waconia, MN?",
    answer:
      "Waconia has a population of approximately 13,500 residents and continues to be one of the fastest-growing communities in Carver County.",
  },
];

const sections: Section[] = [
  { heading: "About Waconia (Homepage)", faqs: HOMEPAGE_FAQS },
  ...guides
    .filter((g) => g.faqs && g.faqs.length > 0)
    .map((g) => ({
      heading: g.title,
      guideHref: `/guides/${g.slug}`,
      faqs: g.faqs!,
    })),
];

export default function FaqsPage() {
  const allFaqs = sections.flatMap((s) => s.faqs);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ label: "FAQs" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mt-6 mb-4">
        Waconia FAQs
      </h1>
      <p className="text-text-muted leading-relaxed text-lg mb-10">
        Every frequently-asked question across WaconiaGuide, in one place. If
        you don&apos;t find an answer here,{" "}
        <Link href="/contact" className="text-primary hover:underline">
          send us a question
        </Link>{" "}
        and we&apos;ll add it.
      </p>

      <nav
        aria-label="Sections"
        className="bg-surface rounded-xl border border-border p-5 mb-10"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
          Jump to
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
          {sections.map((s) => {
            const id = s.heading
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm text-primary hover:underline"
                >
                  {s.heading}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="space-y-12">
        {sections.map((s) => {
          const id = s.heading
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return (
            <section key={id} id={id} className="scroll-mt-20">
              <div className="flex items-baseline justify-between mb-5">
                <h2 className="text-xl font-bold text-text-primary">
                  {s.heading}
                </h2>
                {s.guideHref && (
                  <Link
                    href={s.guideHref}
                    className="text-sm text-primary hover:underline"
                  >
                    Read the guide →
                  </Link>
                )}
              </div>
              <dl className="space-y-4">
                {s.faqs.map((f) => (
                  <div
                    key={f.question}
                    className="bg-surface rounded-xl p-5 border border-border"
                  >
                    <dt className="font-semibold text-text-primary mb-2">
                      {f.question}
                    </dt>
                    <dd className="text-text-muted leading-relaxed text-sm">
                      {f.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          );
        })}
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-text-muted">
          {allFaqs.length} questions answered across {sections.length}{" "}
          topic areas.
        </p>
      </div>

      {/* JSON-LD FAQPage — aggregated. Each Q surfaces the canonical answer
          across all guides; AI engines and Google PAA both pull from this. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((f) => ({
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
