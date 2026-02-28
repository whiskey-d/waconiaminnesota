import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/metadata";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = buildMetadata({
  title: "Bars & Nightlife in Waconia, MN",
  description:
    "Discover the best bars, breweries, and nightlife in Waconia, Minnesota. Craft cocktails, local brews, bowling, and more.",
  path: "/bars-waconia-mn",
});

const bars = [
  {
    icon: "🍸",
    title: "Iron Tap",
    vibe: "Upscale Casual",
    vibeColor: "bg-red-50 text-red-700",
    description:
      "Downtown Waconia's go-to for craft cocktails and a curated tap list. The bar scene is lively without being overwhelming — perfect for date night or meeting friends after work. Great happy hour specials and a menu that goes well beyond bar food.",
    address: "224 W Main St, Waconia, MN",
    highlight: "Try the craft cocktails and Father Bob Burger",
  },
  {
    icon: "🎳",
    title: "Garage Bowling & Bar",
    vibe: "Fun & Casual",
    vibeColor: "bg-purple-50 text-purple-700",
    description:
      "Part bowling alley, part full-service bar and restaurant. Garage brings a fun, family-friendly atmosphere during the day that transitions to a lively nightlife spot on weekends. League nights, cosmic bowling, and a solid drink menu.",
    address: "Waconia, MN",
    highlight: "Cosmic bowling nights + craft beer flights",
  },
  {
    icon: "🍺",
    title: "Waconia Brewing Co",
    vibe: "Taproom & Patio",
    vibeColor: "bg-amber-50 text-amber-700",
    description:
      "Waconia's hometown brewery with a laid-back taproom and one of the best patios in town. Rotating food trucks keep things interesting, and the beer is brewed right on site. A true community gathering spot — bring the family, the dog, and your appetite.",
    address: "Waconia, MN",
    highlight: "Rotating food trucks + patio vibes",
  },
  {
    icon: "🍷",
    title: "St. Boni's Bistro",
    vibe: "Cozy Bistro",
    vibeColor: "bg-rose-50 text-rose-700",
    description:
      "Just a short drive from Waconia in St. Bonifacius, St. Boni's offers a more intimate bar and dining experience. Solid wine list, craft cocktails, and a warm, inviting atmosphere. Great spot for a quieter evening out.",
    address: "St. Bonifacius, MN",
    highlight: "Wine list + elevated bar bites",
  },
];

export default function BarsPage() {
  return (
    <>
      <PageHeader
        title="Bars & Nightlife in Waconia"
        description="Craft cocktails, local breweries, bowling nights, and bistro vibes. Waconia's nightlife has something for every mood."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Bars & Nightlife" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {bars.map((bar) => (
            <div key={bar.title} className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 card-hover">
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="text-4xl flex-shrink-0">{bar.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h2 className="text-xl font-bold text-body">{bar.title}</h2>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${bar.vibeColor}`}>
                      {bar.vibe}
                    </span>
                  </div>
                  <p className="text-muted leading-relaxed mb-4">{bar.description}</p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:items-center text-sm">
                    <span className="flex items-center gap-1.5 text-muted">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {bar.address}
                    </span>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <span className="text-lake font-medium">{bar.highlight}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
