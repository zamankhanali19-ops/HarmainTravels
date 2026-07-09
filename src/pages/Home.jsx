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
      "@type": "TravelAgency",
      "name": "Harmain Travels",
      "image": "https://harmaintravels.com/logo.png",
      "@id": "https://harmaintravels.com/",
      "url": "https://harmaintravels.com/",
      "telephone": "+92325880050",
      "email": "harmaintravelisb@gmail.com",
      "foundingDate": "2010",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Harmain Travels Head Office",
        "addressLocality": "Islamabad",
        "addressCountry": "PK"
      },
      "priceRange": "$$$",
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
      },
      "sameAs": [
        "https://www.facebook.com/harmaintravels",
        "https://www.instagram.com/harmaintravels"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg-primary text-brand-silver-light selection:bg-brand-red selection:text-white">
      <SEO 
        title="Harmain Travel & Tours | Premium Aviation & Travel Agency"
        description="Experience luxury travel with Harmain Travels. We offer bespoke corporate tours, premium Umrah and Hajj packages, exclusive VIP visas, and world-class airline ticketing."
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
