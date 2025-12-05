


import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background transition-all duration-500 ease-in-out">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary/90 to-primary-dark text-white py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6 p-4 bg-white/20 rounded-full backdrop-blur-sm">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 transition-colors duration-300">
            NextStep AI
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10 transition-colors duration-300">
            Find career paths tailored to your skills, interests, and goals. Get AI-powered recommendations to shape your future and take the next step with confidence.
          </p>
          <button
            onClick={() => navigate('/suggest')}
            className="bg-white text-primary font-bold px-10 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 active:scale-100 inline-flex items-center space-x-2"
            aria-label="Get Started with NextStep AI"
          >
            <span>Get Started</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-2xl p-6 shadow-custom-light border border-border/30 hover:shadow-custom-md transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text mb-2">Personalized Matching</h3>
            <p className="text-text-light">AI analyzes your unique skills and interests to find the perfect career fit.</p>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-custom-light border border-border/30 hover:shadow-custom-md transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text mb-2">AI-Powered Insights</h3>
            <p className="text-text-light">Get intelligent recommendations based on current market trends and opportunities.</p>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-custom-light border border-border/30 hover:shadow-custom-md transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text mb-2">Clear Path Forward</h3>
            <p className="text-text-light">Receive actionable career suggestions to guide your professional journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
