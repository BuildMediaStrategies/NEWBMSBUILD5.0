import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto section-pad-resp text-center">
        <p className="text-gray-400 mb-4">
          © 2025 BuildMediaStrategies.com. All rights reserved.
        </p>
        
        <nav aria-label="Legal" className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs opacity-80">
          <Link to="/about" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors">About</Link>
          <Link to="/privacy" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors">Privacy</Link>
          <Link to="/cookies" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors">Cookies</Link>
          <Link to="/terms" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors">Terms</Link>
          <Link to="/privacy-requests" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors">Data Requests</Link>
          <Link to="/subprocessors" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors">Sub-processors</Link>
          <Link to="/ai-transparency" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors">AI Transparency</Link>
          <Link to="/ai-compliance" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors">AI Compliance</Link>
          <Link to="/accessibility" className="text-gray-400 hover:text-white hover:opacity-100 transition-colors">Accessibility</Link>
        </nav>
      </div>
    </footer>
  );
}