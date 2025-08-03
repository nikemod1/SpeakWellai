import React from 'react';
import { Sparkles } from 'lucide-react';

const JoinNow: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 pt-24 px-6 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 justify-center">
          <Sparkles className="w-8 h-8 text-yellow-400" />
          Submit Enquiry Form
        </h2>

        <p className="text-lg text-gray-300 mb-10">
          Thank you for your interest in our courses! Please click the button below to fill out our enquiry form.
          Our team will get in touch with you shortly to guide you through the next steps.
        </p>

        <div className="text-center">
          <a
            href="https://forms.gle/u4V4Jipi7nr3gAGTA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-6 rounded-2xl font-black text-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 animate-gradient"
          >
            <span className="flex items-center justify-center gap-3">
              Submit Enquiry Form
              <Sparkles className="w-6 h-6" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
