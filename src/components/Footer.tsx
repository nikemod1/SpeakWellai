import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Text */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">SpeakWellAI</h2>
            <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
              Master English speaking in just 25 days with AI-powered practice sessions and live expert classes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/course', label: 'Course Details' },
                { to: '/join-now', label: 'Join Now' },
                { to: '/chatbot-practice', label: 'AI Practice' },
                { to: '/contact', label: 'Contact Us' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.to} className="text-gray-300 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:support@speakwellai.com" className="hover:text-blue-300 transition">
                  support@speakwellai.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-400" />
                <a href="https://wa.me/91XXXXXXXXXX" className="hover:text-green-300 transition">
                  +91-XXXXXXXXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400">
          <div className="mb-4 md:mb-0">&copy; 2025 SpeakWellAI. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
