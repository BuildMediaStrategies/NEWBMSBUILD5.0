import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Systems from './pages/Systems';
import Sectors from './pages/Sectors';
import ContactPage from './pages/ContactPage';
import WebDesignDover from './pages/WebDesignDover';
import AiAutomationDover from './pages/AiAutomationDover';
import FullStackDover from './pages/FullStackDover';
import WebDesignKent from './pages/WebDesignKent';
import AppDevelopmentKent from './pages/AppDevelopmentKent';
import FullStackKent from './pages/FullStackKent';
import Privacy from './pages/privacy';
import Cookies from './pages/cookies';
import Terms from './pages/terms';
import PrivacyRequests from './pages/privacy-requests';
import Subprocessors from './pages/subprocessors';
import AiTransparency from './pages/ai-transparency';
import AiCompliance from './pages/ai-compliance';
import Accessibility from './pages/accessibility';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <Router>
      <div className="bg-black">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/systems" element={<Systems />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/web-design-dover" element={<WebDesignDover />} />
          <Route path="/ai-automation-dover" element={<AiAutomationDover />} />
          <Route path="/full-stack-development-dover" element={<FullStackDover />} />
          <Route path="/web-design-kent" element={<WebDesignKent />} />
          <Route path="/app-development-kent" element={<AppDevelopmentKent />} />
          <Route path="/full-stack-development-kent" element={<FullStackKent />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-requests" element={<PrivacyRequests />} />
          <Route path="/subprocessors" element={<Subprocessors />} />
          <Route path="/ai-transparency" element={<AiTransparency />} />
          <Route path="/ai-compliance" element={<AiCompliance />} />
          <Route path="/accessibility" element={<Accessibility />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;