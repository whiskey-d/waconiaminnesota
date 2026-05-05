export type CategorySlug =
  | "restaurants"
  | "breweries-wineries"
  | "things-to-do"
  | "services"
  | "shopping"
  | "lodging";

export interface Category {
  slug: CategorySlug;
  label: string;
  emoji: string;
  shortDescription: string;
  longDescription: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: "restaurants",
    label: "Restaurants & Cafés",
    emoji: "🍽",
    shortDescription:
      "Where to eat in Waconia — from lakeside dining to all-day breakfast.",
    longDescription:
      "Waconia's dining scene blends lakeside ambiance with downtown character. From the legendary Father Bob Burger at Iron Tap to Egg-Cetera Cafe's all-day breakfast and Lola's Lakehouse on the water, the city packs a surprising amount of culinary range into a few walkable blocks.",
  },
  {
    slug: "breweries-wineries",
    label: "Breweries, Wineries & Distilleries",
    emoji: "🍺",
    shortDescription:
      "Craft beer, estate wines, and distilled spirits — all within Waconia city limits.",
    longDescription:
      "Waconia has quietly become one of the strongest craft beverage clusters in the western Twin Cities, with Waconia Brewing Co. anchoring downtown, Schram Vineyards Winery & Brewery on the rolling farmland west of town, Sovereign Estate Wine on Lake Waconia itself, and J. Carver Distillery rounding out the spirits side.",
  },
  {
    slug: "things-to-do",
    label: "Things to Do",
    emoji: "🎯",
    shortDescription:
      "Movies, bowling, golf, events — entertainment options around Waconia.",
    longDescription:
      "Beyond the lake, Waconia offers a luxury cinema (Emagine), bowling and a full bar at Garage, championship golf at Island View Golf Club, and the Carver County Historical Society for a deeper dive into local history.",
  },
  {
    slug: "services",
    label: "Local Services",
    emoji: "🛠",
    shortDescription:
      "Government services, salons, healthcare, and everyday essentials.",
    longDescription:
      "From the Waconia Deputy Registrar (DMV) to Ridgeview Medical Center, the city's service infrastructure punches above its size — much of Carver County drives to Waconia for vehicle tabs, healthcare, and licensing.",
  },
  {
    slug: "shopping",
    label: "Shopping & Grocery",
    emoji: "🛍",
    shortDescription:
      "Grocery stores, boutiques, hardware, and everyday shopping in Waconia.",
    longDescription:
      "Waconia's retail mix runs from the Marketplace shopping center on the north side to specialty boutiques downtown and farm-and-garden suppliers serving the surrounding agricultural community.",
  },
  {
    slug: "lodging",
    label: "Lodging",
    emoji: "🛏",
    shortDescription:
      "Hotels and lakeside short-term rentals in and near Waconia.",
    longDescription:
      "Waconia has one in-town hotel (AmeriVu Inn & Suites). For lakefront experiences, short-term rentals on Lake Waconia book out months in advance for summer weekends. Chaska, eight miles east, offers more chain hotel availability.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export interface Business {
  slug: string;
  name: string;
  category: string;            // legacy display string (e.g. "DINING")
  categoryLabel: string;       // legacy display label (e.g. "Restaurant & Bar")
  categorySlugs: CategorySlug[]; // canonical category memberships
  rating: number;
  reviewCount: string;
  priceLevel: string;
  shortDescription: string;
  description: string;
  address: string;
  lat: number;
  lng: number;
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

const STANDARD_HOURS_24: { day: string; hours: string }[] = [
  { day: "Monday", hours: "24 hours" },
  { day: "Tuesday", hours: "24 hours" },
  { day: "Wednesday", hours: "24 hours" },
  { day: "Thursday", hours: "24 hours" },
  { day: "Friday", hours: "24 hours" },
  { day: "Saturday", hours: "24 hours" },
  { day: "Sunday", hours: "24 hours" },
];

const HOURS_VARIES: { day: string; hours: string }[] = [
  { day: "Monday", hours: "See website" },
  { day: "Tuesday", hours: "See website" },
  { day: "Wednesday", hours: "See website" },
  { day: "Thursday", hours: "See website" },
  { day: "Friday", hours: "See website" },
  { day: "Saturday", hours: "See website" },
  { day: "Sunday", hours: "See website" },
];

export const businesses: Business[] = [
  {
    slug: "iron-tap",
    name: "Iron Tap",
    category: "DINING",
    categoryLabel: "Restaurant & Bar",
    categorySlugs: ["restaurants"],
    rating: 4.8,
    reviewCount: "980",
    priceLevel: "$$",
    shortDescription: "Modern American, downtown Waconia",
    description:
      "Downtown Waconia's standout dinner spot. Known for the Father Bob Burger, craft cocktails, rotating taps, and a lively atmosphere that brings the community together night after night.",
    address: "224 W Main St, Waconia, MN 55387",
    lat: 44.8497,
    lng: -93.7877,
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
      { title: "Try the Father Bob Burger", description: "The signature burger that put Iron Tap on the map — a local legend." },
      { title: "Happy Hour Mon–Fri 3–6pm", description: "Discounted drinks and appetizers every weekday afternoon." },
      { title: "Reserve on Weekends", description: "Friday and Saturday nights fill up fast, especially in summer." },
    ],
    whatToExpect: {
      atmosphere: "Warm, lively pub with industrial touches",
      crowd: "Young professionals and families",
      liveEvents: "Occasional live music on weekends",
      outdoorSeating: "Sidewalk patio, summer only",
    },
    image: "/images/dining-iron-tap.webp",
  },
  {
    slug: "waconia-brewing-company",
    name: "Waconia Brewing Co.",
    category: "BARS",
    categoryLabel: "Brewery & Taproom",
    categorySlugs: ["breweries-wineries"],
    rating: 4.9,
    reviewCount: "1.2k",
    priceLevel: "$$",
    shortDescription: "Family-owned brewery, craft beer",
    description:
      "Founded in 2014 by two local families, Waconia Brewing Company has become the cornerstone of the downtown scene. Award-winning brewery combining a passion for craft beer with a deep love for community.",
    address: "255 W Main St, Waconia, MN 55387",
    lat: 44.8498,
    lng: -93.7886,
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
      { title: "Try the Flight", description: "Get 4 × 5oz pours to sample the rotating craft selection." },
      { title: "Dog Friendly", description: "The patio is dog-friendly — bring your four-legged friend." },
      { title: "BYO Food", description: "No kitchen on-site, but you can order delivery from downtown restaurants." },
    ],
    whatToExpect: {
      atmosphere: "Industrial-chic with warm wood accents",
      crowd: "Lively mix of locals and visitors",
      liveEvents: "Live music Fridays, trivia Wednesdays",
      outdoorSeating: "Large seasonal patio with fire pits",
    },
    image: "/images/brewing-waconia.webp",
  },
  {
    slug: "schram-vineyards",
    name: "Schram Vineyards Winery & Brewery",
    category: "BARS",
    categoryLabel: "Winery & Brewery",
    categorySlugs: ["breweries-wineries", "things-to-do"],
    rating: 4.7,
    reviewCount: "1.5k",
    priceLevel: "$$",
    shortDescription: "Estate winery + brewery on rolling farmland",
    description:
      "A working vineyard, winery, and brewery on the outskirts of Waconia. Estate-grown wines, an in-house brewery, a tasting room with sweeping views over the vines, and a heated lakeside igloo experience in winter make Schram a year-round destination.",
    address: "8785 Airport Rd, Waconia, MN 55387",
    lat: 44.8773,
    lng: -93.8392,
    phone: "(952) 442-5050",
    website: "schramvineyards.com",
    hours: HOURS_VARIES,
    tips: [
      { title: "Reserve Igloos in Winter", description: "Heated, see-through igloos book out weeks ahead from December through February." },
      { title: "Live Music Weekends", description: "Outdoor stage hosts local bands all summer." },
      { title: "Try the Wine Slushies", description: "A summer crowd favorite — frozen estate wines." },
    ],
    whatToExpect: {
      atmosphere: "Rural-elegant, sweeping vineyard views",
      crowd: "Couples, friend groups, wedding parties",
      liveEvents: "Live music many weekends",
      outdoorSeating: "Large patio, fire pits, vineyard lawn",
    },
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
  },
  {
    slug: "sovereign-estate-wine",
    name: "Sovereign Estate Wine",
    category: "BARS",
    categoryLabel: "Lakefront Winery",
    categorySlugs: ["breweries-wineries", "things-to-do"],
    rating: 4.7,
    reviewCount: "950",
    priceLevel: "$$$",
    shortDescription: "Lakefront winery on Lake Waconia",
    description:
      "A boutique winery perched directly on the south shore of Lake Waconia. Cold-climate estate wines, a stone-and-glass tasting room, and one of the most photogenic lakeside patios in Minnesota wine country.",
    address: "9950 N Shore Rd, Waconia, MN 55387",
    lat: 44.8772,
    lng: -93.7991,
    phone: "(952) 446-9957",
    website: "sovereignestatewine.com",
    hours: HOURS_VARIES,
    tips: [
      { title: "Sunset Reservations", description: "West-facing lake patio — book the last seating for sunset over the water." },
      { title: "Cold-Climate Reds", description: "Try the Marquette and Frontenac — Minnesota's signature grapes." },
      { title: "Boat-In Welcome", description: "Dock space available for guests arriving by boat in summer." },
    ],
    whatToExpect: {
      atmosphere: "Elegant lakefront, stone fireplace",
      crowd: "Date nights, wine club members",
      liveEvents: "Acoustic music select weekends",
      outdoorSeating: "Tiered lake patio with dock",
    },
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80",
  },
  {
    slug: "j-carver-distillery",
    name: "J. Carver Distillery",
    category: "BARS",
    categoryLabel: "Craft Distillery",
    categorySlugs: ["breweries-wineries"],
    rating: 4.6,
    reviewCount: "420",
    priceLevel: "$$",
    shortDescription: "Small-batch craft spirits & cocktail room",
    description:
      "Carver County's craft distillery, hand-producing whiskey, gin, and vodka in small batches. The cocktail room serves classic and seasonal drinks made entirely with house spirits.",
    address: "1320 E 1st St, Waconia, MN 55387",
    lat: 44.8528,
    lng: -93.7754,
    phone: "(952) 426-2300",
    website: "jcarverdistillery.com",
    hours: HOURS_VARIES,
    tips: [
      { title: "Distillery Tours", description: "Weekend tours go behind the still — check the website to book." },
      { title: "Bottle Shop On-Site", description: "Pick up bottles directly from the distillery — often before they hit retail." },
      { title: "Old Fashioned, Done Right", description: "House whiskey + house bitters + a single ice sphere." },
    ],
    whatToExpect: {
      atmosphere: "Industrial cocktail room with copper still in view",
      crowd: "Spirits enthusiasts, date nights",
      liveEvents: "Occasional cocktail classes",
      outdoorSeating: "Small patio in season",
    },
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
  },
  {
    slug: "lolas-lakehouse",
    name: "Lola's Lakehouse Eatery",
    category: "DINING",
    categoryLabel: "Lakeside Restaurant",
    categorySlugs: ["restaurants"],
    rating: 4.5,
    reviewCount: "1.1k",
    priceLevel: "$$",
    shortDescription: "Casual lakeside dining with a view",
    description:
      "A relaxed lakefront restaurant with a sprawling patio facing Lake Waconia. American comfort plates, fresh seafood specials, full bar, and one of the few sit-down restaurants in town with a true lake view.",
    address: "201 Lake St E, Waconia, MN 55387",
    lat: 44.8526,
    lng: -93.7867,
    phone: "(952) 442-2400",
    website: "lolaslakehouse.com",
    hours: HOURS_VARIES,
    tips: [
      { title: "Patio in Summer", description: "Lakeside seating fills first — arrive early or expect a wait." },
      { title: "Walleye Special", description: "Local lake-classic walleye dinners on the rotating menu." },
      { title: "Boat Up", description: "Public dock just steps away on Lake Waconia." },
    ],
    whatToExpect: {
      atmosphere: "Casual lakeside, sunset-friendly",
      crowd: "Families, lake visitors, locals",
      liveEvents: "Weekend music in season",
      outdoorSeating: "Yes — large lake-facing patio",
    },
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    slug: "egg-cetera-cafe",
    name: "Egg-Cetera Cafe",
    category: "DINING",
    categoryLabel: "Breakfast & Brunch",
    categorySlugs: ["restaurants"],
    rating: 4.9,
    reviewCount: "720",
    priceLevel: "$",
    shortDescription: "All-day breakfast, local favorite",
    description:
      "Waconia's most beloved breakfast spot. All-day breakfast with fresh ingredients, unique egg dishes, and a welcoming atmosphere that has made it a community staple for years.",
    address: "Downtown Waconia, MN 55387",
    lat: 44.8502,
    lng: -93.7870,
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
      { title: "Arrive Early on Weekends", description: "The wait can stretch past 30 minutes by 9am on Saturdays." },
      { title: "Try the Specialty Omelets", description: "The rotating omelet specials are always worth ordering." },
      { title: "Cash Friendly", description: "They accept cards, but cash keeps things quick." },
    ],
    whatToExpect: {
      atmosphere: "Cozy, welcoming diner vibes",
      crowd: "Local regulars and families",
      liveEvents: "None",
      outdoorSeating: "Seasonal patio",
    },
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80",
  },
  {
    slug: "mocha-monkey",
    name: "Mocha Monkey",
    category: "DINING",
    categoryLabel: "Coffee Shop",
    categorySlugs: ["restaurants"],
    rating: 4.7,
    reviewCount: "510",
    priceLevel: "$",
    shortDescription: "Local coffee shop & bakery",
    description:
      "A community gathering spot serving espresso, drip coffee, fresh pastries, and breakfast sandwiches. The kind of place where regulars order the usual and the barista already knows.",
    address: "210 W Main St, Waconia, MN 55387",
    lat: 44.8497,
    lng: -93.7872,
    phone: "(952) 442-2090",
    website: "mochamonkey.com",
    hours: HOURS_VARIES,
    tips: [
      { title: "Mobile Order", description: "Skip the line during the morning rush." },
      { title: "House Bakery", description: "Pastries are baked on-site — get there early for the cinnamon roll." },
      { title: "Wi-Fi Workspace", description: "Reliable Wi-Fi and outlets for remote work." },
    ],
    whatToExpect: {
      atmosphere: "Cozy local coffeehouse",
      crowd: "Remote workers, parents, retirees",
      liveEvents: "Occasional acoustic sets",
      outdoorSeating: "Sidewalk seating in season",
    },
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80",
  },
  {
    slug: "mucho-mexican",
    name: "Mucho Mexican Restaurant",
    category: "DINING",
    categoryLabel: "Mexican Restaurant",
    categorySlugs: ["restaurants"],
    rating: 4.4,
    reviewCount: "640",
    priceLevel: "$$",
    shortDescription: "Family Mexican, generous portions",
    description:
      "A family-run Mexican restaurant serving the full lineup — fajitas, enchiladas, margaritas, and a salsa bar. Generous portions and a reliable go-to for groups and families.",
    address: "1450 E 1st St, Waconia, MN 55387",
    lat: 44.8541,
    lng: -93.7727,
    phone: "(952) 442-7117",
    website: "",
    hours: HOURS_VARIES,
    tips: [
      { title: "Margarita Mondays", description: "Discounted house margaritas to start the week." },
      { title: "Family Combos", description: "Mix-and-match family combos feed 4 well." },
      { title: "Take-Out Friendly", description: "Phone-in pickup is consistently fast." },
    ],
    whatToExpect: {
      atmosphere: "Family-style, festive",
      crowd: "Families, teams",
      liveEvents: "None",
      outdoorSeating: "No",
    },
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
  },
  {
    slug: "emagine-waconia",
    name: "Emagine Waconia",
    category: "RETAIL",
    categoryLabel: "Luxury Cinema",
    categorySlugs: ["things-to-do"],
    rating: 4.7,
    reviewCount: "850",
    priceLevel: "$$",
    shortDescription: "Luxury movie theater, recliners",
    description:
      "Luxury movie theater with fully reclining leather seats, EMAX large-format screen, full bar and food service delivered right to your seat.",
    address: "325 Bevens St, Waconia, MN 55387",
    lat: 44.8590,
    lng: -93.7842,
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
      { title: "Book Online", description: "Reserved seating means you pick your exact spot in advance." },
      { title: "Tuesday Discount", description: "Discounted ticket pricing every Tuesday." },
      { title: "EMAX Worth the Upcharge", description: "The large-format screen and Dolby Atmos make the upgrade a no-brainer." },
    ],
    whatToExpect: {
      atmosphere: "Luxury, upscale cinema experience",
      crowd: "Families and date nights",
      liveEvents: "Private screenings available",
      outdoorSeating: "No patio",
    },
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
  },
  {
    slug: "garage-bowling-bar",
    name: "Garage Bowling & Bar",
    category: "BARS",
    categoryLabel: "Entertainment",
    categorySlugs: ["things-to-do", "restaurants"],
    rating: 4.6,
    reviewCount: "540",
    priceLevel: "$$",
    shortDescription: "Bowling + full bar + food",
    description:
      "Waconia's go-to entertainment venue combining bowling lanes with a full bar and scratch kitchen. Great for groups, date nights, and family outings.",
    address: "Waconia, MN 55387",
    lat: 44.8515,
    lng: -93.7858,
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
      { title: "Reserve Lanes on Weekends", description: "Walk-in lanes fill up fast on Friday and Saturday nights." },
      { title: "Cosmic Bowling", description: "Glow-in-the-dark bowling Friday and Saturday after 9pm." },
      { title: "Group Packages", description: "Ask about party packages for birthdays and events." },
    ],
    whatToExpect: {
      atmosphere: "Fun, casual, family-friendly",
      crowd: "All ages — families to college groups",
      liveEvents: "Cosmic bowling nights",
      outdoorSeating: "No",
    },
    image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800&q=80",
  },
  {
    slug: "island-view-golf-club",
    name: "Island View Golf Club",
    category: "RETAIL",
    categoryLabel: "Golf Course",
    categorySlugs: ["things-to-do"],
    rating: 4.5,
    reviewCount: "480",
    priceLevel: "$$",
    shortDescription: "18-hole public golf, lake views",
    description:
      "An 18-hole semi-private course just outside Waconia with rolling fairways and views toward Lake Waconia. Pro shop, full clubhouse, leagues, and event hosting.",
    address: "9320 Klein Cir, Waconia, MN 55387",
    lat: 44.9019,
    lng: -93.7985,
    phone: "(952) 442-6116",
    website: "islandviewgc.com",
    hours: HOURS_VARIES,
    tips: [
      { title: "Twilight Rates", description: "Discounted rounds after 4pm in summer." },
      { title: "League Play Mid-Week", description: "Plan tee times around weekday league nights." },
      { title: "Walk Friendly", description: "Walkable layout for those who prefer to skip the cart." },
    ],
    whatToExpect: {
      atmosphere: "Suburban country club",
      crowd: "Golfers, league nights, weddings",
      liveEvents: "Tournaments throughout summer",
      outdoorSeating: "Patio overlooking 18th green",
    },
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
  },
  {
    slug: "carver-county-historical-society",
    name: "Carver County Historical Society",
    category: "RETAIL",
    categoryLabel: "Museum",
    categorySlugs: ["things-to-do"],
    rating: 4.6,
    reviewCount: "85",
    priceLevel: "$",
    shortDescription: "Local history museum & archives",
    description:
      "The county's history museum and archives — Dakota and early settler artifacts, Coney Island of Lake Waconia ephemera, agricultural history, and changing exhibits. Small admission, large local context.",
    address: "555 W First St, Waconia, MN 55387",
    lat: 44.8506,
    lng: -93.7935,
    phone: "(952) 442-4234",
    website: "carvercountyhistoricalsociety.org",
    hours: HOURS_VARIES,
    tips: [
      { title: "Coney Island Exhibit", description: "Their Coney Island archive is the most complete public source on the island's resort era." },
      { title: "Genealogy Help", description: "Staff can help with Carver County genealogy research." },
      { title: "School Group Friendly", description: "Hands-on activities for younger visitors." },
    ],
    whatToExpect: {
      atmosphere: "Local museum, friendly staff",
      crowd: "History buffs, families, researchers",
      liveEvents: "Lectures, kids events seasonally",
      outdoorSeating: "N/A",
    },
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80",
  },
  {
    slug: "waconia-public-library",
    name: "Waconia Public Library",
    category: "LOCAL SERVICES",
    categoryLabel: "Library",
    categorySlugs: ["services", "things-to-do"],
    rating: 4.8,
    reviewCount: "210",
    priceLevel: "$",
    shortDescription: "Carver County library branch",
    description:
      "A branch of the Carver County Library system. Open stacks, community programs, kids' story times, public Wi-Fi, study rooms, and a popular summer reading program.",
    address: "217 S Vine St, Waconia, MN 55387",
    lat: 44.8504,
    lng: -93.7873,
    phone: "(952) 442-4714",
    website: "carverlib.org",
    hours: HOURS_VARIES,
    tips: [
      { title: "Free Library Card", description: "Any Minnesota resident can get a Carver County library card free." },
      { title: "Summer Reading", description: "The summer reading program runs every June–August for all ages." },
      { title: "Reserve Online", description: "Place holds via the catalog and pick up at the front desk." },
    ],
    whatToExpect: {
      atmosphere: "Quiet, welcoming, modern branch",
      crowd: "Families, students, retirees",
      liveEvents: "Story times, author events",
      outdoorSeating: "N/A",
    },
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
  },
  {
    slug: "ridgeview-medical-center",
    name: "Ridgeview Medical Center",
    category: "LOCAL SERVICES",
    categoryLabel: "Hospital",
    categorySlugs: ["services"],
    rating: 4.5,
    reviewCount: "320",
    priceLevel: "$$",
    shortDescription: "Full-service hospital & clinics",
    description:
      "Ridgeview is the regional hospital for Waconia and western Carver County, offering emergency care, surgery, women's health, primary care, and a network of specialty clinics across the area.",
    address: "500 S Maple St, Waconia, MN 55387",
    lat: 44.8474,
    lng: -93.7896,
    phone: "(952) 442-2191",
    website: "ridgeviewmedical.org",
    hours: STANDARD_HOURS_24,
    tips: [
      { title: "ER 24/7", description: "Full emergency department open around the clock." },
      { title: "MyChart", description: "Use MyChart to message your provider and review records." },
      { title: "Walk-In Clinic", description: "Same-day urgent care available at the on-campus clinic." },
    ],
    whatToExpect: {
      atmosphere: "Modern regional hospital",
      crowd: "Patients and families across Carver County",
      liveEvents: "N/A",
      outdoorSeating: "N/A",
    },
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    slug: "great-clips-waconia",
    name: "Great Clips",
    category: "LOCAL SERVICES",
    categoryLabel: "Hair Salon",
    categorySlugs: ["services"],
    rating: 4.5,
    reviewCount: "320",
    priceLevel: "$",
    shortDescription: "Walk-in haircuts, online check-in",
    description:
      "Convenient walk-in hair salon offering affordable haircuts for the whole family. Online check-in lets you skip the wait.",
    address: "875 Marketplace Dr, Waconia, MN 55387",
    lat: 44.8627,
    lng: -93.7898,
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
      { title: "Use Online Check-In", description: "Check in via the app to skip the wait entirely." },
      { title: "Weekday Mornings Are Quietest", description: "Visit before noon on weekdays for the shortest waits." },
      { title: "Clip Notes", description: "Ask them to save your Clip Notes for consistent cuts every time." },
    ],
    whatToExpect: {
      atmosphere: "Clean, modern salon",
      crowd: "Families and walk-in customers",
      liveEvents: "N/A",
      outdoorSeating: "N/A",
    },
    image: "https://images.unsplash.com/photo-1585747860019-8e79b5b2fb1a?w=800&q=80",
  },
  {
    slug: "aldi-waconia",
    name: "Aldi Waconia",
    category: "LOCAL SERVICES",
    categoryLabel: "Grocery Store",
    categorySlugs: ["shopping"],
    rating: 4.4,
    reviewCount: "280",
    priceLevel: "$",
    shortDescription: "Grocery store, everyday low prices",
    description:
      "Aldi offers high-quality groceries at everyday low prices. Known for efficient shopping, quality private-label products, and a streamlined store layout.",
    address: "875 Marketplace Dr, Waconia, MN 55387",
    lat: 44.8624,
    lng: -93.7891,
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
      { title: "Bring a Quarter", description: "You'll need a quarter for the cart deposit (you get it back)." },
      { title: "Bring Your Own Bags", description: "Aldi charges for bags — BYOB saves you money." },
      { title: "Aldi Finds Aisle", description: "Check the rotating Aldi Finds for seasonal deals and surprises." },
    ],
    whatToExpect: {
      atmosphere: "Efficient, no-frills grocery shopping",
      crowd: "Local shoppers",
      liveEvents: "N/A",
      outdoorSeating: "N/A",
    },
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
  },
  {
    slug: "coborns-waconia",
    name: "Coborn's",
    category: "LOCAL SERVICES",
    categoryLabel: "Grocery Store",
    categorySlugs: ["shopping"],
    rating: 4.4,
    reviewCount: "390",
    priceLevel: "$$",
    shortDescription: "Full-service grocery store",
    description:
      "Waconia's full-service grocery store. Fresh produce, deli, bakery, pharmacy, and a wider selection than the competing discount chains. The community's anchor grocery.",
    address: "1071 W First St, Waconia, MN 55387",
    lat: 44.8552,
    lng: -93.7948,
    phone: "(952) 442-4070",
    website: "coborns.com",
    hours: HOURS_VARIES,
    tips: [
      { title: "Coborn's Delivers", description: "Online ordering with curbside or same-day delivery via the app." },
      { title: "MORE Rewards", description: "Loyalty program stacks with weekly digital coupons." },
      { title: "Pharmacy On-Site", description: "Full prescription pharmacy in-store." },
    ],
    whatToExpect: {
      atmosphere: "Bright, full-service supermarket",
      crowd: "Families, weekly shoppers",
      liveEvents: "N/A",
      outdoorSeating: "N/A",
    },
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
  },
  {
    slug: "westside-liquor-waconia",
    name: "Westside Liquor",
    category: "RETAIL",
    categoryLabel: "Liquor Store",
    categorySlugs: ["shopping"],
    rating: 4.5,
    reviewCount: "180",
    priceLevel: "$$",
    shortDescription: "Wine, beer & spirits",
    description:
      "A regional liquor store with a deep beer cooler, broad wine selection, and helpful staff. One of the better-stocked stores between the western suburbs and St. Cloud.",
    address: "1071 W First St, Waconia, MN 55387",
    lat: 44.8550,
    lng: -93.7944,
    phone: "(952) 442-3553",
    website: "westsideliquor.com",
    hours: HOURS_VARIES,
    tips: [
      { title: "Local Craft Section", description: "Strong Minnesota craft beer and cider selection — locals first." },
      { title: "Wine Tastings", description: "Regular Friday afternoon tastings in season." },
      { title: "Staff Picks", description: "Ask — they'll steer you well in any price range." },
    ],
    whatToExpect: {
      atmosphere: "Spacious, well-organized liquor store",
      crowd: "Locals stocking up",
      liveEvents: "Wine tastings",
      outdoorSeating: "N/A",
    },
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
  },
  {
    slug: "lake-waconia-marine",
    name: "Lake Waconia Marine",
    category: "RETAIL",
    categoryLabel: "Marina & Boat Sales",
    categorySlugs: ["services", "things-to-do"],
    rating: 4.6,
    reviewCount: "140",
    priceLevel: "$$$",
    shortDescription: "Boat sales, service & storage",
    description:
      "The local marina for new and pre-owned boat sales, factory-certified service, winter storage, and pontoon and fishing boat rentals during the summer season.",
    address: "Lake Waconia, Waconia, MN 55387",
    lat: 44.8540,
    lng: -93.7910,
    phone: "(952) 442-2096",
    website: "",
    hours: HOURS_VARIES,
    tips: [
      { title: "Book Rentals Early", description: "Summer weekend pontoon rentals book out weeks ahead." },
      { title: "Winterize By October", description: "Schedule winterization slots before snow." },
      { title: "Service & Parts", description: "On-site mechanics handle most major brands." },
    ],
    whatToExpect: {
      atmosphere: "Working marina, friendly service",
      crowd: "Boat owners, summer renters",
      liveEvents: "N/A",
      outdoorSeating: "N/A",
    },
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
  },
  {
    slug: "amerivu-inn-suites",
    name: "AmeriVu Inn & Suites",
    category: "RETAIL",
    categoryLabel: "Hotel & Lodging",
    categorySlugs: ["lodging"],
    rating: 4.3,
    reviewCount: "190",
    priceLevel: "$$",
    shortDescription: "Waconia's only hotel",
    description:
      "Waconia's only in-town hotel — comfortable rooms, complimentary breakfast, pet-friendly, free parking, and easy access to Lake Waconia and downtown attractions.",
    address: "493 Holiday Dr, Waconia, MN 55387",
    lat: 44.8622,
    lng: -93.7944,
    phone: "(952) 442-0000",
    website: "",
    hours: STANDARD_HOURS_24,
    tips: [
      { title: "Book Direct", description: "Best rates when you book directly with the hotel." },
      { title: "Lake Access", description: "Ask the front desk for directions to the nearest boat launch." },
      { title: "Free Breakfast", description: "Complimentary continental breakfast included with every stay." },
    ],
    whatToExpect: {
      atmosphere: "Clean, comfortable, family-friendly",
      crowd: "Tourists and business travelers",
      liveEvents: "N/A",
      outdoorSeating: "N/A",
    },
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    slug: "dmv-waconia-mn",
    name: "Waconia DMV / Deputy Registrar",
    category: "LOCAL SERVICES",
    categoryLabel: "Government Services",
    categorySlugs: ["services"],
    rating: 4.0,
    reviewCount: "150",
    priceLevel: "$",
    shortDescription: "Vehicle tabs, titles, driver's licenses",
    description:
      "Waconia Deputy Registrar handles vehicle tabs, titles, registration, driver's licenses and state IDs for Carver County residents. Faster service than metro locations.",
    address: "217 Vine St S, Waconia, MN 55387",
    lat: 44.8507,
    lng: -93.7872,
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
      { title: "Bring Current Registration", description: "Have your current registration handy to speed up the process." },
      { title: "Arrive 30 Min Before Close", description: "Lines can form near closing — arrive with time to spare." },
      { title: "Check MN DVS Website", description: "Download forms ahead of time from the MN DVS website." },
    ],
    whatToExpect: {
      atmosphere: "Government office, professional",
      crowd: "Local residents handling vehicle and ID needs",
      liveEvents: "N/A",
      outdoorSeating: "N/A",
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    slug: "schram-haus-brewery",
    name: "Schram Haus Brewery",
    category: "BARS",
    categoryLabel: "Brewery & Taproom",
    categorySlugs: ["breweries-wineries"],
    rating: 4.6,
    reviewCount: "380",
    priceLevel: "$$",
    shortDescription: "Downtown craft brewery with a community vibe",
    description:
      "A second downtown craft brewery option in Waconia. Schram Haus pours rotating taps in a relaxed taproom setting — small-batch IPAs, lagers, and seasonal releases. Family-owned, dog-friendly outdoor seating in season.",
    address: "Downtown Waconia, MN 55387",
    lat: 44.8501,
    lng: -93.7884,
    phone: "(952) 442-5000",
    website: "schramhaus.com",
    hours: HOURS_VARIES,
    tips: [
      { title: "Rotating Tap List", description: "Check the latest releases on their website or socials before visiting — seasonal beers move fast." },
      { title: "Group-Friendly", description: "Spacious taproom handles larger groups well; no reservations required." },
      { title: "BYO Food", description: "No kitchen on-site — order delivery or grab takeout from a downtown restaurant." },
    ],
    whatToExpect: {
      atmosphere: "Relaxed, modern taproom",
      crowd: "Beer enthusiasts, locals",
      liveEvents: "Occasional events and tap takeovers",
      outdoorSeating: "Seasonal patio",
    },
    image: "https://images.unsplash.com/photo-1518176258769-f227c798150e?w=800&q=80",
  },
  {
    slug: "lakeside-tavern-waconia",
    name: "Lakeside Tavern",
    category: "DINING",
    categoryLabel: "Tavern & Pub",
    categorySlugs: ["restaurants"],
    rating: 4.4,
    reviewCount: "420",
    priceLevel: "$$",
    shortDescription: "Casual tavern fare, full bar, lake adjacent",
    description:
      "A neighborhood tavern with a deep bench of pub classics — burgers, wings, fish fry Fridays, and a full bar. Walking distance from the lake; the kind of place where regulars sit at the same stool every Tuesday.",
    address: "Downtown Waconia, MN 55387",
    lat: 44.8493,
    lng: -93.7869,
    phone: "(952) 442-3300",
    website: "",
    hours: HOURS_VARIES,
    tips: [
      { title: "Friday Fish Fry", description: "The Friday cod fry is a Waconia weekend tradition — arrive before 6pm or expect a wait." },
      { title: "Sit at the Bar", description: "The bartenders know everyone — the bar is the social center, not the dining room." },
      { title: "Sunday Football", description: "Multiple TVs with NFL Sunday Ticket; the place to watch the Vikings." },
    ],
    whatToExpect: {
      atmosphere: "Classic neighborhood tavern",
      crowd: "Locals, regulars, Vikings fans",
      liveEvents: "Trivia or karaoke select weeks",
      outdoorSeating: "Sidewalk in season",
    },
    image: "https://images.unsplash.com/photo-1538488881038-e252a119ace7?w=800&q=80",
  },
  {
    slug: "waconia-public-schools-isd-110",
    name: "Waconia Public Schools (ISD 110)",
    category: "LOCAL SERVICES",
    categoryLabel: "School District",
    categorySlugs: ["services"],
    rating: 4.6,
    reviewCount: "210",
    priceLevel: "$",
    shortDescription: "Independent School District 110",
    description:
      "Independent School District 110 — Waconia Public Schools. Includes Waconia High School, Waconia Middle School, and three elementary schools (Bayview, Southview, Clearwater). Wright County Conference; mascot: Wildcats. One of the strongest suburban Minnesota districts.",
    address: "1717 Community Dr, Waconia, MN 55387",
    lat: 44.8460,
    lng: -93.7754,
    phone: "(952) 442-0600",
    website: "isd110.org",
    hours: HOURS_VARIES,
    tips: [
      { title: "Verify Boundaries", description: "Elementary boundaries shift as the district grows — confirm with the enrollment office before relying on a search-result map." },
      { title: "Community Education", description: "ISD 110's Community Education program runs after-school enrichment, adult learning, summer camps, and family events year-round." },
      { title: "Friday Football", description: "WHS football is a community event — Friday night home games draw the whole town." },
    ],
    whatToExpect: {
      atmosphere: "Modern suburban school district",
      crowd: "Families, students, community members",
      liveEvents: "Athletics, arts performances, school board meetings",
      outdoorSeating: "N/A",
    },
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  },
  {
    slug: "bayview-event-center",
    name: "Bayview Event Center",
    category: "RETAIL",
    categoryLabel: "Event Venue",
    categorySlugs: ["things-to-do"],
    rating: 4.7,
    reviewCount: "260",
    priceLevel: "$$$",
    shortDescription: "Lakefront wedding & event venue",
    description:
      "A lakefront event center on Lake Waconia, hosting weddings, corporate events, and large gatherings with floor-to-ceiling lake views, full catering, and on-site lodging packages.",
    address: "615 Lake St E, Waconia, MN 55387",
    lat: 44.8542,
    lng: -93.7795,
    phone: "(952) 442-4505",
    website: "bayviewwaconia.com",
    hours: HOURS_VARIES,
    tips: [
      { title: "Book a Year Out", description: "Summer Saturdays book 12–18 months in advance." },
      { title: "Sunset Ceremonies", description: "West-facing aisle catches the sunset over the lake." },
      { title: "Group Lodging", description: "Ask about block bookings at AmeriVu Inn nearby." },
    ],
    whatToExpect: {
      atmosphere: "Elegant lakefront ballroom",
      crowd: "Wedding parties, corporate retreats",
      liveEvents: "Weddings, fundraisers, holiday events",
      outdoorSeating: "Lake-facing patio & ceremony lawn",
    },
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
  },
];

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug);
}

export function getBusinessesByCategory(slug: CategorySlug): Business[] {
  return businesses.filter((b) => b.categorySlugs.includes(slug));
}

export function getRelatedBusinesses(
  currentSlug: string,
  limit = 4
): Business[] {
  const current = getBusinessBySlug(currentSlug);
  if (!current) return businesses.filter((b) => b.slug !== currentSlug).slice(0, limit);

  // Prefer businesses sharing a category with the current one.
  const sameCategory = businesses.filter(
    (b) =>
      b.slug !== currentSlug &&
      b.categorySlugs.some((c) => current.categorySlugs.includes(c)),
  );
  const others = businesses.filter(
    (b) => b.slug !== currentSlug && !sameCategory.includes(b),
  );
  return [...sameCategory, ...others].slice(0, limit);
}
