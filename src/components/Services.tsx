import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import ResponsiveText from '../components/ResponsiveText';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We believe in creating digital solutions that drive real business results and meaningful impact.',
    gradient: 'from-gray-800 to-gray-700'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is our success. We work as an extension of your team to achieve your goals.',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We stay ahead of the curve, leveraging cutting-edge technology to solve complex challenges.',
    gradient: 'from-gray-600 to-gray-500'
  },
  {
    icon: Award,
    title: 'Excellence Always',
    description: 'Quality is non-negotiable. We deliver exceptional work that exceeds expectations.',
    gradient: 'from-gray-500 to-gray-400'
  }
];

const trustedPlatforms = [
  { name: 'n8n', description: 'Workflow Automation' },
  { name: 'Make.com', description: 'Visual Automation' },
  { name: 'Zapier', description: 'App Integration' },
  { name: 'Voiceflow', description: 'Conversational AI' },
  { name: 'Supabase', description: 'Backend Platform' }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} id="about" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto section-pad-resp">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 heading-safe">
            We're <span className="gradient-text gradient-safe">BuildMedia.AI</span>
          </h2>
          <ResponsiveText
            as="p"
            className="text-xl md:text-2xl p-narrow text-gray-400 mb-12 line-clamp-3 sm:line-clamp-none"
            short="Global automation specialists serving businesses worldwide."
            long="A global automation agency serving businesses across the US and worldwide. We help businesses capture growth opportunities through intelligent automation systems."
          />
        </motion.div>

        {/* Trusted Systems Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 heading-safe">Trusted Systems</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-6">
            {trustedPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <span className="text-white text-lg font-bold">
                    {platform.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{platform.name}</h4>
                <p className="text-gray-400 text-xs">{platform.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            We build on the platforms trusted by 100,000+ businesses worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-4xl font-bold mb-8 heading-safe">Our Process</h3>
            <ResponsiveText
              as="p"
              className="text-lg text-gray-300 mb-8 line-clamp-3 sm:line-clamp-none"
              short="Four steps to capture your growth potential."
              long="Our proven four-step process to identify and capture growth opportunities in your business."
            />
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gray-600 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Discover</h4>
                  <p className="text-gray-300">Analyze your business to identify growth opportunities</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gray-500 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Design</h4>
                  <p className="text-gray-300">Custom automation systems for your workflows</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gray-400 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Automate</h4>
                  <p className="text-gray-300">Implementation and integration</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gray-300 flex items-center justify-center">
                  <span className="text-black text-lg font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Launch</h4>
                  <p className="text-gray-300">Go live with ongoing support</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/BuildMediaStrategies/BMSAIASSETS/main/0f29ff3b-8c8d-475e-b2d8-d48e5a9a776b.png"
                alt="AI automation systems and lead generation workflow visualization"
                className="w-full h-full object-contain rounded-2xl border border-white/20"
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  console.error('Process image failed to load:', e);
                  // Fallback to placeholder
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Inline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-20"
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center text-lg font-semibold text-white hover:text-orange-400 transition-colors group"
          >
            Get My Free Strategy Session
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-8 heading-safe">Why Choose BuildMediaStrategies</h3>
          <ResponsiveText
            as="p"
            className="text-lg text-gray-300 line-clamp-2 sm:line-clamp-none"
            short="What sets us apart from other agencies"
            long="What sets us apart from other automation agencies"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="group text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-xl bg-gray-700 p-5 
                transform group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-full h-full text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 heading-safe">{value.title}</h4>
              <p className="text-lg text-gray-400 group-hover:text-white transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}