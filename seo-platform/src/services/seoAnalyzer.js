/**
 * SEOPulse — Core SEO Analysis Engine
 * Fetches a URL via CORS proxy, parses HTML, and runs comprehensive SEO checks.
 */

const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

export async function analyzeUrl(url) {
  const startTime = performance.now();
  
  try {
    // Normalize URL
    if (!url.startsWith('http')) url = 'https://' + url;
    
    const response = await fetch(CORS_PROXY + encodeURIComponent(url));
    if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
    
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const elapsed = Math.round(performance.now() - startTime);

    const results = {
      url,
      timestamp: new Date().toISOString(),
      loadTime: elapsed,
      meta: analyzeMeta(doc, url),
      headings: analyzeHeadings(doc),
      images: analyzeImages(doc),
      links: analyzeLinks(doc, url),
      content: analyzeContent(doc),
      schema: analyzeSchema(doc),
      technical: analyzeTechnical(doc, url, html),
      security: analyzeSecurity(url),
      localSeo: analyzeLocalSeo(doc),
    };

    results.scores = calculateScores(results);
    results.issues = collectIssues(results);
    
    return results;
  } catch (err) {
    throw new Error(`Analysis failed: ${err.message}`);
  }
}

/* ========== META ANALYSIS ========== */
function analyzeMeta(doc, url) {
  const title = doc.querySelector('title')?.textContent?.trim() || '';
  const metaDesc = doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || '';
  const metaKeywords = doc.querySelector('meta[name="keywords"]')?.getAttribute('content')?.trim() || '';
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
  const robots = doc.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
  const viewport = doc.querySelector('meta[name="viewport"]')?.getAttribute('content') || '';

  // Open Graph
  const og = {};
  doc.querySelectorAll('meta[property^="og:"]').forEach(el => {
    og[el.getAttribute('property')] = el.getAttribute('content') || '';
  });

  // Twitter Card
  const twitter = {};
  doc.querySelectorAll('meta[name^="twitter:"]').forEach(el => {
    twitter[el.getAttribute('name')] = el.getAttribute('content') || '';
  });

  const issues = [];
  const warnings = [];
  const passed = [];

  // Title checks
  if (!title) {
    issues.push({ type: 'critical', message: 'Missing title tag', fix: 'Add a descriptive <title> tag to improve search visibility.' });
  } else if (title.length < 30) {
    warnings.push({ type: 'warning', message: `Title too short (${title.length} chars)`, fix: 'Aim for 50-60 characters for optimal display in search results.' });
  } else if (title.length > 60) {
    warnings.push({ type: 'warning', message: `Title too long (${title.length} chars)`, fix: 'Keep titles under 60 characters to prevent truncation in SERPs.' });
  } else {
    passed.push({ message: `Title tag is well-optimized (${title.length} chars)` });
  }

  // Meta description checks
  if (!metaDesc) {
    issues.push({ type: 'critical', message: 'Missing meta description', fix: 'Add a compelling meta description to improve click-through rates.' });
  } else if (metaDesc.length < 120) {
    warnings.push({ type: 'warning', message: `Meta description too short (${metaDesc.length} chars)`, fix: 'Aim for 150-160 characters for optimal SERP display.' });
  } else if (metaDesc.length > 160) {
    warnings.push({ type: 'warning', message: `Meta description too long (${metaDesc.length} chars)`, fix: 'Keep meta descriptions under 160 characters.' });
  } else {
    passed.push({ message: `Meta description is well-optimized (${metaDesc.length} chars)` });
  }

  // OG tags
  if (!og['og:title'] || !og['og:description'] || !og['og:image']) {
    warnings.push({ type: 'warning', message: 'Incomplete Open Graph tags', fix: 'Add og:title, og:description, and og:image for better social sharing.' });
  } else {
    passed.push({ message: 'Open Graph tags are properly configured' });
  }

  // Twitter cards
  if (!twitter['twitter:card']) {
    warnings.push({ type: 'warning', message: 'Missing Twitter Card tags', fix: 'Add twitter:card meta tag for better Twitter sharing.' });
  } else {
    passed.push({ message: 'Twitter Card tags present' });
  }

  // Canonical
  if (!canonical) {
    warnings.push({ type: 'warning', message: 'No canonical URL specified', fix: 'Add a <link rel="canonical"> to prevent duplicate content issues.' });
  } else {
    passed.push({ message: 'Canonical URL is defined' });
  }

  // Viewport
  if (!viewport) {
    issues.push({ type: 'critical', message: 'Missing viewport meta tag', fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1.0"> for mobile responsiveness.' });
  } else {
    passed.push({ message: 'Viewport meta tag is present' });
  }

  return { title, metaDesc, metaKeywords, canonical, robots, viewport, og, twitter, issues, warnings, passed };
}

/* ========== HEADING ANALYSIS ========== */
function analyzeHeadings(doc) {
  const headings = { h1: [], h2: [], h3: [], h4: [], h5: [], h6: [] };
  const hierarchy = [];
  const issues = [];
  const warnings = [];
  const passed = [];

  for (let i = 1; i <= 6; i++) {
    doc.querySelectorAll(`h${i}`).forEach(el => {
      const text = el.textContent.trim();
      headings[`h${i}`].push(text);
      hierarchy.push({ level: i, text });
    });
  }

  if (headings.h1.length === 0) {
    issues.push({ type: 'critical', message: 'Missing H1 tag', fix: 'Add exactly one H1 tag that describes the main topic of the page.' });
  } else if (headings.h1.length > 1) {
    warnings.push({ type: 'warning', message: `Multiple H1 tags found (${headings.h1.length})`, fix: 'Use only one H1 tag per page for proper heading hierarchy.' });
  } else {
    passed.push({ message: 'Single H1 tag present' });
  }

  if (headings.h2.length === 0 && hierarchy.length > 1) {
    warnings.push({ type: 'warning', message: 'No H2 tags found', fix: 'Use H2 tags to structure your content into sections.' });
  } else if (headings.h2.length > 0) {
    passed.push({ message: `${headings.h2.length} H2 tags found — good structure` });
  }

  // Check for skipped levels
  const usedLevels = Array.from(new Set(hierarchy.map(h => h.level))).sort();
  for (let i = 1; i < usedLevels.length; i++) {
    if (usedLevels[i] - usedLevels[i-1] > 1) {
      warnings.push({ type: 'warning', message: `Heading level skipped: H${usedLevels[i-1]} to H${usedLevels[i]}`, fix: 'Maintain proper heading hierarchy without skipping levels.' });
    }
  }

  const totalHeadings = hierarchy.length;
  return { headings, hierarchy, totalHeadings, issues, warnings, passed };
}

/* ========== IMAGE ANALYSIS ========== */
function analyzeImages(doc) {
  const images = [];
  const issues = [];
  const warnings = [];
  const passed = [];
  let missingAlt = 0;
  let hasLazyLoading = 0;

  doc.querySelectorAll('img').forEach(img => {
    const src = img.getAttribute('src') || '';
    const alt = img.getAttribute('alt');
    const loading = img.getAttribute('loading');
    const width = img.getAttribute('width');
    const height = img.getAttribute('height');

    const hasAlt = alt !== null && alt.trim() !== '';
    if (!hasAlt) missingAlt++;
    if (loading === 'lazy') hasLazyLoading++;

    images.push({ src: src.substring(0, 80), alt: alt || '', hasAlt, loading, width, height });
  });

  const total = images.length;
  if (total === 0) {
    passed.push({ message: 'No images found on page (or all are CSS backgrounds)' });
  } else {
    if (missingAlt > 0) {
      issues.push({ type: 'critical', message: `${missingAlt} image(s) missing ALT text`, fix: 'Add descriptive alt attributes to all images for accessibility and SEO.' });
    } else {
      passed.push({ message: 'All images have ALT attributes' });
    }

    const lazyPct = Math.round((hasLazyLoading / total) * 100);
    if (lazyPct < 50 && total > 3) {
      warnings.push({ type: 'warning', message: `Only ${lazyPct}% of images use lazy loading`, fix: 'Add loading="lazy" to below-the-fold images for better performance.' });
    } else if (total > 3) {
      passed.push({ message: `${lazyPct}% of images use lazy loading` });
    }
  }

  return { images, total, missingAlt, hasLazyLoading, issues, warnings, passed };
}

/* ========== LINK ANALYSIS ========== */
function analyzeLinks(doc, baseUrl) {
  const internal = [];
  const external = [];
  const issues = [];
  const warnings = [];
  const passed = [];
  let nofollow = 0;
  let emptyAnchors = 0;

  try {
    const base = new URL(baseUrl);
    doc.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href') || '';
      const text = a.textContent.trim();
      const rel = a.getAttribute('rel') || '';
      
      if (rel.includes('nofollow')) nofollow++;
      if (!text && !a.querySelector('img')) emptyAnchors++;

      try {
        const linkUrl = new URL(href, baseUrl);
        if (linkUrl.hostname === base.hostname) {
          internal.push({ href: linkUrl.pathname, text: text.substring(0, 50), rel });
        } else {
          external.push({ href: linkUrl.href.substring(0, 80), text: text.substring(0, 50), rel });
        }
      } catch {
        if (href.startsWith('/') || href.startsWith('#') || href.startsWith('.')) {
          internal.push({ href, text: text.substring(0, 50), rel });
        }
      }
    });
  } catch { /* ignore URL parse errors */ }

  if (internal.length === 0) {
    warnings.push({ type: 'warning', message: 'No internal links found', fix: 'Add internal links to improve site navigation and distribute page authority.' });
  } else {
    passed.push({ message: `${internal.length} internal links found` });
  }

  if (emptyAnchors > 0) {
    warnings.push({ type: 'warning', message: `${emptyAnchors} link(s) with empty anchor text`, fix: 'Use descriptive anchor text for all links.' });
  }

  if (external.length > 0) {
    passed.push({ message: `${external.length} external links found` });
  }

  return { internal, external, nofollow, emptyAnchors, totalLinks: internal.length + external.length, issues, warnings, passed };
}

/* ========== CONTENT ANALYSIS ========== */
function analyzeContent(doc) {
  const body = doc.body;
  const text = body?.innerText || body?.textContent || '';
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const wordCount = words.length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 10);
  const paragraphs = doc.querySelectorAll('p').length;
  
  const issues = [];
  const warnings = [];
  const passed = [];

  // Word count
  if (wordCount < 300) {
    issues.push({ type: 'critical', message: `Thin content detected (${wordCount} words)`, fix: 'Aim for at least 300 words. Long-form content (1000+) tends to rank better.' });
  } else if (wordCount < 600) {
    warnings.push({ type: 'warning', message: `Low word count (${wordCount} words)`, fix: 'Consider expanding content to 800+ words for better search performance.' });
  } else {
    passed.push({ message: `Good content length (${wordCount} words)` });
  }

  // Readability (simplified Flesch-Kincaid)
  const avgWordsPerSentence = sentences.length > 0 ? wordCount / sentences.length : 0;
  const avgSyllables = words.length > 0 ? words.reduce((sum, w) => sum + countSyllables(w), 0) / words.length : 0;
  const readabilityScore = Math.max(0, Math.min(100, Math.round(206.835 - 1.015 * avgWordsPerSentence - 84.6 * avgSyllables)));

  let readabilityLevel = 'Very Difficult';
  if (readabilityScore >= 80) readabilityLevel = 'Very Easy';
  else if (readabilityScore >= 60) readabilityLevel = 'Easy';
  else if (readabilityScore >= 40) readabilityLevel = 'Moderate';
  else if (readabilityScore >= 20) readabilityLevel = 'Difficult';

  // Keyword density (top keywords)
  const wordFreq = {};
  const stopWords = new Set(['the','a','an','is','are','was','were','be','been','being','have','has','had','do','does','did','will','would','could','should','may','might','can','shall','and','but','or','nor','not','so','yet','for','to','of','in','on','at','by','with','from','as','into','through','during','before','after','above','below','between','under','about','this','that','these','those','it','its','i','me','my','we','our','you','your','he','him','his','she','her','they','them','their','what','which','who','whom','how','all','each','every','both','few','more','most','other','some','such','no','only','same','than','too','very']);
  
  words.forEach(w => {
    const lower = w.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (lower.length > 2 && !stopWords.has(lower)) {
      wordFreq[lower] = (wordFreq[lower] || 0) + 1;
    }
  });

  const topKeywords = Object.entries(wordFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([word, count]) => ({
      word,
      count,
      density: ((count / wordCount) * 100).toFixed(2)
    }));

  return { wordCount, sentences: sentences.length, paragraphs, readabilityScore, readabilityLevel, topKeywords, issues, warnings, passed };
}

function countSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  const m = word.match(/[aeiouy]{1,2}/g);
  return m ? m.length : 1;
}

/* ========== SCHEMA ANALYSIS ========== */
function analyzeSchema(doc) {
  const schemas = [];
  const issues = [];
  const warnings = [];
  const passed = [];

  // JSON-LD
  doc.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
    try {
      const data = JSON.parse(script.textContent);
      const types = Array.isArray(data['@type']) ? data['@type'] : [data['@type']];
      types.forEach(type => {
        if (type) schemas.push({ format: 'JSON-LD', type, valid: true });
      });
      // Check for @graph
      if (data['@graph']) {
        data['@graph'].forEach(item => {
          if (item['@type']) schemas.push({ format: 'JSON-LD', type: item['@type'], valid: true });
        });
      }
    } catch {
      schemas.push({ format: 'JSON-LD', type: 'Parse Error', valid: false });
      issues.push({ type: 'critical', message: 'Invalid JSON-LD schema markup', fix: 'Fix JSON syntax errors in your structured data.' });
    }
  });

  // Microdata
  doc.querySelectorAll('[itemtype]').forEach(el => {
    const type = el.getAttribute('itemtype')?.split('/').pop() || 'Unknown';
    schemas.push({ format: 'Microdata', type, valid: true });
  });

  if (schemas.length === 0) {
    warnings.push({ type: 'warning', message: 'No structured data (schema markup) found', fix: 'Add JSON-LD schema markup to help search engines understand your content.' });
  } else {
    passed.push({ message: `${schemas.length} schema type(s) detected` });
  }

  return { schemas, total: schemas.length, issues, warnings, passed };
}

/* ========== TECHNICAL ANALYSIS ========== */
function analyzeTechnical(doc, url, html) {
  const issues = [];
  const warnings = [];
  const passed = [];

  // Check for charset
  const charset = doc.querySelector('meta[charset]') || doc.querySelector('meta[http-equiv="Content-Type"]');
  if (charset) {
    passed.push({ message: 'Character encoding is declared' });
  } else {
    warnings.push({ type: 'warning', message: 'No character encoding declared', fix: 'Add <meta charset="UTF-8"> to ensure proper text rendering.' });
  }

  // Language attribute
  const lang = doc.documentElement.getAttribute('lang');
  if (lang) {
    passed.push({ message: `Language attribute set: ${lang}` });
  } else {
    warnings.push({ type: 'warning', message: 'Missing lang attribute on <html>', fix: 'Add lang="en" (or appropriate language) to the <html> tag.' });
  }

  // Check for favicon
  const favicon = doc.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
  if (favicon) {
    passed.push({ message: 'Favicon is defined' });
  } else {
    warnings.push({ type: 'warning', message: 'No favicon detected', fix: 'Add a favicon for better browser tab visibility and bookmarks.' });
  }

  // HTML size
  const htmlSize = new Blob([html]).size;
  const htmlSizeKb = Math.round(htmlSize / 1024);
  if (htmlSizeKb > 500) {
    warnings.push({ type: 'warning', message: `Large HTML size (${htmlSizeKb} KB)`, fix: 'Reduce HTML bloat by removing inline styles, unused elements, and excessive whitespace.' });
  } else {
    passed.push({ message: `HTML size is acceptable (${htmlSizeKb} KB)` });
  }

  // Inline styles count
  const inlineStyles = doc.querySelectorAll('[style]').length;
  if (inlineStyles > 20) {
    warnings.push({ type: 'warning', message: `${inlineStyles} elements with inline styles`, fix: 'Move inline styles to external CSS files for better caching and maintenance.' });
  }

  // Deprecated tags
  const deprecated = ['font', 'center', 'marquee', 'blink', 'frame', 'frameset'];
  deprecated.forEach(tag => {
    const found = doc.querySelectorAll(tag).length;
    if (found > 0) {
      issues.push({ type: 'critical', message: `Deprecated <${tag}> tag found (${found} instances)`, fix: `Replace <${tag}> with modern CSS equivalents.` });
    }
  });

  // Check doctype
  if (html.trimStart().toLowerCase().startsWith('<!doctype html>') || html.trimStart().toLowerCase().startsWith('<!doctype html ')) {
    passed.push({ message: 'Valid HTML5 doctype' });
  } else {
    warnings.push({ type: 'warning', message: 'Missing or invalid doctype', fix: 'Add <!DOCTYPE html> at the beginning of your HTML.' });
  }

  return { htmlSizeKb, inlineStyles, lang, hasFavicon: !!favicon, hasCharset: !!charset, issues, warnings, passed };
}

/* ========== SECURITY ANALYSIS ========== */
function analyzeSecurity(url) {
  const issues = [];
  const warnings = [];
  const passed = [];

  const isHttps = url.startsWith('https://');
  if (isHttps) {
    passed.push({ message: 'Site uses HTTPS' });
  } else {
    issues.push({ type: 'critical', message: 'Site does not use HTTPS', fix: 'Install an SSL certificate and redirect all HTTP traffic to HTTPS.' });
  }

  return { isHttps, issues, warnings, passed };
}

/* ========== SCORE CALCULATION ========== */
function calculateScores(results) {
  const calcModuleScore = (module) => {
    const total = (module.issues?.length || 0) + (module.warnings?.length || 0) + (module.passed?.length || 0);
    if (total === 0) return 80;
    const issueWeight = (module.issues?.length || 0) * 15;
    const warningWeight = (module.warnings?.length || 0) * 5;
    return Math.max(0, Math.min(100, Math.round(100 - issueWeight - warningWeight)));
  };

  const metaScore = calcModuleScore(results.meta);
  const headingScore = calcModuleScore(results.headings);
  const imageScore = calcModuleScore(results.images);
  const linkScore = calcModuleScore(results.links);
  const contentScore = calcModuleScore(results.content);
  const schemaScore = calcModuleScore(results.schema);
  const techScore = calcModuleScore(results.technical);
  const securityScore = calcModuleScore(results.security);
  const localScore = calcModuleScore(results.localSeo);

  const seoScore = Math.round((metaScore * 0.25 + headingScore * 0.15 + contentScore * 0.2 + linkScore * 0.15 + schemaScore * 0.1 + imageScore * 0.15));
  const healthScore = Math.round((techScore * 0.3 + securityScore * 0.3 + metaScore * 0.2 + imageScore * 0.2));
  const performanceScore = Math.round(Math.max(20, 100 - results.loadTime / 50));
  const technicalScore = Math.round((techScore * 0.5 + securityScore * 0.3 + headingScore * 0.2));
  const uxScore = Math.round((contentScore * 0.3 + imageScore * 0.2 + linkScore * 0.2 + (results.meta.viewport ? 30 : 0)));

  const overall = Math.round((seoScore * 0.3 + healthScore * 0.2 + performanceScore * 0.15 + technicalScore * 0.2 + contentScore * 0.15));

  return {
    overall, seo: seoScore, health: healthScore, performance: performanceScore,
    technical: technicalScore, content: contentScore, ux: uxScore,
    meta: metaScore, heading: headingScore, image: imageScore,
    link: linkScore, schema: schemaScore, security: securityScore, localSeo: localScore,
  };
}

/* ========== ISSUE COLLECTION ========== */
function collectIssues(results) {
  const all = { critical: [], warnings: [], opportunities: [], passed: [] };
  const modules = ['meta', 'headings', 'images', 'links', 'content', 'schema', 'technical', 'security', 'localSeo'];
  
  modules.forEach(mod => {
    const m = results[mod];
    if (m.issues) m.issues.forEach(i => all.critical.push({ ...i, module: mod }));
    if (m.warnings) m.warnings.forEach(w => all.warnings.push({ ...w, module: mod }));
    if (m.passed) m.passed.forEach(p => all.passed.push({ ...p, module: mod }));
  });

  return all;
}

/* ========== LOCAL SEO ANALYSIS ========== */
function analyzeLocalSeo(doc) {
  const issues = [];
  const warnings = [];
  const passed = [];
  
  let hasLocalSchema = false;
  let hasGoogleMaps = false;
  let hasPhoneLink = false;
  let hasEmailLink = false;
  let phoneNumbers = [];
  let emails = [];

  // Check Schema for LocalBusiness, Organization, etc.
  doc.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
    try {
      const data = JSON.parse(script.textContent);
      const strData = JSON.stringify(data).toLowerCase();
      if (strData.includes('localbusiness') || strData.includes('organization') || strData.includes('restaurant') || strData.includes('hotel') || strData.includes('travelagency')) {
        hasLocalSchema = true;
      }
    } catch { }
  });

  // Check for Maps
  doc.querySelectorAll('iframe').forEach(iframe => {
    const src = iframe.getAttribute('src') || '';
    if (src.includes('google.com/maps') || src.includes('maps.google.com')) {
      hasGoogleMaps = true;
    }
  });

  // Check Contact Links
  doc.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.startsWith('tel:')) {
      hasPhoneLink = true;
      phoneNumbers.push(href.replace('tel:', ''));
    }
    if (href.startsWith('mailto:')) {
      hasEmailLink = true;
      emails.push(href.replace('mailto:', ''));
    }
  });

  if (hasLocalSchema) {
    passed.push({ message: 'LocalBusiness/Organization schema detected' });
  } else {
    warnings.push({ type: 'warning', message: 'No LocalBusiness schema found', fix: 'Add JSON-LD LocalBusiness schema to help search engines understand your location.' });
  }

  if (hasGoogleMaps) {
    passed.push({ message: 'Google Maps embed found' });
  } else {
    warnings.push({ type: 'warning', message: 'No embedded map detected', fix: 'Embed a Google Map of your business location to boost local trust.' });
  }

  if (hasPhoneLink) {
    passed.push({ message: `Clickable phone links found (${phoneNumbers.length})` });
  } else {
    warnings.push({ type: 'warning', message: 'No clickable phone numbers (tel:) found', fix: 'Make phone numbers clickable for mobile users.' });
  }

  if (hasEmailLink) {
    passed.push({ message: `Clickable email links found (${emails.length})` });
  } else {
    warnings.push({ type: 'warning', message: 'No clickable email addresses (mailto:) found', fix: 'Provide an easy way for customers to email you directly.' });
  }
  
  phoneNumbers = [...new Set(phoneNumbers)];
  emails = [...new Set(emails)];

  return { hasLocalSchema, hasGoogleMaps, hasPhoneLink, hasEmailLink, phoneNumbers, emails, issues, warnings, passed };
}

