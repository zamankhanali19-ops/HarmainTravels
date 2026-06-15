import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import puppeteer from 'puppeteer';
import { asianRegions } from '../src/data/asianRegions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../dist');

const staticRoutes = [
  '',
  'destinations',
  'hotels',
  'flights',
  'services',
  'umrah',
  'about',
  'contact'
];

const pathsToPrerender = [...staticRoutes];

// Add country routes
for (const region of asianRegions) {
  for (const country of region.countries) {
    const slug = country.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    pathsToPrerender.push(`destinations/${slug}`);
  }
}

async function startServer() {
  const app = express();
  
  // Serve static files from dist
  app.use(express.static(distPath));
  
  // Fallback to index.html for SPA routing (Express v5 syntax)
  app.get('/{*path}', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });

  return new Promise((resolve) => {
    const server = app.listen(0, () => {
      resolve({ server, port: server.address().port });
    });
  });
}

async function prerender() {
  console.log(`Starting prerender process for ${pathsToPrerender.length} pages...`);
  const { server, port } = await startServer();
  const baseUrl = `http://localhost:${port}`;
  
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  for (const route of pathsToPrerender) {
    const url = `${baseUrl}/${route}`;
    console.log(`Rendering: /${route}`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Give React a small moment to fully render dynamic parts if needed
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const html = await page.evaluate(() => document.documentElement.outerHTML);
      const doctype = '<!DOCTYPE html>';
      
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
      
    } catch (err) {
      console.error(`Failed to render /${route}:`, err);
    }
  }

  await browser.close();
  server.close();
  console.log('Prerendering complete!');
}

prerender().catch(console.error);
