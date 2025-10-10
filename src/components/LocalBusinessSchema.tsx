import { Helmet } from 'react-helmet-async';

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BuildMediaStrategies",
    "description": "AI Automation Agency specializing in intelligent automation systems, lead generation, and business process automation for Kent businesses",
    "url": "https://buildmediastrategies.com",
    "logo": "https://buildmediastrategies.com/favicon-32x32.png",
    "image": "https://buildmediastrategies.com/favicon-32x32.png",
    "telephone": "+44-1304-123456",
    "email": "jj@buildmediastrategies.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Deal",
      "addressRegion": "Kent",
      "postalCode": "",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.2225",
      "longitude": "1.4014"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dover"
      },
      {
        "@type": "City",
        "name": "Deal"
      },
      {
        "@type": "City",
        "name": "Canterbury"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kent"
      }
    ],
    "priceRange": "£££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "openingHours": "Mo-Fr 09:00-17:00",
    "sameAs": [
      "https://buildmediastrategies.com"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "AI Automation",
        "description": "Intelligent automation systems for businesses"
      },
      {
        "@type": "Service",
        "name": "AI Lead Generation",
        "description": "Automated lead generation and customer acquisition systems"
      },
      {
        "@type": "Service",
        "name": "Web Design",
        "description": "Modern, responsive website design and development"
      },
      {
        "@type": "Service",
        "name": "Full-Stack Development",
        "description": "Complete web application development services"
      },
      {
        "@type": "Service",
        "name": "App Development",
        "description": "Custom application development and integration"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
