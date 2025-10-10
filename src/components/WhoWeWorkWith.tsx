import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageSquare, Calendar, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const tradeLabels = [
  'Electricians',
  'Scaffolding',
  'Security & CCTV',
  'Builders',
  'Roofers',
  'Plumbers'
];

export default function WhoWeWorkWith() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsPaused(true);
      setProgress(100);
      return;
    }

    if (!inView) return;

    const duration = 4000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setProgress(0);
          requestAnimationFrame(animate);
        }, 1500);
      }
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [inView]);

  return (
    <section ref={ref} className="py-32 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto section-pad-resp">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Work With</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              We build automation systems for UK construction and trade businesses.
              From handling emergency callouts to managing project quotes, our systems work around the clock so you can focus on the job.
            </p>
            <Link to="/contact">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Column - Workflow Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Workflow Animation */}
            <div className="relative aspect-[4/3] bg-black border border-white/20 rounded-2xl overflow-hidden p-8 flex items-center justify-center">
              <svg
                viewBox="0 0 600 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Automated workflow illustration"
              >
                <defs>
                  <pattern id="workflow-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.05)" />
                  </pattern>

                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>

                <rect width="600" height="400" fill="url(#workflow-grid)" />

                {/* Main flow path */}
                <path
                  d="M 80 200 L 150 200 L 150 120 L 240 120 L 240 200 L 360 200 L 360 280 L 520 280"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Animated flow line */}
                {!isPaused && (
                  <path
                    d="M 80 200 L 150 200 L 150 120 L 240 120 L 240 200 L 360 200 L 360 280 L 520 280"
                    stroke="url(#flowGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="100"
                    strokeDashoffset={100 - progress}
                    style={{ transition: 'none' }}
                  />
                )}

                {/* Phone */}
                <g transform="translate(80, 200)">
                  <circle cx="0" cy="0" r="24" fill="black" stroke="white" strokeWidth="2" opacity={progress >= 0 ? "1" : "0.4"} />
                  <g transform="translate(-8, -8)" stroke="white" strokeWidth="2" fill="none">
                    <path d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <path d="M9 10h.01" />
                  </g>
                </g>

                {/* Email */}
                <g transform="translate(150, 120)">
                  <circle cx="0" cy="0" r="24" fill="black" stroke="white" strokeWidth="2" opacity={progress >= 25 ? "1" : "0.4"} />
                  <g transform="translate(-8, -8)" stroke="white" strokeWidth="2" fill="none">
                    <rect x="2" y="4" width="12" height="10" rx="2" />
                    <path d="m2 6 6 4 6-4" />
                  </g>
                </g>

                {/* Chat */}
                <g transform="translate(240, 200)">
                  <circle cx="0" cy="0" r="24" fill="black" stroke="white" strokeWidth="2" opacity={progress >= 50 ? "1" : "0.4"} />
                  <g transform="translate(-8, -8)" stroke="white" strokeWidth="2" fill="none">
                    <path d="M3 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5l-3 3v-3H5a2 2 0 0 1-2-2z" />
                  </g>
                </g>

                {/* Calendar */}
                <g transform="translate(360, 280)">
                  <circle cx="0" cy="0" r="24" fill="black" stroke="white" strokeWidth="2" opacity={progress >= 75 ? "1" : "0.4"} />
                  <g transform="translate(-8, -8)" stroke="white" strokeWidth="2" fill="none">
                    <rect x="3" y="4" width="10" height="10" rx="2" />
                    <path d="M3 8h10" />
                    <path d="M6 2v4" />
                    <path d="M10 2v4" />
                  </g>
                </g>

                {/* Checkmark */}
                <g transform="translate(520, 280)">
                  <circle cx="0" cy="0" r="24" fill="black" stroke="white" strokeWidth="2" opacity={progress >= 90 ? "1" : "0.4"} />
                  <g transform="translate(-8, -8)" stroke="white" strokeWidth="2.5" fill="none">
                    <path d="M4 8l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </g>

                {/* Labels */}
                <text x="80" y="245" textAnchor="middle" fill="white" fontSize="11" opacity="0.7">Enquiry</text>
                <text x="150" y="95" textAnchor="middle" fill="white" fontSize="11" opacity="0.7">Capture</text>
                <text x="240" y="245" textAnchor="middle" fill="white" fontSize="11" opacity="0.7">Qualify</text>
                <text x="360" y="325" textAnchor="middle" fill="white" fontSize="11" opacity="0.7">Schedule</text>
                <text x="520" y="325" textAnchor="middle" fill="white" fontSize="11" opacity="0.7">Complete</text>
              </svg>
            </div>

            {/* Trade labels */}
            <div className="flex flex-wrap gap-3">
              {tradeLabels.map((label) => (
                <div
                  key={label}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white"
                >
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
