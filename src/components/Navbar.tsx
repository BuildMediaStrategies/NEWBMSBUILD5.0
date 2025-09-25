import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Systems', path: '/systems' },
    { name: 'Sectors', path: '/sectors' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 bg-black/90 backdrop-blur-lg border-b border-gray-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link 
              to="/"
              className="flex items-center h-10 overflow-visible"
            >
              <img
                src="https://raw.githubusercontent.com/BuildMediaStrategies/BMSAIASSETS/main/BUILDMEDEA.AI%20Logo%20Design.png"
                alt="BuildMediaStrategies"
                className="w-40 md:w-48 object-contain -translate-y-[2px]"
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                  // Fallback to text logo
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold text-xl">BuildMediaStrategies</span>';
                }}
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`transition-colors relative ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    className="block"
                  >
                    {item.name}
                  </motion.span>
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:block"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Free Strategy Session
              </motion.button>
            </Link>
          </motion.div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        {/* UK Trust Signal - Desktop */}
        <div className="hidden lg:flex items-center text-xs text-gray-400 absolute left-4 top-2">
          <span>🇬🇧 UK-based • Nationwide coverage</span>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-600"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block transition-colors ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Button - Mobile */}
            <div className="pt-4 border-t border-gray-600">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Free Strategy Session
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* UK Trust Signal - Mobile */}
      <div className="lg:hidden bg-gray-800 text-center py-1">
        <span className="text-xs text-gray-400">🇬🇧 UK-based • Nationwide coverage</span>
      </div>
    </motion.nav>
  );
}