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
  howTo?: {
    name: string;
    description: string;
    totalTime?: string; // ISO 8601 duration, e.g. "PT2H"
    estimatedCost?: { value: string; currency: string };
    tools?: string[];
    steps: { name: string; text: string }[];
  };
  keywords?: string[];
  articleSection?: string;
  glossaryTerms?: { term: string; anchor: string }[];
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
    title: "Fishing Guide for Lake Waconia: Seasonal Tips & Access",
    metaDescription:
      "A seasonal fishing guide for Lake Waconia: walleye, bass, northern pike and panfish through the year, public access, invasive species rules, and where to find DNR survey data and regulations.",
    heroImage:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2024-08-01",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Surface Area", value: "3,080 Acres" },
      { label: "Max Depth", value: "37 Feet" },
      { label: "DNR Lake ID", value: "10-0059-00" },
    ],
    content: [
      {
        type: "text",
        body: "Lake Waconia covers 3,080 acres in Carver County and reaches 37 feet at its deepest. Walleye, largemouth bass, northern pike and panfish are the main species anglers target. This guide walks through the seasons, then covers access, invasive species and where to find official data and regulations.",
      },
      {
        type: "heading",
        heading: "Spring",
      },
      {
        type: "text",
        body: "After ice-out, walleye move shallower to spawn and feed. Gravel and rock areas and transitions from shallow to deeper water are good places to start, with jigs and minnows or soft plastics. Early mornings and evenings are usually best. Check the walleye season opener date in the DNR fishing regulations before you go.",
      },
      {
        type: "heading",
        heading: "Summer",
      },
      {
        type: "text",
        body: "As the water warms, largemouth bass hold along weed edges and docks, and topwater lures work at dawn and dusk. Northern pike patrol weed edges. Walleye tend to move deeper; use the DNR depth map to find breaklines.",
      },
      {
        type: "photoGrid",
        photos: [
          {
            src: "/images/fishing-lake-waconia.webp",
            alt: "Angler fishing at sunrise on Lake Waconia",
          },
          {
            src: "/images/event-fishing-tournament.webp",
            alt: "Anglers fishing on Lake Waconia",
          },
        ],
      },
      {
        type: "heading",
        heading: "Fall",
      },
      {
        type: "text",
        body: "As water temperatures drop, walleye feed more actively and often move toward deeper structure. Crankbaits along breaklines and main-lake points are a common approach. Fall can be one of the better times of year for larger fish.",
      },
      {
        type: "heading",
        heading: "Winter",
      },
      {
        type: "text",
        body: "Once safe ice forms, walleye and panfish are the main targets. Always measure ice yourself; DNR guidance is at least 4 inches of new clear ice for walking. Tip-ups with fathead minnows and jigging spoons are standard. See our ice fishing guide for more.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🎣",
            title: "Recommended Gear",
            body: "Medium-light spinning rod (6'6\"), 6–8 lb fluorocarbon, 1/8–1/4 oz jig heads, minnows and soft plastics. For pike: a heavier rod and a leader.",
          },
          {
            icon: "🌿",
            title: "Invasive Species",
            body: "Lake Waconia is infested with zebra mussels and Eurasian watermilfoil. Clean, drain and dry your boat, trailer and gear before leaving, and report new invasive species sightings to the MN DNR.",
          },
        ],
      },
      {
        type: "heading",
        heading: "Boat Launches & Access Points",
      },
      {
        type: "text",
        body: "The DNR public access in Lake Waconia Regional Park has 36 trailer spaces and two boarding docks. Other public accesses are listed on the DNR LakeFinder page. In Towne Marina also runs a private, paid launch downtown. Shoreline fishing is prohibited in the regional park.",
      },
      {
        type: "heading",
        heading: "Species & Survey Data",
      },
      {
        type: "richText",
        body: "Walleye are the most-sought species. The DNR publishes Lake Waconia's fish survey results and stocking history on <a href=\"https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900\" target=\"_blank\" rel=\"noopener noreferrer\">LakeFinder</a>, which is the best source for current species abundance and size. Largemouth bass, northern pike and panfish such as bluegill and crappie round out the fishery.",
      },
      {
        type: "heading",
        heading: "Check the Regulations",
      },
      {
        type: "text",
        body: "Statewide limits and seasons apply, and some lakes carry special regulations. Before you keep fish, check the current Minnesota fishing regulations and the DNR's special regulations list for Lake Waconia.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🗺️",
            title: "Depth Charts & DNR Survey Data",
            body: "Lake Waconia's depth map, fish survey reports and stocking history are on the Minnesota DNR LakeFinder.",
            link: { label: "MN DNR Lake Waconia →", href: "https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900" },
          },
          {
            icon: "🏙️",
            title: "Plan Your Visit",
            body: "Downtown Waconia's restaurants and the area wineries are a short drive from the lake.",
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
            body: "The DNR LakeFinder has the official depth contour map, fish survey results and public access points for Lake Waconia (DOW 10-0059-00).",
            link: { label: "MN DNR LakeFinder →", href: "https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900" },
          },
          {
            icon: "🐟",
            title: "More Minnesota Fishing Lakes",
            body: "MN Fishing Lakes compiles species profiles, DNR survey archives and access maps across Minnesota lakes.",
            link: { label: "Browse MN Fishing Lakes →", href: "https://www.mnfishinglakes.com/lakes/lake-waconia" },
          },
        ],
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Fishing Trip",
        ctaDescription:
          "Find places to eat, stay and rent a boat around Lake Waconia.",
        buttons: [
          { label: "Browse Directory", href: "/directory", variant: "primary" },
          {
            label: "Boat Rentals",
            href: "/guides/lake-waconia-boat-rentals",
            variant: "outline",
          },
        ],
      },
    ],
    sidebarMap: {
      publicAccess: "DNR access, Regional Park",
      boatLaunchFee: "See DNR LakeFinder",
      waterClarity: "See DNR data",
    },
    keywords: [
      "Lake Waconia fishing",
      "Lake Waconia walleye",
      "Lake Waconia bass fishing",
      "Lake Waconia northern pike",
      "Carver County fishing",
      "DOW 10-0059-00",
    ],
    articleSection: "Fishing",
    glossaryTerms: [
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "DOW number", anchor: "dow-number" },
      { term: "AIS (Aquatic Invasive Species)", anchor: "ais" },
      { term: "Lake Waconia Regional Park", anchor: "regional-park" },
    ],
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
        answer: "Walleye, largemouth bass, northern pike and panfish such as bluegill and crappie are the main species anglers target. The DNR's fish survey reports on LakeFinder (DOW 10-0059-00) list current species data and stocking history.",
      },
      {
        question: "Does Lake Waconia have special fishing regulations?",
        answer: "Check before you keep fish. Statewide rules apply, and the DNR maintains a list of lake-specific special regulations. Look up Lake Waconia in the current Minnesota fishing regulations or on the DNR's special regulations page.",
      },
      {
        question: "Do you need a license to fish Lake Waconia?",
        answer: "Yes. A Minnesota fishing license is required for anglers 16 and older. Licenses are sold online through the MN DNR and at license agents.",
      },
      {
        question: "Where is the public boat launch on Lake Waconia?",
        answer: "The DNR public access is in Lake Waconia Regional Park, with 36 trailer spaces and two boarding docks. Other public accesses are listed on the DNR LakeFinder page.",
      },
      {
        question: "Can you fish from shore at Lake Waconia?",
        answer: "Not in Lake Waconia Regional Park, where shoreline fishing is prohibited. Check the DNR LakeFinder page for other access points.",
      },
    ],
  },
  {
    slug: "lake-waconia",
    title: "Lake Waconia: A Complete Guide to the Lake",
    metaDescription:
      "Lake Waconia in Waconia, Minnesota: 3,080 acres, 37 feet deep, with a county regional park beach, DNR public access, pontoon and kayak rentals, and Coney Island.",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2024-08-01",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Surface Area", value: "3,080 Acres" },
      { label: "Max Depth", value: "37 Feet" },
      { label: "Shoreline", value: "~11 Miles" },
    ],
    content: [
      {
        type: "text",
        body: "Lake Waconia is a 3,080-acre lake in Carver County, about 35 miles west of Minneapolis. It reaches 37 feet at its deepest and has about 11 miles of shoreline (the DNR lists 10.88). Its DNR lake ID is 10-0059-00. The city of Waconia sits on its south side, and Coney Island, a county park, sits in the lake.",
      },
      {
        type: "heading",
        heading: "Boating & Paddling",
      },
      {
        type: "text",
        body: "The DNR public access in Lake Waconia Regional Park has 36 trailer spaces and two boarding docks; other public accesses are listed on the DNR LakeFinder page. In Towne Marina downtown rents pontoons in summer, and Carver County rents kayaks, paddleboards and canoes at the regional park on summer weekends. The lake is infested with zebra mussels and Eurasian watermilfoil, so clean, drain and dry your boat and gear before you leave.",
      },
      {
        type: "heading",
        heading: "Swimming",
      },
      {
        type: "text",
        body: "Lake Waconia Regional Park has the public swim beach, open from Memorial Day to Labor Day. There have been no lifeguards since 2024, so swimming is at your own risk. Pets are not allowed on the beach, playgrounds or picnic shelters.",
      },
      {
        type: "heading",
        heading: "The Regional Park",
      },
      {
        type: "text",
        body: "Lake Waconia Regional Park is a 164-acre Carver County park open 6am to 10pm daily, with the beach, the boat access, picnic areas, playgrounds and the Paradise Commons building. Shoreline fishing is not allowed in the park.",
      },
      {
        type: "photoGrid",
        photos: [
          {
            src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
            alt: "Lake shoreline at sunset",
          },
          {
            src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
            alt: "Wooded trail near a lake",
          },
        ],
      },
      {
        type: "heading",
        heading: "Winter",
      },
      {
        type: "text",
        body: "Lake Waconia is fished through the ice for walleye and panfish once safe ice forms. Ice conditions vary across the lake, so check thickness yourself and follow DNR ice safety guidance.",
      },
      {
        type: "heading",
        heading: "Getting Here",
      },
      {
        type: "text",
        body: "Lake Waconia is about 35 miles west of Minneapolis via Highway 5. Downtown Waconia's restaurants are on the lake's south side, close to In Towne Marina, so a day on the water pairs easily with dinner in town.",
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
            title: "Depth Charts & Fish Surveys",
            body: "The MN DNR LakeFinder has Lake Waconia's depth map, fish survey reports, stocking history, water access sites and invasive species status.",
            link: { label: "MN DNR Lake Waconia →", href: "https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900" },
          },
          {
            icon: "📊",
            title: "Minnesota Lake Fishing Database",
            body: "An independent site that compiles DNR data and lake maps across Minnesota lakes.",
            link: { label: "Explore MN Fishing Lakes →", href: "https://www.mnfishinglakes.com/lakes/lake-waconia" },
          },
        ],
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Lake Waconia Day",
        ctaDescription:
          "Find places to eat, rent a boat and things to do around the lake.",
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
      publicAccess: "DNR access, Regional Park",
      boatLaunchFee: "See DNR LakeFinder",
      waterClarity: "See DNR data",
    },
    keywords: [
      "Lake Waconia",
      "Lake Waconia Minnesota",
      "Carver County lakes",
      "things to do Lake Waconia",
      "Lake Waconia boating",
      "Lake Waconia swimming",
    ],
    articleSection: "Lake & Outdoors",
    glossaryTerms: [
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "Coney Island of Lake Waconia", anchor: "coney-island" },
      { term: "Lake Waconia Regional Park", anchor: "regional-park" },
      { term: "DOW number", anchor: "dow-number" },
      { term: "AIS (Aquatic Invasive Species)", anchor: "ais" },
    ],
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
        answer: "Lake Waconia covers 3,080 acres, with a maximum depth of 37 feet and about 11 miles of shoreline (10.88 miles per the DNR).",
      },
      {
        question: "Where is Lake Waconia located?",
        answer: "In Waconia, Carver County, Minnesota, about 35 miles west of downtown Minneapolis via Highway 5.",
      },
      {
        question: "Can you swim in Lake Waconia?",
        answer: "Yes. Lake Waconia Regional Park has a public swim beach open Memorial Day to Labor Day. There have been no lifeguards since 2024, so swimming is at your own risk.",
      },
      {
        question: "Is there an island in Lake Waconia?",
        answer: "Yes. Coney Island, which Carver County describes as a 34-acre island, held a resort run by the Zeglin family from 1889 to the late 1930s and was listed on the National Register of Historic Places in 1976. It is now part of Lake Waconia Regional Park and is reachable only by boat.",
      },
      {
        question: "Does Lake Waconia have invasive species?",
        answer: "Yes. The lake is infested with zebra mussels and Eurasian watermilfoil. Clean, drain and dry boats, trailers and gear before leaving.",
      },
    ],
  },
  // ────────────────────────────────────────────────────────────────────
  // Phase 4 guides — added 2026-05-03
  // ────────────────────────────────────────────────────────────────────
  {
    slug: "coney-island-lake-waconia",
    title: "Coney Island of Lake Waconia: History and How to Visit",
    metaDescription:
      "Coney Island in Lake Waconia: a 34-acre island that held a resort for about 50 years, is on the National Register of Historic Places, and is now a Carver County park reached only by boat.",
    heroImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Island Size", value: "34 Acres" },
      { label: "National Register", value: "1976" },
      { label: "Status Today", value: "County Park" },
    ],
    content: [
      {
        type: "text",
        body: "Coney Island is the wooded island in Lake Waconia. Carver County, which manages it as part of Lake Waconia Regional Park, describes it as a 34-acre island. For about half a century it held a summer resort, it was listed on the National Register of Historic Places in 1976, and today it is a quiet park you can reach only by boat.",
      },
      {
        type: "heading",
        heading: "The Resort Years",
      },
      {
        type: "text",
        body: "The Zeglin family ran a resort on the island from 1889 until the late 1930s. Summer visitors came out to the island by boat, and the island was well enough known that the University of Minnesota football team held spring training there from 1903 to 1905. The resort era ended in the late 1930s, and the island has had no commercial use since.",
      },
      {
        type: "heading",
        heading: "Coney Island Today",
      },
      {
        type: "text",
        body: "The island is part of Lake Waconia Regional Park. Carver County lists a dock, picnic tables, grills, a seasonal biffy, a half-mile trail and a sandy landing beach. There is no ferry or boat service, so you need your own boat, kayak or paddleboard, or a rental. Check the Carver County parks website for current rules before you go.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🚣",
            title: "How to Get There",
            body: "Bring your own boat or paddle craft, or rent one. The DNR public access in Lake Waconia Regional Park is the main public launch; other accesses are listed on the DNR LakeFinder page. Watch the weather, since the lake can turn choppy quickly.",
            link: { label: "Boat rentals guide →", href: "/guides/lake-waconia-boat-rentals" },
          },
          {
            icon: "📜",
            title: "See the Archives",
            body: "The Carver County Historical Society in Waconia keeps local history collections, including material on the island's resort years.",
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
        body: "Pack out what you bring in. The island can be buggy in midsummer, so bring repellent. Lake Waconia has zebra mussels and Eurasian watermilfoil: clean, drain and dry your boat and gear before you leave the lake.",
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Lake Waconia Day",
        ctaDescription:
          "Pair an island visit with the rest of the lake and downtown Waconia.",
        buttons: [
          { label: "Lake Waconia Guide", href: "/guides/lake-waconia", variant: "primary" },
          { label: "Things to Do", href: "/guides/things-to-do-waconia", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Size", value: "34 acres (Carver County)" },
      { label: "Manager", value: "Carver County" },
      { label: "Access", value: "Boat only" },
      { label: "Resort era", value: "1889 to late 1930s" },
      { label: "National Register", value: "1976" },
    ],
    keywords: [
      "Coney Island of the West",
      "Coney Island Lake Waconia",
      "Waconia island history",
      "Minnesota resort history",
      "Lake Waconia island",
    ],
    articleSection: "History",
    glossaryTerms: [
      { term: "Coney Island of Lake Waconia", anchor: "coney-island" },
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "Lake Waconia Regional Park", anchor: "regional-park" },
    ],
    relatedGuides: [
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
      { title: "Waconia History", readTime: "9 min read", href: "/guides/waconia-history" },
      { title: "Lake Waconia Regional Park", readTime: "6 min read", href: "/guides/lake-waconia-regional-park" },
    ],
    faqs: [
      {
        question: "Can you visit Coney Island of Lake Waconia?",
        answer: "Yes. The island is part of Lake Waconia Regional Park, managed by Carver County. It is reachable only by private boat, kayak or paddleboard; there is no ferry. Carver County lists a dock, picnic tables, grills, a seasonal biffy, a half-mile trail and a sandy landing beach.",
      },
      {
        question: "What was on Coney Island in Lake Waconia?",
        answer: "A summer resort, run by the Zeglin family from 1889 until the late 1930s. The University of Minnesota football team held spring training on the island from 1903 to 1905. The island was listed on the National Register of Historic Places in 1976.",
      },
      {
        question: "How big is Coney Island of Lake Waconia?",
        answer: "Carver County describes it as a 34-acre island. Lake Waconia itself covers 3,080 acres.",
      },
    ],
  },
  {
    slug: "things-to-do-waconia",
    title: "Things to Do in Waconia, Minnesota: A Local Guide",
    metaDescription:
      "Things to do in Waconia, MN: Lake Waconia, the regional park, wineries, downtown dining, the movie theater, and annual events like Nickle Dickle Day and the Carver County Fair.",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "From Minneapolis", value: "35 Miles" },
      { label: "Lake Size", value: "3,080 Acres" },
      { label: "Population (2020)", value: "13,033" },
    ],
    content: [
      {
        type: "text",
        body: "Waconia is a city of about 14,100 people (2025 Census estimate) on the south side of Lake Waconia, roughly 35 miles west of Minneapolis. The 3,080-acre lake, a county regional park, three wineries and a compact downtown cover most of what visitors come for. This guide lists what is worth your time and links to the details.",
      },
      {
        type: "heading",
        heading: "On the Water",
      },
      {
        type: "text",
        body: "In Towne Marina downtown (8 E Lake St) rents pontoons in summer; it had finished renting for the 2026 season as of October. Carver County rents kayaks, paddleboards and canoes on summer weekends at Lake Waconia Regional Park. The park also has the lake's swim beach, open Memorial Day to Labor Day with no lifeguards, and a DNR public access for trailered boats. Walleye, bass and northern pike are the main targets for anglers, and the lake is fished through the ice in winter.",
      },
      {
        type: "heading",
        heading: "Wineries",
      },
      {
        type: "text",
        body: "There are three wineries in the area. Schram Vineyards Winery & Brewery (8785 Airport Rd) is a 32-acre estate overlooking Reitz Lake with a restaurant, house-brewed beer and live music nearly every weekend. Sovereign Estate Wine is on North Shore Road on the north shore of Lake Waconia. Parley Lake Winery pours in the 1888 barn at Deardorff Orchards. Waconia no longer has a downtown brewery: Waconia Brewing Co. closed in January 2026 and Schram Haus's downtown taproom closed in December 2025.",
      },
      {
        type: "heading",
        heading: "Eat Downtown",
      },
      {
        type: "text",
        body: "Iron Tap (140 W Main St) is a craft beer and barbecue spot with a patio. Lola's Lakehouse (318 E Lake St) has a patio with lake views and a seafood and steak menu. Bode Gray's (125 W 1st St) serves artisan pizza, with The Brass Hat speakeasy on its lower level. For breakfast and lunch, Pangea Cafe (37 W 1st St) serves breakfast all day, and Mocha Monkey (115 S Olive St) roasts its own coffee.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🎬",
            title: "Movies & Bowling",
            body: "Emagine Waconia (101 W 1st St) is the downtown movie theater. Garage Bar & Bowl (16 W 1st St) has six lanes, a bar and a scratch kitchen.",
            link: { label: "Things-to-do listings →", href: "/directory/things-to-do" },
          },
          {
            icon: "📜",
            title: "History & Museum",
            body: "The Carver County Historical Society in Waconia covers county history, including the Coney Island resort years.",
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
        body: "Nickle Dickle Day, run by the Waconia Chamber since 1961, fills City Square Park on the second Saturday after Labor Day; the next one is Saturday, September 18, 2027. The Carver County Fair runs five days in August at the fairgrounds (August 11 to 15 in 2027). The Scarecrow Tour runs October 8 to 18, 2026. The Tree Lighting is at 6pm on the Friday after Thanksgiving at the City Square Park gazebo.",
      },
      {
        type: "heading",
        heading: "Golf, Parks & Trails",
      },
      {
        type: "text",
        body: "Island View Golf Club (7795 Laketown Pkwy) is an 18-hole course with public tee times, and its Green Fox Grille is open to the public. Lake Waconia Regional Park covers 164 acres with the beach, picnic areas and the Paradise Commons building. City Square Park downtown hosts most community events. Safari Island Community Center and the Waconia Ice Arena handle indoor recreation.",
      },
      {
        type: "cta",
        ctaTitle: "Build Your Itinerary",
        ctaDescription:
          "Browse the directory by category to plan a Waconia day or weekend.",
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
      { label: "Drive from Minneapolis", value: "~45 min off-peak" },
    ],
    keywords: [
      "things to do in Waconia",
      "Waconia Minnesota activities",
      "Waconia day trip",
      "best of Waconia",
      "Waconia weekend",
      "Minneapolis day trips",
    ],
    articleSection: "Travel & Things to Do",
    glossaryTerms: [
      { term: "Waconia", anchor: "waconia" },
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "Coney Island of Lake Waconia", anchor: "coney-island" },
      { term: "Nickle Dickle Day", anchor: "nickle-dickle" },
      { term: "Carver County Fair", anchor: "carver-county-fair" },
    ],
    relatedGuides: [
      { title: "Best Restaurants in Waconia", readTime: "6 min read", href: "/guides/best-restaurants-in-waconia" },
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
      { title: "Coney Island of Lake Waconia", readTime: "5 min read", href: "/guides/coney-island-lake-waconia" },
    ],
    faqs: [
      {
        question: "What are the best things to do in Waconia, MN?",
        answer: "The main draws are Lake Waconia (boating, fishing, and the swim beach at Lake Waconia Regional Park), the three area wineries (Schram Vineyards, Sovereign Estate Wine and Parley Lake Winery), downtown restaurants such as Iron Tap and Lola's Lakehouse, Emagine Waconia, the Carver County Historical Society, and annual events like Nickle Dickle Day, the Carver County Fair and the Scarecrow Tour.",
      },
      {
        question: "Is Waconia worth visiting?",
        answer: "It works well as a day trip or weekend from the Twin Cities: a 3,080-acre lake with a public beach and boat access, three wineries, a walkable downtown, and a calendar of community events, about 35 miles west of Minneapolis.",
      },
      {
        question: "How long should I spend in Waconia?",
        answer: "An afternoon covers downtown and a winery or dinner. A full day adds the lake or the regional park. A weekend lets you visit more than one winery, get on the water, and catch an event if the timing works.",
      },
      {
        question: "Are there breweries in Waconia?",
        answer: "Not downtown anymore. Waconia Brewing Co. closed in January 2026 and Schram Haus Brewery's downtown taproom closed in December 2025. Schram Vineyards says its house-brewed beer continues at its Bonfire & Barrel restaurant at the vineyard on Airport Road.",
      },
    ],
  },
  {
    slug: "lake-waconia-regional-park",
    title: "Lake Waconia Regional Park: Beach, Boat Access & Rules",
    metaDescription:
      "Guide to Lake Waconia Regional Park: the 164-acre Carver County park with a swim beach (no lifeguards), DNR boat access, summer kayak and paddleboard rentals, hours and pet rules.",
    heroImage:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Park Size", value: "164 Acres" },
      { label: "Hours", value: "6am–10pm" },
      { label: "Beach Season", value: "Memorial–Labor Day" },
    ],
    content: [
      {
        type: "text",
        body: "Lake Waconia Regional Park is a 164-acre Carver County park on Lake Waconia. It has the lake's public swim beach, a DNR public boat access, picnic areas, playgrounds and the Paradise Commons building. The park is open 6am to 10pm daily.",
      },
      {
        type: "heading",
        heading: "The Beach",
      },
      {
        type: "text",
        body: "The swim beach is open from Memorial Day to Labor Day. There have been no lifeguards since 2024, so swimming is at your own risk; keep children within reach and bring life jackets for weak swimmers. Pets are not allowed on the beach.",
      },
      {
        type: "heading",
        heading: "Boat Access",
      },
      {
        type: "text",
        body: "The DNR public access in the park has 36 trailer parking spaces and two boarding docks. Lake Waconia is infested with zebra mussels and Eurasian watermilfoil, so clean, drain and dry your boat and trailer before you leave. Other public accesses on the lake are listed on the DNR LakeFinder page.",
      },
      {
        type: "heading",
        heading: "Kayak, Paddleboard & Canoe Rentals",
      },
      {
        type: "text",
        body: "Carver County rents kayaks, stand-up paddleboards and canoes at the park on weekends from 11am to 4pm, roughly early June to mid-August. Rentals are first come, first served, and the minimum age is 12. Per the county's 2026 rates, kayaks and paddleboards are $15 an hour and canoes $10 an hour.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🐕",
            title: "Pets",
            body: "Pets are banned from the beach, playgrounds and picnic shelters at all times. Check Carver County's rules for leash requirements elsewhere in the park.",
          },
          {
            icon: "🎣",
            title: "No Shore Fishing",
            body: "Shoreline fishing is prohibited in the park. Fish from a boat, or check the DNR LakeFinder page for other access points.",
          },
        ],
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Park Visit",
        ctaDescription:
          "Pair the park with downtown Waconia or a boat day on the lake.",
        buttons: [
          { label: "Lake Waconia Guide", href: "/guides/lake-waconia", variant: "primary" },
          { label: "Boat Rentals", href: "/guides/lake-waconia-boat-rentals", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Manager", value: "Carver County" },
      { label: "Size", value: "164 acres" },
      { label: "Hours", value: "6am–10pm daily" },
      { label: "Lifeguards", value: "None (since 2024)" },
      { label: "Pets", value: "Not on beach, playgrounds or shelters" },
    ],
    keywords: [
      "Lake Waconia Regional Park",
      "Lake Waconia beach",
      "Waconia swim beach",
      "Carver County parks",
      "Lake Waconia boat launch",
    ],
    articleSection: "Parks & Outdoors",
    glossaryTerms: [
      { term: "Lake Waconia Regional Park", anchor: "regional-park" },
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "Coney Island of Lake Waconia", anchor: "coney-island" },
    ],
    relatedGuides: [
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
      { title: "Lake Waconia Boat Rentals", readTime: "5 min read", href: "/guides/lake-waconia-boat-rentals" },
      { title: "Lake Waconia Fishing", readTime: "12 min read", href: "/guides/lake-waconia-fishing" },
    ],
    faqs: [
      {
        question: "Are there lifeguards at Lake Waconia Regional Park?",
        answer: "No. The beach has had no lifeguards since 2024, so swimming is at your own risk. The beach is open Memorial Day to Labor Day.",
      },
      {
        question: "What are the hours of Lake Waconia Regional Park?",
        answer: "The park is open daily from 6am to 10pm.",
      },
      {
        question: "Are dogs allowed at Lake Waconia Regional Park?",
        answer: "Pets are not allowed on the beach, playgrounds or picnic shelters at any time. Check Carver County's park rules for other areas.",
      },
      {
        question: "Can you rent kayaks at Lake Waconia Regional Park?",
        answer: "Yes, in summer. Carver County rents kayaks, paddleboards and canoes on weekends from 11am to 4pm, roughly early June to mid-August, first come, first served, for ages 12 and up. Per the county's 2026 rates, kayaks and paddleboards were $15 an hour and canoes $10 an hour.",
      },
      {
        question: "Can you fish from shore at Lake Waconia Regional Park?",
        answer: "No. Shoreline fishing is prohibited in the park.",
      },
    ],
  },
  {
    slug: "lake-waconia-boat-rentals",
    title: "Lake Waconia Boat Rentals: Pontoons, Kayaks & Paddleboards",
    metaDescription:
      "Where to rent a boat on Lake Waconia: pontoons from In Towne Marina downtown, and kayaks, paddleboards and canoes from Carver County at the regional park. Rules, permits and launch info.",
    heroImage: "/images/boating-lake-waconia.webp",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Pontoon Renter Age", value: "21+" },
      { label: "Kayak / SUP (2026)", value: "$15/hr" },
      { label: "Lake Size", value: "3,080 Acres" },
    ],
    content: [
      {
        type: "text",
        body: "There are two places to rent a boat on Lake Waconia: In Towne Marina downtown for pontoons, and Carver County at Lake Waconia Regional Park for kayaks, paddleboards and canoes. Both are seasonal. This guide covers what each offers, what you need to bring, and where to launch your own boat.",
      },
      {
        type: "heading",
        heading: "Pontoons: In Towne Marina",
      },
      {
        type: "text",
        body: "In Towne Marina (8 E Lake St, (952) 442-2096, intownemarina.com) has rented boats on Lake Waconia for more than 45 years. It rents pontoons only, in 20-foot and 24-foot sizes that carry 9 to 12 people. Gas and life jackets are included. Renters must be 21 or older and hold a Minnesota watercraft operator's permit or a rental certificate. Rates are posted on the marina's website. As of October 2026 the marina was done renting for the 2026 summer season. It also runs a private, paid boat launch downtown.",
      },
      {
        type: "heading",
        heading: "Kayaks, Paddleboards & Canoes: Carver County",
      },
      {
        type: "text",
        body: "Carver County rents kayaks, stand-up paddleboards and canoes at Lake Waconia Regional Park on weekends from 11am to 4pm, roughly early June to mid-August. Rentals are first come, first served, and the minimum age is 12. Per the county's 2026 rates, kayaks and paddleboards are $15 an hour and canoes $10 an hour.",
      },
      {
        type: "heading",
        heading: "Do You Need a Boating Permit?",
      },
      {
        type: "text",
        body: "Minnesota is phasing in a watercraft operator's permit requirement for motorboats over 25 hp and all personal watercraft. Since July 1, 2025 it applies to anyone born after June 30, 2004, and from July 1, 2026 to anyone born after June 30, 2000. It extends to those born after June 30, 1996 on July 1, 2027, and after June 30, 1987 on July 1, 2028. Motors of 25 hp or less are exempt, except personal watercraft. The permit course costs $34.95. Renters can instead take the Minnesota watercraft rental course, which is valid for 180 days. Check the DNR's boating education page for current details.",
      },
      {
        type: "heading",
        heading: "Launching Your Own Boat",
      },
      {
        type: "text",
        body: "The DNR public access in Lake Waconia Regional Park has 36 trailer spaces and two boarding docks. Other public accesses are listed on the DNR LakeFinder page. Lake Waconia is infested with zebra mussels and Eurasian watermilfoil: clean, drain and dry your boat, trailer and gear before you leave.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "📋",
            title: "Bring With You",
            body: "Photo ID, your operator's permit or rental certificate if it applies to you, a payment method, sun protection and drinking water.",
          },
          {
            icon: "🌿",
            title: "Invasive Species",
            body: "Lake Waconia has zebra mussels and Eurasian watermilfoil. If you bring your own boat or paddle craft, clean, drain and dry it before leaving the lake.",
          },
        ],
      },
      {
        type: "heading",
        heading: "When to Go",
      },
      {
        type: "text",
        body: "Mornings tend to be calmer, with less wind and fewer boats, which suits paddling and fishing. Summer weekend afternoons are the busiest time on the water.",
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Day on the Lake",
        ctaDescription:
          "Pair a rental with lunch or dinner downtown, a short walk from the marina.",
        buttons: [
          { label: "Best Restaurants", href: "/guides/best-restaurants-in-waconia", variant: "primary" },
          { label: "Lake Waconia Guide", href: "/guides/lake-waconia", variant: "outline" },
        ],
      },
    ],
    sidebarMap: {
      publicAccess: "DNR access, Regional Park",
      boatLaunchFee: "See DNR LakeFinder",
      waterClarity: "See DNR data",
    },
    keywords: [
      "Lake Waconia boat rentals",
      "pontoon rental Waconia MN",
      "kayak rental Lake Waconia",
      "Lake Waconia paddleboard",
      "In Towne Marina Waconia",
      "boat launch Waconia",
    ],
    articleSection: "Boating",
    glossaryTerms: [
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "AIS (Aquatic Invasive Species)", anchor: "ais" },
      { term: "Lake Waconia Regional Park", anchor: "regional-park" },
    ],
    howTo: {
      name: "How to Rent a Pontoon on Lake Waconia",
      description:
        "Steps for renting a pontoon from In Towne Marina in downtown Waconia, Minnesota.",
      tools: [
        "Photo ID (renter must be 21+)",
        "Minnesota watercraft operator's permit or rental certificate",
        "Sun protection",
        "Drinking water",
      ],
      steps: [
        {
          name: "Check the season and rates",
          text: "In Towne Marina rents pontoons in summer and posts rates on intownemarina.com. As of October 2026 it was done renting for the 2026 season.",
        },
        {
          name: "Meet the requirements",
          text: "The renter must be 21 or older and hold a Minnesota watercraft operator's permit or a rental certificate from the Minnesota watercraft rental course (valid 180 days).",
        },
        {
          name: "Pick a boat size",
          text: "The marina rents 20-foot and 24-foot pontoons with capacity for 9 to 12 people. Gas and life jackets are included.",
        },
        {
          name: "Pick up downtown",
          text: "The marina is at 8 E Lake St in downtown Waconia. Bring photo ID and payment.",
        },
      ],
    },
    relatedGuides: [
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
      { title: "Lake Waconia Fishing Guide", readTime: "12 min read", href: "/guides/lake-waconia-fishing" },
      { title: "Lake Waconia Regional Park", readTime: "6 min read", href: "/guides/lake-waconia-regional-park" },
    ],
    faqs: [
      {
        question: "Can you rent a pontoon on Lake Waconia?",
        answer: "Yes. In Towne Marina (8 E Lake St, (952) 442-2096) rents 20-foot and 24-foot pontoons with gas and life jackets included. Renters must be 21+ and hold a Minnesota watercraft operator's permit or rental certificate. Rates are on intownemarina.com. As of October 2026 it was done renting for the 2026 season.",
      },
      {
        question: "Do you need a license to drive a pontoon on Lake Waconia?",
        answer: "Minnesota's operator's permit requirement is phasing in by birth year: since July 1, 2026 it applies to anyone born after June 30, 2000, operating a motorboat over 25 hp or a personal watercraft. It extends to those born after June 30, 1996 in 2027 and after June 30, 1987 in 2028. Renters can take the Minnesota watercraft rental course instead (valid 180 days). In Towne Marina requires a permit or rental certificate for all pontoon renters.",
      },
      {
        question: "Where can you rent kayaks on Lake Waconia?",
        answer: "Carver County rents kayaks, paddleboards and canoes at Lake Waconia Regional Park on weekends from 11am to 4pm, roughly early June to mid-August, first come, first served, for ages 12 and up. Per the county's 2026 rates, kayaks and paddleboards were $15 an hour and canoes $10 an hour.",
      },
      {
        question: "Where is the public boat launch on Lake Waconia?",
        answer: "The DNR public access is in Lake Waconia Regional Park, with 36 trailer spaces and two boarding docks. Other public accesses are listed on the DNR LakeFinder page. In Towne Marina also runs a private, paid launch downtown.",
      },
    ],
  },
  {
    slug: "lake-waconia-ice-fishing",
    title: "Lake Waconia Ice Fishing: Walleye, Panfish & Safety Guide",
    metaDescription:
      "Ice fishing Lake Waconia: walleye and panfish tactics, DNR ice thickness guidance, gear list, and what to know about access and invasive species.",
    heroImage:
      "https://images.unsplash.com/photo-1518182170546-07661fd94144?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Safe Ice (foot)", value: "4+ Inches" },
      { label: "Max Depth", value: "37 Feet" },
      { label: "Lake Size", value: "3,080 Acres" },
    ],
    content: [
      {
        type: "text",
        body: "Lake Waconia is fished through the ice each winter for walleye and panfish. This guide covers ice safety first, then tactics, gear and access.",
      },
      {
        type: "heading",
        heading: "Ice Safety: Read This First",
      },
      {
        type: "text",
        body: "Measure the ice yourself as you go; thickness varies across a lake, especially near pressure ridges and inlets. Minnesota DNR guidance for new clear ice: 4 inches for walking, 5 to 7 inches for a snowmobile or ATV, 8 to 12 inches for a car or small pickup, and 12 to 15 inches for a medium truck. White or snow ice is weaker, so double those figures. Early and late in the season, stay close to shore. Don't go out alone the first time.",
      },
      {
        type: "heading",
        heading: "Walleye",
      },
      {
        type: "text",
        body: "Walleye are the main winter target. Breaklines between shallow flats and deeper water are the usual starting point; use the DNR depth map for Lake Waconia to find them before you head out. Tip-ups with fathead minnows cover water passively, and jigging spoons tipped with a minnow head draw reaction strikes. Low light at dawn and dusk is usually the best window.",
      },
      {
        type: "heading",
        heading: "Panfish",
      },
      {
        type: "text",
        body: "Crappies often suspend over deeper water; a flasher helps you find them, and a small jig or jigging minnow works well. Bluegills tend to hold shallower near weed edges. Light line and small tungsten jigs help with finicky fish.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🎣",
            title: "Recommended Gear",
            body: "Ice rod (24–30\"), 4–8 lb fluorocarbon, fathead minnows, tungsten ice jigs, jigging spoons, tip-ups, a flasher, a portable shelter, ice cleats, a spud bar, and ice picks worn around your neck.",
          },
          {
            icon: "🌿",
            title: "Invasive Species",
            body: "Lake Waconia is infested with zebra mussels and Eurasian watermilfoil. Clean and dry gear between lakes, and pack out all trash.",
          },
        ],
      },
      {
        type: "heading",
        heading: "Access in Winter",
      },
      {
        type: "text",
        body: "Public accesses to Lake Waconia are listed on the DNR LakeFinder page. Winter conditions at each access change with snow and ice, so scout before you commit, and never drive onto ice you haven't measured.",
      },
      {
        type: "cta",
        ctaTitle: "Get on the Ice",
        ctaDescription:
          "Check the DNR depth map before you go, and pair an early morning on the ice with breakfast downtown.",
        buttons: [
          { label: "Lake Waconia Fishing", href: "/guides/lake-waconia-fishing", variant: "primary" },
          { label: "MN DNR LakeFinder", href: "https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900", variant: "outline" },
        ],
      },
    ],
    sidebarMap: {
      publicAccess: "See DNR LakeFinder",
      boatLaunchFee: "See DNR LakeFinder",
      waterClarity: "See DNR data",
    },
    keywords: [
      "Lake Waconia ice fishing",
      "Lake Waconia walleye winter",
      "ice fishing Carver County",
      "Minnesota ice fishing safety",
    ],
    articleSection: "Fishing",
    glossaryTerms: [
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "DOW number", anchor: "dow-number" },
      { term: "AIS (Aquatic Invasive Species)", anchor: "ais" },
    ],
    howTo: {
      name: "How to Ice Fish for Walleye on Lake Waconia",
      description:
        "A step-by-step approach to ice fishing Lake Waconia for walleye once safe ice has formed.",
      totalTime: "PT3H",
      tools: [
        "Ice rod (24–30\")",
        "4–8 lb fluorocarbon line",
        "Fathead minnows",
        "Jigging spoons",
        "Tip-ups",
        "Flasher",
        "Portable shelter",
        "Spud bar or auger",
        "Ice cleats and ice picks",
        "Minnesota fishing license",
      ],
      steps: [
        {
          name: "Check ice safety yourself",
          text: "Measure ice before and as you walk. MN DNR guidance: 4 inches of new clear ice for walking, 5–7 inches for a snowmobile or ATV, 8–12 inches before driving a car or small pickup. Double those figures for white or snow ice.",
        },
        {
          name: "Find structure on the map",
          text: "Use the DNR LakeFinder depth map (DOW 10-0059-00) to locate breaklines before walking out.",
        },
        {
          name: "Drill across a depth range",
          text: "Drill several holes across a range of depths so you can find where fish are holding that day without re-drilling.",
        },
        {
          name: "Set tip-ups with minnows",
          text: "Run tip-ups with fathead minnows set a little off the bottom to cover water passively.",
        },
        {
          name: "Jig actively",
          text: "Use a flasher to find fish and work a jigging spoon tipped with a minnow head. Many strikes come on the pause.",
        },
        {
          name: "Fish the low-light windows",
          text: "Walleye often bite best around dawn and dusk. Be set up before either window.",
        },
        {
          name: "Pack out everything",
          text: "Trash left on the ice ends up in the lake at thaw. Clean and dry equipment before moving to another lake.",
        },
      ],
    },
    relatedGuides: [
      { title: "Lake Waconia Fishing", readTime: "12 min read", href: "/guides/lake-waconia-fishing" },
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
      { title: "Lake Waconia Regional Park", readTime: "6 min read", href: "/guides/lake-waconia-regional-park" },
    ],
    faqs: [
      {
        question: "When is Lake Waconia safe for ice fishing?",
        answer: "It depends on the winter. Measure ice yourself: Minnesota DNR guidance is 4 inches of new clear ice for walking, 5–7 inches for a snowmobile or ATV, and 8–12 inches for a car or small pickup, with double those figures for white or snow ice.",
      },
      {
        question: "What fish can you catch through the ice on Lake Waconia?",
        answer: "Walleye are the main winter target, along with panfish such as crappie and bluegill. The DNR's fish survey reports on LakeFinder show current species data.",
      },
      {
        question: "Do you need a special license to ice fish in Minnesota?",
        answer: "A Minnesota fishing license is required for anglers 16 and older. There is no separate ice fishing license, but follow the DNR's rules on the number of lines per angler and on shelters.",
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
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Founded", value: "1856" },
      { label: "Incorporated", value: "1882" },
      { label: "Population (2020 Census)", value: "13,033" },
    ],
    content: [
      {
        type: "text",
        body: "Waconia is older than Minnesota statehood. The Dakota people knew the lake first; German immigrants founded the modern town in 1856; a resort operated on the island in the lake for about fifty years; and the late twentieth century turned a small farm-and-lake town into a growing outer suburb. This is the short version.",
      },
      {
        type: "heading",
        heading: "The Name: Dakota Origins",
      },
      {
        type: "text",
        body: "The name 'Waconia' derives from the Dakota language, generally translated as 'fountain' or 'spring of water' — a reference to the lake's clear, spring-fed character. The Dakota lived in this region long before European settlement.",
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
        type: "heading",
        heading: "The Coney Island Resort Era (1889 to the late 1930s)",
      },
      {
        type: "text",
        body: "Coney Island, which Carver County describes as a 34-acre island, held a summer resort run by the Zeglin family from 1889 until the late 1930s. The University of Minnesota football team held spring training on the island from 1903 to 1905. The island was listed on the National Register of Historic Places in 1976 and is now part of Lake Waconia Regional Park. (See our Coney Island guide for more.)",
      },
      {
        type: "heading",
        heading: "Mid-Century Waconia: Farming, Faith, and the Fair",
      },
      {
        type: "text",
        body: "Through the middle of the century Waconia remained a farm town and county fair town: the Carver County Fair, held at the fairgrounds in Waconia, reached its 114th edition in 2026. Churches anchored community life, and the lake remained a local recreation spot.",
      },
      {
        type: "heading",
        heading: "Modern Growth (1980s to Today)",
      },
      {
        type: "text",
        body: "Suburban growth in the Twin Cities and the growth of Ridgeview Medical Center turned Waconia into an outer suburb. The 2020 Census counted 13,033 residents, and the Census Bureau estimated about 14,100 for July 2025. Downtown now has independent restaurants, and three wineries operate nearby.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "📜",
            title: "See the Archives",
            body: "The Carver County Historical Society in Waconia keeps the county's history collections and exhibits, including material on the Coney Island resort years.",
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
    keywords: [
      "Waconia history",
      "Waconia name meaning",
      "Dakota Wakonja",
      "Coney Island of the West",
      "Carver County history",
    ],
    articleSection: "History",
    glossaryTerms: [
      { term: "Waconia", anchor: "waconia" },
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "Coney Island of Lake Waconia", anchor: "coney-island" },
      { term: "Carver County", anchor: "carver-county" },
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
        answer: "Three things stand out. The Dakota knew the lake first and the city's name comes from the Dakota language. German settlers founded the modern town in 1856. And from 1889 to the late 1930s, the Zeglin family ran a resort on Coney Island in Lake Waconia. The city counted 13,033 residents in the 2020 Census.",
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
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Population (2025 est.)", value: "about 14,100" },
      { label: "Drive to MSP", value: "~45 min" },
      { label: "School District", value: "ISD 110" },
    ],
    content: [
      {
        type: "text",
        body: "Waconia is on a lot of relocation shortlists — a well-regarded school district, a big lake, and a walkable downtown. This guide covers commuting, schools, neighborhoods, healthcare and cost of living before you sign anything.",
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
        body: "Waconia students attend Independent School District 110, Waconia Public Schools, which also serves St. Bonifacius, Minnetrista, Victoria and New Germany. The district has Waconia High School, Waconia Middle School, three elementary schools (Bayview, Laketown and Southview) and the Waconia Learning Center. Confirm school assignment for a specific address with the district before you buy.",
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
        body: "Your property tax bill depends on the county, city and school district levies and your assessed value; look up a specific parcel on Carver County's property tax site. Minnesota state income tax applies (four brackets, top rate 9.85%). Sales tax is the state rate plus local taxes; check the Minnesota Department of Revenue's rate lookup for the current combined rate. Lakefront property prices at the top of the local market.",
      },
      {
        type: "heading",
        heading: "Day-to-Day Life",
      },
      {
        type: "text",
        body: "For groceries, Waconia has Mackenthun's Fine Foods (851 Marketplace Dr) and Aldi (10620 10th St W), plus Target and other national chains, and the public library. Downtown has the restaurants, City Square Park events and the Thursday farmers market. The DNR public access at Lake Waconia Regional Park is a short drive from downtown.",
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
        body: "A few practical points. Lake access doesn't require lake frontage: the public access and beach at the regional park are open to everyone. The Highway 5 commute is the biggest variable, so drive it at your actual work hours before you sign. And plan for winter snow removal before December.",
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
            { label: "ZIP code", value: "55387" },
    ],
    keywords: [
      "moving to Waconia",
      "Waconia MN relocation",
      "Waconia neighborhoods",
      "Waconia schools",
      "Waconia commute",
      "ISD 110",
    ],
    articleSection: "Living in Waconia",
    glossaryTerms: [
      { term: "Waconia", anchor: "waconia" },
      { term: "ISD 110", anchor: "isd-110" },
      { term: "Carver County", anchor: "carver-county" },
      { term: "Ridgeview Medical Center", anchor: "ridgeview" },
      { term: "55387", anchor: "55387" },
    ],
    relatedGuides: [
      { title: "Cost of Living in Waconia", readTime: "6 min read", href: "/guides/cost-of-living-in-waconia" },
      { title: "Waconia Neighborhoods", readTime: "6 min read", href: "/guides/waconia-neighborhoods" },
      { title: "Waconia Schools (ISD 110)", readTime: "6 min read", href: "/guides/waconia-schools" },
    ],
    faqs: [
      {
        question: "Is Waconia, MN a good place to live?",
        answer: "Its draws are the school district (ISD 110), a 3,080-acre lake with a public beach and boat access, a walkable downtown, and a regional hospital (Ridgeview). The trade-off is a roughly 45-minute off-peak drive to downtown Minneapolis and limited public transit.",
      },
      {
        question: "What school district is Waconia in?",
        answer: "Independent School District 110 (Waconia Public Schools), which includes Waconia High School, Waconia Middle School, three elementary schools (Bayview, Laketown and Southview) and the Waconia Learning Center.",
      },
      {
        question: "How long is the drive from Waconia to Minneapolis?",
        answer: "Approximately 45 minutes off-peak from Waconia to downtown Minneapolis via Highway 5 and I-494. In peak rush hour the drive can stretch to 60–70 minutes. Test your specific commute hours before relocating.",
      },
      {
        question: "What is the population of Waconia, MN?",
        answer: "Waconia has about 14,100 residents (2025 Census estimate). The 2020 Census counted 13,033.",
      },
      {
        question: "Is Waconia expensive to live in?",
        answer: "Housing is the main variable, and lakefront property sits at the top of the local market. Property taxes depend on county, city and school levies and your assessed value, and Minnesota state income tax applies. Compare current listings and a specific parcel's tax record rather than relying on averages.",
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
      "Independent School District 110, Waconia Public Schools: Waconia High School, Waconia Middle School, Bayview, Laketown and Southview elementaries, the Waconia Learning Center, and how to confirm boundaries.",
    heroImage:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "District", value: "ISD 110" },
      { label: "Elementary Schools", value: "3" },
      { label: "Mascot", value: "Wildcats" },
    ],
    content: [
      {
        type: "text",
        body: "Waconia students attend Independent School District 110 (Waconia Public Schools). The district serves Waconia, St. Bonifacius, Minnetrista, Victoria and New Germany with one high school, one middle school, three elementary schools, the Waconia Learning Center, and Community Education programs including Wildcat Preschool. The district office is at 512 Industrial Blvd.",
      },
      {
        type: "heading",
        heading: "The Schools",
      },
      {
        type: "text",
        body: "The district runs Waconia High School, Waconia Middle School, and three elementary schools: Bayview, Laketown and Southview. It also operates the Waconia Learning Center and an Early Childhood Center for Wildcat Preschool. Laketown Elementary has received the PBIS Sustaining Exemplar recognition six years running, per the district.",
      },
      {
        type: "heading",
        heading: "Boundaries (How to Tell Which Elementary)",
      },
      {
        type: "text",
        body: "Elementary attendance areas are set by the district and can change as enrollment grows. The district publishes a boundary map on isd110.org. If elementary assignment matters to your decision, confirm it for the specific address with the district's enrollment office before you buy.",
      },
      {
        type: "heading",
        heading: "Activities & Athletics",
      },
      {
        type: "text",
        body: "Waconia High School teams are the Wildcats. The district posts activity schedules and tickets on its website; check there for current sports, music and theater offerings.",
      },
      {
        type: "heading",
        heading: "Private & Parochial Options",
      },
      {
        type: "text",
        body: "Private and parochial schools operate in Waconia and nearby communities; contact each school directly for grades and enrollment. Minnesota's open enrollment program also lets families apply to neighboring public districts.",
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
      { label: "Mascot", value: "Wildcats" },
    ],
    keywords: [
      "Waconia schools",
      "ISD 110",
      "Waconia Public Schools",
      "Waconia High School",
      "Bayview Elementary Waconia",
    ],
    articleSection: "Living in Waconia",
    glossaryTerms: [
      { term: "ISD 110", anchor: "isd-110" },
      { term: "Waconia", anchor: "waconia" },
      { term: "Carver County", anchor: "carver-county" },
    ],
    relatedGuides: [
      { title: "Moving to Waconia", readTime: "8 min read", href: "/guides/moving-to-waconia" },
      { title: "Waconia History", readTime: "9 min read", href: "/guides/waconia-history" },
      { title: "Waconia Parks", readTime: "5 min read", href: "/guides/waconia-parks" },
    ],
    faqs: [
      {
        question: "What school district is Waconia in?",
        answer: "Independent School District 110, Waconia Public Schools. The district includes Waconia High School, Waconia Middle School, three elementary schools (Bayview, Laketown and Southview) and the Waconia Learning Center.",
      },
      {
        question: "How many schools are in Waconia, MN?",
        answer: "ISD 110 runs one high school, one middle school, three elementary schools (Bayview, Laketown and Southview), the Waconia Learning Center and an Early Childhood Center.",
      },
      {
        question: "How can I compare Waconia schools?",
        answer: "The Minnesota Report Card (rc.education.mn.gov) publishes test results, graduation rates and other data for each ISD 110 school. The district links each school's report card from its website.",
      },
      {
        question: "What is the Waconia High School mascot?",
        answer: "The Wildcats.",
      },
      {
        question: "What elementary school will my child attend in Waconia?",
        answer: "It depends on your address. ISD 110 has three elementary schools (Bayview, Laketown and Southview) and publishes a boundary map; confirm assignment for a specific address with the district's enrollment office.",
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
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
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
        body: "Highway 5 runs through Waconia east to west, and most routes from Minneapolis end on it. Allow about 45 minutes off-peak; evening rush hour can add a lot more. Check a live traffic map before you leave.",
      },
      {
        type: "heading",
        heading: "From MSP Airport (~50 min)",
      },
      {
        type: "text",
        body: "From Minneapolis-St. Paul International Airport, a common route is I-494 west, then west on Highway 5 to Waconia. Allow about 50 minutes off-peak, longer in heavy traffic. Rideshare fares vary with time and demand; check the app for a quote.",
      },
      {
        type: "heading",
        heading: "From Surrounding Cities",
      },
      {
        type: "text",
        body: "Chaska, Victoria and Chanhassen are a short drive east of Waconia. Excelsior and Mound, on Lake Minnetonka, are to the northeast. Drivers coming from farther away usually connect to Highway 5 or Highway 7; use a mapping app for door-to-door times.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🚗",
            title: "Avoid Friday Afternoons",
            body: "Westbound traffic out of Minneapolis is heavy on summer Friday afternoons. Leave early or late if you can.",
          },
          {
            icon: "🅿️",
            title: "Free Downtown Parking",
            body: "Downtown Waconia has free street parking and public lots near City Square Park and the restaurants.",
          },
        ],
      },
      {
        type: "heading",
        heading: "Public Transit",
      },
      {
        type: "text",
        body: "There is no public transit directly into Waconia. SouthWest Transit serves Chaska and Chanhassen to the east, but you'd need a car or rideshare to reach those stops from Waconia. For day visitors without a car, the most realistic options are renting a car at MSP or taking a rideshare.",
      },
      {
        type: "heading",
        heading: "Parking Once You're Here",
      },
      {
        type: "text",
        body: "Downtown street parking is free with no meters, and there are public lots near City Square Park. Lake Waconia Regional Park's lots fill on hot summer weekends, so arrive early. Schram Vineyards has on-site parking with overflow parking on busy days.",
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
      { label: "Distance from Minneapolis", value: "~35 miles" },
      { label: "Drive from MSP Airport", value: "~50 min" },
      { label: "Drive from downtown", value: "~45 min" },
      { label: "Public transit", value: "None direct" },
      { label: "Parking", value: "Free" },
    ],
    keywords: [
      "drive to Waconia",
      "Minneapolis to Waconia",
      "Waconia from MSP airport",
      "how to get to Waconia",
      "Waconia parking",
    ],
    articleSection: "Travel & Things to Do",
    glossaryTerms: [
      { term: "Waconia", anchor: "waconia" },
      { term: "Carver County", anchor: "carver-county" },
      { term: "55387", anchor: "55387" },
    ],
    relatedGuides: [
      { title: "Things to Do in Waconia", readTime: "7 min read", href: "/guides/things-to-do-waconia" },
      { title: "Where to Stay", readTime: "5 min read", href: "/hotels" },
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
    ],
    faqs: [
      {
        question: "How far is Waconia from Minneapolis?",
        answer: "About 35 miles west of downtown Minneapolis, roughly 45 minutes off-peak. Rush hour adds time.",
      },
      {
        question: "How do I get to Waconia from MSP Airport?",
        answer: "A common route is I-494 west, then Highway 5 west. Allow about 50 minutes off-peak. Rideshare is available; fares vary with time and demand.",
      },
      {
        question: "Is there a bus or train to Waconia?",
        answer: "No. There is no commuter rail, light rail or direct public transit to Waconia. SouthWest Transit serves Chaska and Chanhassen to the east, but reaching those stops from Waconia still requires a car. Most visitors drive or use a rideshare.",
      },
      {
        question: "How do you get from Chaska to Waconia?",
        answer: "Drive west on Highway 5. Chaska is a short drive east of Waconia.",
      },
      {
        question: "Is parking free in downtown Waconia?",
        answer: "Yes. Downtown Waconia has free street parking with no meters and public lots near City Square Park. Lots at Lake Waconia Regional Park fill on summer weekends.",
      },
    ],
  },
  {
    slug: "waconia-parks",
    title: "Waconia Parks: Regional Park, City Square Park & Coney Island",
    metaDescription:
      "Parks in Waconia, MN: Lake Waconia Regional Park (164 acres), City Square Park downtown, Coney Island in the lake, and the city's indoor recreation facilities.",
    heroImage:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Regional Park", value: "164 Acres" },
      { label: "Coney Island", value: "34 Acres" },
      { label: "Park Hours", value: "6am–10pm" },
    ],
    content: [
      {
        type: "text",
        body: "Waconia's outdoor space is split between Carver County, which runs Lake Waconia Regional Park and Coney Island, and the city, which runs downtown's City Square Park, neighborhood parks and indoor recreation facilities. This guide covers the main ones.",
      },
      {
        type: "heading",
        heading: "Lake Waconia Regional Park (164 acres)",
      },
      {
        type: "text",
        body: "Carver County's park on Lake Waconia, open 6am to 10pm daily. It has the swim beach (Memorial Day to Labor Day, no lifeguards since 2024), a DNR public boat access with 36 trailer spaces, picnic areas, playgrounds and the Paradise Commons building. Kayak, paddleboard and canoe rentals run on summer weekends. Pets are not allowed on the beach, playgrounds or picnic shelters, and shoreline fishing is prohibited. See our dedicated guide.",
      },
      {
        type: "heading",
        heading: "City Square Park (downtown)",
      },
      {
        type: "text",
        body: "Downtown's central park and the site of Waconia's biggest community events: Nickle Dickle Day each September, the Tree Lighting at the gazebo on the Friday after Thanksgiving, and since 2025 the Christkindlsmarkt in December.",
      },
      {
        type: "heading",
        heading: "Coney Island of Lake Waconia",
      },
      {
        type: "text",
        body: "Part of Lake Waconia Regional Park, Coney Island is a 34-acre island (per Carver County) that held a resort from 1889 to the late 1930s. Carver County lists a dock, picnic tables, grills, a seasonal biffy, a half-mile trail and a sandy landing beach. It is reachable only by boat. See our Coney Island guide.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🏢",
            title: "Indoor Recreation",
            body: "Safari Island Community Center and the Waconia Ice Arena are the city's indoor recreation facilities.",
            link: { label: "Safari Island listing →", href: "/directory/safari-island-community-center" },
          },
          {
            icon: "🌳",
            title: "Neighborhood Parks",
            body: "The city maintains neighborhood parks and trails across town. The City of Waconia website (waconiamn.gov) has current park information and shelter reservations.",
          },
        ],
      },
      {
        type: "cta",
        ctaTitle: "Spend a Day in the Parks",
        ctaDescription:
          "A morning at Lake Waconia Regional Park and an afternoon downtown at City Square Park.",
        buttons: [
          { label: "Lake Waconia Regional Park", href: "/guides/lake-waconia-regional-park", variant: "primary" },
          { label: "Things to Do", href: "/guides/things-to-do-waconia", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Park system", value: "City + Carver County" },
      { label: "Regional park", value: "164 acres" },
      { label: "Regional park hours", value: "6am–10pm" },
      { label: "Beach", value: "Regional Park (no lifeguards)" },
      { label: "Pets", value: "Not on beach, playgrounds, shelters" },
    ],
    keywords: [
      "Waconia parks",
      "City Square Park Waconia",
      "Lake Waconia Regional Park",
      "Waconia trails",
      "Waconia playgrounds",
    ],
    articleSection: "Parks & Outdoors",
    glossaryTerms: [
      { term: "Lake Waconia Regional Park", anchor: "regional-park" },
      { term: "City Square Park", anchor: "city-square-park" },
      { term: "Coney Island of Lake Waconia", anchor: "coney-island" },
    ],
    relatedGuides: [
      { title: "Lake Waconia Regional Park", readTime: "6 min read", href: "/guides/lake-waconia-regional-park" },
      { title: "Coney Island of Lake Waconia", readTime: "5 min read", href: "/guides/coney-island-lake-waconia" },
      { title: "Things to Do in Waconia", readTime: "7 min read", href: "/guides/things-to-do-waconia" },
    ],
    faqs: [
      {
        question: "What is the biggest park in Waconia, MN?",
        answer: "Lake Waconia Regional Park, a 164-acre Carver County park on Lake Waconia with a swim beach, a DNR public boat access, picnic areas and playgrounds.",
      },
      {
        question: "Where is City Square Park in Waconia?",
        answer: "Downtown Waconia, at 104 E Main St. It hosts Nickle Dickle Day, the Tree Lighting at its gazebo, and the Christkindlsmarkt.",
      },
      {
        question: "Can you visit Coney Island of Lake Waconia?",
        answer: "Yes, by boat. The island is part of Lake Waconia Regional Park, and Carver County lists a dock, picnic tables, grills, a seasonal biffy, a half-mile trail and a sandy landing beach.",
      },
      {
        question: "Are dogs allowed at Lake Waconia Regional Park?",
        answer: "Pets are not allowed on the beach, playgrounds or picnic shelters at any time. Check Carver County's rules for other parts of the park.",
      },
    ],
  },
  {
    slug: "lake-waconia-depth-map",
    title: "Lake Waconia Depth Map, Bathymetry & DNR Data (DOW 10-0059-00)",
    metaDescription:
      "Lake Waconia depth map basics: 3,080 acres, 37-foot maximum depth, DNR lake ID 10-0059-00, and how to read the official MN DNR LakeFinder contour map.",
    heroImage:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
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
        body: "The official source for Lake Waconia's underwater shape is the Minnesota DNR's depth map on LakeFinder. This guide gives the key numbers and explains how to read a contour map.",
      },
      {
        type: "heading",
        heading: "The Numbers",
      },
      {
        type: "text",
        body: "Lake Waconia covers 3,080 acres, reaches a maximum depth of 37 feet, and has about 11 miles of shoreline (10.88 miles per the DNR). Its DNR lake ID is 10-0059-00. Water clarity readings and other water-quality data are published with the DNR and state monitoring records.",
      },
      {
        type: "heading",
        heading: "Key Structure for Anglers",
      },
      {
        type: "text",
        body: "On any lake, fish relate to changes: breaklines where the bottom drops off, points, humps, and the edges of weed growth. On the Lake Waconia depth map, look for places where contour lines bunch together, especially around the island and the main-lake points. Those are the spots to check first.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "📍",
            title: "Official DNR Map",
            body: "The Lake Waconia depth map and fish survey report are free on the Minnesota DNR LakeFinder.",
            link: { label: "MN DNR LakeFinder →", href: "https://www.dnr.state.mn.us/lakefind/showreport.html?downum=10005900" },
          },
          {
            icon: "🐟",
            title: "Fish Survey Data",
            body: "DNR survey reports show catch rates and sizes for walleye, bass, pike, panfish and others.",
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
        body: "Contour lines connect points of equal depth. Lines close together mean a steep drop; lines far apart mean a gentle slope. Steep breaks tend to concentrate fish. Most fish-finder mapping systems also include lake contour layers.",
      },
      {
        type: "heading",
        heading: "Stocking & Invasive Species",
      },
      {
        type: "text",
        body: "The DNR publishes Lake Waconia's stocking history in the LakeFinder report. The lake is infested with zebra mussels and Eurasian watermilfoil, so clean, drain and dry your boat, trailer and gear before leaving.",
      },
      {
        type: "cta",
        ctaTitle: "Pair the Map with the Fishing Guide",
        ctaDescription:
          "Our seasonal fishing guide covers what to try through the year.",
        buttons: [
          { label: "Lake Waconia Fishing Guide", href: "/guides/lake-waconia-fishing", variant: "primary" },
          { label: "Ice Fishing Guide", href: "/guides/lake-waconia-ice-fishing", variant: "outline" },
        ],
      },
    ],
    sidebarMap: {
      publicAccess: "DNR access, Regional Park",
      boatLaunchFee: "See DNR LakeFinder",
      waterClarity: "See DNR data",
    },
    keywords: [
      "Lake Waconia depth map",
      "Lake Waconia bathymetry",
      "DOW 10-0059-00",
      "Lake Waconia max depth",
      "Lake Waconia DNR survey",
    ],
    articleSection: "Lake & Outdoors",
    glossaryTerms: [
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "DOW number", anchor: "dow-number" },
      { term: "AIS (Aquatic Invasive Species)", anchor: "ais" },
    ],
    relatedGuides: [
      { title: "Lake Waconia Fishing Guide", readTime: "12 min read", href: "/guides/lake-waconia-fishing" },
      { title: "Lake Waconia Ice Fishing", readTime: "7 min read", href: "/guides/lake-waconia-ice-fishing" },
      { title: "Lake Waconia Complete Guide", readTime: "8 min read", href: "/guides/lake-waconia" },
    ],
    faqs: [
      {
        question: "How deep is Lake Waconia?",
        answer: "Lake Waconia has a maximum depth of 37 feet across 3,080 acres. Its Minnesota DNR lake ID is 10-0059-00.",
      },
      {
        question: "Where can I find a depth map of Lake Waconia?",
        answer: "The official depth map and fish survey report are free on the Minnesota DNR LakeFinder (search 10-0059-00). Most fish-finder mapping systems also include lake contours.",
      },
      {
        question: "Does Lake Waconia have invasive species?",
        answer: "Yes. It is infested with zebra mussels and Eurasian watermilfoil. Clean, drain and dry boats and gear before leaving.",
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
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
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
        body: "Lake Waconia and Lake Minnetonka are the two best-known recreational lakes in the western Twin Cities — but they offer very different experiences. Minnetonka is far bigger, with many bays and a heavily developed shoreline. Waconia is a single main basin of 3,080 acres with a county regional park on its shore. Here is how they compare.",
      },
      {
        type: "heading",
        heading: "Size & Character",
      },
      {
        type: "text",
        body: "Lake Minnetonka covers 14,500+ acres across more than 20 interconnected bays — by far the largest lake in the metro. It's heavily developed; most of the shoreline is private homes, marinas, and commercial property. Lake Waconia covers 3,080 acres in a mostly open basin, with Coney Island, a county park, in the lake. Its shoreline mixes homes, the regional park and a downtown waterfront.",
      },
      {
        type: "heading",
        heading: "Public Access",
      },
      {
        type: "text",
        body: "Lake Waconia Regional Park has the DNR public access (36 trailer spaces, two boarding docks) and a public swim beach, open Memorial Day to Labor Day with no lifeguards since 2024. Other Lake Waconia accesses are listed on the DNR LakeFinder page. Minnetonka has several public accesses and beaches as well; check the DNR and Hennepin County for those.",
      },
      {
        type: "heading",
        heading: "Boating",
      },
      {
        type: "text",
        body: "Minnetonka offers more variety: many bays and more restaurants reachable by boat. Waconia offers a large open basin without bay-to-bay navigation. On Waconia, In Towne Marina rents pontoons and Carver County rents kayaks, paddleboards and canoes on summer weekends.",
      },
      {
        type: "heading",
        heading: "Fishing",
      },
      {
        type: "text",
        body: "Both lakes are fished hard. Walleye are the main draw on Waconia, along with bass, pike and panfish; Minnetonka is known for bass and muskie. Compare the DNR survey reports for each lake on LakeFinder for current data.",
      },
      {
        type: "heading",
        heading: "Dining & Lakefront Restaurants",
      },
      {
        type: "text",
        body: "Minnetonka has the bigger boat-up restaurant scene by far — Lord Fletcher's, Maynard's, Bayside, and a dozen others all sit on the water with dock space. Waconia's lakefront dining is smaller: Lola's Lakehouse (318 E Lake St) has a lake-view patio and its own marina with seasonal slips by waitlist, and Sovereign Estate Wine has a lakefront winery patio on the north shore. Waconia also has three wineries nearby: Schram, Sovereign and Parley Lake.",
      },
      {
        type: "heading",
        heading: "Lodging",
      },
      {
        type: "text",
        body: "Minnetonka has more chain hotel options in adjacent Wayzata and Excelsior. Waconia has far fewer hotel rooms; see our lodging page for current options. For lakefront short-term rentals, both lakes have active Airbnb and VRBO inventories — Minnetonka properties tend to be pricier and book further out; Waconia lakefront rentals are more affordable but still book months ahead for July 4th and other peak weekends.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🏖",
            title: "Public Beach",
            body: "Lake Waconia Regional Park's swim beach is open Memorial Day to Labor Day. There are no lifeguards, and pets are not allowed on the beach.",
          },
          {
            icon: "🍷",
            title: "Lakeside Winery",
            body: "Sovereign Estate Wine sits on the north shore of Lake Waconia, with a lakefront patio and free live music on Fridays and Sundays.",
          },
        ],
      },
      {
        type: "heading",
        heading: "Quick Verdict",
      },
      {
        type: "text",
        body: "Pick Lake Minnetonka if you want variety: many bays and more boat-up restaurants. Pick Lake Waconia if you want one big open basin, a county park with a public beach and boat access, walleye fishing, and wineries nearby. The two are about 12 miles apart, so it is easy to try both.",
      },
      {
        type: "cta",
        ctaTitle: "Plan a Lake Waconia Day",
        ctaDescription:
          "Beach, boat access, walleye fishing and nearby wineries. Start with the lake guide.",
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
    keywords: [
      "Lake Waconia vs Lake Minnetonka",
      "best lake Twin Cities",
      "Lake Waconia vs Minnetonka comparison",
      "Minnesota lake comparison",
      "western metro lakes",
    ],
    articleSection: "Lake & Outdoors",
    glossaryTerms: [
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "Coney Island of Lake Waconia", anchor: "coney-island" },
      { term: "DOW number", anchor: "dow-number" },
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
        answer: "It depends on the species. Walleye are the main draw on Lake Waconia; Minnetonka is known for bass and muskie. The DNR's LakeFinder survey reports are the best way to compare current fish populations.",
      },
      {
        question: "Is there a public beach on Lake Waconia?",
        answer: "Yes. Lake Waconia Regional Park has a swim beach open Memorial Day to Labor Day. There have been no lifeguards since 2024, so swimming is at your own risk.",
      },
      {
        question: "How far apart are Lake Waconia and Lake Minnetonka?",
        answer: "Roughly 12 miles. Driving from downtown Waconia to the south shore of Lake Minnetonka takes about 20 minutes via Highway 7.",
      },
      {
        question: "Should I visit Lake Waconia or Lake Minnetonka?",
        answer: "Choose Lake Waconia for a county park with a beach and boat access, walleye fishing, and nearby wineries. Choose Lake Minnetonka for more bays and boat-up restaurants. They are about 12 miles apart, so many people do both.",
      },
    ],
  },
  // ────────────────────────────────────────────────────────────────────
  // Round 8 seasonal landing guides — added 2026-05-03
  // ────────────────────────────────────────────────────────────────────
  {
    slug: "waconia-summer",
    title: "Summer in Waconia, Minnesota: A Season Guide",
    metaDescription:
      "Summer in Waconia, MN: the Lake Waconia Regional Park beach, boat and kayak rentals, the Thursday farmers market, the Carver County Fair, winery patios and summer fishing.",
    heroImage:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Beach Open", value: "Memorial–Labor" },
      { label: "Farmers Market", value: "Thu 4–7pm" },
      { label: "County Fair 2027", value: "Aug 11–15" },
    ],
    content: [
      {
        type: "text",
        body: "Summer is Waconia's busiest season. The beach is open, the rentals are running, the farmers market meets every Thursday, and the Carver County Fair closes out the season in August. This guide covers the main things to plan around.",
      },
      {
        type: "heading",
        heading: "On the Water",
      },
      {
        type: "text",
        body: "The Lake Waconia Regional Park beach is open Memorial Day to Labor Day, with no lifeguards since 2024, so swim at your own risk. In Towne Marina downtown rents pontoons (renters must be 21+ with a Minnesota operator's permit or rental certificate), and Carver County rents kayaks, paddleboards and canoes at the park on weekends from roughly early June to mid-August. The DNR public access in the park has 36 trailer spaces.",
      },
      {
        type: "heading",
        heading: "Summer Events",
      },
      {
        type: "text",
        body: "The Waconia Farmers' Market meets Thursdays from 4 to 7pm at 224 W 1st St; the 2026 season runs June 4 to October 15. The Carver County Fair runs five days in August at the fairgrounds (August 11 to 15 in 2027). Schram Vineyards has live music nearly every weekend, and Sovereign Estate Wine has free live music on Fridays and Sundays.",
      },
      {
        type: "heading",
        heading: "Eating & Drinking Outside",
      },
      {
        type: "text",
        body: "Lola's Lakehouse on Lake Street has a patio with lake views. Iron Tap downtown has rooftop and patio seating in season. Sovereign Estate's lakefront patio, Schram's vineyard grounds overlooking Reitz Lake, and Parley Lake Winery's wrap-around deck cover the winery side.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🏖",
            title: "Beach Day",
            body: "Lake Waconia Regional Park beach, Memorial Day to Labor Day. No lifeguards; pets are not allowed on the beach.",
            link: { label: "Park Guide →", href: "/guides/lake-waconia-regional-park" },
          },
          {
            icon: "🚣",
            title: "Get on the Lake",
            body: "Pontoons from In Towne Marina downtown, or kayaks and paddleboards from Carver County at the regional park on summer weekends.",
            link: { label: "Boat Rentals →", href: "/guides/lake-waconia-boat-rentals" },
          },
        ],
      },
      {
        type: "heading",
        heading: "Summer Fishing",
      },
      {
        type: "text",
        body: "Summer patterns push walleye deeper and put bass around weed edges and docks. Early morning and evening are usually the most productive. See our fishing guide for the seasonal breakdown, and the DNR LakeFinder page for survey data.",
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Summer in Waconia",
        ctaDescription:
          "Browse the directory, add events to your calendar, and check rental seasons before you go.",
        buttons: [
          { label: "Things to Do", href: "/guides/things-to-do-waconia", variant: "primary" },
          { label: "Subscribe to Events", href: "/events.ics", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Beach season", value: "Memorial–Labor Day" },
      { label: "Lifeguards", value: "None (since 2024)" },
      { label: "Farmers market", value: "Thursdays 4–7pm" },
      { label: "County fair 2027", value: "August 11–15" },
      { label: "Kayak rentals", value: "Weekends, ~June–mid-Aug" },
    ],
    keywords: [
      "Waconia summer",
      "Lake Waconia summer",
      "things to do summer Waconia",
      "Waconia July events",
      "Waconia beach summer",
    ],
    articleSection: "Seasonal",
    glossaryTerms: [
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "Lake Waconia Regional Park", anchor: "regional-park" },
      { term: "Carver County Fair", anchor: "carver-county-fair" },
    ],
    relatedGuides: [
      { title: "Carver County Fair", readTime: "5 min read", href: "/guides/carver-county-fair" },
      { title: "Waconia Farmers Market", readTime: "4 min read", href: "/guides/waconia-farmers-market" },
      { title: "Lake Waconia Regional Park", readTime: "6 min read", href: "/guides/lake-waconia-regional-park" },
    ],
    faqs: [
      {
        question: "When does the Lake Waconia beach open?",
        answer: "The Lake Waconia Regional Park beach is open from Memorial Day to Labor Day. There have been no lifeguards since 2024, so swimming is at your own risk.",
      },
      {
        question: "When is the Carver County Fair?",
        answer: "Five days in August at the Carver County Fairgrounds in Waconia. The 2026 fair ran August 12–16; the 2027 fair is August 11–15.",
      },
      {
        question: "When is the Waconia Farmers Market?",
        answer: "Thursdays from 4 to 7pm at 224 W 1st St in downtown Waconia. The 2026 season runs June 4 through October 15.",
      },
    ],
  },
  {
    slug: "waconia-winter",
    title: "Winter in Waconia, Minnesota: Ice Fishing, Christkindlsmarkt & Tree Lighting",
    metaDescription:
      "Winter in Waconia, MN: ice fishing on Lake Waconia, the Christkindlsmarkt in City Square Park, the Tree Lighting, Schram's Winter Lodge, and indoor options.",
    heroImage:
      "https://images.unsplash.com/photo-1518182170546-07661fd94144?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Avg High (Jan)", value: "23°F" },
      { label: "Tree Lighting", value: "Nov 27, 2026" },
      { label: "Safe Ice (foot)", value: "4+ Inches" },
    ],
    content: [
      {
        type: "text",
        body: "Winter in Waconia centers on the frozen lake and a run of holiday events downtown. The Tree Lighting opens the season the night after Thanksgiving, the Christkindlsmarkt fills City Square Park in December, and once safe ice forms, anglers head onto Lake Waconia. This guide covers what to plan around.",
      },
      {
        type: "heading",
        heading: "Ice Fishing on Lake Waconia",
      },
      {
        type: "text",
        body: "Walleye and panfish are the main winter targets. Measure the ice yourself as you go; conditions vary across the lake. Public accesses are listed on the DNR LakeFinder page. See our ice fishing guide for tactics and gear.",
      },
      {
        type: "heading",
        heading: "Tree Lighting, Christkindlsmarkt & Holiday Events",
      },
      {
        type: "text",
        body: "The Tree Lighting is at 6pm on the Friday after Thanksgiving (November 27 in 2026) at the City Square Park gazebo. The Christkindlsmarkt, which moved to City Square Park in 2025 after 19 years in Excelsior, runs over two December weekends; in 2025 it was December 5 to 7 and 12 to 14, and 2026 dates had not been announced as of early October. Before that, the Chamber's D.E.A.R. Day shopping event is November 7, 2026. See our Christmas in Waconia guide for details.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🍷",
            title: "Schram's Winter Lodge",
            body: "Schram Vineyards runs its Winter Lodge from December through February and has live music nearly every weekend year-round.",
            link: { label: "Schram Vineyards listing →", href: "/directory/schram-vineyards" },
          },
          {
            icon: "🎬",
            title: "Indoor Options",
            body: "Emagine Waconia, the downtown movie theater, and Garage Bar & Bowl (six lanes and a scratch kitchen) cover cold evenings. Safari Island Community Center and the Waconia Ice Arena are the city's indoor recreation facilities.",
          },
        ],
      },
      {
        type: "heading",
        heading: "Practical Winter Notes",
      },
      {
        type: "text",
        body: "Minnesota DNR guidance for new clear ice: 4 inches for walking, 5 to 7 inches for a snowmobile or ATV, and 8 to 12 inches before driving a car or small pickup; double those figures for white or snow ice. Dress in layers with a windproof shell, since wind across an open lake makes it feel much colder.",
      },
      {
        type: "cta",
        ctaTitle: "Build Your Winter Day",
        ctaDescription:
          "A morning on the ice, an afternoon downtown and an evening at the Christkindlsmarkt or a winery.",
        buttons: [
          { label: "Ice Fishing Guide", href: "/guides/lake-waconia-ice-fishing", variant: "primary" },
          { label: "Christmas in Waconia", href: "/guides/waconia-christmas", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Avg Jan high", value: "23°F" },
      { label: "Avg Jan low", value: "5°F" },
      { label: "Tree Lighting", value: "Nov 27, 2026, 6pm" },
      { label: "Christkindlsmarkt", value: "December (2026 dates TBA)" },
      { label: "Schram Winter Lodge", value: "Dec–Feb" },
    ],
    keywords: [
      "Waconia winter",
      "Lake Waconia ice fishing",
      "Waconia Christmas",
      "Waconia Christkindlsmarkt",
      "Tree Lighting Waconia",
    ],
    articleSection: "Seasonal",
    glossaryTerms: [
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "City Square Park", anchor: "city-square-park" },
      { term: "Lake Waconia Regional Park", anchor: "regional-park" },
    ],
    relatedGuides: [
      { title: "Christmas in Waconia", readTime: "6 min read", href: "/guides/waconia-christmas" },
      { title: "Lake Waconia Ice Fishing", readTime: "7 min read", href: "/guides/lake-waconia-ice-fishing" },
      { title: "Things to Do in Waconia", readTime: "7 min read", href: "/guides/things-to-do-waconia" },
    ],
    faqs: [
      {
        question: "When does the Tree Lighting in the Park happen?",
        answer: "At 6pm on the Friday after Thanksgiving at the City Square Park gazebo in downtown Waconia. In 2026 that is November 27.",
      },
      {
        question: "When is the Waconia Christkindlsmarkt?",
        answer: "Over two weekends in December in City Square Park. In 2025 it ran December 5–7 and 12–14. The 2026 dates had not been announced as of October 5, 2026; check the Waconia Chamber website (destinationwaconia.org).",
      },
      {
        question: "Is Lake Waconia ice safe in early December?",
        answer: "Often not. Measure ice yourself: MN DNR guidance is at least 4 inches of new clear ice for walking. Conditions vary across the lake, so test as you go and don't go out alone the first time.",
      },
    ],
  },
  {
    slug: "waconia-fall",
    title: "Fall in Waconia, Minnesota: Apples, Scarecrows & Walleye",
    metaDescription:
      "Autumn in Waconia, MN: Deardorff Orchards and Parley Lake Winery, the Scarecrow Tour (Oct 8–18, 2026), fall walleye, fall color around Lake Waconia, and winery patios.",
    heroImage:
      "https://images.unsplash.com/photo-1503416997304-7f8bf166c121?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Scarecrow Tour", value: "Oct 8–18" },
      { label: "Avg High (Oct)", value: "55°F" },
      { label: "D.E.A.R. Day", value: "Nov 7" },
    ],
    content: [
      {
        type: "text",
        body: "Fall in Waconia brings apple weekends at Deardorff Orchards, the Scarecrow Tour in October, the fall walleye bite and changing color around the lake. Nickle Dickle Day opens the season in mid-September, and the Chamber's D.E.A.R. Day shopping event closes it in early November.",
      },
      {
        type: "heading",
        heading: "Fall Walleye",
      },
      {
        type: "text",
        body: "As water cools, walleye feed more actively and often move toward deeper structure. Breaklines and points are good places to start; use the DNR depth map for Lake Waconia to find them. See our fishing guide for more.",
      },
      {
        type: "heading",
        heading: "Apples at Deardorff Orchards",
      },
      {
        type: "text",
        body: "Deardorff Orchards (8282 Parley Lake Rd) is a 120-acre farm with more than 3,000 apple trees, including SweeTango, Zestar! and Honeycrisp, and an 1888 barn. For the 2026 season it is open Saturdays and Sundays from noon to 6pm, with live music and food, and a complimentary tractor-pulled wagon ride with a purchase of apples or wine. Parley Lake Winery's tasting room is in the same barn. See our apple orchard guide for details.",
      },
      {
        type: "heading",
        heading: "Scarecrow Tour",
      },
      {
        type: "text",
        body: "The Chamber's Scarecrow Tour runs October 8 to 18, 2026, with scarecrows placed at businesses and landmarks around Waconia. Walk or drive the route and vote for your favorite.",
      },
      {
        type: "heading",
        heading: "Fall Colors",
      },
      {
        type: "text",
        body: "Color around Lake Waconia usually peaks in October, with timing that varies by year. The wooded island in the lake and the shoreline make a good drive or boat outing in the afternoon light.",
      },
      {
        type: "heading",
        heading: "Wineries in Fall",
      },
      {
        type: "text",
        body: "Schram Vineyards is open year-round with live music nearly every weekend, and its Vine to Wine tour runs through October. Sovereign Estate Wine's lakefront patio is open through the fall season, and Parley Lake Winery is busiest during apple season.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🍂",
            title: "Fall Color",
            body: "Look across Lake Waconia toward the island in the late afternoon for the best light.",
          },
          {
            icon: "🎃",
            title: "Free Family Outing",
            body: "The Scarecrow Tour is a self-guided walk or drive. Grab a coffee downtown, walk the route and vote for your favorite.",
            link: { label: "Event Details →", href: "/events/scarecrow-tour-2026" },
          },
        ],
      },
      {
        type: "cta",
        ctaTitle: "Plan a Fall Weekend",
        ctaDescription:
          "A morning on the water, the Scarecrow Tour in the afternoon, and a winery in the evening.",
        buttons: [
          { label: "Lake Waconia Fishing", href: "/guides/lake-waconia-fishing", variant: "primary" },
          { label: "Things to Do", href: "/guides/things-to-do-waconia", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Orchard hours (2026)", value: "Sat–Sun 12–6pm" },
      { label: "Scarecrow Tour", value: "Oct 8–18 (2026)" },
      { label: "D.E.A.R. Day", value: "Nov 7, 2026" },
      { label: "Avg Oct high", value: "55°F" },
      { label: "Nickle Dickle Day 2027", value: "Sept 18" },
    ],
    keywords: [
      "Waconia fall",
      "Lake Waconia fall colors",
      "Scarecrow Tour Waconia",
      "apple orchard Waconia",
      "fall walleye Lake Waconia",
      "Waconia October events",
    ],
    articleSection: "Seasonal",
    glossaryTerms: [
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "Coney Island of Lake Waconia", anchor: "coney-island" },
    ],
    relatedGuides: [
      { title: "Apple Orchards Near Waconia", readTime: "6 min read", href: "/guides/apple-orchards-near-waconia" },
      { title: "Nickle Dickle Day", readTime: "5 min read", href: "/guides/nickle-dickle-day" },
      { title: "Things to Do in Waconia", readTime: "7 min read", href: "/guides/things-to-do-waconia" },
    ],
    faqs: [
      {
        question: "When is the Waconia Scarecrow Tour?",
        answer: "October 8–18, 2026. Scarecrows are placed at businesses and landmarks around Waconia; walk or drive the route and vote for your favorite.",
      },
      {
        question: "Is there an apple orchard in Waconia?",
        answer: "Yes. Deardorff Orchards (8282 Parley Lake Rd) is open Saturdays and Sundays from noon to 6pm for the 2026 season, and Parley Lake Winery's tasting room is in the same 1888 barn.",
      },
      {
        question: "Is fall a good time to fish Lake Waconia?",
        answer: "Yes. Walleye feed actively as the water cools. Start on breaklines and points found on the DNR depth map.",
      },
      {
        question: "What is the weather like in Waconia in October?",
        answer: "October averages a high around 55°F with cool nights. Bring layers, since days can swing widely between morning and afternoon.",
      },
    ],
  },
  // ────────────────────────────────────────────────────────────────────
  // Round 11 — added 2026-05-03
  // ────────────────────────────────────────────────────────────────────
  {
    slug: "waconia-wineries-breweries-tour",
    title: "Waconia Wineries Tour: Schram, Sovereign & Parley Lake",
    metaDescription:
      "Plan a Waconia winery day: Schram Vineyards Winery & Brewery, Sovereign Estate Wine on Lake Waconia's north shore, and Parley Lake Winery at Deardorff Orchards. Hours, tastings and group rules.",
    heroImage:
      "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-05-03",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Stops", value: "3 Wineries" },
      { label: "House Beer", value: "Schram" },
      { label: "Suggested Time", value: "4–6 hrs" },
    ],
    content: [
      {
        type: "text",
        body: "Three wineries around Waconia are open to the public: Schram Vineyards Winery & Brewery, Sovereign Estate Wine and Parley Lake Winery. Schram also pours its own beer. Waconia no longer has a downtown brewery: Waconia Brewing Co. closed in January 2026, and Schram Haus Brewery's downtown taproom closed in December 2025, though Schram says its house-brewed beer continues at the vineyard. This guide covers each stop and how to plan the day without driving impaired.",
      },
      {
        type: "heading",
        heading: "Schram Vineyards Winery & Brewery",
      },
      {
        type: "text",
        body: "Schram (8785 Airport Rd, (952) 492-1259) is a 32-acre winery, brewery and restaurant overlooking Reitz Lake, with about 10 acres of grapes. It is open year-round, with a walk-up tasting bar, the Bonfire & Barrel restaurant, house-brewed beer, and live music nearly every weekend. Its Vine to Wine tour runs May through October, and the Winter Lodge operates December through February. Buses, limos and large groups must arrange their visit in advance.",
      },
      {
        type: "heading",
        heading: "Parley Lake Winery",
      },
      {
        type: "text",
        body: "Parley Lake Winery (8280 Parley Lake Rd), founded in 2008, pours in the 1888 barn at Deardorff Orchards. It makes wine from cold-climate grapes grown on the farm, and its tasting room has a wrap-around deck overlooking the Lake View Stage and the Itasca vineyard, plus an art gallery of local artists. Hours are Friday 4 to 8pm and Saturday and Sunday noon to 6pm, starting the first weekend in May. Groups need a reservation, and party buses are not allowed. In fall, Deardorff Orchards sells apples in the same barn on weekends.",
      },
      {
        type: "heading",
        heading: "Sovereign Estate Wine",
      },
      {
        type: "text",
        body: "Sovereign Estate (9950 North Shore Rd) is a lakefront vineyard on the north shore of Lake Waconia. Its estate vineyard grows cold-climate grapes such as Itasca, Marquette and La Crescent. It offers a five-wine tasting for groups of up to eight, a seasonal patio with food, and free live music on Fridays and Sundays; check its calendar, since some events need tickets.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🚗",
            title: "Don't Drive Impaired",
            body: "Have a designated driver or use a rideshare. If you are traveling as a group, note that Schram and Parley Lake both require groups to arrange visits ahead, and Parley Lake does not allow party buses.",
          },
          {
            icon: "🍴",
            title: "Eat Between Stops",
            body: "Schram's Bonfire & Barrel and Sovereign both serve food. Downtown, Iron Tap, Lola's Lakehouse and Bode Gray's work for lunch or dinner.",
            link: { label: "Restaurants directory →", href: "/directory/restaurants" },
          },
        ],
      },
      {
        type: "heading",
        heading: "Planning the Day",
      },
      {
        type: "text",
        body: "Check each winery's hours before you set a route, since they differ by day and season: Parley Lake is open only Friday evening and weekend afternoons. If you only have an afternoon, pick two. In fall, Parley Lake pairs with apples at Deardorff Orchards. J. Carver Distillery, which used to round out this tour, has announced it will close by the end of October 2026.",
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Tour",
        ctaDescription:
          "Combine the wineries with lodging and dinner downtown for a full weekend.",
        buttons: [
          { label: "Where to Stay", href: "/hotels", variant: "primary" },
          { label: "Restaurants", href: "/directory/restaurants", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Wineries", value: "Schram, Sovereign, Parley Lake" },
      { label: "Beer", value: "Schram (house-brewed)" },
      { label: "Downtown breweries", value: "None (both closed)" },
      { label: "Designated driver", value: "Required" },
      { label: "Groups", value: "Arrange ahead" },
    ],
    keywords: [
      "Waconia wineries",
      "Waconia breweries",
      "Schram Vineyards",
      "Sovereign Estate Wine",
      "Parley Lake Winery",
      "Waconia wine tour",
      "Carver County wineries",
    ],
    articleSection: "Travel & Things to Do",
    glossaryTerms: [
      { term: "Waconia", anchor: "waconia" },
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "Carver County", anchor: "carver-county" },
    ],
    relatedGuides: [
      { title: "Waconia Wedding Venues", readTime: "5 min read", href: "/guides/waconia-wedding-venues" },
      { title: "Best Restaurants in Waconia", readTime: "6 min read", href: "/guides/best-restaurants-in-waconia" },
      { title: "Things to Do in Waconia", readTime: "7 min read", href: "/guides/things-to-do-waconia" },
    ],
    faqs: [
      {
        question: "How many wineries are in Waconia, MN?",
        answer: "Three: Schram Vineyards Winery & Brewery (8785 Airport Rd), Sovereign Estate Wine (9950 North Shore Rd, on Lake Waconia's north shore) and Parley Lake Winery (8280 Parley Lake Rd, at Deardorff Orchards).",
      },
      {
        question: "Are there breweries in Waconia, MN?",
        answer: "Not downtown. Waconia Brewing Co. closed in January 2026 and Schram Haus Brewery's downtown taproom closed in December 2025. Schram Vineyards says its house-brewed beer continues at its Bonfire & Barrel restaurant at the vineyard.",
      },
      {
        question: "Is J. Carver Distillery still open?",
        answer: "J. Carver Distillery has announced it will close by the end of October 2026 and is running a pickup clearance sale.",
      },
      {
        question: "Can I bring a group or party bus to the Waconia wineries?",
        answer: "Arrange it in advance. Schram requires buses, limos and large parties to get approval before arriving. Parley Lake requires reservations for groups and does not allow party buses.",
      },
    ],
  },
  {
    slug: "best-restaurants-in-waconia",
    title: "Best Restaurants in Waconia, MN (2026): Where to Eat",
    metaDescription:
      "Where to eat in Waconia, Minnesota: Iron Tap, Lola's Lakehouse, Bode Gray's, D'Vinci's, Pangea Cafe, Mocha Monkey and more, with addresses and what each does well.",
    heroImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-06-24",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Price Range", value: "$ – $$$" },
      { label: "Downtown", value: "Main St + 1st St" },
      { label: "Lakefront", value: "Lake St" },
    ],
    content: [
      {
        type: "text",
        body: "Most of Waconia's restaurants are downtown, along Main Street, 1st Street and Lake Street on the lake. Below are our picks by type of meal: a dinner out, Italian, eating by the water, breakfast and coffee, drinks, and casual family spots.",
      },
      {
        type: "heading",
        heading: "Dinner Downtown: Iron Tap",
      },
      {
        type: "richText",
        body: "<a href=\"/directory/iron-tap\">Iron Tap</a> (140 W Main St, $$) calls itself \"Craft Brew & BBQ.\" It has 38 craft beers on tap, craft cocktails, and seasonal rooftop and patio seating. It is closed Mondays.",
      },
      {
        type: "heading",
        heading: "Italian: D'Vinci's & Bode Gray's",
      },
      {
        type: "richText",
        body: "<a href=\"/directory/d-vincis-restaurant\">D'Vinci's</a> (540 S Elm St, $$) has served Waconia since 1986. <a href=\"/directory/bode-grays\">Bode Gray's</a> (125 W 1st St, $$) is an artisan pizza restaurant started by two local families. On its lower level, <a href=\"/directory/the-brass-hat\">The Brass Hat</a> is a 21+ speakeasy for cocktails after dinner.",
      },
      {
        type: "heading",
        heading: "On the Water: Lola's Lakehouse",
      },
      {
        type: "richText",
        body: "<a href=\"/directory/lolas-lakehouse\">Lola's Lakehouse</a> (318 E Lake St, (952) 442-4954, $$) has a patio with Lake Waconia views and a menu built around seafood and steaks; the walleye dish is a Canadian walleye piccata. Lola's runs its own marina, with seasonal slips offered through a waitlist. On the north shore, <a href=\"/directory/sovereign-estate-wine\">Sovereign Estate Wine</a> ($$$) serves food on its lakefront winery patio. <a href=\"/directory/green-fox-grille\">Green Fox Grille</a> ($$), the restaurant at Island View Golf Club, is open to the public.",
      },
      {
        type: "heading",
        heading: "Breakfast & Coffee",
      },
      {
        type: "richText",
        body: "<a href=\"/directory/pangea-cafe\">Pangea Cafe</a> (37 W 1st St, $) serves breakfast and lunch from 8am to 2pm, with breakfast all day. <a href=\"/directory/mocha-monkey\">Mocha Monkey</a> (115 S Olive St, $), founded in 2006, roasts its own coffee, has two Waconia locations, and hosts a Sunday bluegrass jam. <a href=\"/directory/caribou-coffee-waconia\">Caribou Coffee</a> ($) has two locations: the one on Marketplace Drive is inside Mackenthun's with no drive-thru, and the one at 77 Hwy 5 W has a drive-thru.",
      },
      {
        type: "heading",
        heading: "Wine, Beer & Cocktails",
      },
      {
        type: "richText",
        body: "Downtown Waconia no longer has a brewery taproom: Waconia Brewing Co. closed in January 2026 and Schram Haus's downtown taproom closed in December 2025. <a href=\"/directory/schram-vineyards\">Schram Vineyards Winery &amp; Brewery</a> ($$) still pours its own beer and wine at its Bonfire &amp; Barrel restaurant on Airport Road. <a href=\"/directory/sovereign-estate-wine\">Sovereign Estate Wine</a> ($$$) and <a href=\"/directory/parley-lake-winery\">Parley Lake Winery</a> ($$) round out the wineries. Downtown, Iron Tap's 38 taps and <a href=\"/directory/the-brass-hat\">The Brass Hat</a> cover beer and cocktails. See our <a href=\"/guides/waconia-wineries-breweries-tour\">Waconia wineries tour</a> to plan a day.",
      },
      {
        type: "heading",
        heading: "Casual & Family Spots",
      },
      {
        type: "richText",
        body: "<a href=\"/directory/garage-bowling-bar\">Garage Bar &amp; Bowl</a> (16 W 1st St, $$) has six bowling lanes, a bar and a scratch kitchen, which makes it an easy pick for groups and birthdays. El Loro (520 Cherry Dr, $$) serves Mexican food. <a href=\"/directory/culvers-waconia\">Culver's</a> ($) is the quick option with kids.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🍔",
            title: "Before You Go",
            body: "Iron Tap is closed Mondays. Pangea Cafe closes at 2pm. Schram's Bonfire & Barrel takes reservations; Sovereign's patio is seasonal.",
          },
          {
            icon: "🗺️",
            title: "Find Hours & Directions",
            body: "Hours shift seasonally, especially for the lakeside and winery spots. Confirm on the listing before you go.",
            link: { label: "Browse the Waconia dining directory →", href: "/directory/restaurants" },
          },
        ],
      },
      {
        type: "heading",
        heading: "Where to Eat in Waconia, at a Glance",
      },
      {
        type: "richText",
        body: "<strong>Dinner out:</strong> Iron Tap or Bode Gray's downtown, or Sovereign Estate on the lake. <strong>Italian:</strong> D'Vinci's or Bode Gray's. <strong>On the water:</strong> Lola's Lakehouse or Green Fox Grille. <strong>Breakfast:</strong> Pangea Cafe. <strong>Coffee:</strong> Mocha Monkey or Caribou. <strong>Beer:</strong> Iron Tap downtown, or Schram's house beer at the vineyard. <strong>Wine:</strong> Sovereign Estate, Schram Vineyards or Parley Lake. <strong>Cocktails:</strong> The Brass Hat. <strong>Families and groups:</strong> Garage Bar &amp; Bowl, El Loro or Culver's.",
      },
      {
        type: "cta",
        ctaTitle: "Plan the Rest of Your Waconia Day",
        ctaDescription:
          "Pair dinner with the lake, the wineries or a walk downtown.",
        buttons: [
          { label: "Things to Do in Waconia", href: "/guides/things-to-do-waconia", variant: "primary" },
          { label: "Browse the Directory", href: "/directory", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Restaurant areas", value: "Main St, 1st St, Lake St" },
      { label: "Dinner pick", value: "Iron Tap" },
      { label: "Lake view", value: "Lola's Lakehouse" },
      { label: "Breakfast", value: "Pangea Cafe" },
      { label: "Price range", value: "$ – $$$" },
    ],
    keywords: [
      "best restaurants in Waconia",
      "where to eat in Waconia MN",
      "Waconia restaurants",
      "Lake Waconia dining",
      "Waconia breakfast",
      "Iron Tap Waconia",
      "Lola's Lakehouse Waconia",
    ],
    articleSection: "Dining",
    glossaryTerms: [
      { term: "Lake Waconia", anchor: "lake-waconia" },
    ],
    relatedGuides: [
      {
        title: "Things to Do in Waconia",
        readTime: "7 min read",
        href: "/guides/things-to-do-waconia",
      },
      {
        title: "Waconia Wineries Tour",
        readTime: "6 min read",
        href: "/guides/waconia-wineries-breweries-tour",
      },
      {
        title: "Lake Waconia Complete Guide",
        readTime: "8 min read",
        href: "/guides/lake-waconia",
      },
    ],
    faqs: [
      {
        question: "Where should I eat dinner in Waconia, MN?",
        answer:
          "Iron Tap (140 W Main St) is a craft beer and barbecue restaurant with 38 taps and rooftop and patio seating, closed Mondays. Bode Gray's (125 W 1st St) serves artisan pizza. For a lake view, Lola's Lakehouse (318 E Lake St) has a patio overlooking Lake Waconia.",
      },
      {
        question: "Where can you eat on Lake Waconia?",
        answer:
          "Lola's Lakehouse (318 E Lake St, (952) 442-4954) has a lake-view patio and a seafood and steak menu, and runs its own marina with seasonal slips by waitlist. Sovereign Estate Wine, on the north shore, serves food on its lakefront patio.",
      },
      {
        question: "Where is a good breakfast in Waconia?",
        answer:
          "Pangea Cafe (37 W 1st St) serves breakfast and lunch from 8am to 2pm, with breakfast all day. For coffee, Mocha Monkey (115 S Olive St) roasts its own beans.",
      },
      {
        question: "Does Waconia have breweries?",
        answer:
          "Not downtown anymore. Waconia Brewing Co. closed in January 2026 and Schram Haus's downtown taproom closed in December 2025. Schram Vineyards still serves its house-brewed beer at the vineyard on Airport Road, and Iron Tap downtown has 38 craft beers on tap.",
      },
      {
        question: "Where can you get Italian food in Waconia?",
        answer:
          "D'Vinci's (540 S Elm St) has been open since 1986. Bode Gray's (125 W 1st St) serves artisan pizza and has The Brass Hat, a 21+ speakeasy, on its lower level.",
      },
    ],
  },
  {
    slug: "cost-of-living-in-waconia",
    title: "Cost of Living in Waconia, MN (2026): What It Really Costs",
    metaDescription:
      "A local's breakdown of the cost of living in Waconia, Minnesota — housing, property taxes, groceries, utilities, transportation, and income tax — and how it compares to the Twin Cities metro.",
    heroImage:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-06-24",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Vs. MSP Metro", value: "Below avg." },
      { label: "Top State Income Tax", value: "9.85%" },
      { label: "ZIP", value: "55387" },
    ],
    content: [
      {
        type: "text",
        body: "The cost of living in Waconia, Minnesota sits below the broader Minneapolis–St. Paul metro average, and housing is the main reason. The trade-off is a commute of about 45 minutes off-peak to downtown Minneapolis, and lake frontage prices at the top of the local market. Below is a category-by-category breakdown of what living in Waconia actually costs: housing, property taxes, groceries, utilities, transportation, and income tax. Figures that move year to year are flagged with where to check the current number — we don't publish stale dollar amounts as fact.",
      },
      {
        type: "heading",
        heading: "Housing — the biggest variable",
      },
      {
        type: "text",
        body: "Housing is where Waconia's cost of living is decided. The market splits into four bands: older homes on the historic south side (the most affordable entry point), newer suburban construction on the north side around the Marketplace area (mid-range, family-sized lots), rural-fringe homes on acreage outside the city limits, and lakefront or lake-adjacent property on Lake Waconia (the top of the market). Lake frontage carries a significant premium; a home a five-minute walk from a public access point costs a fraction of one with private shoreline. Because prices shift with the market, check live listings on the MLS, Zillow, or Redfin and the Carver County assessor for assessed values rather than trusting a fixed median figure.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🏠",
            title: "Check Current Prices",
            body: "Home prices move quarter to quarter. We track distressed and foreclosure listings as one data point; pair it with the live MLS for an accurate read.",
            link: { label: "Waconia Foreclosures →", href: "/foreclosures" },
          },
          {
            icon: "🌊",
            title: "The Lakefront Premium",
            body: "Lake-adjacent doesn't have to mean lake-frontage. Homes near a public access point capture most of the lifestyle for far less than private shoreline.",
            link: { label: "Lake Waconia Guide →", href: "/guides/lake-waconia" },
          },
        ],
      },
      {
        type: "heading",
        heading: "Property taxes",
      },
      {
        type: "text",
        body: "Carver County property tax rates run in line with the broader Twin Cities metro — neither a bargain nor an outlier. Your bill is a function of the county, city, and school-district (ISD 110) levies plus your property's assessed value. The city of Waconia publishes its levy annually, and Carver County's assessor maintains parcel-level valuations. For an exact estimate, pull the specific parcel's record from the Carver County property tax portal rather than applying a blanket percentage.",
      },
      {
        type: "heading",
        heading: "Groceries & everyday spending",
      },
      {
        type: "text",
        body: "Waconia's grocers are Mackenthun's Fine Foods and Aldi, with national chains such as Target in town. Sales tax is the Minnesota state rate plus local taxes; use the Minnesota Department of Revenue's sales tax rate lookup for the current combined rate. Minnesota does not tax most clothing or groceries.",
      },
      {
        type: "heading",
        heading: "Utilities & winter costs",
      },
      {
        type: "text",
        body: "Budget for real Minnesota winters. Heating runs November through March, and snow removal is a genuine line item — a snowblower, a seasonal plow contract, or both. Electricity, natural gas, water, and sewer track regional norms; the seasonal swing in heating is the main thing that surprises people relocating from warmer states. Internet and the usual subscriptions are standard metro-adjacent pricing.",
      },
      {
        type: "heading",
        heading: "Transportation",
      },
      {
        type: "text",
        body: "Waconia is a car-dependent community — factor that into the math. There's no light rail or commuter rail, and transit is limited to SouthWest Transit park-and-ride options from Chaska and Chanhassen to the east. Most households run two vehicles. Fuel and your time on the Highway 5 corridor are the real transportation costs; if your job sits in the western or southwestern metro (Eden Prairie, Chaska, Chanhassen, Minnetonka), the commute — and the cost — drops considerably.",
      },
      {
        type: "heading",
        heading: "Income tax",
      },
      {
        type: "text",
        body: "Minnesota state income tax applies and is on the higher side nationally — four brackets topping out at 9.85%. That's a statewide reality, not specific to Waconia, but it belongs in any honest cost-of-living picture for the area. There's no separate city income tax.",
      },
      {
        type: "cta",
        ctaTitle: "Thinking About Moving Here?",
        ctaDescription:
          "Our full relocation guide covers schools, neighborhoods, healthcare, and the commute in depth.",
        buttons: [
          { label: "Moving to Waconia", href: "/guides/moving-to-waconia", variant: "primary" },
          { label: "Waconia Neighborhoods", href: "/guides/waconia-neighborhoods", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Cost vs. metro", value: "Below average" },
      { label: "State income tax", value: "Up to 9.85%" },
      { label: "City income tax", value: "None" },
      { label: "ZIP code", value: "55387" },
    ],
    keywords: [
      "cost of living in Waconia",
      "Waconia MN cost of living",
      "Waconia property taxes",
      "Waconia housing costs",
      "is Waconia expensive",
      "Carver County cost of living",
    ],
    articleSection: "Living in Waconia",
    glossaryTerms: [
      { term: "Waconia", anchor: "waconia" },
      { term: "Carver County", anchor: "carver-county" },
      { term: "55387", anchor: "55387" },
    ],
    relatedGuides: [
      { title: "Moving to Waconia", readTime: "8 min read", href: "/guides/moving-to-waconia" },
      { title: "Waconia Neighborhoods", readTime: "6 min read", href: "/guides/waconia-neighborhoods" },
      { title: "Senior Living in Waconia", readTime: "6 min read", href: "/guides/senior-living-in-waconia" },
    ],
    faqs: [
      {
        question: "Is Waconia, MN expensive to live in?",
        answer:
          "Overall, cost of living in Waconia sits below the broader Minneapolis–St. Paul metro average, mainly because of housing. The trade-off is a car-dependent lifestyle and a 45-minute commute to downtown Minneapolis. Lakefront property on Lake Waconia is the exception — it prices closer to metro standards.",
      },
      {
        question: "What is the sales tax in Waconia, MN?",
        answer:
          "It is the Minnesota state rate plus local sales taxes. Use the Minnesota Department of Revenue's sales tax rate lookup for the current combined rate for a Waconia address. Minnesota does not tax most clothing or groceries.",
      },
      {
        question: "How much are property taxes in Waconia?",
        answer:
          "Carver County property tax rates are in line with the broader Twin Cities metro. Your bill depends on the combined county, city, and ISD 110 school levies and your property's assessed value. For an exact figure, look up the specific parcel on the Carver County property tax portal rather than applying a flat percentage.",
      },
      {
        question: "Does Minnesota have a high income tax?",
        answer:
          "Minnesota's state income tax is on the higher side nationally, with four brackets topping out at 9.85%. This applies statewide, including Waconia. There is no separate city income tax in Waconia.",
      },
    ],
  },
  {
    slug: "waconia-neighborhoods",
    title: "Waconia Neighborhoods: Where to Live, Area by Area",
    metaDescription:
      "A local's guide to Waconia, MN neighborhoods — downtown and the historic south side, south-shore lakefront, north-side suburban developments, and the rural fringe — with the trade-offs of each.",
    heroImage:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-06-24",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Area Types", value: "4" },
      { label: "School District", value: "ISD 110" },
      { label: "Lake", value: "3,080 acres" },
    ],
    content: [
      {
        type: "text",
        body: "Waconia's neighborhoods sort into four character types, each with a clear trade-off: the historic downtown and south side (walkable, older, smaller lots), the south-shore lakefront and lake-adjacent areas (the highest values), the north-side suburban developments near the Marketplace (newer construction, family-sized lots), and the rural fringe outside the city limits (acreage and hobby farms). Whichever you choose, you're in the same district — ISD 110 serves the whole city — so the decision comes down to lifestyle, commute, and budget rather than schools. Here's how each area actually lives.",
      },
      {
        type: "heading",
        heading: "Downtown & the Historic South Side",
      },
      {
        type: "text",
        body: "The oldest part of Waconia, centered on Main Street and stretching south. Homes here largely date from 1900 to 1960 on smaller, established lots with mature trees. The draw is walkability: you can reach restaurants, the library, City Square Park, and the Thursday farmers market on foot. It's the most urban-feeling part of a small town, and it's where community events like Nickle Dickle Day happen on your doorstep. The trade-off is older housing stock — charm that may come with a renovation list — and smaller lots than the newer developments.",
      },
      {
        type: "heading",
        heading: "South-Shore Lakefront & Lake-Adjacent",
      },
      {
        type: "text",
        body: "The top of the Waconia market. Properties with direct Lake Waconia frontage — or a short walk to it — command the highest prices in town, and for good reason: the lake has a public beach and boat access at the regional park, and a marina downtown. The key local insight is that 'lake-adjacent' captures most of the lifestyle for far less money than private shoreline. Buyers who widen their search to homes within a five-minute walk of a public access point often find the best value-to-lifestyle ratio in the city.",
      },
      {
        type: "heading",
        heading: "North-Side Suburban Developments",
      },
      {
        type: "text",
        body: "North and east of downtown, around the Marketplace shopping area, sits Waconia's newer growth — subdivisions built largely from 2000 onward with larger lots, attached garages, and a family orientation. It's an easy drive to groceries (Mackenthun's, Aldi), the national chains, the schools, and the Highway 5 commute corridor. The trade-off is a more conventional suburban feel and a short drive — rather than a walk — to the downtown core and the lake.",
      },
      {
        type: "heading",
        heading: "The Rural Fringe",
      },
      {
        type: "text",
        body: "Beyond the city limits, the landscape opens into Carver County farmland. Homes here sit on acreage, often with hobby farms or parcels near the area's vineyards. This is the choice for buyers who want space, privacy, and a rural setting while staying within reach of Waconia's amenities and school district. The trade-offs are the practical ones of country living: well and septic instead of city utilities, a longer drive to everything, and snow removal you handle yourself.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🏫",
            title: "Same District, Different Schools",
            body: "All of Waconia is ISD 110, but elementary boundaries (Bayview, Laketown, Southview) can shift as the district grows. Confirm the boundary for a specific address before you buy.",
            link: { label: "Waconia Schools Guide →", href: "/guides/waconia-schools" },
          },
          {
            icon: "💵",
            title: "What It Costs",
            body: "Each area sits in a different price band. Our cost-of-living breakdown covers housing, taxes, and the everyday math.",
            link: { label: "Cost of Living in Waconia →", href: "/guides/cost-of-living-in-waconia" },
          },
        ],
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Move",
        ctaDescription:
          "From schools to commute to healthcare, our relocation guide covers everything before you sign.",
        buttons: [
          { label: "Moving to Waconia", href: "/guides/moving-to-waconia", variant: "primary" },
          { label: "Things to Do", href: "/guides/things-to-do-waconia", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Most walkable", value: "Downtown / south side" },
      { label: "Highest value", value: "South-shore lakefront" },
      { label: "Most new builds", value: "North-side (Marketplace)" },
      { label: "Most space", value: "Rural fringe" },
      { label: "School district", value: "ISD 110 (all)" },
    ],
    keywords: [
      "Waconia neighborhoods",
      "where to live in Waconia",
      "Waconia MN areas",
      "Waconia lakefront homes",
      "best neighborhoods in Waconia",
    ],
    articleSection: "Living in Waconia",
    glossaryTerms: [
      { term: "Waconia", anchor: "waconia" },
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "ISD 110", anchor: "isd-110" },
    ],
    relatedGuides: [
      { title: "Moving to Waconia", readTime: "8 min read", href: "/guides/moving-to-waconia" },
      { title: "Cost of Living in Waconia", readTime: "6 min read", href: "/guides/cost-of-living-in-waconia" },
      { title: "Waconia Schools (ISD 110)", readTime: "6 min read", href: "/guides/waconia-schools" },
    ],
    faqs: [
      {
        question: "What are the best neighborhoods in Waconia, MN?",
        answer:
          "Waconia has four broad areas: downtown and the historic south side (most walkable), south-shore lakefront and lake-adjacent (highest value), north-side suburban developments near the Marketplace (newest construction, most family-oriented), and the rural fringe outside the city limits (most space). The best one depends on whether you prioritize walkability, the lake, new construction, or acreage.",
      },
      {
        question: "Which part of Waconia is closest to the lake?",
        answer:
          "The south-shore lakefront and lake-adjacent neighborhoods sit closest to Lake Waconia, with some homes on direct frontage. Homes within a five-minute walk of a public access point offer most of the lake lifestyle at a much lower price than private shoreline.",
      },
      {
        question: "Where is the newest housing in Waconia?",
        answer:
          "Much of the newer construction is in the north-side developments around the Marketplace area, with larger lots and an easy drive to schools, groceries and the Highway 5 corridor.",
      },
      {
        question: "Do all Waconia neighborhoods go to the same schools?",
        answer:
          "All of Waconia is served by ISD 110 (Waconia Public Schools), so the district is the same citywide. Elementary attendance boundaries (Bayview, Laketown, Southview) can shift as the district grows, so confirm the boundary for a specific address before buying.",
      },
    ],
  },
  {
    slug: "nickle-dickle-day",
    title: "Nickle Dickle Day: Waconia's September Festival (2027 Guide)",
    metaDescription:
      "Nickle Dickle Day in Waconia, MN: the Chamber's festival in City Square Park since 1961, held the second Saturday after Labor Day. Next date Saturday, September 18, 2027, 8am to 5pm.",
    heroImage:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-06-24",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Next Date", value: "Sept 18, 2027" },
      { label: "Where", value: "City Square Park" },
      { label: "Since", value: "1961" },
    ],
    content: [
      {
        type: "text",
        body: "Nickle Dickle Day is Waconia's annual festival, run by the Waconia Chamber of Commerce since 1961. It takes over City Square Park downtown from 8am to 5pm on the second Saturday after Labor Day, and the Chamber says it draws about 30,000 people. The 2026 festival was September 19. The next one is Saturday, September 18, 2027.",
      },
      {
        type: "heading",
        heading: "What Happens on Nickle Dickle Day",
      },
      {
        type: "text",
        body: "The festival fills City Square Park and the surrounding downtown blocks with vendors, food and entertainment through the day. Check the Chamber's Nickle Dickle Day page at destinationwaconia.org for the current year's schedule and vendor list.",
      },
      {
        type: "heading",
        heading: "Nickle Dickle Eve Street Dance",
      },
      {
        type: "text",
        body: "The night before, the Chamber runs the Nickle Dickle Eve street dance in City Lot #1 at 1st Street and Vine. In 2026 admission was $10, the event was 21 and over, and the band played from 8 to 11:30pm.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "📅",
            title: "Schedule & Details",
            body: "See the event listing with map, times and the official Chamber link.",
            link: { label: "Nickle Dickle Day Event Page →", href: "/events/nickle-dickle-day-2026" },
          },
          {
            icon: "🍔",
            title: "Where to Eat Downtown",
            body: "The festival has food vendors, and downtown restaurants are a short walk from the park.",
            link: { label: "Best Restaurants in Waconia →", href: "/guides/best-restaurants-in-waconia" },
          },
        ],
      },
      {
        type: "heading",
        heading: "Parking & Getting There",
      },
      {
        type: "text",
        body: "Downtown Waconia has free public parking, but the spots nearest City Square Park fill early on festival Saturday. Arrive early or park a few blocks out and walk in. From Minneapolis it is about 35 miles, roughly 45 minutes off-peak via Highway 5, and traffic into town is heavier than usual that morning.",
      },
      {
        type: "heading",
        heading: "Make a Weekend of It",
      },
      {
        type: "text",
        body: "Mid-September is still lake weather. Pair the festival with time on Lake Waconia or a stop at one of the area wineries. If you plan to stay overnight, book lodging early.",
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Waconia Visit",
        ctaDescription:
          "Make the festival the centerpiece of a lake-town weekend.",
        buttons: [
          { label: "Things to Do in Waconia", href: "/guides/things-to-do-waconia", variant: "primary" },
          { label: "All Waconia Events", href: "/events", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Next date", value: "Sat, Sept 18, 2027" },
      { label: "Hours", value: "8am–5pm" },
      { label: "Venue", value: "City Square Park" },
      { label: "Organizer", value: "Waconia Chamber" },
      { label: "Held since", value: "1961" },
    ],
    keywords: [
      "Nickle Dickle Day",
      "Nickle Dickle Day Waconia",
      "Nickle Dickle Day 2027",
      "Waconia street festival",
      "Waconia events September",
      "City Square Park Waconia",
    ],
    articleSection: "Events",
    glossaryTerms: [
      { term: "Waconia", anchor: "waconia" },
      { term: "Carver County", anchor: "carver-county" },
    ],
    relatedGuides: [
      { title: "Things to Do in Waconia", readTime: "7 min read", href: "/guides/things-to-do-waconia" },
      { title: "Best Restaurants in Waconia", readTime: "6 min read", href: "/guides/best-restaurants-in-waconia" },
      { title: "Waconia in Fall", readTime: "5 min read", href: "/guides/waconia-fall" },
    ],
    faqs: [
      {
        question: "When is Nickle Dickle Day in Waconia?",
        answer:
          "Nickle Dickle Day is held on the second Saturday after Labor Day in City Square Park, downtown Waconia, from 8am to 5pm. The 2026 festival was September 19; the next one is Saturday, September 18, 2027.",
      },
      {
        question: "Who runs Nickle Dickle Day?",
        answer:
          "The Waconia Chamber of Commerce, which has held the festival since 1961. The Chamber says it draws about 30,000 people.",
      },
      {
        question: "What is Nickle Dickle Eve?",
        answer:
          "The Chamber's street dance the night before the festival, in City Lot #1 at 1st Street and Vine. In 2026 it cost $10, was 21 and over, and the band played 8 to 11:30pm.",
      },
      {
        question: "Where do you park for Nickle Dickle Day?",
        answer:
          "Downtown Waconia has free public parking, but spots nearest City Square Park fill early. Arrive early or park a few blocks out and walk in.",
      },
    ],
  },
  {
    slug: "carver-county-fair",
    title: "Carver County Fair: 2027 Dates, Admission & What to See",
    metaDescription:
      "The Carver County Fair in Waconia, MN: five days every August at the fairgrounds, 501 W 3rd St. 2027 dates are August 11–15. Gate admission $9 for ages 7 and up.",
    heroImage:
      "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-06-24",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "2027 Dates", value: "Aug 11–15" },
      { label: "Admission (7+)", value: "$9" },
      { label: "Length", value: "5 days" },
    ],
    content: [
      {
        type: "text",
        body: "The Carver County Fair runs five days each August at the Carver County Fairgrounds, 501 W 3rd St in Waconia. The 2026 fair, the 114th, ran August 12 to 16. The 2027 fair is August 11 to 15.",
      },
      {
        type: "heading",
        heading: "What to See at the Fair",
      },
      {
        type: "text",
        body: "It is a county fair built around agriculture and 4-H, with exhibits and livestock, a midway, food vendors and grandstand events. In 2026 the demolition derby was the Sunday-evening grandstand show. The fair publishes the daily schedule and grandstand lineup on carvercountyfair.com each summer.",
      },
      {
        type: "heading",
        heading: "Admission & Tickets",
      },
      {
        type: "text",
        body: "In 2026, gate admission was $9 for ages 7 and older and free for ages 6 and under. Gates opened at 8am each day, and admission was free after 6pm on Sunday. Thursday was Senior Citizen Day (half price for 60 and older until 6pm) and Friday was Military Appreciation Day (free for veterans and current military with ID). Midway ride tickets were sold only on site, at $1.50 each or 40 for $50. Check the fair website for 2027 prices.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🎟️",
            title: "Event Listing",
            body: "Dates, location and the official fair link.",
            link: { label: "Carver County Fair Event Page →", href: "/events/carver-county-fair-2026" },
          },
          {
            icon: "🎡",
            title: "Official Fair Site",
            body: "The Carver County Agriculture Society publishes the schedule, grandstand lineup and ticket information.",
            link: { label: "carvercountyfair.com →", href: "https://www.carvercountyfair.com" },
          },
        ],
      },
      {
        type: "heading",
        heading: "Tips",
      },
      {
        type: "text",
        body: "Grandstand events draw the biggest crowds, so arrive early for seats. Afternoons in August are hot; evenings are cooler. Parking fills on derby night, so build in extra time.",
      },
      {
        type: "heading",
        heading: "Make a Day of It in Waconia",
      },
      {
        type: "text",
        body: "The fairgrounds are a short drive from downtown Waconia and Lake Waconia, so the fair pairs easily with a morning on the lake or lunch downtown. From Minneapolis it is about 35 miles, roughly 45 minutes off-peak via Highway 5.",
      },
      {
        type: "cta",
        ctaTitle: "Plan the Rest of Your Visit",
        ctaDescription:
          "Pair the fair with the lake, downtown dining, and everything else worth doing in Waconia.",
        buttons: [
          { label: "Things to Do in Waconia", href: "/guides/things-to-do-waconia", variant: "primary" },
          { label: "All Waconia Events", href: "/events", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "2027 dates", value: "August 11–15" },
      { label: "2026 dates", value: "Aug 12–16 (114th fair)" },
      { label: "Venue", value: "501 W 3rd St, Waconia" },
      { label: "Admission (2026)", value: "$9 ages 7+, 6 & under free" },
      { label: "Gates open", value: "8am daily" },
    ],
    keywords: [
      "Carver County Fair",
      "Carver County Fair 2027",
      "Carver County Fair Waconia",
      "Waconia county fair",
      "Minnesota county fairs August",
    ],
    articleSection: "Events",
    glossaryTerms: [
      { term: "Carver County", anchor: "carver-county" },
      { term: "Waconia", anchor: "waconia" },
    ],
    relatedGuides: [
      { title: "Nickle Dickle Day", readTime: "5 min read", href: "/guides/nickle-dickle-day" },
      { title: "Things to Do in Waconia", readTime: "7 min read", href: "/guides/things-to-do-waconia" },
      { title: "Waconia in Summer", readTime: "5 min read", href: "/guides/waconia-summer" },
    ],
    faqs: [
      {
        question: "When is the Carver County Fair in 2027?",
        answer:
          "August 11–15, 2027, at the Carver County Fairgrounds in Waconia. The 2026 fair, the 114th, ran August 12–16.",
      },
      {
        question: "Where is the Carver County Fair held?",
        answer:
          "At the Carver County Fairgrounds, 501 W 3rd St, Waconia, MN 55387, about 35 miles west of Minneapolis.",
      },
      {
        question: "How much does the Carver County Fair cost?",
        answer:
          "In 2026, gate admission was $9 for ages 7 and older and free for 6 and under, with free admission after 6pm on Sunday. Midway ride tickets were $1.50 each or 40 for $50. Check carvercountyfair.com for 2027 prices.",
      },
      {
        question: "What is there to do at the Carver County Fair?",
        answer:
          "4-H and livestock exhibits, a midway, food vendors and grandstand events, including the Sunday demolition derby in 2026. The fair posts its full schedule on carvercountyfair.com.",
      },
    ],
  },
  {
    slug: "waconia-farmers-market",
    title: "Waconia Farmers Market: Thursdays 4–7pm, June to October",
    metaDescription:
      "The Waconia Farmers' Market meets Thursdays 4–7pm at 224 W 1st St in downtown Waconia, MN. The 2026 season ran June 4 to October 15.",
    heroImage:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-06-24",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "When", value: "Thursdays" },
      { label: "Time", value: "4–7pm" },
      { label: "2026 Season", value: "June 4–Oct 15" },
    ],
    content: [
      {
        type: "text",
        body: "The Waconia Farmers' Market meets every Thursday from 4 to 7pm at 224 W 1st St in downtown Waconia. The 2026 season runs June 4 through October 15. The 4pm start makes it an easy after-work stop.",
      },
      {
        type: "heading",
        heading: "What You'll Find",
      },
      {
        type: "text",
        body: "The market describes itself as local produce, products and handmade items. Vendors change through the season as crops come in. It also runs a Power of Produce Club.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "📅",
            title: "Dates & Location",
            body: "See the event listing with map and the weekly schedule for the current season.",
            link: { label: "Farmers Market Event Page →", href: "/events/waconia-farmers-market-2026" },
          },
          {
            icon: "🍅",
            title: "Tips",
            body: "Bring reusable bags. Early-season markets lean toward greens; tomatoes and sweet corn come later in summer.",
          },
        ],
      },
      {
        type: "heading",
        heading: "Make It a Downtown Evening",
      },
      {
        type: "text",
        body: "The market is downtown, a short walk from Main Street restaurants and a few minutes from Lake Waconia, so it pairs easily with dinner out.",
      },
      {
        type: "cta",
        ctaTitle: "Explore Downtown Waconia",
        ctaDescription:
          "Where to eat and what else to do near the market.",
        buttons: [
          { label: "Best Restaurants in Waconia", href: "/guides/best-restaurants-in-waconia", variant: "primary" },
          { label: "Things to Do", href: "/guides/things-to-do-waconia", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Day", value: "Every Thursday" },
      { label: "Hours", value: "4–7pm" },
      { label: "2026 season", value: "June 4–October 15" },
      { label: "Location", value: "224 W 1st St, downtown" },
    ],
    keywords: [
      "Waconia farmers market",
      "Waconia farmers market hours",
      "farmers market Carver County",
      "Waconia Thursday market",
    ],
    articleSection: "Events",
    glossaryTerms: [
      { term: "Waconia", anchor: "waconia" },
      { term: "Main Street", anchor: "main-street" },
    ],
    relatedGuides: [
      { title: "Best Restaurants in Waconia", readTime: "6 min read", href: "/guides/best-restaurants-in-waconia" },
      { title: "Things to Do in Waconia", readTime: "7 min read", href: "/guides/things-to-do-waconia" },
      { title: "Waconia in Summer", readTime: "5 min read", href: "/guides/waconia-summer" },
    ],
    faqs: [
      {
        question: "When is the Waconia Farmers Market?",
        answer:
          "Thursdays from 4 to 7pm at 224 W 1st St in downtown Waconia. The 2026 season runs June 4 through October 15.",
      },
      {
        question: "What can you buy at the Waconia Farmers Market?",
        answer:
          "Local produce, local products and handmade items. Vendors vary through the season.",
      },
    ],
  },
  {
    slug: "waconia-wedding-venues",
    title: "Waconia Wedding Venues: Lakefront, Vineyard & Golf (2026)",
    metaDescription:
      "Wedding and event venues in Waconia, MN: a winery and brewery, an orchard barn, and a golf club with lake views, plus what to ask each one.",
    heroImage:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-06-25",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Venues covered", value: "3" },
      { label: "Settings", value: "Winery, barn, golf" },
      { label: "Book", value: "Inquire early" },
    ],
    content: [
      {
        type: "text",
        body: "Waconia has three main places that host weddings and private events: a winery and brewery west of town, an 1888 orchard barn, and a golf club with views of Lake Waconia. Below is what each offers and what to ask. Popular summer Saturdays book early, so inquire as soon as you have a date.",
      },
      {
        type: "heading",
        heading: "Orchard Barn: Parley Lake Winery at Deardorff Orchards",
      },
      {
        type: "richText",
        body: "<a href=\"/directory/parley-lake-winery\">Parley Lake Winery</a> shares the 1888 barn at <a href=\"/directory/deardorff-orchards\">Deardorff Orchards</a> (8280 Parley Lake Rd), and the winery's weddings page says the barn hosts events from May to December. The setting is a working orchard and vineyard with a deck over the Itasca vineyard. Ask about capacity, catering and how events fit around the public tasting-room hours.",
      },
      {
        type: "heading",
        heading: "Winery Weddings: Schram Vineyards",
      },
      {
        type: "richText",
        body: "<a href=\"/directory/schram-vineyards\">Schram Vineyards Winery &amp; Brewery</a> (8785 Airport Rd) is a 32-acre winery, brewery and restaurant overlooking Reitz Lake, and it books private events. It suits couples who want a vineyard setting with wine and house-brewed beer on site. Confirm capacity, buyout options and catering rules directly. Note that <a href=\"/directory/sovereign-estate-wine\">Sovereign Estate</a> on the north shore says it no longer hosts wedding receptions.",
      },
      {
        type: "heading",
        heading: "Golf-Club Setting: Island View",
      },
      {
        type: "richText",
        body: "<a href=\"/directory/island-view-golf-club\">Island View Golf Club</a> ($$) (7795 Laketown Pkwy) hosts weddings, rehearsal dinners, showers and other private events with its Green Fox Grille. It suits couples who want a golf-course setting, and it can also host the rehearsal dinner or a golf outing.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "💍",
            title: "Booking Checklist",
            body: "Ask each venue about: peak-season Saturday availability, guest capacity, in-house vs. outside catering, bar/liquor rules, rain plan for outdoor ceremonies, and lodging blocks for out-of-town guests.",
          },
          {
            icon: "🛏️",
            title: "Where Guests Stay",
            body: "Waconia's lodging is limited, so reserve room blocks early. Our hotels guide covers the local options and nearby alternatives.",
            link: { label: "Where to Stay in Waconia →", href: "/hotels" },
          },
        ],
      },
      {
        type: "heading",
        heading: "Planning a Waconia Wedding Weekend",
      },
      {
        type: "text",
        body: "Guests can fill a weekend with the lake, downtown restaurants and the wineries, which can also host rehearsal dinners and welcome parties. Hotel capacity in town is modest, so reserve room blocks as soon as you have a date, and look at nearby Chaska and Chanhassen for overflow.",
      },
      {
        type: "cta",
        ctaTitle: "Plan the Weekend Around It",
        ctaDescription:
          "Give your guests the lake-town weekend: dining, wineries and the lake.",
        buttons: [
          { label: "Best Restaurants in Waconia", href: "/guides/best-restaurants-in-waconia", variant: "primary" },
          { label: "Wineries Tour", href: "/guides/waconia-wineries-breweries-tour", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Winery", value: "Schram Vineyards" },
      { label: "Orchard barn", value: "Parley Lake / Deardorff" },
      { label: "Golf club", value: "Island View" },
      { label: "Peak booking", value: "Inquire early" },
      { label: "Guest lodging", value: "Reserve blocks early" },
    ],
    keywords: [
      "Waconia wedding venues",
      "Lake Waconia wedding venue",
      "Waconia MN weddings",
      "vineyard wedding Minnesota",
      "orchard barn wedding Minnesota",
      "lakefront wedding venue Minnesota",
    ],
    articleSection: "Living in Waconia",
    glossaryTerms: [
      { term: "Lake Waconia", anchor: "lake-waconia" },
      { term: "Waconia", anchor: "waconia" },
    ],
    relatedGuides: [
      { title: "Waconia Wineries Tour", readTime: "6 min read", href: "/guides/waconia-wineries-breweries-tour" },
      { title: "Where to Stay in Waconia", readTime: "5 min read", href: "/hotels" },
      { title: "Best Restaurants in Waconia", readTime: "6 min read", href: "/guides/best-restaurants-in-waconia" },
    ],
    faqs: [
      {
        question: "What are the best wedding venues in Waconia, MN?",
        answer:
          "The main options are Schram Vineyards Winery & Brewery (a winery and brewery overlooking Reitz Lake), the 1888 barn at Deardorff Orchards shared with Parley Lake Winery (events May to December), and Island View Golf Club (golf-course setting with lake views and the Green Fox Grille).",
      },
      {
        question: "Is there a lakefront wedding venue in Waconia?",
        answer:
          "Island View Golf Club has a deck overlooking Lake Waconia, and Lola's Lakehouse on East Lake Street offers patio and dining-room buyouts for private events. Sovereign Estate, a lakefront winery on the north shore, says it no longer hosts wedding receptions.",
      },
      {
        question: "How far in advance should you book a Waconia wedding venue?",
        answer:
          "Popular summer Saturdays book well ahead, so ask each venue about availability as early as you can, and reserve guest lodging blocks at the same time, since hotel capacity in Waconia is limited.",
      },
      {
        question: "Can you get married at a winery near Waconia?",
        answer:
          "Yes. Schram Vineyards Winery & Brewery (8785 Airport Rd) books private events, and Parley Lake Winery's barn at Deardorff Orchards hosts events from May to December. Sovereign Estate no longer hosts wedding receptions. Confirm capacity and catering details directly with each venue.",
      },
    ],
  },
  {
    slug: "senior-living-in-waconia",
    title: "Senior Living in Waconia, MN: A Family's Guide",
    metaDescription:
      "How to navigate senior living in Waconia, Minnesota — the types of care (independent living, assisted living, memory care, 55+), what makes Waconia a fit for retirees, costs, and how to verify options.",
    heroImage:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-06-25",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Hospital", value: "Ridgeview" },
      { label: "County", value: "Carver" },
      { label: "Care Types", value: "4" },
    ],
    content: [
      {
        type: "text",
        body: "Choosing senior living in Waconia, Minnesota usually comes down to matching a level of care to a person's needs, and Waconia's appeal for retirees is concrete: it's anchored by Ridgeview Medical Center, the regional hospital headquartered in town, and it's a quieter lake community within reach of the Twin Cities' specialty care. This guide explains the four main types of senior living, what makes Waconia a fit, the cost factors that matter in Minnesota, and — importantly — how to verify specific communities rather than trust an unvetted list. We don't publish facility names or prices we can't confirm; use the authoritative directories below to build your shortlist.",
      },
      {
        type: "heading",
        heading: "The Four Levels of Senior Living",
      },
      {
        type: "text",
        body: "Senior living is a spectrum, not a single product. (1) Active-adult / 55+ communities are for independent seniors who want a low-maintenance home and an age-restricted neighborhood — no care services. (2) Independent living adds conveniences like meals, housekeeping, and activities, still for people who don't need daily help. (3) Assisted living provides help with daily activities (medication, bathing, dressing) while preserving independence. (4) Memory care is a secured, specialized setting for dementia and Alzheimer's. Some campuses offer several levels so a resident can age in place as needs change — worth asking about up front.",
      },
      {
        type: "heading",
        heading: "Why Families Consider Waconia",
      },
      {
        type: "text",
        body: "The single biggest draw is Ridgeview Medical Center — a full-service regional hospital headquartered in Waconia with emergency care, surgery, and a network of clinics, so a higher level of medical care is close at hand. Beyond healthcare, Waconia has a walkable downtown, the lake and regional park, a public library, Safari Island Community Center, and community events downtown. For families, the city's location means visiting is a manageable drive from across the metro.",
      },
      {
        type: "heading",
        heading: "What Drives the Cost",
      },
      {
        type: "text",
        body: "Senior-living cost in Minnesota depends mostly on the level of care, the size of the unit, and which services are bundled versus billed à la carte. Assisted living and memory care cost more than independent or 55+ living because of staffing. Minnesota offers programs that can help with cost for those who qualify — notably the Elderly Waiver (EW) program through Medical Assistance — and long-term care insurance or VA benefits may apply. Because pricing changes and varies widely by community, get current quotes in writing from each option and ask exactly what's included.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "✅",
            title: "Verify Before You Tour",
            body: "Build your shortlist from authoritative sources: Medicare.gov's Care Compare, the Minnesota Board on Aging / Senior LinkAge Line (1-800-333-2433), and the MN Dept. of Health licensing lookup for assisted-living and care facilities.",
          },
          {
            icon: "🏥",
            title: "Healthcare Anchor",
            body: "Ridgeview Medical Center, headquartered in Waconia, is the regional hospital — a key factor when a senior's care needs may grow over time.",
            link: { label: "Moving to Waconia →", href: "/guides/moving-to-waconia" },
          },
        ],
      },
      {
        type: "heading",
        heading: "Questions to Ask on a Tour",
      },
      {
        type: "text",
        body: "When you visit a community, ask: What levels of care are offered on-site, and can a resident move up a level without relocating? What exactly is included in the monthly fee versus billed separately? What are the staffing ratios, especially overnight? How are medical emergencies handled, and what's the relationship with Ridgeview? What's the policy if funds run low or a resident shifts to a state program? Clear answers — in writing — separate a good fit from a sales pitch.",
      },
      {
        type: "cta",
        ctaTitle: "Researching a Move to Waconia?",
        ctaDescription:
          "Our relocation and cost-of-living guides cover the practical side of settling in Waconia.",
        buttons: [
          { label: "Moving to Waconia", href: "/guides/moving-to-waconia", variant: "primary" },
          { label: "Cost of Living", href: "/guides/cost-of-living-in-waconia", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Regional hospital", value: "Ridgeview Medical Center" },
      { label: "Care levels", value: "55+, independent, assisted, memory" },
      { label: "State help", value: "Elderly Waiver (if eligible)" },
      { label: "Verify via", value: "Senior LinkAge Line" },
      { label: "County", value: "Carver County" },
    ],
    keywords: [
      "senior living Waconia",
      "Waconia MN assisted living",
      "Waconia memory care",
      "55+ communities Waconia",
      "retirement Waconia Minnesota",
    ],
    articleSection: "Living in Waconia",
    glossaryTerms: [
      { term: "Waconia", anchor: "waconia" },
      { term: "Ridgeview Medical Center", anchor: "ridgeview" },
      { term: "Carver County", anchor: "carver-county" },
    ],
    relatedGuides: [
      { title: "Moving to Waconia", readTime: "8 min read", href: "/guides/moving-to-waconia" },
      { title: "Cost of Living in Waconia", readTime: "6 min read", href: "/guides/cost-of-living-in-waconia" },
      { title: "Waconia Neighborhoods", readTime: "6 min read", href: "/guides/waconia-neighborhoods" },
    ],
    faqs: [
      {
        question: "What types of senior living are available in Waconia, MN?",
        answer:
          "The main levels are active-adult/55+ communities (no care services), independent living (meals, housekeeping, activities), assisted living (help with daily activities), and memory care (secured dementia/Alzheimer's care). Some campuses offer multiple levels so a resident can age in place. Verify specific communities through Medicare's Care Compare and the Minnesota Senior LinkAge Line.",
      },
      {
        question: "Why is Waconia a good place for senior living?",
        answer:
          "Waconia is home to Ridgeview Medical Center, a full-service regional hospital, so higher-level medical care is close by. It also offers a walkable downtown, Lake Waconia and the regional park, a library branch, and community events — a pleasant, lower-key setting within reach of the Twin Cities for visiting family.",
      },
      {
        question: "How much does senior living cost in Minnesota?",
        answer:
          "Cost depends mainly on the level of care, unit size, and which services are bundled. Assisted living and memory care cost more than independent or 55+ living due to staffing. Minnesota's Elderly Waiver program can help eligible residents, and long-term care insurance or VA benefits may apply. Get current written quotes from each community.",
      },
      {
        question: "How do I find and vet senior living communities near Waconia?",
        answer:
          "Use authoritative sources rather than unvetted lists: Medicare.gov's Care Compare, the Minnesota Board on Aging / Senior LinkAge Line (1-800-333-2433), and the Minnesota Department of Health's licensing lookup for assisted-living and care facilities. Then tour your shortlist and ask about care levels, staffing, costs, and emergency procedures.",
      },
    ],
  },
  // ────────────────────────────────────────────────────────────────────
  // Round 14 — added 2026-08-13 (rest-of-year events content)
  // ────────────────────────────────────────────────────────────────────
  {
    slug: "apple-orchards-near-waconia",
    title: "Apple Orchards Near Waconia, MN: Deardorff Orchards & Parley Lake Winery",
    metaDescription:
      "Deardorff Orchards near Waconia, Minnesota: an 1888 barn on 120 acres with 3,000+ apple trees, open fall weekends, with Parley Lake Winery's tasting room in the same barn. Hours, varieties and tips.",
    heroImage: "/images/event-harvest-festival.webp",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-08-13",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Barn Built", value: "1888" },
      { label: "Apple Trees", value: "3,000+" },
      { label: "2026 Hours", value: "Sat–Sun 12–6" },
    ],
    content: [
      {
        type: "text",
        body: "Deardorff Orchards (8282 Parley Lake Rd, Waconia) is a 120-acre farm near Lake Waconia, Carver Park Reserve and Parley Lake, with more than 3,000 apple trees and an 1888 barn. Parley Lake Winery's tasting room is inside the same barn. For the 2026 apple season the orchard is open Saturdays and Sundays from noon to 6pm.",
      },
      {
        type: "heading",
        heading: "Deardorff Orchards: The Farm",
      },
      {
        type: "text",
        body: "The orchard grows Minnesota varieties including SweeTango, Zestar! and Honeycrisp, and its site also describes Haralson, a tart apple suited to pies. The farm sells apples, fresh cider, pumpkins, honey and gift items in season. A tractor-pulled wagon ride is complimentary with a purchase of apples or wine. The orchard's website does not describe pick-your-own, so if picking your own apples is the plan, check with the orchard before you go.",
      },
      {
        type: "heading",
        heading: "What Ripens When",
      },
      {
        type: "text",
        body: "Availability changes week to week with the crop. In general, Zestar! is an early-season apple, Honeycrisp comes in around mid-season, and Haralson is a later apple. Popular varieties sell out first, so go early in the season and early in the day if you want a specific one, and check the orchard's website before driving out.",
      },
      {
        type: "heading",
        heading: "Parley Lake Winery: In the Same Barn",
      },
      {
        type: "text",
        body: "Parley Lake Winery (8280 Parley Lake Rd), founded in 2008, pours wines from cold-climate Minnesota grapes grown on the farm, and some of the orchard's apples go into its wines. The tasting room has a wrap-around deck overlooking the Lake View Stage and the Itasca vineyard, plus an art gallery of local artists. Hours are Friday 4 to 8pm and Saturday and Sunday noon to 6pm, starting the first weekend in May. Groups need a reservation, and party buses are not allowed. Live music and food trucks are posted on the winery's events page.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🍎",
            title: "Go Early",
            body: "The most popular varieties sell out first. Visit early in the season and early in the day, and check the orchard's site for current availability.",
          },
          {
            icon: "🍷",
            title: "Two Stops, One Barn",
            body: "Deardorff Orchards and Parley Lake Winery share the 1888 barn on Parley Lake Road: apples for the kids, a tasting for the adults.",
            link: { label: "Parley Lake Winery listing →", href: "/directory/parley-lake-winery" },
          },
        ],
      },
      {
        type: "heading",
        heading: "Make It a Full Fall Day",
      },
      {
        type: "text",
        body: "The orchard is a short drive from downtown Waconia. A fall Saturday can cover the orchard in the morning, lunch at Iron Tap downtown or El Loro (520 Cherry Dr), the Scarecrow Tour route in October, and a glass at Sovereign Estate Wine on the north shore of the lake.",
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Fall Visit",
        ctaDescription:
          "Apples, the Scarecrow Tour, fall color and fall fishing.",
        buttons: [
          { label: "Fall in Waconia Guide", href: "/guides/waconia-fall", variant: "primary" },
          { label: "Wineries Tour", href: "/guides/waconia-wineries-breweries-tour", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Orchard", value: "Deardorff Orchards (1888 barn)" },
      { label: "Address", value: "8282 Parley Lake Rd" },
      { label: "2026 hours", value: "Sat–Sun, 12–6pm" },
      { label: "Size", value: "120 acres, 3,000+ trees" },
      { label: "Winery on-site", value: "Parley Lake Winery" },
    ],
    keywords: [
      "apple orchard near Waconia",
      "apple orchard Waconia MN",
      "Deardorff Orchards",
      "Parley Lake Winery",
      "apple orchards Carver County",
      "apple orchards west metro Minneapolis",
    ],
    articleSection: "Seasonal",
    glossaryTerms: [
      { term: "Waconia", anchor: "waconia" },
      { term: "Carver County", anchor: "carver-county" },
    ],
    relatedGuides: [
      { title: "Fall in Waconia", readTime: "6 min read", href: "/guides/waconia-fall" },
      { title: "Waconia Wineries Tour", readTime: "6 min read", href: "/guides/waconia-wineries-breweries-tour" },
      { title: "Things to Do in Waconia", readTime: "7 min read", href: "/guides/things-to-do-waconia" },
    ],
    faqs: [
      {
        question: "Is there an apple orchard near Waconia, MN?",
        answer:
          "Yes. Deardorff Orchards at 8282 Parley Lake Road, Waconia, is a 120-acre farm with more than 3,000 apple trees, including SweeTango, Zestar! and Honeycrisp. For the 2026 season it is open Saturdays and Sundays from noon to 6pm.",
      },
      {
        question: "Can you pick your own apples at Deardorff Orchards?",
        answer:
          "The orchard's website does not describe pick-your-own, so check with the orchard before you go. It sells apples, cider, pumpkins and honey in season, and gives a complimentary tractor-pulled wagon ride with a purchase of apples or wine.",
      },
      {
        question: "Is there a winery at Deardorff Orchards?",
        answer:
          "Yes. Parley Lake Winery's tasting room is in the orchard's 1888 barn. It is open Friday 4–8pm and Saturday–Sunday noon–6pm from the first weekend in May. Groups need reservations, and party buses are not allowed.",
      },
      {
        question: "What else is happening in Waconia in fall?",
        answer:
          "The Scarecrow Tour runs October 8–18, 2026, and D.E.A.R. Day, the Chamber's shopping day, is November 7, 2026.",
      },
    ],
  },
  {
    slug: "waconia-christmas",
    title: "Christmas in Waconia, MN: Christkindlsmarkt, Tree Lighting & Holiday Guide",
    metaDescription:
      "Waconia's holiday season: the Christkindlsmarkt in City Square Park, the Tree Lighting on the Friday after Thanksgiving, D.E.A.R. Day on November 7, 2026, and where to warm up.",
    heroImage:
      "https://images.unsplash.com/photo-1518182170546-07661fd94144?w=1600&q=80",
    updatedDate: "October 5, 2026",
    updatedIso: "2026-10-05",
    publishedIso: "2026-08-13",
    author: "WaconiaGuide Editorial",
    authorSlug: "editorial",
    stats: [
      { label: "Christkindlsmarkt", value: "December" },
      { label: "Tree Lighting", value: "Nov 27, 2026" },
      { label: "D.E.A.R. Day", value: "Nov 7, 2026" },
    ],
    content: [
      {
        type: "text",
        body: "In 2025 the Christkindlsmarkt, a German-style Christmas market that spent 19 years in Excelsior, moved to City Square Park in downtown Waconia. Along with the Tree Lighting on the Friday after Thanksgiving and the Chamber's D.E.A.R. Day shopping event in early November, it gives Waconia a full holiday calendar. This guide covers each event and where to warm up between them.",
      },
      {
        type: "heading",
        heading: "The Waconia Christkindlsmarkt",
      },
      {
        type: "text",
        body: "The market is held in City Square Park (104 E Main St). In 2025 it ran December 5 to 7 and 12 to 14. Its Chamber listing describes handcrafted gifts such as wooden toys, ornaments, nutcrackers, alpaca knits and leather goods, along with live reindeer and alpacas, music and German yodeling, face painting, a magic show and holiday treats. The 2026 dates had not been announced as of October 5, 2026. For updates, check the Waconia Chamber website (destinationwaconia.org).",
      },
      {
        type: "heading",
        heading: "Tree Lighting in the Park",
      },
      {
        type: "text",
        body: "The Tree Lighting is held at 6pm on the Friday after Thanksgiving at the City Square Park gazebo. In 2026 that is Friday, November 27. Small Business Saturday follows the next day.",
      },
      {
        type: "heading",
        heading: "November Shopping Days",
      },
      {
        type: "text",
        body: "D.E.A.R. Day (Divas Enjoying Awesome Retail), run by the Waconia Chamber, is Saturday, November 7, 2026, from 9am to 4pm, its 19th year. Participating businesses hide the letters D-E-A-R; find all four to enter a drawing for the Basket of Waconia, a prize the Chamber values at over $400. Shoppers wearing deer-hunting orange get extra offers. Local shops have also run a Pink Friday promotion in November; check the Chamber calendar for this year's plans.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🏮",
            title: "Christkindlsmarkt Listing",
            body: "Our event page will carry the 2026 dates once the organizer announces them.",
            link: { label: "Event details →", href: "/events/waconia-christkindlsmarkt-2026" },
          },
          {
            icon: "🍷",
            title: "Schram's Winter Lodge",
            body: "Schram Vineyards runs its Winter Lodge from December through February, with live music nearly every weekend year-round. Check its website for hours.",
            link: { label: "Schram Vineyards listing →", href: "/directory/schram-vineyards" },
          },
        ],
      },
      {
        type: "heading",
        heading: "Between Events: Where to Warm Up",
      },
      {
        type: "text",
        body: "December in Waconia is cold, so plan indoor stops. Mocha Monkey (115 S Olive St) is close to the park for coffee. Pangea Cafe serves breakfast and lunch until 2pm, and Iron Tap and Bode Gray's cover dinner. Emagine Waconia, the downtown movie theater, and Garage Bar & Bowl work when the wind picks up.",
      },
      {
        type: "cta",
        ctaTitle: "Plan Your Holiday Visit",
        ctaDescription:
          "The Christkindlsmarkt, the Tree Lighting and a lake town in winter.",
        buttons: [
          { label: "Winter in Waconia Guide", href: "/guides/waconia-winter", variant: "primary" },
          { label: "All Waconia Events", href: "/events", variant: "outline" },
        ],
      },
    ],
    sidebarFacts: [
      { label: "Christkindlsmarkt 2026", value: "Dates not yet announced" },
      { label: "Location", value: "City Square Park, 104 E Main St" },
      { label: "Tree Lighting", value: "Nov 27, 2026 · 6pm" },
      { label: "D.E.A.R. Day", value: "Nov 7, 2026 · 9am–4pm" },
      { label: "Small Business Saturday", value: "Nov 28, 2026" },
    ],
    keywords: [
      "Waconia Christkindlsmarkt",
      "Christkindlmarkt Minnesota",
      "Christmas in Waconia",
      "Waconia holiday events",
      "Christmas market near Minneapolis",
      "Waconia Tree Lighting",
      "D.E.A.R. Day Waconia",
    ],
    articleSection: "Seasonal",
    glossaryTerms: [
      { term: "City Square Park", anchor: "city-square-park" },
      { term: "Waconia", anchor: "waconia" },
    ],
    relatedGuides: [
      { title: "Winter in Waconia", readTime: "6 min read", href: "/guides/waconia-winter" },
      { title: "Waconia Wineries Tour", readTime: "6 min read", href: "/guides/waconia-wineries-breweries-tour" },
      { title: "Things to Do in Waconia", readTime: "7 min read", href: "/guides/things-to-do-waconia" },
    ],
    faqs: [
      {
        question: "When is the Waconia Christkindlsmarkt?",
        answer:
          "It is held in December in City Square Park, downtown Waconia. In 2025 it ran December 5–7 and 12–14. The 2026 dates had not been announced as of October 5, 2026; check the Waconia Chamber website (destinationwaconia.org) for updates.",
      },
      {
        question: "Is there a Christmas market near Minneapolis?",
        answer:
          "Yes. The Christkindlsmarkt moved to City Square Park in Waconia, about 35 miles west of Minneapolis, in 2025 after 19 years in Excelsior. Its Chamber listing describes handcrafted gifts, live reindeer and alpacas, German music and yodeling, face painting and a magic show.",
      },
      {
        question: "When is the Waconia Tree Lighting?",
        answer:
          "At 6pm on the Friday after Thanksgiving at the City Square Park gazebo: Friday, November 27, 2026.",
      },
      {
        question: "What is D.E.A.R. Day in Waconia?",
        answer:
          "The Waconia Chamber's Divas Enjoying Awesome Retail shopping day, Saturday, November 7, 2026, 9am–4pm, in its 19th year. Find the letters D-E-A-R at participating businesses to enter a drawing for the Basket of Waconia (valued at over $400); shoppers in deer-hunting orange get extra offers.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
