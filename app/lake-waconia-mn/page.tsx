import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/metadata";
import HeroSection from "@/app/components/HeroSection";
import StatsBar from "@/app/components/StatsBar";

export const metadata: Metadata = buildMetadata({
  title: "Lake Waconia — Fishing, Beaches & Boating",
  description:
    "Lake Waconia is a 2,552-acre lake in Carver County, Minnesota. Fishing, beaches, boat launches, and winter activities. Your complete guide.",
  path: "/lake-waconia-mn",
});

const activities = [
  {
    icon: "🎣",
    title: "Fishing",
    description:
      "Lake Waconia is a premier fishing destination in the Twin Cities metro. The lake supports strong populations of walleye, largemouth bass, northern pike, and panfish. The DNR regularly stocks walleye, and the lake's structure offers excellent shoreline and open-water opportunities.",
    details: [
      "Walleye, largemouth bass, northern pike, crappie, bluegill",
      "DNR-stocked walleye program",
      "Multiple public fishing piers",
      "Ice fishing popular November through March",
    ],
  },
  {
    icon: "🏖️",
    title: "Beaches & Swimming",
    description:
      "Lake Waconia Regional Park features a sandy swimming beach with lifeguards on duty during summer months. Clean, well-maintained facilities with restrooms, picnic areas, and playground equipment.",
    details: [
      "Sandy beach at Lake Waconia Regional Park",
      "Lifeguards on duty (summer)",
      "Restrooms and changing facilities",
      "Picnic shelters and playgrounds nearby",
    ],
  },
  {
    icon: "🚤",
    title: "Boat Launches",
    description:
      "Several public boat launches provide access to Lake Waconia. Concrete ramps accommodate all boat sizes, with parking for vehicles and trailers. Launches can get busy on summer weekends, so plan accordingly.",
    details: [
      "Lake Waconia Regional Park launch (Carver County)",
      "Concrete ramps with trailer parking",
      "No-wake zones near shoreline",
      "Arrive early on weekends for best parking",
    ],
  },
  {
    icon: "❄️",
    title: "Winter Activities",
    description:
      "Winter transforms Lake Waconia into a hub of cold-weather fun. Ice fishing houses dot the lake from December through March, and the cleared paths make for great cross-country skiing and snowshoeing.",
    details: [
      "Ice fishing for walleye, pike, and panfish",
      "Ice skating on cleared areas",
      "Cross-country skiing at the regional park",
      "Snowmobiling (designated trails)",
    ],
  },
  {
    icon: "🌳",
    title: "Lake Waconia Regional Park",
    description:
      "Operated by Carver County, the regional park offers year-round recreation on the southwest shore of Lake Waconia. Hiking trails, picnic areas, a swimming beach, boat launch, and beautiful lake views.",
    details: [
      "Hiking and walking trails",
      "Picnic shelters (reservable)",
      "Playground and open green space",
      "Free park admission, parking fees may apply",
    ],
  },
];

export default function LakeWaconiaPage() {
  return (
    <>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600"
        headline="Lake Waconia"
        subhead="2,552 acres of fishing, boating, beaches, and year-round recreation in Carver County, Minnesota"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="-mt-20 relative z-20 mb-12">
          <StatsBar
            stats={[
              { icon: "🌊", value: "2,552", label: "Acres" },
              { icon: "📏", value: "43 ft", label: "Max Depth" },
              { icon: "🏔️", value: "Carver County", label: "Location" },
              { icon: "🎣", value: "Walleye", label: "Top Fish" },
            ]}
          />
        </div>

        {/* Activities */}
        <div className="space-y-8">
          {activities.map((activity) => (
            <section
              key={activity.title}
              className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">{activity.icon}</span>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-body tracking-tight mb-3">
                    {activity.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">{activity.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {activity.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted">
                        <svg className="w-4 h-4 text-lake flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
