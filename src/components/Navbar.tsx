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
    { 
      name: 'Systems', 
      path: '/systems',
      submenu: [
        { name: 'Web Design Dover', path: '/web-design-dover' },
        { name: 'AI Automation Dover', path: '/ai-automation-dover' },
        { name: 'Full-Stack Development Dover', path: '/full-stack-development-dover' },
        { name: 'Web Design Kent', path: '/web-design-kent' },
        { name: 'App Development Kent', path: '/app-development-kent' },
        { name: 'Full-Stack Development Kent', path: '/full-stack-development-kent' }
      ]
    },
    { name: 'Sectors', path: '/sectors' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10"
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
                src="https://github.com/BuildMediaStrategies/BMSAIASSETS/raw/fadb565686c0fbad489ba0c4c4dba29a5eea4d09/ChatGPT%20Image%20Aug%2026%2C%202025%2C%2012_14_26%20AM.png"
                alt="BuildMediaStrategies"
                className="w-40 md:w-48 object-contain -translate-y-[2px]"
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
                className="relative group"
              >
                {item.submenu ? (
                  <>
                    <Link
                      to={item.path}
                      className={`transition-colors relative ${
                        isActive(item.path)
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
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
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-lg border border-white/10 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`transition-colors relative ${
                      isActive(item.path)
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
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
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}