import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/metadata";
import PageHeader from "@/app/components/PageHeader";
import HoursTable from "@/app/components/HoursTable";
import CTAButton from "@/app/components/CTAButton";

export const metadata: Metadata = buildMetadata({
  title: "Great Clips Waconia, MN — Hours, Check-In & Services",
  description:
    "Great Clips in Waconia, MN. Hours, online check-in, services, and pricing. 875 Marketplace Dr Suite 103, Waconia, MN 55387.",
  path: "/great-clips-waconia-mn",
});

const hours = [
  { day: "Monday", hours: "9:00 AM – 8:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 8:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 8:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 8:00 PM" },
  { day: "Friday", hours: "9:00 AM – 8:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 6:00 PM" },
];

const services = [
  { icon: "✂️", name: "Haircut", desc: "Professional haircut for adults, seniors, and kids" },
  { icon: "🧴", name: "Shampoo", desc: "Add a shampoo to any haircut service" },
  { icon: "💇", name: "Neck & Bang Trim", desc: "Quick trim between full haircuts" },
  { icon: "🧔", name: "Beard Trim", desc: "Professional beard shaping and trimming" },
  { icon: "🎨", name: "Hair Styling", desc: "Blowout, flat iron, or curling iron styling" },
  { icon: "👶", name: "Kids' Haircut", desc: "Haircuts for children of all ages" },
];

export default function GreatClipsPage() {
  return (
    <>
      <PageHeader
        title="Great Clips — Waconia, MN"
        description="Affordable haircuts, no appointment necessary. Check in online to skip the wait."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Great Clips Waconia" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Online Check-In CTA */}
        <div className="bg-lake rounded-xl p-6 sm:p-8 text-white mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold mb-1">Skip the Wait — Check In Online</h2>
            <p className="text-white/80 text-sm">
              Use the Great Clips app or website to check in before you arrive. See estimated wait times and get a notification when it&apos;s your turn.
            </p>
          </div>
          <CTAButton
            href="https://www.greatclips.com/salons/9370"
            variant="secondary"
            size="lg"
            external
          >
            Check In Online
          </CTAButton>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <HoursTable hours={hours} />
            <div className="mt-4 bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-bold text-body mb-3">Contact & Location</h3>
              <div className="space-y-2 text-sm text-muted">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-lake" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  875 Marketplace Dr Suite 103, Waconia, MN 55387
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-lake" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (952) 442-4247
                </p>
              </div>
              <div className="mt-4">
                <CTAButton
                  href="https://www.google.com/maps/dir//875+Marketplace+Dr+Suite+103,+Waconia,+MN+55387"
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
            <h2 className="text-2xl font-bold text-body tracking-tight mb-6">Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((svc) => (
                <div key={svc.name} className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-3">
                  <span className="text-2xl">{svc.icon}</span>
                  <div>
                    <h3 className="font-semibold text-body text-sm">{svc.name}</h3>
                    <p className="text-muted text-sm">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-body mb-2">Pricing</h3>
              <p className="text-muted text-sm leading-relaxed">
                Great Clips offers affordable haircuts starting around $18–$20 for adults. Prices may vary by location and service. Senior and kids&apos; haircuts are typically discounted. Check the Great Clips app for current pricing and any available coupons.
              </p>
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
            "@type": "HairSalon",
            name: "Great Clips — Waconia",
            address: {
              "@type": "PostalAddress",
              streetAddress: "875 Marketplace Dr Suite 103",
              addressLocality: "Waconia",
              addressRegion: "MN",
              postalCode: "55387",
            },
            telephone: "(952) 442-4247",
          }),
        }}
      />
    </>
  );
}
