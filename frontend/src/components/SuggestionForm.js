import React, { useState, useRef } from 'react';
import axios from 'axios';

function SuggestionForm() {
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [goals, setGoals] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const suggestionsRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult([]);

    try {
      const res = await axios.post('http://localhost:5000/api/suggestions', {
        skills: skills.split(',').map(skill => skill.trim()).filter(skill => skill),
        interests: interests.split(',').map(interest => interest.trim()).filter(interest => interest),
        goals,
      });

      setResult(res.data.suggestions);

      setTimeout(() => {
        if (suggestionsRef.current) {
          suggestionsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (err) {
      console.error('Error:', err);
      if (err.response) {
        setError(err.response.data.error || 'Failed to get suggestions');
      } else if (err.request) {
        setError('Cannot connect to server. Please ensure the backend is running on port 5000.');
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans transition-all duration-300 ease-in-out">
      {/* Hero Section with Gradient */}
      <div className="relative bg-gradient-to-br from-primary via-primary/90 to-primary-dark text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-4 p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 transition-colors duration-300">
            NextStep AI
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Find career paths tailored to your skills, interests, and goals. Get AI-powered recommendations to shape your future and take the next step with confidence.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 -mt-8 sm:-mt-12">
        {/* Form Card */}
        <div className="bg-card shadow-custom-md rounded-3xl border border-border/30 transform transition-all duration-300 hover:shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 to-primary-dark/10 p-6 sm:p-8 border-b border-border/30">
            <h2 className="text-2xl sm:text-3xl font-bold text-text mb-2 transition-colors duration-300">
              Get Personalized Career Advice
            </h2>
            <p className="text-text-light transition-colors duration-300">
              Tell us about yourself to receive tailored career recommendations
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Skills Input */}
              <div className="transform transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <label htmlFor="skills" className="text-base font-semibold text-text transition-colors duration-300">Your Skills</label>
                </div>
                <input
                  type="text"
                  id="skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="w-full px-5 py-4 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-text bg-white hover:border-primary/70 focus:shadow-custom-light text-base"
                  placeholder="e.g., Project Management, Data Analysis, Marketing"
                  required
                />
                <p className="mt-2 text-sm text-text-light">Separate multiple skills with commas</p>
              </div>

              {/* Interests Input */}
              <div className="transform transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <label htmlFor="interests" className="text-base font-semibold text-text transition-colors duration-300">Your Interests</label>
                </div>
                <input
                  type="text"
                  id="interests"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  className="w-full px-5 py-4 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-text bg-white hover:border-primary/70 focus:shadow-custom-light text-base"
                  placeholder="e.g., Web Development, Entrepreneurship, Creative Arts"
                  required
                />
                <p className="mt-2 text-sm text-text-light">What fields or activities excite you?</p>
              </div>

              {/* Goals Input */}
              <div className="transform transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <label htmlFor="goals" className="text-base font-semibold text-text transition-colors duration-300">Career Goals</label>
                </div>
                <input
                  type="text"
                  id="goals"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  className="w-full px-5 py-4 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-text bg-white hover:border-primary/70 focus:shadow-custom-light text-base"
                  placeholder="e.g., Lead a product team, Work in sustainable technology"
                  required
                />
                <p className="mt-2 text-sm text-text-light">Where do you see yourself in the future?</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold py-4 rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-custom-md hover:shadow-lg hover:scale-[1.02] active:scale-100 text-lg"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Analyzing Your Profile...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span>Get Career Recommendations</span>
                  </>
                )}
              </button>
            </form>

            {error && (
              <div className="mt-6 p-4 bg-error/10 border-2 border-error text-error rounded-xl text-sm transition-all duration-300 animate-fade-in">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <strong className="font-semibold">Error:</strong> {error}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Suggestions Section */}
      {result.length > 0 && (
        <div ref={suggestionsRef} className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 animate-fade-in">
          <div className="text-center mb-10">
            <div className="inline-block p-3 bg-success/20 rounded-full mb-4">
              <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-3xl mb-3 text-text transition-colors duration-300">Your Career Recommendations</h3>
            <p className="text-text-light text-lg">Based on your profile, here are personalized career paths for you</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {result
              .filter(
                (suggestion) =>
                  suggestion.title &&
                  suggestion.title.length < 100 &&
                  suggestion.description &&
                  suggestion.description.toLowerCase() !== 'no description available.'
              )
              .map((suggestion, index) => (
                <div
                  key={index}
                  className="bg-card border-2 border-success/30 shadow-custom-light p-6 rounded-2xl hover:shadow-custom-md transition-all duration-300 transform hover:scale-[1.03] hover:border-success/60 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start mb-3">
                    <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center mr-4 group-hover:bg-success/30 transition-colors">
                      <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-text flex-1 transition-colors duration-300 leading-tight">
                      {suggestion.title}
                    </h4>
                  </div>
                  <p className="text-text-light text-sm leading-relaxed transition-colors duration-300">{suggestion.description}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SuggestionForm;
