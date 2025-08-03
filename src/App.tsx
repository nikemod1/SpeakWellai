import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Course from './pages/Course'; 
import Course from './pages/MarathiCourse';
import JoinNow from './pages/JoinNow';
import ChatbotPractice from './pages/ChatbotPractice';
import Contact from './pages/Contact';
import About from './pages/About'; // ✅ Import About

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/MarathiCourse" element={<MarathiCourse />} />
          <Route path="/join-now" element={<JoinNow />} />
          <Route path="/chatbot-practice" element={<ChatbotPractice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> {/* ✅ Add About route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
