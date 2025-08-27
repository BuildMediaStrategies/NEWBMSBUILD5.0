import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin } from 'lucide-react';
import ResponsiveText from '../components/ResponsiveText';

export default function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
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
              Get In <span className="gradient-text gradient-safe">Touch</span>
            </h1>

            <p className="p-resp p-narrow text-gray-400 mt-3">
              <ResponsiveText
                short="Ready to stop revenue leaks? Let's discuss plugging your profit drains."
                long="Ready to stop revenue leaks? Let's discuss plugging your profit drains and building a system that scales."
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
                    <p className="text-gray-400">jj@buildmediastrategies.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Remote based workflow</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="h3-resp mb-4">Why Choose BuildMediaStrategies?</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="p-resp">Proven track record with 500+ successful automation implementations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="p-resp">Average 40% increase in operational efficiency for our clients</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                        placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                        transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                        placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                        transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                      placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                      transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <select
                    id="subject"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                      transition-all duration-300"
                  >
                    <option value="">Select a topic</option>
                    <option value="automation">Automation Systems</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                      placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                      transition-all duration-300"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-8 py-4
                    flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-pink-700 
                    transition-all duration-300"
                >
                  <span>Get My Revenue Audit</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}