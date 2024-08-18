// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// const DebatesList = () => {
//   const [debates, setDebates] = useState([]);

//   useEffect(() => {
//     const fetchDebates = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/debates');
//         setDebates(response.data);
//       } catch (error) {
//         console.error('Error fetching debates:', error);
//       }
//     };

//     fetchDebates();
//   }, []);

//   return (
//     <>
//     <Header/>
    
//     <div className="max-w-4xl mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-6 text-center">قائمة المناظرات</h2>
//       <table className="min-w-full bg-white border border-gray-200">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b border-gray-200">اسم المناظرة</th>
//             <th className="py-2 px-4 border-b border-gray-200">المرشح الأول</th>
//             <th className="py-2 px-4 border-b border-gray-200">المرشح الثاني</th>
//             <th className="py-2 px-4 border-b border-gray-200">وقت البداية</th>
//             <th className="py-2 px-4 border-b border-gray-200">وقت النهاية</th>
//             <th className="py-2 px-4 border-b border-gray-200">الاجراء</th>
//           </tr>
//         </thead>
//         <tbody>
//           {debates.map(debate => (
//             <tr key={debate.id}>
//               <td className="py-2 px-4 border-b border-gray-200">{debate.name}</td>
//               <td className="py-2 px-4 border-b border-gray-200">{debate.candidate1_name}</td>
//               <td className="py-2 px-4 border-b border-gray-200">{debate.candidate2_name}</td>
//               <td className="py-2 px-4 border-b border-gray-200">{new Date(debate.start_time).toLocaleString()}</td>
//               <td className="py-2 px-4 border-b border-gray-200">{new Date(debate.end_time).toLocaleString()}</td>
//               {/* <td className="py-2 px-4 border-b border-gray-200">
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
//                   الانضمام
//                 </button>
//               </td> */}
//               <td className="py-2 px-4 border-b border-gray-200">
//   <button
//     onClick={() => window.location.href = "http://localhost:5173/Debate-Room/as970b61724008870416?type=group-call"}
//     className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
//   >
//     الانضمام
//   </button>
// </td>

//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default DebatesList;





//////////////////////new add code///////////////



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const DebatesList = () => {
  const [debates, setDebates] = useState([]);

  useEffect(() => {
    const fetchDebates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/debates');
        setDebates(response.data);
      } catch (error) {
        console.error('Error fetching debates:', error);
      }
    };

    fetchDebates();
  }, []);

  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">قائمة المناظرات</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">اسم المناظرة</th>
              <th className="py-2 px-4 border-b border-gray-200">المرشح الأول</th>
              <th className="py-2 px-4 border-b border-gray-200">المرشح الثاني</th>
              <th className="py-2 px-4 border-b border-gray-200">وقت البداية</th>
              <th className="py-2 px-4 border-b border-gray-200">وقت النهاية</th>
              <th className="py-2 px-4 border-b border-gray-200">الاجراء</th>
            </tr>
          </thead>
          <tbody>
            {debates.map(debate => (
              <tr key={debate.id}>
                <td className="py-2 px-4 border-b border-gray-200">{debate.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{debate.candidate1_name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{debate.candidate2_name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{new Date(debate.start_time).toLocaleString()}</td>
                <td className="py-2 px-4 border-b border-gray-200">{new Date(debate.end_time).toLocaleString()}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button
                    onClick={() => window.location.href = `http://localhost:5173/Debate-Room/${debate.code}?type=group-call`}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    الانضمام
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <Footer />
    </>
  );
};

export default DebatesList;
