import type { CategorySlug } from "./businesses";

/**
 * Direct-sold sponsor placements (see /advertise).
 *
 * Empty by default: SponsorSlot renders nothing until a booking is added here,
 * so no empty "ad" boxes ship. To put a sold placement live, add an entry and
 * redeploy. `endIso` is checked at render, but pages are static, so an expired
 * entry only disappears on the next build: remove it when the term ends.
 *
 * SEO rules (do not relax):
 * - Sponsor links always carry rel="sponsored". Paid links without it are a
 *   Google link-scheme violation.
 * - Every unit is labelled "Sponsored" and sits outside editorial copy.
 * - Sponsorship never changes a listing's text, order, or a guide's picks.
 */
export type SponsorPlacement =
  | { kind: "directory"; category: CategorySlug }
  | { kind: "guide"; slug: string };

export interface Sponsor {
  id: string;
  name: string;
  tagline: string;
  url: string;
  placement: SponsorPlacement;
  startIso: string;
  endIso: string;
}

export const sponsors: Sponsor[] = [];

function isActive(s: Sponsor, today: string): boolean {
  return s.startIso <= today && today <= s.endIso;
}

export function sponsorsFor(
  match: (p: SponsorPlacement) => boolean,
  today: string = new Date().toISOString().slice(0, 10),
): Sponsor[] {
  return sponsors.filter((s) => isActive(s, today) && match(s.placement));
}

export const ADVERTISE_EMAIL = "hello@waconiaminnesota.org";
