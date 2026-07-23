# Workspace Rules & Strategy for Harmain Travels

## Search Engine Optimization (SEO), Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO) Guidelines

1. **Static Pre-rendering**: Always ensure pre-rendering (`scripts/prerender.js`) runs during production builds so React pages are served as full HTML to Googlebot and AI crawlers.
2. **Entity Markup**: Maintain comprehensive JSON-LD schemas (`TravelAgency`, `TouristDestination`, `FAQPage`, `BreadcrumbList`) across all pages.
3. **AI Search Optimization (GEO)**: Optimize for ChatGPT, Gemini, Perplexity, and Claude by maintaining `/llms.txt`, clear data tables, and structured entity facts.
4. **Voice & Featured Snippets (AEO)**: Target intent-based headings (`H2`/`H3`) and concise Q&A blocks to capture voice search and featured snippets.
5. **Travel Industry Knowledge**: Tailor all content with deep domain knowledge of Pakistani passport travel, e-Visas, Umrah/Hajj packages, and transparent processing guidelines.
