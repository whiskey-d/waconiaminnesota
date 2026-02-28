export interface Event {
  slug: string;
  title: string;
  date: string;
  dateSort: string; // YYYY-MM-DD for sorting
  recurring: boolean;
  recurringNote?: string;
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
    recurring: true,
    recurringNote: 'Annual — every September',
    venue: 'City Square Park',
    address: 'City Square Park, Waconia, MN 55387',
    description: "Waconia's beloved annual street festival — free fun for all ages in the heart of downtown.",
    longDescription: "Nickle Dickle Day is Waconia's signature community celebration, drawing thousands of visitors to City Square Park every September. The event features live entertainment, local vendors, food and drink, kids activities, and the energy of a town that knows how to throw a party. The evening before (Friday, September 18) kicks off with the Nickle Dickle Street Dance — a cash bar and live music event at 217 W Main St, gates open at 7pm. Saturday is the main family-friendly event running 9am to 5pm. This is the event Waconia residents look forward to all year.",
    image: '/images/event-harvest-festival.png',
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
    recurring: true,
    recurringNote: 'Every Thursday, 4–7pm · June through September',
    venue: 'Waconia Square Parking Lot',
    address: '224 First St, Waconia, MN 55387',
    description: 'Fresh local produce, artisan goods, and flea market finds every Thursday evening all summer long.',
    longDescription: "Now in its 23rd year, the Waconia Farmers Market & Flea Market is a beloved summer tradition in the heart of downtown. Every Thursday from June through September, vendors line the Waconia Square parking lot at 224 First Street (across from Freshwater Church) with fresh locally-grown fruits and vegetables, eggs, jams, baked goods, artisan crafts, and flea market items. The market runs 4–7pm, making it perfect for an after-work visit. Bring reusable bags, bring the kids, and grab dinner from one of the food vendors.",
    image: '/images/event-farmers-market.png',
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
    recurring: true,
    recurringNote: 'Annual — every August',
    venue: 'Carver County Fairgrounds',
    address: 'Carver County Fairgrounds, Waconia, MN 55387',
    description: '114 years of agriculture and community — five days of livestock shows, live music, rides, and classic fair fun.',
    longDescription: "The Carver County Fair celebrates over 114 years of agriculture and community spirit in Waconia. Five days of classic county fair entertainment includes 4-H shows and exhibits, livestock shows and sale, amateur talent contest, tractor pull, pig racing, demolition derby, midway rides and entertainment, live music daily, food vendors, demonstrations, and crafts. The fair is a cornerstone of summer in Carver County, drawing families from across the metro. Plan to attend multiple days — there's too much to see in one visit.",
    image: '/images/event-fishing-tournament.png',
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
    recurring: true,
    recurringNote: 'Annual — every May',
    venue: 'Downtown Waconia',
    address: 'Downtown Waconia, MN 55387',
    description: 'Deals and steals all over downtown Waconia — a spring shopping celebration with specials at participating businesses.',
    longDescription: "Sister Saturday is Waconia's spring shopping celebration, running 9am to 5pm throughout downtown. Participating businesses offer special deals, promotions, and events for the day. It's the perfect excuse to explore everything downtown Waconia has to offer — from boutiques and restaurants to local services. The event is organized by the Waconia Chamber of Commerce (Destination Waconia) and draws shoppers from across the region looking for a great day out.",
    image: '/images/event-acoustic-sessions.png',
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
    recurring: true,
    recurringNote: 'Annual — every October',
    venue: 'All around Waconia',
    address: 'Waconia, MN 55387',
    description: 'Creatively crafted scarecrows placed all over Waconia — tour them all and vote for your favorite.',
    longDescription: "The Waconia Scarecrow Tour is a beloved fall tradition that turns the whole town into an outdoor art gallery. Over ten days in October, creatively designed scarecrows are placed at businesses and landmarks throughout Waconia. Residents and visitors are invited to tour them all and vote for their favorite. It's a perfect family outing — grab a map, walk or drive the route, and enjoy the fall colors alongside some seriously creative scarecrow artistry. The event runs October 8–18.",
    image: '/images/event-harvest-festival.png',
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
    recurring: true,
    recurringNote: 'Annual — Black Friday evening',
    venue: 'City Square Park Gazebo',
    address: 'City Square Park Gazebo, Waconia, MN 55387',
    description: 'Kick off the holiday season at the City Square Park Gazebo — family fun, cocoa, warm fires, and the official tree lighting.',
    longDescription: "The Tree Lighting in the Park is Waconia's official kickoff to the holiday season. On the Friday after Thanksgiving (Black Friday), the community gathers at City Square Park Gazebo at 6pm for warm cocoa, fire pits, festive music, and the ceremonial lighting of the community Christmas tree. It's a heartwarming evening that perfectly captures the small-town charm that makes Waconia special. Dress warmly, bring the whole family, and start your holiday season the right way.",
    image: '/images/event-acoustic-sessions.png',
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
    slug: 'waconia-trivia-night',
    title: 'Waconia Trivia Night',
    date: 'Every Wednesday',
    dateSort: '2026-03-01',
    recurring: true,
    recurringNote: 'Every Wednesday evening',
    venue: 'Waconia Brewing Co.',
    address: '255 W Main St, Waconia, MN 55387',
    description: "Team trivia with prizes and craft beer specials — Waconia's most popular weekly event.",
    longDescription: "Every Wednesday evening, Waconia Brewing Company hosts the town's most popular recurring event: trivia night. Teams of up to 6 compete across multiple rounds covering general knowledge, pop culture, history, and local trivia. Prizes for top finishers, craft beer specials throughout the night, and an electric atmosphere that makes mid-week feel like a celebration. No registration required — just show up, grab a table, and form your team. Doors open at the brewery's regular hours; trivia kicks off in the evening.",
    image: '/images/event-trivia-night.png',
    category: 'Entertainment',
    free: true,
    attendees: 90,
    highlights: [
      'Teams of up to 6 people',
      'Prizes for top finishers',
      'Craft beer specials all night',
      'No registration required',
      'Every Wednesday — year round',
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
