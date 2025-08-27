import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Industries from '../components/Industries';
import Services from '../components/Services';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <AnimatePresence>
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