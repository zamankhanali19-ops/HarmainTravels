/**
 * Ultimate Asia-Wide SEO Metadata Analyzer & Injector
 * Simulates high-intent analytics tracking and embeds the most trending search terms.
 */

const trendingKeywordsByRoute = {
  home: [
    "Harmain Travels", "Pakistan's No 1 Travel Agency", "Best Asian Travel Consultant",
    "Elite Asian Holiday Packages", "Top Rated Asian Tour Agency", "Islamabad Premium Travels"
  ],
  destinations: [
    "Top Destinations in Asia", "Trending Asia Travel Packages", "Luxury Asian Getaways",
    "Best Asia Holiday Deals", "Thailand Malaysia Singapore Tour Packages"
  ],
  hotels: [
    "Elite Luxury Hotels Asia", "Book Best Asian Resorts", "Premium Hotel Booking Islamabad",
    "Luxury Island Stays", "Boutique Hotels Southeast Asia"
  ],
  flights: [
    "Cheap Flights to Asia", "Book Elite Asian Flights", "Islamabad Air Ticketing",
    "Middle East Asia Direct Flights", "Asia Tour Multi City Travels"
  ],
  about: [
    "Harmain Travels Legacy", "Who is Harmain Travels", "Trusted Pakistan Travel Agency",
    "Luxury Travel Authority Islamabad", "IATA Accredited Asian Consultant"
  ],
  contact: [
    "Contact Harmain Travels", "Islamabad Head Office Harmain", "Book Asian Tour Inquiries",
    "Customer Support Harmain Travels", "Pakistan Top Visa Agent Contact"
  ],
  services: [
    "Harmain Travel Services", "Premium Visa Consulting Pakistan", "High End Corporate Travel",
    "VIP Travel Services Asia", "Luxury Tour Tailoring"
  ],
  umrah: [
    "Best Umrah Packages Pakistan", "Luxury Umrah Services Islamabad", "Economy Umrah Deals",
    "Umrah Visa E-Visa Assistance", "Premium Makkah Madinah Hotels", "Top Rated Umrah Agent"
  ]
};

export const analyzeAndUpdateSEO = (routeKey, customData = {}) => {
  if (typeof window === 'undefined') return;

  const keywords = trendingKeywordsByRoute[routeKey] || trendingKeywordsByRoute.home;
  if (customData.keywords && Array.isArray(customData.keywords)) {
    keywords.push(...customData.keywords);
  }

  // Deduplicate keywords
  const uniqueKeywords = [...new Set(keywords)];

  // Update Page Title
  if (customData.title) {
    document.title = `${customData.title} | Harmain Travels`;
  }

  // Update Meta Keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.content = uniqueKeywords.join(', ');

  // Update Meta Description
  if (customData.description) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = customData.description;
  }

  console.log(`[SEO Analyzer] Injected trending keywords for ${routeKey} route. Ready for search algorithms.`);
};
