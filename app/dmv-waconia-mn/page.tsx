import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/metadata";
import PageHeader from "@/app/components/PageHeader";
import HoursTable from "@/app/components/HoursTable";
import CTAButton from "@/app/components/CTAButton";
import FAQ from "@/app/components/FAQ";

export const metadata: Metadata = buildMetadata({
  title: "DMV & Deputy Registrar — Waconia, MN",
  description:
    "Waconia DMV / Deputy Registrar hours, services, directions, and fees. Located at 217 Vine St S, Waconia, MN 55387. Tabs, titles, registration, driver's license.",
  path: "/dmv-waconia-mn",
});

const hours = [
  { day: "Monday", hours: "8:00 AM – 4:30 PM" },
  { day: "Tuesday", hours: "8:00 AM – 4:30 PM" },
  { day: "Wednesday", hours: "8:00 AM – 6:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 4:30 PM" },
  { day: "Friday", hours: "8:00 AM – 4:30 PM" },
  { day: "Saturday", hours: "8:00 AM – 12:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const services = [
  { icon: "🚗", name: "Vehicle Registration & Tabs", desc: "New registration, renewals, and tab stickers" },
  { icon: "📋", name: "Title Transfers", desc: "Vehicle title transfers, duplicate titles, and lien releases" },
  { icon: "🪪", name: "Driver's License", desc: "New licenses, renewals, name changes, and duplicates" },
  { icon: "🆔", name: "State ID Cards", desc: "Minnesota state identification cards" },
  { icon: "✈️", name: "REAL ID / Enhanced DL", desc: "REAL ID-compliant driver's licenses for air travel" },
  { icon: "🏍️", name: "Motorcycle & Boat", desc: "Motorcycle endorsements, boat registration and titles" },
];

const bringItems = [
  "Valid photo ID (current driver's license or passport)",
  "Proof of vehicle insurance",
  "Current registration certificate (for renewals)",
  "Title certificate signed by seller (for transfers)",
  "Proof of Minnesota residency (utility bill, bank statement)",
  "Payment: cash, check, debit/credit card (fees may apply for cards)",
];

const faqs = [
  {
    question: "Can I renew my tabs online?",
    answer:
      "Yes, you can renew your vehicle tabs online at the Minnesota DVS website (drive.mn.gov). You can also renew in person at the Waconia Deputy Registrar office during regular business hours.",
  },
  {
    question: "What do I need for a title transfer?",
    answer:
      "You'll need the title certificate signed by the seller, a valid photo ID, proof of insurance, and payment for the title transfer fee and any applicable taxes. If there's a lien on the vehicle, you'll also need the lien release document.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "No appointment is needed for the Waconia Deputy Registrar. Walk-ins are welcome during regular business hours. Wednesday extended hours (until 6 PM) are a great option if you can't make it during the regular day.",
  },
  {
    question: "How much does it cost to renew tabs?",
    answer:
      "Tab renewal fees vary by vehicle type, age, and value. You can estimate your fees using the Minnesota DVS fee calculator at drive.mn.gov. The deputy registrar also charges a small filing fee.",
  },
  {
    question: "Can I get a REAL ID here?",
    answer:
      "Yes, the Waconia Deputy Registrar can process REAL ID-compliant driver's licenses. You'll need to bring proof of identity (birth certificate or passport), Social Security card, and two proofs of Minnesota residency.",
  },
  {
    question: "Is Saturday a good time to go?",
    answer:
      "Saturday mornings (8 AM – noon) are popular and can be busy. If possible, try visiting on a weekday morning or Wednesday evening for shorter wait times.",
  },
];

export default function DMVPage() {
  return (
    <>
      <PageHeader
        title="DMV / Deputy Registrar"
        description="Everything you need for vehicle registration, tabs, titles, and driver's licenses in Waconia, MN."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "DMV / Deputy Registrar" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Big Hours + Contact Card */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
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
                  217 Vine St S, Waconia, MN 55387
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-lake" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (952) 442-4545
                </p>
              </div>
              <div className="mt-4">
                <CTAButton
                  href="https://www.google.com/maps/dir//217+Vine+St+S,+Waconia,+MN+55387"
                  variant="primary"
                  size="md"
                  external
                >
                  Get Directions
                </CTAButton>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {/* Services */}
            <section>
              <h2 className="text-2xl font-bold text-body tracking-tight mb-6">Services Available</h2>
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
            </section>

            {/* What to Bring */}
            <section>
              <h2 className="text-2xl font-bold text-body tracking-tight mb-4">What to Bring</h2>
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <ul className="space-y-3">
                  {bringItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted">
                      <svg className="w-5 h-5 text-lake flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>

        {/* FAQ */}
        <FAQ items={faqs} />
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentOffice",
            name: "Waconia Deputy Registrar",
            address: {
              "@type": "PostalAddress",
              streetAddress: "217 Vine St S",
              addressLocality: "Waconia",
              addressRegion: "MN",
              postalCode: "55387",
            },
            telephone: "(952) 442-4545",
            openingHoursSpecification: [
              { dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"], opens: "08:00", closes: "16:30" },
              { dayOfWeek: "Wednesday", opens: "08:00", closes: "18:00" },
              { dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
            ],
          }),
        }}
      />
    </>
  );
}
