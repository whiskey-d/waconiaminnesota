import type { Sponsor } from "../lib/sponsors";

/**
 * A direct-sold sponsor unit. Renders nothing when there is no active sponsor,
 * so pages look exactly as they do today until a placement is sold.
 * rel="sponsored" is required on every paid link (Google link-scheme policy).
 */
export function SponsorSlot({
  sponsors,
  className = "",
}: {
  sponsors: Sponsor[];
  className?: string;
}) {
  if (sponsors.length === 0) return null;

  return (
    <aside className={`space-y-3 ${className}`} aria-label="Sponsored">
      {sponsors.map((s) => (
        <div
          key={s.id}
          className="bg-surface rounded-xl border border-border p-5"
        >
          <p className="text-[10px] uppercase tracking-widest text-text-muted/70 mb-2">
            Sponsored
          </p>
          <p className="font-semibold text-text-primary">{s.name}</p>
          <p className="text-sm text-text-muted leading-relaxed mt-1">
            {s.tagline}
          </p>
          <a
            href={s.url}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-block text-sm text-primary hover:underline font-medium mt-3"
          >
            Visit {s.name} &rarr;
          </a>
        </div>
      ))}
    </aside>
  );
}
