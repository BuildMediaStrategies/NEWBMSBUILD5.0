import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ResponsiveText from '../components/ResponsiveText';
import { 
  Hammer, 
  ShoppingCart, 
  Heart, 
  Coffee, 
  Briefcase, 
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Check,
  Calendar
} from 'lucide-react';

const sectors = [
  {
    id: 'construction',
    icon: Hammer,
    title: 'Construction',
    benefit: 'Capture and qualify project leads, auto-quote, and schedule site visits',
    challenges: [
      'Manual lead qualification wastes valuable time on unqualified prospects',
      'Quote generation and site visit scheduling creates administrative bottlenecks'
    ],
    solutions: [
      'Automated lead scoring identifies high-value prospects instantly',
      'Smart quote generation based on project parameters and historical data',
      'Intelligent scheduling system coordinates site visits with availability'
    ],
    outcomes: ['+40% qualified leads', '-12 hrs admin/week', '+25% quote accuracy'],
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    id: 'retail',
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    benefit: 'Recover carts, personalize offers, and automate customer chat',
    challenges: [
      'Cart abandonment rates remain high without timely intervention',
      'Generic customer support fails to address specific shopping concerns'
    ],
    solutions: [
      'Intelligent cart recovery sequences with personalized messaging',
      'AI-powered chat that understands product questions and purchase intent',
      'Dynamic offer personalization based on browsing and purchase history'
    ],
    outcomes: ['+35% cart recovery', '+50% chat resolution', '+20% repeat sales'],
    gradient: 'from-gray-600 to-gray-500'
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Healthcare & Clinics',
    benefit: 'Route enquiries, manage bookings, send reminders and follow-ups',
    challenges: [
      'Patient enquiries often reach the wrong department causing delays',
      'Missed appointments and poor follow-up compliance affect patient outcomes'
    ],
    solutions: [
      'Smart enquiry routing based on symptoms and appointment type',
      'Automated appointment reminders via preferred communication channels',
      'Follow-up care sequences that improve treatment compliance'
    ],
    outcomes: ['+60% enquiry resolution', '-30% missed appointments', '+45% follow-up compliance'],
    gradient: 'from-gray-500 to-gray-400'
  },
  {
    id: 'hospitality',
    icon: Coffee,
    title: 'Hospitality & Leisure',
    benefit: 'Handle bookings, waitlists, and post-visit reviews on autopilot',
    challenges: [
      'Manual booking management leads to overbooking and customer frustration',
      'Collecting guest feedback requires constant manual follow-up efforts'
    ],
    solutions: [
      'Intelligent booking system with real-time availability and waitlist management',
      'Automated review requests sent at optimal timing for maximum response',
      'Guest preference tracking for personalized future experiences'
    ],
    outcomes: ['+50% booking efficiency', '+80% review collection', '+25% repeat bookings'],
    gradient: 'from-gray-600 to-gray-500'
  },
  {
    id: 'professional',
    icon: Briefcase,
    title: 'Professional Services',
    benefit: 'Automate intake, proposals, and client updates',
    challenges: [
      'Client intake processes are time-consuming and inconsistent',
      'Proposal generation and client communication requires significant manual effort'
    ],
    solutions: [
      'Streamlined intake forms with intelligent routing to appropriate specialists',
      'Automated proposal generation using templates and client-specific data',
      'Regular client update sequences that maintain engagement and transparency'
    ],
    outcomes: ['+45% intake efficiency', '-20 hrs proposal time', '+35% client satisfaction'],
    gradient: 'from-gray-500 to-gray-400'
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education & Training',
    benefit: 'Enroll leads, schedule sessions, and send course reminders',
    challenges: [
      'Student enrollment processes are complex and often incomplete',
      'Course scheduling and reminder management requires constant administrative attention'
    ],
    solutions: [
      'Automated enrollment workflows that guide students through each step',
      'Smart scheduling system that optimizes class times and instructor availability',
      'Personalized reminder sequences that improve attendance and engagement'
    ],
    outcomes: ['+55% enrollment completion', '+40% attendance rates', '-15 hrs admin/week'],
    gradient: 'from-gray-400 to-gray-300'
  }
];

const faqs = [
  {
    question: 'Do you serve small businesses?',
    answer: 'Absolutely! Our automation systems are designed to scale from small businesses to large enterprises. We offer flexible packages that grow with your business, starting with essential automations that deliver immediate value.'
  },
  {
    question: 'Can this work for nonprofits?',
    answer: 'Yes, we work with nonprofits and offer special pricing for qualifying organizations. Our systems help nonprofits automate donor communications, volunteer coordination, and impact reporting to maximize their mission effectiveness.'
  },
  {
    question: 'What integrations are supported?',
    answer: 'We integrate with 200+ popular business tools including CRMs (Salesforce, HubSpot), email platforms (Mailchimp, Klaviyo), calendars, payment processors, and custom APIs. If you use it, we can likely connect to it.'
  },
  {
    question: 'How industry-specific are the solutions?',
    answer: 'Very specific. Each automation system is customized for your industry\'s unique workflows, compliance requirements, and customer expectations. We don\'t use generic templates - every solution is tailored to your sector.'
  },
  {
    question: 'What if my industry isn\'t listed?',
    answer: 'We work with many industries beyond those highlighted here. Our automation principles apply across sectors - if you have repetitive processes and customer communications, we can help streamline them.'
  }
];

export default function Sectors() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [expandedSector, setExpandedSector] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Sectors – Web Design & AI Automation Solutions Dover & Kent</title>
        <meta name="description" content="See how BuildMediaStrategies supports multiple sectors in Dover & Kent with modern web design, AI automation, and development services." />
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
            Industries Ready for <span className="gradient-text gradient-safe">Revenue Growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-resp p-narrow text-gray-400 line-clamp-3 sm:line-clamp-none"
          >
            <ResponsiveText
              short="Every industry grows differently. We identify sector-specific opportunities and capture them automatically."
              long="Every industry has unique growth opportunities. Recovered appointments, captured carts, qualified leads converting to sales. We've identified the biggest growth potential in each sector and built systems that capture it automatically."
              className="p-resp text-gray-400"
            />
          </motion.p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section ref={ref} className="pb-20">
        <div className="max-w-7xl mx-auto section-pad-resp">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 
                  hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${sector.gradient} p-3`}>
                  <sector.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="h3-resp mb-3">{sector.title}</h3>
                <p className="p-resp text-gray-400 mb-4">{sector.benefit}</p>
                
                <button
                  onClick={() => setExpandedSector(expandedSector === sector.id ? null : sector.id)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  <span>Learn more</span>
                  {expandedSector === sector.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {expandedSector === sector.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-white/10 space-y-6"
                  >
                    {/* Key challenges */}
                    <div>
                      <h4 className="font-semibold mb-3 text-white">Key challenges</h4>
                      <ul className="space-y-2">
                        {sector.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How automation helps */}
                    <div>
                      <h4 className="font-semibold mb-3 text-white">How automation helps</h4>
                      <ul className="space-y-2">
                        {sector.solutions.map((solution, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-start space-x-2">
                            <Check className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results you can expect */}
                    <div>
                      <h4 className="font-semibold mb-3 text-white">Results you can expect</h4>
                      <div className="flex flex-wrap gap-2">
                        {sector.outcomes.map((outcome, idx) => (
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
                          <span>Book Your Free Website & Systems Audit</span>
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Sticky CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 text-center border border-white/10"
          >
            <h3 className="h3-resp mb-4">See Your Industry's Growth Potential?</h3>
            <p className="p-resp text-gray-300 mb-6">Let's identify and capture the opportunities specific to your business</p>
            <Link to="/contact">
              <button className="bg-white text-black px-8 py-3 
                rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 
                flex items-center space-x-2 mx-auto">
                <Calendar className="w-5 h-5" />
                <span>Book Your Free Website & Systems Audit</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto section-pad-resp">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="h2-resp mb-4">Industry-Specific Growth Questions</h2>
            <p className="p-resp text-gray-400">Common questions about maximizing potential across different sectors</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
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
                    <p className="p-resp text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-12 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-t border-white/10">
        <div className="max-w-4xl mx-auto section-pad-resp text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h3 className="h3-resp mb-4">Don't See Your Industry?</h3>
            <p className="p-resp text-gray-400 mb-6">Every business has growth potential. Let's find yours and capture it.</p>
            <Link to="/contact">
              <button className="bg-white text-black px-8 py-3 
                rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 
                flex items-center space-x-2 mx-auto">
                <Calendar className="w-5 h-5" />
                <span>Book Your Free Website & Systems Audit</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}