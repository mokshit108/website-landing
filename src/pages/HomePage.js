import React from 'react';
import MainSection from '../components/MainSection';
import IndustrySection from '../components/IndustrySection';
import ProductSection from '../components/ProductSection';
import BlogSection from '../components/BlogSection';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <div id="home">
        <MainSection />
      </div>
      <div id="industries">
        <IndustrySection />
      </div>
      <div id="products">
        <ProductSection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <div id="contact-us">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
