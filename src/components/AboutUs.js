import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
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
            borderRadius: '16px',
            padding: '50px 35px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(240, 240, 240, 0.5)',
            marginBottom: '60px',
            textAlign: 'center',
            maxWidth: '525px',
            margin: '0 auto 60px auto'
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '-1px',
              textAlign: 'center',
              color: '#141219',
              marginBottom: '20px'
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
              fontSize: '20px',
              lineHeight: '140%',
              letterSpacing: '0px',
              textAlign: 'left',
              marginLeft: "10px"
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
           style={{
             background: '#FFFFFF',
             borderRadius: '16px 100px 100px 16px',
             padding: '25px 30px',
             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
             border: '1px solid #F0F0F0',
             marginBottom: '40px',
             display: 'flex',
             alignItems: 'center',
             gap: '30px',
             maxWidth: '850px',
             marginRight: 'auto',
             marginLeft: '-110px',
             marginTop: '80px',

           }}
         >
          {/* Description Text */}
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: '0px',
              color: '#696969',
              margin: '0',
              flex: 1,
              textAlign: 'right'
            }}
          >
            To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.
          </p>

          {/* Vertical Orange Line */}
          <div
            style={{
              width: '4px',
              height: '70px',
              background: '#CD6028',
              borderRadius: '2px',
              flexShrink: 0
            }}
          />

           {/* Our Vision Text */}
           <h3
             style={{
               fontFamily: 'Raleway, sans-serif',
               fontWeight: 700,
               fontSize: '24px',
               lineHeight: '38px',
               letterSpacing: '0px',
               color: '#141219',
               margin: '0',
               whiteSpace: 'nowrap',
               textAlign: 'left'
             }}
           >
             Our<br />Vision
           </h3>

          {/* Vision Icon */}
          <img
            src="/assets/vision.png"
            alt="Vision"
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'contain',
              flexShrink: 0
            }}
          />
        </motion.div>

         {/* Mission Card - Single Row Layout (Right to Left) */}
         <motion.div
           initial={{ opacity: 0, x: 200 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           style={{
             background: '#FFFFFF',
             borderRadius: '100px 16px 16px 100px',
             padding: '25px 30px',
             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
             border: '1px solid #F0F0F0',
             display: 'flex',
             alignItems: 'center',
             gap: '30px',
             flexDirection: 'row-reverse',
             maxWidth: '850px',
             marginLeft: 'auto',
             marginRight: "-110px",
             marginTop: '80px',
             marginBottom: '40px'
           }}
         >
          {/* Description Text */}
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: '0px',
              color: '#696969',
              margin: '0',
              flex: 1,
              textAlign: 'left'
            }}
          >
            To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.
          </p>

          {/* Vertical Orange Line */}
          <div
            style={{
              width: '4px',
              height: '70px',
              background: '#CD6028',
              borderRadius: '2px',
              flexShrink: 0
            }}
          />

           {/* Our Mission Text */}
           <h3
             style={{
               fontFamily: 'Raleway, sans-serif',
               fontWeight: 700,
               fontSize: '24px',
               lineHeight: '38px',
               letterSpacing: '0px',
               color: '#141219',
               margin: '0',
               whiteSpace: 'nowrap',
               textAlign: 'right'
             }}
           >
             Our<br />Mission
           </h3>

          {/* Mission Icon */}
          <img
            src="/assets/mission.png"
            alt="Mission"
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'contain',
              flexShrink: 0
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
