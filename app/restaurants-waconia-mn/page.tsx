import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/metadata";
import PageHeader from "@/app/components/PageHeader";
import InfoCard from "@/app/components/InfoCard";

export const metadata: Metadata = buildMetadata({
  title: "Best Restaurants in Waconia, MN",
  description:
    "Discover the best restaurants in Waconia, Minnesota. From breakfast spots to craft breweries, here are the local favorites.",
  path: "/restaurants-waconia-mn",
});

const restaurants = [
  {
    icon: "🥞",
    title: "Egg-Cetera Cafe",
    description:
      "Waconia's beloved breakfast and brunch spot. Serving hearty, made-from-scratch meals all day long. The pancakes are legendary, and the coffee flows freely. A local favorite for weekend mornings with the family.",
    address: "Downtown Waconia",
    tag: "Breakfast & Brunch",
    tagColor: "bg-yellow-50 text-yellow-700",
    whatToOrder: "Buttermilk pancakes, eggs benedict, biscuits & gravy",
  },
  {
    icon: "🍔",
    title: "Iron Tap",
    description:
      "Craft cocktails, premium burgers, and a lively downtown vibe. The Father Bob Burger is a must-try — a local legend. Great happy hour specials and a well-curated tap list. Perfect for date night or gathering with friends.",
    address: "224 W Main St, Waconia",
    tag: "Burgers & Cocktails",
    tagColor: "bg-red-50 text-red-700",
    whatToOrder: "Father Bob Burger, craft cocktails, loaded tots",
  },
  {
    icon: "🎳",
    title: "Garage Bowling & Bar",
    description:
      "More than just bowling — Garage is a full-service restaurant and bar with a fun, casual atmosphere. Great burgers, shareables, and a massive drink menu. Bring the kids for bowling, stay for dinner.",
    address: "Waconia, MN",
    tag: "Casual Dining",
    tagColor: "bg-purple-50 text-purple-700",
    whatToOrder: "Loaded nachos, smash burger, craft beer flights",
  },
  {
    icon: "🍺",
    title: "Waconia Brewing Co",
    description:
      "Waconia's own craft brewery with a spacious taproom and patio. Rotating food trucks park outside, and the beers are brewed right on site. A great community hangout for all ages (yes, kids are welcome).",
    address: "Waconia, MN",
    tag: "Brewery & Taproom",
    tagColor: "bg-amber-50 text-amber-700",
    whatToOrder: "Flagship IPA, seasonal brew, whatever the food truck is serving",
  },
  {
    icon: "🍷",
    title: "St. Boni's Bistro",
    description:
      "A charming bistro in nearby St. Bonifacius offering elevated comfort food and a solid wine list. Cozy atmosphere, friendly staff, and consistently great food. Worth the short drive from Waconia.",
    address: "St. Bonifacius, MN",
    tag: "Bistro & Wine",
    tagColor: "bg-rose-50 text-rose-700",
    whatToOrder: "Weekly specials, walleye, any dessert",
  },
];

export default function RestaurantsPage() {
  return (
    <>
      <PageHeader
        title="Restaurants in Waconia, MN"
        description="From cozy breakfast spots to craft breweries, Waconia's dining scene punches well above its weight. Here are the local favorites."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Restaurants" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {restaurants.map((r) => (
            <div key={r.title} className="bg-white rounded-xl border border-gray-100 p-6 card-hover">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{r.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="font-bold text-lg text-body">{r.title}</h2>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${r.tagColor}`}>
                      {r.tag}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-3">{r.description}</p>
                  <div className="bg-lake-50 rounded-lg p-3 mb-3">
                    <p className="text-sm font-medium text-lake">
                      What to order: <span className="font-normal text-lake-800">{r.whatToOrder}</span>
                    </p>
                  </div>
                  <p className="text-sm text-muted flex items-center gap-1.5">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {r.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
