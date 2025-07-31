import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/course', label: 'Course' },
    { path: '/chatbot-practice', label: 'AI Practice' },
    { path: '/contact', label: 'Contact' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'shadow-2xl border-b border-gray-100 bg-transparent' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Title only (no logo) */}
          <Link to="/" className="flex flex-col leading-tight">
            <span className="text-2xl font-black text-gray-900">
              SpeakWell<span className="text-blue-600">AI</span>
            </span>
            <span className="text-xs text-gray-500 font-medium -mt-1">Powered by AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full group ${
                  isActive(item.path)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse" />
                )}
                {!isActive(item.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                )}
              </Link>
            ))}
            <Link
              to="/join-now"
              className="ml-4 btn-premium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-bold text-sm shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 animate-gradient"
            >
              <span className="flex items-center gap-2">
                Join Now
                <Sparkles className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-2xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-110"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 border-b border-gray-100 shadow-2xl">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-6 py-4 text-base font-semibold transition-all duration-300 rounded-2xl ${
                    isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/join-now"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-4 btn-premium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-4 rounded-2xl font-bold text-center shadow-2xl animate-gradient"
              >
                Join Now - ₹1000
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
