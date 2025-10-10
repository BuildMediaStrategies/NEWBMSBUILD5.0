import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const systems = [
  {
    title: 'AI Lead Generation',
    outcome: 'More qualified jobs from every enquiry'
  },
  {
    title: 'Call Automation Systems',
    outcome: 'Answer missed calls and book jobs automatically'
  },
  {
    title: 'Conversion Systems',
    outcome: 'Recover quotes and turn warm leads into bookings'
  },
  {
    title: 'Sales Systems',
    outcome: 'Follow ups sent and deals moved on time'
  },
  {
    title: 'Project Management Systems',
    outcome: 'Jobs and tasks updated in one place'
  },
  {
    title: 'Support Systems',
    outcome: '24/7 replies with smooth human handoff'
  }
];

function SystemRow({ system, index }: { system: typeof systems[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : index * 0.08 }}
      className="group border-b border-white/10 py-8 md:py-10 focus-within:outline-none"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:font-extrabold transition-all duration-200">
            <span className="group-hover:underline decoration-white/40 underline-offset-4 decoration-2">
              {system.title}
            </span>
          </h3>
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          <p className="text-base md:text-lg text-gray-400 max-w-sm md:text-right">
            {system.outcome}
          </p>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="text-sm md:text-base text-white hover:underline underline-offset-4 decoration-1 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded px-1"
          >
            Get this system
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function SystemsOverview() {
  return (
    <section className="py-24 md:py-32 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto section-pad-resp">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Rail - Sticky */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                Systems We Build
              </h2>
              <p className="text-lg md:text-xl text-gray-400">
                Each designed to save time and close more jobs
              </p>
            </div>
          </div>

          {/* Right Track - Scrolling List */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {systems.map((system, index) => (
                <SystemRow key={system.title} system={system} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
