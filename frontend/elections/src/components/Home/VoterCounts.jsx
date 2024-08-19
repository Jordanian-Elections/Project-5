

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaMapMarkedAlt, FaUserGraduate, FaUserTie,FaChartBar } from 'react-icons/fa';

const VoterCounts = () => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  const stats = [
    { label: "عدد الناخبين المسجلين", value: "3,500,000", icon: FaUsers },
    { label: "عدد الدوائر الانتخابية", value: "12", icon: FaMapMarkedAlt },
    { label: "نسبة مشاركة الشباب", value: "35%", icon: FaUserGraduate },
    { label: "عدد المرشحين", value: "650", icon: FaUserTie },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 5000); // Change stat every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="bg-gradient py-12 px-4 sm:px-6 lg:px-8 " >
      <div className='flex justify-center'>

              <FaChartBar className="ml-2 text-4xl" />
      <h2 className="text-4xl font-bold mb-4 flex items-center text-center text-zait">
              إحصائيات الانتخابات
            </h2>

      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">إحصائيات الانتخابات</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-500 ${
                index === currentStatIndex ? 'scale-110 z-10' : 'scale-100 z-0'
              }`}
              variants={itemVariants}
            >
              <motion.div
                className="text-5xl mb-4 text-red-600"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: index === currentStatIndex ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className='text-zait' />
              </motion.div>
              <motion.div 
                className="text-4xl font-bold text-gray-800 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {stat.value}
              </motion.div>
              <motion.div 
                className="text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default VoterCounts;