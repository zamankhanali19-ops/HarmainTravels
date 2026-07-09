import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the existing data
import { asianRegions } from '../src/data/asianRegions.js';

// Deep content data for specific popular destinations
const specificData = {
  'Saudi Arabia': {
    highlights: [
      'Perform Umrah with premium 5-Star accommodations near the Haram.',
      'Visit historical Ziarat sites in Makkah and Madinah.',
      'Explore the breathtaking ancient nabatean tombs of AlUla.',
      'Experience modern luxury in Riyadh and Jeddah.'
    ],
    bestTimeToVisit: 'October to March (Cooler weather).',
    geoTarget: 'VIP Umrah packages and Saudi tours from Islamabad.',
    faq: [
      { q: 'Can I get a Saudi Tourist E-Visa?', a: 'Pakistanis can get a 1-year multiple entry E-Visa ONLY if they hold a valid US, UK, or Schengen visa that has been used at least once.' },
      { q: 'How long does the Umrah visa take?', a: 'Standard Umrah e-visas through our agency take 24 to 48 hours.' }
    ],
    visaDetails: {
      fee: 'PKR 65,000 (Incl. Service)',
      processingTime: '24-48 Hours',
      requirements: [
        'Scanned Passport copy (Valid for 6 months).',
        'Passport size photo with white background.',
        'Biometrics (if requested via Saudi Visa Bio app).',
        'For Tourist Visa: Valid UK/US/Schengen visa required.'
      ]
    }
  },
  'UAE (Dubai)': {
    highlights: [
      'Go to the top of the Burj Khalifa, the tallest building in the world.',
      'Experience a luxury desert safari with dune bashing and VIP dinner.',
      'Shop at the massive Dubai Mall.',
      'Stay at iconic hotels like Atlantis The Palm.'
    ],
    bestTimeToVisit: 'November to March (Pleasant weather).',
    geoTarget: 'Dubai visa and holiday packages from Islamabad, Pakistan.',
    faq: [
      { q: 'How quickly can I get a Dubai visa?', a: 'Dubai visas typically process in 2 to 4 working days.' },
      { q: 'What is the age restriction?', a: 'Currently, there are strict approvals for single males under certain ages or professions. Families face no issues.' }
    ],
    visaDetails: {
      fee: 'PKR 30,000 (30-Day Incl. Service) / PKR 50,000 (60-Day)',
      processingTime: '2-4 Working Days',
      requirements: [
        'Clear Passport copy (Bio page).',
        'Passport-size photo with white background.',
        'CNIC Copy (Front and Back).',
        'Guarantor details may be required for single applicants.'
      ]
    }
  },
  'Turkey': {
    highlights: [
      'Float over the fairy chimneys of Cappadocia in a hot air balloon.',
      'Explore the stunning Hagia Sophia and Blue Mosque in Istanbul.',
      'Sail on a luxury yacht cruise along the Bosphorus Strait.',
      'Bathe in the thermal travertine pools of Pamukkale.'
    ],
    bestTimeToVisit: 'April to May (Spring) and September to October (Autumn).',
    geoTarget: 'Turkey luxury tours and visa processing from Islamabad.',
    faq: [
      { q: 'Can Pakistanis get a Turkey E-Visa?', a: 'Yes, but ONLY if you hold a valid physical visa or residence permit for the US, UK, Ireland, or Schengen zone. Otherwise, a Sticker Visa is required.' },
      { q: 'Where do I apply for the sticker visa?', a: 'Applications must go through Anatolia Travel Services visa drop box centers in Pakistan.' }
    ],
    visaDetails: {
      fee: 'PKR 55,000 (Incl. Service)',
      processingTime: '15-20 Working Days',
      requirements: [
        'Original Passport (6 months validity).',
        'Bank statement (Last 6 months) with account maintenance letter.',
        'Polio vaccination certificate.',
        'Employment letter or FBR NTN and tax returns.',
        'Confirmed hotel and flight reservations.'
      ]
    }
  },
  'Malaysia': {
    highlights: [
      'Take in the views from the iconic Petronas Twin Towers in Kuala Lumpur.',
      'Relax on the pristine beaches of Langkawi Island.',
      'Enjoy a thrilling day at Genting Highlands theme park.',
      'Explore the heritage streets of Penang.'
    ],
    bestTimeToVisit: 'March to early November.',
    geoTarget: 'Malaysia family holiday packages from Islamabad, Pakistan.',
    faq: [
      { q: 'Is it an E-Visa or Sticker Visa for Malaysia?', a: 'Pakistanis can easily apply for the Malaysia e-Visa online.' },
      { q: 'Is polio vaccination required?', a: 'A polio vaccination certificate is highly recommended when departing from Pakistan.' }
    ],
    visaDetails: {
      fee: 'PKR 15,000 (Incl. Service)',
      processingTime: '3-5 Working Days',
      requirements: [
        'Scanned Passport copy (bio page).',
        'Digital passport-size photo (white background).',
        'Confirmed return flight ticket.',
        'Confirmed hotel accommodation.',
        'Bank statement (Last 3 months).'
      ]
    }
  },
  'Thailand': {
    highlights: [
      'Island hopping in Phuket and the Phi Phi Islands.',
      'Shopping and street food in bustling Bangkok.',
      'Explore the ancient temples of Ayutthaya and Chiang Mai.',
      'Experience world-class Thai massages and spas.'
    ],
    bestTimeToVisit: 'November to early April.',
    geoTarget: 'Thailand luxury holiday packages departing from Islamabad.',
    faq: [
      { q: 'Can Pakistanis get a Visa on Arrival in Thailand?', a: 'No, Pakistani passport holders must apply for a visa prior to travel.' },
      { q: 'What is the minimum bank balance required?', a: 'A closing balance of at least PKR 500,000 for a single person is recommended.' }
    ],
    visaDetails: {
      fee: 'PKR 20,000 (Incl. Service)',
      processingTime: '10-15 Working Days',
      requirements: [
        'Original Passport (6 months validity).',
        'Bank Statement (Last 6 months) with account maintenance letter.',
        'Confirmed hotel bookings and return ticket.',
        'Two passport-sized photos (white background).',
        'Employment letter or business NTN.'
      ]
    }
  }
};

// Generic content generator for countries without specific data
function generateGenericData(country) {
  return {
    highlights: [
      `Experience the unique culture and traditions of ${country.name}.`,
      `Explore top tourist attractions including ${country.famousPlace}.`,
      `Enjoy guided luxury tours across the best landscapes in ${country.name}.`,
      `Stay in premium handpicked accommodations tailored for your comfort.`
    ],
    bestTimeToVisit: 'Consult our travel experts for the best seasonal travel packages.',
    geoTarget: `Exclusive ${country.name} holiday packages departing from Islamabad, Pakistan.`,
    faq: [
      { q: `Do Pakistani citizens need a visa for ${country.name}?`, a: `Visa requirements vary. Please contact our visa consultants for the latest updates on ${country.name} visa processing for Pakistani passports.` },
      { q: `What is included in the ${country.name} tour package?`, a: 'Our premium packages typically include luxury accommodation, guided tours, airport transfers, and 24/7 support.' }
    ],
    visaDetails: {
      fee: 'Subject to Embassy/Consulate updates',
      processingTime: 'Varies by visa type',
      requirements: [
        'Original Passport with at least 6 months validity.',
        'Passport-sized photographs with white background.',
        'Bank statement for the last 6 months.',
        'Confirmed return flight tickets and hotel bookings.',
        'National Identity Card (CNIC).'
      ]
    }
  };
}

// Map over regions and inject data
const enrichedRegions = asianRegions.map(region => ({
  ...region,
  countries: region.countries.map(country => {
    const data = specificData[country.name] || generateGenericData(country);
    return { ...country, ...data };
  })
}));

// Generate the new file content
const fileContent = `export const asianRegions = ${JSON.stringify(enrichedRegions, null, 2)};\n`;

const outputPath = path.join(__dirname, '../src/data/asianRegions.js');
fs.writeFileSync(outputPath, fileContent, 'utf-8');

console.log('Successfully enriched asianRegions.js with deep SEO data.');
