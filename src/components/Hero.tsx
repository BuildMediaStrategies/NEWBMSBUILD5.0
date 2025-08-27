import { motion } from 'framer-motion';
import { ArrowRight, Bot, Zap, GitBranch, Cpu, Database, Network, Workflow, Target } from 'lucide-react';
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
export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-pink-900/30" />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-pink-600/20"
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
            <Icon className="w-8 h-8 text-purple-400/30" />
          </motion.div>
        ))}
        
        {/* Connecting Lines Animation */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="rgb(236, 72, 153)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1" />
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
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
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
              Your Business Is
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 gradient-safe">
                Bleeding Revenue
              </span>
              {" "}
              Every Single Day
            </h1>
          </motion.div>
          
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="p-resp p-narrow text-gray-300 mb-8 sm:mb-12 line-clamp-3 sm:line-clamp-none"
          >
            <ResponsiveText
              short="Manual work costs thousands daily. Competitors automate while you fall behind."
              long="Manual processes are costing you thousands in lost leads, missed opportunities, and wasted hours. While your competitors automate and scale, you're stuck doing everything by hand."
              className="p-resp text-gray-300"
            />
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-[2px] rounded-full"
            >
              <div className="bg-black rounded-full px-8 py-4 transition group-hover:bg-transparent">
                <span className="flex items-center space-x-2 text-white">
                  <span>Stop The Revenue Leak</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}