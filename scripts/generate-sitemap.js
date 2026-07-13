import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { asianRegions } from '../src/data/asianRegions.js';
import { blogPosts } from '../src/data/blogPosts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://harmaintravels.com';
const currentDate = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'asia-tours', priority: '0.8', changefreq: 'weekly' },
  { path: 'hotels', priority: '0.8', changefreq: 'weekly' },
  { path: 'flights', priority: '0.8', changefreq: 'weekly' },
  { path: 'services', priority: '0.8', changefreq: 'weekly' },
  { path: 'umrah-packages', priority: '0.8', changefreq: 'weekly' },
  { path: 'hajj-packages', priority: '0.8', changefreq: 'weekly' },
  { path: 'visa-services', priority: '0.8', changefreq: 'weekly' },
  { path: 'blog', priority: '0.8', changefreq: 'weekly' },
  { path: 'about', priority: '0.8', changefreq: 'monthly' },
  { path: 'contact', priority: '0.8', changefreq: 'monthly' },
  { path: 'privacy-policy', priority: '0.5', changefreq: 'yearly' },
  { path: 'terms-and-conditions', priority: '0.5', changefreq: 'yearly' }
];

const urls = [];

// Add static routes
for (const route of staticRoutes) {
  const urlPath = route.path ? `/${route.path}` : '/';
  urls.push({
    loc: `${BASE_URL}${urlPath}`,
    lastmod: currentDate,
    changefreq: route.changefreq,
    priority: route.priority
  });
}

// Add country routes
for (const region of asianRegions) {
  for (const country of region.countries) {
    const slug = country.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
    urls.push({
      loc: `${BASE_URL}/asia-tours/${slug}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.6'
    });
  }
}

// Add blog routes
for (const post of blogPosts) {
  urls.push({
    loc: `${BASE_URL}/blog/${post.slug}`,
    lastmod: post.date || currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  });
}

// Generate XML
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (const url of urls) {
  xml += '  <url>\n';
  xml += `    <loc>${url.loc}</loc>\n`;
  xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
  xml += `    <priority>${url.priority}</priority>\n`;
  xml += '  </url>\n';
}

xml += '</urlset>\n';

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');

console.log(`Sitemap successfully generated at: ${outputPath}`);
console.log(`Total URLs generated: ${urls.length}`);
