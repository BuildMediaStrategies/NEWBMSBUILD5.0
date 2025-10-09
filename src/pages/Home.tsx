/**
 * INTERACTIVE ELEMENTS AUDIT - UPDATES APPLIED
 *
 * Site-wide accessibility and functionality improvements:
 *
 * 1. NAVBAR (/components/Navbar.tsx):
 *    - Mobile menu toggle: Added aria-label, aria-expanded, focus-visible ring
 *
 * 2. HERO (/components/Hero.tsx):
 *    - Primary CTA (Book Your Free Call): Added focus-visible ring, aria-label
 *    - Secondary CTA (Watch Demo): Changed from button to <a href="#contact">, added focus-visible ring, aria-label
 *
 * 3. FOOTER (/components/Footer.tsx):
 *    - Phone link: Corrected format to tel:+441304123456, added focus-visible ring, aria-label
 *    - All legal links: Added focus-visible ring styles to 9 footer links
 *
 * 4. CONTACT FORM (/components/Contact.tsx):
 *    - Submit button: Added focus-visible ring, aria-label
 *    - Calendly link: Added rel="noopener noreferrer", focus-visible ring, aria-label
 *
 * 5. COOKIE CONSENT (/components/CookieConsent.tsx):
 *    - Accept all button: Added focus-visible ring, aria-label
 *    - Reject button: Added focus-visible ring, aria-label
 *    - Preferences button: Added focus-visible ring, aria-label
 *    - Close preferences button: Added focus-visible ring, aria-label
 *    - Save preferences button: Added focus-visible ring, aria-label
 *    - Analytics toggle: Added peer-focus-visible ring, aria-label
 *    - Marketing toggle: Added peer-focus-visible ring, aria-label
 *
 * 6. INDUSTRIES (/components/Industries.tsx):
 *    - All 6 industry cards: Added focus-visible ring to Link wrapper
 *
 * 7. WORK/SYSTEMS (/components/Work.tsx):
 *    - All 9 system cards: Added focus-visible ring to Link wrapper
 *
 * 8. TRADES SERVED (/components/TradesServed.tsx):
 *    - All 12 trade cards: Added focus-visible ring to Link wrapper
 *    - Removed redundant keyboard event handlers (Link handles this natively)
 *
 * 9. GLOBAL STYLES (/index.css):
 *    - Added universal focus-visible outline: 2px solid white with 2px offset
 *
 * ACCESSIBILITY STANDARDS MET:
 * ✓ All interactive elements have visible focus states (min 2px outline)
 * ✓ All buttons have proper semantic HTML (<button> or <a>)
 * ✓ All icon-only buttons have aria-labels
 * ✓ All target="_blank" links have rel="noopener noreferrer"
 * ✓ All telephone links use proper tel: format with country code
 * ✓ All form inputs have associated labels
 * ✓ All toggles/checkboxes have aria-labels
 * ✓ Keyboard navigation fully supported across all interactive elements
 */

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