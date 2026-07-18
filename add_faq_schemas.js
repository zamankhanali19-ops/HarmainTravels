import fs from 'fs';

const hotelsFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can Harmain Travels book 5-star hotels near the Haram in Makkah?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We are official partners with the Fairmont Makkah Clock Royal Tower, Swissôtel Al Maqam, and Conrad Makkah. We offer exclusive rates and Haram-view rooms for Umrah and Hajj pilgrims from Pakistan."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer hotel booking for international destinations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Harmain Travels provides luxury hotel bookings worldwide including Dubai, Maldives, Turkey, Thailand, Singapore, and Europe. We secure exclusive VIP rates and amenities at premium properties."
      }
    }
  ]
};

const hajjFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a Hajj package cost from Pakistan in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hajj packages from Pakistan vary based on accommodation tier. Economy packages start around PKR 900,000, while our VIP 5-star packages with tents in Mina and proximity to the Haram start from PKR 1,500,000. Contact Harmain Travels for the latest pricing."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in a luxury Hajj package from Harmain Travels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our premium Hajj packages include 5-star hotel stays near the Haram in Makkah and Madinah, VIP air-conditioned tents in Mina and Arafat, direct flights, ground transport, guided Ziyarat, and 24/7 support from experienced Hajj coordinators."
      }
    }
  ]
};

function addFaqSchemaToFile(filePath, faqSchema) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find "const schema = {" and its matching closing "};"
  const schemaStart = content.indexOf('const schema = {');
  if (schemaStart === -1) {
    console.log(`Skipping ${filePath} - no "const schema = {" found`);
    return;
  }
  
  // Find the matching closing brace by counting braces
  let braceCount = 0;
  let schemaEnd = -1;
  const searchStart = content.indexOf('{', schemaStart);
  
  for (let i = searchStart; i < content.length; i++) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') braceCount--;
    if (braceCount === 0) {
      schemaEnd = i;
      break;
    }
  }
  
  if (schemaEnd === -1) {
    console.log(`Skipping ${filePath} - could not find matching brace`);
    return;
  }
  
  // Check if followed by ";"
  let semiPos = schemaEnd + 1;
  while (semiPos < content.length && (content[semiPos] === ' ' || content[semiPos] === '\r' || content[semiPos] === '\n')) {
    semiPos++;
  }
  
  // Extract the original schema object
  const originalSchema = content.substring(searchStart, schemaEnd + 1);
  
  // Build the new array with both schemas
  const faqJson = JSON.stringify(faqSchema, null, 6).replace(/\n/g, '\n    ');
  const newSchemaValue = `[\n    ${originalSchema},\n    ${faqJson}\n  ]`;
  
  // Replace "const schema = {..." with "const schema = [...]"
  const before = content.substring(0, schemaStart + 'const schema = '.length);
  // Find the semicolon after the closing brace
  const afterSemicolon = content.indexOf(';', schemaEnd);
  const after = content.substring(afterSemicolon + 1);
  
  content = before + newSchemaValue + ';' + after;
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

addFaqSchemaToFile('d:/website data/HarmainTravels/src/pages/Hotels.jsx', hotelsFaq);
addFaqSchemaToFile('d:/website data/HarmainTravels/src/pages/Hajj.jsx', hajjFaq);

console.log('Done!');
