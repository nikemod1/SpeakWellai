import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Users, 
  Clock, 
  Star, 
  CheckCircle, 
  Brain,
  Zap,
  Globe,
  Target,
  Award,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "Live Weekend Classes",
      description: "90-minute interactive sessions every Saturday & Sunday for 8 weeks",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-10 h-10 text-purple-600" />,
      title: "AI Chatbot Practice",
      description: "24/7 speaking practice with our intelligent AI companion",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: "Personalized Coaching",
      description: "Small batches with a 60-minute 1-on-1 expert session",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="w-10 h-10 text-orange-600" />,
      title: "English or Marathi",
      description: "Choose your preferred language for comfortable learning",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Target className="w-10 h-10 text-indigo-600" />,
      title: "Practical Learning",
      description: "Real-life conversations for school, work, or daily life",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-600" />,
      title: "Completion Certificate",
      description: "Earn a certificate to showcase your speaking skills",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "8", label: "Weeks Duration", icon: <Clock className="w-6 h-6" /> },
    { number: "16", label: "Live Sessions", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "AI Practice", icon: <Brain className="w-6 h-6" /> },
    { number: "₹1500", label: "Affordable Fee", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const audiences = [
    {
      title: "School Children",
      description: "Build confidence and improve pronunciation",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "College Students",
      description: "Prepare for interviews and group discussions",
      icon: <Users className="w-8 h-8 text-purple-600" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Professionals",
      description: "Enhance communication at work",
      icon: <Users className="w-8 h-8 text-green-600" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Homemakers",
      description: "Speak fluently in everyday life",
      icon: <Users className="w-8 h-8 text-orange-600" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '-4s'}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center animate-pulse-glow">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-4 -left-4 animate-pulse" />
                <Sparkles className="w-6 h-6 text-blue-400 absolute -bottom-2 -right-2 animate-pulse" style={{animationDelay: '1s'}} />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Speak Fluent{' '}
              <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                English or Marathi
              </span>
              <br />
              <span className="text-4xl md:text-6xl">in 8 Weeks</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your weekends with live online classes, 24/7 AI practice, and expert guidance to speak confidently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/enroll"
                className="group btn-premium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 animate-gradient"
              >
                <span className="flex items-center justify-center gap-3">
                  Enroll Now - ₹1500
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/try-ai"
                className="group glass text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-2 border-white/30"
              >
                <span className="flex items-center justify-center gap-3">
                  Try AI Chatbot Free
                  <Brain className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="glass p-6 rounded-2xl text-center">
                  <div className="flex justify-center mb-3 text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Why Choose <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SpeakWellAI</span>?
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Expert-led classes and AI technology for unmatched speaking confidence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group card-hover bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Who Can <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Join</span>?
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Tailored batches for all ages and backgrounds to speak fluently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audiences.map((audience, index) => (
              <div key={index} className="relative">
                <div className="card-hover bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-5`}></div>
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${audience.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}>
                      {audience.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{audience.title}</h3>
                    <p className="text-gray-600">{audience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Ready to Speak Confidently?
            </h2>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Join our 8-week weekend course to master English or Marathi. Limited seats – enroll today!
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20">
              <div className="text-6xl font-black text-white mb-4">₹1500</div>
              <p className="text-xl text-blue-100 mb-2">Complete 8-week program</p>
              <p className="text-lg text-blue-200">Includes AI chatbot, expert session, and certificate</p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">No hidden charges</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/enroll"
                className="group btn-premium bg-white text-blue-600 px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-3">
                  Enroll Now - Limited Seats!
                  <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
              <Link
                to="/course-details"
                className="group glass text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-2 border-white/30"
              >
                <span className="flex items-center justify-center gap-3">
                  View Course Details
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
