import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/metadata";
import PageHeader from "@/app/components/PageHeader";
import InfoCard from "@/app/components/InfoCard";

export const metadata: Metadata = buildMetadata({
  title: "Things To Do in Waconia, MN",
  description:
    "Discover the best things to do in Waconia, Minnesota. Lake activities, bowling, movies, breweries, parks, and seasonal events.",
  path: "/things-to-do-waconia-mn",
});

const activities = [
  {
    icon: "🌊",
    title: "Lake Waconia",
    description: "2,552 acres of fishing, swimming, boating, and winter activities. The crown jewel of Waconia.",
    href: "/lake-waconia-mn",
    tag: "Outdoors",
    tagColor: "bg-blue-50 text-blue-700",
  },
  {
    icon: "🎬",
    title: "Emagine Theater",
    description: "Luxury recliners, EMAX large-format screens, and a full bar. The best movie experience in the west metro.",
    href: "/emagine-waconia-mn",
    tag: "Entertainment",
    tagColor: "bg-purple-50 text-purple-700",
  },
  {
    icon: "🍺",
    title: "Waconia Brewing Co",
    description: "Local craft brewery with a taproom, rotating food trucks, and a great patio for all ages.",
    tag: "Brewery",
    tagColor: "bg-amber-50 text-amber-700",
  },
  {
    icon: "🎳",
    title: "Garage Bowling & Bar",
    description: "Bowling lanes, full bar, restaurant, and cosmic bowling nights. Fun for families and groups.",
    tag: "Recreation",
    tagColor: "bg-green-50 text-green-700",
  },
  {
    icon: "🦁",
    title: "Safari Island",
    description: "Indoor playground and party venue for kids. Climbing structures, slides, and arcade games.",
    tag: "Family",
    tagColor: "bg-pink-50 text-pink-700",
  },
  {
    icon: "🏛️",
    title: "Carver County Historical Society",
    description: "Learn about the history of Carver County and the Waconia area through exhibits and archives.",
    tag: "History",
    tagColor: "bg-gray-100 text-gray-700",
  },
  {
    icon: "🏖️",
    title: "Lake Waconia Regional Park",
    description: "Sandy beach, hiking trails, picnic shelters, and playground. Free admission, parking fees may apply.",
    tag: "Parks",
    tagColor: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: "🎣",
    title: "Fishing",
    description: "Walleye, bass, pike, and panfish. Public piers and boat launches available around the lake.",
    href: "/lake-waconia-mn",
    tag: "Outdoors",
    tagColor: "bg-blue-50 text-blue-700",
  },
];

const seasonal = [
  {
    season: "Summer",
    icon: "☀️",
    color: "border-amber-200 bg-amber-50",
    items: [
      "Swimming at Lake Waconia Regional Park beach",
      "Boating, kayaking, and paddleboarding",
      "Fishing for walleye and bass",
      "Waconia Brewing patio + food trucks",
      "Farmers market downtown",
    ],
  },
  {
    season: "Fall",
    icon: "🍂",
    color: "border-orange-200 bg-orange-50",
    items: [
      "Fall colors along the lakeshore",
      "Apple picking and corn mazes nearby",
      "Hiking at the regional park",
      "Football season at Waconia High School",
      "Cozy dinners at St. Boni's Bistro",
    ],
  },
  {
    season: "Winter",
    icon: "❄️",
    color: "border-blue-200 bg-blue-50",
    items: [
      "Ice fishing on Lake Waconia",
      "Cross-country skiing at the regional park",
      "Bowling nights at Garage",
      "Movies at Emagine Theater",
      "Holiday events downtown",
    ],
  },
  {
    season: "Spring",
    icon: "🌷",
    color: "border-green-200 bg-green-50",
    items: [
      "Fishing opener in May",
      "Bike rides on county trails",
      "Outdoor dining returns",
      "Park shelters open for the season",
      "Community cleanup events",
    ],
  },
];

export default function ThingsToDoPage() {
  return (
    <>
      <PageHeader
        title="Things To Do in Waconia"
        description="Lake activities, entertainment, dining, and seasonal fun. There's always something happening in Waconia."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Things To Do" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Activities Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-body tracking-tight mb-6">Popular Activities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <InfoCard key={activity.title} {...activity} />
            ))}
          </div>
        </section>

        {/* Seasonal */}
        <section>
          <h2 className="text-2xl font-bold text-body tracking-tight mb-6">Waconia by Season</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {seasonal.map((s) => (
              <div key={s.season} className={`rounded-xl border p-6 ${s.color}`}>
                <h3 className="text-lg font-bold text-body flex items-center gap-2 mb-4">
                  <span className="text-2xl">{s.icon}</span>
                  {s.season}
                </h3>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-body/80">
                      <span className="text-lake mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
