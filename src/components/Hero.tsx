import React from 'react';
import heroImage from '../assets/ai-robotics-workshop.png';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="AI & Robotics Workshop"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-surface/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-600/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/3 left-1/6 w-56 h-56 bg-accent-500/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 md:py-52">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-10 animate-fade-in"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-primary-200">
              Registrations Open · Starts 15 July 2026
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading leading-tight mb-8 animate-fade-in-up text-center"
          >
            <span className="text-white">AI & Robotics</span>
            <br />
            <span className="gradient-text">Summer Workshop</span>
          </h1>

          {/* Description */}
          <p
            className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto text-center animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            A 4-week immersive online workshop where kids aged 8–14 explore
            artificial intelligence, build robots, and learn Python — all while
            having fun!
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up w-full"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#register"
              id="hero-enroll-btn"
              className="group relative inline-flex items-center justify-center px-12 py-5 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-extrabold text-xl shadow-2xl shadow-primary-600/40 hover:shadow-primary-500/60 hover:-translate-y-1 transition-all duration-300 animate-pulse-glow w-full sm:w-auto"
            >
              Enroll Now — ₹2,999
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#details"
              id="hero-learn-more-btn"
              className="inline-flex items-center justify-center px-12 py-5 rounded-2xl border-2 border-white/20 text-white font-bold text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 w-full sm:w-auto"
            >
              Learn More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-20 flex flex-wrap justify-center gap-10 md:gap-20 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            {[
              { value: '500+', label: 'Students Enrolled' },
              { value: '4.9★', label: 'Average Rating' },
              { value: '95%', label: 'Completion Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold font-heading text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-white/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
