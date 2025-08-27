import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Work from '../components/Work';
import Industries from '../components/Industries';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Web Design Dover & AI Automation Experts | BuildMediaStrategies</title>
        <meta name="description" content="BuildMediaStrategies helps Dover and Kent businesses with Web Design, AI Automation, App Development, and Full-Stack systems. Fast, modern, and scalable." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BuildMediaStrategies",
            "url": "https://buildmediastrategies.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dover",
              "addressRegion": "Kent",
              "addressCountry": "UK"
            },
            "areaServed": ["Dover","Kent"],
            "serviceProvided": ["Web Design","AI Automation","App Development","Full-Stack Development"],
            "sameAs": ["https://ifucantfindit.com"]
          })}
        </script>
      </Helmet>
      <main>
        <Hero />
        <Services />
        <Work />
        <Industries />
        <Contact />
      </main>
    </>
  );
}