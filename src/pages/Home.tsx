import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center px-6 md:px-16 lg:px-32 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
          Master English Speaking in <span className="text-blue-600">25 Days</span> with AI
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Interactive AI-powered speaking practice sessions + live classes from experts to make you confident and fluent.
        </p>
        <Link
          to="/join-now"
          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Join Now <Sparkles className="ml-2 w-5 h-5" />
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-32">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why SpeakWellAI?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'AI Speaking Practice',
              desc: 'Talk to AI bots anytime and get real-time feedback on your fluency and pronunciation.',
            },
            {
              title: 'Live Expert Classes',
              desc: 'Attend live daily classes from professional English coaches with personalized attention.',
            },
            {
              title: '25-Day Fast Track',
              desc: 'Our proven 25-day schedule guarantees confidence, fluency, and success.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Speak with Confidence?</h2>
        <p className="text-lg mb-6">Join now and get lifetime access to SpeakWellAI</p>
        <Link
          to="/join-now"
          className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transform transition-all duration-300"
        >
          Join for ₹1000
        </Link>
      </section>
    </div>
  );
};

export default Home;
