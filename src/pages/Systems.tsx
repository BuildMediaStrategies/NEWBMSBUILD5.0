import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import ResponsiveText from '../components/ResponsiveText';
import { 
  Target, 
  TrendingUp, 
  Phone, 
  Bot, 
  HeadphonesIcon, 
  Users, 
  FolderKanban, 
  Share2, 
  MousePointer,
  ChevronDown,
  ChevronUp,
  Check,
  Calendar,
  ExternalLink
} from 'lucide-react';

const IMG: Record<string,string> = {
  "Lead Capture Systems": "https://github.com/BuildMediaStrategies/BUILDMEDIASTRATEGIESASSETS/blob/cea35a1b9d5c89eade5587ad1097cd62732ff067/ChatGPT%20Image%20Sep%2027%2C%202025%2C%2001_49_10%20AM.png?raw=1",
  "AI Lead Generation": "https://github.com/BuildMediaStrategies/BUILDMEDIASTRATEGIESASSETS/blob/cea35a1b9d5c89eade5587ad1097cd62732ff067/ChatGPT%20Image%20Sep%2027%2C%202025%2C%2001_49_07%20AM.png?raw=1",
  "FORGE": "https://github.com/BuildMediaStrategies/BUILDMEDIASTRATEGIESASSETS/blob/cea35a1b9d5c89eade5587ad1097cd62732ff067/ChatGPT%20Image%20Sep%2027%2C%202025%2C%2001_49_05%20AM.png?raw=1",
  "Customer Support Systems": "https://github.com/BuildMediaStrategies/BUILDMEDIASTRATEGIESASSETS/blob/cea35a1b9d5c89eade5587ad1097cd62732ff067/ChatGPT%20Image%20Sep%2027%2C%202025%2C%2001_48_59%20AM.png?raw=1",
  "Project Management Systems": "https://github.com/BuildMediaStrategies/BUILDMEDIASTRATEGIESASSETS/blob/cea35a1b9d5c89eade5587ad1097cd62732ff067/ChatGPT%20Image%20Sep%2027%2C%202025%2C%2001_49_01%20AM.png?raw=1",
  "Web Design": "https://github.com/BuildMediaStrategies/BUILDMEDIASTRATEGIESASSETS/blob/c03bca18704b8ba2c96dc17827c81231416639f4/Logo%20Design%20for%20Web%20Development.png?raw=1",
  "AI Sales Systems": "https://github.com/BuildMediaStrategies/BUILDMEDIASTRATEGIESASSETS/blob/cea35a1b9d5c89eade5587ad1097cd62732ff067/ChatGPT%20Image%20Sep%2027%2C%202025%2C%2001_48_54%20AM.png?raw=1",
  "Call Automation": "https://github.com/BuildMediaStrategies/BUILDMEDIASTRATEGIESASSETS/blob/cea35a1b9d5c89eade5587ad1097cd62732ff067/ChatGPT%20Image%20Sep%2027%2C%202025%2C%2001_48_49%20AM.png?raw=1",
  "Social Media Automation": "https://github.com/BuildMediaStrategies/BUILDMEDIASTRATEGIESASSETS/blob/cea35a1b9d5c89eade5587ad1097cd62732ff067/ChatGPT%20Image%20Sep%2027%2C%202025%2C%2001_48_57%20AM.png?raw=1",
  "Recruitment Systems": "https://github.com/BuildMediaStrategies/BUILDMEDIASTRATEGIESASSETS/blob/cea35a1b9d5c89eade5587ad1097cd62732ff067/ChatGPT%20Image%20Sep%2027%2C%202025%2C%2001_49_03%20AM.png?raw=1",
};

const systems = [
  {
    id: 'lead-gen',
    title: 'AI Lead Generation',
    category: 'Lead Gen',
    icon: Target,
    tldr: 'Automatically identify and qualify high-value prospects using intelligent scoring algorithms.',
    whatItSolves: [
      'Manual lead qualification wastes hours of sales team time',
      'Low-quality leads clog your pipeline and reduce conversion rates'
    ],
    whatYouGet: [
      'AI-powered lead scoring and qualification system',
      'Automated prospect research and data enrichment',
      'Smart routing to the right team members',
      'Real-time lead quality analytics dashboard'
    ],
    outcomes: ['+40% lead quality', '-15 hrs/week manual work'],
  },
  {
    id: 'conversion',
    title: 'Websites & Mobile Apps',
    category: 'Websites & Apps',
    icon: TrendingUp,
    tldr: 'High-performance websites and mobile apps focused on speed, UX, and measurable outcomes.',
    whatItSolves: [
      'Slow, outdated sites lose enquiries and trust',
      'Inconsistent mobile experience hurts conversion'
    ],
    whatYouGet: [
      'Modern, fast website or app with clear UX',
      'Lead capture and booking flows that convert',
      'Robust analytics and SEO foundations',
      'Secure, scalable architecture'
    ],
    outcomes: ['+25% conversion rate', '+40% faster load times'],
  },
  {
    id: 'call-automation',
    title: 'Call Automation',
    category: 'Call Automation',
    icon: Phone,
    tldr: 'Streamline phone communications with intelligent routing and automated follow-ups.',
    whatItSolves: [
      'Important calls get missed or forgotten in busy schedules',
      'Manual call logging and follow-up scheduling is time-consuming'
    ],
    whatYouGet: [
      'Smart call routing based on caller intent and urgency',
      'Automated appointment scheduling and calendar integration',
      'Call recording and transcription with action items',
      'Follow-up reminder system with personalized messaging'
    ],
    outcomes: ['+50% call connection rate', '-8 hrs/week admin'],
  },
  {
    id: 'ai-sales',
    title: 'AI Sales Systems',
    category: 'AI Sales',
    icon: Bot,
    tldr: 'Automate sales processes with personalized sequences that adapt to each prospect.',
    whatItSolves: [
      'Generic sales outreach gets ignored by busy prospects',
      'Sales reps struggle to maintain consistent follow-up timing'
    ],
    whatYouGet: [
      'AI-powered personalization for every prospect interaction',
      'Automated sequence optimization based on response patterns',
      'Intelligent timing for maximum engagement rates',
      'Sales performance analytics and coaching insights'
    ],
    outcomes: ['+35% response rate', '+20% deal velocity'],
  },
  {
    id: 'support',
    title: 'Customer Support Systems',
    category: 'Support',
    icon: HeadphonesIcon,
    tldr: 'Handle customer inquiries instantly while routing complex issues with full context.',
    whatItSolves: [
      'Customers wait too long for simple questions to be answered',
      'Support agents lack context when handling escalated issues'
    ],
    whatYouGet: [
      'AI chatbot for instant common inquiry resolution',
      'Smart ticket routing with customer history and context',
      'Automated satisfaction surveys and feedback collection',
      'Knowledge base that learns from every interaction'
    ],
    outcomes: ['+60% faster response', '+40% satisfaction'],
  },
  {
    id: 'recruitment',
    title: 'Recruitment Systems',
    category: 'Recruitment',
    icon: Users,
    tldr: 'Automate candidate screening and interview coordination while maintaining personal touch.',
    whatItSolves: [
      'HR teams spend too much time on initial candidate screening',
      'Scheduling interviews becomes a complex coordination nightmare'
    ],
    whatYouGet: [
      'Automated resume screening and candidate ranking',
      'Smart interview scheduling with calendar integration',
      'Personalized candidate communication sequences',
      'Hiring pipeline analytics and bottleneck identification'
    ],
    outcomes: ['-50% time to hire', '+30% candidate quality'],
  },
  {
    id: 'project-management',
    title: 'Project Management Systems',
    category: 'Project Management',
    icon: FolderKanban,
    tldr: 'Keep projects on track with automated milestone tracking and stakeholder updates.',
    whatItSolves: [
      'Project delays go unnoticed until deadlines are missed',
      'Stakeholders constantly ask for status updates via email or calls'
    ],
    whatYouGet: [
      'Automated milestone tracking and risk detection',
      'Smart stakeholder notifications based on project status',
      'Resource allocation optimization and conflict resolution',
      'Project performance analytics and predictive insights'
    ],
    outcomes: ['+25% on-time delivery', '-12 hrs/week reporting'],
  },
  {
    id: 'social-media',
    title: 'Social Media Automation',
    category: 'Social Media',
    icon: Share2,
    tldr: 'Maintain consistent brand presence with intelligent posting and engagement management.',
    whatItSolves: [
      'Consistent social media posting requires daily manual effort',
      'Responding to comments and messages becomes overwhelming'
    ],
    whatYouGet: [
      'AI-powered content scheduling based on audience behavior',
      'Automated comment moderation and response suggestions',
      'Cross-platform posting with optimized formatting',
      'Social media performance analytics and growth insights'
    ],
    outcomes: ['+80% posting consistency', '+45% engagement'],
  },
  {
    id: 'lead-capture',
    title: 'Lead Capture Systems',
    category: 'Lead Capture',
    icon: MousePointer,
    tldr: 'Maximize conversion rates with forms that adapt based on visitor behavior patterns.',
    whatItSolves: [
      'Generic forms have low conversion rates across different visitor types',
      'Valuable leads leave without providing contact information'
    ],
    whatYouGet: [
      'Dynamic form optimization based on visitor behavior',
      'Smart field reduction to minimize form abandonment',
      'Exit-intent popups with personalized messaging',
      'Lead capture analytics with conversion optimization insights'
    ],
    outcomes: ['+55% form conversion', '+30% lead volume'],
  }
];

const filterCategories = [
  'All',
  'Lead Gen',
  'Websites & Apps', 
  'Call Automation',
  'AI Sales',
  'Support',
  'Recruitment',
  'Project Management',
  'Social Media',
  'Lead Capture'
];

const faqs = [
  {
    question: 'How much do these automation systems cost?',
    answer: 'Pricing varies based on your specific needs and scale. Most systems start at $2,000-5,000 for setup plus monthly fees. We offer custom packages and ROI-based pricing for larger implementations.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'Simple systems can be live in 2-3 weeks. Complex multi-system implementations typically take 6-12 weeks. We provide detailed timelines during our consultation call.'
  },
  {
    question: 'What integrations are supported?',
    answer: 'We integrate with 200+ popular business tools including CRMs (Salesforce, HubSpot), email platforms (Mailchimp, Klaviyo), calendars, payment processors, and custom APIs.'
  },
  {
    question: 'How do you handle data security and privacy?',
    answer: 'All systems are built with enterprise-grade security, GDPR compliance, and SOC 2 standards. Your data stays in your existing tools - we never store sensitive customer information.'
  },
  {
    question: 'What support do you provide after launch?',
    answer: 'Every system includes 90 days of optimization support, ongoing monitoring, and access to our help desk. We also provide training for your team and quarterly performance reviews.'
  }
];

export default function Systems() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedSystem, setExpandedSystem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredSystems = activeFilter === 'All' 
    ? systems 
    : systems.filter(system => system.category === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      const sections = systems.map(system => document.getElementById(system.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(systems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Systems – Web Design & AI Automation Dover | BuildMediaStrategies</title>
        <meta name="description" content="Explore BuildMediaStrategies' systems: Web Design, AI Automation, App Development, and Full-Stack Development in Dover & Kent." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BuildMediaStrategies",
            "url": "https://buildmediastrategies.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Deal",
              "addressRegion": "Kent",
              "addressCountry": "GB"
            },
            "areaServed": ["GB", "United Kingdom", "England", "Kent", "Deal"],
            "telephone": "+44-1304-123456",
            "priceRange": "£££",
            "currenciesAccepted": "GBP",
            "serviceProvided": ["Web Design","AI Automation","App Development","Full-Stack Development"],
            "sameAs": []
          })}
        </script>
      </Helmet>
      <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto section-pad-resp text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="h1-resp mb-6 heading-safe"
          >
            Stop Losing Revenue to{' '}
            <span className="gradient-text gradient-safe">Manual Processes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-resp p-narrow text-gray-400 line-clamp-3 sm:line-clamp-none"
          >
            <ResponsiveText
              short="Manual tasks cost you jobs. While you chase leads, competitors close deals. These systems work 24/7."
              long="Manual tasks cost you real jobs. While you manually qualify leads, competitors close deals. While you chase follow-ups, opportunities slip away. These systems work around the clock."
              className="p-resp text-gray-400"
            />
          </motion.p>
        </div>
      </section>

      {/* Featured: FORGE (Top of page, under H1) */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto section-pad-resp">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-12 overflow-hidden"
          >
            {/* Glow layers */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-1 rounded-[2rem]"
              initial={{ boxShadow: '0 0 0 rgba(255,255,255,0)' }}
              animate={{ boxShadow: [
                '0 0 0 rgba(255,255,255,0)',
                '0 0 80px rgba(255,255,255,0.08)',
                '0 0 0 rgba(255,255,255,0)'
              ] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

            <div className="grid md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-white/90">New System</span>
                <h2 className="h2-resp heading-safe">FORGE - Scaffolding Project Management</h2>
                <p className="p-resp text-gray-300">The ultimate system for scaffolding firms. Built for speed, clarity, and control across jobs and teams.</p>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
                  <li className="flex items-start space-x-2"><span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2" /><span>Tracking tools and materials</span></li>
                  <li className="flex items-start space-x-2"><span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2" /><span>Generate drawing designs</span></li>
                  <li className="flex items-start space-x-2"><span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2" /><span>Contact staff, assign gangs</span></li>
                  <li className="flex items-start space-x-2"><span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2" /><span>Automatic daily job lists per staff member</span></li>
                </ul>
                <div>
                  <Link to="/contact">
                    <button type="button" className="mt-4 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">Enquire about FORGE</button>
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl bg-[#0B0B0B] ring-1 ring-white/10 aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img src={IMG["FORGE"]} alt="FORGE" loading="lazy" decoding="async"
                       className="max-h-full max-w-full w-full h-full object-contain p-6" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Websites & Mobile Apps – Featured Card (animated) */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto section-pad-resp">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-white/10 p-8 lg:p-12 overflow-hidden"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-1 rounded-[2rem]"
              initial={{ boxShadow: '0 0 0 rgba(255,255,255,0)' }}
              animate={{ boxShadow: [
                '0 0 0 rgba(255,255,255,0)',
                '0 0 80px rgba(255,255,255,0.08)',
                '0 0 0 rgba(255,255,255,0)'
              ] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

            <div className="grid md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1 space-y-6">
                <h2 className="h2-resp heading-safe">Websites & Mobile Apps</h2>
                <p className="p-resp text-gray-300">
                  Build fast, reliable, accessible experiences that convert - designed for UK trades and
                  services. Conversion-first, mobile-ready, and measurable.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-white font-semibold mb-1">Speed</p>
                    <p className="text-gray-300 text-sm">Core Web Vitals, image optimisation, SSR-ready.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-white font-semibold mb-1">Reliability</p>
                    <p className="text-gray-300 text-sm">Secure, scalable, uptime-focused builds.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-white font-semibold mb-1">Conversion</p>
                    <p className="text-gray-300 text-sm">Booking flows, quote tools, clear CTAs.</p>
                  </div>
                </div>
                <div>
                  <Link to="/contact">
                    <button type="button" className="mt-4 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">Enquire</button>
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl bg-[#0B0B0B] ring-1 ring-white/10 aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img src={IMG["Web Design"]} alt="Web Design" loading="lazy" decoding="async"
                       className="max-h-full max-w-full w-full h-full object-contain p-6" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Removed filter chips for unified card layout */}

      {/* Removed old grid and TOC for unified large-card layout */}

      

      {/* All Other Systems – Animated Large Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto section-pad-resp space-y-12">
          {systems.filter(s => s.id !== 'conversion').map((sys, idx) => (
            <motion.div
              key={sys.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative rounded-3xl border border-white/10 p-8 lg:p-12 overflow-hidden"
            >
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-1 rounded-[2rem]"
                initial={{ boxShadow: '0 0 0 rgba(255,255,255,0)' }}
                whileInView={{ boxShadow: '0 0 80px rgba(255,255,255,0.06)' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
              <div className="grid md:grid-cols-2 gap-8">
                <div className="order-2 md:order-1 space-y-6">
                  <h3 className="h2-resp heading-safe">{sys.title}</h3>
                  <p className="p-resp text-gray-300">{sys.tldr}</p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {(sys.whatYouGet.slice(0,3)).map((feat, fIdx) => (
                      <div key={fIdx} className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-white font-semibold mb-1">Feature {fIdx + 1}</p>
                        <p className="text-gray-300 text-sm">{feat}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <Link to="/contact">
                      <button type="button" className="mt-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">Enquire</button>
                    </Link>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="rounded-2xl bg-[#0B0B0B] ring-1 ring-white/10 aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <img src={IMG[sys.title]} alt={sys.title} loading="lazy" decoding="async"
                         className="max-h-full max-w-full w-full h-full object-contain p-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section (moved beneath CTA) */}
      <section className="py-20 border-t border-gray-600">
        <div className="max-w-4xl mx-auto section-pad-resp">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="h2-resp mb-4">Common Concerns About Automation</h2>
            <p className="p-resp text-gray-300">Everything you need to know about our automation systems</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 backdrop-blur-sm border border-gray-600 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  aria-expanded={expandedFaq === index}
                  aria-label={faq.question}
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-300" />
                  )}
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="p-resp text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-20 bg-gray-900 border-t border-gray-600">
        <div className="max-w-4xl mx-auto section-pad-resp text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="h2-resp mb-6">Ready to Build a Revenue-Ready Website?</h2>
            <p className="p-resp text-gray-300 mb-8">Turn your website into a 24/7 client acquisition machine</p>
            <Link to="/contact">
              <button type="button" className="bg-white text-black px-8 py-3
                rounded-lg font-medium hover:bg-gray-200 transition-all duration-300
                flex items-center space-x-2 mx-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                <Calendar className="w-5 h-5" />
                <span>Book Free Audit</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      
    </div>
    </>
  );
}