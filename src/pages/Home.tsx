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
  Sparkles,
  TrendingUp,
  Shield,
  Headphones,
  BookOpen,
  Mic
} from 'lucide-react';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "25-Day Intensive Program",
      description: "Structured daily sessions with expert instructors and AI-powered practice",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-10 h-10 text-purple-600" />,
      title: "Advanced AI Companion",
      description: "Practice speaking 24/7 with our intelligent chatbot that adapts to your level",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: "Expert 1-on-1 Sessions",
      description: "Personal coaching from certified English speaking professionals",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="w-10 h-10 text-orange-600" />,
      title: "Bilingual Learning",
      description: "Learn comfortably with Hindi + English friendly teaching approach",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Target className="w-10 h-10 text-indigo-600" />,
      title: "Guaranteed Results",
      description: "95% of students achieve fluency within 25 days or money back",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-600" />,
      title: "Industry Recognition",
      description: "Get certified credentials recognized by top companies",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Trained", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "25", label: "Days to Fluency", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", icon: <Brain className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      content: "SpeakWellAI completely transformed my confidence. The AI chatbot practice was a game-changer - I could practice anytime without feeling judged. Now I lead international meetings with ease!",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Rahul Patel",
      role: "Business Analyst at Microsoft",
      content: "From struggling with basic conversations to presenting to C-level executives in just 25 days. The personalized coaching and AI feedback made all the difference. Incredible program!",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Anjali Gupta",
      role: "Marketing Director at Amazon",
      content: "The best investment I've made in my career. The AI chatbot understood my weak points and helped me improve systematically. My English is now better than many native speakers!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const learningPath = [
    {
      week: "Week 1",
      title: "Foundation Building",
      description: "Grammar mastery and sentence construction",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      week: "Week 2", 
      title: "Vocabulary Expansion",
      description: "Advanced vocabulary and contextual usage",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      week: "Week 3",
      title: "Fluency Development",
      description: "AI-powered speaking practice and pronunciation",
      icon: <Mic className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      week: "Week 4",
      title: "Real-world Application",
      description: "Professional scenarios and confidence building",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '-4s'}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo Animation */}
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
              Speak Fluent English in{' '}
              <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                25 Days
              </span>
              <br />
              <span className="text-4xl md:text-6xl">with AI + Live Classes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your English speaking skills with our revolutionary AI-powered chatbot and expert live sessions. 
              Join thousands who've achieved fluency in record time.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/join-now"
                className="group btn-premium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 animate-gradient"
              >
                <span className="flex items-center justify-center gap-3">
                  Start Your Journey - ₹1000
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/chatbot-practice"
                className="group glass text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-2 border-white/30"
              >
                <span className="flex items-center justify-center gap-3">
                  Try AI Chatbot Free
                  <Brain className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Stats */}
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
              Why Choose <span className="gradient-text">SpeakWellAI</span>?
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary AI technology meets expert human guidance for unprecedented results
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

      {/* Learning Path */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Your <span className="gradient-text">Learning Journey</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              A carefully crafted 25-day program designed for maximum impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPath.map((week, index) => (
              <div key={index} className="relative">
                <div className="card-hover bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${week.color} opacity-5`}></div>
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${week.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}>
                      {week.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{week.week}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-4">{week.title}</h4>
                    <p className="text-gray-600">{week.description}</p>
                  </div>
                </div>
                {index < learningPath.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Stories</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Real transformations from students who achieved English fluency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-hover glass p-8 rounded-3xl border border-white/20"
              >
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-8 text-lg italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                    <p className="text-gray-300">{testimonial.role}</p>
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
              Ready to Transform Your Future?
            </h2>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Join thousands of successful students who've mastered English speaking. 
              Limited seats available - secure your spot today!
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20">
              <div className="text-6xl font-black text-white mb-4">₹1000</div>
              <p className="text-xl text-blue-100 mb-2">Complete 25-day program</p>
              <p className="text-lg text-blue-200 line-through">Regular price: ₹2500</p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">Money-back guarantee</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/join-now"
                className="group btn-premium bg-white text-blue-600 px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-3">
                  Enroll Now - Limited Seats!
                  <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
              <Link
                to="/course"
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
