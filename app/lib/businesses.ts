export interface Business {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  rating: number;
  reviewCount: string;
  priceLevel: string;
  shortDescription: string;
  description: string;
  address: string;
  phone: string;
  website: string;
  hours: { day: string; hours: string }[];
  tips: { title: string; description: string }[];
  whatToExpect: {
    atmosphere: string;
    crowd: string;
    liveEvents: string;
    outdoorSeating: string;
  };
  image: string;
}

export const businesses: Business[] = [
  {
    slug: "iron-tap",
    name: "Iron Tap",
    category: "DINING",
    categoryLabel: "Restaurant & Bar",
    rating: 4.8,
    reviewCount: "980",
    priceLevel: "$$",
    shortDescription: "Modern American, downtown Waconia",
    description:
      "Downtown Waconia's standout dinner spot. Known for the Father Bob Burger, craft cocktails, rotating taps, and a lively atmosphere that brings the community together night after night.",
    address: "224 W Main St, Waconia, MN 55387",
    phone: "(952) 442-4700",
    website: "irontapwaconia.com",
    hours: [
      { day: "Monday", hours: "11am–10pm" },
      { day: "Tuesday", hours: "11am–10pm" },
      { day: "Wednesday", hours: "11am–10pm" },
      { day: "Thursday", hours: "11am–10pm" },
      { day: "Friday", hours: "11am–11pm" },
      { day: "Saturday", hours: "11am–11pm" },
      { day: "Sunday", hours: "11am–9pm" },
    ],
    tips: [
      {
        title: "Try the Father Bob Burger",
        description:
          "The signature burger that put Iron Tap on the map — a local legend.",
      },
      {
        title: "Happy Hour Mon–Fri 3–6pm",
        description: "Discounted drinks and appetizers every weekday afternoon.",
      },
      {
        title: "Reserve on Weekends",
        description:
          "Friday and Saturday nights fill up fast, especially in summer.",
      },
    ],
    whatToExpect: {
      atmosphere: "Warm, lively pub with industrial touches",
      crowd: "Young professionals and families",
      liveEvents: "Occasional live music on weekends",
      outdoorSeating: "Sidewalk patio, summer only",
    },
    image: "/images/dining-iron-tap.png",
  },
  {
    slug: "waconia-brewing-company",
    name: "Waconia Brewing Co.",
    category: "BARS",
    categoryLabel: "Brewery & Taproom",
    rating: 4.9,
    reviewCount: "1.2k",
    priceLevel: "$$",
    shortDescription: "Family-owned brewery, craft beer",
    description:
      "Founded in 2014 by two local families, Waconia Brewing Company has become the cornerstone of the downtown scene. Award-winning brewery combining a passion for craft beer with a deep love for community.",
    address: "255 W Main St, Waconia, MN 55387",
    phone: "(952) 442-3115",
    website: "waconiabrewing.com",
    hours: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "Closed" },
      { day: "Wednesday", hours: "Closed" },
      { day: "Thursday", hours: "Closed" },
      { day: "Friday", hours: "4–10pm" },
      { day: "Saturday", hours: "12–11pm" },
      { day: "Sunday", hours: "11am–8pm" },
    ],
    tips: [
      {
        title: "Try the Flight",
        description:
          "Get 4 × 5oz pours to sample the rotating craft selection.",
      },
      {
        title: "Dog Friendly",
        description:
          "The patio is dog-friendly — bring your four-legged friend.",
      },
      {
        title: "BYO Food",
        description:
          "No kitchen on-site, but you can order delivery from downtown restaurants.",
      },
    ],
    whatToExpect: {
      atmosphere: "Industrial-chic with warm wood accents",
      crowd: "Lively mix of locals and visitors",
      liveEvents: "Live music Fridays, trivia Wednesdays",
      outdoorSeating: "Large seasonal patio with fire pits",
    },
    image: "/images/brewing-waconia.png",
  },
  {
    slug: "emagine-waconia",
    name: "Emagine Waconia",
    category: "RETAIL",
    categoryLabel: "Luxury Cinema",
    rating: 4.7,
    reviewCount: "850",
    priceLevel: "$$",
    shortDescription: "Luxury movie theater, recliners",
    description:
      "Luxury movie theater with fully reclining leather seats, EMAX large-format screen, full bar and food service delivered right to your seat.",
    address: "325 Bevens St, Waconia, MN 55387",
    phone: "(952) 300-5555",
    website: "emagine-entertainment.com",
    hours: [
      { day: "Monday", hours: "11am–11pm" },
      { day: "Tuesday", hours: "11am–11pm" },
      { day: "Wednesday", hours: "11am–11pm" },
      { day: "Thursday", hours: "11am–11pm" },
      { day: "Friday", hours: "11am–11pm" },
      { day: "Saturday", hours: "11am–11pm" },
      { day: "Sunday", hours: "11am–11pm" },
    ],
    tips: [
      {
        title: "Book Online",
        description: "Reserved seating means you pick your exact spot in advance.",
      },
      {
        title: "Tuesday Discount",
        description: "Discounted ticket pricing every Tuesday.",
      },
      {
        title: "EMAX Worth the Upcharge",
        description:
          "The large-format screen and Dolby Atmos make the upgrade a no-brainer.",
      },
    ],
    whatToExpect: {
      atmosphere: "Luxury, upscale cinema experience",
      crowd: "Families and date nights",
      liveEvents: "Private screenings available",
      outdoorSeating: "No patio",
    },
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
  },
  {
    slug: "egg-cetera-cafe",
    name: "Egg-Cetera Cafe",
    category: "DINING",
    categoryLabel: "Breakfast & Brunch",
    rating: 4.9,
    reviewCount: "720",
    priceLevel: "$",
    shortDescription: "All-day breakfast, local favorite",
    description:
      "Waconia's most beloved breakfast spot. All-day breakfast with fresh ingredients, unique egg dishes, and a welcoming atmosphere that has made it a community staple for years.",
    address: "Downtown Waconia, MN 55387",
    phone: "(952) 442-2255",
    website: "",
    hours: [
      { day: "Monday", hours: "7am–2pm" },
      { day: "Tuesday", hours: "7am–2pm" },
      { day: "Wednesday", hours: "7am–2pm" },
      { day: "Thursday", hours: "7am–2pm" },
      { day: "Friday", hours: "7am–2pm" },
      { day: "Saturday", hours: "7am–2pm" },
      { day: "Sunday", hours: "8am–2pm" },
    ],
    tips: [
      {
        title: "Arrive Early on Weekends",
        description: "The wait can stretch past 30 minutes by 9am on Saturdays.",
      },
      {
        title: "Try the Specialty Omelets",
        description: "The rotating omelet specials are always worth ordering.",
      },
      {
        title: "Cash Friendly",
        description: "They accept cards, but cash keeps things quick.",
      },
    ],
    whatToExpect: {
      atmosphere: "Cozy, welcoming diner vibes",
      crowd: "Local regulars and families",
      liveEvents: "None",
      outdoorSeating: "Seasonal patio",
    },
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80",
  },
  {
    slug: "garage-bowling-bar",
    name: "Garage Bowling & Bar",
    category: "BARS",
    categoryLabel: "Entertainment",
    rating: 4.6,
    reviewCount: "540",
    priceLevel: "$$",
    shortDescription: "Bowling + full bar + food",
    description:
      "Waconia's go-to entertainment venue combining bowling lanes with a full bar and scratch kitchen. Great for groups, date nights, and family outings.",
    address: "Waconia, MN 55387",
    phone: "(952) 442-2800",
    website: "",
    hours: [
      { day: "Monday", hours: "4–10pm" },
      { day: "Tuesday", hours: "4–10pm" },
      { day: "Wednesday", hours: "4–10pm" },
      { day: "Thursday", hours: "4–10pm" },
      { day: "Friday", hours: "4–12am" },
      { day: "Saturday", hours: "11am–12am" },
      { day: "Sunday", hours: "11am–9pm" },
    ],
    tips: [
      {
        title: "Reserve Lanes on Weekends",
        description: "Walk-in lanes fill up fast on Friday and Saturday nights.",
      },
      {
        title: "Cosmic Bowling",
        description: "Glow-in-the-dark bowling Friday and Saturday after 9pm.",
      },
      {
        title: "Group Packages",
        description: "Ask about party packages for birthdays and events.",
      },
    ],
    whatToExpect: {
      atmosphere: "Fun, casual, family-friendly",
      crowd: "All ages — families to college groups",
      liveEvents: "Cosmic bowling nights",
      outdoorSeating: "No",
    },
    image:
      "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800&q=80",
  },
  {
    slug: "great-clips-waconia",
    name: "Great Clips",
    category: "LOCAL SERVICES",
    categoryLabel: "Hair Salon",
    rating: 4.5,
    reviewCount: "320",
    priceLevel: "$",
    shortDescription: "Walk-in haircuts, online check-in",
    description:
      "Convenient walk-in hair salon offering affordable haircuts for the whole family. Online check-in lets you skip the wait.",
    address: "875 Marketplace Dr, Waconia, MN 55387",
    phone: "(952) 442-6226",
    website: "greatclips.com",
    hours: [
      { day: "Monday", hours: "9am–8pm" },
      { day: "Tuesday", hours: "9am–8pm" },
      { day: "Wednesday", hours: "9am–8pm" },
      { day: "Thursday", hours: "9am–8pm" },
      { day: "Friday", hours: "9am–8pm" },
      { day: "Saturday", hours: "8am–6pm" },
      { day: "Sunday", hours: "10am–5pm" },
    ],
    tips: [
      {
        title: "Use Online Check-In",
        description: "Check in via the app to skip the wait entirely.",
      },
      {
        title: "Weekday Mornings Are Quietest",
        description: "Visit before noon on weekdays for the shortest waits.",
      },
      {
        title: "Clip Notes",
        description: "Ask them to save your Clip Notes for consistent cuts every time.",
      },
    ],
    whatToExpect: {
      atmosphere: "Clean, modern salon",
      crowd: "Families and walk-in customers",
      liveEvents: "N/A",
      outdoorSeating: "N/A",
    },
    image:
      "https://images.unsplash.com/photo-1585747860019-8e79b5b2fb1a?w=800&q=80",
  },
  {
    slug: "aldi-waconia",
    name: "Aldi Waconia",
    category: "LOCAL SERVICES",
    categoryLabel: "Grocery Store",
    rating: 4.4,
    reviewCount: "280",
    priceLevel: "$",
    shortDescription: "Grocery store, everyday low prices",
    description:
      "Aldi offers high-quality groceries at everyday low prices. Known for efficient shopping, quality private-label products, and a streamlined store layout.",
    address: "875 Marketplace Dr, Waconia, MN 55387",
    phone: "",
    website: "aldi.us",
    hours: [
      { day: "Monday", hours: "9am–8pm" },
      { day: "Tuesday", hours: "9am–8pm" },
      { day: "Wednesday", hours: "9am–8pm" },
      { day: "Thursday", hours: "9am–8pm" },
      { day: "Friday", hours: "9am–8pm" },
      { day: "Saturday", hours: "9am–8pm" },
      { day: "Sunday", hours: "9am–8pm" },
    ],
    tips: [
      {
        title: "Bring a Quarter",
        description: "You'll need a quarter for the cart deposit (you get it back).",
      },
      {
        title: "Bring Your Own Bags",
        description: "Aldi charges for bags — BYOB saves you money.",
      },
      {
        title: "Aldi Finds Aisle",
        description: "Check the rotating Aldi Finds for seasonal deals and surprises.",
      },
    ],
    whatToExpect: {
      atmosphere: "Efficient, no-frills grocery shopping",
      crowd: "Local shoppers",
      liveEvents: "N/A",
      outdoorSeating: "N/A",
    },
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
  },
  {
    slug: "amerivu-inn-suites",
    name: "AmeriVu Inn & Suites",
    category: "RETAIL",
    categoryLabel: "Hotel & Lodging",
    rating: 4.3,
    reviewCount: "190",
    priceLevel: "$$",
    shortDescription: "Waconia's premier hotel",
    description:
      "Waconia's premier hotel offering comfortable rooms, complimentary breakfast, and easy access to Lake Waconia and downtown attractions.",
    address: "493 Holiday Dr, Waconia, MN 55387",
    phone: "(952) 442-0000",
    website: "",
    hours: [
      { day: "Monday", hours: "24 hours" },
      { day: "Tuesday", hours: "24 hours" },
      { day: "Wednesday", hours: "24 hours" },
      { day: "Thursday", hours: "24 hours" },
      { day: "Friday", hours: "24 hours" },
      { day: "Saturday", hours: "24 hours" },
      { day: "Sunday", hours: "24 hours" },
    ],
    tips: [
      {
        title: "Book Direct",
        description: "Best rates when you book directly with the hotel.",
      },
      {
        title: "Lake Access",
        description: "Ask the front desk for directions to the nearest boat launch.",
      },
      {
        title: "Free Breakfast",
        description: "Complimentary continental breakfast included with every stay.",
      },
    ],
    whatToExpect: {
      atmosphere: "Clean, comfortable, family-friendly",
      crowd: "Tourists and business travelers",
      liveEvents: "N/A",
      outdoorSeating: "N/A",
    },
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    slug: "dmv-waconia-mn",
    name: "Waconia DMV / Deputy Registrar",
    category: "LOCAL SERVICES",
    categoryLabel: "Government Services",
    rating: 4.0,
    reviewCount: "150",
    priceLevel: "$",
    shortDescription: "Vehicle tabs, titles, driver's licenses",
    description:
      "Waconia Deputy Registrar handles vehicle tabs, titles, registration, driver's licenses and state IDs for Carver County residents. Faster service than metro locations.",
    address: "217 Vine St S, Waconia, MN 55387",
    phone: "(952) 442-4545",
    website: "co.carver.mn.us",
    hours: [
      { day: "Monday", hours: "8am–4:30pm" },
      { day: "Tuesday", hours: "8am–4:30pm" },
      { day: "Wednesday", hours: "8am–6pm" },
      { day: "Thursday", hours: "8am–4:30pm" },
      { day: "Friday", hours: "8am–4:30pm" },
      { day: "Saturday", hours: "8am–12pm" },
      { day: "Sunday", hours: "Closed" },
    ],
    tips: [
      {
        title: "Bring Current Registration",
        description: "Have your current registration handy to speed up the process.",
      },
      {
        title: "Arrive 30 Min Before Close",
        description: "Lines can form near closing — arrive with time to spare.",
      },
      {
        title: "Check MN DVS Website",
        description: "Download forms ahead of time from the MN DVS website.",
      },
    ],
    whatToExpect: {
      atmosphere: "Government office, professional",
      crowd: "Local residents handling vehicle and ID needs",
      liveEvents: "N/A",
      outdoorSeating: "N/A",
    },
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
];

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug);
}

export function getRelatedBusinesses(
  currentSlug: string,
  limit = 4
): Business[] {
  return businesses.filter((b) => b.slug !== currentSlug).slice(0, limit);
}
