import React from "react";

const NewsUpdates = ({ newsUpdates }) => (
  <section className="mb-12 p-4">
    <h2 className="text-4xl font-extrabold text-center text-jordanian-red mb-20">آخر الأخبار</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {newsUpdates.map((news) => (
        <div
          key={news.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3 text-jordanian-black">{news.title}</h3>
            <p className="text-gray-700 text-base">{news.summary}</p>
          </div>
        </div>
      ))}
      
      {/* البطاقة الإضافية الجذابة والأنيقة */}
      <div className="bg-gradient-to-br from-jordanian-red to-red-700 text-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
        <div className="p-6 relative">
          <h3 className="text-2xl font-bold mb-3 group-hover:translate-y-[-5px] transition-transform duration-300">أخبار عاجلة</h3>
          <p className="text-[#201f1f] text-base mb-4 group-hover:translate-y-[-3px] transition-transform duration-300">تابع آخر التطورات والأحداث الهامة في الانتخابات. كن على اطلاع دائم!</p>
          <a href="#" className="inline-block bg-white text-jordanian-red font-semibold py-2 px-4 rounded-full transition-all duration-300 hover:bg-opacity-90 hover:shadow-md">
            اقرأ المزيد
          </a>
          <div className="absolute top-2 right-2 bg-yellow-400 text-jordanian-red text-xs font-bold px-2 py-1 rounded-full animate-pulse">
            جديد
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewsUpdates;