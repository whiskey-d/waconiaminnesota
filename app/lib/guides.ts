export interface Guide {
  slug: string;
  title: string;
  metaDescription: string;
  heroImage: string;
  updatedDate: string;          // human-readable, e.g. "January 5, 2025"
  updatedIso: string;           // ISO 8601, e.g. "2025-01-05"
  publishedIso: string;         // ISO 8601 first-published date
  author: string;
  authorSlug?: string;          // links to /about#author-<slug>
  stats: { label: string; value: string }[];
  content: GuideSection[];
  sidebarMap?: {
    publicAccess: string;
    boatLaunchFee: string;
    waterClarity: string;
  };
  sidebarFacts?: { label: string; value: string }[];
  relatedGuides: { title: string; readTime: string; href: string }[];
  faqs?: { question: string; answer: string }[];
}

export interface GuideSection {
  type: "text" | "richText" | "heading" | "pullquote" | "photoGrid" | "infoCards" | "cta";
  heading?: string;
  body?: string;
  quote?: string;
  attribution?: string;
  photos?: { src: string; alt: string }[];
  cards?: { title: string; body: string; icon: string; link?: { label: string; href: string } }[];
  ctaTitle?: string;
  ctaDescription?: string;
  buttons?: { label: string; href: string; variant: "primary" | "outline" }[];
}

export const guides: Guide[] = [
  {
    slug: "lake-waconia-fishing",
    title: "Fishing Guide for Lake Waconia: Seasonal Tips & Hotspots",
    metaDescription:
      "Complete seasonal fishing guide for Lake Waconia. Expert tips for walleye, bass, pike, and muskie across all four seasons.",
    heroImage:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600",
    updatedDate: "December 15, 2024",
    updatedIso: "2024-12-15",
    publishedIso: "2024-08-01",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Surface Area", value: "3,080 Acres" },
      { label: "Max Depth", value: "37 Feet" },
      { label: "Fish Species", value: "12+" },
    ],
    content: [
      {
        type: "text",
        body: "Lake Waconia is one of the largest lakes in the Twin Cities metro area and one of Minnesota's premier fishing destinations. Spanning 3,080 acres with a maximum depth of 37 feet, this Carver County gem supports a thriving ecosystem of game fish that draws anglers from across the state year-round. Whether you're a seasoned tournament angler or casting your first line, this guide covers everything you need to know about fishing Lake Waconia across all four seasons.",
      },
      {
        type: "heading",
        heading: "Spring: The Walleye Run",
      },
      {
        type: "text",
        body: "As soon as ice-out occurs (typically mid-to-late April), Lake Waconia's walleye season kicks into high gear. The shallow reefs and gravel bars come alive as walleye move into spawning areas. Target depths of 8 to 12 feet with minnows or soft plastic jigs. The north shore's rock structures are prime spring territory. Early mornings and late evenings produce the best bites during this transition period. Local guides recommend using 1/8 oz jig heads tipped with fathead minnows for consistent results.",
      },
      {
        type: "pullquote",
        quote:
          "Lake Waconia's spring walleye run is one of the most underrated bites in the metro area. Get here early, fish the gravel transitions, and you'll understand why locals guard this lake so fiercely.",
        attribution: "Local Guide Wisdom",
      },
      {
        type: "heading",
        heading: "Summer: Bass & Muskie Season",
      },
      {
        type: "text",
        body: "Summer transforms Lake Waconia into a bass and muskie playground. As water temperatures climb, largemouth bass stack up along weed edges, docks, and lily pad fields. Topwater lures at dawn and dusk are devastatingly effective. The thermocline typically sets up around 18 feet, concentrating fish at predictable depths. For muskie hunters, the west bay's extensive cabbage weed beds hold fish throughout the summer months. Work large bucktails and glide baits along weed edges during the golden hours for your best shot at a trophy.",
      },
      {
        type: "photoGrid",
        photos: [
          {
            src: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&q=80",
            alt: "Angler fishing at sunrise on Lake Waconia",
          },
          {
            src: "https://images.unsplash.com/photo-1532015644327-311954d1e706?w=600&q=80",
            alt: "Bass fishing in Lake Waconia weeds",
          },
        ],
      },
      {
        type: "heading",
        heading: "Fall: Trophy Walleye",
      },
      {
        type: "text",
        body: "Autumn is trophy walleye time on Lake Waconia. As water temperatures drop, walleye move from summer patterns to fall feeding binges, staging on deep structure and rock piles before winter sets in. Crankbaits worked along the 15-to-25 foot breaklines are deadly effective. Focus on the main lake points and the deep sunken island off the south shore. Pre-spawn staging areas see heavy concentrations of fish, and it's not uncommon to catch your personal best walleye during the October and November bite.",
      },
      {
        type: "heading",
        heading: "Winter: Ice Fishing Paradise",
      },
      {
        type: "text",
        body: "Lake Waconia is a top ice fishing destination in the Twin Cities metro. Once safe ice forms (always check ice thickness daily — 4 inches minimum for foot traffic), walleye and perch are the primary targets. Tip-ups baited with fathead minnows produce consistent walleye action in 15 to 25 feet of water. Jigging spoons and rattle baits worked aggressively below the ice can trigger reaction bites from lethargic fish. The DNR-managed access points are plowed throughout the season, making access easy even after major snowfalls.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🎣",
            title: "Recommended Gear",
            body: "Medium-light spinning rod (6'6\"), 6-8lb fluorocarbon, 1/8-1/4 oz jig heads, minnows and soft plastics. For muskie: heavy casting rod, 80lb braid, wire leaders.",
          },
          {
            icon: "🌿",
            title: "Conservation Note",
            body: "Lake Waconia is an Aquatic Invasive Species checkpoint. Clean, drain, and dry all equipment. Report any invasive species sightings to the MN DNR immediately.",
          },
        ],
      },
      {
        type: "heading",
        heading: "Boat Launches & Access Points",
      },
      {
        type: "text",
        body: "Lake Waconia offers three public boat launches for anglers. The city ramp off Lake Drive on the east shore is the most popular and closest to downtown. The Lake Waconia Regional Park ramp on the south shore offers excellent parking and facilities. A third access point is located on the northwest end of the lake. All three launches are free (state-managed), and the city ramp is open 24 hours during open water season.",
      },
      {
        type: "heading",
        heading: "Species Guide",
      },
      {
        type: "richText",
        body: "Lake Waconia supports an impressive variety of game fish. Walleye is the primary target species and the lake is regularly stocked by the MN DNR — review the complete <a href=\"https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900\" target=\"_blank\" rel=\"noopener noreferrer\">Lake Waconia fish survey reports and DNR stocking history</a> on the Minnesota DNR LakeFinder. Largemouth bass thrive in the extensive weed cover along the shoreline. Northern pike patrol the weed edges and can reach impressive sizes. Bluegill and crappie provide excellent panfish action, especially in spring and early summer. The lake also holds a small but growing population of muskie, making it a sleeper destination for trophy hunters willing to put in the time.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🗺️",
            title: "Depth Charts & DNR Survey Data",
            body: "View Lake Waconia's official depth charts, fish survey reports, and stocking history on the Minnesota DNR's LakeFinder — the state's authoritative source for lake data.",
            link: { label: "MN DNR Lake Waconia →", href: "https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900" },
          },
          {
            icon: "🏙️",
            title: "Plan Your Visit",
            body: "After a great day on the water, Waconia's downtown has you covered — waterfront dining, local breweries, and seasonal events all within minutes of the boat launch.",
            link: { label: "Explore Waconia →", href: "/directory" },
          },
        ],
      },
      {
        type: "heading",
        heading: "Lake Waconia Fishing Resources",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "📍",
            title: "Lake Waconia Depth Map & Survey",
            body: "Minnesota DNR's LakeFinder has the official depth contour map, fish survey results, and public access points for Lake Waconia (DOW 10-0059-00).",
            link: { label: "MN DNR LakeFinder →", href: "https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900" },
          },
          {
            icon: "🐟",
            title: "More Minnesota Fishing Lakes",
            body: "MN Fishing Lakes aggregates species profiles, DNR survey archives, access maps, and angler reports across Minnesota lakes — a useful companion to the DNR LakeFinder.",
            link: { label: "Browse MN Fishing Lakes →", href: "https://www.mnfishinglakes.com/" },
          },
        ],
      },
      {
        type: "cta",
        ctaTitle: "Ready for the Ultimate Catch?",
        ctaDescription:
          "Plan your Lake Waconia fishing trip with our interactive map and local guide connections.",
        buttons: [
          { label: "View Lake Map", href: "/directory", variant: "primary" },
          {
            label: "Find a Guide",
            href: "/directory",
            variant: "outline",
          },
        ],
      },
    ],
    sidebarMap: {
      publicAccess: "3 Locations",
      boatLaunchFee: "None — State",
      waterClarity: "Excellent",
    },
    relatedGuides: [
      {
        title: "Lake Waconia Complete Guide",
        readTime: "8 min read",
        href: "/guides/lake-waconia",
      },
      {
        title: "Lake Waconia Ice Fishing",
        readTime: "7 min read",
        href: "/guides/lake-waconia-ice-fishing",
      },
      {
        title: "Lake Waconia Boat Rentals",
        readTime: "5 min read",
        href: "/guides/lake-waconia-boat-rentals",
      },
    ],
    faqs: [
      {
        question: "What fish are in Lake Waconia?",
        answer: "Lake Waconia (DOW 10-0059-00) supports walleye, largemouth bass, northern pike, muskie, bluegill, crappie, and yellow perch. Walleye is the most-sought species and is regularly stocked by the Minnesota DNR.",
      },
      {
        question: "Do you need a license to fish Lake Waconia?",
        answer: "Yes. A valid Minnesota fishing license is required for all anglers age 16 and older. Licenses can be purchased online at the MN DNR website or at sporting goods retailers in Waconia and Carver County.",
      },
      {
        question: "Are there public boat launches on Lake Waconia?",
        answer: "Yes — Lake Waconia has three free public boat launches: the city ramp off Lake Drive on the east shore, the Lake Waconia Regional Park ramp on the south shore, and a third access point on the northwest end of the lake.",
      },
      {
        question: "When is ice fishing safe on Lake Waconia?",
        answer: "Lake Waconia typically has safe ice from mid-December through early March. Always check ice thickness yourself — at least 4 inches of new clear ice is the minimum for foot traffic, 8–12 inches for snowmobiles or ATVs.",
      },
      {
        question: "What is the best time of year to fish Lake Waconia?",
        answer: "Spring (post ice-out through early June) is prime walleye season. Summer is best for bass and muskie. Fall delivers trophy walleye on deep structure. Winter ice fishing produces consistent walleye and panfish action.",
      },
    ],
  },
  {
    slug: "lake-waconia",
    title: "Lake Waconia: The Complete Guide to Minnesota's Premier Lake",
    metaDescription:
      "Everything you need to know about Lake Waconia — boating, swimming, parks, and lakeside activities in Waconia, Minnesota.",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    updatedDate: "January 5, 2025",
    updatedIso: "2025-01-05",
    publishedIso: "2024-08-01",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Surface Area", value: "3,080 Acres" },
      { label: "Max Depth", value: "37 Feet" },
      { label: "Shoreline", value: "12+ Miles" },
    ],
    content: [
      {
        type: "text",
        body: "Lake Waconia is the crown jewel of Carver County and one of the largest lakes in the Twin Cities metropolitan area. At 3,080 acres, this stunning body of water offers everything from world-class fishing to peaceful sunset kayaking. Located just 35 miles west of Minneapolis, Lake Waconia provides that perfect balance of accessibility and escape that makes it a favorite among both locals and visitors from across Minnesota.",
      },
      {
        type: "heading",
        heading: "Boating & Water Sports",
      },
      {
        type: "text",
        body: "With over 3,000 acres of open water, Lake Waconia is a boater's paradise. Three public boat launches provide easy access, and the lake's size means there's always room to find your own stretch of water. Pontoon boat rentals are available from local marinas for those who want to enjoy a leisurely day on the water without owning a boat. Kayakers and paddleboarders favor the protected bays along the north shore, where calm waters and scenic shoreline make for memorable paddles.",
      },
      {
        type: "pullquote",
        quote:
          "There's something about watching the sun set over Lake Waconia from a boat that resets everything. This lake is Minnesota's best-kept secret, and those of us who live here plan to keep it that way.",
        attribution: "Longtime Waconia Resident",
      },
      {
        type: "heading",
        heading: "Swimming & Beaches",
      },
      {
        type: "text",
        body: "Lake Waconia Regional Park features a well-maintained swimming beach that's perfect for families. The gradual entry, clean sand, and lifeguard presence during summer months make it one of the safest swimming spots in the area. The park also offers picnic shelters, playgrounds, and restrooms, making it easy to spend an entire day lakeside. The beach is typically open from Memorial Day through Labor Day.",
      },
      {
        type: "heading",
        heading: "Parks & Trails",
      },
      {
        type: "text",
        body: "The Lake Waconia Regional Park on the south shore is the centerpiece of the lake's recreational offerings. The park features miles of hiking and biking trails that wind through prairie, woodland, and lakeside habitats. In winter, cross-country ski trails are groomed for Nordic skiing enthusiasts. The park connects to the broader Carver County trail system, offering extended exploration opportunities for serious hikers and cyclists.",
      },
      {
        type: "photoGrid",
        photos: [
          {
            src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
            alt: "Scenic view of Lake Waconia shoreline",
          },
          {
            src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
            alt: "Nature trails near Lake Waconia",
          },
        ],
      },
      {
        type: "heading",
        heading: "Winter Activities",
      },
      {
        type: "text",
        body: "Lake Waconia is equally spectacular in winter. Ice fishing is the marquee winter activity, with walleye and panfish drawing anglers from across the metro. The lake also offers excellent snowmobiling access and nearby cross-country ski trails. The annual ice fishing contests are community highlights that bring together experienced anglers and newcomers alike.",
      },
      {
        type: "heading",
        heading: "Getting Here",
      },
      {
        type: "text",
        body: "Lake Waconia is located in Carver County, approximately 35 miles west of Minneapolis via Highway 5. The main public access is at Lake Waconia Regional Park on the south shore. Downtown Waconia's restaurants, breweries, and shops are just a five-minute drive from the lake, making it easy to combine a day on the water with an evening downtown.",
      },
      {
        type: "heading",
        heading: "Fishing & Lake Data Resources",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🎣",
            title: "Lake Waconia Depth Charts & Fish Surveys",
            body: "Planning a fishing trip? The MN DNR LakeFinder has Lake Waconia's depth charts, fish survey reports, species breakdowns, and stocking history — the authoritative source.",
            link: { label: "MN DNR Lake Waconia →", href: "https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900" },
          },
          {
            icon: "📊",
            title: "Minnesota Lake Fishing Database",
            body: "An independent resource aggregating fishing reports, interactive lake maps, and DNR data across Minnesota lakes — useful companion to the LakeFinder.",
            link: { label: "Explore MN Fishing Lakes →", href: "https://www.mnfishinglakes.com/" },
          },
        ],
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Lake Waconia Adventure",
        ctaDescription:
          "Explore everything Waconia has to offer — from lakeside dining to local events.",
        buttons: [
          {
            label: "Explore Directory",
            href: "/directory",
            variant: "primary",
          },
          { label: "View Events", href: "/events", variant: "outline" },
        ],
      },
    ],
    sidebarMap: {
      publicAccess: "3 Locations",
      boatLaunchFee: "None — State",
      waterClarity: "Excellent",
    },
    relatedGuides: [
      {
        title: "Lake Waconia Fishing Guide",
        readTime: "12 min read",
        href: "/guides/lake-waconia-fishing",
      },
      {
        title: "Lake Waconia Regional Park",
        readTime: "6 min read",
        href: "/guides/lake-waconia-regional-park",
      },
      {
        title: "Coney Island of Lake Waconia",
        readTime: "5 min read",
        href: "/guides/coney-island-lake-waconia",
      },
    ],
    faqs: [
      {
        question: "How big is Lake Waconia?",
        answer: "Lake Waconia covers 3,080 acres with a maximum depth of 37 feet and over 12 miles of shoreline. It is one of the largest lakes in the Twin Cities metropolitan area.",
      },
      {
        question: "Where is Lake Waconia located?",
        answer: "Lake Waconia is located in Waconia, Minnesota, in Carver County — approximately 35 miles west of downtown Minneapolis via Highway 5.",
      },
      {
        question: "Can you swim in Lake Waconia?",
        answer: "Yes. Lake Waconia Regional Park on the south shore features a public swimming beach with a gradual sandy entry, lifeguards during summer months, picnic shelters, restrooms, and a playground. The beach is typically open Memorial Day through Labor Day.",
      },
      {
        question: "Is there an island in Lake Waconia?",
        answer: "Yes — Coney Island of Lake Waconia, historically called the 'Coney Island of the West', sits in the middle of the lake. In the late 1800s and early 1900s it was a popular Minnesota resort destination. Today the island is part of the Lake Waconia Regional Park system.",
      },
      {
        question: "What does 'Waconia' mean?",
        answer: "'Waconia' is derived from the Dakota word 'Wakonja' (also spelled Wakhanyeza or similar), generally translated as 'fountain' or 'spring of water' — a reference to the lake's clear spring-fed waters.",
      },
    ],
  },
  // ────────────────────────────────────────────────────────────────────
  // Phase 4 guides — added 2026-05-03
  // ────────────────────────────────────────────────────────────────────
  {
    slug: "coney-island-lake-waconia",
    title: "Coney Island of Lake Waconia: The 'Coney Island of the West'",
    metaDescription:
      "The forgotten resort island in Lake Waconia. How a 31-acre island became a Gilded-Age destination, what's there today, and how to visit.",
    heroImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80",
    updatedDate: "May 3, 2026",
    updatedIso: "2026-05-03",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Island Size", value: "31 Acres" },
      { label: "Resort Era", value: "1884–1919" },
      { label: "Status Today", value: "Public Park" },
    ],
    content: [
      {
        type: "text",
        body: "Sit down at any Waconia bar and someone will tell you about the island. Coney Island of Lake Waconia — also called Coney Island of the West — is a 31-acre wooded island in the middle of Lake Waconia that, between 1884 and the late 1910s, was one of the most popular tourist destinations in the upper Midwest. Today it sits quiet in the lake, accessible only by boat, with the foundations of its hotel days still visible under a century of forest growth.",
      },
      {
        type: "heading",
        heading: "The Resort Era (1884–1919)",
      },
      {
        type: "text",
        body: "In 1884 a partnership of investors purchased the island and began converting it into a Minnesota resort modeled on its New York namesake. Within a decade Coney Island of the West had a 60-room hotel, dance pavilion, restaurant, picnic grounds, and a steamboat dock. Visitors arrived by train at the Waconia depot, then transferred to a lake steamboat that ran across to the island. At its peak the island hosted thousands of visitors during summer weekends — many of them families from Minneapolis and St. Paul escaping the city heat.",
      },
      {
        type: "pullquote",
        quote:
          "It was the destination — not Minnetonka, not the St. Croix. For three decades, if you said you were going to 'the lake', you meant Coney Island of Waconia.",
        attribution: "Carver County Historical Society",
      },
      {
        type: "heading",
        heading: "Decline and Quiet Years",
      },
      {
        type: "text",
        body: "The resort's fortunes turned in the 1910s. The automobile changed Minnesota tourism — families now drove to dozens of competing lakes rather than taking the train and ferry to a single island. World War I drained tourism and labor, the dance pavilion burned in a fire, and Prohibition (which arrived in Minnesota ahead of the federal amendment) cut deeply into the hotel's revenue model. By the early 1920s the resort had effectively closed. The hotel was demolished in 1965 after decades of disuse.",
      },
      {
        type: "heading",
        heading: "Coney Island Today",
      },
      {
        type: "text",
        body: "The island today is part of the Lake Waconia Regional Park system, managed by Carver County. There's no hotel, no pavilion, no dock services — just a wooded island with old foundations, walking paths, and primitive picnic areas. The island is open to the public during daylight hours but is reachable only by boat. Many Lake Waconia visitors paddle over by kayak or stop briefly during a pontoon tour. Carver County offers occasional ranger-led trips during summer.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🚣",
            title: "How to Visit",
            body: "Bring your own boat, kayak, or paddleboard. Launch from the city ramp on the east shore (closest, ~1 mile crossing) or the Lake Waconia Regional Park ramp on the south shore (~1.5 mile crossing).",
          },
          {
            icon: "📜",
            title: "See the Archives",
            body: "The Carver County Historical Society in Waconia holds the most complete public archive of Coney Island resort photos, brochures, and ephemera.",
            link: { label: "Visit the Historical Society →", href: "/directory/carver-county-historical-society" },
          },
        ],
      },
      {
        type: "heading",
        heading: "Practical Notes",
      },
      {
        type: "text",
        body: "There are no restrooms, no drinking water, and no concessions on the island today. Pack everything in and pack everything out. Wear shoes — the foundations of the old hotel and pavilion can be sharp. The island can be buggy in midsummer; bring repellent. Always check the weather before crossing — the lake can get choppy quickly when storms move in.",
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Lake Waconia Day",
        ctaDescription:
          "Pair an island visit with downtown Waconia — the round trip plus dinner makes for a perfect full day on the lake.",
        buttons: [
          { label: "Lake Waconia Guide", href: "/guides/lake-waconia", variant: "primary" },
          { label: "Things to Do", href: "/guides/things-to-do-waconia", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Size", value: "31 acres" },
      { label: "Manager", value: "Carver County" },
      { label: "Access", value: "Boat only" },
      { label: "Hotel demolished", value: "1965" },
      { label: "Cost to visit", value: "Free" },
    ],
    relatedGuides: [
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
      { title: "Waconia History", readTime: "9 min read", href: "/guides/waconia-history" },
      { title: "Lake Waconia Regional Park", readTime: "6 min read", href: "/guides/lake-waconia-regional-park" },
    ],
    faqs: [
      {
        question: "Can you visit Coney Island of Lake Waconia?",
        answer: "Yes — the island is part of the Lake Waconia Regional Park system and is open to the public during daylight hours. It is accessible only by private boat, kayak, or paddleboard; there is no public ferry or dock service.",
      },
      {
        question: "Why was it called the 'Coney Island of the West'?",
        answer: "The marketing borrowed the name from New York's Coney Island, then America's most famous resort. From 1884 through the late 1910s, the Waconia island operated a 60-room hotel, dance pavilion, restaurant, and steamboat service — a Minnesota equivalent of a coastal resort, hence 'of the West'.",
      },
      {
        question: "Is the old hotel still there?",
        answer: "No. The Coney Island hotel was demolished in 1965 after decades of disuse. Today only foundation remnants remain, surrounded by forest. The Carver County Historical Society in Waconia holds the most complete photo archive of the resort era.",
      },
      {
        question: "How big is Coney Island of Lake Waconia?",
        answer: "The island is approximately 31 acres, sitting in the middle of Lake Waconia's 3,080 acres. It is the largest island on the lake.",
      },
    ],
  },
  {
    slug: "things-to-do-waconia",
    title: "Things to Do in Waconia, Minnesota — A Local's Complete Guide",
    metaDescription:
      "The definitive list of things to do in Waconia, MN — Lake Waconia activities, breweries and wineries, dining, events, and seasonal favorites by a local.",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    updatedDate: "May 3, 2026",
    updatedIso: "2026-05-03",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "From Minneapolis", value: "35 Miles" },
      { label: "Lake Size", value: "3,080 Acres" },
      { label: "Annual Events", value: "12+" },
    ],
    content: [
      {
        type: "text",
        body: "Waconia punches above its weight. For a town of about 13,500 it has a 3,080-acre lake, a working winery on the water, an estate winery + brewery on the farmland west of town, a craft distillery, a luxury cinema, and one of Minnesota's longest-running county fairs. Whether you're here for an afternoon, a weekend, or thinking about moving — this is the local-first guide to what's worth doing.",
      },
      {
        type: "heading",
        heading: "On the Water",
      },
      {
        type: "text",
        body: "The lake is the centerpiece. In summer, rent a pontoon, kayak, or paddleboard from Lake Waconia Marine and spend the afternoon circling Coney Island. The Lake Waconia Regional Park beach on the south shore is the family swim spot — sandy, gradual entry, lifeguards in season. Anglers can launch from any of three free public ramps; walleye, bass, and pike all fish well here. In winter the lake transforms — ice fishing, snowmobiling, and the Crappie Contest in February draw crowds from across the metro.",
      },
      {
        type: "heading",
        heading: "Drink Local",
      },
      {
        type: "text",
        body: "Waconia is now a legitimate destination on Minnesota's craft beverage map. Waconia Brewing Co. anchors downtown with rotating taps and a seasonal patio. Schram Vineyards Winery & Brewery — fifteen minutes west — has estate wines, in-house beer, live music many weekends, and heated igloos in winter. Sovereign Estate Wine sits directly on Lake Waconia with one of the most photogenic patios in the state. J. Carver Distillery rounds out the spirits side with a small-batch cocktail room.",
      },
      {
        type: "heading",
        heading: "Eat Downtown",
      },
      {
        type: "text",
        body: "Iron Tap is the dinner default — the Father Bob Burger has a cult following. Egg-Cetera Cafe is the local breakfast institution; expect a wait on weekends. Lola's Lakehouse Eatery offers a casual lake-view patio when you want to eat looking at the water. Mucho Mexican is the family go-to for fajitas and margaritas, and Mocha Monkey is the morning coffee stop.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🎬",
            title: "Movies & Bowling",
            body: "Emagine Waconia is a luxury cinema with reclining leather seats, food and drink at your seat, and a large-format EMAX screen. Pair it with bowling at Garage for a classic small-town night out.",
            link: { label: "Things-to-do listings →", href: "/directory/things-to-do" },
          },
          {
            icon: "📜",
            title: "History & Museum",
            body: "The Carver County Historical Society downtown is small but rich — Dakota artifacts, Coney Island resort archives, agricultural history.",
            link: { label: "Historical Society →", href: "/directory/carver-county-historical-society" },
          },
        ],
      },
      {
        type: "heading",
        heading: "Annual Events",
      },
      {
        type: "text",
        body: "Anchor your trip to one of Waconia's signature events if you can. Nickle Dickle Day (September) is the flagship community festival — free, all day, downtown. The Carver County Fair (August) runs five days of livestock shows, demolition derby, midway rides, and live music. The Tree Lighting in the Park (Black Friday) kicks off the holiday season at the City Square Park gazebo. The Scarecrow Tour (October) turns the whole town into an outdoor art gallery for ten days.",
      },
      {
        type: "heading",
        heading: "Golf, Parks & Trails",
      },
      {
        type: "text",
        body: "Island View Golf Club is the local 18-hole course — rolling fairways and lake views toward Lake Waconia. The Lake Waconia Regional Park offers miles of hiking and biking trails, a swimming beach, and groomed cross-country ski trails in winter. City Square Park downtown is the heart of community events year-round.",
      },
      {
        type: "cta",
        ctaTitle: "Build Your Itinerary",
        ctaDescription:
          "Browse the directory by category to plan a perfect Waconia day or weekend.",
        buttons: [
          { label: "Browse Directory", href: "/directory", variant: "primary" },
          { label: "See Events", href: "/events", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Best season", value: "May–October" },
      { label: "Family-friendly?", value: "Yes" },
      { label: "Lake activity", value: "Year-round" },
      { label: "Drive from MSP", value: "~45 min" },
    ],
    relatedGuides: [
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
      { title: "Coney Island of Lake Waconia", readTime: "5 min read", href: "/guides/coney-island-lake-waconia" },
      { title: "Lake Waconia Regional Park", readTime: "6 min read", href: "/guides/lake-waconia-regional-park" },
    ],
    faqs: [
      {
        question: "What are the best things to do in Waconia, MN?",
        answer: "The headline activities in Waconia are: Lake Waconia (boating, fishing, swimming at the Regional Park), Schram Vineyards Winery & Brewery, Sovereign Estate Wine on the lakefront, Waconia Brewing Co. downtown, Iron Tap and Lola's Lakehouse for dining, the Emagine Waconia luxury cinema, the Carver County Historical Society, and seasonal events like Nickle Dickle Day, the Carver County Fair, and the Scarecrow Tour.",
      },
      {
        question: "Is Waconia worth visiting?",
        answer: "Yes — especially as a day trip or weekend from the Twin Cities. Waconia offers a 3,080-acre lake, four destination beverage producers (brewery, two wineries, distillery), strong dining, and a walkable downtown, all within 45 minutes of Minneapolis.",
      },
      {
        question: "How long should I spend in Waconia?",
        answer: "An afternoon is enough to walk downtown, visit a brewery or winery, and have dinner. A full day adds the lake or a hike. A weekend lets you cover both wineries, the lake, and a major event if you time it right.",
      },
      {
        question: "Is there free parking in downtown Waconia?",
        answer: "Yes — downtown Waconia has free street parking and free public lots. The City Square Park area has the largest concentration of free parking near restaurants, breweries, and shops.",
      },
    ],
  },
  {
    slug: "lake-waconia-regional-park",
    title: "Lake Waconia Regional Park: Beach, Trails & Activities",
    metaDescription:
      "Complete guide to Lake Waconia Regional Park — swimming beach, boat ramp, hiking trails, picnic shelters, and seasonal activities on the south shore.",
    heroImage:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80",
    updatedDate: "May 3, 2026",
    updatedIso: "2026-05-03",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Park Size", value: "245 Acres" },
      { label: "Beach Open", value: "May–Sep" },
      { label: "Boat Launch", value: "Free" },
    ],
    content: [
      {
        type: "text",
        body: "Lake Waconia Regional Park is the public face of Lake Waconia — 245 acres on the south shore managed by Carver County. The park is a free-to-enter, year-round destination with a swimming beach, boat ramp, picnic shelters, hiking and biking trails, and groomed cross-country ski trails in winter. For most visitors, this is where you actually meet the lake.",
      },
      {
        type: "heading",
        heading: "The Beach",
      },
      {
        type: "text",
        body: "The Lake Waconia Regional Park beach is the headline feature for families. The entry is sandy and gradual, the swimming area is roped off, and lifeguards are on duty during posted summer hours (typically Memorial Day through Labor Day, with reduced staffing in shoulder months). The grass area above the beach has picnic tables, restrooms, and a playground. There is no admission fee, though parking can fill on hot summer Saturdays — arrive before 11am or after 4pm for the easiest spot.",
      },
      {
        type: "heading",
        heading: "Boat Ramp",
      },
      {
        type: "text",
        body: "The park's boat ramp is the largest of three on the lake. It's free (state-managed) and open during the open-water season. Trailer parking is generous. The ramp is plowed and maintained for ice fishing access throughout the winter as well. Note: Lake Waconia is an Aquatic Invasive Species checkpoint — clean, drain, and dry your boat before launching.",
      },
      {
        type: "heading",
        heading: "Trails",
      },
      {
        type: "text",
        body: "The park has approximately five miles of multi-use trails winding through prairie, oak savanna, and lakeshore. The trails are mostly flat — friendly for kids, casual cyclists, and trail runners. In winter the trails are groomed for cross-country skiing (classic and skate). The park connects to the broader Carver County trail system for longer rides.",
      },
      {
        type: "heading",
        heading: "Picnic Shelters & Group Use",
      },
      {
        type: "text",
        body: "Three picnic shelters are available to reserve through Carver County Parks. Reservations open in spring and fill quickly for summer Saturdays. Walk-in tables are scattered along the beach lawn for casual lunches. Charcoal grills are available at the shelters; bring your own fuel.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🏖",
            title: "Beach Hours",
            body: "The swim beach is open dawn to dusk seasonally. Lifeguard hours are posted at the entrance and on Carver County Parks' website.",
          },
          {
            icon: "🐕",
            title: "Dogs",
            body: "Dogs are allowed on park trails on a leash. Dogs are NOT allowed on the swim beach itself during the season.",
          },
        ],
      },
      {
        type: "heading",
        heading: "Winter Use",
      },
      {
        type: "text",
        body: "The park doesn't close in winter. Cross-country ski trails are groomed regularly, the boat ramp is plowed for ice fishing access, and the lakeside roads see snowshoers and walkers throughout the season. The view of the frozen lake from the upper trails on a clear winter morning is one of the underrated experiences in the western suburbs.",
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Park Visit",
        ctaDescription:
          "Pair the park with downtown Waconia — the drive between is five minutes.",
        buttons: [
          { label: "Lake Waconia Guide", href: "/guides/lake-waconia", variant: "primary" },
          { label: "Things to Do", href: "/guides/things-to-do-waconia", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Manager", value: "Carver County" },
      { label: "Park entry", value: "Free" },
      { label: "Boat launch", value: "Free" },
      { label: "Dogs", value: "Trails only" },
      { label: "Open year-round", value: "Yes" },
    ],
    relatedGuides: [
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
      { title: "Lake Waconia Boat Rentals", readTime: "5 min read", href: "/guides/lake-waconia-boat-rentals" },
      { title: "Lake Waconia Fishing", readTime: "12 min read", href: "/guides/lake-waconia-fishing" },
    ],
    faqs: [
      {
        question: "Is Lake Waconia Regional Park free?",
        answer: "Yes. Park entry, beach access, and the boat ramp are all free. Picnic shelter reservations carry a small fee through Carver County Parks.",
      },
      {
        question: "What are the hours of Lake Waconia Regional Park?",
        answer: "The park is open daily from dawn to dusk year-round. Lifeguard hours at the swim beach are posted seasonally — typically late morning through early evening from Memorial Day through Labor Day.",
      },
      {
        question: "Are dogs allowed at Lake Waconia Regional Park?",
        answer: "Dogs are allowed on the park's trails on a leash. They are not allowed on the swim beach during the swim season.",
      },
      {
        question: "Where is Lake Waconia Regional Park?",
        answer: "Lake Waconia Regional Park is on the south shore of Lake Waconia in Waconia, Minnesota — approximately five minutes from downtown Waconia and 35 miles west of Minneapolis.",
      },
    ],
  },
  {
    slug: "lake-waconia-boat-rentals",
    title: "Lake Waconia Boat Rentals: Pontoons, Kayaks & SUPs",
    metaDescription:
      "Where to rent a pontoon, kayak, or paddleboard on Lake Waconia. Local rental options, prices, what to bring, and reservation tips.",
    heroImage: "/images/boating-lake-waconia.webp",
    updatedDate: "May 3, 2026",
    updatedIso: "2026-05-03",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Pontoon (full day)", value: "$400–$600" },
      { label: "Kayak (per hour)", value: "$15–$25" },
      { label: "Public Ramps", value: "3 Free" },
    ],
    content: [
      {
        type: "text",
        body: "Renting a boat on Lake Waconia is the quickest way to understand why locals are protective of this place. With 3,080 acres of open water, three free public boat launches, and a handful of local rental options, getting on the water is straightforward — but summer demand is intense. This guide covers what's available, how to book, and what to know before you launch.",
      },
      {
        type: "heading",
        heading: "Pontoon Rentals",
      },
      {
        type: "text",
        body: "Pontoons are the most popular rental on Lake Waconia. Lake Waconia Marine handles most of the local pontoon rental traffic and is the operator most locals recommend. Expect a four-hour minimum for short rentals, with full-day rentals running roughly $400–$600 depending on boat size and time of year. Operator licenses required by Minnesota law: anyone born after July 1, 1987 must have a valid Minnesota Watercraft Operator's Permit to legally operate the rental.",
      },
      {
        type: "pullquote",
        quote:
          "Reserve weekend pontoon rentals at least three weeks ahead in July and August. Holiday weekends — Memorial Day, July 4th, Labor Day — book out by mid-spring.",
        attribution: "Local rental advice",
      },
      {
        type: "heading",
        heading: "Kayaks & Paddleboards",
      },
      {
        type: "text",
        body: "Kayaks and paddleboards (SUPs) are easier to rent on shorter notice. Hourly rentals typically run $15–$25 for kayaks and $20–$30 for SUPs depending on operator and season. The most common pickup point is near the Lake Waconia Regional Park beach on the south shore. For the calmest paddling water, head into the protected bays along the north shore early in the morning before the wind picks up.",
      },
      {
        type: "heading",
        heading: "Where to Launch",
      },
      {
        type: "text",
        body: "Three free public ramps on Lake Waconia: the city ramp on the east shore (Lake Drive), the Lake Waconia Regional Park ramp on the south shore (best for trailered boats and parking), and a smaller access on the northwest end. All three are state-managed, all are free, and the city ramp is open 24 hours during the open-water season.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "📋",
            title: "Bring with You",
            body: "Driver's license, Minnesota Watercraft Operator's Permit (if born after July 1, 1987), payment method, sun protection, drinking water, and snacks. Most rentals include life jackets but bring extras for kids if you have them.",
          },
          {
            icon: "🌿",
            title: "AIS Compliance",
            body: "Lake Waconia is an Aquatic Invasive Species checkpoint. Clean, drain, and dry rental equipment is the operator's responsibility, but if you trailer your own boat in, you're responsible for inspection.",
          },
        ],
      },
      {
        type: "heading",
        heading: "Best Times to Be on the Lake",
      },
      {
        type: "text",
        body: "Mornings (before 10am) are the calmest — flat water, fewer boats, ideal for paddling and fishing. Mid-afternoon Saturdays and Sundays in July are peak chaos with wakeboard, ski, and tube traffic; if you want a quieter pontoon experience, weekday afternoons or Sunday evenings are dramatically calmer. Sunset cruises from 7pm onward are arguably the highlight of any Lake Waconia rental — west-facing views with the sun dropping over the western shore.",
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Rental Day",
        ctaDescription:
          "Reservations close out fast. Book early, and pair your rental with dinner at Lola's Lakehouse or Sovereign Estate Wine on the south shore.",
        buttons: [
          { label: "Marina Listing", href: "/directory/lake-waconia-marine", variant: "primary" },
          { label: "Lake Waconia Guide", href: "/guides/lake-waconia", variant: "outline" },
        ],
      },
    ],
    sidebarMap: {
      publicAccess: "3 Locations",
      boatLaunchFee: "None — State",
      waterClarity: "Excellent",
    },
    relatedGuides: [
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
      { title: "Lake Waconia Fishing Guide", readTime: "12 min read", href: "/guides/lake-waconia-fishing" },
      { title: "Lake Waconia Regional Park", readTime: "6 min read", href: "/guides/lake-waconia-regional-park" },
    ],
    faqs: [
      {
        question: "Can you rent a pontoon on Lake Waconia?",
        answer: "Yes. Lake Waconia Marine is the primary local pontoon rental operator. Full-day pontoon rentals run roughly $400–$600 depending on boat size and season. Reserve weekend rentals at least three weeks ahead in July and August.",
      },
      {
        question: "Do you need a license to drive a pontoon on Lake Waconia?",
        answer: "Anyone born after July 1, 1987 must hold a valid Minnesota Watercraft Operator's Permit to operate a motorized boat in Minnesota. The permit is earned through a free online course and exam administered by the MN DNR.",
      },
      {
        question: "Where can you rent kayaks on Lake Waconia?",
        answer: "Kayak and paddleboard rentals are typically available near the Lake Waconia Regional Park beach on the south shore during summer. Hourly rentals run $15–$25 for kayaks, $20–$30 for paddleboards.",
      },
      {
        question: "Are there any free public boat launches on Lake Waconia?",
        answer: "Yes — all three Lake Waconia boat launches are free and state-managed: the city ramp (east shore), Lake Waconia Regional Park ramp (south shore), and a smaller access on the northwest end of the lake.",
      },
    ],
  },
  {
    slug: "lake-waconia-ice-fishing",
    title: "Lake Waconia Ice Fishing: Walleye, Crappie & Safety Guide",
    metaDescription:
      "Complete Lake Waconia ice fishing guide — walleye and panfish hotspots, ice safety thresholds, gear list, and the Lake Waconia Crappie Contest.",
    heroImage:
      "https://images.unsplash.com/photo-1518182170546-07661fd94144?w=1600&q=80",
    updatedDate: "May 3, 2026",
    updatedIso: "2026-05-03",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Safe Ice (foot)", value: "4+ Inches" },
      { label: "Target Depth", value: "15–25 Feet" },
      { label: "Season", value: "Dec–March" },
    ],
    content: [
      {
        type: "text",
        body: "Lake Waconia is one of the Twin Cities metro's premier ice fishing destinations. Once safe ice forms — typically by mid-December — the lake transforms into a winter walleye and panfish factory. Walleye, perch, crappie, and bluegill all bite consistently through the season, and the lake's three plowed access points keep getting on the ice manageable even after major snowfalls.",
      },
      {
        type: "heading",
        heading: "Ice Safety — Read This First",
      },
      {
        type: "text",
        body: "Ice safety is non-negotiable. Always measure ice yourself; conditions vary significantly across Lake Waconia thanks to springs, current, and pressure ridges. Standard MN DNR guidance for new clear ice: 4 inches minimum for foot traffic, 5–7 inches for snowmobile or ATV, 8–12 inches for a small car or pickup, 12–15 inches for a medium truck. White or layered ice should be doubled. Early and late in the season, fish from a portable shelter near shore — the deep middle of the lake is the last to freeze and the first to weaken.",
      },
      {
        type: "pullquote",
        quote:
          "If you have to ask whether the ice is safe, it isn't. Ask a local at the bait shop, drill test holes as you walk, and never go alone the first time on the ice.",
        attribution: "Lake Waconia regular",
      },
      {
        type: "heading",
        heading: "Walleye: The Marquee Bite",
      },
      {
        type: "text",
        body: "Lake Waconia's walleye are the headline winter species. Target the 15-to-25-foot breaklines — the transition from the shallow flats to the deeper basin holds fish through the season. Tip-ups baited with fathead minnows produce consistent action; jigging spoons (Buck-Shot Rattle Spoons, Slender Spoons) tipped with a minnow head trigger reaction strikes from active fish. Best windows: first hour of light at dawn, last hour at dusk. Through the day, the south basin and the deep flats off the east shore both produce.",
      },
      {
        type: "heading",
        heading: "Panfish: Crappie & Bluegill",
      },
      {
        type: "text",
        body: "Lake Waconia's panfish action gets less hype than the walleye but is consistently strong. Crappie suspend in 18-to-25 feet over deeper basins — find them on a flasher and drop a small jigging Rapala or tungsten jig with a waxworm. Bluegill stack in the soft-bottom flats in 8-to-15 feet, especially near submerged vegetation transitions. Light line (4 lb fluorocarbon) and tiny tungsten ice jigs make a real difference for the bigger 'gills.",
      },
      {
        type: "heading",
        heading: "The Lake Waconia Crappie Contest",
      },
      {
        type: "text",
        body: "The annual Lake Waconia Crappie Contest is one of the metro's most popular ice fishing tournaments — typically held in February. Hundreds of anglers, family-friendly, with prizes for the largest crappies and a strong community feel. Check destinationwaconia.org and the contest's social pages closer to the date for the current year's specifics.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🎣",
            title: "Recommended Gear",
            body: "Ice rod (24–30\"), 4–8 lb fluorocarbon, fathead minnows, tungsten ice jigs, Buck-Shot Rattle Spoons, tip-ups for walleye, flasher (Vexilar/Marcum/Garmin), portable shelter, ice cleats, spud bar.",
          },
          {
            icon: "🌿",
            title: "Conservation Note",
            body: "Lake Waconia is an Aquatic Invasive Species checkpoint year-round. Clean, drain, and dry rods, augers, and equipment between lakes. Pack out all trash — winter trash on the ice ends up in the lake at thaw.",
          },
        ],
      },
      {
        type: "heading",
        heading: "Access in Winter",
      },
      {
        type: "text",
        body: "All three Lake Waconia public access points are plowed throughout the ice season. The south shore Regional Park ramp typically has the best parking and most consistent plowing after storms. The city ramp on the east shore is closer to downtown — handy if you're combining a fishing trip with food and beer.",
      },
      {
        type: "cta",
        ctaTitle: "Get on the Ice",
        ctaDescription:
          "Pair an early ice morning with breakfast at Egg-Cetera Cafe and a fresh pour at Waconia Brewing — the perfect winter loop.",
        buttons: [
          { label: "Lake Waconia Fishing", href: "/guides/lake-waconia-fishing", variant: "primary" },
          { label: "MN DNR LakeFinder", href: "https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900", variant: "outline" },
        ],
      },
    ],
    sidebarMap: {
      publicAccess: "3 Plowed",
      boatLaunchFee: "None",
      waterClarity: "Excellent",
    },
    relatedGuides: [
      { title: "Lake Waconia Fishing", readTime: "12 min read", href: "/guides/lake-waconia-fishing" },
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
      { title: "Lake Waconia Regional Park", readTime: "6 min read", href: "/guides/lake-waconia-regional-park" },
    ],
    faqs: [
      {
        question: "When is Lake Waconia safe for ice fishing?",
        answer: "Lake Waconia typically has safe new clear ice by mid-December and remains safe through early March in a normal winter. Always measure ice yourself — Minnesota DNR guidance is 4 inches minimum for foot traffic, 5–7 inches for snowmobile or ATV, and 8–12 inches before driving any vehicle on the ice.",
      },
      {
        question: "What fish are biting in Lake Waconia in winter?",
        answer: "Walleye, perch, crappie, and bluegill all bite consistently on Lake Waconia through the ice season. Walleye is the marquee species; target 15-to-25-foot breaklines with tip-ups and minnows or jigging spoons.",
      },
      {
        question: "Is there an ice fishing tournament on Lake Waconia?",
        answer: "Yes — the Lake Waconia Crappie Contest is held annually, typically in February. It is one of the most popular ice fishing tournaments in the Twin Cities metro and is family-friendly.",
      },
      {
        question: "Do you need a special license to ice fish in Minnesota?",
        answer: "A valid Minnesota fishing license is required for anglers age 16 and older. There is no separate ice fishing license, but if you use multiple lines (a tip-up plus a rod, for example) you must follow the Minnesota DNR's rules on legal lines per angler.",
      },
    ],
  },
  {
    slug: "waconia-history",
    title: "Waconia, Minnesota: A Local History (Dakota Roots to Today)",
    metaDescription:
      "The history of Waconia, Minnesota — the meaning of the Dakota name, German settlement in the 1850s, the Coney Island resort era, and the modern lakeside city.",
    heroImage:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1600&q=80",
    updatedDate: "May 3, 2026",
    updatedIso: "2026-05-03",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Founded", value: "1856" },
      { label: "Incorporated", value: "1882" },
      { label: "Population (2020)", value: "13,500+" },
    ],
    content: [
      {
        type: "text",
        body: "Waconia is older than Minnesota statehood. The Dakota people knew the lake first; German immigrants founded the modern town in 1856; the Gilded Age turned the island in the middle of the lake into a national resort; and the postwar decades transformed Waconia from a sleepy farm-and-lake town into one of the fastest-growing communities in Carver County. This is the short, honest version.",
      },
      {
        type: "heading",
        heading: "The Name: Dakota Origins",
      },
      {
        type: "text",
        body: "The name 'Waconia' derives from the Dakota language, generally translated as 'fountain' or 'spring of water' — a reference to the lake's clear, spring-fed character. The Dakota lived in this region for centuries before European contact, and Lake Waconia was a known seasonal site. Place-name scholars note variations of the spelling (Wakonja, Waconda, Wakhanyeza) across early sources, all pointing to the same root meaning.",
      },
      {
        type: "heading",
        heading: "Settlement: 1856 Onward",
      },
      {
        type: "text",
        body: "German immigrants — chiefly from northern German states and Bohemia — began arriving in the Lake Waconia area in 1856, two years before Minnesota became a state. They platted a townsite on the south shore in 1857. The community grew slowly through the 1860s, anchored by farming and the construction of grain elevators, churches, and a small commercial district along what is now Main Street. The town was officially incorporated as the Village of Waconia in 1882.",
      },
      {
        type: "pullquote",
        quote:
          "By 1880 Waconia had churches, mills, a brewery, and a downtown that any Carver County farmer recognized as a real town — but the lake was about to make it nationally famous.",
        attribution: "Carver County Historical Society",
      },
      {
        type: "heading",
        heading: "The Coney Island Resort Era (1884–1919)",
      },
      {
        type: "text",
        body: "In 1884 investors bought the 31-acre island in the middle of Lake Waconia and developed it into a Gilded-Age resort modeled on New York's Coney Island. At its peak, Coney Island of the West hosted a 60-room hotel, dance pavilion, restaurant, and steamboat service from the Waconia depot. Tourists arrived by train from Minneapolis and St. Paul, transferred to a lake steamer, and spent summer weekends on the island. The resort declined sharply after 1915 as automobiles, World War I, and Prohibition reshaped Minnesota tourism. (See our dedicated Coney Island guide for the full story.)",
      },
      {
        type: "heading",
        heading: "Mid-Century Waconia: Farming, Faith, and the Fair",
      },
      {
        type: "text",
        body: "After the resort era closed, Waconia returned to its agricultural roots. The Carver County Fair — first held in 1910 — anchored the summer calendar. Lutheran and Catholic churches anchored community life through the Depression and the war years. The lake remained a local recreation hub, but the national-tourism era was over. The town's population stayed under 1,500 through the 1950s.",
      },
      {
        type: "heading",
        heading: "Modern Growth (1980s to Today)",
      },
      {
        type: "text",
        body: "Highway upgrades, suburbanization of the Twin Cities, and Ridgeview Medical Center's expansion turned Waconia from a small farm town into one of Carver County's fastest-growing cities. Population roughly tripled between 1990 and 2020. Downtown reinvented itself with a new generation of independent restaurants, breweries, wineries, and distilleries. Today the city sits at over 13,500 residents — still small enough to walk downtown, big enough to support the craft economy that defines its modern identity.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "📜",
            title: "See the Archives",
            body: "The Carver County Historical Society in Waconia holds the most complete public archive on local history — Dakota artifacts, settler-era ephemera, the Coney Island archive, and rotating exhibits.",
            link: { label: "Visit the Historical Society →", href: "/directory/carver-county-historical-society" },
          },
          {
            icon: "🏝",
            title: "Coney Island Deep Dive",
            body: "For the full story of the resort era, see our dedicated guide to Coney Island of Lake Waconia.",
            link: { label: "Read the guide →", href: "/guides/coney-island-lake-waconia" },
          },
        ],
      },
      {
        type: "cta",
        ctaTitle: "Visit Waconia Today",
        ctaDescription:
          "The history is still here — in the buildings, the lake, the Carver County Fair. Walk downtown, then walk the south shore.",
        buttons: [
          { label: "Things to Do", href: "/guides/things-to-do-waconia", variant: "primary" },
          { label: "Lake Waconia Guide", href: "/guides/lake-waconia", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Founded", value: "1856" },
      { label: "Incorporated", value: "1882" },
      { label: "County", value: "Carver" },
      { label: "ZIP code", value: "55387" },
      { label: "Name origin", value: "Dakota" },
    ],
    relatedGuides: [
      { title: "Coney Island of Lake Waconia", readTime: "5 min read", href: "/guides/coney-island-lake-waconia" },
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
      { title: "Things to Do in Waconia", readTime: "7 min read", href: "/guides/things-to-do-waconia" },
    ],
    faqs: [
      {
        question: "What does Waconia mean?",
        answer: "'Waconia' derives from the Dakota language, generally translated as 'fountain' or 'spring of water' — a reference to Lake Waconia's clear, spring-fed waters. Variations of the spelling appear across early sources but all point to the same root meaning.",
      },
      {
        question: "When was Waconia founded?",
        answer: "Waconia was settled by German immigrants in 1856, two years before Minnesota became a state. The original townsite was platted on the south shore of Lake Waconia in 1857, and the community was officially incorporated as the Village of Waconia in 1882.",
      },
      {
        question: "What is Waconia, MN known for historically?",
        answer: "Three eras stand out. The Dakota knew the lake first and gave Waconia its name. German settlers founded the modern town in 1856 and built the agricultural community that defined it through 1900. The Coney Island of the West resort on the island in Lake Waconia made the town nationally known between 1884 and the late 1910s. After the resort era, Waconia returned to a farming economy and grew steadily into the modern lakeside city of 13,500+ today.",
      },
      {
        question: "Is Waconia in Carver County?",
        answer: "Yes. Waconia is in Carver County, Minnesota, and is the county's third-largest city (after Chaska and Chanhassen). The Carver County Historical Society and Carver County Fairgrounds are both located in Waconia.",
      },
    ],
  },
  {
    slug: "moving-to-waconia",
    title: "Moving to Waconia, MN: A Local's Relocation Guide",
    metaDescription:
      "Everything to know before moving to Waconia, Minnesota — neighborhoods, schools (District 110), commute, taxes, healthcare, and the real cost of lakeside living.",
    heroImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80",
    updatedDate: "May 3, 2026",
    updatedIso: "2026-05-03",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Population", value: "13,500+" },
      { label: "Drive to MSP", value: "~45 min" },
      { label: "School District", value: "ISD 110" },
    ],
    content: [
      {
        type: "text",
        body: "Waconia is on a lot of relocation shortlists — strong school district, big lake, walkable downtown, fast-growing but not overbuilt. This is the local-first relocation guide: what's actually true about commuting, schools, neighborhoods, healthcare, and the cost of living before you sign anything.",
      },
      {
        type: "heading",
        heading: "Where to Live in Waconia",
      },
      {
        type: "text",
        body: "Waconia's neighborhoods divide loosely into four character types. (1) Historic downtown / older south side — walkable to Main Street, small lots, classic homes from 1900–1960. (2) South-shore lakefront / lake-adjacent — the highest property values, with direct or near-direct Lake Waconia frontage. (3) North-side suburban developments (around the Marketplace shopping area) — newer construction from 2000–2020, larger lots, family-oriented. (4) Rural fringe / agricultural transition — homes on acreage outside the city limits, often with hobby farms or vineyard-adjacent parcels.",
      },
      {
        type: "heading",
        heading: "Schools (ISD 110)",
      },
      {
        type: "text",
        body: "Waconia students attend Independent School District 110 — Waconia Public Schools. The district consistently ranks well among Minnesota suburban districts, with Waconia High School, Waconia Middle School, and three elementary schools (Bayview, Southview, and Clearwater). The district is a major draw for families relocating from the metro. Private school options nearby include St. Joseph's Catholic School (PreK–8) in Waconia and several other parochial schools in surrounding communities.",
      },
      {
        type: "pullquote",
        quote:
          "The schools are why most families move here. The lake is why they stay.",
        attribution: "Local realtor",
      },
      {
        type: "heading",
        heading: "Commuting",
      },
      {
        type: "text",
        body: "Waconia is a 45-minute drive (off-peak) to downtown Minneapolis via Highway 5 and I-494. In peak rush hour the same drive can stretch to 60–70 minutes. There is no light rail or commuter rail to Waconia. SouthWest Transit operates limited park-and-ride buses from nearby Chaska and Chanhassen, which are 8 and 12 miles east respectively. Most Waconia commuters drive. If your job is in the western or southwestern metro (Eden Prairie, Chaska, Chanhassen, Minnetonka), the commute is much friendlier — 25–40 minutes door to door.",
      },
      {
        type: "heading",
        heading: "Healthcare",
      },
      {
        type: "text",
        body: "Ridgeview Medical Center, headquartered in Waconia, is the regional hospital — full-service emergency, surgery, women's health, and a network of primary care and specialty clinics across the area. It's also one of the city's largest employers. For specialty care beyond Ridgeview's scope, residents typically travel to the Twin Cities (Mayo, M Health Fairview, Allina, HealthPartners networks).",
      },
      {
        type: "heading",
        heading: "Taxes & Cost of Living",
      },
      {
        type: "text",
        body: "Carver County has property tax rates in line with the broader Twin Cities metro. The city of Waconia's tax levy is published annually by the city. Minnesota state income tax applies (4 brackets, top rate 9.85%); sales tax in Waconia is the state rate plus local option (combined typically 7.375%). Cost of living overall sits below the Minneapolis metro average — housing is the main reason — though lakefront properties price closer to metro standards.",
      },
      {
        type: "heading",
        heading: "Day-to-Day Life",
      },
      {
        type: "text",
        body: "Waconia has Coborn's and Aldi for full grocery shopping, Westside Liquor for wine and beer, the Carver County Library branch, and the full constellation of national chains along the Marketplace. Downtown Waconia is the social and cultural center — restaurants, breweries, City Square Park events, the Thursday farmers market in summer. The lake is genuinely usable: downtown to a public boat ramp is five minutes by car.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🏠",
            title: "Browse Real Estate",
            body: "We aggregate foreclosure and distressed-sale listings on a separate page — useful as one input among many in your search.",
            link: { label: "Waconia Foreclosures →", href: "/foreclosures" },
          },
          {
            icon: "🏨",
            title: "Visit Before You Move",
            body: "Spend a weekend before deciding. AmeriVu Inn or a lakefront Airbnb both work; we cover lodging in detail in our hotels guide.",
            link: { label: "Where to Stay →", href: "/hotels" },
          },
        ],
      },
      {
        type: "heading",
        heading: "What Locals Tell First-Time Buyers",
      },
      {
        type: "text",
        body: "Three things consistently come up when we talk to people who moved here in the last five years. First, lake-adjacent doesn't have to mean lake-frontage — homes within a five-minute walk to a public access point have most of the lake lifestyle for a fraction of the price. Second, the Highway 5 commute is the single biggest variable; test it at your specific work hours before signing. Third, winters are real winters — invest in snow removal infrastructure (a snowblower, a service contract, or both) before December.",
      },
      {
        type: "cta",
        ctaTitle: "Plan a Scouting Trip",
        ctaDescription:
          "Spend a weekend exploring downtown, the lake, and the school district before deciding.",
        buttons: [
          { label: "Things to Do", href: "/guides/things-to-do-waconia", variant: "primary" },
          { label: "Where to Stay", href: "/hotels", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "School district", value: "ISD 110" },
      { label: "Hospital", value: "Ridgeview" },
      { label: "Commute to MSP", value: "~45 min" },
      { label: "Sales tax", value: "~7.375%" },
      { label: "ZIP code", value: "55387" },
    ],
    relatedGuides: [
      { title: "Things to Do in Waconia", readTime: "7 min read", href: "/guides/things-to-do-waconia" },
      { title: "Waconia History", readTime: "9 min read", href: "/guides/waconia-history" },
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
    ],
    faqs: [
      {
        question: "Is Waconia, MN a good place to live?",
        answer: "Waconia consistently ranks well for Twin Cities suburban living thanks to a strong school district (ISD 110), a 3,080-acre recreational lake, a walkable downtown, and a regional hospital (Ridgeview). The trade-off is a 45-minute drive to downtown Minneapolis and limited public transit options.",
      },
      {
        question: "What school district is Waconia in?",
        answer: "Waconia is served by Independent School District 110 (Waconia Public Schools), which includes Waconia High School, Waconia Middle School, and three elementary schools — Bayview, Southview, and Clearwater. The district consistently ranks among the stronger suburban districts in Minnesota.",
      },
      {
        question: "How long is the drive from Waconia to Minneapolis?",
        answer: "Approximately 45 minutes off-peak from Waconia to downtown Minneapolis via Highway 5 and I-494. In peak rush hour the drive can stretch to 60–70 minutes. Test your specific commute hours before relocating.",
      },
      {
        question: "What is the population of Waconia, MN?",
        answer: "Waconia has approximately 13,500 residents and is one of the fastest-growing cities in Carver County. The 2020 Census put the city at 13,461; the population has continued to grow modestly since.",
      },
      {
        question: "Is Waconia expensive to live in?",
        answer: "Cost of living in Waconia sits below the broader Minneapolis-St. Paul metro average, mainly driven by housing. Lakefront properties price closer to metro standards. Property tax rates are in line with the rest of Carver County, and Minnesota state income tax applies.",
      },
    ],
  },
  // ────────────────────────────────────────────────────────────────────
  // Round 6 guides — added 2026-05-03
  // ────────────────────────────────────────────────────────────────────
  {
    slug: "waconia-schools",
    title: "Waconia Schools (ISD 110): A Local's Guide for Parents",
    metaDescription:
      "Independent School District 110 — Waconia Public Schools. High school, middle school, three elementaries, ratings, boundaries, and what local parents say.",
    heroImage:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80",
    updatedDate: "May 3, 2026",
    updatedIso: "2026-05-03",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "District", value: "ISD 110" },
      { label: "Schools", value: "5 Public" },
      { label: "Enrollment", value: "~3,800" },
    ],
    content: [
      {
        type: "text",
        body: "Waconia students attend Independent School District 110 (Waconia Public Schools), one of the most consistently well-regarded suburban districts in the western Twin Cities. The district serves Waconia and parts of the surrounding townships with one high school, one middle school, three elementary schools, and a Community Education program. For relocating families, ISD 110 is one of the top reasons people choose Waconia over comparable lake towns.",
      },
      {
        type: "heading",
        heading: "The Schools",
      },
      {
        type: "text",
        body: "Waconia High School (grades 9–12) is the district's flagship, located on the south side of town. Waconia Middle School (grades 6–8) sits on the same campus area. The three elementary schools — Bayview, Southview, and Clearwater — split the district's K-5 students by neighborhood boundary. Bayview is on the south side near the lake, Southview anchors the southwest, and Clearwater serves the north and northwest growth areas. The district also operates Waconia Learning Center for alternative pathways and Community Education programming.",
      },
      {
        type: "heading",
        heading: "Boundaries (How to Tell Which Elementary)",
      },
      {
        type: "text",
        body: "Elementary boundaries are set by the district and revisited as the city grows. Roughly: Bayview Elementary serves the south side and lakefront neighborhoods; Southview Elementary covers the south-central and southwest neighborhoods; Clearwater Elementary handles the north side and the newer northwest developments. Boundaries change — verify with the district's enrollment office before signing on a house if elementary assignment is critical to your decision.",
      },
      {
        type: "pullquote",
        quote:
          "If schools are the deciding factor, walk into the district office and ask about boundary lines for the specific street you're considering. They'll tell you straight.",
        attribution: "Local relocation advice",
      },
      {
        type: "heading",
        heading: "Activities & Athletics",
      },
      {
        type: "text",
        body: "Waconia High School competes in the Wright County Conference and fields the typical Minnesota slate — football, basketball, hockey (boys and girls), volleyball, soccer, baseball, softball, wrestling, golf, tennis, track, cross country, and Nordic skiing. Hockey is a particular point of community pride; Friday night football and the WHS hockey games are well-attended local traditions. The arts program runs strong in band, choir, and theater.",
      },
      {
        type: "heading",
        heading: "Private & Parochial Options",
      },
      {
        type: "text",
        body: "St. Joseph's Catholic School in Waconia offers PreK through 8th grade in a faith-based setting and is a long-standing alternative for Catholic families. Several other parochial and private school options exist in nearby Chaska, Mound, and Excelsior — all within a 15-to-20-minute drive. Open enrollment to neighboring public districts (Minnetrista, Watertown-Mayer, Norwood Young America) is also possible, though most Waconia families stay in ISD 110.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🏫",
            title: "Verify Boundaries",
            body: "Boundaries shift as the district grows. Always confirm elementary assignment with the district enrollment office before relying on a search-result map.",
          },
          {
            icon: "📚",
            title: "Community Education",
            body: "ISD 110's Community Education program runs after-school enrichment, adult learning, summer camps, early childhood, and family events year-round.",
          },
        ],
      },
      {
        type: "heading",
        heading: "What Parents Tell Us",
      },
      {
        type: "text",
        body: "Three themes come up in conversations with Waconia parents. First, the small-town size means teachers and administrators know students by name — a stark contrast to larger metro districts. Second, the activity participation rate is high; it's normal for kids to be in two or three sports plus an arts program. Third, the community wraps around the schools — Friday night football, the WHS musical, hockey games, and graduation are genuine town events.",
      },
      {
        type: "cta",
        ctaTitle: "Plan a School Visit",
        ctaDescription:
          "Combine a school tour with a weekend exploring Waconia — downtown, the lake, the parks. Get a feel for the place beyond the website.",
        buttons: [
          { label: "Moving to Waconia", href: "/guides/moving-to-waconia", variant: "primary" },
          { label: "Things to Do", href: "/guides/things-to-do-waconia", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "District", value: "ISD 110" },
      { label: "High school", value: "Waconia HS" },
      { label: "Middle school", value: "Waconia MS" },
      { label: "Elementary schools", value: "3" },
      { label: "Conference", value: "Wright County" },
      { label: "Mascot", value: "Wildcats" },
    ],
    relatedGuides: [
      { title: "Moving to Waconia", readTime: "8 min read", href: "/guides/moving-to-waconia" },
      { title: "Waconia History", readTime: "9 min read", href: "/guides/waconia-history" },
      { title: "Waconia Parks", readTime: "5 min read", href: "/guides/waconia-parks" },
    ],
    faqs: [
      {
        question: "What school district is Waconia in?",
        answer: "Waconia is served by Independent School District 110 — Waconia Public Schools. The district includes Waconia High School (9–12), Waconia Middle School (6–8), and three elementary schools (Bayview, Southview, and Clearwater).",
      },
      {
        question: "How many schools are in Waconia, MN?",
        answer: "Five public schools in ISD 110: one high school, one middle school, and three elementary schools. There is also one Catholic K-8 school (St. Joseph's) and Waconia Learning Center for alternative pathways.",
      },
      {
        question: "Is Waconia a good school district?",
        answer: "ISD 110 is consistently ranked among the stronger suburban Minnesota districts. Test scores, graduation rates, and post-secondary placement are strong, and the district is a primary draw for families relocating to Carver County.",
      },
      {
        question: "What are the Waconia High School colors and mascot?",
        answer: "Waconia High School's mascot is the Wildcats; the school colors are blue and gold. WHS competes in the Wright County Conference.",
      },
      {
        question: "What elementary school will my child attend in Waconia?",
        answer: "Elementary assignment depends on neighborhood boundary. Bayview serves the south side and lakefront, Southview covers south-central and southwest, Clearwater serves the north and northwest. Boundaries change as the district grows — verify with ISD 110's enrollment office before relying on online maps.",
      },
    ],
  },
  {
    slug: "getting-to-waconia",
    title: "Getting to Waconia, MN: Drive from Minneapolis (and Beyond)",
    metaDescription:
      "How to drive to Waconia, MN from Minneapolis-St. Paul, the airport, and surrounding cities. Routes, times, traffic patterns, and parking once you arrive.",
    heroImage:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80",
    updatedDate: "May 3, 2026",
    updatedIso: "2026-05-03",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "From Minneapolis", value: "~45 min" },
      { label: "From MSP Airport", value: "~50 min" },
      { label: "Distance", value: "35 Miles W" },
    ],
    content: [
      {
        type: "text",
        body: "Waconia sits 35 miles due west of downtown Minneapolis, in Carver County. Most visitors drive — there is no commuter rail, no light rail, and no direct bus from Minneapolis. The driving experience varies dramatically by time of day, so this is the practical guide: which route, when to leave, and where to park once you arrive.",
      },
      {
        type: "heading",
        heading: "From Downtown Minneapolis (~45 min off-peak)",
      },
      {
        type: "text",
        body: "The default route is Highway 7 west to Highway 5, which becomes Waconia's east-west spine. Allow 45 minutes off-peak; in evening rush hour from downtown, plan on 60 to 75 minutes. An alternate route via I-394 west to Highway 5 south works similarly and avoids stoplights through the western suburbs but adds a few miles.",
      },
      {
        type: "heading",
        heading: "From MSP Airport (~50 min)",
      },
      {
        type: "text",
        body: "From Minneapolis-St. Paul International Airport, take I-494 west to Highway 5 west. Highway 5 turns into the main road through Eden Prairie, Chanhassen, Chaska, and finally Waconia. Allow 50 minutes off-peak; up to 75 in heavy traffic. Rideshare to Waconia from MSP runs roughly $70–$95 depending on time and demand.",
      },
      {
        type: "heading",
        heading: "From Surrounding Cities",
      },
      {
        type: "text",
        body: "From Chaska it's an 8-mile, 10-minute drive on Highway 5 west. From Excelsior it's a 12-mile, 18-minute drive via Highway 7 west. From Mound it's similar — about 15 minutes around the south end of Lake Minnetonka. From St. Cloud it's roughly an hour south on Highway 25. From Mankato it's about 90 minutes north via Highway 169 to Highway 5 east.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🚗",
            title: "Avoid Friday Afternoons",
            body: "The drive west from Minneapolis on summer Friday afternoons can stretch past 90 minutes. Leave before 2pm or after 7pm if you can.",
          },
          {
            icon: "🅿️",
            title: "Free Downtown Parking",
            body: "Downtown Waconia has free street parking and free public lots. The City Square Park area has the largest concentration of free spots near restaurants and breweries.",
          },
        ],
      },
      {
        type: "heading",
        heading: "Public Transit",
      },
      {
        type: "text",
        body: "There is no public transit directly into Waconia. SouthWest Transit operates park-and-ride buses from Chaska and Chanhassen (8–12 miles east) into downtown Minneapolis, but you'd need a car or rideshare to reach those park-and-ride lots first. For day visitors without a car, the most realistic options are renting a car at MSP or taking a rideshare.",
      },
      {
        type: "heading",
        heading: "Parking Once You're Here",
      },
      {
        type: "text",
        body: "Parking in Waconia is generally easy and free. Downtown street parking is free with no meters. Several free public lots sit just off Main Street near City Square Park. Lake Waconia Regional Park has a large free lot that does fill on summer weekends — arrive before 11am or after 4pm for an easy spot. Schram Vineyards and Sovereign Estate Wine both have on-site lots; expect a short walk on event nights.",
      },
      {
        type: "cta",
        ctaTitle: "You're Almost Here",
        ctaDescription:
          "Once you arrive, start with the things-to-do guide — it covers the headline destinations in walking and driving distance.",
        buttons: [
          { label: "Things to Do", href: "/guides/things-to-do-waconia", variant: "primary" },
          { label: "Where to Stay", href: "/hotels", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Distance from MSP", value: "35 miles" },
      { label: "Drive from MSP", value: "~50 min" },
      { label: "Drive from downtown", value: "~45 min" },
      { label: "Public transit", value: "None direct" },
      { label: "Parking", value: "Free" },
    ],
    relatedGuides: [
      { title: "Things to Do in Waconia", readTime: "7 min read", href: "/guides/things-to-do-waconia" },
      { title: "Where to Stay", readTime: "5 min read", href: "/hotels" },
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
    ],
    faqs: [
      {
        question: "How far is Waconia from Minneapolis?",
        answer: "Waconia is approximately 35 miles west of downtown Minneapolis. Off-peak driving time is about 45 minutes via Highway 7 to Highway 5 or via I-394 to Highway 5. Peak rush hour can extend the drive to 60–75 minutes.",
      },
      {
        question: "How do I get to Waconia from MSP Airport?",
        answer: "From Minneapolis-St. Paul International Airport, drive I-494 west to Highway 5 west. The drive takes approximately 50 minutes off-peak. Rideshare from MSP to Waconia runs roughly $70–$95 depending on time and demand.",
      },
      {
        question: "Is there a bus or train to Waconia?",
        answer: "No. There is no commuter rail, light rail, or direct public transit to Waconia. SouthWest Transit serves Chaska and Chanhassen (8–12 miles east), but reaching those stations from Waconia still requires a car. Most visitors drive or take a rideshare.",
      },
      {
        question: "How long is the drive from Chaska to Waconia?",
        answer: "Chaska to Waconia is approximately 8 miles, a 10–12 minute drive west on Highway 5.",
      },
      {
        question: "Is parking free in downtown Waconia?",
        answer: "Yes — downtown Waconia has free street parking with no meters and several free public lots near City Square Park. Lake Waconia Regional Park also has a free lot, though it fills on summer weekends.",
      },
    ],
  },
  {
    slug: "waconia-parks",
    title: "Waconia Parks: A Complete Guide to Every Public Park",
    metaDescription:
      "Every park in Waconia, MN — Lake Waconia Regional Park, City Square Park, Bayview Park, Coney Island, neighborhood parks, and trail connections.",
    heroImage:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80",
    updatedDate: "May 3, 2026",
    updatedIso: "2026-05-03",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Public Parks", value: "15+" },
      { label: "Largest Park", value: "245 Ac" },
      { label: "Trail Miles", value: "10+" },
    ],
    content: [
      {
        type: "text",
        body: "Waconia is a parks-rich city for its size. Between the city park system, Carver County's Lake Waconia Regional Park, and the historic island in the lake itself, residents can string together a full day outdoors without leaving town. This guide covers every park worth knowing — what's there, who it's for, and when to go.",
      },
      {
        type: "heading",
        heading: "Lake Waconia Regional Park (245 acres)",
      },
      {
        type: "text",
        body: "The headline park. Run by Carver County on the south shore of Lake Waconia. Swimming beach with lifeguards in summer, free boat ramp, picnic shelters (reservable), playground, restrooms, and roughly five miles of multi-use trails. In winter the trails are groomed for cross-country skiing. Free entry, free parking, year-round access. See our dedicated guide for more.",
      },
      {
        type: "heading",
        heading: "City Square Park (downtown)",
      },
      {
        type: "text",
        body: "The community heart of downtown Waconia. The gazebo at City Square Park is where the Tree Lighting kicks off the holiday season every Black Friday, where Nickle Dickle Day spreads out across the surrounding blocks every September, and where summer concerts and casual gatherings happen all year. Open lawns, picnic tables, mature shade trees, free public parking around the perimeter.",
      },
      {
        type: "heading",
        heading: "Bayview Park",
      },
      {
        type: "text",
        body: "A neighborhood park on the southeast side, near Bayview Elementary. Playground, ballfields, and walking paths. Quieter than the regional park, but a steady favorite for families with elementary-age kids. Hosts youth sports leagues throughout the spring and summer.",
      },
      {
        type: "heading",
        heading: "Coney Island of Lake Waconia",
      },
      {
        type: "text",
        body: "Technically part of the Lake Waconia Regional Park system, Coney Island is the 31-acre wooded island in the middle of the lake — historic site of the 'Coney Island of the West' resort from 1884 to the late 1910s. Today it's open to the public during daylight hours but accessible only by boat. Bring everything in, take everything out. See our dedicated Coney Island guide for the full backstory.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🌳",
            title: "Neighborhood Parks",
            body: "Waconia's smaller neighborhood parks include Cardinal, Heritage, Peavey, Reitz, and Schmiesing — each with playgrounds and small open spaces serving the surrounding neighborhoods.",
          },
          {
            icon: "🚴",
            title: "Trail Connections",
            body: "The Lake Waconia Regional Park trails connect to the broader Carver County trail system, with longer routes available for cyclists and trail runners willing to leave town.",
          },
        ],
      },
      {
        type: "heading",
        heading: "Trail Network",
      },
      {
        type: "text",
        body: "Beyond Lake Waconia Regional Park, the city operates a growing network of paved trails connecting downtown to neighborhoods on the north and south sides. The Carver County system extends these connections out to Chaska, Victoria, and the broader Three Rivers regional trail network. Spring through fall, the trail loop around the south side of Lake Waconia is one of the better casual rides in the western metro.",
      },
      {
        type: "cta",
        ctaTitle: "Spend a Day in the Parks",
        ctaDescription:
          "Pair a morning at Lake Waconia Regional Park with afternoon downtown at City Square Park — the perfect Waconia day.",
        buttons: [
          { label: "Lake Waconia Regional Park", href: "/guides/lake-waconia-regional-park", variant: "primary" },
          { label: "Things to Do", href: "/guides/things-to-do-waconia", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Park system", value: "City + County" },
      { label: "Largest park", value: "245 ac (Regional)" },
      { label: "Park entry", value: "Free" },
      { label: "Beach", value: "Regional Park" },
      { label: "Dogs", value: "Trails only" },
    ],
    relatedGuides: [
      { title: "Lake Waconia Regional Park", readTime: "6 min read", href: "/guides/lake-waconia-regional-park" },
      { title: "Coney Island of Lake Waconia", readTime: "5 min read", href: "/guides/coney-island-lake-waconia" },
      { title: "Things to Do in Waconia", readTime: "7 min read", href: "/guides/things-to-do-waconia" },
    ],
    faqs: [
      {
        question: "What is the biggest park in Waconia, MN?",
        answer: "Lake Waconia Regional Park, at 245 acres, is by far the largest. It's managed by Carver County and sits on the south shore of Lake Waconia, with a swimming beach, free boat ramp, picnic shelters, and miles of multi-use trails.",
      },
      {
        question: "Where is City Square Park in Waconia?",
        answer: "City Square Park is in downtown Waconia, anchored by a gazebo, mature shade trees, open lawns, and picnic tables. It's the venue for the annual Tree Lighting, Nickle Dickle Day's downtown footprint, and summer community gatherings.",
      },
      {
        question: "Can you visit Coney Island of Lake Waconia?",
        answer: "Yes. The 31-acre island is part of the Lake Waconia Regional Park system, open to the public during daylight hours, and accessible only by boat, kayak, or paddleboard. There are no facilities — pack in, pack out.",
      },
      {
        question: "Are dogs allowed in Waconia parks?",
        answer: "Dogs on a leash are allowed on Waconia park trails and in most park grass areas. Dogs are not allowed on the swim beach at Lake Waconia Regional Park during the swim season.",
      },
      {
        question: "Is there a fee to use Waconia parks?",
        answer: "No. Waconia city parks and Lake Waconia Regional Park are all free to enter. Picnic shelter reservations carry a small fee through Carver County Parks; everything else is free.",
      },
    ],
  },
  {
    slug: "lake-waconia-depth-map",
    title: "Lake Waconia Depth Map, Bathymetry & DNR Data (DOW 10-0059-00)",
    metaDescription:
      "Lake Waconia depth map and bathymetry — maximum depth, average depth, key structure, basin shape, and how to read the official MN DNR LakeFinder data.",
    heroImage:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1600&q=80",
    updatedDate: "May 3, 2026",
    updatedIso: "2026-05-03",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Max Depth", value: "37 Feet" },
      { label: "Surface Area", value: "3,080 Acres" },
      { label: "DNR Number", value: "10-0059-00" },
    ],
    content: [
      {
        type: "text",
        body: "If you're fishing, navigating, or just curious about Lake Waconia's underwater shape, the official MN DNR bathymetric survey is the source. This guide breaks down what the depth map shows — maximum depth, basin structure, where the breaklines are, what's stocked — and how to read it without needing a degree in limnology.",
      },
      {
        type: "heading",
        heading: "The Numbers",
      },
      {
        type: "text",
        body: "Lake Waconia covers 3,080 acres with a maximum depth of 37 feet. The average depth is significantly shallower — closer to 15 feet across the basin — which is why the lake supports such productive walleye and panfish populations. Water clarity is consistently strong (Secchi disk readings often exceed 12 feet), reflecting the lake's spring-fed character and active conservation work. The official MN DNR lake number is DOW 10-0059-00.",
      },
      {
        type: "heading",
        heading: "Basin Structure",
      },
      {
        type: "text",
        body: "Lake Waconia has two main basins separated by Coney Island and a series of underwater humps and bars. The east basin (closer to downtown Waconia) tends to be slightly deeper and holds the bulk of the deep-water structure. The west basin is broader and shallower, with extensive cabbage weed beds along the perimeter — prime largemouth bass and northern pike habitat. The submerged sunken island off the south shore is a recognized walleye magnet in fall.",
      },
      {
        type: "pullquote",
        quote:
          "Read the bathymetric map before launching. Lake Waconia's productive structure is hidden — the breaklines that hold fish aren't visible from the surface, but they're consistent year over year.",
        attribution: "Local angler",
      },
      {
        type: "heading",
        heading: "Key Structure for Anglers",
      },
      {
        type: "text",
        body: "The 8-to-12-foot gravel reefs on the north shore are spring walleye spawning grounds. The deep weed edges along the west basin in 12-to-18 feet hold bass and pike all summer. The 15-to-25-foot breaklines around Coney Island and the south basin are the prime walleye trolling and jigging zone. The sunken island off the south shore — 18-to-22 feet on the top, dropping to 30+ on the perimeter — is fall walleye gold.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "📍",
            title: "Official DNR Map",
            body: "Download the official Lake Waconia bathymetric map and fish survey report from the Minnesota DNR LakeFinder. Free, regularly updated.",
            link: { label: "MN DNR LakeFinder →", href: "https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900" },
          },
          {
            icon: "🐟",
            title: "Fish Survey Data",
            body: "DNR survey reports show population estimates for walleye, bass, pike, panfish, and others — useful context for choosing target species in any given year.",
            link: { label: "View Survey →", href: "https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900" },
          },
        ],
      },
      {
        type: "heading",
        heading: "Reading the Bathymetric Map",
      },
      {
        type: "text",
        body: "DNR depth maps use contour lines connecting points of equal depth. Closely-spaced contours mean a steep drop (a breakline — fish-holding structure). Widely-spaced contours mean a gentle slope (fewer concentration points). Look for the contour lines around Coney Island and the south basin sunken island — the tight spacing is what makes those spots produce. Bathymetric layers are also available in most modern fish-finder mapping systems (Navionics, LakeMaster, etc.).",
      },
      {
        type: "heading",
        heading: "Stocking & Conservation",
      },
      {
        type: "text",
        body: "Lake Waconia is regularly stocked with walleye fry and fingerlings by the MN DNR — the stocking history is published in the LakeFinder report. The lake is also an active Aquatic Invasive Species (AIS) checkpoint; clean, drain, and dry equipment is the law and a real conservation issue, not just a sign at the launch.",
      },
      {
        type: "cta",
        ctaTitle: "Pair the Map with the Fishing Guide",
        ctaDescription:
          "Knowing the bathymetry is half the battle. Our seasonal fishing guide covers what to throw and where, broken down by structure type.",
        buttons: [
          { label: "Lake Waconia Fishing Guide", href: "/guides/lake-waconia-fishing", variant: "primary" },
          { label: "Ice Fishing Guide", href: "/guides/lake-waconia-ice-fishing", variant: "outline" },
        ],
      },
    ],
    sidebarMap: {
      publicAccess: "3 Locations",
      boatLaunchFee: "None — State",
      waterClarity: "Excellent",
    },
    relatedGuides: [
      { title: "Lake Waconia Fishing Guide", readTime: "12 min read", href: "/guides/lake-waconia-fishing" },
      { title: "Lake Waconia Ice Fishing", readTime: "7 min read", href: "/guides/lake-waconia-ice-fishing" },
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
    ],
    faqs: [
      {
        question: "How deep is Lake Waconia?",
        answer: "Lake Waconia has a maximum depth of 37 feet. The average depth is closer to 15 feet across the lake's 3,080-acre surface. The Minnesota DNR lake number is DOW 10-0059-00.",
      },
      {
        question: "Where can I find a depth map of Lake Waconia?",
        answer: "The official Lake Waconia bathymetric (depth) map and fish survey report are published free on the Minnesota DNR LakeFinder website (search DOW 10-0059-00). Modern fish-finder mapping systems like Navionics and LakeMaster also include Lake Waconia bathymetry.",
      },
      {
        question: "Is Lake Waconia a clear lake?",
        answer: "Yes. Lake Waconia is one of the clearer lakes in the Twin Cities metro. Secchi disk water-clarity readings often exceed 12 feet, reflecting the lake's spring-fed character and ongoing watershed conservation work.",
      },
      {
        question: "Where are the deepest parts of Lake Waconia?",
        answer: "The deepest water sits in the east basin (closer to downtown Waconia) and along the breaklines around Coney Island. The submerged sunken island off the south shore drops from 18-to-22 feet on top to 30+ feet on the perimeter — a recognized walleye magnet in fall.",
      },
    ],
  },
  {
    slug: "lake-waconia-vs-lake-minnetonka",
    title: "Lake Waconia vs Lake Minnetonka: Which Is Right for You?",
    metaDescription:
      "Lake Waconia or Lake Minnetonka? Side-by-side comparison of size, fishing, boating, beaches, dining, lodging, and the kind of trip each lake is best for.",
    heroImage:
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1600&q=80",
    updatedDate: "May 3, 2026",
    updatedIso: "2026-05-03",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Lake Waconia", value: "3,080 Ac" },
      { label: "Lake Minnetonka", value: "14,500+ Ac" },
      { label: "Distance Apart", value: "~12 mi" },
    ],
    content: [
      {
        type: "text",
        body: "Lake Waconia and Lake Minnetonka are the two best-known recreational lakes in the western Twin Cities — but they offer very different experiences. Minnetonka is bigger, busier, more developed, and harder to access. Waconia is smaller, calmer, more accessible, and increasingly the locals' choice. This is the honest side-by-side, written by people who spend time on both.",
      },
      {
        type: "heading",
        heading: "Size & Character",
      },
      {
        type: "text",
        body: "Lake Minnetonka covers 14,500+ acres across more than 20 interconnected bays — by far the largest lake in the metro. It's heavily developed; most of the shoreline is private homes, marinas, and commercial property. Lake Waconia covers 3,080 acres in a single, mostly open basin (with one major island — Coney Island). Waconia's shoreline is a mix of lakefront homes, public park, and undeveloped natural shore, with much less commercial intensity. If Minnetonka is the metro's destination party lake, Waconia is the metro's quieter neighbor.",
      },
      {
        type: "heading",
        heading: "Public Access",
      },
      {
        type: "text",
        body: "This is one of Waconia's biggest advantages. Lake Waconia has three free, state-managed public boat launches; Lake Waconia Regional Park has a large free public swim beach and ample parking. Minnetonka has public access too, but the launches are more crowded, parking is harder, and the public beach options are smaller and more contested. If you don't own lakefront, Waconia is dramatically easier to actually use.",
      },
      {
        type: "heading",
        heading: "Boating",
      },
      {
        type: "text",
        body: "Minnetonka offers the largest boating playground in the metro — multiple bays, dozens of restaurants accessible by boat, more variety. Waconia offers more open, contiguous water for skiing, wakeboarding, and pontoon cruising without the bay-to-bay navigation. Summer Saturday traffic on Minnetonka can feel like rush hour; Waconia's traffic is lighter even on holiday weekends. Both lakes have strong rental markets — pontoons, kayaks, paddleboards.",
      },
      {
        type: "heading",
        heading: "Fishing",
      },
      {
        type: "text",
        body: "Both lakes are productive, but Waconia is the angler's choice. Waconia is a top-tier walleye lake by metro standards, regularly stocked by the DNR, with a well-known winter walleye and Crappie Contest tradition. Minnetonka holds bass and muskie populations and gets more fishing pressure overall but is also more crowded and more politically managed. For consistent walleye action with less fishing pressure, Waconia wins.",
      },
      {
        type: "pullquote",
        quote:
          "Minnetonka is for the boat-up restaurant scene. Waconia is for the lake itself. Pick based on what you actually want from the day.",
        attribution: "Western metro local",
      },
      {
        type: "heading",
        heading: "Dining & Lakefront Restaurants",
      },
      {
        type: "text",
        body: "Minnetonka has the bigger boat-up restaurant scene by far — Lord Fletcher's, Maynard's, Bayside, and a dozen others all sit on the water with dock space. Waconia's lakefront dining is smaller in scope: Lola's Lakehouse Eatery is the casual lake-view choice, Sovereign Estate Wine has the most elegant lakeside patio in the area. Both downtowns have strong land-based restaurant scenes, but Waconia's craft beverage cluster (Waconia Brewing, Schram, Sovereign, J. Carver) is a destination in its own right.",
      },
      {
        type: "heading",
        heading: "Lodging",
      },
      {
        type: "text",
        body: "Minnetonka has more chain hotel options in adjacent Wayzata and Excelsior. Waconia has a single in-town hotel (AmeriVu Inn). For lakefront short-term rentals, both lakes have active Airbnb and VRBO inventories — Minnetonka properties tend to be pricier and book further out; Waconia lakefront rentals are more affordable but still book months ahead for July 4th and other peak weekends.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🏖",
            title: "Best Public Beach",
            body: "Lake Waconia Regional Park's swim beach (free, lifeguards in summer, ample parking) is a genuinely better public beach experience than most options on Lake Minnetonka.",
          },
          {
            icon: "🍷",
            title: "Best Lakeside Patio",
            body: "Sovereign Estate Wine on Lake Waconia is one of the most photogenic lakeside wine patios in the state — west-facing for sunsets.",
          },
        ],
      },
      {
        type: "heading",
        heading: "Quick Verdict",
      },
      {
        type: "text",
        body: "Pick Lake Minnetonka if: you want the boat-up restaurant tour, you have a boat (or wealthy friends with one), or you're chasing the social scene. Pick Lake Waconia if: you want easier access, less crowded water, better walleye fishing, a real public beach, and a craft beverage cluster on land. Many western-metro locals do both — Minnetonka for the social Saturday, Waconia for the quiet Sunday.",
      },
      {
        type: "cta",
        ctaTitle: "Plan a Lake Waconia Day",
        ctaDescription:
          "Easy access, free beach, top walleye fishing, and a craft beverage scene. Start with the lake guide.",
        buttons: [
          { label: "Lake Waconia Guide", href: "/guides/lake-waconia", variant: "primary" },
          { label: "Things to Do", href: "/guides/things-to-do-waconia", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Waconia size", value: "3,080 ac" },
      { label: "Minnetonka size", value: "14,500+ ac" },
      { label: "Waconia max depth", value: "37 ft" },
      { label: "Minnetonka max depth", value: "113 ft" },
      { label: "Distance apart", value: "~12 miles" },
    ],
    relatedGuides: [
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
      { title: "Lake Waconia Boat Rentals", readTime: "5 min read", href: "/guides/lake-waconia-boat-rentals" },
      { title: "Lake Waconia Regional Park", readTime: "6 min read", href: "/guides/lake-waconia-regional-park" },
    ],
    faqs: [
      {
        question: "Is Lake Waconia bigger than Lake Minnetonka?",
        answer: "No. Lake Minnetonka is significantly larger at 14,500+ acres across more than 20 bays. Lake Waconia is 3,080 acres in a single mostly-open basin. Minnetonka is the largest lake in the Twin Cities metro; Waconia is one of the larger ones.",
      },
      {
        question: "Which lake is better for fishing — Waconia or Minnetonka?",
        answer: "Lake Waconia is generally considered the stronger walleye fishery, with regular DNR stocking and less fishing pressure than Minnetonka. Minnetonka holds productive bass and muskie populations. For walleye, Waconia. For trophy bass and muskie variety with more accessible boat-up dining, Minnetonka.",
      },
      {
        question: "Which lake has better public beach access?",
        answer: "Lake Waconia. Lake Waconia Regional Park's swim beach is free, has lifeguards in summer, ample parking, and is a meaningfully better public beach experience than most options on Lake Minnetonka, where most shoreline is private.",
      },
      {
        question: "How far apart are Lake Waconia and Lake Minnetonka?",
        answer: "Roughly 12 miles. Driving from downtown Waconia to the south shore of Lake Minnetonka takes about 20 minutes via Highway 7.",
      },
      {
        question: "Should I visit Lake Waconia or Lake Minnetonka?",
        answer: "If you want easier public access, less crowded water, top walleye fishing, and a craft beverage scene on land, choose Lake Waconia. If you want the boat-up restaurant scene, more variety in bays, and the metro's most-developed lake culture, choose Lake Minnetonka. Many locals do both.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
