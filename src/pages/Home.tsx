import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Speak Fluent English with AI
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Master English in just 25 days with AI-powered practice and live expert sessions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/join-now"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg transition"
            >
              Join Now
            </Link>
            <Link
              to="/course"
              className="border border-white text-white px-6 py-3 rounded-xl text-lg transition hover:bg-white hover:text-black"
            >
              View Course
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Why SpeakWellAI?</h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">AI Practice Sessions</h3>
              <p className="text-gray-600">Practice conversations with our intelligent AI to improve your fluency and confidence.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-green-600">Live Expert Classes</h3>
              <p className="text-gray-600">Attend live sessions with certified trainers to fine-tune your speaking skills.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">25-Day Roadmap</h3>
              <p className="text-gray-600">Structured program to help you achieve spoken English mastery in less than a month.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
