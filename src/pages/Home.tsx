import SEOHead from '../components/SEOHead';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import Hero from '../components/Hero';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import SystemsOverview from '../components/SystemsOverview';
import ProcessScrolly from '../components/ProcessScrolly';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <>
      <SEOHead
        title="AI Automation Kent | AI Systems Dover & Canterbury"
        description="AI Automation agency in Kent. AI systems, lead generation & automation for Dover, Deal, Canterbury businesses. Transform operations with intelligent AI."
        canonical="/"
      />
      <LocalBusinessSchema />
      <main>
        <Hero />
        <WhoWeWorkWith />
        <SystemsOverview />
        <ProcessScrolly />
        <ContactCTA />
      </main>
    </>
  );
}
