import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Fuel as Funnel, Monitor, Phone, BarChart3, MessageCircle, Users, LayoutDashboard, Calendar, Clipboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResponsiveText from './ResponsiveText';

const systems = [
  {
    title: 'AI Lead Generation',
    category: 'Lead Systems',
    animationType: 'nodes',
    icon: Funnel,
    color: 'from-gray-800 to-gray-700',
    size: 'large'
  },
  {
    title: 'Conversion Systems',
    category: 'Sales Optimization',
    animationType: 'grid',
    icon: Monitor,
    color: 'from-gray-700 to-gray-600',
    size: 'small'
  },
  {
    title: 'Call Automation Systems',
    category: 'Communication',
    animationType: 'waveforms',
    icon: Phone,
    color: 'from-gray-600 to-gray-500',
    size: 'medium'
  },
  {
    title: 'AI Sales Systems',
    category: 'Sales Automation',
    animationType: 'pipeline',
    icon: BarChart3,
    color: 'from-gray-500 to-gray-400',
    size: 'small'
  },
  {
    title: 'Support Systems',
    category: 'Customer Service',
    animationType: 'typing',
    icon: MessageCircle,
    color: 'from-gray-700 to-gray-600',
    size: 'medium'
  },
  {
    title: 'Recruitment Systems',
    category: 'HR Automation',
    animationType: 'avatars',
    icon: Users,
    color: 'from-gray-600 to-gray-500',
    size: 'large'
  },
  {
    title: 'Project Management Systems',
    category: 'Workflow Automation',
    animationType: 'kanban',
    icon: LayoutDashboard,
    color: 'from-gray-500 to-gray-400',
    size: 'medium'
  },
  {
    title: 'Social Media Automation',
    category: 'Marketing Systems',
    animationType: 'social',
    icon: Calendar,
    color: 'from-gray-400 to-gray-300',
    size: 'small'
  },
  {
    title: 'Lead Capture Systems',
    category: 'Lead Generation',
    animationType: 'funnel',
    icon: Clipboard,
    color: 'from-gray-700 to-gray-600',
    size: 'medium'
  }
];

const getSizeClass = (size: string) => {
  switch (size) {
    case 'large':
      return 'h-[600px]';
    case 'medium':
      return 'h-[400px]';
    case 'small':
      return 'h-[300px]';
    default:
      return 'h-[400px]';
  }
};

const AnimatedBackground = ({ type, color }: { type: string; color: string }) => {
  switch (type) {
    case 'nodes':
      return (
        <div className={`absolute inset-0 bg-gray-800 opacity-80`}>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white/30 rounded-full"
              style={{
                left: `${20 + (i % 3) * 30}%`,
                top: `${20 + Math.floor(i / 3) * 25}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
          <svg className="absolute inset-0 w-full h-full">
            <motion.path
              d="M 50 100 Q 150 50 250 120 T 350 100"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
            />
          </svg>
        </div>
      );

    case 'grid':
      return (
        <div className={`absolute inset-0 bg-gray-700 opacity-80`}>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/20 rounded"
              style={{
                width: '40px',
                height: '30px',
                left: `${15 + (i % 4) * 20}%`,
                top: `${20 + Math.floor(i / 4) * 25}%`,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      );

    case 'waveforms':
      return (
        <div className={`absolute inset-0 bg-gray-600 opacity-80`}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/30 rounded-full"
              style={{
                width: '60px',
                height: '60px',
                left: '50%',
                top: '50%',
                marginLeft: '-30px',
                marginTop: '-30px',
              }}
              animate={{
                scale: [1, 2 + i * 0.3, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      );

    case 'pipeline':
      return (
        <div className={`absolute inset-0 bg-gray-500 opacity-80`}>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/30 rounded-lg"
              style={{
                width: '60px',
                height: '20px',
                left: `${20 + i * 20}%`,
                top: '50%',
                marginTop: '-10px',
              }}
              animate={{
                scaleX: [0.3, 1, 0.3],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      );

    case 'typing':
      return (
        <div className={`absolute inset-0 bg-gray-700 opacity-80`}>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-white/60 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>
      );

    case 'avatars':
      return (
        <div className={`absolute inset-0 bg-gray-600 opacity-80`}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 bg-white/40 rounded-full"
              style={{
                left: `${30 + (i % 3) * 20}%`,
                top: `${80 - Math.floor(i / 3) * 30}%`,
              }}
              animate={{
                y: [-20, -60, -20],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 0.6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      );

    case 'kanban':
      return (
        <div className={`absolute inset-0 bg-gray-500 opacity-80`}>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/30 rounded"
              style={{
                width: '30px',
                height: '20px',
                top: '50%',
                marginTop: '-10px',
              }}
              animate={{
                x: [20, 120, 220, 20],
              }}
              transition={{
                duration: 6,
                delay: i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      );

    case 'social':
      return (
        <div className={`absolute inset-0 bg-gray-400 opacity-80`}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 bg-white/40 rounded-full"
              style={{
                left: `${25 + i * 15}%`,
                top: '50%',
                marginTop: '-12px',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 2,
                delay: i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      );

    case 'funnel':
      return (
        <div className={`absolute inset-0 bg-gray-600 opacity-80`}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30 
            clip-path-polygon-[20%_20%,80%_20%,70%_80%,30%_80%]" />
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/60 rounded-full"
              style={{
                left: `${45 + (Math.random() - 0.5) * 20}%`,
                top: '20%',
              }}
              animate={{
                y: [0, 200],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                ease: 'easeIn',
              }}
            />
          ))}
        </div>
      );

    default:
      return <div className={`absolute inset-0 bg-gray-700 opacity-80`} />;
  }
};

const AnimatedIcon = ({ Icon, type }: { Icon: any; type: string }) => {
  const getIconAnimation = () => {
    switch (type) {
      case 'nodes': // AI Lead Generation - Funnel with particles
        return {
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'],
        };
      case 'grid': // Conversion Systems - Browser pulse
        return {
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.4, 0.3],
        };
      case 'waveforms': // Call Automation - Phone with waves
        return {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 5, -5, 0],
        };
      case 'pipeline': // AI Sales - Bar chart filling
        return {
          scaleY: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.5, 0.3],
        };
      case 'typing': // Support - Chat bubble pulse
        return {
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        };
      case 'avatars': // Recruitment - Users fading
        return {
          opacity: [0.2, 0.5, 0.2],
          scale: [0.9, 1.1, 0.9],
        };
      case 'kanban': // Project Management - Kanban sliding
        return {
          x: [-5, 5, -5],
          opacity: [0.3, 0.4, 0.3],
        };
      case 'social': // Social Media - Calendar pulse
        return {
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 2, -2, 0],
        };
      case 'funnel': // Lead Capture - Clipboard check
        return {
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.45, 0.3],
          y: [-2, 2, -2],
        };
      default:
        return {
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        };
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={getIconAnimation()}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Icon className="w-24 h-24 md:w-32 md:h-32 text-white" />
      </motion.div>
    </div>
  );
};

export default function Work() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="systems" className="section-spacing bg-black text-white">
      <div className="max-w-7xl mx-auto section-pad-resp">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">What We Build</h2>
          <ResponsiveText
            as="p"
            className="text-xl md:text-2xl p-narrow text-gray-300 line-clamp-3 sm:line-clamp-none"
            short="What We Build for Your Business"
            long="Custom AI automation systems that work 24/7 to grow your business, capture leads, and optimize operations."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {systems.map((system, index) => (
            <Link
              key={system.title}
              to="/systems"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative w-full h-80 sm:${getSizeClass(system.size)} overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <AnimatedBackground type={system.animationType} color={system.color} />
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-40" />
                <AnimatedIcon Icon={system.icon} type={system.animationType} />
                
                <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-between z-10 relative">
                  <div className="flex justify-between items-start">
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xs sm:text-sm font-medium text-white/90 backdrop-blur-sm bg-black/40 px-3 sm:px-4 py-1 sm:py-2 rounded-full"
                    >
                      {system.category}
                    </motion.span>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center
                        opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="transform group-hover:-translate-y-2 transition-transform duration-300"
                  >
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">{system.title}</h3>
                    <div className="h-1 w-12 bg-white rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300" />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        {/* Inline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12 sm:mt-16"
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center text-lg font-semibold text-white hover:text-orange-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-orange-400 rounded px-4 py-2 active:scale-95"
          >
            Get My Free Strategy Session
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}