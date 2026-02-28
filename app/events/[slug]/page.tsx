import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events, getEventBySlug } from "../../lib/events";
import { buildMetadata } from "../../lib/metadata";
import { Breadcrumb } from "../../components/Breadcrumb";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return buildMetadata({
    title: `${event.title} — Waconia, MN`,
    description: event.description,
    path: `/events/${slug}`,
  });
}

const categoryColors: Record<string, string> = {
  Festival:      "bg-amber-100 text-amber-700",
  Market:        "bg-emerald-100 text-emerald-700",
  Community:     "bg-blue-100 text-blue-700",
  Entertainment: "bg-purple-100 text-purple-700",
  Sports:        "bg-cyan-100 text-cyan-700",
  Holiday:       "bg-red-100 text-red-700",
};

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: "Events", href: "/events" }, { label: event.title }]} />

      {/* Hero image */}
      <div className="relative aspect-[16/7] rounded-2xl overflow-hidden mt-6 mb-8">
        <Image src={event.image} alt={event.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[event.category] ?? "bg-gray-100 text-gray-600"}`}>
              {event.category}
            </span>
            {event.free && <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">Free</span>}
            {event.recurring && <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">Recurring</span>}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{event.title}</h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">

          {/* Description */}
          <div>
            <p className="text-text-muted leading-relaxed text-base">{event.longDescription}</p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-4">What to Expect</h2>
            <ul className="space-y-3">
              {event.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-primary text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Sidebar */}
        <div className="space-y-4">

          {/* Event info card */}
          <div className="bg-surface rounded-2xl border border-border p-6 sticky top-20">
            <h3 className="font-bold text-text-primary mb-4">Event Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-xl">📅</span>
                <div>
                  <p className="font-medium text-text-primary">{event.recurring ? "Recurring" : "Date"}</p>
                  <p className="text-text-muted">{event.recurringNote ?? event.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-medium text-text-primary">{event.venue}</p>
                  <p className="text-text-muted">{event.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🎟</span>
                <div>
                  <p className="font-medium text-text-primary">Admission</p>
                  <p className="text-text-muted">{event.free ? "Free" : "Paid admission"}</p>
                </div>
              </div>
            </div>

            {event.website && (
              <a
                href={event.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full block text-center bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
              >
                Official Website →
              </a>
            )}

            <Link
              href="/events"
              className="mt-3 w-full block text-center border border-border hover:border-primary/40 text-text-muted hover:text-primary font-medium px-6 py-3 rounded-full transition-colors text-sm"
            >
              ← All Events
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
