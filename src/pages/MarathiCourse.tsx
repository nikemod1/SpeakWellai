import React from 'react';
import Navigation from '../components/Navigation';
import {
  Clock,
  Users,
  Mic,
  ArrowRight
} from 'lucide-react';

const MarathiCourse: React.FC = () => {
  const courseFeatures = [
    {
      icon: <Mic className="w-8 h-8 text-orange-600" />,
      title: "Speaking Practice",
      subtitle: "Fluent Conversations",
      description: "Build confidence in day-to-day Marathi conversations",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Native Speaker Sessions",
      subtitle: "Real Interaction",
      description: "Practice speaking with native Marathi speakers",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "30 Live Classes",
      subtitle: "1 Hour Daily",
      description: "Interactive sessions every day for one month",
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
              Learn the <span className="text-orange-600">Marathi Language</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Online Marathi Speaking Course
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Master spoken Marathi with 30 live classes. Get personalized attention and real practice with native speakers.
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
              Perfect for beginners and non-native speakers looking to build fluency, cultural understanding, and confidence.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700 font-medium">30-Day Course</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Users className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Live Online Classes</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Mic className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700 font-medium">Native Speaker Practice</span>
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
              A practical and engaging experience designed to help you speak Marathi with clarity and confidence.
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
