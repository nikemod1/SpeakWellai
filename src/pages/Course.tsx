import React from 'react';
import Navigation from '../components/Navigation';
import {
  Clock,
  Users,
  Mic,
  Brain,
  ArrowRight
} from 'lucide-react';

const MarathiCourse: React.FC = () => {
  const courseFeatures = [
    {
      icon: <Mic className="w-8 h-8 text-orange-600" />,
      title: "Speaking Practice",
      subtitle: "Fluency with Expert Coaches",
      description: "60-minute real-time sessions with expert English speakers to improve spoken communication",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Live Interactive Classes",
      subtitle: "Weekend Learning",
      description: "90-minute live sessions on Saturday evenings and Sunday mornings for 8 weeks",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI Chatbot Access",
      subtitle: "Practice Anytime",
      description: "Boost your skills with unlimited AI-powered conversation practice",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Weekend <span className="text-orange-600">English Speaking</span> Course
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Learn to Speak with Confidence in 8 Weeks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Join our structured 8-week online course with 90-minute classes every weekend and expert-led speaking practice.
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
              Experience real progress with 24 hours of live instruction, 60-minute expert sessions, and 24/7 access to an AI-powered chatbot.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700 font-medium">8 Weeks</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Users className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Live Weekend Classes</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Brain className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700 font-medium">AI Practice Access</span>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="https://forms.gle/7o97QFeea99V6oEH7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enroll Now - ₹1500
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Interactive, practical, and flexible learning built for modern learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courseFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{feature.title}</h3>
                <h4 className="text-sm font-medium text-gray-600 mb-3">{feature.subtitle}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarathiCourse;
