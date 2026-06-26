import { AdUnit } from './AdUnit';

/**
 * CLS-safe in-content ad placement.
 *
 * Reserves vertical space (min-height) so the ad load doesn't shift surrounding
 * content — layout shift both hurts Core Web Vitals and lowers ad viewability,
 * which is what actually gets paid. Renders nothing when no slot is configured,
 * so we never ship an empty placeholder before real slot IDs exist in
 * `app/lib/adSlots.ts`.
 *
 * The thin "Advertisement" label keeps us on the right side of AdSense policy
 * (ads must not be presented as content).
 */
export function InContentAd({
  slot,
  className = '',
}: {
  slot: string;
  className?: string;
}) {
  if (!slot) return null;

  return (
    <div className={`my-10 ${className}`}>
      <p className="text-[10px] uppercase tracking-widest text-text-muted/60 text-center mb-1">
        Advertisement
      </p>
      <div className="min-h-[280px] flex items-center justify-center">
        <AdUnit slot={slot} className="w-full" />
      </div>
    </div>
  );
}
