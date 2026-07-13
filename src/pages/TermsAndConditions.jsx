import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions | Harmain Travels",
    "description": "Standard terms and conditions for booking tours, flights, visas, and Umrah packages with Harmain Travels."
  };

  return (
    <div className="min-h-screen bg-brand-bg-secondary">
      <SEO 
        title="Terms and Conditions | Harmain Travels"
        description="Read the standard terms and conditions for booking travel services, Umrah packages, and visa processing with Harmain Travels."
        url="https://harmaintravels.com/terms-and-conditions"
        schema={schema}
      />
      <Navbar />
      
      <section className="pt-48 pb-24 bg-brand-bg-primary text-center px-4">
        <h1 className="text-5xl md:text-8xl font-black text-brand-white uppercase tracking-tighter mb-8 leading-none">
          Terms & <span className="text-[#931328]">Conditions</span>
        </h1>
        <p className="text-brand-muted max-w-2xl mx-auto text-xl font-medium tracking-widest uppercase">
          Please read these terms carefully before booking.
        </p>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-brand-white prose-a:text-brand-red">
          <p>Last updated: January 2026</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing this website and booking our services, you accept and agree to be bound by the terms and provisions of this agreement. Any participation in our services will constitute acceptance of this agreement.</p>
          
          <h2>2. Booking and Payments</h2>
          <ul>
            <li>All bookings are subject to availability and confirmation.</li>
            <li>A non-refundable deposit is required at the time of booking to secure your reservation.</li>
            <li>Full payment must be made prior to the departure date, as specified in your booking confirmation.</li>
            <li>Prices are subject to change without prior notice due to currency fluctuations, fuel surcharges, or changes in taxes/fees.</li>
          </ul>

          <h2>3. Cancellations and Refunds</h2>
          <p>Cancellation policies vary depending on the type of service booked (flights, hotels, visas, or complete packages). Generally:</p>
          <ul>
            <li>Visa processing fees are strictly non-refundable once the application has been submitted to the respective embassy.</li>
            <li>Airline ticket cancellations are governed by the specific airline's fare rules.</li>
            <li>Umrah package cancellations within 30 days of departure may incur up to 100% cancellation charges due to strict hotel and transport policies in Saudi Arabia.</li>
          </ul>

          <h2>4. Travel Documents and Visas</h2>
          <p>It is the traveler's responsibility to ensure they hold valid travel documents, including passports (valid for at least 6 months), visas, and health certificates required for their destination. Harmain Travels acts only as a facilitator for visa processing and cannot guarantee approval by immigration authorities.</p>

          <h2>5. Limitation of Liability</h2>
          <p>Harmain Travels acts only as an agent for airlines, hotels, transport operators, and other service providers. We shall not be liable for any injury, damage, loss, accident, delay, or irregularity that may be caused by the defect of any vehicle, or the negligence or default of any company or person engaged in conveying the passenger or carrying out the arrangements of the tour.</p>

          <h2>6. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any disputes shall be subject to the exclusive jurisdiction of the courts in Islamabad.</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
