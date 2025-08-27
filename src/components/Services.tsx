import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import ResponsiveText from '../components/ResponsiveText';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We believe in creating digital solutions that drive real business results and meaningful impact.',
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is our success. We work as an extension of your team to achieve your goals.',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We stay ahead of the curve, leveraging cutting-edge technology to solve complex challenges.',
    gradient: 'from-cyan-600 to-teal-600'
  },
  {
    icon: Award,
    title: 'Excellence Always',
    description: 'Quality is non-negotiable. We deliver exceptional work that exceeds expectations.',
    gradient: 'from-teal-600 to-green-600'
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="about" className="py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto section-pad-resp">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="h2-resp mb-6">Why Businesses Choose Us</h2>
          <ResponsiveText
            as="p"
            className="p-resp p-narrow text-gray-400 mb-12 line-clamp-3 sm:line-clamp-none"
            short="Most agencies deliver generic solutions. We identify your revenue leaks and plug them permanently."
            long="Most agencies promise the world but deliver generic solutions. We're different. We identify your specific revenue leaks and build custom systems that plug them permanently. No fluff, no empty promises, just measurable results that show up in your bank account."
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="h3-resp mb-6">The Revenue Problem</h3>
            <ResponsiveText
              as="p"
              className="p-resp p-narrow text-gray-400 mb-6 line-clamp-3 sm:line-clamp-none"
              short="Businesses hemorrhage money through inefficient processes. Leads go cold, carts abandon, prospects slip away."
              long="We started BuildMedia.AI after watching countless businesses hemorrhage money through inefficient processes. Leads going cold, customers abandoning carts, support tickets piling up, qualified prospects slipping through cracks."
            />
            <h3 className="h3-resp mb-6">How We Stop Revenue Leaks</h3>
            <ResponsiveText
              as="p"
              className="p-resp p-narrow text-gray-400 mb-6 line-clamp-3 sm:line-clamp-none"
              short="Every manual task leaks revenue. We build systems that plug profit drains automatically."
              long="Every manual task in your business is a potential revenue leak. We've built systems with our proven approach to plugging profit drains."
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="h3-resp mb-6">Our Values</h3>
          <ResponsiveText
            as="p"
            className="p-resp p-narrow text-gray-400 line-clamp-2 sm:line-clamp-none"
            short="The principles guiding our work"
            long="The principles that guide everything we do"
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
              <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${value.gradient} p-4 
                transform group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-full h-full text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">{value.title}</h4>
              <p className="p-resp text-gray-400 group-hover:text-gray-300 transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}