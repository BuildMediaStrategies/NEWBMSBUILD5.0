import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Cog, TrendingUp } from 'lucide-react';
import ResponsiveText from './ResponsiveText';

const steps = [
  {
    icon: Calendar,
    title: 'Book a Free Strategy Call',
    description: 'We analyze your business and identify the biggest automation opportunities'
  },
  {
    icon: Cog,
    title: 'Get Your Custom System Built & Launched',
    description: 'We design, build, and deploy your automation system in days, not months'
  },
  {
    icon: TrendingUp,
    title: 'Scale with Ongoing Optimization',
    description: 'Continuous monitoring and improvements to maximize your ROI'
  }
];

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="how-it-works" className="py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto section-pad-resp">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="h2-resp mb-6">How It Works</h2>
          <ResponsiveText
            as="p"
            className="p-resp p-narrow text-gray-400 line-clamp-3 sm:line-clamp-none"
            short="Three simple steps to automate your business processes."
            long="Three simple steps to automate your business with systems that work around the clock."
          />
        </motion.div>

        <div className="relative">
          {/* Animated Progress Line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-700">
            <motion.div
              className="h-full bg-white/30"
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group relative"
              >
                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-700 flex items-center justify-center relative z-10"
                >
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 mx-auto mb-6 rounded-xl bg-gray-600 p-3"
                >
                  <step.icon className="w-full h-full text-white" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                >
                  <h3 className="h3-resp mb-3 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="p-resp text-gray-400 group-hover:text-white transition-colors">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
        >
          <h3 className="h3-resp mb-4">Flexible Monthly Plans</h3>
          <p className="p-resp text-gray-400">
            Flexible monthly plans for every business size. No upfront cost, no risk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}