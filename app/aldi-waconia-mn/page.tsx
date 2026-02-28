import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/metadata";
import PageHeader from "@/app/components/PageHeader";
import HoursTable from "@/app/components/HoursTable";
import CTAButton from "@/app/components/CTAButton";

export const metadata: Metadata = buildMetadata({
  title: "Aldi Waconia, MN — Hours, Location & Tips",
  description:
    "Aldi grocery store in Waconia, MN. Hours, location, shopping tips, and what to know before you go. 875 Marketplace Dr, Waconia, MN 55387.",
  path: "/aldi-waconia-mn",
});

const hours = [
  { day: "Monday", hours: "9:00 AM – 8:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 8:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 8:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 8:00 PM" },
  { day: "Friday", hours: "9:00 AM – 8:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 8:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 7:00 PM" },
];

const tips = [
  {
    icon: "🪙",
    title: "Bring a Quarter",
    desc: "You'll need a quarter to unlock a shopping cart. You get it back when you return the cart.",
  },
  {
    icon: "🛍️",
    title: "Bring Your Own Bags",
    desc: "Aldi doesn't provide free bags. Bring reusable bags or purchase bags at checkout.",
  },
  {
    icon: "💳",
    title: "Payment Methods",
    desc: "Aldi accepts debit/credit cards, EBT/SNAP, contactless pay, and Aldi gift cards. No checks.",
  },
  {
    icon: "🏷️",
    title: "Aldi Finds",
    desc: "Check the weekly Aldi Finds aisle for limited-time deals on seasonal and specialty items.",
  },
  {
    icon: "🕐",
    title: "Best Time to Shop",
    desc: "Weekday mornings are the least busy. Avoid Saturday mid-morning for shorter lines.",
  },
  {
    icon: "✅",
    title: "Twice as Nice Guarantee",
    desc: "Not happy with an Aldi-exclusive product? They'll replace it AND refund you.",
  },
];

export default function AldiPage() {
  return (
    <>
      <PageHeader
        title="Aldi — Waconia, MN"
        description="Affordable groceries in Waconia. Here's everything you need to know about the Aldi on Marketplace Drive."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Aldi Waconia" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <HoursTable hours={hours} />
            <div className="mt-4 bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-bold text-body mb-3">Location</h3>
              <div className="space-y-2 text-sm text-muted">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-lake" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  875 Marketplace Dr, Waconia, MN 55387
                </p>
              </div>
              <div className="mt-4">
                <CTAButton
                  href="https://www.google.com/maps/dir//875+Marketplace+Dr,+Waconia,+MN+55387"
                  variant="primary"
                  size="md"
                  external
                >
                  Get Directions
                </CTAButton>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-body tracking-tight mb-6">Shopping Tips</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {tips.map((tip) => (
                <div key={tip.title} className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-3">
                  <span className="text-2xl">{tip.icon}</span>
                  <div>
                    <h3 className="font-semibold text-body text-sm">{tip.title}</h3>
                    <p className="text-muted text-sm">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GroceryStore",
            name: "Aldi — Waconia",
            address: {
              "@type": "PostalAddress",
              streetAddress: "875 Marketplace Dr",
              addressLocality: "Waconia",
              addressRegion: "MN",
              postalCode: "55387",
            },
            openingHoursSpecification: [
              { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "20:00" },
              { dayOfWeek: "Sunday", opens: "10:00", closes: "19:00" },
            ],
          }),
        }}
      />
    </>
  );
}
