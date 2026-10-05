/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // URLs from the old WordPress site that search engines still rank or link to.
  // Bing's top URL for this domain was /listing/johnsons-funeral-home-waconia-mn/
  // (16.7k impressions, position ~6) and it returned 404 until round 16.
  // Specific rules first; the wildcards catch whatever else is still indexed.
  async redirects() {
    const to = (source, destination) => ({ source, destination, permanent: true });
    return [
      to("/listing/johnsons-funeral-home-waconia-mn", "/directory/johnson-funeral-home"),
      to("/listing/lolas-lakehouse-waconia", "/directory/lolas-lakehouse"),
      to("/listing/aldi-waconia-minnesota", "/directory/aldi-waconia"),
      to("/listing/dmv-waconia-mn", "/directory/dmv-waconia-mn"),
      // Waconia Brewing Co. closed in January 2026; the tour guide explains what replaced it.
      to("/listing/waconia-brewing-company", "/guides/waconia-wineries-breweries-tour"),
      to("/directory/waconia-brewing-company", "/guides/waconia-wineries-breweries-tour"),
      // Listings removed in round 18 (2026-10-05): no evidence these businesses exist,
      // no Coborn's or Westside Liquor store in Waconia, and J. Carver Distillery closing by end of October 2026.
      to("/directory/lake-waconia-marine", "/guides/lake-waconia-boat-rentals"),
      to("/directory/lakeside-tavern-waconia", "/directory/restaurants"),
      to("/directory/mucho-mexican", "/directory/restaurants"),
      to("/directory/coborns-waconia", "/directory/mackenthuns-fine-foods"),
      to("/directory/j-carver-distillery", "/directory/breweries-wineries"),
      to("/directory/westside-liquor-waconia", "/directory/shopping"),
      to("/directory/bayview-event-center", "/guides/waconia-wedding-venues"),
      to("/directory/breweries", "/directory/breweries-wineries"),
      to("/listing/:slug*", "/directory"),
      to("/listing-category/:slug*", "/directory"),
      to("/waconia-minnesota-movie-theaters", "/directory/emagine-waconia"),
      to("/lake-waconia", "/guides/lake-waconia"),
    ];
  },
};

module.exports = nextConfig;
