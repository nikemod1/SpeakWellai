import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Founder & Platform Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              <span className="gradient-text">About SpeakWellAI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SpeakWellAI.com is a dynamic online learning platform that empowers learners across India with practical, affordable, and flexible education.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-hover bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-3xl border border-gray-100 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full mx-auto mb-8 flex items-center justify-center">
                <span className="text-4xl font-black text-white">PC</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-2">Ms. Payal Chakole</h3>
              <p className="text-xl text-blue-600 font-semibold mb-8">Founder & Managing Director</p>

              <div className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl mx-auto space-y-6">
                <p>
                  Ms. Payal Chakole is the visionary behind SpeakWellAI — a future-ready platform dedicated to teaching Indian languages such as Marathi, Hindi, and English, as well as in-demand technical skills like C programming, Python, and Machine Learning.
                </p>
                <p>
                  At SpeakWellAI, we combine live instructor-led classes, expert mentorship, and AI-based tools to help learners speak fluently, code confidently, and grow professionally.
                </p>
                <p>
                  Our mission is to build a nation of skilled communicators and coders by offering accessible education through technology.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200">
                <blockquote className="text-xl italic text-gray-800 leading-relaxed">
                  "Education should be empowering and transformative. At SpeakWellAI, we blend technology with real human connection to create meaningful learning experiences for every student."
                </blockquote>
                <cite className="block mt-4 text-blue-600 font-semibold">— Ms. Payal Chakole</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Qualities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Leadership <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core values and traits driving SpeakWellAI's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Vision</h3>
              <p className="text-gray-600">
                Forward-thinking approach to educational innovation and technology integration
              </p>
            </div>

            <div className="card-hover bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Team Building</h3>
              <p className="text-gray-600">
                Nurturing expert educators and support staff for exceptional learning experiences
              </p>
            </div>

            <div className="card-hover bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Excellence</h3>
              <p className="text-gray-600">
                Unwavering commitment to quality, affordability, and real-world relevance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Address Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Office</h3>
          <p className="text-lg text-gray-600">
            SpeakWellAI — Online Learning Platform<br />
            Santkrupa Building, Milan Square,<br />
            Mangalwari Peth, Umred,<br />
            Nagpur, Maharashtra - 441203<br />
            India
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
