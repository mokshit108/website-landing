import React, { useState, useEffect } from 'react';

const MainSection = ({ splashComplete = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [rotationOffset, setRotationOffset] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [showScanning, setShowScanning] = useState(false);
  
  const heroImages = [
    '/assets/hero-growth.png',
    '/assets/hero-license.png',
    '/assets/hero-invoice.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowScanning(false); // Reset scanning when changing image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      setRotationOffset((prevOffset) => prevOffset + (360 / heroImages.length));
    }, 4000); // Switch every 4 seconds for smoother circular animation

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    // Show scanning effect after image transition completes
    const scanTimer = setTimeout(() => {
      setShowScanning(true);
    }, 800); // Wait for opacity transition to complete

    return () => clearTimeout(scanTimer);
  }, [currentImageIndex]);

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
    <>
      <style>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
      `}</style>
      <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-x-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            {/* Left Side - 42% */}
            <div 
            className="flex flex-col space-y-4 md:space-y-6 mt-4 md:mt-12 w-full lg:w-[42%]"
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
                fontSize: 'clamp(28px, 6vw, 48px)',
                lineHeight: 'clamp(36px, 7vw, 68.25px)',
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
                fontSize: 'clamp(16px, 3.5vw, 20px)',
                lineHeight: 'clamp(24px, 4.5vw, 31.2px)',
                letterSpacing: '0px',
                verticalAlign: 'middle'
              }}
            >
              Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless document processing and fraud prevention.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 w-full">
              <button 
                className="bg-[#3E6EB4] hover:bg-blue-700 text-white font-medium text-sm md:text-base py-2.5 md:py-3 px-6 md:px-8 rounded-3xl transition-colors duration-200"
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  width: '100%',
                  minWidth: 'auto'
                }}
              >
                Get a Demo
              </button>
              <button 
                className="bg-[#3E6EB4] hover:bg-blue-700 text-white font-medium text-sm md:text-base py-2.5 md:py-3 px-6 md:px-8 rounded-3xl transition-colors duration-200"
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  width: '100%',
                  minWidth: 'auto'
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
            <div className="relative w-full max-w-sm md:max-w-lg" style={{ minHeight: 'clamp(250px, 50vw, 400px)', perspective: '1000px' }}>
              <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                {heroImages.map((imageSrc, index) => {
                  const angle = (index * 360) / heroImages.length;
                  const currentRotation = angle - rotationOffset;
                  const normalizedRotation = ((currentRotation % 360) + 360) % 360;
                  const isActive = normalizedRotation < 10 || normalizedRotation > 350;

                  return (
                    <div
                      key={imageSrc}
                      className="absolute w-full h-full"
                      style={{
                        transform: `rotateY(${currentRotation}deg) translateZ(150px)`,
                        transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <img
                        src={imageSrc}
                        alt={`Hero ${index + 1}`}
                        className="w-full h-auto object-contain"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transition: 'opacity 0.8s ease-out'
                        }}
                      />
                      {/* Scanning Effect */}
                      {isActive && showScanning && (
                        <div
                          className="absolute top-0 left-0 w-full h-full pointer-events-none"
                          style={{
                            background: 'linear-gradient(180deg, transparent 0%, rgba(62, 110, 180, 0.4) 50%, transparent 100%)',
                            animation: 'scan 2s linear infinite',
                            height: '30%',
                            width: '100%'
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
