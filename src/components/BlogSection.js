import React, { useState } from 'react';

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: 'How AI is Revolutionizing Document Management for Enterprises',
      date: '24 July, 2023',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...'
    },
    {
      id: 2,
      title: 'Top 5 Fraud Prevention Strategies for Financial Institutions',
      date: '24 July, 2023',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...'
    },
    {
      id: 3,
      title: 'The Future of OCR: From Basic Extraction to AI-Driven Intelligence',
      date: '24 July, 2023',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...'
    },
    {
      id: 4,
      title: 'Understanding Digital Transformation in Modern Banking',
      date: '24 July, 2023',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...'
    },
    {
      id: 5,
      title: 'Machine Learning Applications in Healthcare Documentation',
      date: '24 July, 2023',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...'
    }
  ];

  const cardsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / cardsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const startIndex = currentIndex * cardsPerPage;
  const displayedPosts = blogPosts.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Design patch 1 - Top left */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '0',
          top: '0',
          zIndex: 1,
          marginLeft: '80px'
        }}
      >
        <img
          src="/assets/design-patch-1.png"
          alt="Design patch"
          className="w-auto h-auto object-contain"
          style={{ width: '200px', height: '200px' }}
        />
      </div>

      {/* Design patch 2 - Top right behind third card */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '0',
          top: '120px',
          zIndex: 1,
          marginBottom: '40px',
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
        {/* Centered "Blogs" heading */}
        <div className="text-center mb-6">
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
            Blogs
          </h2>
        </div>

        {/* Subtitle with gradient text */}
        <div className="text-center mb-12">
          <p
            style={{
              background: 'linear-gradient(90deg, #CD6028 11%, #3E6EB4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
          {displayedPosts.map((post) => (
            <div
              key={post.id}
              className="relative"
              style={{ overflow: 'visible', maxWidth: '360px', margin: '0 auto' }}
            >
              {/* Mask Background Effect at Bottom of Each Card */}
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: '-30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 0
                }}
              >
                <img
                  src="/assets/mask.png"
                  alt="Design mask"
                  className="object-contain"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: 'none'
                  }}
                />
              </div>

              <div
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative z-10"
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  overflow: 'visible'
                }}
              >
              <div className="p-6">
                {/* Card Title */}
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0px',
                    verticalAlign: 'middle',
                    color: '#141219',
                    minHeight: '24px',
                    textAlign: 'left'
                  }}
                >
                  {post.title}
                </h3>

                {/* Date */}
                <p
                  className="mb-4"
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#719AD0',
                    textAlign: 'left'
                  }}
                >
                  {post.date}
                </p>

                {/* Content */}
                <p
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#696969',
                    textAlign: 'left'
                  }}
                >
                  {post.content}
                </p>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Buttons Below Cards */}
        <div className="flex justify-center gap-4 mt-16">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrevious}
            className="hover:opacity-90 transition-opacity duration-200"
            style={{
              background: '#3E6EB4',
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20L13.41 18.59L7.83 13H20V11H7.83L13.41 5.41L12 4L4 12L12 20Z"
                fill="white"
              />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="hover:opacity-90 transition-opacity duration-200"
            style={{
              background: '#3E6EB4',
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
