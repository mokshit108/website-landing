import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [animationPhase, setAnimationPhase] = useState('animating'); // 'animating' or 'complete'

  useEffect(() => {
    // Complete animation after 4 seconds
    const completeTimer = setTimeout(() => {
      setAnimationPhase('complete');
      onComplete();
    }, 4000);

    // Remove splash screen after it moves to navbar position
    const removeTimer = setTimeout(() => {
      setAnimationPhase('hidden');
    }, 4500);

    return () => {
      clearTimeout(completeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  if (animationPhase === 'hidden') return null;

  // Calculate the movement to navbar position
  // Navbar logo is at top-left with some padding
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  // Navbar: max-w-7xl mx-auto px-4, logo at -ml-4, so effectively at left edge + padding
  // With scale 0.56, logo will be ~56px, navbar logo is h-14 (56px)
  const moveX = -(viewportWidth / 2) + 220; // Move significantly more to the right
  const moveY = -(viewportHeight / 2) - 50; // Move up to align with navbar vertical center (min-h-20 = 80px, centered)

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: animationPhase === 'complete' ? 'auto' : '100vw',
        height: animationPhase === 'complete' ? 'auto' : '100vh',
        backgroundColor: animationPhase === 'complete' ? 'transparent' : '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: animationPhase === 'complete' ? 10 : 9999,  // Lower z-index when complete
        overflow: 'hidden',
        paddingTop: '180px', // Move content further down
        pointerEvents: animationPhase === 'complete' ? 'none' : 'auto',
        transition: 'background-color 0.3s ease-out, width 0.1s, height 0.1s'
      }}
    >
      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        animate={{ 
          opacity: [1, 1, 1],  // Keep visible, no fade
          x: [0, 0, moveX],
          y: [0, 0, moveY],
          scale: [1, 1, 0.56]  // Keep size closer to original when moving to navbar
        }}
        transition={{
          duration: 4,
          times: [0, 0.65, 1],
          ease: "easeInOut"
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',  // Smaller gap between logo and title
          position: 'relative'
        }}
      >
        {/* Logo - Appears first in center, then moves a bit left */}
        <motion.img
          src="/assets/logo.png"
          alt="AADRILA Logo"
          initial={{ opacity: 0, scale: 0.8, x: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 1],
            scale: [0.8, 1, 1, 1],
            x: [0, 0, -30, -30]  // Center -> Stay -> Move left a bit -> Stay
          }}
          transition={{
            duration: 3,
            times: [0, 0.3, 0.5, 1],
            ease: "easeOut"
          }}
          style={{
            height: '100px',
            width: 'auto',
            objectFit: 'contain',
            position: 'relative',
            zIndex: 2  // Logo on top
          }}
        />

        {/* Company Name - Appears FROM center (logo's original position), slides left to right */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}  // Start from center where logo was originally
          animate={{ 
            opacity: [0, 1, 1],
            x: [-60, 0, 0]  // Slide from center to right to final position
          }}
          transition={{
            duration: 1.2,
            times: [0, 0.7, 1],
            delay: 1.0,  // Start after logo moves left
            ease: "easeOut"
          }}
          style={{ 
            display: 'flex', 
            flexDirection: 'column',
            position: 'relative',
            zIndex: 1  // Title behind logo
          }}
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
