import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Local Events — Waconia, Minnesota",
  description:
    "Curated discoveries in Waconia, Minnesota. From lakeside festivals to local markets, find events happening near you.",
  path: "/events",
});

interface Event {
  title: string;
  date: string;
  recurring: boolean;
  venue: string;
  description: string;
  image: string;
  attendees: number;
}

const events: Event[] = [
  {
    title: "Waconia Harvest Festival",
    date: "September 24, 2025",
    recurring: false,
    venue: "City Square Park",
    description:
      "Annual autumn celebration featuring local vendors, live music, food trucks, and family activities. The harvest festival is Waconia's signature fall event, drawing visitors from across the metro for a full day of community fun.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    attendees: 342,
  },
  {
    title: "Farmers Market at the Lake",
    date: "Every Saturday",
    recurring: true,
    venue: "Lake Waconia Regional Park",
    description:
      "The best local produce, artisan crafts, fresh baked goods, and live music every Saturday morning from May through October. Support local growers and makers while enjoying the lakeside setting.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400",
    attendees: 128,
  },
  {
    title: "Acoustic Lakeside Sessions",
    date: "October 12, 2025",
    recurring: false,
    venue: "The Dockside Cafe",
    description:
      "An intimate evening of live music from local singer-songwriters. Enjoy craft cocktails and lakeside vibes as talented local musicians perform original works in an unforgettable setting.",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    attendees: 64,
  },
  {
    title: "Waconia Trivia Night",
    date: "Every Wednesday",
    recurring: true,
    venue: "Waconia Brewing Co",
    description:
      "Team trivia with prizes, craft beer specials, and a lively atmosphere. Bring your crew and compete for glory at Waconia's most popular weekly event. No registration needed.",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400",
    attendees: 86,
  },
  {
    title: "Lake Waconia Fishing Tournament",
    date: "August 16, 2025",
    recurring: false,
    venue: "Lake Waconia",
    description:
      "Annual walleye tournament open to all skill levels. Cash prizes for biggest catch, youth divisions, and a lakeside awards ceremony. Pre-registration required.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
    attendees: 215,
  },
];

const filters = ["Festivals", "Markets", "Community", "More Filters"];

export default function EventsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Local Events
          </h1>
          <p className="text-text-muted mt-2">
            Curated discoveries in Waconia, Minnesota. From lakeside festivals
            to local markets.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg">
            List
          </button>
          <button className="px-4 py-2 text-sm font-medium text-text-muted bg-surface rounded-lg hover:bg-border transition-colors">
            Calendar
          </button>
        </div>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            className="px-4 py-2 text-sm font-medium text-text-muted bg-surface rounded-full hover:bg-border transition-colors"
          >
            {f}
          </button>
        ))}
      </div>

      {/* Event list */}
      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.title}
            className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div className="relative w-full sm:w-72 shrink-0 aspect-[4/3] sm:aspect-auto">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center shrink-0">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {event.recurring
                        ? event.date.toUpperCase()
                        : event.date.toUpperCase()}
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-text-muted flex items-center gap-1 mb-3">
                  📍 {event.venue}
                </p>
                <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  {/* Attendee avatars */}
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, j) => (
                        <div
                          key={j}
                          className="w-7 h-7 rounded-full bg-accent-light border-2 border-white flex items-center justify-center text-[10px] font-bold text-primary"
                        >
                          {String.fromCharCode(65 + j)}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-text-muted">
                      +{event.attendees} interested
                    </span>
                  </div>

                  <Link
                    href="/events"
                    className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1 shrink-0"
                  >
                    View Details <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
