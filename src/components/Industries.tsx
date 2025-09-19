import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Hammer, 
  ShoppingCart, 
  Heart, 
  Coffee, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';
import ResponsiveText from './ResponsiveText';

const industries = [
  {
    icon: Hammer,
    title: 'Construction',
    description: 'Capture and qualify project leads, auto-quote, and schedule site visits',
    gradient: 'from-gray-800 to-gray-700'
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    description: 'Recover carts, personalize offers, and automate customer chat',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: Heart,
    title: 'Healthcare & Clinics',
    description: 'Route enquiries, manage bookings, send reminders and follow-ups',
    gradient: 'from-gray-600 to-gray-500'
  },
  {
    icon: Coffee,
    title: 'Hospitality & Leisure',
    description: 'Handle bookings, waitlists, and post-visit reviews on autopilot',
    gradient: 'from-gray-500 to-gray-400'
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Automate intake, proposals, and client updates',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: GraduationCap,
    title: 'Education & Training',
    description: 'Enroll leads, schedule sessions, and send course reminders',
    gradient: 'from-gray-600 to-gray-500'
  }
];

export default function Industries() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="industries" className="py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto section-pad-resp">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Industries Ready for Growth</h2>
          <ResponsiveText
            as="p"
            className="text-xl md:text-2xl p-narrow text-gray-400 line-clamp-3 sm:line-clamp-none"
            short="Every industry has growth opportunities. We identify and capture the biggest profit potential."
            long="Every industry has unique growth opportunities. We've identified the biggest profit potential and built systems to capture it."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 
                hover:bg-white/10 hover:border-white/20 transition-all duration-300 
                hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10"
            >
              <Link to="/sectors" className="block">
                <div className={`w-12 h-12 mb-4 rounded-lg bg-gray-700 p-3 
                  transform group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="h3-resp mb-2 group-hover:text-white transition-colors">
                  {industry.title}
                </h3>
                
                <p className="p-resp text-gray-400 group-hover:text-white transition-colors">
                  {industry.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Inline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center text-lg font-semibold text-white hover:text-orange-400 transition-colors group"
          >
            Get My Free Strategy Session
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}