import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Work from '../components/Work';
import TradesServed from '../components/TradesServed';
import Industries from '../components/Industries';
import Contact from '../components/Contact';
import HowItWorks from '../components/HowItWorks';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AI Automation & Lead Generation Systems | BuildMediaStrategies</title>
        <meta name="description" content="Affordable, fast AI automation systems for businesses worldwide. Boost leads, sales, and operations with zero upfront cost. Book your free strategy session today." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BuildMediaStrategies",
            "url": "https://buildmediastrategies.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Deal",
              "addressRegion": "Kent",
              "addressCountry": "GB"
            },
            "areaServed": ["GB", "United Kingdom", "England", "Kent", "Deal"],
            "telephone": "+44-1304-123456",
            "priceRange": "£££",
            "currenciesAccepted": "GBP",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "serviceProvided": ["Web Design","AI Automation","App Development","Full-Stack Development"]
          })}
        </script>
      </Helmet>
      <main>
        <Hero />
        <TradesServed />
        <HowItWorks />
        <Work />
        <Contact />
      </main>
    </>
  );
}