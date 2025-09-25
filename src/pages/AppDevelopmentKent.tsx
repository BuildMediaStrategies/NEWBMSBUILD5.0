import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Smartphone, Tablet, Monitor, Zap, ArrowRight } from 'lucide-react';
import ResponsiveText from '../components/ResponsiveText';

export default function AppDevelopmentKent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Helmet>
        <title>App Development Kent – Mobile & Web Apps | BuildMediaStrategies</title>
        <meta name="description" content="App development services in Kent. BuildMediaStrategies creates mobile and web applications for Kent businesses." />
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
              "addressCountry": "UK"
            },
            "areaServed": ["Deal","Kent"],
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
              App Development <span className="gradient-text gradient-safe">Kent</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-resp p-narrow text-gray-400 mb-8"
            >
              <ResponsiveText
                short="Mobile and web applications for Kent businesses."
                long="App development services in Kent. We create mobile and web applications that engage users and drive business growth."
              />
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto section-pad-resp">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Smartphone, title: 'Mobile Apps', desc: 'iOS and Android apps' },
                { icon: Tablet, title: 'Tablet Apps', desc: 'Optimized for tablets' },
                { icon: Monitor, title: 'Web Apps', desc: 'Progressive web apps' },
                { icon: Zap, title: 'Fast Performance', desc: 'Optimized for speed' }
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

        {/* Our Services in Kent Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto section-pad-resp">
            <h2 className="h2-resp mb-12 text-center">Our Services in Kent</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link to="/web-design-kent" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="h3-resp mb-4 group-hover:text-white transition-colors">Web Design Kent</h3>
                <p className="p-resp text-gray-400 mb-4">Modern, responsive websites for Kent businesses</p>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link to="/full-stack-development-kent" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="h3-resp mb-4 group-hover:text-white transition-colors">Full-Stack Development Kent</h3>
                <p className="p-resp text-gray-400 mb-4">Complete development solutions for Kent companies</p>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="h3-resp mb-4">Also serving clients in Dover</h3>
                <p className="p-resp text-gray-400 mb-4">
                  <Link to="/web-design-dover" className="text-gray-300 hover:text-white transition-colors">
                    See our Dover Web Design page
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto section-pad-resp text-center">
            <h2 className="h2-resp mb-6">Ready to Build Your App?</h2>
            <p className="p-resp text-gray-400 mb-8">Let's create amazing applications for your Kent business</p>
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