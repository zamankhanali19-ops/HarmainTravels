import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import puppeteer from 'puppeteer';
import { asianRegions } from '../src/data/asianRegions.js';
import { blogPosts } from '../src/data/blogPosts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../dist');

// --- Static routes matching React Router in App.jsx ---
const staticRoutes = [
  '',
  'asia-tours',
  'hotels',
  'flights',
  'services',
  'umrah-packages',
  'hajj-packages',
  'visa-services',
  'blog',
  'about',
  'contact',
  'privacy-policy',
  'terms-and-conditions'
];

const pathsToPrerender = [...staticRoutes];

// Add country detail routes (matching /asia-tours/:countrySlug)
for (const region of asianRegions) {
  for (const country of region.countries) {
    const slug = country.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
    pathsToPrerender.push(`asia-tours/${slug}`);
  }
}

// Add blog post routes (matching /blog/:slug)
for (const post of blogPosts) {
  pathsToPrerender.push(`blog/${post.slug}`);
}

async function startServer() {
  const app = express();
  
  // Serve static files from dist
  app.use(express.static(distPath));
  
  // Create a backup of the original index.html before we start overwriting it
  const originalIndexPath = path.join(distPath, 'original-index.html');
  if (!fs.existsSync(originalIndexPath)) {
    fs.copyFileSync(path.join(distPath, 'index.html'), originalIndexPath);
  }

  // Fallback to original-index.html for SPA routing (Express v5 syntax)
  app.get('/{*path}', (req, res) => {
    res.sendFile(originalIndexPath);
  });

  return new Promise((resolve) => {
    const server = app.listen(0, () => {
      resolve({ server, port: server.address().port });
    });
  });
}

/**
 * Strip localhost modulepreload links that leak from the dev server
 * into prerendered HTML. These break production and confuse crawlers.
 */
function cleanHtml(html, port) {
  // Remove any <link> tags pointing to localhost (modulepreload leaks)
  html = html.replace(/<link[^>]*href="http:\/\/localhost[^"]*"[^>]*>/gi, '');
  // Also remove any script tags pointing to localhost
  html = html.replace(/<script[^>]*src="http:\/\/localhost[^"]*"[^>]*><\/script>/gi, '');
  return html;
}

async function prerender() {
  console.log(`Starting prerender process for ${pathsToPrerender.length} pages...`);
  const { server, port } = await startServer();
  const baseUrl = `http://localhost:${port}`;
  
  let browser;
  if (process.env.VERCEL === '1') {
    const chromium = (await import('@sparticuz/chromium')).default;
    const puppeteerCore = (await import('puppeteer-core')).default;
    browser = await puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  } else {
    browser = await puppeteer.launch({
      headless: true,
    });
  }
  const page = await browser.newPage();
  
  let successCount = 0;
  let failCount = 0;

  for (const route of pathsToPrerender) {
    const url = `${baseUrl}/${route}`;
    console.log(`Rendering: /${route}`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Give React a small moment to fully render dynamic parts
      await new Promise(resolve => setTimeout(resolve, 500));
      
      let html = await page.evaluate(() => document.documentElement.outerHTML);
      const doctype = '<!DOCTYPE html>';
      
      // Clean localhost references from the captured HTML
      html = cleanHtml(html, port);
      
      // Determine the output path
      let outputDir = path.join(distPath, route);
      if (route === '') {
        outputDir = distPath; // Root index.html will be overwritten
      } else {
        // Create directory for the route
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }
      }
      
      const outputPath = path.join(outputDir, 'index.html');
      fs.writeFileSync(outputPath, doctype + '\n' + html, 'utf8');
      successCount++;
      
    } catch (err) {
      console.error(`Failed to render /${route}:`, err.message);
      failCount++;
    }
  }

  await browser.close();
  server.close();
  console.log(`\nPrerendering complete! ${successCount} succeeded, ${failCount} failed.`);
}

prerender().catch(console.error);
