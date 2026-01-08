import React from 'react';

const ProductSection = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Design patch 2 - Top left */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '0',
          top: '0',
          zIndex: 1
        }}
      >
        <img
          src="/assets/design-patch-2.png"
          alt="Design patch"
          className="w-auto h-auto object-contain"
          style={{ width: '280px', height: '280px' }}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered small title */}
        <div className="text-center mb-4" style={{ marginTop: '72px' }}>
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
        </div>

        {/* Centered "Our Products" heading */}
        <div className="text-center mb-12">
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
        </div>

        {/* Main content: Left side text, Right side image */}
        <div className="flex flex-col lg:flex-row items-center" style={{ minHeight: '650px' }}>
          {/* Left Side - Content */}
          <div className="flex flex-col space-y-4 w-full lg:w-1/2 text-left" style={{ width: '50%' }}>
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
          </div>

          {/* Right Side - Image */}
          <div 
            className="flex justify-center lg:justify-end items-center w-full lg:w-1/2 relative"
            style={{
              backgroundImage: 'url(/assets/product-shape.png)',
              backgroundSize: 'auto 100%',
              backgroundPosition: 'right 60%',
              backgroundRepeat: 'no-repeat',
              minHeight: '650px',
              width: '55%',
              overflow: 'visible'
            }}
          >
            <div className="relative w-full max-w-lg z-10 mr-12 mb-8" style={{ marginLeft: '-20px' }}>
              <img
                src="/assets/DocSim.png"
                alt="AI-Powered Document Similarity Engine"
                className="w-11/12 h-auto object-contain rounded-lg"
                style={{ borderRadius: '24px', transform: 'scale(1.14)' }}
              />
            </div>
          </div>
        </div>

        {/* New Section: DocPilot */}
        <div className="relative mt-16" style={{ minHeight: '600px' }}>
          {/* Design patch 1 - Top right */}
          <div
            className="absolute pointer-events-none"
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
          </div>
          <div className="flex flex-col lg:flex-row items-center relative z-10" style={{ minHeight: '600px' }}>
            {/* Left Side - Image with Background */}
            <div 
              className="flex justify-center lg:justify-start items-center w-full lg:w-1/2 relative"
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
              <div className="relative w-full max-w-lg z-10" style={{ marginLeft: '110px' }}>
                <img
                  src="/assets/DocPilot.png"
                  alt="DocPilot"
                  className="w-full h-auto object-contain rounded-lg"
                  style={{ borderRadius: '24px' }}
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col space-y-6 w-full lg:w-1/2 text-left" style={{ width: '50%', marginTop: '60px' }}>
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
            </div>
          </div>
        </div>

        {/* New Section: Doxtract */}
        <div className="relative flex flex-col lg:flex-row items-center mt-16" style={{ minHeight: '650px' }}>
          {/* Design patch 2 - Top left */}
          <div
            className="absolute pointer-events-none"
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
          </div>
          {/* Left Side - Content */}
          <div className="flex flex-col space-y-4 w-full lg:w-1/2 text-left" style={{ width: '50%' }}>
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
          </div>

          {/* Right Side - Image */}
          <div 
            className="flex justify-center lg:justify-end items-center w-full lg:w-1/2 relative"
            style={{
              backgroundImage: 'url(/assets/product-shape.png)',
              backgroundSize: 'auto 100%',
              backgroundPosition: 'right 60%',
              backgroundRepeat: 'no-repeat',
              minHeight: '650px',
              width: '55%',
              overflow: 'visible'
            }}
          >
            <div className="relative w-full max-w-lg z-10 mr-12 mb-8" style={{ marginLeft: '-20px' }}>
              <img
                src="/assets/Doxtract.png"
                alt="Extract, Validate, and Process Documents with Ease"
                className="w-11/12 h-auto object-contain rounded-lg"
                style={{ borderRadius: '24px', transform: 'scale(1.14)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
