// // WelcomeMessage.js
// import React from "react";

// const WelcomeMessage = ({ isLoggedIn, username }) => (
//   isLoggedIn && (
//     <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded relative mb-8" role="alert">
//       <strong className="font-bold">مرحبا، {username}!</strong>
//       <span className="block sm:inline">يمكنك الآن المشاركة في الانتخابات.</span>
//     </div>
//   )
// );

// export default WelcomeMessage;








// WelcomeMessage.js
import React from "react";

const WelcomeMessage = ({ isLoggedIn, username }) => (
  isLoggedIn && (
    <div className="bg-gradient-to-r text-[#000000] shadow-lg rounded-lg overflow-hidden mb-8 transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="p-6 relative">
        <div className="flex items-center mb-4">
          <div className="bg-white rounded-full p-2 mr-4">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold">مرحبًا، {username}!</h2>
        </div>
        <p className="text-lg">يمكنك الآن المشاركة في الانتخابات. نتمنى لك تجربة تصويت ممتعة ومفيدة.</p>
        <div className="mt-6">
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full transition-all duration-300 hover:bg-blue-100 hover:shadow-md">
            ابدأ التصويت
          </button>
        </div>
        <div className="absolute top-2 right-2 bg-yellow-400 text-blue-800 text-xs font-bold px-2 py-1 rounded-full animate-pulse">
          جديد
        </div>
      </div>
    </div>
  )
);

export default WelcomeMessage;