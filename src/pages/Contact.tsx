import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle, Sparkles, Zap, Star } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-10 h-10 text-blue-600" />,
      title: "Email Support",
      description: "Get comprehensive help via email",
      value: "support@speakwellai.com",
      action: "mailto:support@speakwellai.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-10 h-10 text-green-600" />,
      title: "WhatsApp Support",
      description: "Quick support on WhatsApp",
      value: "+91-XXXXXXXXXX",
      action: "https://wa.me/91XXXXXXXXXX",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-purple-600" />,
      title: "Live Chat",
      description: "Chat with our expert team",
      value: "Available 9 AM - 6 PM",
      action: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const faqs = [
    {
      question: "How long does the course take?",
      answer: "The complete SpeakWellAI program is 25 days long with daily 1-hour live classes plus unlimited AI chatbot practice sessions."
    },
    {
      question: "What if I miss a live class?",
      answer: "All live classes are recorded and available for replay. You can also practice with our AI chatbot anytime to stay on track."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with the course quality and content."
    },
    {
      question: "Do I need any special equipment?",
      answer: "Just a computer/smartphone with internet connection and a microphone for the best speaking practice experience."
    },
    {
      question: "Can I practice at my own pace?",
      answer: "Absolutely! While live classes follow a schedule, the AI chatbot is available 24/7 for unlimited practice sessions."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, you'll receive an industry-recognized certificate upon successful completion of the 25-day program."
    }
  ];

  const stats = [
    { number: "< 2 hrs", label: "Response Time", icon: <Clock className="w-5 h-5" /> },
    { number: "24/7", label: "Support Available", icon: <MessageSquare className="w-5 h-5" /> },
    { number: "95%", label: "Satisfaction Rate", icon: <Star className="w-5 h-5" /> },
    { number: "10k+", label: "Happy Students", icon: <CheckCircle className="w-5 h-5" /> }
  ];

  return (
    <div className="pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '-2s'}}></div>
      
      {/* Header */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            Get in <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Touch</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Have questions about our English speaking course? We're here to help you 
            start your journey to fluent English.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="glass p-6 rounded-2xl text-center border border-white/20">
                <div className="flex justify-center mb-3 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass p-10 rounded-3xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              Send us a Message
            </h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-gray-300 text-lg">Thank you for contacting us. We'll get back to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
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
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-200 mb-3">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white backdrop-blur-sm"
                  >
                    <option value="" className="bg-gray-800">Select a subject</option>
                    <option value="course-inquiry" className="bg-gray-800">Course Inquiry</option>
                    <option value="technical-support" className="bg-gray-800">Technical Support</option>
                    <option value="payment-issue" className="bg-gray-800">Payment Issue</option>
                    <option value="general-question" className="bg-gray-800">General Question</option>
                    <option value="feedback" className="bg-gray-800">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-premium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-6 rounded-2xl font-black text-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 animate-gradient"
                >
                  <span className="flex items-center justify-center gap-3">
                    Send Message
                    <Send className="w-6 h-6" />
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="glass p-10 rounded-3xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="card-hover p-6 bg-white/5 border border-white/10 rounded-2xl group">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{method.title}</h3>
                        <p className="text-gray-300 mb-3">{method.description}</p>
                        <a
                          href={method.action}
                          className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="glass p-10 rounded-3xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Office Hours</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-bold text-white text-lg">Monday - Friday</p>
                    <p className="text-gray-300">9:00 AM - 6:00 PM (IST)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="font-bold text-white text-lg">Saturday</p>
                    <p className="text-gray-300">10:00 AM - 4:00 PM (IST)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-bold text-white text-lg">Sunday</p>
                    <p className="text-gray-300">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-yellow-300" />
                  Need Quick Help?
                </h2>
                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                  For immediate assistance, reach out to us on WhatsApp. 
                  We typically respond within 15 minutes during business hours.
                </p>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <Phone className="w-6 h-6" />
                  WhatsApp Us Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Frequently Asked <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions about our English speaking course
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="card-hover glass p-8 rounded-3xl border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;