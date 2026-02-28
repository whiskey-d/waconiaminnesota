import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/metadata";
import PageHeader from "@/app/components/PageHeader";
import StatsBar from "@/app/components/StatsBar";

export const metadata: Metadata = buildMetadata({
  title: "City of Waconia, MN — Government & City Services",
  description:
    "City of Waconia government info, city hall hours, police, fire department, utilities, and quick facts. Waconia, MN 55387.",
  path: "/city-of-waconia-mn",
});

const departments = [
  {
    icon: "🏛️",
    name: "City Hall",
    address: "201 S Vine St, Waconia, MN 55387",
    phone: "(952) 442-2184",
    hours: "Monday – Friday, 8:00 AM – 4:30 PM",
    services: ["Building permits", "Utility billing", "City council info", "Zoning & planning"],
  },
  {
    icon: "🚔",
    name: "Police Department",
    address: "201 S Vine St, Waconia, MN 55387",
    phone: "(952) 442-7548 (non-emergency)",
    hours: "24/7 (administrative hours: M-F 8 AM – 4:30 PM)",
    services: ["Non-emergency reports", "Community programs", "Background checks", "Parking permits"],
  },
  {
    icon: "🚒",
    name: "Fire Department",
    address: "Waconia, MN",
    phone: "911 (emergency) / (952) 442-2184 (admin)",
    hours: "Volunteer department — admin hours at City Hall",
    services: ["Fire prevention", "Safety inspections", "Community education", "Smoke detector program"],
  },
  {
    icon: "💧",
    name: "Public Utilities",
    address: "201 S Vine St (City Hall)",
    phone: "(952) 442-2184",
    hours: "Monday – Friday, 8:00 AM – 4:30 PM",
    services: ["Water service", "Sewer service", "Stormwater management", "Billing & payments"],
  },
];

const quickFacts = [
  { label: "Incorporated", value: "1878" },
  { label: "County", value: "Carver County" },
  { label: "Population", value: "~14,000" },
  { label: "Area", value: "~7 sq mi" },
  { label: "ZIP Code", value: "55387" },
  { label: "Area Code", value: "952" },
  { label: "School District", value: "ISD 110" },
  { label: "Distance to Minneapolis", value: "~30 miles" },
  { label: "Lake", value: "Lake Waconia (2,552 acres)" },
  { label: "Mayor", value: "See city website" },
];

export default function CityPage() {
  return (
    <>
      <PageHeader
        title="City of Waconia, Minnesota"
        description="Government info, city services, departments, and quick facts for the City of Waconia."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "City of Waconia" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="mb-12">
          <StatsBar
            stats={[
              { icon: "👥", value: "~14,000", label: "Population" },
              { icon: "📐", value: "~7 sq mi", label: "City Area" },
              { icon: "📮", value: "55387", label: "ZIP Code" },
              { icon: "🏔️", value: "Carver", label: "County" },
            ]}
          />
        </div>

        {/* Departments */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-body tracking-tight mb-6">City Departments</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept) => (
              <div key={dept.name} className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">{dept.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg text-body">{dept.name}</h3>
                    <p className="text-sm text-muted">{dept.hours}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted mb-4">
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-lake flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {dept.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-lake flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {dept.phone}
                  </p>
                </div>
                <div className="border-t border-gray-50 pt-3">
                  <div className="flex flex-wrap gap-2">
                    {dept.services.map((svc) => (
                      <span key={svc} className="text-xs bg-lake-50 text-lake px-2 py-1 rounded-full">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Facts Table */}
        <section>
          <h2 className="text-2xl font-bold text-body tracking-tight mb-6">Quick Facts</h2>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-50">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-center justify-between px-6 py-3">
                  <span className="text-sm font-medium text-body">{fact.label}</span>
                  <span className="text-sm text-muted">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentOrganization",
            name: "City of Waconia",
            address: {
              "@type": "PostalAddress",
              streetAddress: "201 S Vine St",
              addressLocality: "Waconia",
              addressRegion: "MN",
              postalCode: "55387",
            },
            telephone: "(952) 442-2184",
          }),
        }}
      />
    </>
  );
}
