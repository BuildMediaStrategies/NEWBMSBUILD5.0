import { Helmet } from 'react-helmet-async';
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
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    id: 'conversion',
    title: 'Conversion Systems',
    category: 'Conversion',
    icon: TrendingUp,
    tldr: 'Optimize your sales funnel with automated tracking and intelligent conversion improvements.',
    whatItSolves: [
      'Sales bottlenecks are invisible until revenue drops',
      'Manual A/B testing takes months to show meaningful results'
    ],
    whatYouGet: [
      'Automated funnel analysis and bottleneck detection',
      'Dynamic messaging optimization based on user behavior',
      'Real-time conversion rate monitoring',
      'Intelligent timing adjustments for maximum impact'
    ],
    outcomes: ['+25% conversion rate', '+30% revenue per visitor'],
    gradient: 'from-gray-600 to-gray-500'
  },
  {
    id: 'call-automation',
    title: 'Call Automation Systems',
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
    gradient: 'from-gray-500 to-gray-400'
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
    gradient: 'from-gray-600 to-gray-500'
  },
  {
    id: 'support',
    title: 'Support Systems',
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
    gradient: 'from-gray-500 to-gray-400'
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
    gradient: 'from-gray-400 to-gray-300'
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
    gradient: 'from-gray-600 to-gray-500'
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
    gradient: 'from-gray-500 to-gray-400'
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
    gradient: 'from-gray-400 to-gray-300'
  }
];

const filterCategories = [
  'All',
  'Lead Gen',
  'Conversion', 
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
              "addressLocality": "Dover",
              "addressRegion": "Kent",
              "addressCountry": "UK"
            },
            "areaServed": ["Dover","Kent"],
            "serviceProvided": ["Web Design","AI Automation","App Development","Full-Stack Development"],
            "sameAs": ["https://ifucantfindit.com"]
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
            Your Business Is Hemorrhaging Money Through{' '}
            <span className="gradient-text gradient-safe">Manual Processes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-resp p-narrow text-gray-400 line-clamp-3 sm:line-clamp-none"
          >
            <ResponsiveText
              short="Manual tasks leak revenue. Competitors close deals while you chase leads. These systems plug leaks automatically."
              long="Every manual task is a revenue leak. While you're manually qualifying leads, your competitors are closing deals. While you're chasing follow-ups, opportunities slip away. These systems plug the leaks and put money back in your pocket automatically."
              className="p-resp text-gray-400"
            />
          </motion.p>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto section-pad-resp">
          <div className="flex flex-wrap gap-3 justify-center">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <section ref={ref} className="pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSystems.map((system, index) => (
                <motion.div
                  key={system.id}
                  id={system.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 
                    hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-12 h-12 mb-4 rounded-lg bg-gray-700 p-3`}>
                    <system.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="h3-resp mb-3">{system.title}</h3>
                  <p className="p-resp text-gray-300 mb-4">{system.tldr}</p>
                  
                  <button
                    onClick={() => setExpandedSystem(expandedSystem === system.id ? null : system.id)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    <span>View details</span>
                    {expandedSystem === system.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {expandedSystem === system.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-white/10 space-y-6"
                    >
                      {/* What it solves */}
                      <div>
                        <h4 className="font-semibold mb-3 text-white">What it solves</h4>
                        <ul className="space-y-2">
                          {system.whatItSolves.map((point, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What you get */}
                      <div>
                        <h4 className="font-semibold mb-3 text-white">What you get</h4>
                        <ul className="space-y-2">
                          {system.whatYouGet.map((item, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start space-x-2">
                              <Check className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expected outcomes */}
                      <div>
                        <h4 className="font-semibold mb-3 text-white">Expected outcomes</h4>
                        <div className="flex flex-wrap gap-2">
                          {system.outcomes.map((outcome, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white/10 
                                border border-white/30 rounded-full text-xs font-medium text-white"
                            >
                              {outcome}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA buttons */}
                      <div className="flex space-x-3 pt-2">
                        <Link to="/contact" className="flex-1">
                          <button className="w-full bg-white text-black 
                            px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 
                            transition-all duration-300 flex items-center justify-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>Book a call</span>
                          </button>
                        </Link>
                        <Link to="/sectors" className="flex-1">
                          <button className="w-full bg-gray-800 border border-gray-600 text-white px-4 py-2 
                            rounded-lg text-sm font-medium hover:bg-gray-700 transition-all duration-300 
                            flex items-center justify-center space-x-2">
                            <ExternalLink className="w-4 h-4" />
                            <span>See examples</span>
                          </button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Table of Contents - Desktop */}
        <div className="hidden lg:block w-64 sticky top-24 h-fit">
          <div className="bg-gray-900 backdrop-blur-sm border border-gray-600 rounded-xl p-4">
            <h4 className="font-semibold mb-4 text-white">Systems</h4>
            <nav className="space-y-2">
              {systems.map((system) => (
                <a
                  key={system.id}
                  href={`#${system.id}`}
                  className={`block text-sm transition-colors ${
                    activeSection === system.id
                      ? 'text-white font-medium'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {system.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
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
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
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
      <section className="py-12 bg-gray-800 border-t border-gray-600">
        <div className="max-w-4xl mx-auto section-pad-resp text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h3 className="h3-resp mb-4">Stop The Money Drain</h3>
            <p className="p-resp text-gray-300 mb-6">Get a free audit of your biggest revenue leaks</p>
            <Link to="/contact">
              <button className="bg-white text-black px-8 py-3 
                rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 
                flex items-center space-x-2 mx-auto">
                <Calendar className="w-5 h-5" />
                <span>Get Free Revenue Audit</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}