

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaNewspaper, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const NewsUpdates1 = () => {
  // Define the news data directly inside the component
  const newsUpdates1 = [
    { id: 1, title: "انتخابات جديدة في المدينة", summary: "تحديثات حول الانتخابات القادمة في المدينة." },
    { id: 2, title: "نتائج الانتخابات الأخيرة", summary: "تفاصيل حول نتائج الانتخابات الأخيرة التي أجريت." },
    { id: 3, title: "إجراءات انتخابية جديدة", summary: "التعرف على الإجراءات الجديدة التي تم إدخالها في العملية الانتخابية." },
    { id: 4, title: "تحديثات حول المرشحين", summary: "معلومات جديدة عن المرشحين في الانتخابات." },
    { id: 5, title: "تطورات جديدة في الحملة الانتخابية", summary: "أحدث التطورات في الحملة الانتخابية الجارية." },
    { id: 6, title: "تأثير التعديلات الجديدة على العملية الانتخابية", summary: "نظرة على كيف ستؤثر التعديلات الجديدة على الانتخابات المقبلة." },
    { id: 7, title: "تحليل نتائج استطلاعات الرأي", summary: "تحليل شامل لنتائج استطلاعات الرأي الأخيرة المتعلقة بالانتخابات." },
    { id: 8, title: "أبرز المرشحين في السباق الانتخابي", summary: "معلومات عن أبرز المرشحين في الانتخابات الحالية." },
    { id: 9, title: "استعدادات الانتخابات في المناطق النائية", summary: "تحديثات حول استعدادات الانتخابات في المناطق النائية." },
    { id: 10, title: "أخبار عاجلة حول الحملة الانتخابية", summary: "آخر الأخبار حول الحملة الانتخابية والأحداث المهمة." },
    { id: 11, title: "مراجعة للمشاركة العامة في الانتخابات", summary: "مراجعة لمستوى المشاركة العامة في الانتخابات الأخيرة." },
    { id: 12, title: "التحديات التي تواجهها اللجنة الانتخابية", summary: "نظرة على التحديات التي تواجه اللجنة الانتخابية وكيفية التعامل معها." },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(newsUpdates1.length / itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const NewsCard = ({ news }) => (
    <motion.div
      variants={itemVariants}
      className="bg-zait shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-white">{news.title}</h3>
        <p className="text-gray-200 text-base">{news.summary}</p>
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 bg-jordanian-red text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-red-700"
        >
          اقرأ المزيد
        </motion.button> */}
      </div>
    </motion.div>
  );

  const BreakingNewsCard = () => (
    <motion.div
      variants={itemVariants}
      className="bg-zait1  text-black shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl group"
    >
      <div className="p-6 relative">
        <motion.h3
          initial={{ y: 0 }}
          whileHover={{ y: -5 }}
          className="text-2xl font-bold mb-3"
        >
          أخبار عاجلة
        </motion.h3>
        <motion.p
          initial={{ y: 0 }}
          whileHover={{ y: -3 }}
          className="text-white text-base mb-4"
        >
          تابع آخر التطورات والأحداث الهامة في الانتخابات. كن على اطلاع دائم!
        </motion.p>
        {/* <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-jordanian-red font-semibold py-2 px-4 rounded-full transition-all duration-300 hover:bg-opacity-90 hover:shadow-md"
        >
          اقرأ المزيد
        </motion.a> */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-2 right-2 bg-yellow-400 text-jordanian-red text-xs font-bold px-2 py-1 rounded-full"
        >
          جديد
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-zait mb-12">
          <FaNewspaper className="inline-block text-black text-4xl ml-2 mb-1" />
          آخر الأخبار
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {newsUpdates1
                .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
                .map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              {currentPage === totalPages - 1 && <BreakingNewsCard />}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevPage}
              className="bg-black text-white p-2 rounded-full shadow-md m-4"
            >
              <FaChevronRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextPage}
              className="bg-black text-white p-2 rounded-full shadow-md m-4"
            >
              <FaChevronLeft />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsUpdates1;
