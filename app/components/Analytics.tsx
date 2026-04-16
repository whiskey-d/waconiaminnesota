'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, Suspense } from 'react';

const GA_ID = 'G-CSMGWDBHKG';
const ADSENSE_ID = 'ca-pub-0091095090973336';

// ── Page-view tracker (fires on every client-side navigation) ────────────────
// The initial page_view is sent by the gtag init script. This tracker emits a
// page_view event only for subsequent client-side navigations, so the first
// load is counted exactly once.
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (typeof window === 'undefined' || !(window as Window & { gtag?: Function }).gtag) return;
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    (window as Window & { gtag?: Function }).gtag!('event', 'page_view', {
      page_path: url,
      page_location: window.location.origin + url,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}

// ── Global event helper (call from any component) ────────────────────────────
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined') return;
  const w = window as Window & { gtag?: Function };
  if (!w.gtag) return;
  w.gtag('event', action, params);
}

// ── Main Analytics component ─────────────────────────────────────────────────
export function Analytics() {
  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
          });
        `}
      </Script>

      {/* Google AdSense — loaded after hydration so it never blocks LCP/INP.
          Auto Ads and the AdSense crawler still pick it up; the HTML comment
          below keeps the client-id discoverable in source view. */}
      <Script
        id="adsbygoogle-init"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
        strategy="afterInteractive"
        crossOrigin="anonymous"
        async
      />

      {/* SPA page-view tracker */}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}
