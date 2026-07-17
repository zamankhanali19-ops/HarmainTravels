import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import ServicesShowroom from '../components/home/ServicesShowroom';
import UmrahHajjSection from '../components/home/UmrahHajjSection';
import VisaFlightsSection from '../components/home/VisaFlightsSection';
import OfficialDropbox from '../components/home/OfficialDropbox';
import DestinationsGrid from '../components/home/DestinationsGrid';
import Statistics from '../components/home/Statistics';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import SEO from '../components/common/SEO';

const Home = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://harmaintravels.com/#organization",
      "name": "Harmain Travels",
      "alternateName": "Harmain Travel & Tours",
      "url": "https://harmaintravels.com/",
      "logo": "https://harmaintravels.com/logo.png",
      "foundingDate": "2010",
      "founders": [
        {
          "@type": "Person",
          "name": "Ali Zaman"
        },
        {
          "@type": "Person",
          "name": "Arslan Ahmed"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+923258880050",
        "contactType": "customer service",
        "email": "harmaintravelisb@gmail.com",
        "areaServed": "PK",
        "availableLanguage": ["English", "Urdu"]
      },
      "sameAs": [
        "https://www.facebook.com/harmaintravels",
        "https://www.instagram.com/harmaintravels"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "@id": "https://harmaintravels.com/#localbusiness",
      "name": "Harmain Travels Islamabad",
      "image": "https://harmaintravels.com/logo.png",
      "url": "https://harmaintravels.com/",
      "telephone": "+923258880050",
      "parentOrganization": {
        "@id": "https://harmaintravels.com/#organization"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No.15 1st floor Aalay Plaza Fazal-e-Haq road Blue Area",
        "addressLocality": "Islamabad",
        "addressRegion": "Islamabad Capital Territory",
        "postalCode": "44000",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.7294,
        "longitude": 73.0931
      },
      "priceRange": "$$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "ratingCount": "312"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Islamabad",
          "@id": "https://www.wikidata.org/wiki/Q1860"
        },
        {
          "@type": "City",
          "name": "Rawalpindi"
        },
        {
          "@type": "Country",
          "name": "Pakistan"
        }
      ],
      "hasMap": "https://maps.google.com/?cid=harmaintravels",
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VIP Umrah Packages from Islamabad",
            "serviceType": "Umrah Pilgrimage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Hajj Packages from Pakistan",
            "serviceType": "Hajj Pilgrimage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Global Visa Processing Services",
            "serviceType": "Visa Advisory"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "International Flight Ticketing",
            "serviceType": "Airline Ticketing"
          }
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Harmain Travels - Top Travel Agency in Blue Area Islamabad and Pakistan",
      "url": "https://harmaintravels.com/",
      "publisher": {
        "@id": "https://harmaintravels.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://harmaintravels.com/destinations?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg-primary text-brand-silver-light selection:bg-brand-red selection:text-white">
      <SEO 
        title="No. 1 Visa Agent & Top Travel Agency in Blue Area Islamabad and Pakistan | Harmain Travels"
        description="Harmain Travels is the top travel agency in Blue Area Islamabad and Pakistan. We are the best visa agent for global e-Visa, Visa Requirements from Pakistan, VIP Umrah, and flights."
        schema={schema}
      />
      <Navbar />
      
      <main>
        <HeroSection />
        <ServicesShowroom />
        <UmrahHajjSection />
        <VisaFlightsSection />
        <OfficialDropbox />
        <DestinationsGrid />
        <Statistics />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
