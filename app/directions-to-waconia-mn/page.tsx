import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/metadata";
import PageHeader from "@/app/components/PageHeader";
import CTAButton from "@/app/components/CTAButton";
import StatsBar from "@/app/components/StatsBar";

export const metadata: Metadata = buildMetadata({
  title: "Directions to Waconia, MN",
  description:
    "How to get to Waconia, Minnesota from Minneapolis, St. Paul, and surrounding cities. Routes, drive times, and quick facts.",
  path: "/directions-to-waconia-mn",
});

const routes = [
  {
    from: "Minneapolis",
    distance: "~30 miles",
    time: "~40 minutes",
    directions: "Take MN-7 West through Minnetonka and Victoria, straight into Waconia. The simplest and most scenic route.",
    mapsUrl: "https://www.google.com/maps/dir/Minneapolis,+MN/Waconia,+MN+55387",
  },
  {
    from: "St. Paul",
    distance: "~45 miles",
    time: "~50 minutes",
    directions: "Take I-494 West to MN-5 West, then south on MN-41 into Waconia. Or take MN-7 West from the western suburbs.",
    mapsUrl: "https://www.google.com/maps/dir/St+Paul,+MN/Waconia,+MN+55387",
  },
  {
    from: "Eden Prairie",
    distance: "~18 miles",
    time: "~25 minutes",
    directions: "Head west on MN-5 to MN-41 South, or take Pioneer Trail west directly into Waconia.",
    mapsUrl: "https://www.google.com/maps/dir/Eden+Prairie,+MN/Waconia,+MN+55387",
  },
  {
    from: "Chanhassen",
    distance: "~12 miles",
    time: "~15 minutes",
    directions: "Take MN-5 West to MN-41 South into Waconia. Quick and easy.",
    mapsUrl: "https://www.google.com/maps/dir/Chanhassen,+MN/Waconia,+MN+55387",
  },
  {
    from: "Shakopee",
    distance: "~16 miles",
    time: "~20 minutes",
    directions: "Take MN-41 North/West directly into Waconia from Shakopee.",
    mapsUrl: "https://www.google.com/maps/dir/Shakopee,+MN/Waconia,+MN+55387",
  },
];

export default function DirectionsPage() {
  return (
    <>
      <PageHeader
        title="Directions to Waconia, MN"
        description="Waconia is conveniently located about 30 miles west of Minneapolis in Carver County. Here's how to get here."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Directions" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Facts */}
        <div className="mb-12">
          <StatsBar
            stats={[
              { icon: "📮", value: "55387", label: "ZIP Code" },
              { icon: "🏔️", value: "Carver", label: "County" },
              { icon: "📍", value: "~30 mi", label: "From Minneapolis" },
              { icon: "📞", value: "952", label: "Area Code" },
            ]}
          />
        </div>

        {/* Route Cards */}
        <h2 className="text-2xl font-bold text-body tracking-tight mb-6">Driving Directions</h2>
        <div className="space-y-4 mb-12">
          {routes.map((route) => (
            <div key={route.from} className="bg-white rounded-xl border border-gray-100 p-6 card-hover">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-body mb-1">
                    From {route.from}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-2">{route.directions}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-lake font-medium">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                      </svg>
                      {route.distance}
                    </span>
                    <span className="flex items-center gap-1 text-muted">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {route.time}
                    </span>
                  </div>
                </div>
                <CTAButton href={route.mapsUrl} variant="primary" size="sm" external>
                  Get Directions
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
