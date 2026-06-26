/**
 * Google AdSense ad-unit slot IDs.
 *
 * Create each unit in the AdSense dashboard (Ads → By ad unit → Display ads),
 * then paste its numeric slot ID below. Leave a value as "" to disable that
 * placement — `<InContentAd>` renders nothing when its slot is empty, so until
 * you fill these in, Auto Ads remains the only ad source and we never ship an
 * empty ad box (which would hurt UX and risk an AdSense policy flag).
 *
 * These are deliberate, high-value in-content placements on our longest,
 * highest-dwell template (long-form guides). Auto Ads stays on everywhere else.
 */
export const AD_SLOTS = {
  /** In-content unit injected after the guide intro (above the fold of the body). */
  guideInline: "",
  /** Second in-content unit between the article body and the FAQ block. */
  guideMidArticle: "",
} as const;
