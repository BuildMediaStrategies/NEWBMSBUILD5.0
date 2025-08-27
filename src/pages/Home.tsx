import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Industries from '../components/Industries';
import Services from '../components/Services';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <AnimatePresence>
      <Helmet>
        <title>Web Design Dover & AI Automation Experts | BuildMediaStrategies</title>
        <meta name="description" content="BuildMediaStrategies helps Dover and Kent businesses with Web Design, AI Automation, App Development, and Full-Stack systems. Fast, modern, and scalable." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-black"
      >
        <Hero />
        <Work />
        <Industries />
        <Services />
        <Contact />
      </motion.div>
    </AnimatePresence>
  );
}