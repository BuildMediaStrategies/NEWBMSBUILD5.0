import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Zap, Building, Shield, Hammer, Wrench, HardHat, Home, Trees, Thermometer, Settings, PaintBucket, Truck } from 'lucide-react';

const trades = [
  {
    icon: Zap,
    title: 'Electricians',
    outcome: 'Quote emergency jobs in 5 minutes, even at midnight',
    route: '/sectors/electricians',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: Building,
    title: 'Scaffolders',
    outcome: 'Site surveys booked automatically from enquiries',
    route: '/sectors/scaffolders',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: Shield,
    title: 'Security & CCTV',
    outcome: 'Urgent callouts handled while you sleep',
    route: '/sectors/security-cctv',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: Hammer,
    title: 'General Contractors',
    outcome: 'Project leads qualified before you call back',
    route: '/sectors/general-contractors',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: Wrench,
    title: 'Plumbers',
    outcome: 'Emergency callouts handled 24/7, even on weekends',
    route: '/sectors/plumbers',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: HardHat,
    title: 'Builders',
    outcome: 'Project quotes generated while you\'re on other sites',
    route: '/sectors/builders',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: Home,
    title: 'Roofers',
    outcome: 'Weather damage leads captured instantly after storms',
    route: '/sectors/roofers',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: Trees,
    title: 'Landscapers',
    outcome: 'Seasonal bookings managed automatically year-round',
    route: '/sectors/landscapers',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: Thermometer,
    title: 'HVAC Engineers',
    outcome: 'Heating emergencies prioritized and scheduled instantly',
    route: '/sectors/hvac-engineers',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: Settings,
    title: 'Property Maintenance',
    outcome: 'Tenant requests sorted and assigned automatically',
    route: '/sectors/property-maintenance',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: PaintBucket,
    title: 'Painters & Decorators',
    outcome: 'Interior and exterior jobs scheduled around weather automatically',
    route: '/sectors/painters-decorators',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    icon: Truck,
    title: 'Waste Management',
    outcome: 'Skip hire and collection bookings managed 24/7',
    route: '/sectors/waste-management',
    gradient: 'from-gray-700 to-gray-600'
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trades.map((trade, index) => (
            <Link key={trade.title} to={trade.route} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 cursor-pointer
                  h-full flex flex-col
                  shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.2)]
                  hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_8px_24px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.3)]
                  hover:-translate-y-1 transition-all duration-300 ease-out
                  border border-white/5 hover:border-white/10"
              >
                <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${trade.gradient} p-3 
                  transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <trade.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="h3-resp mb-3 group-hover:text-white transition-colors line-clamp-2">
                  {trade.title}
                </h3>
                
                <p className="p-resp text-gray-400 group-hover:text-white transition-colors line-clamp-3 flex-grow">
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