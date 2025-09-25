import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Zap, Building, Shield, Hammer } from 'lucide-react';

const trades = [
  {
    icon: Zap,
    title: 'Electricians',
    outcome: 'Quote emergency jobs in 5 minutes, even at midnight',
    route: '/electricians',
    gradient: 'from-yellow-600 to-orange-600'
  },
  {
    icon: Building,
    title: 'Scaffolders',
    outcome: 'Site surveys booked automatically from enquiries',
    route: '/scaffolders',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Shield,
    title: 'Security & CCTV',
    outcome: 'Urgent callouts handled while you sleep',
    route: '/security-cctv',
    gradient: 'from-red-600 to-pink-600'
  },
  {
    icon: Hammer,
    title: 'General Contractors',
    outcome: 'Project leads qualified before you call back',
    route: '/general-contractors',
    gradient: 'from-gray-600 to-gray-500'
  }
];

export default function TradesServed() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto section-pad-resp">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="h2-resp mb-6">Trades We Serve</h2>
          <p className="p-resp p-narrow text-gray-400">
            Specialized automation systems for UK construction and trade businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trades.map((trade, index) => (
            <Link key={trade.title} to={trade.route}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 
                  hover:bg-white/10 hover:border-white/20 transition-all duration-300 
                  hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 cursor-pointer"
              >
                <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${trade.gradient} p-3 
                  transform group-hover:scale-110 transition-transform duration-300`}>
                  <trade.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="h3-resp mb-3 group-hover:text-white transition-colors">
                  {trade.title}
                </h3>
                
                <p className="p-resp text-gray-400 group-hover:text-white transition-colors">
                  {trade.outcome}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}