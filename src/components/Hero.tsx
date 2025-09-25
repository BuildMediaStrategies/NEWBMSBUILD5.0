import { motion } from 'framer-motion';
import { ArrowRight, Bot, Zap, GitBranch, Cpu, Database, Network, Workflow, Target, Play, Phone } from 'lucide-react';
import ResponsiveText from '../components/ResponsiveText';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000], // Valid easing curve
    },
  }),
};

const floatingIcons = [
  { Icon: Bot, delay: 0, x: '10%', y: '20%' },
  { Icon: Zap, delay: 0.5, x: '80%', y: '15%' },
  { Icon: GitBranch, delay: 1, x: '15%', y: '70%' },
  { Icon: Cpu, delay: 1.5, x: '85%', y: '75%' },
  { Icon: Database, delay: 2, x: '60%', y: '25%' },
  { Icon: Network, delay: 2.5, x: '25%', y: '45%' },
  { Icon: Workflow, delay: 3, x: '75%', y: '50%' },
  { Icon: Target, delay: 3.5, x: '45%', y: '80%' },
];

const proofPoints = [
  { metric: '+150%', description: 'More qualified leads' },
  { metric: '-20 hrs', description: 'Admin time saved per week' },
  { metric: '2 min', description: 'Average response time' }
];

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-black to-gray-700/10" />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-800/10 via-transparent to-gray-700/10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ backgroundSize: '200% 200%' }}
        />
        
        {/* Floating AI/Automation Icons */}
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: [0, 0.3, 0.1, 0.4, 0.2],
              scale: [0, 1, 0.8, 1.2, 1],
              rotate: [0, 360],
              y: [0, -20, 0, -15, 0],
            }}
            transition={{
              duration: 6,
              delay: delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            <Icon className="w-8 h-8 text-gray-400/30" />
          </motion.div>
        ))}
        
        {/* Connecting Lines Animation */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(255, 255, 255)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="rgb(255, 255, 255)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(255, 255, 255)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Animated workflow lines */}
          <motion.path
            d="M 100 200 Q 400 100 700 300 T 1200 400"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
          />
          
          <motion.path
            d="M 200 500 Q 600 300 900 600 T 1100 200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 4, delay: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
          
          <motion.path
            d="M 50 400 Q 300 200 600 500 T 1000 300"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 5, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          />
        </svg>
        
        {/* Pulsing dots for data flow */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto section-pad-resp py-32">
        <div className="max-w-4xl section-pad-resp text-center">
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="h1-resp text-white mb-8 heading-safe">
              Stop Losing Jobs to{" "}
              <span className="gradient-text gradient-safe">
                Faster Competitors
              </span>{" "}
            </h1>
          </motion.div>
          
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="p-resp p-narrow text-gray-400 mb-8 sm:mb-12 line-clamp-3 sm:line-clamp-none"
          >
            <ResponsiveText
              short="UK construction and trade businesses use our systems to respond to enquiries in minutes, not hours. Book more jobs while you're on-site."
              long="UK construction and trade businesses use our automated systems to respond to enquiries in minutes, not hours. Book more jobs while you're on-site, sleeping, or with family."
              className="p-resp text-gray-400"
            />
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="group bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Book Your Free Call</span>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border border-white/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch 2-Min Demo</span>
            </motion.button>
          </motion.div>

          {/* Proof Strip */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <p className="text-gray-500 text-sm mb-6">Results from UK construction and trade businesses</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {proofPoints.map((point, index) => (
                <motion.div
                  key={point.metric}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 min-w-[140px]"
                >
                  <div className="text-2xl font-bold text-white mb-1">
                    {point.metric}
                  </div>
                  <span className="text-gray-400 text-sm">
                    {point.description}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}