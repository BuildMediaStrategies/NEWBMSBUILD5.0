import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Calendar } from 'lucide-react';
import ResponsiveText from '../components/ResponsiveText';

export default function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Helmet>
        <title>Contact BuildMediaStrategies – Dover & Kent Web Design Experts</title>
        <meta name="description" content="Get in touch with BuildMediaStrategies for Web Design, AI Automation, App Development, and Full-Stack systems in Dover and Kent." />
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
            "sameAs": ["https://ifucantfindit.com"]
          })}
        </script>
      </Helmet>
      <div className="bg-black text-white min-h-screen pt-20">
      <section ref={ref} className="py-32">
        <div className="max-w-7xl mx-auto section-pad-resp">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="h1-resp mb-6 heading-safe"
          >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="h1-resp heading-safe">
              Let's Build Your Website & <span className="gradient-text gradient-safe">Automation Strategy</span>
            </h1>

            <p className="p-resp p-narrow text-gray-400 mt-3">
              <ResponsiveText
                short="Ready to transform your website? Let's discuss your automation strategy."
                long="Ready to transform your website into a client acquisition machine? Let's discuss your custom automation strategy."
              />
            </p>
          </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="h2-resp mb-8">Let's Start a Conversation</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-500">jj@buildmediastrategies.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-500">Based in Deal, Kent</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="h3-resp mb-4">Why Choose BuildMediaStrategies?</h3>
                <ul className="space-y-3 text-gray-500">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="p-resp">Proven track record with 500+ successful automation implementations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="p-resp">Average 40% increase in operational efficiency for our clients</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="p-resp">24/7 support and ongoing optimization of your systems</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 
                        placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 
                        placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-500 mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 
                        placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition-all duration-300"
                      placeholder="+44 7123 456789"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-500 mb-2">Company (Optional)</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 
                        placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-500 mb-2">Subject</label>
                  <select
                    id="subject"
                    className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition-all duration-300"
                  >
                    <option value="">Select a topic</option>
                    <option value="website">Website Design</option>
                    <option value="automation">Automation Systems</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 
                      placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition-all duration-300"
                    placeholder="Tell us about your website goals and automation needs..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-white text-black rounded-lg px-8 py-4
                    flex items-center justify-center space-x-2 hover:bg-gray-200 
                    transition-all duration-300"
                >
                  <span>Book Your Free Website & Systems Audit</span>
                  <Send className="w-5 h-5" />
                </motion.button>
                
                <div className="text-center pt-4 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-2">Prefer a call? Book instantly here</p>
                  <a 
                    href="https://calendly.com/buildmediastrategies" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </a>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}