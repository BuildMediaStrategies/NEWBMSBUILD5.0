import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Building, Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function Scaffolders() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Helmet>
        <title>Scaffolders – Automated Systems for Scaffolding Companies | BuildMediaStrategies</title>
        <meta name="description" content="Automation systems for UK scaffolding companies. Site surveys booked automatically, project quotes handled 24/7." />
      </Helmet>
      <div className="bg-black text-white min-h-screen pt-20">
        {/* Hero Section */}
        <section ref={ref} className="py-32">
          <div className="max-w-7xl mx-auto section-pad-resp text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="mb-6"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gray-700 p-4">
                <Building className="w-full h-full text-white" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="h1-resp mb-6 heading-safe"
            >
              Automation Systems for <span className="gradient-text gradient-safe">Scaffolders</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-resp p-narrow text-gray-400 mb-12"
            >
              Site surveys booked automatically from enquiries. Handle project quotes and scheduling while you're on-site.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <Calendar className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">Auto</div>
                <div className="text-gray-400 text-sm">Survey Booking</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <MapPin className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">+60%</div>
                <div className="text-gray-400 text-sm">Site Visit Rate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <Building className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Quote Handling</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto section-pad-resp text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <h2 className="h2-resp mb-6">Specialized Systems Coming Soon</h2>
              <p className="p-resp text-gray-400 mb-8">
                We're building specialized automation systems for scaffolding companies. 
                Get early access and help shape the features you need most.
              </p>
              <Link to="/contact">
                <motion.button type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 mx-auto"
                >
                  <span>Get Early Access</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}