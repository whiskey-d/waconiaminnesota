import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "../../components/Breadcrumb";
import { InContentAd } from "../../components/InContentAd";
import { guides, getGuideBySlug } from "../../lib/guides";
import { AD_SLOTS } from "../../lib/adSlots";
import { SITE_URL, buildMetadata } from "../../lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.title,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}`,
    ogImage: guide.heroImage,
    ogType: "article",
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  let isFirstParagraph = true;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px]">
        <Image
          src={guide.heroImage}
          alt={guide.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <Breadcrumb
                items={[
                  { label: "Guides", href: "/guides" },
                  { label: guide.title },
                ]}
              />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 max-w-4xl">
              {guide.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span>Updated {guide.updatedDate}</span>
              <span>·</span>
              <span>By {guide.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-10 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-border p-6">
          <div className="grid grid-cols-3 gap-6">
            {guide.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-1">
                  {stat.label}
                </p>
                <p className="text-lg font-bold text-text-primary">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Article body */}
          <article className="lg:col-span-2 space-y-8">
            {guide.content.map((section, i) => {
              let rendered: React.ReactNode = null;
              switch (section.type) {
                case "text": {
                  const useDropCap = isFirstParagraph;
                  if (isFirstParagraph) isFirstParagraph = false;
                  rendered = (
                    <p
                      className={`text-text-muted leading-relaxed ${
                        useDropCap ? "drop-cap" : ""
                      }`}
                    >
                      {section.body}
                    </p>
                  );
                  break;
                }
                case "richText": {
                  const useDropCapRich = isFirstParagraph;
                  if (isFirstParagraph) isFirstParagraph = false;
                  rendered = (
                    <p
                      className={`text-text-muted leading-relaxed [&_a]:text-primary [&_a]:font-medium [&_a]:underline-offset-2 [&_a]:hover:underline ${
                        useDropCapRich ? "drop-cap" : ""
                      }`}
                      dangerouslySetInnerHTML={{ __html: section.body ?? "" }}
                    />
                  );
                  break;
                }
                case "heading":
                  rendered = (
                    <h2 className="text-2xl font-bold text-text-primary tracking-tight pt-4">
                      {section.heading}
                    </h2>
                  );
                  break;
                case "pullquote":
                  rendered = (
                    <blockquote className="bg-accent-light border-l-4 border-primary rounded-r-xl p-6 my-8">
                      <p className="text-text-primary italic leading-relaxed mb-2">
                        &ldquo;{section.quote}&rdquo;
                      </p>
                      <cite className="text-sm text-text-muted not-italic">
                        &mdash; {section.attribution}
                      </cite>
                    </blockquote>
                  );
                  break;
                case "photoGrid":
                  rendered = (
                    <div className="grid grid-cols-2 gap-4 my-8">
                      {section.photos?.map((photo, j) => (
                        <div
                          key={j}
                          className="relative aspect-[4/3] rounded-xl overflow-hidden"
                        >
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  );
                  break;
                case "infoCards":
                  rendered = (
                    <div className="grid sm:grid-cols-2 gap-4 my-8">
                      {section.cards?.map((card) => (
                        <div
                          key={card.title}
                          className="bg-surface rounded-xl border border-border p-6"
                        >
                          <span className="text-2xl mb-3 block">
                            {card.icon}
                          </span>
                          <h3 className="font-bold text-text-primary mb-2">
                            {card.title}
                          </h3>
                          <p className="text-sm text-text-muted leading-relaxed">
                            {card.body}
                          </p>
                          {card.link && (
                            <a
                              href={card.link.href}
                              target={card.link.href.startsWith('http') ? '_blank' : '_self'}
                              rel={card.link.href.startsWith('http') ? 'noopener' : undefined}
                              className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
                            >
                              {card.link.label}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                  break;
                case "cta":
                  rendered = (
                    <div className="bg-navy rounded-2xl p-8 sm:p-10 text-center my-12">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {section.ctaTitle}
                      </h3>
                      <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                        {section.ctaDescription}
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {section.buttons?.map((btn) => (
                          <Link
                            key={btn.label}
                            href={btn.href}
                            className={`px-8 py-3 rounded-full font-medium transition-colors ${
                              btn.variant === "primary"
                                ? "bg-primary hover:bg-primary/90 text-white"
                                : "border-2 border-white/50 hover:bg-white/10 text-white"
                            }`}
                          >
                            {btn.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                  break;
                default:
                  rendered = null;
              }

              return (
                <Fragment key={i}>
                  {rendered}
                  {/* In-content ad after the intro paragraph — our highest-
                      viewability slot on the longest template. */}
                  {i === 0 && <InContentAd slot={AD_SLOTS.guideInline} />}
                </Fragment>
              );
            })}

            {/* Second in-content unit between the body and the FAQ block. */}
            <InContentAd slot={AD_SLOTS.guideMidArticle} />

            {guide.faqs && guide.faqs.length > 0 && (
              <section className="guide-faq pt-8 border-t border-border">
                <h2 className="text-2xl font-bold text-text-primary tracking-tight mb-6">
                  Frequently Asked Questions
                </h2>
                <dl className="space-y-5">
                  {guide.faqs.map((faq) => (
                    <div key={faq.question}>
                      <dt className="font-semibold text-text-primary mb-2">
                        {faq.question}
                      </dt>
                      <dd className="text-text-muted leading-relaxed">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </article>

          {/* Right sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-20 space-y-6">
              {/* Lake Map & Access — only on lake-related guides */}
              {guide.sidebarMap && (
                <div className="bg-white rounded-xl border border-border overflow-hidden">
                  <div className="h-40 bg-surface">
                    <iframe
                      title="Lake Waconia Map"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-93.83%2C44.83%2C-93.74%2C44.87&layer=mapnik&marker=44.8522%2C-93.7872"
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-text-primary mb-4">
                      Lake Map &amp; Access
                    </h3>
                    <Link
                      href="/directory"
                      className="block w-full bg-primary hover:bg-primary/90 text-white text-sm font-medium py-2.5 rounded-lg text-center transition-colors mb-4"
                    >
                      View Full Map
                    </Link>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-2 text-text-muted">Public Access</td>
                          <td className="py-2 text-text-primary font-medium text-right">
                            {guide.sidebarMap.publicAccess}
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 text-text-muted">
                            Boat Launch Fee
                          </td>
                          <td className="py-2 text-text-primary font-medium text-right">
                            {guide.sidebarMap.boatLaunchFee}
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 text-text-muted">Water Clarity</td>
                          <td className="py-2 font-medium text-right text-open-green">
                            {guide.sidebarMap.waterClarity}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Generic facts sidebar — used on non-lake guides */}
              {guide.sidebarFacts && guide.sidebarFacts.length > 0 && (
                <div className="bg-white rounded-xl border border-border p-5">
                  <h3 className="font-bold text-text-primary mb-4">
                    Quick Facts
                  </h3>
                  <table className="w-full text-sm">
                    <tbody>
                      {guide.sidebarFacts.map((f, i) => (
                        <tr
                          key={f.label}
                          className={
                            i < guide.sidebarFacts!.length - 1
                              ? "border-b border-border"
                              : ""
                          }
                        >
                          <td className="py-2 text-text-muted">{f.label}</td>
                          <td className="py-2 text-text-primary font-medium text-right">
                            {f.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Related Guides */}
              <div className="bg-white rounded-xl border border-border p-5">
                <h3 className="font-bold text-text-primary mb-4">
                  Related Guides
                </h3>
                <ul className="space-y-4">
                  {guide.relatedGuides.map((rg) => (
                    <li key={rg.title}>
                      <Link
                        href={rg.href}
                        className="group flex items-start gap-3"
                      >
                        <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center shrink-0">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                            {rg.title}
                          </h4>
                          <p className="text-xs text-text-muted">
                            {rg.readTime}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Glossary terms — entity-rich cross-link to /glossary anchors */}
              {guide.glossaryTerms && guide.glossaryTerms.length > 0 && (
                <div className="bg-white rounded-xl border border-border p-5">
                  <h3 className="font-bold text-text-primary mb-3">
                    Related Glossary Terms
                  </h3>
                  <ul className="space-y-2">
                    {guide.glossaryTerms.map((g) => (
                      <li key={g.anchor}>
                        <Link
                          href={`/glossary#${g.anchor}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {g.term} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Local-knowledge CTA */}
              <div className="bg-accent-light rounded-xl p-5">
                <h3 className="font-bold text-text-primary mb-2">
                  Spotted a mistake?
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  Hours changed? Closed for the season? Tell us — we update
                  the page when readers flag a change.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
                >
                  Send a correction →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* JSON-LD Article — ISO dates, real publisher entity, optional FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.metaDescription,
            datePublished: guide.publishedIso,
            dateModified: guide.updatedIso,
            author: {
              "@type": "Organization",
              name: guide.author,
              url: guide.authorSlug
                ? `${SITE_URL}/about#author-${guide.authorSlug}`
                : `${SITE_URL}/about`,
            },
            publisher: {
              "@type": "Organization",
              "@id": `${SITE_URL}#organization`,
              name: "WaconiaGuide",
              url: SITE_URL,
              logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.svg` },
            },
            image: guide.heroImage.startsWith("http")
              ? guide.heroImage
              : `${SITE_URL}${guide.heroImage}`,
            mainEntityOfPage: `${SITE_URL}/guides/${guide.slug}`,
            ...(guide.keywords ? { keywords: guide.keywords.join(", ") } : {}),
            ...(guide.articleSection ? { articleSection: guide.articleSection } : {}),
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", ".guide-faq"],
            },
          }),
        }}
      />

      {guide.faqs && guide.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: guide.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.answer,
                },
              })),
            }),
          }}
        />
      )}

      {/* HowTo schema — emitted only when the guide is procedural. AI engines
          and Google rich-results both surface HowTo content. */}
      {guide.howTo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: guide.howTo.name,
              description: guide.howTo.description,
              ...(guide.howTo.totalTime ? { totalTime: guide.howTo.totalTime } : {}),
              ...(guide.howTo.estimatedCost
                ? {
                    estimatedCost: {
                      "@type": "MonetaryAmount",
                      currency: guide.howTo.estimatedCost.currency,
                      value: guide.howTo.estimatedCost.value,
                    },
                  }
                : {}),
              ...(guide.howTo.tools && guide.howTo.tools.length > 0
                ? {
                    tool: guide.howTo.tools.map((t) => ({
                      "@type": "HowToTool",
                      name: t,
                    })),
                  }
                : {}),
              step: guide.howTo.steps.map((s, i) => ({
                "@type": "HowToStep",
                position: i + 1,
                name: s.name,
                text: s.text,
              })),
              mainEntityOfPage: `${SITE_URL}/guides/${guide.slug}`,
            }),
          }}
        />
      )}

      {/* TouristAttraction for the things-to-do hub. Marks Waconia as a
          discoverable destination entity. */}
      {guide.slug === "things-to-do-waconia" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristDestination",
              "@id": `${SITE_URL}/guides/things-to-do-waconia#destination`,
              name: "Waconia, Minnesota",
              description:
                "Lakeside city of approximately 13,500 in Carver County, Minnesota — destination for boating and fishing on Lake Waconia, four destination craft-beverage producers, downtown dining, and the historic Coney Island of Lake Waconia.",
              url: `${SITE_URL}/guides/things-to-do-waconia`,
              touristType: ["Family", "Couple", "Outdoor enthusiast", "Foodie"],
              includesAttraction: [
                {
                  "@type": "TouristAttraction",
                  name: "Lake Waconia",
                  url: `${SITE_URL}/guides/lake-waconia`,
                },
                {
                  "@type": "TouristAttraction",
                  name: "Coney Island of Lake Waconia",
                  url: `${SITE_URL}/guides/coney-island-lake-waconia`,
                },
                {
                  "@type": "TouristAttraction",
                  name: "Lake Waconia Regional Park",
                  url: `${SITE_URL}/guides/lake-waconia-regional-park`,
                },
                {
                  "@type": "TouristAttraction",
                  name: "Waconia Brewing Co.",
                  url: `${SITE_URL}/directory/waconia-brewing-company`,
                },
                {
                  "@type": "TouristAttraction",
                  name: "Schram Vineyards Winery & Brewery",
                  url: `${SITE_URL}/directory/schram-vineyards`,
                },
                {
                  "@type": "TouristAttraction",
                  name: "Sovereign Estate Wine",
                  url: `${SITE_URL}/directory/sovereign-estate-wine`,
                },
              ],
            }),
          }}
        />
      )}

      {/* Place / BodyOfWater entity for the canonical Lake Waconia guide.
          Establishes the lake as a structured entity Google can connect to
          knowledge-graph queries ("how big is Lake Waconia"). */}
      {guide.slug === "lake-waconia" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Place", "BodyOfWater"],
              "@id": `${SITE_URL}/guides/lake-waconia#lake`,
              name: "Lake Waconia",
              alternateName: ["Wakonja", "Lake Waconia, Minnesota"],
              description:
                "Lake Waconia is a 3,080-acre lake in Carver County, Minnesota — one of the largest lakes in the Twin Cities metropolitan area. The Minnesota DNR lake number is DOW 10-0059-00.",
              url: `${SITE_URL}/guides/lake-waconia`,
              geo: {
                "@type": "GeoCoordinates",
                latitude: 44.8522,
                longitude: -93.7872,
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Carver County, Minnesota",
              },
              sameAs: [
                "https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900",
                "https://en.wikipedia.org/wiki/Lake_Waconia",
              ],
            }),
          }}
        />
      )}
    </>
  );
}
