import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import Work from '../components/Work';
import Industries from '../components/Industries';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AI Automation & Lead Generation Systems | BuildMediaStrategies</title>
        <meta name="description" content="Affordable, fast AI automation systems for businesses worldwide. Boost leads, sales, and operations with zero upfront cost. Book your free strategy session today." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How quickly can automation be set up?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most automation systems can be built and launched in days, not months. Simple systems go live in 2-3 weeks, while complex implementations typically take 6-12 weeks."
                }
              },
              {
                "@type": "Question", 
                "name": "Can you work with US-based businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we serve businesses across the US and worldwide. Our team works remotely and can accommodate different time zones for meetings and support."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need technical experience?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No technical experience required. We handle all the technical implementation and provide training for your team. You focus on your business while we build the systems."
                }
              }
            ]
          })}
        </script>
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
        <Contact />
        <HowItWorks />
        <Work />
        <Industries />
      </main>
    </>
  );
}