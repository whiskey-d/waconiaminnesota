import Link from "next/link";

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

const exploreLinks: FooterLink[] = [
  { href: "/directory", label: "Business Directory" },
  { href: "/guides", label: "Waconia Guides" },
  { href: "/hotels", label: "Where to Stay" },
  { href: "/foreclosures", label: "Real Estate" },
  { href: "/about", label: "About WaconiaGuide" },
  { href: "/contact", label: "Contact" },
  { href: "/glossary", label: "Glossary" },
  { href: "/faqs", label: "All FAQs" },
  { href: "/changelog", label: "Changelog" },
];

const communityLinks: FooterLink[] = [
  { href: "/events", label: "Events Calendar" },
  { href: "/guides/lake-waconia-fishing", label: "Fishing Guide" },
  {
    href: "https://destinationwaconia.org",
    label: "Chamber of Commerce",
    external: true,
  },
  {
    href: "https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900",
    label: "MN DNR Lake Waconia",
    external: true,
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-primary text-2xl">✳</span>
              <span className="text-lg font-semibold">
                <span className="text-primary">Waconia</span>
                <span className="text-white">Guide</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              The authoritative voice for discovering everything that makes
              Waconia, Minnesota unique.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Community
            </h3>
            <ul className="space-y-3">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Waconia */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Plan a Visit
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Start with our most popular guides — written by locals, updated
              when things change.
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/best-of-waconia"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Best of Waconia →
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/things-to-do-waconia"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Things to Do in Waconia →
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/lake-waconia"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Lake Waconia Guide →
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Send a Tip or Correction →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} WaconiaGuide. An independent guide
            to Waconia, Minnesota.
          </p>
          <p className="text-xs text-gray-500">
            Some links on this site are affiliate links — we may earn a
            commission at no cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
