import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Calendar, 
  Globe, 
  IndianRupee, 
  CheckCircle, 
  Users,
  Brain,
  MessageSquare,
  Award,
  ArrowRight,
  Star,
  Zap,
  Target,
  BookOpen,
  Mic,
  TrendingUp,
  Shield
} from 'lucide-react';

const Course: React.FC = () => {
  const weeklyBreakdown = [
    {
      week: "Week 1",
      focus: "Foundation & Grammar Mastery",
      topics: [
        "Essential grammar patterns and structures",
        "Sentence formation and basic conversations", 
        "Common phrases for daily interactions",
        "Pronunciation fundamentals"
      ],
      color: "from-blue-500 to-cyan-500",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      week: "Week 2", 
      focus: "Vocabulary & Contextual Usage",
      topics: [
        "Advanced vocabulary building techniques",
        "Word usage in professional contexts",
        "Idioms and expressions mastery",
        "Listening comprehension skills"
      ],
      color: "from-purple-500 to-pink-500",
      icon: <Brain className="w-8 h-8" />
    },
    {
      week: "Week 3",
      focus: "Fluency & AI-Powered Practice",
      topics: [
        "Speaking fluency development",
        "AI chatbot conversation practice",
        "Pronunciation improvement techniques",
        "Confidence building exercises"
      ],
      color: "from-green-500 to-emerald-500",
      icon: <Mic className="w-8 h-8" />
    },
    {
      week: "Week 4",
      focus: "Real-World Application & Mastery",
      topics: [
        "Professional workplace conversations",
        "Interview and presentation skills",
        "Social interaction scenarios",
        "Advanced fluency certification"
      ],
      color: "from-orange-500 to-red-500",
      icon: <Target className="w-8 h-8" />
    }
  ];

  const courseHighlights = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Live Interactive Classes",
      description: "Daily 1-hour sessions with certified expert instructors",
      features: ["Small batch sizes (max 20 students)", "Real-time doubt clearing", "Interactive group activities"]
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-600" />,
      title: "AI-Powered Practice",
      description: "24/7 intelligent chatbot companion for unlimited practice",
      features: ["Personalized conversation topics", "Real-time pronunciation feedback", "Progress tracking & analytics"]
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-green-600" />,
      title: "One-on-One Coaching",
      description: "Weekly personalized sessions with certified coaches",
      features: ["Individual attention & feedback", "Custom learning plans", "Confidence building techniques"]
    },
    {
      icon: <Award className="w-12 h-12 text-orange-600" />,
      title: "Industry Certification",
      description: "Recognized certificate upon successful completion",
      features: ["LinkedIn profile enhancement", "Career advancement support", "Lifetime credential validity"]
    }
  ];

  const courseStats = [
    { number: "25", label: "Days Program", icon: <Calendar className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "1000+", label: "Hours Content", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", icon: <Brain className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Software Engineer",
      content: "The structured approach and AI practice made all the difference. I went from being nervous about speaking to confidently presenting to international clients.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Sneha Patel",
      role: "Marketing Manager", 
      content: "The weekly breakdown was perfect. Each week built upon the previous one, and the AI chatbot helped me practice without any embarrassment.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '-2s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            SpeakWellAI <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">25-Day</span>
            <br />English Speaking Program
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            A comprehensive, AI-powered program designed to transform your English speaking skills 
            through expert guidance and cutting-edge technology
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {courseStats.map((stat, index) => (
              <div key={index} className="glass p-6 rounded-2xl text-center border border-white/20">
                <div className="flex justify-center mb-3 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <Link
            to="/join-now"
            className="inline-flex items-center gap-3 btn-premium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 animate-gradient"
          >
            Enroll Now - ₹1000
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Course <span className="gradient-text">Overview</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our comprehensive English speaking program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="card-hover bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mode</h3>
              <p className="text-gray-600 mb-4">Online Live Classes + AI Chatbot Practice</p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Flexible Learning</span>
              </div>
            </div>

            <div className="card-hover bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Duration</h3>
              <p className="text-gray-600 mb-4">25 Days Intensive Program</p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Proven Timeline</span>
              </div>
            </div>

            <div className="card-hover bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schedule</h3>
              <p className="text-gray-600 mb-4">1 Hour Daily + Unlimited AI Practice</p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Flexible Timing</span>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Languages</h4>
                    <p className="text-gray-600">Hindi + English friendly teaching approach for comfortable learning</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <IndianRupee className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Investment</h4>
                    <p className="text-gray-600">₹1000 (One-time payment) - Best value in the market</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Batch Size</h4>
                    <p className="text-gray-600">Limited to 20 students per batch for personalized attention</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="space-y-4">
                {[
                  "25 days of live interactive classes with expert instructors",
                  "Unlimited AI chatbot practice sessions (24/7 availability)",
                  "Weekly one-on-one expert consultations and feedback",
                  "Daily speaking exercises and personalized assignments",
                  "Comprehensive pronunciation and fluency assessments",
                  "Industry-recognized certificate of completion",
                  "Lifetime access to all course materials and recordings",
                  "Exclusive community support group access",
                  "Job interview preparation and professional communication",
                  "Money-back guarantee if not satisfied"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Course <span className="gradient-text">Highlights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four powerful components working together for maximum learning impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {courseHighlights.map((highlight, index) => (
              <div key={index} className="card-hover bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-3xl border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{highlight.description}</p>
                    <ul className="space-y-2">
                      {highlight.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Breakdown */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Weekly <span className="gradient-text">Learning Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A carefully structured 4-week journey from basics to advanced fluency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {weeklyBreakdown.map((week, index) => (
              <div key={index} className="card-hover bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${week.color}`}></div>
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${week.color} rounded-2xl flex items-center justify-center text-white`}>
                    {week.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{week.week}</h3>
                    <h4 className="text-xl font-semibold text-blue-600">{week.focus}</h4>
                  </div>
                </div>
                <ul className="space-y-3">
                  {week.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Student <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from students who completed our program
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-hover bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Special Launch Offer
          </h2>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 mb-12">
            <div className="text-7xl font-black text-white mb-4">₹1000</div>
            <p className="text-2xl text-blue-100 mb-2">Complete 25-day program</p>
            <p className="text-lg text-blue-200 line-through mb-6">Regular price: ₹2500</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-2 text-green-400">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Money-back guarantee</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-blue-300">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Instant access</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-purple-300">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Lifetime certificate</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/join-now"
              className="btn-premium bg-white text-blue-600 px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Enroll Now - ₹1000
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/chatbot-practice"
              className="glass text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-2 border-white/30 flex items-center justify-center gap-3"
            >
              Try Free Demo
              <Brain className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;