import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Zap, Building, Shield, Hammer, Wrench, HardHat } from 'lucide-react';
import { useEffect, useRef } from 'react';

const featuredTrades = [
  { icon: Zap, label: 'Electricians', route: '/sectors/electricians' },
  { icon: Building, label: 'Scaffolding', route: '/sectors/scaffolders' },
  { icon: Shield, label: 'Security & CCTV', route: '/sectors/security-cctv' },
  { icon: Hammer, label: 'Builders', route: '/sectors/builders' },
  { icon: HardHat, label: 'Roofers', route: '/sectors/roofers' },
  { icon: Wrench, label: 'Plumbers', route: '/sectors/plumbers' }
];

const scrollingIcons = [
  { icon: Zap, label: 'Electricians' },
  { icon: Building, label: 'Scaffolding' },
  { icon: Shield, label: 'Security' },
  { icon: Hammer, label: 'Builders' },
  { icon: HardHat, label: 'Roofers' },
  { icon: Wrench, label: 'Plumbers' }
];

export default function TradesServed() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationId: number;
    let position = 0;
    const speed = 0.3;

    const animate = () => {
      position -= speed;
      if (scrollContainer) {
        const firstChild = scrollContainer.firstElementChild;
        if (firstChild && Math.abs(position) >= firstChild.clientWidth) {
          position = 0;
          scrollContainer.appendChild(firstChild);
        }
        scrollContainer.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    // Start animation only on mobile
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
      animationId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      if (window.matchMedia('(max-width: 767px)').matches && !prefersReducedMotion) {
        animationId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationId);
        if (scrollContainer) {
          scrollContainer.style.transform = 'translateX(0)';
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={ref} className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto section-pad-resp">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="h2-resp mb-6">Trades We Serve</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              We build automation systems for UK construction and trade businesses.
              From handling emergency callouts to managing project quotes, our systems work around the clock so you can focus on the job.
            </p>
            <Link to="/sectors">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                View All Sectors
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Visual Collage */}
            <div className="relative aspect-[4/3] bg-black border-2 border-white/20 rounded-2xl overflow-hidden">
              <svg
                viewBox="0 0 800 600"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Construction trades illustration"
              >
                {/* Background grid pattern */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="800" height="600" fill="url(#grid)" />

                {/* Scaffolding structure */}
                <g stroke="white" strokeWidth="3" fill="none" opacity="0.4">
                  <line x1="100" y1="150" x2="100" y2="500" />
                  <line x1="200" y1="150" x2="200" y2="500" />
                  <line x1="300" y1="150" x2="300" y2="500" />
                  <line x1="100" y1="200" x2="300" y2="200" />
                  <line x1="100" y1="300" x2="300" y2="300" />
                  <line x1="100" y1="400" x2="300" y2="400" />
                  <line x1="100" y1="150" x2="300" y2="150" />
                </g>

                {/* Hard hat silhouette */}
                <g fill="white" opacity="0.6">
                  <ellipse cx="550" cy="220" rx="80" ry="70" />
                  <rect x="470" y="220" width="160" height="20" rx="3" />
                  <rect x="520" y="180" width="60" height="40" rx="5" />
                </g>

                {/* Tool silhouettes */}
                <g fill="white" opacity="0.5">
                  {/* Hammer */}
                  <rect x="450" y="400" width="15" height="100" rx="3" transform="rotate(-30 457 450)" />
                  <rect x="430" y="380" width="50" height="30" rx="3" transform="rotate(-30 455 395)" />

                  {/* Wrench */}
                  <circle cx="600" cy="450" r="20" fill="none" stroke="white" strokeWidth="8" />
                  <rect x="595" y="430" width="10" height="80" rx="2" />
                </g>

                {/* Building outline */}
                <g stroke="white" strokeWidth="2" fill="none" opacity="0.3">
                  <rect x="500" y="320" width="200" height="180" />
                  <line x1="550" y1="320" x2="550" y2="500" />
                  <line x1="650" y1="320" x2="650" y2="500" />
                  <line x1="500" y1="380" x2="700" y2="380" />
                  <line x1="500" y1="440" x2="700" y2="440" />
                </g>

                {/* Safety barrier */}
                <g stroke="white" strokeWidth="3" opacity="0.4">
                  <line x1="150" y1="520" x2="650" y2="520" />
                  <line x1="200" y1="490" x2="220" y2="520" />
                  <line x1="300" y1="490" x2="320" y2="520" />
                  <line x1="400" y1="490" x2="420" y2="520" />
                  <line x1="500" y1="490" x2="520" y2="520" />
                  <line x1="600" y1="490" x2="620" y2="520" />
                </g>

                {/* Lightning bolt for electrical */}
                <g fill="white" opacity="0.7">
                  <polygon points="200,80 180,130 210,130 190,180 230,130 200,130" />
                </g>
              </svg>
            </div>

            {/* Scrolling icon strip (mobile only) */}
            <div className="md:hidden overflow-hidden bg-white/5 border border-white/10 rounded-lg py-3">
              <div
                ref={scrollRef}
                className="flex gap-8 whitespace-nowrap"
                style={{ willChange: 'transform' }}
              >
                {[...scrollingIcons, ...scrollingIcons, ...scrollingIcons].map((item, index) => (
                  <div key={index} className="inline-flex items-center gap-2 px-4">
                    <item.icon className="w-5 h-5 text-white/60" strokeWidth={2} />
                    <span className="text-sm text-white/60 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trade labels as pills */}
            <div className="flex flex-wrap gap-3">
              {featuredTrades.map((trade, index) => (
                <motion.div
                  key={trade.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                >
                  <Link
                    to={trade.route}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <trade.icon className="w-4 h-4" strokeWidth={2} />
                    <span>{trade.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
