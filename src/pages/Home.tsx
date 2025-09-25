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
            "url": "https://buildmediastrategies.com"
          })}
        </script>
      </Helmet>
      <main>
        <Hero />
        <TradesServed />
        <HowItWorks />
        <Work />
        <Industries />
        <Contact />
      </main>
    </>
  );
}