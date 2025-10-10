import SEOHead from '../components/SEOHead';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
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
  },
  {
    icon: Lightbulb,
    title: 'Design',
    description: 'Custom automation systems tailored to your specific workflows and goals',
  },
  {
    icon: Rocket,
    title: 'Automate',
    description: 'Implementation and integration with your existing tools and processes',
  },
  {
    icon: ArrowRight,
    title: 'Launch',
    description: 'Go live with ongoing support, monitoring, and optimization',
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
      <SEOHead
        title="About Us | AI Automation Agency Dover, Deal & Kent"
        description="AI Automation agency in Deal, Kent. Remote-first team delivering intelligent automation systems for Dover, Canterbury & Kent businesses."
        canonical="/about"
      />
      <LocalBusinessSchema />
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
                  className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-white/10 p-4`}
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
      <section ref={ctaRef} className="py-32 bg-black border-t border-white/10">
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