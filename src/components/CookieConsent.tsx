import { useState, useEffect } from 'react';
import { X, Settings } from 'lucide-react';

interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  ts: number;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    analytics: false,
    marketing: false,
    ts: 0
  });

  useEffect(() => {
    const stored = localStorage.getItem('consent');
    if (stored) {
      const parsed = JSON.parse(stored);
      setConsent(parsed);
      // Expose consent globally
      (window as any).getConsent = () => parsed;
    } else {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (newConsent: Omit<ConsentState, 'ts'>) => {
    const consentWithTs = { ...newConsent, ts: Date.now() };
    localStorage.setItem('consent', JSON.stringify(consentWithTs));
    setConsent(consentWithTs);
    (window as any).getConsent = () => consentWithTs;
    setShowBanner(false);
    setShowPreferences(false);
    // Remove any body overflow restrictions when closing
    document.body.style.overflow = '';
  };

  const acceptAll = () => {
    saveConsent({ analytics: true, marketing: true });
  };

  const rejectNonEssential = () => {
    saveConsent({ analytics: false, marketing: false });
  };

  const savePreferences = () => {
    saveConsent({ analytics: consent.analytics, marketing: consent.marketing });
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10 p-4 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-white text-sm">
              We use cookies to improve your experience. Essential cookies are required for the site to function.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={acceptAll}
              className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all duration-300"
            >
              Accept all
            </button>
            <button
              onClick={rejectNonEssential}
              className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-300"
            >
              Reject non-essential
            </button>
            <button
              onClick={() => setShowPreferences(true)}
              className="bg-white/5 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-1"
            >
              <Settings className="w-4 h-4" />
              <span>Preferences</span>
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Cookie Preferences</h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">Essential</p>
                  <p className="text-gray-400 text-xs">Required for the site to function</p>
                </div>
                <div className="bg-green-600 rounded-full px-2 py-1 text-xs text-white">Always on</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">Analytics</p>
                  <p className="text-gray-400 text-xs">Help us improve the site</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) => setConsent(prev => ({ ...prev, analytics: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-400"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">Marketing</p>
                  <p className="text-gray-400 text-xs">Personalized ads and content</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={(e) => setConsent(prev => ({ ...prev, marketing: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-400"></div>
                </label>
              </div>
            </div>
            
            <div className="flex gap-2 mt-6">
              <button
                onClick={savePreferences}
                className="flex-1 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all duration-300"
              >
                Save preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}