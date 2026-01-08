import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Complete animation after 4 seconds
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  // Calculate the movement to navbar position
  // Navbar logo is at top-left with some padding (roughly 40px from left, 40px from top)
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const moveX = -(viewportWidth / 2) + 100; // Move to left side (100px from left edge)
  const moveY = -(viewportHeight / 2) + 60; // Move to top (60px from top edge)

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        overflow: 'hidden'
      }}
    >
      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        animate={{ 
          opacity: [1, 1, 0],
          x: [0, 0, moveX],
          y: [0, 0, moveY],
          scale: [1, 1, 0.7]
        }}
        transition={{
          duration: 4,
          times: [0, 0.65, 1],
          ease: "easeInOut"
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        {/* Logo - Appears First */}
        <motion.img
          src="/assets/logo.png"
          alt="AADRILA Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
          style={{
            height: '100px',
            width: 'auto',
            objectFit: 'contain'
          }}
        />

        {/* Company Name - Slides in from Left after Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut"
          }}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <h1
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 500,
              fontSize: '48px',
              lineHeight: '1',
              color: '#111827',
              margin: 0
            }}
          >
            AADRILA
          </h1>
          <p
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 800,
              fontSize: '16px',
              lineHeight: '1.2',
              marginTop: '4px',
              letterSpacing: '0.4em',
              color: '#111827',
              margin: '4px 0 0 0'
            }}
          >
            TECHNOLOGIES
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
