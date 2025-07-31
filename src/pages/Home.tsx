import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Speak Fluent English with Confidence
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Join our 25-day program combining live expert sessions and AI-powered practice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/join-now"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium transition"
            >
              Join Now
            </Link>
            <Link
              to="/course"
              className="border border-gray-300 hover:border-gray-600 text-gray-800 px-6 py-3 rounded-lg text-base font-medium transition"
            >
              Course Details
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">AI Practice</h3>
            <p className="text-gray-600">
              Simulate real conversations using smart AI to build your fluency naturally.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-600">Live Classes</h3>
            <p className="text-gray-600">
              Learn from certified English trainers who guide you through every step.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Structured Plan</h3>
            <p className="text-gray-600">
              A step-by-step roadmap to achieve your speaking goals in just 25 days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
