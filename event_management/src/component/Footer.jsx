import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Company</h2>
            <ul className="space-y-2 text-lg text-gray-300">
              <li><button className="hover:text-orange-400">About</button></li>
              <li><button className="hover:text-orange-400">Blog</button></li>
              <li><button className="hover:text-orange-400">Jobs</button></li>
              <li><button className="hover:text-orange-400">Partners</button></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Solutions</h2>
            <ul className="space-y-2 text-lg text-gray-300">
              <li><button className="hover:text-orange-400">Marketing</button></li>
              <li><button className="hover:text-orange-400">Analytics</button></li>
              <li><button className="hover:text-orange-400">Commerce</button></li>
              <li><button className="hover:text-orange-400">Insights</button></li>
              <li><button className="hover:text-orange-400">Support</button></li>
            </ul>
          </div>

          {/* Documentation */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Documentation</h2>
            <ul className="space-y-2 text-lg text-gray-300">
              <li><button className="hover:text-orange-400">Guides</button></li>
              <li><button className="hover:text-orange-400">API Status</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Legal</h2>
            <ul className="space-y-2 text-lg text-gray-300">
              <li><button className="hover:text-orange-400">Claim</button></li>
              <li><button className="hover:text-orange-400">Privacy</button></li>
              <li><button className="hover:text-orange-400">Terms</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© 2023 My Company. All rights reserved.</p>
          <p>Made with ❤️ by Me.</p>
          <p>Icons by Freepik from www.flaticon.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
