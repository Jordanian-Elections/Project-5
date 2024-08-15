// HeroSection.js
import React from "react";
import v from "../../assets/videoplayback.mp4";  
import bgImage from "../../assets/download.jpg"; // Import the background image

const HeroSection = () => (
  <section
    className="relative h-screen flex items-center justify-center text-center text-white"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-4">مرحبًا بكم في منصة الانتخابات الأردنية</h1>
      <p className="text-xl mb-8">
        صوتكم هو قوتكم! انضم إلينا لبناء مستقبل مشرق لأردننا الحبيب.
      </p>
      <div className="flex justify-center items-center mb-8">
        <iframe
          src={v}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-[600px] h-[400px]"
        ></iframe>
      </div>
      <a
        href="/register"
        className="bg-[#d46666] hover:bg-jordanian-red-dark text-white py-2 px-4 rounded-full font-bold transition duration-300"
      >
        صوّت الآن
      </a>
    </div>
  </section>
);

export default HeroSection;
