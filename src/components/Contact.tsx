import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Phone, Mail } from 'lucide-react';
import ResponsiveText from '../components/ResponsiveText';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="contact" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto section-pad-resp">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="h2-resp mb-6">Start Your Free Strategy Session</h2>
          <ResponsiveText
            as="p"
            className="p-resp p-narrow text-gray-400 line-clamp-3 sm:line-clamp-none"
            short="Tell us about your business goals and we'll show you exactly how automation can help you achieve them."
            long="Tell us about your business goals and we'll show you exactly how automation can help you achieve them faster and more efficiently."
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="h3-resp mb-8">Ready to Transform Your Business?</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Fast Implementation</h4>
                  <p className="text-gray-400">Systems built and launched in days, not months</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Proven Results</h4>
                  <p className="text-gray-400">Average 40% increase in operational efficiency</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="h3-resp mb-4">What You Get</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="p-resp">Custom AI automation systems tailored to your business</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="p-resp">24/7 lead generation and customer engagement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="p-resp">Ongoing optimization and support</span>
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
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 
                      placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 
                      placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 
                      placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company (Optional)</label>
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
                <label htmlFor="goal" className="block text-sm font-medium text-gray-400 mb-2">Choose your goal</label>
                <select
                  id="goal"
                  className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    transition-all duration-300"
                >
                  <option value="">Select your primary goal</option>
                  <option value="lead-gen">Lead Generation</option>
                  <option value="sales-automation">Sales Automation</option>
                  <option value="project-system">Project Management System</option>
                  <option value="customer-support">Customer Support Automation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Tell us about your business</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-white/90 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 
                    placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    transition-all duration-300"
                  placeholder="What challenges are you facing? What would you like to automate?"
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
                <span>Start Your Free Strategy Session</span>
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
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Call
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}