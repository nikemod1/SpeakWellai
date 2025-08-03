import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
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
  Shield,
  Play,
  Download,
  Headphones,
  Heart
} from 'lucide-react';

const MarathiCourse: React.FC = () => {
  const courseFeatures = [
    {
      icon: <Mic className="w-8 h-8 text-orange-600" />,
      title: "मराठी बोलणे",
      subtitle: "Marathi Speaking",
      description: "दैनंदिन संभाषणात प्रवाहता मिळवा",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "व्याकरण शिक्षण",
      subtitle: "Grammar Learning",
      description: "मराठी व्याकरणाची संपूर्ण माहिती",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      title: "ऐकण्याचे कौशल्य",
      subtitle: "Listening Skills",
      description: "मराठी भाषेतील ऐकण्याची क्षमता वाढवा",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: "सांस्कृतिक ज्ञान",
      subtitle: "Cultural Knowledge",
      description: "महाराष्ट्राची संस्कृती आणि परंपरा",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const learningPath = [
    {
      level: "प्राथमिक (Beginner)",
      duration: "आठवडा 1-2",
      topics: [
        "मराठी वर्णमाला आणि उच्चार",
        "मूलभूत शब्दसंग्रह (500+ शब्द)",
        "साधे वाक्य रचना",
        "दैनंदिन अभिवादन आणि संभाषण"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      level: "मध्यम (Intermediate)",
      duration: "आठवडा 3-4",
      topics: [
        "जटिल वाक्य रचना",
        "व्यावसायिक शब्दसंग्रह",
        "प्रवाह संभाषण सराव",
        "मराठी साहित्य परिचय"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      level: "प्रगत (Advanced)",
      duration: "आठवडा 5-6",
      topics: [
        "उच्च दर्जाचे व्याकरण",
        "सार्वजनिक भाषण कौशल्य",
        "व्यावसायिक संवाद",
        "मराठी संस्कृती आणि परंपरा"
      ],
      color: "from-blue-500 to-indigo-500"
    }
  ];

  const testimonials = [
    {
      name: "अनिता देशमुख",
      nameEng: "Anita Deshmukh",
      role: "शिक्षिका (Teacher)",
      content: "या कोर्समुळे मला मराठी भाषेत आत्मविश्वासाने बोलता आले. आता मी शाळेत मुलांना मराठीत शिकवू शकते.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "राहुल पाटील",
      nameEng: "Rahul Patil",
      role: "व्यापारी (Businessman)",
      content: "महाराष्ट्रात व्यापार करण्यासाठी मराठी भाषा आवश्यक होती. हा कोर्स खूप उपयुक्त ठरला!",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
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
              <span className="text-orange-600">मराठी भाषा</span> शिका
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Learn Marathi Language
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              महाराष्ट्राची भाषा, संस्कृती आणि परंपरा शिका. AI तंत्रज्ञानाच्या मदतीने मराठी भाषेत प्रवाहता मिळवा.
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
              Learn Maharashtra's language, culture, and traditions. Achieve fluency in Marathi with AI-powered assistance.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700 font-medium">6 आठवड्यांचा कोर्स</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Users className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">थेट वर्ग</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Brain className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700 font-medium">AI सराव</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/join-now"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                आता नोंदणी करा - ₹1200
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                डेमो पहा
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              तुम्ही काय शिकाल
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              व्यावहारिक संवाद कौशल्यावर भर देणारे संपूर्ण मराठी शिक्षण
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Comprehensive Marathi learning with focus on practical communication skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Learning Path */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              तुमचा शिक्षणाचा प्रवास
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              नवशिक्या पासून प्रगत मराठी भाषिकापर्यंत संरचित प्रगती
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Structured progression from beginner to advanced Marathi speaker
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPath.map((level, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-full h-2 bg-gradient-to-r ${level.color} rounded-full mb-6`}></div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{level.level}</h3>
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {level.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {level.topics.map((topic, topicIndex) => (
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

      {/* Course Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                कोर्सची माहिती
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">कालावधी आणि वेळापत्रक</h3>
                    <p className="text-gray-600">6 आठवड्यांचा गहन कार्यक्रम दररोज 1 तासाचे थेट वर्ग आणि अमर्यादित AI सराव सत्रांसह.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">वर्गाचा आकार</h3>
                    <p className="text-gray-600">वैयक्तिक लक्ष आणि चांगल्या संवादासाठी जास्तीत जास्त 15 विद्यार्थ्यांचे छोटे गट.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">प्रमाणपत्र</h3>
                    <p className="text-gray-600">LinkedIn प्रोफाइल सुधारणेसह पूर्ण झाल्यावर उद्योग-मान्यताप्राप्त प्रमाणपत्र.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <IndianRupee className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">गुंतवणूक</h3>
                    <p className="text-gray-600">संपूर्ण 6 आठवड्यांच्या कार्यक्रमासाठी ₹1200 सामग्रीच्या आजीवन प्रवेशासह.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">काय समाविष्ट आहे</h3>
              <div className="space-y-4">
                {[
                  "42 तासांचे थेट परस्परसंवादी वर्ग",
                  "अमर्यादित AI चॅटबॉट सराव (24/7)",
                  "साप्ताहिक एक-ते-एक प्रशिक्षण सत्रे",
                  "सर्वसमावेशक अभ्यास सामग्री आणि कार्यपत्रके",
                  "उच्चार आणि बोली सुधारणा साधने",
                  "नकली मुलाखती आणि बोलण्याचे मूल्यांकन",
                  "रेकॉर्ड केलेल्या सत्रांचा आजीवन प्रवेश",
                  "समुदाय समर्थन गट प्रवेश",
                  "उद्योग-मान्यताप्राप्त पूर्णता प्रमाणपत्र",
                  "नोकरी मुलाखत तयारी मॉड्यूल"
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

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              यशाच्या कथा
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              ज्या विद्यार्थ्यांनी त्यांचे मराठी बोलण्याचे कौशल्य बदलले त्यांचे खरे परिणाम
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Real results from students who transformed their Marathi speaking skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.nameEng}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            मराठी भाषा शिकायला तयार आहात?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            हजारो यशस्वी शिकणाऱ्यांमध्ये सामील व्हा ज्यांनी आत्मविश्वासाने मराठी संवादाने त्यांचे करिअर बदलले
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join-now"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              आता नोंदणी करा - ₹1200
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              माहितीपत्र डाउनलोड करा
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarathiCourse;
