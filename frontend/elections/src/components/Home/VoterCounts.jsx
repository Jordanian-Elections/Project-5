// // VoterCounts.js
// import React from "react";

// const VoterCounts = ({ voterCount }) => (
//   <section className="mb-12">
//     <h2 className="text-3xl font-bold mb-6 text-center text-jordanian-red">عدد الناخبين المسجلين</h2>
//     <div className="bg-jordanian-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {Object.entries(voterCount).map(([key, count]) => (
//         <div key={key} className="bg-[#b6abab] p-6 text-white rounded-lg text-center">
//           <h3 className="text-2xl font-bold mb-2">{key}</h3>
//           <p className="text-4xl font-bold">{count}</p>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default VoterCounts;






import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const VoterCounts = ({ voterCount }) => {
  const [animatedCounts, setAnimatedCounts] = useState({});

  useEffect(() => {
    const totalVoters = Object.values(voterCount).reduce((sum, count) => sum + count, 0);
    const animationDuration = 2000; // 2 seconds

    Object.entries(voterCount).forEach(([key, count]) => {
      let startTimestamp;
      const percentage = (count / totalVoters) * 100;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / animationDuration, 1);
        const currentValue = progress * percentage;

        setAnimatedCounts((prev) => ({
          ...prev,
          [key]: currentValue.toFixed(1),
        }));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    });
  }, [voterCount]);

  return (
    <section className="mb-12 px-4">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-jordanian-red">
        عدد الناخبين المسجلين
      </h2>
      <div className="bg-[#bc9a9a] from-jordanian-white to-gray-100 p-8 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(voterCount).map(([key, count]) => (
          <motion.div
            key={key}
            className="bg-gradient-to-r from-jordanian-red to-red-700 p-6 text-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-bold mb-4">{key}</h3>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                <motion.div
                  style={{ width: `${animatedCounts[key]}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedCounts[key]}%` }}
                  transition={{ duration: 2 }}
                />
              </div>
            </div>
            <p className="text-5xl font-bold">
              {animatedCounts[key]}%
            </p>
            <p className="text-lg mt-2">({count} ناخب)</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VoterCounts;