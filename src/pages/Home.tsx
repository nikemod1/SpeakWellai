import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';

const Home: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      <Navigation scrollDirection={scrollDirection} />

      {/* Hero Section */}
      <section className="pt-28 pb-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          SpeakWell<span className="text-blue-600">AI</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Speak confidently with our AI-powered speaking assistant. Practice. Improve. Succeed.
        </p>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why SpeakWellAI?</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Personalized speaking practice, real-time AI feedback, and flexible learning at your pace.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-64 p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">AI Feedback</h3>
            <p className="text-sm text-gray-600">Instant, intelligent feedback to refine your speaking skills.</p>
          </div>
          <div className="w-64 p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Fluency Boost</h3>
            <p className="text-sm text-gray-600">Practice daily with practical topics to grow your confidence.</p>
          </div>
          <div className="w-64 p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Track Progress</h3>
            <p className="text-sm text-gray-600">Monitor your improvements and set clear speaking goals.</p>
          </div>
        </div>
      </section>

      {/* Footer (optional if not handled globally) */}
      <footer className="py-10 bg-gray-100 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SpeakWell AI. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
