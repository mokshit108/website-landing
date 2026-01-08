import React from 'react';

const Footer = () => {
  return (
    <footer 
      style={{ 
        background: '#3E6EB4',
        padding: '60px 0',
        paddingTop: '120px',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:pr-4 lg:pr-6">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Footer Text */}
          <div className="w-full lg:w-[45%]">
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0px',
                color: '#FFFFFF',
                marginBottom: '16px',
                textAlign: 'left'
              }}
            >
              © 2025 by Aadrila Technologies Private Limited CIN U74999UP2017PTC094688
            </p>
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '150%',
                letterSpacing: '0px',
                color: '#FFFFFF',
                textAlign: 'left'
              }}
            >
              Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow, Lucknow,<br />
              Uttar Pradesh, India, 226024
            </p>
          </div>

          {/* Right Side - Empty space for overlapping form */}
          <div className="w-full lg:w-[55%]">
            {/* This space is intentionally left empty for the overlapping form */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
