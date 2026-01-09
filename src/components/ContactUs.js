import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    inquiryType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
      <style>
        {`
          .contact-form-input::placeholder,
          .contact-form-textarea::placeholder {
            color: #959595;
            opacity: 1;
            font-size: 16px;
          }
        `}
      </style>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-visible" style={{ paddingTop: '80px', paddingBottom: '0' }}>
        {/* Design patch 2 - Top left (half visible from vertical side) */}
        <motion.div
          className="absolute pointer-events-none"
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ 
            y: [-150, 0, 0],
            x: [0, 0, 40],
            opacity: [0, 1, 1]
          }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ 
            duration: 2.0,
            times: [0, 0.5, 1],
            ease: [0.25, 0.1, 0.25, 1]
          }}
          style={{
            left: '-140px',
            top: '0',
            zIndex: 20
          }}
        >
          <img
            src="/assets/design-patch-2.png"
            alt="Design patch"
            className="w-auto h-auto object-contain"
            style={{ width: '280px', height: '280px' }}
          />
        </motion.div>
        <div className="max-w-7xl mx-auto relative mt-12" style={{ zIndex: 2 }}>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Contact Information */}
          <motion.div 
            className="w-full lg:w-[45%]"
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Contact Us Title */}
            <h2
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 600,
                fontSize: '48px',
                lineHeight: '100%',
                letterSpacing: '-1px',
                color: '#141219',
                marginBottom: '24px',
                textAlign: 'left'
              }}
            >
              Contact Us
            </h2>

            {/* Lorem Ipsum Text with Gradient */}
            <p
              style={{
                background: 'linear-gradient(90deg, #CD6028 11%, #3E6EB4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '0px',
                marginBottom: '32px',
                textAlign: 'left'
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </p>

            {/* U.S. Office Section */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '4px', marginBottom: '12px' }}>
                <img 
                  src="/assets/location.png" 
                  alt="Location" 
                  style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '3px', objectFit: 'contain' }}
                />
                <span
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 800,
                    fontSize: '16px',
                    lineHeight: '120%',
                    letterSpacing: '0px',
                    textDecoration: 'underline',
                    color: '#141219',
                    textAlign: 'left'
                  }}
                >
                  U.S. Office
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '120%',
                  letterSpacing: '0px',
                  color: '#141219',
                  marginLeft: '6px',
                  textAlign: 'left'
                }}
              >
                Aadrila Technologies INC,<br />
                8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19901.
              </p>
            </div>

            {/* Indian Office Section */}
            <div style={{ marginTop: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '4px', marginBottom: '12px' }}>
                <img 
                  src="/assets/location.png" 
                  alt="Location" 
                  style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '3px', objectFit: 'contain' }}
                />
                <span
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 800,
                    fontSize: '16px',
                    lineHeight: '120%',
                    letterSpacing: '0px',
                    textDecoration: 'underline',
                    color: '#141219',
                    textAlign: 'left'
                  }}
                >
                  Indian Office
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '120%',
                  letterSpacing: '0px',
                  color: '#141219',
                  marginLeft: '6px',
                  textAlign: 'left'
                }}
              >
                Aadrila Technologies Private Limited,<br />
                Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road, Near D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className="w-full lg:w-[55%]" 
            style={{ position: 'relative', zIndex: 10, marginTop: '30px', marginBottom: "-50px"  }}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '40px',
                paddingTop: '60px',
                paddingBottom: '80px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #F0F0F0',
                minHeight: '700px',
                marginBottom: '-100px',
                position: 'relative',
                zIndex: 10
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              {/* Row 1: Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="contact-form-input"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '14px',
                      border: '1px solid #E0E0E0',
                      borderRadius: '8px',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-form-input"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '14px',
                      border: '1px solid #E0E0E0',
                      borderRadius: '8px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Row 2: Phone Number and Company Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="contact-form-input"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '14px',
                      border: '1px solid #E0E0E0',
                      borderRadius: '8px',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="contact-form-input"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '14px',
                      border: '1px solid #E0E0E0',
                      borderRadius: '8px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Row 3: Inquiry Type */}
              <div>
                <input
                  type="text"
                  name="inquiryType"
                  placeholder="Inquiry Type"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '14px',
                    border: '1px solid #E0E0E0',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Row 4: Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="8"
                  className="contact-form-textarea"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '14px',
                    border: '1px solid #E0E0E0',
                    borderRadius: '8px',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  style={{
                    background: '#3E6EB4',
                    color: '#FFFFFF',
                    padding: '16px 32px',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#2E5E9F'}
                  onMouseLeave={(e) => e.target.style.background = '#3E6EB4'}
                >
                  Send Inquiry
                </button>
              </div>
            </form>
            </div>
          </motion.div>
        </div>
      </div>
      </section>
    </>
  );
};

export default ContactUs;
