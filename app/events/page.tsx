import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "../lib/metadata";
import { getUpcomingEvents } from "../lib/events";

export const metadata: Metadata = buildMetadata({
  title: "Local Events — Waconia, Minnesota",
  description:
    "Upcoming events in Waconia, MN — Nickle Dickle Day, Farmers Market, Carver County Fair, Scarecrow Tour, and more community happenings.",
  path: "/events",
});

const categoryColors: Record<string, string> = {
  Festival:      "bg-amber-100 text-amber-700",
  Market:        "bg-emerald-100 text-emerald-700",
  Community:     "bg-blue-100 text-blue-700",
  Entertainment: "bg-purple-100 text-purple-700",
  Sports:        "bg-cyan-100 text-cyan-700",
  Holiday:       "bg-red-100 text-red-700",
};

export default function EventsPage() {
  const events = getUpcomingEvents();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
          Local Events
        </h1>
        <p className="text-text-muted mt-2">
          What&apos;s happening in Waconia — from lakeside festivals to weekly markets.
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {["All", "Festival", "Market", "Community", "Entertainment", "Holiday"].map((f) => (
          <span
            key={f}
            className="px-4 py-2 text-sm font-medium text-text-muted bg-surface rounded-full border border-border"
          >
            {f}
          </span>
        ))}
      </div>

      {/* Event list */}
      <div className="space-y-6">
        {events.map((event) => (
          <Link
            key={event.slug}
            href={`/events/${event.slug}`}
            className="block bg-white rounded-xl border border-border overflow-hidden hover:shadow-md hover:border-primary/30 transition-all group"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div className="relative w-full sm:w-64 shrink-0 aspect-[4/3] sm:aspect-auto sm:h-auto min-h-[160px]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[event.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {event.category}
                  </span>
                  {event.free && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                      Free
                    </span>
                  )}
                  {event.recurring && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">
                      Recurring
                    </span>
                  )}
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  {event.recurringNote ?? event.date}
                </p>

                <h2 className="text-xl font-bold text-text-primary mb-1 group-hover:text-primary transition-colors">
                  {event.title}
                </h2>
                <p className="text-sm text-text-muted flex items-center gap-1 mb-3">
                  📍 {event.venue}
                </p>
                <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="w-7 h-7 rounded-full bg-accent-light border-2 border-white flex items-center justify-center text-[10px] font-bold text-primary">
                          {String.fromCharCode(65 + j)}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-text-muted">+{event.attendees.toLocaleString()} interested</span>
                  </div>
                  <span className="text-sm font-medium text-primary group-hover:text-primary/80 inline-flex items-center gap-1">
                    View Details <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
