import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

const validAddress = `"address": {
          "@type": "PostalAddress",
          "streetAddress": "Blue Area",
          "addressLocality": "Islamabad",
          "addressRegion": "Islamabad Capital Territory",
          "postalCode": "44000",
          "addressCountry": "PK"
        }`;

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // 1. Fix TravelAgency Address
      // Add validAddress to TravelAgency if missing
      // Replace "address": "Islamabad, Pakistan" in blogPosts.js
      if (content.includes('"@type": "TravelAgency"')) {
        if (content.includes('"address": "Islamabad, Pakistan"')) {
          content = content.replace(/"address": "Islamabad, Pakistan"/g, validAddress);
          changed = true;
        } else if (!content.includes('PostalAddress')) {
          content = content.replace(/"url": "https:\/\/harmaintravels\.com"/g, `"url": "https://harmaintravels.com",\n        ${validAddress}`);
          changed = true;
        }
      }

      // 2. Shorten Titles
      const titleMatches = content.match(/title={?(["'`].*?["'`])}?/g);
      if (titleMatches) {
        for (const match of titleMatches) {
          const originalTitleMatch = match.match(/["'`](.*)["'`]/);
          if (originalTitleMatch) {
            const originalTitle = originalTitleMatch[1];
            if (originalTitle.length > 70 && !originalTitle.includes('${')) {
              // Shorten logic
              let newTitle = originalTitle.split('|')[0].trim();
              if (newTitle.length > 70) {
                 newTitle = newTitle.substring(0, 67) + '...';
              }
              content = content.replace(match, match.replace(originalTitle, newTitle));
              changed = true;
            }
          }
        }
      }

      // blogPosts.js title field
      if (fullPath.includes('blogPosts.js')) {
        const titleRegex = /title:\s*["']([^"']+)["']/g;
        let match;
        while ((match = titleRegex.exec(content)) !== null) {
          if (match[1].length > 70) {
            let newTitle = match[1].split('|')[0].trim();
            if (newTitle.length > 70) {
              newTitle = newTitle.substring(0, 67) + '...';
            }
            content = content.replace(`title: "${match[1]}"`, `title: "${newTitle}"`);
            changed = true;
          }
        }

        // Fix images
        if (content.includes('1591604129939-f1efa4d9f7fa')) {
          content = content.replace(/1591604129939-f1efa4d9f7fa/g, '1591604129939-f1efa4d8f7ec');
          changed = true;
        }
        if (content.includes('1512453979798-5ea266f8880c')) {
          content = content.replace(/1512453979798-5ea266f8880c/g, '1512453979798-5eaad0ff3b0d');
          changed = true;
        }
      }
      
      // asianRegions.js fix images
      if (fullPath.includes('asianRegions.js')) {
         if (content.includes('1534067783941-51c9c23ecefd')) {
           content = content.replace(/1534067783941-51c9c23ecefd/g, '1534067783941-51c9c23eccfd');
           changed = true;
         }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log('Done fixing SEO data.');
