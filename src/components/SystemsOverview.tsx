import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Phone, TrendingUp, DollarSign, CheckSquare, MessageSquare } from 'lucide-react';

const systems = [
  {
    title: 'AI Lead Generation',
    benefit: 'More qualified jobs from every enquiry.',
    icon: Target
  },
  {
    title: 'Call Automation Systems',
    benefit: 'Answer missed calls and book jobs automatically.',
    icon: Phone
  },
  {
    title: 'Conversion Systems',
    benefit: 'Recover quotes and turn warm leads into bookings.',
    icon: TrendingUp
  },
  {
    title: 'Sales Systems',
    benefit: 'Follow ups sent and deals moved on time.',
    icon: DollarSign
  },
  {
    title: 'Project Management Systems',
    benefit: 'Jobs and tasks updated in one place.',
    icon: CheckSquare
  },
  {
    title: 'Support Systems',
    benefit: '24/7 replies with smooth human handoff.',
    icon: MessageSquare
  }
];

export default function SystemsOverview() {
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
    <section ref={ref} className="py-32 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto section-pad-resp">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Systems We Build</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black border border-white/20 rounded-lg p-8 flex flex-col"
            >
              <system.icon
                className="w-12 h-12 text-white mb-6"
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <h3 className="text-2xl font-bold mb-4">
                {system.title}
              </h3>

              <p className="text-lg text-gray-300 mb-8 flex-grow">
                {system.benefit}
              </p>

              <button
                type="button"
                onClick={scrollToContact}
                className="w-full bg-black text-white border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Get this system
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
