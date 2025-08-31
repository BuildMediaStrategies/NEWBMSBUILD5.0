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

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="about" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto section-pad-resp">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="h2-resp mb-6 heading-safe">We're <span className="gradient-text gradient-safe">BuildMedia.AI</span></h2>
          <ResponsiveText
            as="p"
            className="p-resp p-narrow text-gray-400 mb-12 line-clamp-3 sm:line-clamp-none"
            short="Remote-first automation specialists based in Deal & Dover, UK."
            long="A remote-first automation agency based between Deal and Dover on the Kent coast. We help businesses stop revenue leaks through intelligent automation systems."
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="h3-resp mb-6 heading-safe">Our Process</h3>
            <ResponsiveText
              as="p"
              className="p-resp p-narrow text-gray-300 mb-6 line-clamp-3 sm:line-clamp-none"
              short="Four steps to stop your revenue leaks."
              long="Our proven four-step process to identify and eliminate revenue leaks in your business."
            />
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gray-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Discover</h4>
                  <p className="text-sm text-gray-300">Analyze your business to identify revenue leaks</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gray-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Design</h4>
                  <p className="text-sm text-gray-300">Custom automation systems for your workflows</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gray-400 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Automate</h4>
                  <p className="text-sm text-gray-300">Implementation and integration</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gray-300 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Launch</h4>
                  <p className="text-sm text-gray-300">Go live with ongoing support</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/BuildMediaStrategies/BMSAIASSETS/d077c835d2ec6ca6a99b63cfbd1c7951fd5fe6d7/0f29ff3b-8c8d-475e-b2d8-d48e5a9a776b.png"
                alt="BuildMediaStrategies Process Visualization"
                className="w-full h-full object-contain rounded-2xl border border-white/20"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="h3-resp mb-6 heading-safe">Why Choose BuildMediaStrategies</h3>
          <ResponsiveText
            as="p"
            className="p-resp p-narrow text-gray-300 line-clamp-2 sm:line-clamp-none"
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
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gray-700 p-4 
                transform group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-full h-full text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 heading-safe">{value.title}</h4>
              <p className="p-resp text-gray-400 group-hover:text-white transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}