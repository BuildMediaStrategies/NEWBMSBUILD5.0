import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ResponsiveText from '../components/ResponsiveText';

const caseStudies = [
  {
    id: 'little-co',
    title: 'Little & Co',
    category: 'Website + Branding',
    problem: 'Local business struggling with outdated website that failed to convert visitors into customers, resulting in lost leads and poor brand perception.',
    solution: 'Complete website redesign with modern branding, mobile-first approach, and conversion-optimized landing pages with clear calls-to-action.',
    result: '+150% website conversions, +85% mobile engagement, +40% brand recognition in local market within 3 months.',
    gradient: 'from-gray-700 to-gray-600'
  },
  {
    id: 'sos-electrical',
    title: 'SOS Electrical',
    category: 'Website + AI Sales Process',
    problem: 'Electrical contractor losing qualified leads due to slow response times and manual quote processes, with competitors capturing business.',
    solution: 'New responsive website integrated with AI-powered lead qualification system and automated quote generation for common electrical services.',
    result: '+200% lead response speed, +75% quote accuracy, +60% conversion rate from inquiry to booked job.',
    gradient: 'from-gray-600 to-gray-500'
  },
  {
    id: 'ifucantfindit',
    title: 'Ifucantfindit',
    category: 'WhatsApp Lead Agent',
    problem: 'Service directory missing potential customers due to complex inquiry process and delayed responses to service requests.',
    solution: 'Intelligent WhatsApp bot that qualifies service requests, matches customers with providers, and handles initial communications automatically.',
    result: '+300% inquiry handling capacity, +90% faster customer-provider matching, +45% successful service connections.',
    gradient: 'from-gray-500 to-gray-400'
  }
];

const testimonials = [
  {
    quote: "The new website transformed our business. We're getting quality leads every day now.",
    author: "Sarah Little",
    company: "Little & Co"
  },
  {
    quote: "The AI system handles our quotes perfectly. We can focus on the actual electrical work.",
    author: "Mike Thompson",
    company: "SOS Electrical"
  },
  {
    quote: "WhatsApp automation increased our service connections by 45%. Game changer.",
    author: "James Wilson",
    company: "Ifucantfindit"
  }
];

export default function CaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Helmet>
        <title>Case Studies – BuildMediaStrategies</title>
        <meta name="description" content="Case studies showcasing our web design, AI automation, and development work for Dover and Kent businesses." />
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
              Case Studies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-resp p-narrow text-gray-400"
            >
              <ResponsiveText
                short="Real results from real businesses that stopped their revenue leaks."
                long="Real results from real businesses that stopped their revenue leaks and transformed their websites into client acquisition machines."
              />
            </motion.p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section ref={ref} className="pb-20">
          <div className="max-w-7xl mx-auto section-pad-resp">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 
                    hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white">
                      {study.category}
                    </span>
                  </div>
                  
                  <h3 className="h3-resp mb-4">{study.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Problem</h4>
                      <p className="text-gray-400 text-sm">{study.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Solution</h4>
                      <p className="text-gray-400 text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Result</h4>
                      <p className="text-gray-300 text-sm font-medium">{study.result}</p>
                    </div>
                  </div>

                  <Link to="/contact">
                    <button className="w-full inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300"
                      style={{ background: 'linear-gradient(90deg, #FF6A00, #FF2E85)', color: '#fff' }}>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Book Your Free Website & Systems Audit</span>
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Slider */}
        <section className="py-20 bg-gray-900 border-t border-white/10">
          <div className="max-w-4xl mx-auto section-pad-resp">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <h2 className="h2-resp mb-4">What Our Clients Say</h2>
              <p className="p-resp text-gray-400">Real feedback from businesses that transformed their revenue</p>
            </motion.div>

            <div className="relative">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center"
              >
                <Quote className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <blockquote className="text-xl text-white mb-6 font-medium">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div>
                  <cite className="text-gray-300 font-semibold">
                    {testimonials[currentTestimonial].author}
                  </cite>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </motion.div>

              {/* Navigation buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-white' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-700 border-t border-white/10">
          <div className="max-w-4xl mx-auto section-pad-resp text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <h2 className="h2-resp mb-6">Ready to see what a conversion-ready site can do?</h2>
              <p className="p-resp text-gray-300 mb-8">Join these successful businesses and transform your website into a revenue machine</p>
              <Link to="/contact">
                <button className="inline-flex items-center rounded-xl px-8 py-4 text-lg font-semibold shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #FF6A00, #FF2E85)', color: '#fff' }}>
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Book Your Free Website & Systems Audit</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}