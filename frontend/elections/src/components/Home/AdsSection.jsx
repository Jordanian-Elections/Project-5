// AdsSection.js
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AdsSection = ({ ads }) => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6 text-center text-jordanian-red">إعلانات المرشحين</h2>
    <Swiper spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }}>
      {ads.map((ad) => (
        <SwiperSlide key={ad.id}>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img src={ad.imageUrl} alt={ad.candidateName} className="w-48 h-36 mb-4 rounded-md" />
            <h3 className="text-xl font-bold text-jordanian-black mb-2">{ad.candidateName}</h3>
            <p className="text-gray-600 text-center">{ad.message}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default AdsSection;
