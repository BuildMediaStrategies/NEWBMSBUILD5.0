import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const systems = [
  { title: 'Lead Qualification', benefit: 'Sort enquiries by quality before you respond' },
  { title: 'Automated Quoting', benefit: 'Generate quotes instantly for common jobs' },
  { title: 'Emergency Response', benefit: 'Handle urgent callouts even at midnight' },
  { title: 'Appointment Scheduling', benefit: 'Book site visits without phone tag' },
  { title: 'Follow-Up Sequences', benefit: 'Convert more leads with timed reminders' },
  { title: 'Customer Chat', benefit: 'Answer common questions while you work' },
  { title: 'Payment Collection', benefit: 'Send invoices and chase payments automatically' },
  { title: 'Review Requests', benefit: 'Build reputation with automated feedback' }
];

export default function SystemsOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-32 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto section-pad-resp">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Systems We Build</h2>
          <p className="text-lg text-gray-400">Each system designed to save time and close more jobs</p>
        </motion.div>

        <div className="space-y-0">
          {systems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                to="/systems"
                className="group flex items-center justify-between py-8 border-b border-white/10 hover:border-white/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
              >
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-white transition-colors">
                    {system.title}
                  </h3>
                </div>
                <div className="flex items-center gap-6">
                  <p className="hidden md:block text-base text-gray-400 group-hover:text-gray-300 transition-colors max-w-md text-right">
                    {system.benefit}
                  </p>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link to="/systems">
            <button
              type="button"
              className="bg-black text-white border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              View All Systems
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
