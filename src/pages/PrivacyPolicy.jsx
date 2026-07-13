import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | Harmain Travels",
    "description": "Our commitment to protecting your personal data and privacy when using Harmain Travels services."
  };

  return (
    <div className="min-h-screen bg-brand-bg-secondary">
      <SEO 
        title="Privacy Policy | Harmain Travels"
        description="Read our Privacy Policy to understand how Harmain Travels collects, uses, and protects your personal information."
        url="https://harmaintravels.com/privacy-policy"
        schema={schema}
      />
      <Navbar />
      
      <section className="pt-48 pb-24 bg-brand-bg-primary text-center px-4">
        <h1 className="text-5xl md:text-8xl font-black text-brand-white uppercase tracking-tighter mb-8 leading-none">
          Privacy <span className="text-[#931328]">Policy</span>
        </h1>
        <p className="text-brand-muted max-w-2xl mx-auto text-xl font-medium tracking-widest uppercase">
          Your data is safe with us.
        </p>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-brand-white prose-a:text-brand-red">
          <p>Last updated: January 2026</p>
          
          <h2>1. Introduction</h2>
          <p>Welcome to Harmain Travels. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
          
          <h2>2. The Data We Collect About You</h2>
          <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title, date of birth and gender.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Financial Data</strong> includes bank account and payment card details (processed securely by our third-party payment gateways).</li>
            <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
          </ul>

          <h2>3. How We Use Your Personal Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., booking a flight or processing a visa).</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

          <h2>5. Contact Us</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@harmaintravels.com.</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
