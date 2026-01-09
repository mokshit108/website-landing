import React from 'react';
import { motion } from 'framer-motion';

const IndustrySection = () => {
  const industries = [
    {
      title: 'Healthcare',
      content: 'Streamline patient record management and ensure compliance with HIPAA standards.',
      icon: '/assets/healthcare_icon.png'
    },
    {
      title: 'Lending',
      content: 'Ensure faster loan approvals with fraud detection and instant verification.',
      icon: '/assets/lending_icon.png'
    },
    {
      title: 'Insurance',
      content: 'Automate claims processing with accurate document validation.',
      icon: '/assets/Insurance_Icon.png'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Shape background covering 50% of the screen with animation */}
      <motion.div 
        className="absolute pointer-events-none"
        initial={{ x: -500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.8 }}
        viewport={{ once: false, amount: 0.05, margin: "0px 0px -200px 0px" }}
        transition={{ 
          duration: 1.5, 
          ease: [0.25, 0.1, 0.25, 1]
        }}
        style={{
          position: 'absolute',
          left: '80px',
          top: 0,
          width: '45%',
          height: '95%',
          backgroundImage: 'url(/assets/shape-bg.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          opacity: 0.8
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title and content positioned on the left, at the same level as first card */}
        <motion.div 
          className="absolute left-0 flex flex-col space-y-3" 
          style={{ maxWidth: 'calc(50% - 50px)', marginTop: '8px' }}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.05, margin: "0px 0px -200px 0px" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2
          }}
        >
          {/* Title with gradient text color */}
          <motion.h2 
            className="text-left"
            style={{ 
              background: 'linear-gradient(90deg, #CD6028 11%, #3E6EB4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '1.3',
              letterSpacing: '0px',
              verticalAlign: 'middle',
              textAlign: 'left',
              paddingBottom: '2px'
            }}
          >
            AI-driven innovation for growth.
          </motion.h2>

          {/* Subtitle */}
          <motion.h3 
            className="text-black text-left"
            style={{ 
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '-1px',
              verticalAlign: 'middle',
              textAlign: 'left'
            }}
          >
            Industries We Empower
          </motion.h3>
        </motion.div>

        {/* Cards in slant direction (/) - First card top-right, second middle, third bottom-left */}
        <div className="relative w-full" style={{ minHeight: '750px', paddingBottom: '100px', marginTop: '40px' }}>
          {/* Design patch 1 - Left side of first card (half hidden) */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: 'calc(100% - 330px - 50px - 80px)',
              top: '0px',
              zIndex: 1
            }}
          >
            <img 
              src="/assets/design-patch-1.png" 
              alt="Design patch 1"
              className="w-auto h-auto object-contain"
              style={{ width: '150px', height: '150px' }}
            />
          </div>

          {industries.map((industry, index) => {
            // Position calculations for "/" diagonal pattern
            // Card 0 (Healthcare): Top right
            // Card 1 (Lending): Middle
            // Card 2 (Insurance): Bottom left
            const cardWidth = 330;
            const cardHeight = 340;
            
            // Calculate positions to utilize full space with gaps
            // Using calc to position relative to container width
            const leftPositions = [
              'calc(100% - 330px - 50px)', // Top right - with margin right (moved left)
              'calc(50% - 165px)', // Middle - centered horizontally
              '50px' // Bottom left - with margin left (moved right)
            ];
            
            const topPositions = [
              '0px', // Top right
              '230px', // Middle - with gap
              '430px' // Bottom left - with gap
            ];
            
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 p-6 absolute transition-all duration-300"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  left: leftPositions[index],
                  top: topPositions[index],
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  transition: 'box-shadow 0.3s ease',
                  zIndex: index === 0 ? 10 : 5
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                }}
              >
              {/* Icon above title */}
              <div className="mb-2 flex justify-center">
                <img 
                  src={industry.icon} 
                  alt={`${industry.title} icon`}
                  className="w-12 h-12 object-contain"
                />
              </div>
              
              <h4 
                className="text-black mb-2 text-center"
                style={{ 
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 600,
                  fontSize: '28px',
                  lineHeight: '1.2'
                }}
              >
                {industry.title}
              </h4>
              <p 
                className="text-gray-700 text-center"
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                {industry.content}
              </p>
            </div>
            );
          })}
        </div>

        {/* Design patch 2 - Bottom right of the section */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: '0',
            bottom: '0',
            zIndex: 5
          }}
        >
          <img 
            src="/assets/design-patch-2.png" 
            alt="Design patch 2"
            className="w-auto h-auto object-contain"
            style={{ width: '240px', height: '240px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
