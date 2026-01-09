import React from 'react';
import { motion } from 'framer-motion';

const ProductSection = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white relative overflow-visible">
      {/* Design patch 2 - Top left */}
      <motion.div
        className="absolute pointer-events-none"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          left: '0',
          top: '0',
          zIndex: 10
        }}
      >
        <img
          src="/assets/design-patch-2.png"
          alt="Design patch"
          className="w-auto h-auto object-contain"
          style={{ width: '280px', height: '280px' }}
        />
      </motion.div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered small title */}
        <motion.div 
          className="text-center mb-4" 
          style={{ marginTop: '72px' }}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3
            style={{
              background: 'linear-gradient(90deg, #CD6028 11%, #3E6EB4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '1.2',
              letterSpacing: '0px'
            }}
          >
            features and benefits
          </h3>
        </motion.div>

        {/* Centered "Our Products" heading */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '-1px',
              textAlign: 'center',
              color: '#141219'
            }}
          >
            Our Products
          </h2>
        </motion.div>

        {/* Main content: Left side text, Right side image */}
        <div className="flex flex-col lg:flex-row items-center" style={{ minHeight: '750px' }}>
          {/* Left Side - Content */}
          <motion.div 
            className="flex flex-col space-y-4 w-full lg:w-1/2 text-left" 
            style={{ width: '50%' }}
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* DocSim Button */}
            <button
              className="text-white font-medium text-base py-3 px-8 rounded-3xl transition-colors duration-200 w-fit"
              style={{
                background: 'linear-gradient(90deg, #CD6028 11%, #3E6EB4 100%)',
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 600
              }}
            >
              DocSim
            </button>
            {/* Title */}
            <h3
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: '32px',
                lineHeight: '48px',
                letterSpacing: '0px',
                verticalAlign: 'middle',
                color: '#141219',
                textAlign: 'left'
              }}
            >
              AI-Powered Document Similarity Engine
            </h3>

            {/* Features */}
            <div>
              <h4
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#696969',
                  marginBottom: '8px',
                  textAlign: 'left'
                }}
              >
                Features:
              </h4>
              <ul
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  color: '#696969',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  listStyle: 'none',
                  paddingLeft: '0',
                  textAlign: 'left'
                }}
              >
                <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• Detects near-duplicates and tampered documents.</li>
                <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• Identifies fraudulent patterns across large repositories.</li>
                <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• Multi-language support for global adaptability.</li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h4
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#696969',
                  marginBottom: '8px',
                  textAlign: 'left'
                }}
              >
                Benefits:
              </h4>
              <ul
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  color: '#696969',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  listStyle: 'none',
                  paddingLeft: '0',
                  textAlign: 'left'
                }}
              >
                <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• Save 30% time on manual checks.</li>
                <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• Reduce document fraud by up to 40%.</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-8 pt-4">
              <button
                className="bg-[#3E6EB4] hover:bg-blue-700 text-white font-medium text-base py-3 px-8 rounded-3xl transition-colors duration-200"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  minWidth: '160px'
                }}
              >
                Learn More
              </button>
              <button
                className="bg-[#3E6EB4] hover:bg-blue-700 text-white font-medium text-base py-3 px-10 rounded-3xl transition-colors duration-200"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  minWidth: '180px'
                }}
              >
                Schedule a Demo
              </button>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <div 
            className="flex justify-center lg:justify-end items-center w-full lg:w-1/2 relative"
            style={{
              minHeight: '750px',
              width: '55%',
              overflow: 'visible'
            }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ 
                x: [150, 0, 50],
                opacity: [0, 1, 1]
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 2.5,
                times: [0, 0.4, 1],
                ease: [0.25, 0.1, 0.25, 1]
              }}
              style={{
                backgroundImage: 'url(/assets/product-shape.png)',
                backgroundSize: 'contain',
                backgroundPosition: 'right center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%'
              }}
            />
            {/* Product Image - stays in place */}
            <motion.div 
              className="relative w-full max-w-lg z-10 mr-12 mb-8" 
              style={{ marginLeft: '-20px' }}
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3, 
                ease: "easeOut",
                opacity: { duration: 1.5 }
              }}
            >
              <img
                src="/assets/DocSim.png"
                alt="AI-Powered Document Similarity Engine"
                className="w-11/12 h-auto object-contain rounded-lg"
                style={{ borderRadius: '24px', transform: 'scale(1.14)' }}
              />
            </motion.div>
          </div>
        </div>

        {/* New Section: DocPilot */}
        <div className="relative mt-16" style={{ minHeight: '600px' }}>
          {/* Design patch 1 - Top right */}
          <motion.div
            className="absolute pointer-events-none"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              right: '0',
              top: '0',
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
          <div className="flex flex-col lg:flex-row items-center relative z-10" style={{ minHeight: '600px' }}>
            {/* Left Side - Image with Background */}
            <motion.div 
              className="flex justify-center lg:justify-start items-center w-full lg:w-1/2 relative"
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ 
                width: '55%',
                backgroundImage: 'url(/assets/shape-bg.png)',
                backgroundSize: 'auto 96%',
                backgroundPosition: '-5% center',
                backgroundRepeat: 'no-repeat',
                minHeight: '700px',
                overflow: 'visible',
                marginTop: '40px'
              }}
            >
              <motion.div 
                className="relative w-full max-w-lg z-10" 
                style={{ marginLeft: '110px' }}
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.3, 
                  ease: "easeOut",
                  opacity: { duration: 1.5 }
                }}
              >
                <img
                  src="/assets/DocPilot.png"
                  alt="DocPilot"
                  className="w-full h-auto object-contain rounded-lg"
                  style={{ borderRadius: '24px' }}
                />
              </motion.div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div 
              className="flex flex-col space-y-6 w-full lg:w-1/2 text-left" 
              style={{ width: '50%', marginTop: '60px' }}
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* DocPilot Button */}
              <button
                className="text-white font-medium text-base rounded-[50px] transition-colors duration-200 w-fit"
                style={{
                  background: 'linear-gradient(90deg, #CD6028 11%, #3E6EB4 100%)',
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 600,
                  width: '158px',
                  height: '52px',
                  paddingTop: '16px',
                  paddingRight: '24px',
                  paddingBottom: '16px',
                  paddingLeft: '24px'
                }}
              >
                DocPilot
              </button>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  fontSize: '32px',
                  lineHeight: '48px',
                  letterSpacing: '0px',
                  verticalAlign: 'middle',
                  color: '#141219',
                  textAlign: 'left'
                }}
              >
                Streamline Document Workflows with Automation
              </h3>

              {/* Features */}
              <div>
                <h4
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    color: '#696969',
                    marginBottom: '2px',
                    marginTop:'-8px',
                    textAlign: 'left'
                  }}
                >
                  Features:
                </h4>
                <ul
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    color: '#696969',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    listStyle: 'none',
                    paddingLeft: '0',
                    textAlign: 'left'
                  }}
                >
                  <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• Automates document collection, routing, and task assignments.</li>
                  <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• Real-time tracking with advanced dashboards.</li>
                  <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• Seamless integration with enterprise systems via APIs.</li>
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    color: '#696969',
                    marginBottom: '2px',
                    textAlign: 'left'
                  }}
                >
                  Benefits:
                </h4>
                <ul
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    color: '#696969',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    listStyle: 'none',
                    paddingLeft: '0',
                    textAlign: 'left'
                  }}
                >
                  <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• Reduce turnaround times by 50%.</li>
                  <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• Improve operational efficiency with minimal manual effort.</li>
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  className="bg-[#3E6EB4] hover:bg-blue-700 text-white font-medium text-base py-3 px-8 rounded-3xl transition-colors duration-200"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    minWidth: '160px'
                  }}
                >
                  Learn More
                </button>
                <button
                  className="bg-[#3E6EB4] hover:bg-blue-700 text-white font-medium text-base py-3 px-8 rounded-3xl transition-colors duration-200"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    minWidth: '180px'
                  }}
                >
                  Schedule a Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* New Section: Doxtract */}
        <div className="relative flex flex-col lg:flex-row items-center mt-16" style={{ minHeight: '750px' }}>
          {/* Design patch 2 - Top left */}
          <motion.div
            className="absolute pointer-events-none"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              left: '100px',
              top: '-80px',
              zIndex: 1
            }}
          >
            <img
              src="/assets/design-patch-2.png"
              alt="Design patch"
              className="w-auto h-auto object-contain"
              style={{ width: '280px', height: '280px', marginBottom: '70px' }}
            />
          </motion.div>
          {/* Left Side - Content */}
          <motion.div 
            className="flex flex-col space-y-4 w-full lg:w-1/2 text-left" 
            style={{ width: '50%' }}
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Doxtract Button */}
            <button
              className="text-white font-medium text-base py-3 px-10 rounded-3xl transition-colors duration-200 w-fit"
              style={{
                background: 'linear-gradient(90deg, #CD6028 11%, #3E6EB4 100%)',
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 600
              }}
            >
              Doxtract
            </button>
            {/* Title */}
            <h3
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: '32px',
                lineHeight: '48px',
                letterSpacing: '0px',
                verticalAlign: 'middle',
                color: '#141219',
                textAlign: 'left'
              }}
            >
              Extract, Validate, and Process Documents with Ease
            </h3>

            {/* Features */}
            <div>
              <h4
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  verticalAlign: 'middle',
                  color: '#696969',
                  marginBottom: '8px',
                  textAlign: 'left'
                }}
              >
                Features:
              </h4>
              <ul
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  color: '#696969',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  listStyle: 'none',
                  paddingLeft: '0',
                  textAlign: 'left'
                }}
              >
                <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• OCR and NLP-based data extraction.</li>
                <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• Handles unstructured documents across industries.</li>
                <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• Validates fields using external data sources.</li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h4
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  verticalAlign: 'middle',
                  color: '#696969',
                  marginBottom: '8px',
                  textAlign: 'left'
                }}
              >
                Benefits:
              </h4>
              <ul
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  color: '#696969',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  listStyle: 'none',
                  paddingLeft: '0',
                  textAlign: 'left'
                }}
              >
                <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• Process 10,000+ documents in minutes.</li>
                <li style={{ marginBottom: '2px', textAlign: 'left', fontWeight: 500 }}>• Achieve 99% data accuracy with AI-driven validation.</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-8 pt-4">
              <button
                className="bg-[#3E6EB4] hover:bg-blue-700 text-white font-medium text-base py-3 px-8 rounded-3xl transition-colors duration-200"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  minWidth: '160px'
                }}
              >
                Learn More
              </button>
              <button
                className="bg-[#3E6EB4] hover:bg-blue-700 text-white font-medium text-base py-3 px-10 rounded-3xl transition-colors duration-200"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  minWidth: '180px'
                }}
              >
                Schedule a Demo
              </button>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <div 
            className="flex justify-center lg:justify-end items-center w-full lg:w-1/2 relative"
            style={{
              minHeight: '750px',
              width: '55%',
              overflow: 'visible'
            }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ 
                x: [150, 0, 50],
                opacity: [0, 1, 1]
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 2.5,
                times: [0, 0.4, 1],
                ease: [0.25, 0.1, 0.25, 1]
              }}
              style={{
                backgroundImage: 'url(/assets/product-shape.png)',
                backgroundSize: 'contain',
                backgroundPosition: 'right center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%'
              }}
            />
            {/* Product Image - stays in place */}
            <motion.div 
              className="relative w-full max-w-lg z-10 mr-12 mb-8" 
              style={{ marginLeft: '-20px' }}
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3, 
                ease: "easeOut",
                opacity: { duration: 1.5 }
              }}
            >
              <img
                src="/assets/Doxtract.png"
                alt="Extract, Validate, and Process Documents with Ease"
                className="w-11/12 h-auto object-contain rounded-lg"
                style={{ borderRadius: '24px', transform: 'scale(1.14)' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
