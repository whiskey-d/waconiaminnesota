export interface Guide {
  slug: string;
  title: string;
  metaDescription: string;
  heroImage: string;
  updatedDate: string;
  author: string;
  stats: { label: string; value: string }[];
  content: GuideSection[];
  sidebarMap: {
    publicAccess: string;
    boatLaunchFee: string;
    waterClarity: string;
  };
  relatedGuides: { title: string; readTime: string; href: string }[];
}

export interface GuideSection {
  type: "text" | "heading" | "pullquote" | "photoGrid" | "infoCards" | "cta";
  heading?: string;
  body?: string;
  quote?: string;
  attribution?: string;
  photos?: { src: string; alt: string }[];
  cards?: { title: string; body: string; icon: string }[];
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
    author: "WaconiaGuide Staff",
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
        type: "text",
        body: "Lake Waconia supports an impressive variety of game fish. Walleye is the primary target species and the lake is regularly stocked by the MN DNR. Largemouth bass thrive in the extensive weed cover along the shoreline. Northern pike patrol the weed edges and can reach impressive sizes. Bluegill and crappie provide excellent panfish action, especially in spring and early summer. The lake also holds a small but growing population of muskie, making it a sleeper destination for trophy hunters willing to put in the time.",
      },
      {
        type: "infoCards",
        cards: [
          {
            icon: "🗺️",
            title: "Depth Charts & DNR Data",
            body: "View Lake Waconia's official depth charts, fish survey reports, and DNR data on MN Fishing Lakes — the most complete Minnesota lake database online.",
            link: { label: "View on MN Fishing Lakes →", href: "https://mnfishinglakes.com/lakes/lake-9" },
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
        title: "Best Restaurants in Waconia",
        readTime: "5 min read",
        href: "/directory",
      },
      {
        title: "Waconia Events Calendar",
        readTime: "3 min read",
        href: "/events",
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
    author: "WaconiaGuide Staff",
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
        title: "Best Restaurants in Waconia",
        readTime: "5 min read",
        href: "/directory",
      },
      {
        title: "Waconia Events Calendar",
        readTime: "3 min read",
        href: "/events",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
