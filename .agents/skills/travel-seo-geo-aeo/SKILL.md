---
name: travel-seo-geo-aeo
description: Pro-level Google Indexing, SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization) strategies specifically tailored for the travel industry.
---

# Travel SEO, GEO, and AEO Master Strategy

This skill encapsulates 23 years of travel industry domain knowledge, 10 years of SEO expertise, 5 years of Generative Engine Optimization (GEO), and 3 years of Answer Engine Optimization (AEO).

## 1. Technical SEO & Indexing (Google Search Console & Crawling)
- **Static Pre-rendering**: Ensure all React/Vite dynamic routes are pre-rendered into HTML files via Puppeteer (`scripts/prerender.js`) so Googlebot & AI crawlers receive static HTML without JS execution delays.
- **Sitemap & Indexing**: Maintain `sitemap.xml` with dynamic route discovery (`destinations/*`, `blog/*`) and explicit canonical tags `<link rel="canonical" href="https://harmaintravels.com/..." />`.
- **Crawl Budget & Robots**: Keep `robots.txt` clean (`Allow: /`) and avoid blocking assets or endpoints.

## 2. Generative Engine Optimization (GEO) for AI (ChatGPT, Gemini, Perplexity, Claude)
- **LLMs Text Interface**: Maintain `/llms.txt` in the root for AI web crawlers summarizing entity definitions, key offerings, and core citations.
- **Entity & Fact Density**: Include structured tables (e.g., Seasonal Matrices, Cost Breakdown, Processing Times) so AI models can easily summarize data for chat queries.
- **Citation Anchors**: Use authoritative statements with clear entity naming (e.g., "Harmain Travels - No. 1 Visa Agent in Blue Area, Islamabad").

## 3. Answer Engine Optimization (AEO) for Voice & Featured Snippets
- **JSON-LD Schemas**: Inject rich structured data on every page:
  - `TravelAgency` & `LocalBusiness` with GeoCoordinates.
  - `TouristDestination` & `TravelAction` for destination pages.
  - `FAQPage` with concise, question-focused Q&As.
  - `BreadcrumbList` for site hierarchy.
- **Direct Snippet Headlines**: Use descriptive `<h2 />` and `<h3 />` tags structured around user intent (e.g., "Latest Visa Requirements (Pakistani Passport)", "Best Time to Visit", "3-Day Express Plan").

## 4. Travel Industry Domain Knowledge (Pakistani Market & Global Travel)
- **Local Context**: Specialize in Pakistani passport visa requirements, e-Visa guidance, Umrah/Hajj luxury packages (5-Star Haram-view hotels), and departure guidelines from ISB/KHI/LHE.
- **Trust & E-E-A-T**: Present transparent fees, processing timeframes, document checklists, and direct contact options (WhatsApp / Inquiry Modals).
