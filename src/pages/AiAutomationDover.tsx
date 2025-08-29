import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Bot, Zap, Target, Cpu, ArrowRight } from 'lucide-react';
import ResponsiveText from '../components/ResponsiveText';

export default function AiAutomationDover() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Helmet>
        <title>AI Automation Dover – Intelligent Systems | BuildMediaStrategies</title>
        <meta name="description" content="AI automation services in Dover. BuildMediaStrategies creates intelligent automation systems for Dover businesses." />
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
      <div className="bg-black text-white min-h-screen pt-20">
        {/* Hero Section */}
        <section ref={ref} className="py-32">
          <div className="max-w-7xl mx-auto section-pad-resp text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="h1-resp mb-6 heading-safe"
            >
              AI Automation <span className="gradient-text gradient-safe">Dover</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-resp p-narrow text-gray-400 mb-8"
            >
              <ResponsiveText
                short="Intelligent automation systems for Dover businesses."
                long="AI automation services in Dover. We create intelligent systems that streamline operations and boost efficiency for local businesses."
              />
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto section-pad-resp">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Bot, title: 'AI Chatbots', desc: 'Intelligent customer service' },
                { icon: Zap, title: 'Process Automation', desc: 'Streamlined workflows' },
                { icon: Target, title: 'Lead Generation', desc: 'Automated lead capture' },
                { icon: Cpu, title: 'Smart Analytics', desc: 'Data-driven insights' }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <service.icon className="w-12 h-12 text-gray-300 mb-4" />
                  <h3 className="h3-resp mb-2">{service.title}</h3>
                  <p className="p-resp text-gray-400">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services in Dover Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto section-pad-resp">
            <h2 className="h2-resp mb-12 text-center">Our Services in Dover</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link to="/web-design-dover" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="h3-resp mb-4 group-hover:text-white transition-colors">Web Design Dover</h3>
                <p className="p-resp text-gray-400 mb-4">Modern, responsive websites for Dover businesses</p>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link to="/full-stack-development-dover" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="h3-resp mb-4 group-hover:text-white transition-colors">Full-Stack Development Dover</h3>
                <p className="p-resp text-gray-400 mb-4">Complete development solutions for Dover companies</p>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="h3-resp mb-4">Looking for services across Kent?</h3>
                <p className="p-resp text-gray-400 mb-4">
                  <Link to="/web-design-kent" className="text-gray-300 hover:text-white transition-colors">
                    See our Web Design Kent page
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto section-pad-resp text-center">
            <h2 className="h2-resp mb-6">Ready to Automate?</h2>
            <p className="p-resp text-gray-400 mb-8">Let's build intelligent systems for your Dover business</p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 mx-auto"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}