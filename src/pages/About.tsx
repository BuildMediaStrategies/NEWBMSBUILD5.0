import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Lightbulb, Rocket } from 'lucide-react';
import ResponsiveText from '../components/ResponsiveText';

const timelineSteps = [
  {
    icon: Users,
    title: 'Discover',
    description: 'We analyze your business to identify revenue leaks and automation opportunities',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: Lightbulb,
    title: 'Design',
    description: 'Custom automation systems tailored to your specific workflows and goals',
    gradient: 'from-gray-600 to-gray-500'
  },
  {
    icon: Rocket,
    title: 'Automate',
    description: 'Implementation and integration with your existing tools and processes',
    gradient: 'from-gray-500 to-gray-400'
  },
  {
    icon: ArrowRight,
    title: 'Launch',
    description: 'Go live with ongoing support, monitoring, and optimization',
    gradient: 'from-gray-400 to-gray-300'
  }
];

export default function About() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Helmet>
        <title>About BuildMediaStrategies – Web Design & AI Automation in Dover</title>
        <meta name="description" content="Remote-first team based in Dover & Kent delivering design and automation systems." />
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
            "serviceProvided": ["Web Design","AI Automation","App Development","Full-Stack Development"],
            "sameAs": []
          })}
        </script>
      </Helmet>
      <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-32">
        <div className="max-w-7xl mx-auto section-pad-resp text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h1-resp mb-8 heading-safe"
          >
            We're <span className="gradient-text gradient-safe">BuildMediaStrategies</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-6"
          >
            <ResponsiveText
              as="p"
              className="p-resp p-narrow text-gray-500 mb-8"
              short="Remote first automation specialists based in Deal, Kent, UK."
              long="A remote first automation agency based in Deal on the Kent coast. We help businesses stop revenue leaks through intelligent automation systems."
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center space-x-2 text-gray-300"
            >
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Deal, Kent, UK</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-32">
        <div className="max-w-7xl mx-auto section-pad-resp">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="h2-resp mb-6">Our Process</h2>
            <ResponsiveText
              as="p"
              className="p-resp p-narrow text-gray-400"
              short="Four steps to stop your revenue leaks."
              long="Our proven four step process to identify and eliminate revenue leaks in your business."
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gray-700 p-4`}
                >
                  <step.icon className="w-full h-full text-white" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={timelineInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                >
                  <h3 className="h3-resp mb-3 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="p-resp text-gray-400 group-hover:text-white transition-colors">
                    {step.description}
                  </p>
                </motion.div>

                {index < timelineSteps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={timelineInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.6 }}
                    className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gray-600 origin-left"
                    style={{ transform: 'translateX(2rem)' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-32 bg-gray-800 border-t border-gray-600">
        <div className="max-w-4xl mx-auto section-pad-resp text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="h2-resp mb-6">Ready to Stop Revenue Leaks?</h2>
            <ResponsiveText
              as="p"
              className="p-resp p-narrow text-gray-400 mb-8"
              short="Let's discuss how automation can transform your business."
              long="Let's discuss how our automation systems can transform your business and plug those revenue leaks for good."
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/contact">
                <motion.button type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 mx-auto"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}