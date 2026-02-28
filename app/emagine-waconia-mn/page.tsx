import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/metadata";
import PageHeader from "@/app/components/PageHeader";
import CTAButton from "@/app/components/CTAButton";

export const metadata: Metadata = buildMetadata({
  title: "Emagine Theater Waconia, MN — Showtimes, Pricing & Features",
  description:
    "Emagine Theater in Waconia, MN. Luxury recliners, EMAX screens, full bar, and more. 325 Bevens St, Waconia, MN 55387. Showtimes and info.",
  path: "/emagine-waconia-mn",
});

const features = [
  {
    icon: "💺",
    title: "Luxury Recliners",
    desc: "Every seat is a plush, heated leather recliner with a footrest. Reserved seating so you can pick your spot online.",
  },
  {
    icon: "🎬",
    title: "EMAX Large-Format",
    desc: "Premium large-format screen with immersive Dolby Atmos surround sound. The best way to see blockbusters.",
  },
  {
    icon: "🍸",
    title: "Full Bar & Lounge",
    desc: "Craft cocktails, local beers, wine, and premium spirits. Order from the bar or get drinks delivered to your seat.",
  },
  {
    icon: "🍿",
    title: "Enhanced Concessions",
    desc: "Beyond the classic popcorn and candy — think pretzel bites, chicken tenders, nachos, and more.",
  },
  {
    icon: "🎉",
    title: "Private Events",
    desc: "Rent a theater for private screenings, birthday parties, corporate events, or gaming sessions.",
  },
  {
    icon: "♿",
    title: "Accessibility",
    desc: "Wheelchair-accessible seating, assistive listening devices, and closed captioning available.",
  },
];

const pricing = [
  { type: "Matinee (before 4 PM)", price: "$9–$11" },
  { type: "Evening", price: "$12–$15" },
  { type: "EMAX", price: "+$3–$5 surcharge" },
  { type: "Child (2–11)", price: "$9–$11" },
  { type: "Senior (62+)", price: "$9–$11" },
  { type: "Tuesday Special", price: "$6–$8 (all day)" },
];

export default function EmaginePage() {
  return (
    <>
      <PageHeader
        title="Emagine Theater — Waconia, MN"
        description="Luxury recliners, EMAX screens, and a full bar. The best movie experience west of Minneapolis."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Emagine Theater" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Showtimes CTA */}
        <div className="bg-dark rounded-xl p-6 sm:p-8 text-white mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold mb-1">Now Showing</h2>
            <p className="text-gray-400 text-sm">
              Check current showtimes, buy tickets, and reserve your seats online.
            </p>
          </div>
          <CTAButton
            href="https://www.emagine-entertainment.com"
            variant="secondary"
            size="lg"
            external
          >
            View Showtimes
          </CTAButton>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1 text-sm text-muted">
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-lake" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              325 Bevens St, Waconia, MN 55387
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-lake" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (952) 300-5555
            </p>
          </div>
          <CTAButton
            href="https://www.google.com/maps/dir//325+Bevens+St,+Waconia,+MN+55387"
            variant="primary"
            size="sm"
            external
          >
            Get Directions
          </CTAButton>
        </div>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-body tracking-tight mb-6">Theater Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-3">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <h3 className="font-semibold text-body text-sm">{f.title}</h3>
                  <p className="text-muted text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section>
          <h2 className="text-2xl font-bold text-body tracking-tight mb-6">Ticket Pricing</h2>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-50">
              {pricing.map((p) => (
                <div key={p.type} className="flex items-center justify-between px-6 py-3">
                  <span className="text-sm text-body">{p.type}</span>
                  <span className="text-sm font-semibold text-lake">{p.price}</span>
                </div>
              ))}
            </div>
            <div className="px-6 py-3 bg-amber-50 border-t border-amber-100">
              <p className="text-xs text-muted">
                Prices are approximate and may vary. Check the Emagine website for current pricing.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovieTheater",
            name: "Emagine Theater — Waconia",
            address: {
              "@type": "PostalAddress",
              streetAddress: "325 Bevens St",
              addressLocality: "Waconia",
              addressRegion: "MN",
              postalCode: "55387",
            },
            telephone: "(952) 300-5555",
          }),
        }}
      />
    </>
  );
}
