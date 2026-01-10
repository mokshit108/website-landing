import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section
      className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{
        paddingTop: 'clamp(40px, 10vw, 80px)',
        paddingBottom: 'clamp(40px, 10vw, 80px)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Background Image with Opacity */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/assets/abstract-shape.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
          zIndex: 0
        }}
      />

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
        {/* Center Card with Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            background: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 'clamp(12px, 3vw, 16px)',
            padding: 'clamp(25px, 6vw, 50px) clamp(20px, 5vw, 35px)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(240, 240, 240, 0.5)',
            marginBottom: 'clamp(30px, 7.5vw, 60px)',
            textAlign: 'center',
            maxWidth: '525px',
            margin: '0 auto clamp(30px, 7.5vw, 60px) auto'
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(32px, 8vw, 48px)',
              lineHeight: '100%',
              letterSpacing: '-1px',
              textAlign: 'center',
              color: '#141219',
              marginBottom: 'clamp(12px, 3vw, 20px)'
            }}
          >
            About Us
          </h2>

          {/* Subtitle with Gradient */}
          <p
            style={{
              background: 'linear-gradient(90deg, #CD6028 11%, #3E6EB4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 4vw, 20px)',
              lineHeight: '140%',
              letterSpacing: '0px',
              textAlign: 'center',
              marginLeft: "0"
            }}
          >
            Meet the Minds Shaping Document Automation.
          </p>
        </motion.div>

         {/* Vision Card - Single Row Layout */}
         <motion.div
           initial={{ opacity: 0, x: -200 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="flex flex-col md:flex-row items-start md:items-center"
           style={{
             background: '#FFFFFF',
             borderRadius: 'clamp(12px, 3vw, 16px) clamp(50px, 12.5vw, 100px) clamp(50px, 12.5vw, 100px) clamp(12px, 3vw, 16px)',
             padding: 'clamp(20px, 5vw, 25px) clamp(20px, 5vw, 30px)',
             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
             border: '1px solid #F0F0F0',
             marginBottom: 'clamp(20px, 5vw, 40px)',
             gap: 'clamp(15px, 4vw, 30px)',
             maxWidth: '850px',
             marginRight: 'auto',
             marginLeft: '0',
             marginTop: 'clamp(20px, 5vw, 80px)',
           }}
         >
          {/* Description Text */}
          <p
            className="text-center md:text-right"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              lineHeight: '150%',
              letterSpacing: '0px',
              color: '#696969',
              margin: '0',
              flex: 1,
              order: 1
            }}
          >
            To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.
          </p>

          {/* Horizontal Orange Line - Mobile Only */}
          <div
            className="block md:hidden"
            style={{
              width: 'clamp(60px, 15vw, 80px)',
              height: 'clamp(3px, 0.75vw, 4px)',
              background: '#CD6028',
              borderRadius: '2px',
              flexShrink: 0,
              order: 2,
              margin: '10px 0'
            }}
          />

          {/* Vertical Orange Line - Desktop Only */}
          <div
            className="hidden md:block"
            style={{
              width: 'clamp(3px, 0.75vw, 4px)',
              height: 'clamp(50px, 12.5vw, 70px)',
              background: '#CD6028',
              borderRadius: '2px',
              flexShrink: 0,
              order: 2
            }}
          />

           {/* Our Vision Text */}
           <h3
             className="text-center md:text-left"
             style={{
               fontFamily: 'Raleway, sans-serif',
               fontWeight: 700,
               fontSize: 'clamp(18px, 4.5vw, 24px)',
               lineHeight: 'clamp(28px, 7vw, 38px)',
               letterSpacing: '0px',
               color: '#141219',
               margin: '0',
               whiteSpace: 'nowrap',
               order: 3
             }}
           >
             Our<br className="hidden md:block" />Vision
           </h3>

          {/* Vision Icon */}
          <img
            src="/assets/vision.png"
            alt="Vision"
            style={{
              width: 'clamp(60px, 15vw, 100px)',
              height: 'clamp(60px, 15vw, 100px)',
              objectFit: 'contain',
              flexShrink: 0,
              order: 4
            }}
          />
        </motion.div>

         {/* Mission Card - Single Row Layout (Right to Left) */}
         <motion.div
           initial={{ opacity: 0, x: 200 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="flex flex-col md:flex-row md:flex-row-reverse items-start md:items-center"
           style={{
             background: '#FFFFFF',
             borderRadius: 'clamp(50px, 12.5vw, 100px) clamp(12px, 3vw, 16px) clamp(12px, 3vw, 16px) clamp(50px, 12.5vw, 100px)',
             padding: 'clamp(20px, 5vw, 25px) clamp(20px, 5vw, 30px)',
             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
             border: '1px solid #F0F0F0',
             gap: 'clamp(15px, 4vw, 30px)',
             maxWidth: '850px',
             marginLeft: 'auto',
             marginRight: '0',
             marginTop: 'clamp(20px, 5vw, 80px)',
             marginBottom: 'clamp(20px, 5vw, 40px)'
           }}
         >
          {/* Description Text */}
          <p
            className="text-center md:text-left"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              lineHeight: '150%',
              letterSpacing: '0px',
              color: '#696969',
              margin: '0',
              flex: 1,
              order: 1
            }}
          >
            To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.
          </p>

          {/* Horizontal Orange Line - Mobile Only */}
          <div
            className="block md:hidden"
            style={{
              width: 'clamp(60px, 15vw, 80px)',
              height: 'clamp(3px, 0.75vw, 4px)',
              background: '#CD6028',
              borderRadius: '2px',
              flexShrink: 0,
              order: 2,
              margin: '10px 0'
            }}
          />

          {/* Vertical Orange Line - Desktop Only */}
          <div
            className="hidden md:block"
            style={{
              width: 'clamp(3px, 0.75vw, 4px)',
              height: 'clamp(50px, 12.5vw, 70px)',
              background: '#CD6028',
              borderRadius: '2px',
              flexShrink: 0,
              order: 2
            }}
          />

           {/* Our Mission Text */}
           <h3
             className="text-center md:text-right"
             style={{
               fontFamily: 'Raleway, sans-serif',
               fontWeight: 700,
               fontSize: 'clamp(18px, 4.5vw, 24px)',
               lineHeight: 'clamp(28px, 7vw, 38px)',
               letterSpacing: '0px',
               color: '#141219',
               margin: '0',
               whiteSpace: 'nowrap',
               order: 3
             }}
           >
             Our<br className="hidden md:block" />Mission
           </h3>

          {/* Mission Icon */}
          <img
            src="/assets/mission.png"
            alt="Mission"
            style={{
              width: 'clamp(60px, 15vw, 100px)',
              height: 'clamp(60px, 15vw, 100px)',
              objectFit: 'contain',
              flexShrink: 0,
              order: 4
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
