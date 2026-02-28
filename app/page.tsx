import Link from "next/link";
import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";

export const metadata: Metadata = {
  title: "WaconiaMinnesota.org — Your Guide to Waconia, Minnesota",
  description:
    "Your local guide to Waconia, Minnesota — lake living, restaurants, DMV info, events, and community. Discover everything Waconia has to offer.",
  openGraph: {
    title: "WaconiaMinnesota.org — Your Guide to Waconia, Minnesota",
    description:
      "Your local guide to Waconia, Minnesota — lake living, restaurants, DMV info, events, and community.",
    url: "https://waconiaminnesota.org",
    siteName: "WaconiaMinnesota.org",
    locale: "en_US",
    type: "website",
  },
};

const quickNav = [
  { icon: "🚗", title: "DMV / Registrar", desc: "Hours, services & directions", href: "/dmv-waconia-mn" },
  { icon: "🍽️", title: "Restaurants", desc: "Local dining favorites", href: "/restaurants-waconia-mn" },
  { icon: "🌊", title: "Lake Waconia", desc: "Fishing, beaches & boating", href: "/lake-waconia-mn" },
  { icon: "🎯", title: "Things To Do", desc: "Activities for everyone", href: "/things-to-do-waconia-mn" },
  { icon: "🏛️", title: "City Info", desc: "Government & services", href: "/city-of-waconia-mn" },
  { icon: "🍺", title: "Bars & Nightlife", desc: "Breweries, bars & more", href: "/bars-waconia-mn" },
];

const featured = [
  {
    icon: "🍔",
    title: "Iron Tap",
    desc: "Craft cocktails, burgers & the legendary Father Bob Burger in downtown Waconia.",
    tag: "Dining",
  },
  {
    icon: "🎬",
    title: "Emagine Theater",
    desc: "Luxury recliners, EMAX screens, full bar — the best movie experience west of Minneapolis.",
    tag: "Entertainment",
  },
  {
    icon: "🍺",
    title: "Waconia Brewing Co",
    desc: "Local craft brewery with a taproom, rotating food trucks, and a great patio.",
    tag: "Brewery",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600"
        headline="Waconia, Minnesota"
        subhead="Your local guide to lake living, dining, and community"
        ctaText="Explore Waconia"
        ctaHref="#explore"
      />

      {/* Quick Nav Grid */}
      <section id="explore" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white rounded-xl border border-gray-100 p-5 text-center card-hover group"
            >
              <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>
              <h2 className="font-bold text-sm text-body mb-1">{item.title}</h2>
              <p className="text-xs text-muted">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* About Waconia */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-body tracking-tight mb-4">
              Welcome to Waconia
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Nestled on the shores of Lake Waconia in Carver County, Waconia is one of the fastest-growing communities in the western Twin Cities metro. With a charming downtown, excellent schools, and over 2,500 acres of lake to enjoy, it&apos;s the perfect blend of small-town warmth and modern convenience.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Just 30 miles west of Minneapolis, Waconia offers easy access to the metro while maintaining the relaxed pace of lakeside living. Whether you&apos;re here for the fishing, the food, or the community, you&apos;ll find plenty to love.
            </p>
            <Link
              href="/things-to-do-waconia-mn"
              className="text-lake font-semibold hover:text-lake-700 transition-colors inline-flex items-center gap-1"
            >
              Discover things to do
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div>
            <StatsBar
              stats={[
                { icon: "👥", value: "14,000+", label: "Population" },
                { icon: "🌊", value: "2,552", label: "Lake Acres" },
                { icon: "📍", value: "30 mi", label: "From Minneapolis" },
                { icon: "🏫", value: "ISD 110", label: "School District" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-dark py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
            Featured in Waconia
          </h2>
          <p className="text-gray-400 mb-10">Popular spots the locals love.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <span className="text-xs font-medium text-amber px-2 py-0.5 rounded-full bg-amber/10 mb-3 inline-block">
                  {item.tag}
                </span>
                <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "WaconiaMinnesota.org",
            url: "https://waconiaminnesota.org",
            description:
              "Your local guide to Waconia, Minnesota — lake living, restaurants, DMV info, events, and community.",
          }),
        }}
      />
    </>
  );
}
