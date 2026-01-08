import React, { useState, useEffect } from 'react';

const MainSection = ({ splashComplete = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  
  const heroImages = [
    '/assets/hero-growth.png',
    '/assets/hero-invoice.png',
    '/assets/hero-license.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    // Wait for splash + navigation animation to complete before showing content
    // Splash completes -> 100ms -> Navigation starts -> 800ms -> Navigation completes -> 200ms -> Content starts
    if (splashComplete) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1100); // Wait for navigation animation to complete (100ms delay + 800ms animation + 200ms buffer)

      return () => clearTimeout(timer);
    }
  }, [splashComplete]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - 42% */}
          <div 
            className="flex flex-col space-y-6 mt-12 w-full lg:w-[42%]"
            style={{
              transform: showContent ? 'translateX(0)' : 'translateX(-100%)',
              opacity: showContent ? 1 : 0,
              transition: 'transform 1s ease-out, opacity 1s ease-out',
              willChange: 'transform, opacity'
            }}
          >
            {/* Main Title */}
            <h1 
              className="text-left"
              style={{ 
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '68.25px',
                letterSpacing: '0px',
                verticalAlign: 'middle'
              }}
            >
              <span 
                style={{
                  background: 'linear-gradient(90deg, #CD6028 11%, #3E6EB4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                AI-Powered
              </span>
              <br />
              Document Automation<br />
              & Fraud Detection
            </h1>

            {/* Subtitle */}
            <p 
              className="text-left text-gray-600"
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '31.2px',
                letterSpacing: '0px',
                verticalAlign: 'middle'
              }}
            >
              Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless document processing and fraud prevention.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 pt-4 w-full">
              <button 
                className="bg-[#3E6EB4] hover:bg-blue-700 text-white font-medium text-base py-3 px-8 rounded-3xl transition-colors duration-200"
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  width: '50%',
                  minWidth: '180px'
                }}
              >
                Get a Demo
              </button>
              <button 
                className="bg-[#3E6EB4] hover:bg-blue-700 text-white font-medium text-base py-3 px-8 rounded-3xl transition-colors duration-200"
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  width: '50%',
                  minWidth: '180px'
                }}
              >
                Explore Solutions
              </button>
            </div>
          </div>

          {/* Right Side - Hero Image with Animation */}
          <div 
            className="flex justify-center lg:justify-end items-center w-full lg:w-auto lg:flex-1 relative"
            style={{
              transform: showContent ? 'translateX(0)' : 'translateX(100%)',
              opacity: showContent ? 1 : 0,
              transition: 'transform 1s ease-out, opacity 1s ease-out',
              willChange: 'transform, opacity'
            }}
          >
            <div className="relative w-full max-w-lg" style={{ minHeight: '400px' }}>
              {heroImages.map((imageSrc, index) => (
                <img 
                  key={imageSrc}
                  src={imageSrc} 
                  alt={`Hero ${index + 1}`} 
                  className="w-full h-auto object-contain absolute top-0 left-0"
                  style={{
                    opacity: currentImageIndex === index ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                    pointerEvents: currentImageIndex === index ? 'auto' : 'none'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
