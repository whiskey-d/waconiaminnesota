import Link from "next/link";

const footerLinks = [
  {
    title: "Popular",
    links: [
      { href: "/dmv-waconia-mn", label: "DMV / Deputy Registrar" },
      { href: "/restaurants-waconia-mn", label: "Restaurants" },
      { href: "/lake-waconia-mn", label: "Lake Waconia" },
      { href: "/things-to-do-waconia-mn", label: "Things To Do" },
    ],
  },
  {
    title: "Local Spots",
    links: [
      { href: "/bars-waconia-mn", label: "Bars & Nightlife" },
      { href: "/emagine-waconia-mn", label: "Emagine Theater" },
      { href: "/aldi-waconia-mn", label: "Aldi" },
      { href: "/great-clips-waconia-mn", label: "Great Clips" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "/city-of-waconia-mn", label: "City of Waconia" },
      { href: "/waconia-public-schools", label: "Waconia Schools" },
      { href: "/directions-to-waconia-mn", label: "Directions" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-3">
              <span className="text-2xl">🌊</span>
              <span className="tracking-tight">Waconia, MN</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your local guide to lake living, dining, and community in Waconia, Minnesota.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-3">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2026 WaconiaMinnesota.org. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Waconia, MN 55387
          </p>
        </div>
      </div>
    </footer>
  );
}
