import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/metadata";
import PageHeader from "@/app/components/PageHeader";
import CTAButton from "@/app/components/CTAButton";
import StatsBar from "@/app/components/StatsBar";

export const metadata: Metadata = buildMetadata({
  title: "Waconia Public Schools — ISD 110",
  description:
    "Waconia Public Schools (ISD 110) info, schools list, OmniD parent portal, programs, and enrollment. Serving Waconia, MN and surrounding communities.",
  path: "/waconia-public-schools",
});

const schools = [
  {
    icon: "🏫",
    name: "Waconia High School",
    grades: "Grades 9–12",
    desc: "Home of the Wildcats. Strong academics, athletics, and extracurricular programs.",
  },
  {
    icon: "📚",
    name: "Waconia Middle School",
    grades: "Grades 6–8",
    desc: "Preparing students for high school with a focus on academics and personal growth.",
  },
  {
    icon: "✏️",
    name: "Bayview Elementary",
    grades: "Grades K–5",
    desc: "Nurturing young learners with strong foundational academics and community.",
  },
  {
    icon: "🎨",
    name: "Laketown Elementary",
    grades: "Grades K–5",
    desc: "A welcoming environment focused on academic excellence and creative learning.",
  },
  {
    icon: "📖",
    name: "Southview Elementary",
    grades: "Grades K–5",
    desc: "Building strong readers, writers, and critical thinkers in a supportive setting.",
  },
  {
    icon: "🌟",
    name: "Clearwater Middle School",
    grades: "Grades 6–8",
    desc: "Serving the growing Waconia community with quality middle school education.",
  },
];

const programs = [
  "Advanced Placement (AP) courses",
  "Special education services",
  "English Language Learners (ELL)",
  "Gifted and talented programs",
  "Community Education & ECFE",
  "Waconia Wildcats athletics (MSHSL)",
  "Fine arts — band, choir, theater, visual arts",
  "Career and Technical Education (CTE)",
];

export default function SchoolsPage() {
  return (
    <>
      <PageHeader
        title="Waconia Public Schools"
        description="Independent School District 110 — serving Waconia and surrounding communities with excellent K-12 education."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Waconia Schools" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* OmniD Portal CTA */}
        <div className="bg-lake rounded-xl p-6 sm:p-8 text-white mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold mb-1">Parent & Student Portal</h2>
            <p className="text-white/80 text-sm">
              Access grades, attendance, schedules, and school communications through the OmniD portal.
            </p>
          </div>
          <CTAButton
            href="https://waconia.omnid.com"
            variant="secondary"
            size="lg"
            external
          >
            Open OmniD Portal
          </CTAButton>
        </div>

        {/* Stats */}
        <div className="mb-12">
          <StatsBar
            stats={[
              { icon: "🎓", value: "ISD 110", label: "District" },
              { icon: "👨‍🎓", value: "5,000+", label: "Students" },
              { icon: "🏫", value: "6+", label: "Schools" },
              { icon: "🐾", value: "Wildcats", label: "Mascot" },
            ]}
          />
        </div>

        {/* Schools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-body tracking-tight mb-6">Schools in the District</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schools.map((school) => (
              <div key={school.name} className="bg-white rounded-xl border border-gray-100 p-5">
                <span className="text-3xl block mb-2">{school.icon}</span>
                <h3 className="font-bold text-body">{school.name}</h3>
                <p className="text-xs text-lake font-medium mb-2">{school.grades}</p>
                <p className="text-muted text-sm">{school.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Programs */}
        <section>
          <h2 className="text-2xl font-bold text-body tracking-tight mb-6">Programs & Activities</h2>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="grid sm:grid-cols-2 gap-3">
              {programs.map((program) => (
                <div key={program} className="flex items-center gap-2 text-sm text-muted">
                  <svg className="w-4 h-4 text-lake flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {program}
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
            "@type": "EducationalOrganization",
            name: "Waconia Public Schools — ISD 110",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Waconia",
              addressRegion: "MN",
              postalCode: "55387",
            },
          }),
        }}
      />
    </>
  );
}
