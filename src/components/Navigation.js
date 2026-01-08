import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// Option 2: If you want to import logo from src/assets folder, uncomment below:
// import logo from '../assets/logo.png';

const Navigation = ({ splashComplete = false }) => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only start animation after splash screen completes
    if (splashComplete) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100); // Small delay after splash completes
      
      return () => clearTimeout(timer);
    }
  }, [splashComplete]);

  const navLinks = ['Home', 'Industries', 'Products', 'Blog', 'About Us', 'Contact Us'];

  const handleNavigation = (link) => {
    setActiveLink(link);
    
    // If clicking "About Us", navigate to /about-us page
    if (link === 'About Us') {
      navigate('/about-us');
      return;
    }
    
    // Map navigation links to section IDs
    const sectionMap = {
      'Home': 'home',
      'Industries': 'industries',
      'Products': 'products',
      'Blog': 'blog',
      'Contact Us': 'contact-us'
    };
    
    const sectionId = sectionMap[link];
    
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav 
      className="bg-white shadow-sm relative z-10 pb-2"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
        willChange: 'transform, opacity'
      }}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center min-h-20 py-2">
          {/* Logo and Company Name - Left Side */}
          <div 
            className="flex-shrink-0 flex items-center space-x-2 -ml-4 cursor-pointer"
            onClick={() => navigate('/')}
            style={{
              opacity: splashComplete ? 1 : 0,
              transition: 'opacity 0.5s ease-in',
              pointerEvents: splashComplete ? 'auto' : 'none'
            }}
          >
            {/* Option 1: Logo from public/assets folder (use /assets/logo.png) */}
            {/* Option 2: Logo from src/assets folder (import and use: src={logo}) */}
            <img 
              src="/assets/logo.png" 
              alt="AADRILA Logo" 
              className="h-14 w-auto"
            />
            <div className="flex flex-col">
              <h1 
                className="text-gray-900" 
                style={{ 
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 500,
                  fontSize: '30px',
                  lineHeight: '1'
                }}
              >
                AADRILA
              </h1>
              <p 
                className="text-gray-900" 
                style={{ 
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 800,
                  fontSize: '10px',
                  lineHeight: '1.2',
                  marginTop: '2px',
                  letterSpacing: '0.4em'
                }}
              >
                TECHNOLOGIES
              </p>
            </div>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:block">
            <div className="ml-16 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link);
                  }}
                  className={`text-lg leading-[22px] px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                    activeLink === link
                      ? 'text-[#3E6EB4] font-medium'
                      : 'text-gray-700 font-normal hover:text-[#3E6EB4]'
                  }`}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Get Demo Button - Right Side */}
          <div className="flex-shrink-0 ml-8 mr-0">
            <button className="bg-[#3E6EB4] hover:bg-blue-700 text-white font-medium text-md leading-[18px] px-10 py-3 rounded-3xl transition-colors duration-200" style={{ fontFamily: 'Manrope, sans-serif', minWidth: '140px' }}>
              Get Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-[#3E6EB4] p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link);
              }}
              className={`text-lg leading-[22px] block px-3 py-2 rounded-md font-medium ${
                activeLink === link
                  ? 'text-[#3E6EB4] font-medium bg-blue-50'
                  : 'text-gray-700 font-normal hover:text-[#3E6EB4] hover:bg-gray-50'
              }`}
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;