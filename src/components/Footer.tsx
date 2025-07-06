import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Brain, Instagram, Youtube, Mail, Phone, Sparkles, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-4 mb-6 group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <Sparkles className="w-5 h-5 text-yellow-400 absolute -top-2 -left-2 animate-pulse" />
              </div>
              <div>
                <span className="text-3xl font-black gradient-text">SpeakWell<span className="text-blue-400">AI</span></span>
                <p className="text-sm text-gray-400 font-medium">Powered by Advanced AI</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
              Master English speaking in just 25 days with AI-powered practice sessions and live expert classes. 
              Your journey to fluent English starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:text-pink-400 hover:bg-pink-500/20 transition-all duration-300 transform hover:scale-110 border border-white/20">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-500/20 transition-all duration-300 transform hover:scale-110 border border-white/20">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/course', label: 'Course Details' },
                { to: '/join-now', label: 'Join Now' },
                { to: '/chatbot-practice', label: 'AI Practice' },
                { to: '/contact', label: 'Contact Us' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Support</p>
                  <a href="mailto:support@speakwellai.com" className="text-white font-medium hover:text-blue-400 transition-colors">
                    support@speakwellai.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp Support</p>
                  <a href="https://wa.me/91XXXXXXXXXX" className="text-white font-medium hover:text-green-400 transition-colors">
                    +91-XXXXXXXXXX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <span>&copy; 2025 SpeakWellAI. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-400" /> in India
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;