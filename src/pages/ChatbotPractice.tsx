import React from 'react';
import { Brain, MessageSquare, Sparkles, Zap, Target, TrendingUp, Mic, Volume2 } from 'lucide-react';

const ChatbotPractice: React.FC = () => {
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
            AI English Speaking <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Practice</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Practice your English speaking skills with our advanced AI chatbot. 
            Get instant feedback and improve your fluency 24/7.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="glass px-6 py-3 rounded-full border border-white/20">
              <span className="text-blue-300 font-semibold">🤖 AI-Powered</span>
            </div>
            <div className="glass px-6 py-3 rounded-full border border-white/20">
              <span className="text-purple-300 font-semibold">🎯 Personalized</span>
            </div>
            <div className="glass px-6 py-3 rounded-full border border-white/20">
              <span className="text-green-300 font-semibold">⚡ Real-time</span>
            </div>
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center">
          <div className="glass p-12 rounded-3xl border border-white/20 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
                <Brain className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6">
                🚧 Advanced AI Chatbot Coming Soon!
              </h3>
              <p className="text-gray-300 mb-8 text-xl leading-relaxed max-w-2xl mx-auto">
                We're integrating cutting-edge AI technology to provide you with the most 
                advanced English speaking practice experience. This revolutionary feature will be available soon!
              </p>
              
              {/* Feature Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass p-6 rounded-2xl border border-white/20">
                  <Brain className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-white font-bold mb-2">Smart AI Conversations</h4>
                  <p className="text-gray-400 text-sm">Natural language processing for realistic practice</p>
                </div>
                <div className="glass p-6 rounded-2xl border border-white/20">
                  <Mic className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-white font-bold mb-2">Voice Recognition</h4>
                  <p className="text-gray-400 text-sm">Real-time pronunciation feedback and correction</p>
                </div>
                <div className="glass p-6 rounded-2xl border border-white/20">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h4 className="text-white font-bold mb-2">Progress Tracking</h4>
                  <p className="text-gray-400 text-sm">Detailed analytics and improvement insights</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn-premium bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center justify-center gap-3">
                    Get Notified When Ready
                    <Sparkles className="w-5 h-5" />
                  </span>
                </button>
                <button className="glass text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30">
                  <span className="flex items-center justify-center gap-3">
                    Join Live Classes Instead
                    <MessageSquare className="w-5 h-5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPractice;