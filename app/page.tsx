import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px]">
        <Image
          src="/images/hero-lake-waconia.png"
          alt="Aerial view of Lake Waconia Minnesota at golden hour sunset with marina and tree-lined shoreline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
              Your Definitive Travel Guide
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Experience Lake Waconia
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Your definitive guide to Minnesota&apos;s premier destination for
              boating, world-class fishing, and serene lakeside living.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/guides/lake-waconia"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3.5 rounded-full transition-colors inline-flex items-center gap-2"
              >
                Plan Your Visit
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/guides/lake-waconia-fishing"
                className="border-2 border-white/80 hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded-full transition-colors"
              >
                View Live Webcam
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-border p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📏", label: "Maximum Depth", value: "37 Feet" },
              { icon: "🗺", label: "Surface Area", value: "3,080 Acres" },
              { icon: "🐟", label: "Fish Species", value: "Walleye, Bass" },
              { icon: "💧", label: "Water Clarity", value: "12.5 Feet" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-2xl mb-2 block">{stat.icon}</span>
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

      {/* Activities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight">
              Activities
            </h2>
            <p className="text-text-muted mt-2">
              From dawn to dusk, adventure awaits on the water
            </p>
          </div>
          <Link
            href="/guides/lake-waconia"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View All <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Boating Card */}
          <div className="group rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/boating-lake-waconia.png"
                alt="Family on a pontoon boat on Lake Waconia Minnesota on a sunny summer afternoon"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Premium Rentals
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Boating &amp; Sailing
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                From pontoon rentals to sailing lessons, Lake Waconia offers
                3,080 acres of pristine water for every kind of boating
                adventure.
              </p>
              <Link
                href="/guides/lake-waconia"
                className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1"
              >
                Marina Services <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Fishing Card */}
          <div className="group rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/fishing-lake-waconia.png"
                alt="Walleye fisherman casting from a boat on Lake Waconia Minnesota at dawn"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Local Expert
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Professional Fishing
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Lake Waconia is one of Minnesota&apos;s top walleye
                destinations. Hire a local guide or launch your own boat from
                three public access points.
              </p>
              <Link
                href="/guides/lake-waconia-fishing"
                className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1"
              >
                Fishing Reports <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Section (dark) */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
                Waterfront Culinary
              </span>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
                Dining on the Water
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Waconia&apos;s dining scene blends lakeside ambiance with
                farm-to-table freshness. From craft breweries to beloved burger
                joints, downtown delivers flavor with every visit.
              </p>
              <div className="space-y-4">
                <Link
                  href="/directory/iron-tap"
                  className="flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-colors group"
                >
                  <div>
                    <h3 className="text-white font-semibold">Iron Tap</h3>
                    <p className="text-sm text-gray-400">
                      Downtown&apos;s favorite burger &amp; craft cocktails
                    </p>
                  </div>
                  <span className="text-primary group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </Link>
                <Link
                  href="/directory/waconia-brewing-company"
                  className="flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-colors group"
                >
                  <div>
                    <h3 className="text-white font-semibold">Waconia Brewing Co.</h3>
                    <p className="text-sm text-gray-400">
                      Award-winning craft brewery &amp; taproom since 2014
                    </p>
                  </div>
                  <span className="text-primary group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative h-80 w-full">
                <div className="absolute top-0 right-0 w-3/4 h-64 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/dining-iron-tap.png"
                    alt="Craft burgers and beer at Iron Tap restaurant in downtown Waconia Minnesota"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-2/3 h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-navy">
                  <Image
                    src="/images/brewing-waconia.png"
                    alt="Craft beer flight at Waconia Brewing Company taproom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/conservation-lake-waconia.png"
                alt="Native prairie wildflowers along the Lake Waconia Minnesota shoreline conservation area"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-open-green text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              2024 Project
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-6">
              Conservation &amp; Stewardship
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Lake Waconia&apos;s pristine waters are the result of decades of
              dedicated conservation work. Local organizations and volunteers
              work year-round to protect this irreplaceable natural resource for
              future generations.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-open-green mt-0.5 shrink-0"
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
                <span className="text-text-primary text-sm">
                  Aquatic Invasive Species Prevention
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-open-green mt-0.5 shrink-0"
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
                <span className="text-text-primary text-sm">
                  Water Quality Monitoring
                </span>
              </li>
            </ul>
            <Link
              href="/guides/lake-waconia"
              className="inline-flex items-center gap-2 bg-open-green hover:bg-open-green/90 text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              Get Involved 🌿
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Map CTA */}
      <section className="bg-surface py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-10">
            <div className="w-16 h-16 bg-accent-light rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              Explore Interactive Map
            </h3>
            <p className="text-text-muted mb-6">
              Discover boat launches, parks, restaurants, and all the best spots
              around Lake Waconia.
            </p>
            <Link
              href="/directory"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-full transition-colors"
            >
              Open Full Map
            </Link>
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
            name: "WaconiaGuide",
            url: "https://waconiaminnesota.org",
            description:
              "Your definitive guide to Waconia, Minnesota. Discover local dining, events, lake activities, and everything that makes this lakeside community unique.",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://waconiaminnesota.org/directory?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}
