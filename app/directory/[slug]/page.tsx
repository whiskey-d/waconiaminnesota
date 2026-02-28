import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "../../components/Breadcrumb";
import {
  businesses,
  getBusinessBySlug,
  getRelatedBusinesses,
} from "../../lib/businesses";
import { SITE_URL } from "../../lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return businesses.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const biz = getBusinessBySlug(slug);
  if (!biz) return {};
  return {
    title: `${biz.name} — Waconia, MN`,
    description: biz.description,
    alternates: { canonical: `${SITE_URL}/directory/${biz.slug}` },
    openGraph: {
      title: biz.name,
      description: biz.description,
      type: "website",
    },
  };
}

function getTodayIndex(): number {
  return new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
}

function isOpenNow(hours: { day: string; hours: string }[]): boolean {
  const todayHours = hours[getTodayIndex()].hours;
  return todayHours !== "Closed";
}

export default async function BusinessDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const biz = getBusinessBySlug(slug);
  if (!biz) notFound();

  const related = getRelatedBusinesses(slug, 4);
  const todayIdx = getTodayIndex();
  const openNow = isOpenNow(biz.hours);

  const expectItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      label: "Atmosphere",
      value: biz.whatToExpect.atmosphere,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      label: "Crowd",
      value: biz.whatToExpect.crowd,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      label: "Live Events",
      value: biz.whatToExpect.liveEvents,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      label: "Outdoor Seating",
      value: biz.whatToExpect.outdoorSeating,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px]">
        <Image
          src={biz.image}
          alt={biz.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              {biz.categoryLabel}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2">
              {biz.name}
            </h1>
            <div className="flex items-center gap-3 text-white/90 text-sm">
              <span>⭐ {biz.rating} ({biz.reviewCount} reviews)</span>
              <span>·</span>
              <span>{biz.priceLevel}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: "Directory", href: "/directory" },
            { label: biz.name },
          ]}
        />

        <div className="grid lg:grid-cols-3 gap-10 mt-8">
          {/* Left: Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* About */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">📘</span>
                <h2 className="text-2xl font-bold text-text-primary">
                  About {biz.name}
                </h2>
              </div>
              <p className="text-text-muted leading-relaxed">
                {biz.description}
              </p>
            </section>

            {/* Insider Tips */}
            <section className="bg-accent-light border-l-4 border-primary rounded-r-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">💡</span>
                <h3 className="text-lg font-bold text-text-primary">
                  Insider Tips
                </h3>
              </div>
              <ul className="space-y-3">
                {biz.tips.map((tip) => (
                  <li key={tip.title} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <span className="font-semibold text-text-primary text-sm">
                        {tip.title}
                      </span>
                      <p className="text-sm text-text-muted">
                        {tip.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* What to Expect */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                What to Expect
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {expectItems.map((item) => (
                  <div
                    key={item.label}
                    className="bg-surface rounded-xl p-5 border border-border"
                  >
                    <div className="text-primary mb-3">{item.icon}</div>
                    <h4 className="font-semibold text-text-primary text-sm mb-1">
                      {item.label}
                    </h4>
                    <p className="text-sm text-text-muted">{item.value}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-20 space-y-6">
              {/* Hours */}
              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-text-primary">
                    Today&apos;s Hours
                  </h3>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      openNow
                        ? "bg-open-green/10 text-open-green"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {openNow ? "OPEN NOW" : "CLOSED"}
                  </span>
                </div>
                <ul className="space-y-2">
                  {biz.hours.map((h, i) => (
                    <li
                      key={h.day}
                      className={`flex items-center justify-between text-sm py-1.5 px-2 rounded ${
                        i === todayIdx
                          ? "bg-accent-light font-semibold text-text-primary"
                          : "text-text-muted"
                      }`}
                    >
                      <span>{h.day}</span>
                      <span
                        className={
                          h.hours === "Closed" ? "text-red-500" : ""
                        }
                      >
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map & Contact */}
              <div className="bg-white rounded-xl border border-border overflow-hidden">
                <div className="h-40 bg-surface">
                  <iframe
                    title={`Map of ${biz.name}`}
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-93.80%2C44.84%2C-93.77%2C44.86&layer=mapnik&marker=44.8522%2C-93.7872"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="shrink-0">📍</span>
                    <span className="text-text-muted">{biz.address}</span>
                  </div>
                  {biz.phone && (
                    <div className="flex items-start gap-2 text-sm">
                      <span className="shrink-0">📞</span>
                      <a
                        href={`tel:${biz.phone}`}
                        className="text-text-muted hover:text-primary"
                      >
                        {biz.phone}
                      </a>
                    </div>
                  )}
                  {biz.website && (
                    <div className="flex items-start gap-2 text-sm">
                      <span className="shrink-0">🌐</span>
                      <a
                        href={`https://${biz.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {biz.website}
                      </a>
                    </div>
                  )}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(biz.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary hover:bg-primary/90 text-white text-sm font-medium py-3 rounded-lg text-center transition-colors mt-4"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              {/* Share / Save */}
              <div className="flex items-center justify-center gap-4">
                <button className="flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
                <button className="flex items-center gap-1.5 text-sm text-text-muted hover:text-red-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Save
                </button>
                <button className="flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Bookmark
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Discover More Nearby */}
        <section className="mt-16 mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-text-primary">
              Discover More Nearby
            </h2>
            <div className="flex items-center gap-2">
              <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:bg-surface transition-colors">
                &larr;
              </button>
              <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:bg-surface transition-colors">
                &rarr;
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/directory/${r.slug}`}
                className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                    {r.categoryLabel}
                  </span>
                  <h3 className="font-semibold text-sm text-text-primary mt-1">
                    {r.name}
                  </h3>
                  <p className="text-xs text-text-muted mt-1">
                    0.3 miles away
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* JSON-LD LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: biz.name,
            description: biz.description,
            address: {
              "@type": "PostalAddress",
              streetAddress: biz.address,
              addressLocality: "Waconia",
              addressRegion: "MN",
              postalCode: "55387",
            },
            telephone: biz.phone || undefined,
            url: biz.website
              ? `https://${biz.website}`
              : `${SITE_URL}/directory/${biz.slug}`,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: biz.rating,
              ratingCount:
                parseInt(biz.reviewCount.replace(/[^\d]/g, ""), 10) || 100,
            },
          }),
        }}
      />
    </>
  );
}
