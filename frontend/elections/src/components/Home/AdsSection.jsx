// // AdsSection.js
// import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const AdsSection = ({ ads }) => (
//   <section className="mb-12">
//     <h2 className="text-3xl font-bold mb-6 text-center text-jordanian-red">إعلانات المرشحين</h2>
//     <Swiper spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }}>
//       {ads.map((ad) => (
//         <SwiperSlide key={ad.id}>
//           <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
//             <img src={ad.imageUrl} alt={ad.candidateName} className="w-48 h-36 mb-4 rounded-md" />
//             <h3 className="text-xl font-bold text-jordanian-black mb-2">{ad.candidateName}</h3>
//             <p className="text-gray-600 text-center">{ad.message}</p>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   </section>
// );

// export default AdsSection;









// Carousel.js
import React, { useState, useRef } from 'react';

const AdsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    const totalSlides = carousel.children.length;
    setCurrentIndex((prevIndex) =>
      (prevIndex + direction + totalSlides) % totalSlides
    );
  };

  return (
    <>
    
    <div className="relative w-full max-w-4xl m-32">
      <h2 className='text-4xl font-extrabold mb-8 text-center text-jordanian-red'>اعلانات المرشحين</h2>
      <div className="overflow-hidden relative rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          ref={carouselRef}
        >
          <div className="min-w-full">
            <img
              src="https://via.placeholder.com/800x400/FFB6C1/000000"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-full">
            <img
              src="https://via.placeholder.com/800x400/87CEFA/000000"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-full">
            <img
              src="https://via.placeholder.com/800x400/98FB98/000000"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
        onClick={() => scrollCarousel(-1)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
        onClick={() => scrollCarousel(1)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
    </>
  );
};

export default AdsSection;
