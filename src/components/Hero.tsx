import React from 'react';
import { Code, Smartphone, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-float"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
            We Build
            <span className="text-gradient-animate"> Digital </span>
            Excellence
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up animate-delay-200">
            Transform your business with cutting-edge web and mobile applications. 
            We deliver innovative solutions that drive growth and success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up animate-delay-400">
            <a href="#portfolio" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:scale-110 hover:shadow-lg transition-all duration-300 inline-block">
              View Our Work
            </a>
          </div>

          {/* Feature icons */}
          <div className="flex items-center justify-center gap-8 text-gray-500 animate-slide-up animate-delay-600">
            <div className="flex items-center gap-2 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover-lift">
              <Code size={24} className="animate-pulse-slow" />
              <span className="hidden sm:inline">Web Development</span>
            </div>
            <div className="flex items-center gap-2 hover:text-teal-600 transition-all duration-300 hover:scale-110 hover-lift animate-delay-100">
              <Smartphone size={24} className="animate-pulse-slow animate-delay-200" />
              <span className="hidden sm:inline">Mobile Apps</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover-lift animate-delay-200">
              <Globe size={24} className="animate-pulse-slow animate-delay-400" />
              <span className="hidden sm:inline">Digital Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;