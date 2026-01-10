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
    <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Shape background covering 50% of the screen with animation - Hidden on mobile */}
      <motion.div
        className="absolute pointer-events-none hidden md:block"
        initial={{ x: -500, opacity: 0 }}
        whileInView={{
          x: [-500, 0, -100],
          opacity: [0, 0.8, 0.8]
        }}
        viewport={{ once: false, amount: 0.05, margin: "0px 0px -200px 0px" }}
        transition={{
          duration: 2.5,
          times: [0, 0.4, 1],
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
        {/* Title and content - Responsive positioning */}
        <motion.div
          className="flex flex-col space-y-3 mb-8 md:mb-0 text-center md:text-left md:absolute md:left-0"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.05, margin: "0px 0px -200px 0px" }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2
          }}
          style={{
            maxWidth: '100%'
          }}
        >
          {/* Title with gradient text color */}
          <motion.h2
            style={{
              background: 'linear-gradient(90deg, #CD6028 11%, #3E6EB4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 4vw, 24px)',
              lineHeight: '1.3',
              letterSpacing: '0px',
              verticalAlign: 'middle',
              paddingBottom: '2px'
            }}
          >
            AI-driven innovation for growth.
          </motion.h2>

          {/* Subtitle */}
          <motion.h3
            className="text-black"
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(32px, 8vw, 48px)',
              lineHeight: '100%',
              letterSpacing: '-1px',
              verticalAlign: 'middle'
            }}
          >
            Industries We Empower
          </motion.h3>
        </motion.div>

        {/* Cards - Mobile: Vertical stack, Desktop: Diagonal pattern */}
        <div className="relative w-full mt-8 md:mt-0" style={{ minHeight: 'clamp(500px, 80vw, 850px)', paddingBottom: 'clamp(50px, 10vw, 100px)' }}>
          {/* Design patch 1 - Hidden on mobile */}
          <motion.div
            className="absolute pointer-events-none hidden md:block"
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 1.0,
              delay: 0,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            style={{
              left: 'calc(100% - 200px)',
              top: '50px',
              zIndex: 1
            }}
          >
            <img
              src="/assets/design-patch-1.png"
              alt="Design patch 1"
              className="w-auto h-auto object-contain"
              style={{ width: '150px', height: '150px' }}
            />
          </motion.div>

          {/* Mobile Layout: Vertical Stack */}
          <div className="block md:hidden space-y-6 mt-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-gray-200 p-6 mx-auto"
                initial={{
                  y: 100,
                  opacity: 0
                }}
                whileInView={{
                  y: 0,
                  opacity: 1
                }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                style={{
                  maxWidth: '400px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
                whileHover={{
                  boxShadow: '0 20px 40px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* Icon above title */}
                <div className="mb-4 flex justify-center">
                  <img
                    src={industry.icon}
                    alt={`${industry.title} icon`}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                </div>

                <h4
                  className="text-black mb-3"
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(20px, 5vw, 28px)',
                    lineHeight: '1.2'
                  }}
                >
                  {industry.title}
                </h4>
                <p
                  className="text-gray-700"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    lineHeight: '1.6'
                  }}
                >
                  {industry.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Desktop Layout: Diagonal Pattern */}
          <div className="hidden md:block">
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
                'calc(100% - 380px)', // Top right - adjusted for better visibility
                'calc(50% - 165px)', // Middle - centered horizontally
                '20px' // Bottom left - moved further left for visibility
              ];

              const topPositions = [
                '20px', // Top right - slight offset from top
                '250px', // Middle - with gap
                '480px' // Bottom left - adjusted for better spacing
              ];

              return (
                <motion.div
                  key={index}
                  className="bg-white border-2 border-gray-200 p-6 absolute"
                  initial={{
                    x: 350,
                    y: -150,
                    opacity: 0
                  }}
                  whileInView={{
                    x: 0,
                    y: 0,
                    opacity: 1
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 1.1,
                    delay: index * 0.25,
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "tween"
                  }}
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
                    zIndex: 10 + index,
                    willChange: 'transform, opacity'
                  }}
                  whileHover={{
                    boxShadow: '0 20px 40px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)'
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
              </motion.div>
              );
            })}
          </div>
        </div>

        {/* Design patch 2 - Bottom right of the section - Hidden on mobile */}
        <motion.div
          className="absolute pointer-events-none hidden md:block"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 1.0,
            delay: 0,
            ease: [0.25, 0.1, 0.25, 1]
          }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySection;