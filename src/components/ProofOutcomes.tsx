import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const outcomes = [
  { metric: '+150%', label: 'Qualified leads' },
  { metric: '2 min', label: 'Avg response' },
  { metric: '20 hrs', label: 'Saved weekly' }
];

export default function ProofOutcomes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <section ref={ref} className="py-20 bg-black border-t border-white/10">
      <div className="max-w-5xl mx-auto section-pad-resp">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                {outcome.metric}
              </div>
              <div className="text-base md:text-lg text-gray-400 font-medium">
                {outcome.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
