import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Team members data
  const teamMembers = [
    {
      name: 'JOHN DOE',
      title: 'CEO FutureSphere',
      description: 'For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.',
      image: '/assets/mem1.jpg'
    },
    {
      name: 'MANSI SHUKLA',
      title: 'CTO TechVision',
      description: 'Driving technological innovation and excellence in every project we undertake.',
      image: '/assets/mem2.jpg'
    },
    {
      name: 'JANE SMITH',
      title: 'Head of Design',
      description: 'Creating beautiful and intuitive experiences that users love.',
      image: '/assets/mem3.jpg'
    }
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        overflow: 'hidden',
        position: 'relative',
        background: '#FFFFFF'
      }}
    >
      {/* Left Side Background Image - 50% */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          backgroundImage: 'url(/assets/shape-bg.png)',
          backgroundSize: '85%',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      />

      {/* Design patch - Middle right */}
      <motion.div
        className="absolute pointer-events-none"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        style={{
          right: '0',
          top: '25%',
          transform: 'translateY(-50%)',
          marginRight: '180px',
          zIndex: 1
        }}
      >
        <img
          src="/assets/design-patch-1.png"
          alt="Design patch"
          className="w-auto h-auto object-contain"
          style={{ width: '200px', height: '200px' }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '100%',
            letterSpacing: '-1px',
            textAlign: 'center',
            color: '#141219',
            marginBottom: '24px'
          }}
        >
          Meet our team
        </motion.h2>

        {/* Subtitle with Gradient */}
        <motion.p
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            background: 'linear-gradient(90deg, #CD6028 11%, #3E6EB4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '100%',
            letterSpacing: '0px',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '900px',
            margin: '0 auto 60px auto'
          }}
        >
          Meet our passionate and talented team, committed to delivering exceptional results, driving innovation, and transforming your vision into reality.
        </motion.p>

        {/* Carousel/Accordion Section */}
        <motion.div 
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
          style={{ marginTop: '60px' }}
        >
          {/* Arrows Above Images */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginBottom: '30px'
            }}
          >
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="hover:opacity-90 transition-opacity duration-200"
              style={{
                background: '#3E6EB4',
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20L13.41 18.59L7.83 13H20V11H7.83L13.41 5.41L12 4L4 12L12 20Z"
                  fill="white"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="hover:opacity-90 transition-opacity duration-200"
              style={{
                background: '#3E6EB4',
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          {/* Team Member Images - Circular Accordion */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
              justifyContent: 'center',
              marginBottom: '40px'
            }}
          >
              {/* Left Member */}
              {teamMembers[(activeIndex - 1 + teamMembers.length) % teamMembers.length] && (
                <div
                  onClick={() => setActiveIndex((activeIndex - 1 + teamMembers.length) % teamMembers.length)}
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    flexShrink: 0
                  }}
                >
                  <div
                    style={{
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      backgroundImage: `url(${teamMembers[(activeIndex - 1 + teamMembers.length) % teamMembers.length].image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                      border: '3px solid #FFFFFF'
                    }}
                  />
                </div>
              )}

              {/* Center/Active Member */}
              <div
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  flexShrink: 0
                }}
              >
                <div
                  style={{
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    backgroundImage: `url(${teamMembers[activeIndex].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 40px rgba(62, 110, 180, 0.3)',
                    border: '0.95px solid #CD6028'
                  }}
                />
              </div>

              {/* Right Member */}
              {teamMembers[(activeIndex + 1) % teamMembers.length] && (
                <div
                  onClick={() => setActiveIndex((activeIndex + 1) % teamMembers.length)}
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    flexShrink: 0
                  }}
                >
                  <div
                    style={{
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      backgroundImage: `url(${teamMembers[(activeIndex + 1) % teamMembers.length].image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                      border: '3px solid #FFFFFF'
                    }}
                  />
                </div>
              )}
          </div>

          {/* Bottom Section: Details Rectangle */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Arrow/Triangle pointing up */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '20px solid transparent',
                borderRight: '20px solid transparent',
                borderBottom: '20px solid #3E6EB4',
                zIndex: 2
              }}
            />
            
            <div
              style={{
                background: 'linear-gradient(135deg, #3E6EB4 0%, #2D5A8F 100%)',
                borderRadius: '20px',
                padding: '40px 60px',
                maxWidth: '700px',
                width: '100%',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
              }}
            >
              {/* Name */}
              <h3
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: '36px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  color: '#FFFFFF',
                  marginBottom: '16px'
                }}
              >
                {teamMembers[activeIndex].name}
              </h3>

              {/* Title */}
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  textAlign: 'center',
                  color: '#CD6028',
                  marginBottom: '24px'
                }}
              >
                {teamMembers[activeIndex].title}
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '0px',
                  textAlign: 'center',
                  color: '#FFFFFF'
                }}
              >
                {teamMembers[activeIndex].description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
