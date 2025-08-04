import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { Target, Eye, BookOpen, Brain, Globe, Code } from 'lucide-react';

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
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Speak confidently with our AI-powered speaking assistant. Practice. Improve. Succeed.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Globe className="w-4 h-4" />
            Indian Languages
          </span>
          <span className="flex items-center gap-1">
            <Code className="w-4 h-4" />
            Programming Skills
          </span>
          <span className="flex items-center gap-1">
            <Brain className="w-4 h-4" />
            AI & ML Powered
          </span>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Purpose & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering learners across India with quality education and cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To democratize quality education by providing an affordable and practical online learning platform. 
                We empower learners to master Indian languages, including English, and gain industry-relevant skills 
                in programming, machine learning, Python, and deep learning — all powered by cutting-edge AI and ML technologies.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Affordable Education
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Language Mastery
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Tech Skills
                </span>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To become India's most trusted digital learning hub for language and technology education — 
                bridging the skill gap, breaking language barriers, and preparing every learner for a smarter, 
                AI-driven world.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  Trusted Platform
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  Bridge Skills Gap
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  AI-Driven Future
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why SpeakWellAI?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Personalized speaking practice, real-time AI feedback, and flexible learning at your pace.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Feedback</h3>
              <p className="text-gray-600 leading-relaxed">
                Instant, intelligent feedback powered by advanced AI to refine your speaking skills and accelerate learning.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fluency Boost</h3>
              <p className="text-gray-600 leading-relaxed">
                Practice daily with practical topics and real-world scenarios to build confidence and fluency naturally.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Track Progress</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your improvements with detailed analytics and set clear, achievable speaking goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of learners who are already mastering languages and tech skills with SpeakWellAI
          </p>
          <a
  href="https://forms.gle/u4V4Jipi7nr3gAGTA"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl inline-block text-center"
>
  Enroll For Free Demo Class
</a>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-white mb-6">
            <h3 className="text-2xl font-bold mb-2">SpeakWell<span className="text-blue-400">AI</span></h3>
            <p className="text-gray-400">Empowering India's digital learning revolution</p>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} SpeakWell AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
