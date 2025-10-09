import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-gray-600 py-12">
      <div className="max-w-7xl mx-auto section-pad-resp text-center">
        {/* UK Contact Information */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <span>Based in Deal, Kent</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Call: 01304 123456</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Mon-Fri 9AM-6PM GMT</span>
            </div>
          </div>
          <div className="text-center">
            <a
              href="tel:+441304123456"
              className="inline-flex items-center bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Call 01304 123456 for free consultation"
            >
              Call Now for Free Consultation
            </a>
          </div>
        </div>
        
        <p className="text-gray-500 mb-4">
          © 2025 BuildMediaStrategies.com. All rights reserved.
        </p>
        
        <nav aria-label="Legal" className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs opacity-80">
          <Link to="/about" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded">About</Link>
          <Link to="/privacy" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded">Privacy</Link>
          <Link to="/cookies" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded">Cookies</Link>
          <Link to="/terms" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded">Terms</Link>
          <Link to="/privacy-requests" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded">Data Requests</Link>
          <Link to="/subprocessors" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded">Sub-processors</Link>
          <Link to="/ai-transparency" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded">AI Transparency</Link>
          <Link to="/ai-compliance" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded">AI Compliance</Link>
          <Link to="/accessibility" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded">Accessibility</Link>
        </nav>
      </div>
    </footer>
  );
}