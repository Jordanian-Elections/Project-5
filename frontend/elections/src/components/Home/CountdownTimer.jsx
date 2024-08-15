// // CountdownTimer.js
// import React, { useState, useEffect } from "react";

// const CountdownTimer = ({ targetDate }) => {
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
    
//     return () => clearInterval(timer);
//   }, [targetDate]);

//   function calculateTimeLeft() {
//     const difference = +new Date(targetDate) - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         أيام: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         ساعات: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         دقائق: Math.floor((difference / 1000 / 60) % 60),
//         ثواني: Math.floor((difference / 1000) % 60),
//       };
//     } else {
//       timeLeft = {
//         أيام: 0,
//         ساعات: 0,
//         دقائق: 0,
//         ثواني: 0,
//       };
//     }

//     return timeLeft;
//   }

//   return (
//     <div className="text-2xl font-bold text-jordanian-red">
//       {Object.keys(timeLeft).length ? (
//         Object.entries(timeLeft).map(([unit, value]) => (
//           <span key={unit} className="mx-2">
//             {value} {unit}
//           </span>
//         ))
//       ) : (
//         <span>انتهى وقت الانتخابات!</span>
//       )}
//     </div>
//   );
// };

// export default CountdownTimer;






// CountdownTimer.js
import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        أيام: Math.floor(difference / (1000 * 60 * 60 * 24)),
        ساعات: Math.floor((difference / (1000 * 60 * 60)) % 24),
        دقائق: Math.floor((difference / 1000 / 60) % 60),
        ثواني: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        أيام: 0,
        ساعات: 0,
        دقائق: 0,
        ثواني: 0,
      };
    }

    return timeLeft;
  }

  return (
    <div className="flex justify-center items-center space-x-4 text-white">
      {Object.keys(timeLeft).length ? (
        Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="flex flex-col items-center bg-gradient-to-r ml-5 from-[#d46666] to-[#a43e3e] shadow-2xl rounded-xl px-6 py-4 w-28 text-center transform transition-transform hover:scale-105"
          >
            <span className="text-5xl font-extrabold block">{value}</span>
            <span className="text-2xl mt-2">{unit}</span>
          </div>
        ))
      ) : (
        <span className="text-3xl font-extrabold">انتهى وقت الانتخابات!</span>
      )}
    </div>
  );
};

export default CountdownTimer;











// // CountdownTimer.js
// import React, { useState, useEffect } from "react";

// const CountdownTimer = ({ targetDate }) => {
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [targetDate]);

//   function calculateTimeLeft() {
//     const difference = +new Date(targetDate) - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         أيام: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         ساعات: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         دقائق: Math.floor((difference / 1000 / 60) % 60),
//         ثواني: Math.floor((difference / 1000) % 60),
//       };
//     } else {
//       timeLeft = { أيام: 0, ساعات: 0, دقائق: 0, ثواني: 0 };
//     }

//     return timeLeft;
//   }

//   return (
//     <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl">
//       <h2 className="text-3xl font-bold text-white text-center mb-6">الوقت المتبقي للانتخابات</h2>
//       <div className="flex justify-center items-center space-x-4 text-white">
//         {Object.keys(timeLeft).length ? (
//           Object.entries(timeLeft).map(([unit, value]) => (
//             <div
//               key={unit}
//               className="flex flex-col items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl px-6 py-4 w-32 text-center transform transition-all duration-300 hover:scale-110 hover:bg-opacity-30"
//             >
//               <span className="text-5xl font-extrabold block mb-2">{value}</span>
//               <span className="text-lg uppercase tracking-wider">{unit}</span>
//             </div>
//           ))
//         ) : (
//           <span className="text-3xl font-extrabold animate-pulse">انتهى وقت الانتخابات!</span>
//         )}
//       </div>
//       <div className="mt-8 text-center">
//         <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:bg-blue-100 hover:shadow-lg transform hover:scale-105">
//           شارك الآن
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;