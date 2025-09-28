import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Quote, TrendingUp, Users, Zap } from 'lucide-react';
import ResponsiveText from '../components/ResponsiveText';

const caseStudies = [
  {
    id: 'curecancer-ucl',
    title: 'CureCancer @ UCL',
    category: 'Charity / Research Project',
    industry: 'Non‑profit / Academia',
    timeline: 'Ongoing',
    challenge: 'Charity research initiative requiring a clear, credible web presence to communicate impact and drive donations while remaining accessible and compliant.',
    solution: 'Clean, accessible site structure with focused messaging, fast load times, and donation pathways that reduce friction for supporters and researchers.',
    results: [
      { metric: 'Clarity & Trust Signals', value: 'Improved', icon: TrendingUp },
      { metric: 'Accessibility', value: 'Enhanced', icon: Users },
      { metric: 'Performance', value: 'Optimised', icon: Zap }
    ],
    testimonial: "Professional, fast, and focused on outcomes — exactly what we needed.",
    author: "Project Team",
    gradient: 'from-gray-700 to-gray-600',
    image: 'https://github.com/BuildMediaStrategies/BMSAIASSETS/blob/2d7930b51ff8071f72d1937570b26405c6adc4b7/2a26a5f0-5b74-47b0-8c42-8e20a3982577.png?raw=true',
    alt: 'Hero section of CureCancer @ UCL website.',
    externalUrl: 'https://curecancer-ucl.org/'
  },
  {
    id: 'sos-electrical',
    title: 'SOS Electrical LTD',
    category: 'Website + AI Sales Process',
    industry: 'Electrical Services',
    timeline: '4 weeks',
    challenge: 'Slow response times and manual quoting led to missed enquiries and admin burden.',
    solution: 'Responsive site with AI qualification, automated quoting for common jobs, and instant replies.',
    results: [
      { metric: 'Enquiries', value: '+71%', icon: TrendingUp },
      { metric: 'Admin Hours', value: '−38%', icon: Users },
      { metric: 'First Response', value: '<60s', icon: Zap }
    ],
    testimonial: "The AI system handles our quotes. We focus on the work.",
    author: "Mike Thompson",
    gradient: 'from-gray-700 to-gray-600',
    image: 'https://github.com/BuildMediaStrategies/BMSAIASSETS/blob/2d7930b51ff8071f72d1937570b26405c6adc4b7/62cc0135-156f-410f-84a8-b9c744fbd0f2.png?raw=true',
    alt: 'Hero section of SOS Electrical LTD website.',
    externalUrl: 'https://soselectricalltd.co.uk/'
  },
  {
    id: 'little-co',
    title: 'Little & Co',
    category: 'Branding / E‑Commerce Project',
    industry: 'Retail',
    timeline: '6 weeks',
    challenge: 'Outdated site underperformed for conversions and didn’t reflect the brand.',
    solution: 'Modern brand system, mobile-first UX, conversion-led PDPs and streamlined checkout.',
    results: [
      { metric: 'Website Conversions', value: '+150%', icon: TrendingUp },
      { metric: 'Mobile Engagement', value: '+85%', icon: Users },
      { metric: 'Brand Recognition', value: '+40%', icon: Zap }
    ],
    testimonial: "We’re getting quality leads every day now.",
    author: "Sarah Little",
    gradient: 'from-gray-700 to-gray-600',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
    alt: 'Hero section of Little & Co website.',
    externalUrl: undefined
  }
];

const testimonials = [
  {
    quote: "We’re getting quality leads every day now.",
    author: "Sarah Little",
    company: "Little & Co",
    result: "150% more conversions"
  },
  {
    quote: "The AI system handles our quotes perfectly. We can focus on the actual electrical work.",
    author: "Mike Thompson",
    company: "SOS Electrical LTD",
    result: "<60s first response"
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
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto section-pad-resp text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300 mb-6">
                Success Stories
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="h1-resp mb-6 heading-safe"
            >
              Real Results from Real Businesses
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-resp p-narrow text-gray-400 mb-12"
            >
              <ResponsiveText
                short="See how we've turned websites into client acquisition machines."
                long="See how we've turned websites into client acquisition machines that capture growth potential and deliver measurable results."
              />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">150%+</div>
                <div className="text-gray-400 text-sm">Average Conversion Increase</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">6 Weeks</div>
                <div className="text-gray-400 text-sm">Average Project Timeline</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction Rate</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section ref={ref} className="pb-20">
          <div className="max-w-7xl mx-auto section-pad-resp">
            <div className="space-y-20">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group"
                >
                  <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${study.gradient} p-1`}>
                    <div className="bg-black rounded-3xl p-8 lg:p-12">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-8">
                          <div>
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                              <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white">
                                {study.category}
                              </span>
                              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                                {study.industry}
                              </span>
                              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                                {study.timeline}
                              </span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">{study.title}</h2>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h3 className="text-xl font-semibold text-white mb-3">The Challenge</h3>
                              <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                            </div>

                            <div>
                              <h3 className="text-xl font-semibold text-white mb-3">Our Solution</h3>
                              <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                            </div>
                          </div>

                          {/* Results Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                                <result.icon className="w-6 h-6 text-white mx-auto mb-2" />
                                <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                                <div className="text-xs text-gray-400">{result.metric}</div>
                              </div>
                            ))}
                          </div>

                          {/* Testimonial */}
                          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <Quote className="w-8 h-8 text-gray-400 mb-4" />
                            <blockquote className="text-lg text-white mb-4 font-medium italic">
                              "{study.testimonial}"
                            </blockquote>
                            <cite className="text-gray-300 font-semibold">
                              — {study.author}
                            </cite>
                          </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                          <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                            <img
                              src={study.image}
                              alt={('alt' in study && (study as any).alt) ? (study as any).alt : `${study.title} case study visualization`}
                              className="w-full h-full object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          </div>
                        </div>
                        {('externalUrl' in study && (study as any).externalUrl) && (
                          <div className="mt-6">
                            <a
                              href={(study as any).externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-white/90 hover:text-white transition-colors text-sm font-medium"
                            >
                              Visit website
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Slider */}
        <section className="py-20 bg-gray-900/50 border-y border-white/10">
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
              >
                <Quote className="w-12 h-12 text-gray-400 mx-auto mb-6" />
                <blockquote className="text-xl lg:text-2xl text-white mb-6 font-medium leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="mb-4">
                  <cite className="text-gray-300 font-semibold text-lg">
                    {testimonials[currentTestimonial].author}
                  </cite>
                  <p className="text-gray-400">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300">
                  {testimonials[currentTestimonial].result}
                </div>
              </motion.div>

              {/* Navigation buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center space-x-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto section-pad-resp text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-3xl p-12"
            >
              <h2 className="h2-resp mb-6">Ready to Join These Success Stories?</h2>
              <p className="p-resp text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your website into a revenue machine and join these successful businesses
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Get Your Free Strategy Session</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}