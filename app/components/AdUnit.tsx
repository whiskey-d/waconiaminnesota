'use client';

import { useEffect, useRef } from 'react';

/**
 * Reusable Google AdSense ad unit.
 *
 * Usage:
 *   <AdUnit slot="1234567890" />                    — responsive (default)
 *   <AdUnit slot="1234567890" format="horizontal" /> — horizontal banner
 *
 * The `slot` value comes from your AdSense dashboard when you create an ad unit.
 * Until you create ad units in AdSense, Auto Ads will handle placement.
 */
export function AdUnit({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
}: {
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  responsive?: boolean;
  className?: string;
}) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      const adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle;
      if (adsbygoogle) {
        adsbygoogle.push({});
        pushed.current = true;
      }
    } catch {
      // AdSense script not yet loaded — Auto Ads will still work
    }
  }, []);

  return (
    <div className={className} aria-hidden="true">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-0091095090973336"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(responsive ? { 'data-full-width-responsive': 'true' } : {})}
      />
    </div>
  );
}
