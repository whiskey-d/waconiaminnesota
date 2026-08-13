export interface Event {
  slug: string;
  title: string;
  date: string;
  dateSort: string; // YYYY-MM-DD — start date
  endDateSort?: string; // YYYY-MM-DD — end date (multi-day events)
  startTime?: string; // HH:MM (24h, local) — defaults to 00:00
  endTime?: string;   // HH:MM (24h, local) — defaults to 23:59
  recurring: boolean;
  recurringNote?: string;
  recurrencePattern?: "weekly" | "annual";
  recurrenceByDay?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  venue: string;
  address: string;
  description: string;
  longDescription: string;
  image: string;
  category: 'Festival' | 'Market' | 'Community' | 'Entertainment' | 'Sports' | 'Holiday';
  free: boolean;
  website?: string;
  attendees: number;
  highlights: string[];
}

export const events: Event[] = [
  {
    slug: 'nickle-dickle-day-2026',
    title: 'Nickle Dickle Day',
    date: 'September 19, 2026',
    dateSort: '2026-09-19',
    startTime: '09:00',
    endTime: '17:00',
    recurring: true,
    recurringNote: 'Annual — every September',
    recurrencePattern: 'annual',
    venue: 'City Square Park',
    address: 'City Square Park, Waconia, MN 55387',
    description: "Waconia's beloved annual street festival — free fun for all ages in the heart of downtown.",
    longDescription: "Nickle Dickle Day is Waconia's signature community celebration, drawing thousands of visitors to City Square Park every September. The event features live entertainment, local vendors, food and drink, kids activities, and the energy of a town that knows how to throw a party. The evening before (Friday, September 18) kicks off with the Nickle Dickle Street Dance — a cash bar and live music event at 217 W Main St, gates open at 7pm. Saturday is the main family-friendly event running 9am to 5pm. This is the event Waconia residents look forward to all year.",
    image: '/images/event-harvest-festival.webp',
    category: 'Festival',
    free: true,
    website: 'https://destinationwaconia.org/events/chamber-hosted-community-events/nickle-dickle-day/',
    attendees: 2400,
    highlights: [
      'Free admission all day',
      'Live music and entertainment',
      'Local food vendors and artisans',
      'Kids activities throughout the day',
      'Street Dance the night before (Sept 18, 7pm)',
    ],
  },
  {
    slug: 'waconia-farmers-market-2026',
    title: 'Waconia Farmers Market & Flea Market',
    date: 'Every Thursday',
    dateSort: '2026-06-05',
    endDateSort: '2026-09-25',
    startTime: '16:00',
    endTime: '19:00',
    recurring: true,
    recurringNote: 'Every Thursday, 4–7pm · June through September',
    recurrencePattern: 'weekly',
    recurrenceByDay: 'Thursday',
    venue: 'Waconia Square Parking Lot',
    address: '224 First St, Waconia, MN 55387',
    description: 'Fresh local produce, artisan goods, and flea market finds every Thursday evening all summer long.',
    longDescription: "Now in its 23rd year, the Waconia Farmers Market & Flea Market is a beloved summer tradition in the heart of downtown. Every Thursday from June through September, vendors line the Waconia Square parking lot at 224 First Street (across from Freshwater Church) with fresh locally-grown fruits and vegetables, eggs, jams, baked goods, artisan crafts, and flea market items. The market runs 4–7pm, making it perfect for an after-work visit. Bring reusable bags, bring the kids, and grab dinner from one of the food vendors.",
    image: '/images/event-farmers-market.webp',
    category: 'Market',
    free: true,
    attendees: 400,
    highlights: [
      'Fresh local produce — fruits, vegetables, herbs',
      'Local eggs, jams, honey, and baked goods',
      'Artisan crafts and handmade items',
      'Flea market with vintage finds',
      'Every Thursday 4–7pm, June–September',
    ],
  },
  {
    slug: 'carver-county-fair-2026',
    title: 'Carver County Fair',
    date: 'August 12–16, 2026',
    dateSort: '2026-08-12',
    endDateSort: '2026-08-16',
    startTime: '09:00',
    endTime: '22:00',
    recurring: true,
    recurringNote: 'Annual — every August',
    recurrencePattern: 'annual',
    venue: 'Carver County Fairgrounds',
    address: 'Carver County Fairgrounds, Waconia, MN 55387',
    description: '114 years of agriculture and community — five days of livestock shows, live music, rides, and classic fair fun.',
    longDescription: "The Carver County Fair celebrates over 114 years of agriculture and community spirit in Waconia. Five days of classic county fair entertainment includes 4-H shows and exhibits, livestock shows and sale, amateur talent contest, tractor pull, pig racing, demolition derby, midway rides and entertainment, live music daily, food vendors, demonstrations, and crafts. The fair is a cornerstone of summer in Carver County, drawing families from across the metro. Plan to attend multiple days — there's too much to see in one visit.",
    image: '/images/event-fishing-tournament.webp',
    category: 'Festival',
    free: false,
    website: 'https://www.carvercountyfair.com',
    attendees: 15000,
    highlights: [
      '4-H shows and exhibits',
      'Livestock shows and sale',
      'Demolition derby and tractor pull',
      'Pig racing and midway rides',
      'Live music daily',
      'Amateur talent contest',
    ],
  },
  {
    slug: 'sister-saturday-2026',
    title: 'Sister Saturday',
    date: 'May 9, 2026',
    dateSort: '2026-05-09',
    startTime: '09:00',
    endTime: '17:00',
    recurring: true,
    recurringNote: 'Annual — every May',
    recurrencePattern: 'annual',
    venue: 'Downtown Waconia',
    address: 'Downtown Waconia, MN 55387',
    description: 'Deals and steals all over downtown Waconia — a spring shopping celebration with specials at participating businesses.',
    longDescription: "Sister Saturday is Waconia's spring shopping celebration, running 9am to 5pm throughout downtown. Participating businesses offer special deals, promotions, and events for the day. It's the perfect excuse to explore everything downtown Waconia has to offer — from boutiques and restaurants to local services. The event is organized by the Waconia Chamber of Commerce (Destination Waconia) and draws shoppers from across the region looking for a great day out.",
    image: '/images/event-acoustic-sessions.webp',
    category: 'Community',
    free: true,
    website: 'https://destinationwaconia.org/events/chamber-hosted-community-events/sister-saturday/',
    attendees: 600,
    highlights: [
      'Deals at downtown businesses all day',
      'Special promotions at local restaurants',
      'Boutique shopping and local services',
      'Family-friendly, free to attend',
      '9am–5pm throughout downtown',
    ],
  },
  {
    slug: 'scarecrow-tour-2026',
    title: 'Scarecrow Tour',
    date: 'October 8–18, 2026',
    dateSort: '2026-10-08',
    endDateSort: '2026-10-18',
    recurring: true,
    recurringNote: 'Annual — every October',
    recurrencePattern: 'annual',
    venue: 'All around Waconia',
    address: 'Waconia, MN 55387',
    description: 'Creatively crafted scarecrows placed all over Waconia — tour them all and vote for your favorite.',
    longDescription: "The Waconia Scarecrow Tour is a beloved fall tradition that turns the whole town into an outdoor art gallery. Over ten days in October, creatively designed scarecrows are placed at businesses and landmarks throughout Waconia. Residents and visitors are invited to tour them all and vote for their favorite. It's a perfect family outing — grab a map, walk or drive the route, and enjoy the fall colors alongside some seriously creative scarecrow artistry. The event runs October 8–18.",
    image: '/images/event-harvest-festival.webp',
    category: 'Community',
    free: true,
    website: 'https://destinationwaconia.org/events/chamber-hosted-community-events/scarecrows-tour/',
    attendees: 800,
    highlights: [
      'Scarecrows at businesses all over town',
      'Self-guided walking or driving tour',
      'Vote for your favorite scarecrow',
      'Free to participate',
      'Perfect fall family activity',
    ],
  },
  {
    slug: 'tree-lighting-2026',
    title: 'Tree Lighting in the Park',
    date: 'November 27, 2026',
    dateSort: '2026-11-27',
    startTime: '18:00',
    endTime: '20:00',
    recurring: true,
    recurringNote: 'Annual — Black Friday evening',
    recurrencePattern: 'annual',
    venue: 'City Square Park Gazebo',
    address: 'City Square Park Gazebo, Waconia, MN 55387',
    description: 'Kick off the holiday season at the City Square Park Gazebo — family fun, cocoa, warm fires, and the official tree lighting.',
    longDescription: "The Tree Lighting in the Park is Waconia's official kickoff to the holiday season. On the Friday after Thanksgiving (Black Friday), the community gathers at City Square Park Gazebo at 6pm for warm cocoa, fire pits, festive music, and the ceremonial lighting of the community Christmas tree. It's a heartwarming evening that perfectly captures the small-town charm that makes Waconia special. Dress warmly, bring the whole family, and start your holiday season the right way.",
    image: '/images/event-acoustic-sessions.webp',
    category: 'Holiday',
    free: true,
    website: 'https://destinationwaconia.org/events/chamber-hosted-community-events/tree-lighting-in-the-park/',
    attendees: 500,
    highlights: [
      'Official community Christmas tree lighting',
      'Free hot cocoa',
      'Warm fire pits',
      'Festive music and family fun',
      'Starts at 6pm — right after Thanksgiving',
    ],
  },
  {
    slug: 'deardorff-apple-season-2026',
    title: 'Apple Season at Deardorff Orchards',
    date: 'Labor Day weekend – late October',
    dateSort: '2026-09-05',
    endDateSort: '2026-10-31',
    recurring: true,
    recurringNote: 'Seasonal — opens Labor Day weekend, runs until the trees are picked out (typically late October)',
    venue: 'Deardorff Orchards & Vineyards',
    address: '8282 Parley Lake Rd, Waconia, MN 55387',
    description: 'Pick-your-own apples on an 1888 family farm — SweeTango, Honeycrisp, Zestar!, tractor rides, pumpkins, and Parley Lake Winery on-site.',
    longDescription: "Apple season is Waconia's biggest fall draw outside the Scarecrow Tour. Deardorff Orchards, a working family farm dating to 1888, opens for pick-your-own apples around Labor Day weekend and runs until the trees are picked out — usually late October. More than 3,000 trees grow Minnesota-bred varieties including SweeTango, Zestar!, Honeycrisp, and Haralson, ripening in roughly that order across September and October. Tractor rides are complimentary when you pick your own apples, and the farm stand adds pumpkins, mums, and local honey as the season turns. Parley Lake Winery pours estate wine on the same farmstead, which makes this the rare orchard trip that works for every generation of the car. Check the orchard's website or social pages before you go — open days and picking availability shift week to week with the crop.",
    image: '/images/event-farmers-market.webp',
    category: 'Market',
    free: true,
    website: 'https://www.deardorfforchards.com/',
    attendees: 3000,
    highlights: [
      'Pick-your-own SweeTango, Zestar!, Honeycrisp & Haralson apples',
      'Complimentary tractor rides when you pick',
      'Pumpkins, mums, and local honey in the farm stand',
      'Parley Lake Winery tasting room on the same farm',
      'Opens Labor Day weekend — season ends when the apples run out',
    ],
  },
  {
    slug: 'dear-hunting-day-2026',
    title: 'D.E.A.R. Hunting Shopping Day',
    date: 'November 7, 2026',
    dateSort: '2026-11-07',
    startTime: '09:00',
    endTime: '16:00',
    recurring: true,
    recurringNote: 'Annual — the Saturday of Minnesota deer opener, every November',
    recurrencePattern: 'annual',
    venue: 'Downtown Waconia',
    address: 'Downtown Waconia, MN 55387',
    description: "Divas Enjoying Awesome Retail — Waconia's deer-opener shopping day, with deals all over downtown and a Basket of Waconia drawing.",
    longDescription: "While half of Minnesota heads to the deer stand on opening weekend, Waconia runs its own kind of hunt. D.E.A.R. Hunting Day — Divas Enjoying Awesome Retail — is the Chamber's annual shopping event held on deer-opener Saturday, now in its 19th year. From 9am to 4pm, participating downtown businesses hide the letters D-E-A-R around their shops; find all four and you're entered to win the Basket of Waconia, a collection of gift cards and goodies from local shops, bars, and restaurants valued at over $400. Expect exclusive one-day deals while you shop, sip, and dine — with extra offers if you show up wearing blaze orange. It's the unofficial start of Waconia's holiday shopping season.",
    image: '/images/event-acoustic-sessions.webp',
    category: 'Community',
    free: true,
    website: 'https://destinationwaconia.org/events/chamber-hosted-community-events/dear-divas-enjoying-awesome-retail/',
    attendees: 500,
    highlights: [
      'Find the letters D-E-A-R to enter the Basket of Waconia drawing ($400+ value)',
      'One-day deals at participating downtown businesses',
      'Extra offers for shoppers in blaze orange',
      'Held on Minnesota deer-opener Saturday — 19th annual in 2026',
      '9am–4pm throughout downtown',
    ],
  },
  {
    slug: 'small-business-saturday-2026',
    title: 'Small Business Saturday',
    date: 'November 28, 2026',
    dateSort: '2026-11-28',
    startTime: '09:00',
    endTime: '17:00',
    recurring: true,
    recurringNote: 'Annual — the Saturday after Thanksgiving',
    recurrencePattern: 'annual',
    venue: 'Downtown Waconia',
    address: 'Downtown Waconia, MN 55387',
    description: 'Shop small in downtown Waconia the Saturday after Thanksgiving — specials and promotions at independent local businesses.',
    longDescription: "The Saturday after Thanksgiving, downtown Waconia joins the national Small Business Saturday movement with specials, promotions, and holiday cheer at its independent shops, boutiques, and restaurants. Coming the day after the Tree Lighting in the Park, it turns Thanksgiving weekend into a full downtown holiday kickoff: browse the boutiques, grab lunch or coffee on Main Street, and knock out holiday gifts while keeping your dollars in town. Pair it with Pink Friday (the shop-small Friday one week before Black Friday) and D.E.A.R. Hunting Day earlier in the month and you can finish your whole list without leaving Waconia.",
    image: '/images/event-acoustic-sessions.webp',
    category: 'Community',
    free: true,
    website: 'https://destinationwaconia.org/',
    attendees: 400,
    highlights: [
      'Specials at independent downtown businesses',
      'The Saturday after Thanksgiving — day after the Tree Lighting',
      'Holiday shopping, dining, and coffee all within a walkable downtown',
      'Part of the national shop-small movement',
    ],
  },
  {
    slug: 'waconia-christkindlsmarkt-2026',
    title: 'Waconia Christkindlsmarkt',
    date: 'Early December 2026 — dates TBA',
    dateSort: '2026-12-04',
    endDateSort: '2026-12-13',
    recurring: true,
    recurringNote: 'Annual — typically the first two weekends of December (2026 dates not yet announced)',
    venue: 'City Square Park',
    address: '104 E Main St, Waconia, MN 55387',
    description: 'A free German-style open-air Christmas market in City Square Park — Glühwein, live reindeer, a lantern parade, Krampus, and the Christkind.',
    longDescription: "The Christkindlsmarkt is a German-style open-air Christmas market that transformed City Square Park into a holiday village for the first time in 2025, after more than two decades as a beloved tradition in Excelsior. Wooden vendor stalls sell handmade gifts and old-world food and drink — including mugs of warm Glühwein — while the entertainment lineup runs from live music, storytelling, and a magic show to visits with the Christkind, Saint Nicholas, and the mischievous Krampus. Kids can meet live reindeer, and the St. Martin's children's lantern parade lights up Saturday evenings. Admission is free. The market typically runs Friday through Sunday across the first two weekends of December; 2026 dates had not been announced when this page was last updated — confirm at christmasinwaconia.com before you go.",
    image: '/images/event-harvest-festival.webp',
    category: 'Holiday',
    free: true,
    website: 'https://www.christmasinwaconia.com/',
    attendees: 2000,
    highlights: [
      'German-style open-air market with wooden vendor stalls',
      'Warm Glühwein, old-world food, and handmade gifts',
      'Live reindeer, Christkind, Saint Nicholas, and Krampus visits',
      "St. Martin's children's lantern parade on Saturdays",
      'Free admission — typically the first two weekends of December',
    ],
  },
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find(e => e.slug === slug);
}

export function getUpcomingEvents(): Event[] {
  const today = new Date().toISOString().split('T')[0];
  return [...events]
    .filter(e => e.recurring || e.dateSort >= today)
    .sort((a, b) => a.dateSort.localeCompare(b.dateSort));
}

/**
 * Build an ISO 8601 datetime string in Central Time for Schema.org.
 * Uses -05:00 (CST) — close enough for SEO; Google parses both CST/CDT.
 */
export function toIsoDateTime(date: string, time?: string): string {
  return `${date}T${time ?? "00:00"}:00-05:00`;
}
