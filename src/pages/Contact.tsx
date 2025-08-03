import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden text-white">
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Get in <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Have questions about our courses or need assistance? We're here to help. Please fill out the enquiry form and our team will get back to you promptly.
          </p>

          <a
            href="https://forms.gle/your-google-form-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-8 py-4 rounded-full font-bold text-white text-lg hover:scale-105 transition transform shadow-lg"
          >
            Submit Enquiry Form
          </a>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white text-gray-900 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Office</h2>
          <p className="text-lg mb-4 leading-relaxed">
            <strong>SpeakWellAI — Online Learning Platform</strong><br />
            Santkrupa Building, Milan Square,<br />
            Mangalwari Peth, Umred,<br />
            Nagpur, Maharashtra - 441203, India
          </p>

          <div className="mt-8 space-y-4">
            <p>
              <Mail className="inline-block w-5 h-5 mr-2 text-blue-600" />
              <a href="mailto:support@speakwellai.com" className="text-blue-600 hover:underline">
                support@speakwellai.com
              </a>
            </p>
            <p>
              <Phone className="inline-block w-5 h-5 mr-2 text-green-600" />
              <a href="https://wa.me/918275873103" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                +91-8275873103 (WhatsApp)
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
