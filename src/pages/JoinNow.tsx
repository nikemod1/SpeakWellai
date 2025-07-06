import React, { useState } from 'react';
import { CheckCircle, Clock, Users, Award, CreditCard, QrCode, Sparkles, Shield, Zap, Star } from 'lucide-react';

const JoinNow: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    timeSlot: '',
    experience: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const timeSlots = [
    "6:00 AM - 7:00 AM (Early Bird)",
    "7:00 AM - 8:00 AM (Morning)", 
    "8:00 AM - 9:00 AM (Morning)",
    "6:00 PM - 7:00 PM (Evening)",
    "7:00 PM - 8:00 PM (Evening)",
    "8:00 PM - 9:00 PM (Night)"
  ];

  const benefits = [
    "25 days of live interactive classes with expert instructors",
    "Unlimited AI chatbot practice sessions (24/7 availability)",
    "Weekly one-on-one expert consultations and feedback",
    "Industry-recognized certificate of completion",
    "Lifetime access to all course materials and recordings",
    "Exclusive community support group access",
    "Job interview preparation and professional communication",
    "Money-back guarantee if not satisfied"
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Developer",
      content: "Best decision I made for my career. The AI practice sessions were incredibly helpful!",
      rating: 5
    },
    {
      name: "Priya Singh", 
      role: "Marketing Manager",
      content: "From hesitant speaker to confident presenter in just 25 days. Amazing program!",
      rating: 5
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center py-12">
        <div className="max-w-lg w-full mx-4">
          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
            
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-black text-gray-900 mb-4">Registration Successful!</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              🎉 Welcome to SpeakWellAI! We'll contact you on WhatsApp within 2 hours 
              with your class details and payment instructions.
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Next Steps:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-gray-700">You'll receive a WhatsApp message with payment link</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-gray-700">Complete payment to secure your spot</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-gray-700">Join our orientation session</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full btn-premium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-gradient"
            >
              Register Another Student
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '-2s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            Join <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">SpeakWellAI</span> Today
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your English speaking skills in just 25 days. Limited seats available!
          </p>
          
          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-6 py-3 rounded-full border border-red-500/30 mb-8">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Only 12 seats left in this batch!</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Registration Form */}
          <div className="glass p-10 rounded-3xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              Secure Your Spot
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-200 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-200 mb-3">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="timeSlot" className="block text-sm font-semibold text-gray-200 mb-3">
                  Preferred Time Slot *
                </label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white backdrop-blur-sm"
                >
                  <option value="" className="bg-gray-800">Select a time slot</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot} className="bg-gray-800">{slot}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-gray-200 mb-3">
                  English Speaking Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white backdrop-blur-sm"
                >
                  <option value="" className="bg-gray-800">Select your level</option>
                  <option value="beginner" className="bg-gray-800">Beginner (Just starting)</option>
                  <option value="intermediate" className="bg-gray-800">Intermediate (Some experience)</option>
                  <option value="advanced" className="bg-gray-800">Advanced (Need refinement)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full btn-premium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-6 rounded-2xl font-black text-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 animate-gradient"
              >
                <span className="flex items-center justify-center gap-3">
                  Register Now
                  <Sparkles className="w-6 h-6" />
                </span>
              </button>
            </form>
          </div>

          {/* Course Summary & Testimonials */}
          <div className="space-y-8">
            {/* Course Summary */}
            <div className="glass p-10 rounded-3xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Course Summary</h2>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">25</div>
                  <div className="text-gray-300">Days Program</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">20</div>
                  <div className="text-gray-300">Max Students</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <h3 className="font-bold text-white text-xl mb-4">What's Included:</h3>
                {benefits.slice(0, 6).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold mb-6">Special Launch Price</h2>
                <div className="text-center mb-8">
                  <div className="text-6xl font-black mb-2">₹1000</div>
                  <p className="text-blue-100 text-xl">Complete 25-day program</p>
                  <p className="text-blue-200 line-through text-lg mt-2">Regular price: ₹2500</p>
                  <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full mt-4">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-semibold">60% OFF - Limited Time</span>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Secure Payment Options
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>• UPI/GPay/PhonePe</div>
                    <div>• Net Banking</div>
                    <div>• Credit/Debit Cards</div>
                    <div>• Razorpay Gateway</div>
                  </div>
                </div>
                
                <p className="text-blue-100 text-center text-sm">
                  🔒 Secure payment processing • 💰 Money-back guarantee
                </p>
              </div>
            </div>

            {/* Quick Testimonials */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm italic mb-3">"{testimonial.content}"</p>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;