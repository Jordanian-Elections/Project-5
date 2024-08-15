// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const VotingSystem = () => {
//   const [circlesData, setCirclesData] = useState([]);
//   const [selectedCircle, setSelectedCircle] = useState(null);
//   const [selectedList, setSelectedList] = useState(null);
//   const [selectedCandidates, setSelectedCandidates] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
  
//       const response = await axios.get('http://localhost:4000/candidates-by-circle');
//       setCirclesData(response.data);
   
//   };



//   const handleVote = async () => {

//       const response = await axios.patch('http://localhost:4000/votedcircle', {

//         national_id:10000006, 
//         candidate_national_ids: selectedCandidates,
//         circle_list: selectedList,
//       });
//       console.log(response.data);
//       alert('Vote recorded successfully!');
   
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Voting System</h1>
      
//       {/* Circle selection */}
//       <div className="mb-4">
//         <h2 className="text-xl font-semibold mb-2">Select Circle</h2>
//         <div className="flex flex-wrap gap-2">
//           {circlesData.map((circle) => (
//             <button
//               key={circle.circle}
//               onClick={() => {
//                 setSelectedCircle(circle.circle);
//                 setSelectedList(null);
//                 setSelectedCandidates([]);
//               }}
//               className={`px-4 py-2 rounded ${
//                 selectedCircle === circle.circle
//                   ? 'bg-blue-500 text-white'
//                   : 'bg-gray-200'
//               }`}
//             >
//               {circle.circle}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* List and Candidate selection */}
//       {selectedCircle && (
//         <div className="mb-4">
//           <h2 className="text-xl font-semibold mb-2">Select List and Candidates</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {circlesData
//               .find((circle) => circle.circle === selectedCircle)
//               .lists.map((list) => (
//                 <div
//                   key={list.list}
//                   className={`p-4 border rounded ${
//                     selectedList === list.list ? 'bg-gray-100 border-blue-500' : ''
//                   }`}
//                 >
//                   <h3
//                     onClick={() => {
//                       setSelectedList(list.list);
//                       setSelectedCandidates([]);
//                     }}
//                     className={`cursor-pointer text-lg font-semibold mb-2 ${
//                       selectedList === list.list ? 'text-blue-500' : ''
//                     }`}
//                   >
//                     {list.list}
//                   </h3>

//                   {/* Candidate Selection */}
//                   {selectedList === list.list &&
//                     list.candidates.map((candidate) => (
//                       <div
//                         key={candidate.candidate_national_id}
//                         className={`p-2 border rounded ${
//                           selectedCandidates.includes(candidate.candidate_national_id)
//                             ? 'bg-yellow-100 border-yellow-500'
//                             : ''
//                         }`}
//                       >
//                         <h4 className="font-semibold">{candidate.name}</h4>
//                         <p>ID: {candidate.candidate_national_id}</p>
//                         <button
//                           onClick={() => {
//                             if (selectedCandidates.includes(candidate.candidate_national_id)) {
//                               setSelectedCandidates(selectedCandidates.filter(
//                                 (id) => id !== candidate.candidate_national_id
//                               ));
//                             } else {
//                               setSelectedCandidates([...selectedCandidates, candidate.candidate_national_id]);
//                             }
//                           }}
//                           className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                         >
//                           {selectedCandidates.includes(candidate.candidate_national_id)
//                             ? 'Deselect'
//                             : 'Select'}
//                         </button>
//                       </div>
//                     ))}
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}

//       {/* Vote button */}
//       {(selectedCandidates.length > 0 || selectedList) && (
//         <button
//           onClick={handleVote}
//           className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
//         >
//           Submit Vote
//         </button>
//       )}
//     </div>
//   );
// };

// export default VotingSystem;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';

// const VotingApp = () => {
//   const [data, setData] = useState([]);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [selectedCircle, setSelectedCircle] = useState(null);
//   const [selectedList, setSelectedList] = useState(null);
//   const [selectedCandidates, setSelectedCandidates] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get('http://localhost:4000/candidates-by-city');
//         setData(response.data);
//       } catch (err) {
//         setError('Failed to fetch data');
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleCityChange = (e) => {
//     setSelectedCity(e.target.value);
//     setSelectedCircle(null);
//     setSelectedList(null);
//     setSelectedCandidates([]);
//   };

//   const handleCircleChange = (e) => {
//     setSelectedCircle(e.target.value);
//     setSelectedList(null);
//     setSelectedCandidates([]);
//   };

//   const handleListChange = (e) => {
//     setSelectedList(e.target.value);
//     setSelectedCandidates([]);
//   };

//   const handleCandidateChange = (candidateId) => {
//     setSelectedCandidates(prev => 
//       prev.includes(candidateId)
//         ? prev.filter(id => id !== candidateId)
//         : [...prev, candidateId]
//     );
//   };

//   const handleSubmit = async () => {
//     try {
//       await axios.patch('http://localhost:4000/votedcircle', {
//         national_id: 10000001, // Replace with actual user ID
//         candidate_national_ids: selectedCandidates,
//         circle_list: selectedList
//       });
//       alert('Vote submitted successfully!');
//       // Reset selections after successful vote
//       setSelectedCity(null);
//       setSelectedCircle(null);
//       setSelectedList(null);
//       setSelectedCandidates([]);
//     } catch (error) {
//       alert('Failed to submit vote. Please try again.');
//     }
//   };

//   if (isLoading) return <div className="text-center mt-8 text-white">Loading...</div>;
//   if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
//       >
//         <div className="bg-indigo-600 py-6 px-4 sm:px-6">
//           <h1 className="text-3xl font-extrabold text-white text-center">Interactive Voting System</h1>
//         </div>

//         <div className="p-6 space-y-6">
//           {/* City Selector */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Select Your City</label>
//             <select 
//               value={selectedCity || ''}
//               onChange={handleCityChange}
//               className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//             >
//               <option value="">Choose a city</option>
//               {data.map(city => (
//                 <option key={city.city} value={city.city}>{city.city}</option>
//               ))}
//             </select>
//           </div>

//           {/* Circle Selector */}
//           {selectedCity && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-4"
//             >
//               <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Circle</label>
//               <select 
//                 value={selectedCircle || ''}
//                 onChange={handleCircleChange}
//                 className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//               >
//                 <option value="">Choose a circle</option>
//                 {data.find(c => c.city === selectedCity)?.circles.map(circle => (
//                   <option key={circle.circle} value={circle.circle}>{circle.circle}</option>
//                 ))}
//               </select>
//             </motion.div>
//           )}

//           {/* List Selector */}
//           {selectedCircle && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-4"
//             >
//               <label className="block text-sm font-medium text-gray-700 mb-2">Select Voting List</label>
//               <select 
//                 value={selectedList || ''}
//                 onChange={handleListChange}
//                 className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//               >
//                 <option value="">Select a list or leave blank for whitepaper</option>
//                 {data.find(c => c.city === selectedCity)?.circles.find(circle => circle.circle === selectedCircle)?.lists.map(list => (
//                   <option key={list.list} value={list.list}>{list.list}</option>
//                 ))}
//               </select>
//             </motion.div>
//           )}

//           {/* Candidate Selector */}
//           {selectedList && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-4 bg-gray-50 p-4 rounded-lg"
//             >
//               <h2 className="text-xl font-semibold mb-4 text-gray-800">Select Your Candidates</h2>
//               <div className="space-y-2">
//                 {data.find(c => c.city === selectedCity)?.circles.find(circle => circle.circle === selectedCircle)?.lists.find(list => list.list === selectedList)?.candidates.map(candidate => (
//                   <label key={candidate.candidate_national_id} className="flex items-center space-x-3 p-2 bg-white rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-150">
//                     <input
//                       type="checkbox"
//                       checked={selectedCandidates.includes(candidate.candidate_national_id)}
//                       onChange={() => handleCandidateChange(candidate.candidate_national_id)}
//                       className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
//                     />
//                     <span className="text-gray-700">{candidate.name}</span>
//                   </label>
//                 ))}
//               </div>
//             </motion.div>
//           )}

//           {/* Submit Button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleSubmit}
//             className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             disabled={!selectedCity || !selectedCircle}
//           >
//             Submit Your Vote
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default VotingApp;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment } from 'react';

// function VotingApp() {
//   const [cities, setCities] = useState([]);
//   const [selectedCandidates, setSelectedCandidates] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetchCandidates();
//     // Simulating user login
//     setUser({ national_id: 10000003, circle: "الدائرة الأولى", city: "الزرقاء" });
//   }, []);

//   const fetchCandidates = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/candidates-by-city');
//       setCities(response.data);
//     } catch (error) {
//       console.error('Error fetching candidates:', error);
//     }
//   };

//   const handleVote = async () => {
//     try {
//       await axios.patch('http://localhost:4000/votedcircle', {
//         user: user,
//         candidate: {
//           candidate_national_ids: selectedCandidates.map(c => c.candidate_national_id),
//           circle_list: selectedCandidates[0]?.list_name, // Assuming all selected candidates are from the same list
//           circle: user.circle,
//           city: user.city
//         }
//       });
//       setShowModal(false);
//       alert('Vote recorded successfully!');
//     } catch (error) {
//       console.error('Error voting:', error);
//       alert('Error recording vote. Please try again.');
//     }
//   };

//   const toggleCandidate = (candidate) => {
//     if (selectedCandidates.some(c => c.candidate_national_id === candidate.candidate_national_id)) {
//       setSelectedCandidates(selectedCandidates.filter(c => c.candidate_national_id !== candidate.candidate_national_id));
//     } else {
//       setSelectedCandidates([...selectedCandidates, candidate]);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <h1 className="text-4xl font-bold mb-5 text-center text-gray-800">نظام التصويت</h1>
          
//           {/* User Information */}
//           <div className="mb-6 text-right">
//             <h2 className="text-2xl font-semibold mb-3">معلومات الناخب</h2>
//             <p><strong>الرقم الوطني:</strong> {user?.national_id}</p>
//             <p><strong>الدائرة:</strong> {user?.circle}</p>
//             <p><strong>المدينة:</strong> {user?.city}</p>
//           </div>

//           {/* Candidate List */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 text-right">المرشحون</h2>
//             {cities.map((cityData) => (
//               <div key={cityData.city} className="mb-4 border rounded-lg p-4">
//                 <h3 className="text-xl font-semibold text-right">{cityData.city}</h3>
//                 {cityData.circles.map((circleData) => (
//                   <div key={circleData.circle} className="ml-4 mb-2 border-l-2 pl-4">
//                     <h4 className="text-lg font-medium text-right">{circleData.circle}</h4>
//                     {circleData.lists.map((listData) => (
//                       <div key={listData.list} className="ml-4 border rounded p-2 mb-2">
//                         <h5 className="text-md font-medium text-right">{listData.list}</h5>
//                         <ul className="list-none">
//                           {listData.candidates.map((candidate) => (
//                             <li key={candidate.candidate_national_id} className="flex items-center justify-end">
//                               <label className="flex items-center space-x-2 cursor-pointer">
//                                 <span>{candidate.candidate_name}</span>
//                                 <input
//                                   type="checkbox"
//                                   checked={selectedCandidates.some(c => c.candidate_national_id === candidate.candidate_national_id)}
//                                   onChange={() => toggleCandidate({...candidate, list_name: listData.list})}
//                                   className="form-checkbox h-5 w-5 text-blue-600"
//                                 />
//                               </label>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={() => setShowModal(true)}
//             className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
//           >
//             تأكيد التصويت
//           </button>

//           {/* Confirmation Modal */}
//           <Transition appear show={showModal} as={Fragment}>
//             <Dialog as="div" className="relative z-10" onClose={() => setShowModal(false)}>
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100"
//                 leaveTo="opacity-0"
//               >
//                 <div className="fixed inset-0 bg-black bg-opacity-25" />
//               </Transition.Child>

//               <div className="fixed inset-0 overflow-y-auto">
//                 <div className="flex min-h-full items-center justify-center p-4 text-center">
//                   <Transition.Child
//                     as={Fragment}
//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0 scale-95"
//                     enterTo="opacity-100 scale-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100 scale-100"
//                     leaveTo="opacity-0 scale-95"
//                   >
//                     <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-right align-middle shadow-xl transition-all">
//                       <Dialog.Title
//                         as="h3"
//                         className="text-lg font-medium leading-6 text-gray-900"
//                       >
//                         تأكيد التصويت
//                       </Dialog.Title>
//                       <div className="mt-2">
//                         <p className="text-sm text-gray-500">
//                           أنت على وشك التصويت للمرشحين التاليين:
//                         </p>
//                         <ul className="list-disc mr-5 mt-2">
//                           {selectedCandidates.map((candidate) => (
//                             <li key={candidate.candidate_national_id}>
//                               {candidate.name} - {candidate.list_name}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       <div className="mt-4">
//                         <button
//                           type="button"
//                           className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                           onClick={handleVote}
//                         >
//                           تأكيد التصويت
//                         </button>
//                         <button
//                           type="button"
//                           className="mr-3 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
//                           onClick={() => setShowModal(false)}
//                         >
//                           إلغاء
//                         </button>
//                       </div>
//                     </Dialog.Panel>
//                   </Transition.Child>
//                 </div>
//               </div>
//             </Dialog>
//           </Transition>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VotingApp;

import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function VotingApp() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCircle, setSelectedCircle] = useState(null);
  const [selectedList, setSelectedList] = useState(null);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCandidates();
    // Simulating user login
    setUser({ national_id: 100019, circle: "الدائرة الأولى", city: "الزرقاء" });
  }, []);

  const fetchCandidates = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:1000/api/voting/candidates-by-city');
      setCities(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching candidates:', error);
      setError('فشل في جلب البيانات. يرجى المحاولة مرة أخرى.');
      setIsLoading(false);
    }
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedCircle(null);
    setSelectedList(null);
    setSelectedCandidates([]);
  };

  const handleCircleChange = (e) => {
    setSelectedCircle(e.target.value);
    setSelectedList(null);
    setSelectedCandidates([]);
  };

  const handleListChange = (e) => {
    setSelectedList(e.target.value);
    setSelectedCandidates([]);
  };

  const toggleCandidate = (candidate) => {
    setSelectedCandidates(prev => 
      prev.some(c => c.candidate_national_id === candidate.candidate_national_id)
        ? prev.filter(c => c.candidate_national_id !== candidate.candidate_national_id)
        : [...prev, candidate]
    );
  };

  const handleVote = async () => {
    try {
      await axios.patch('http://localhost:1000/api/voting/votedcircle', {
        user: user,
        candidate: {
          candidate_national_ids: selectedCandidates.map(c => c.candidate_national_id),
          circle_list: selectedList,
          circle: selectedCircle,
          city: selectedCity
        }
      });
      setShowModal(false);
      alert('تم تسجيل التصويت بنجاح!');
      // Reset selections after successful vote
      setSelectedCity(null);
      setSelectedCircle(null);
      setSelectedList(null);
      setSelectedCandidates([]);
    } catch (error) {
      console.error('Error voting:', error);
      alert('خطأ في تسجيل التصويت. يرجى المحاولة مرة أخرى.');
    }
  };

  if (isLoading) return <div className="text-center mt-8 text-white">جاري التحميل...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="bg-blue-700 py-6 px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-white text-center">نظام التصويت التفاعلي</h1>
        </div>

        <div className="p-6 space-y-6">
          {/* User Information */}
          <div className="mb-6 text-right">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">معلومات الناخب</h2>
            <p><strong className="font-medium">الرقم الوطني:</strong> {user?.national_id}</p>
            <p><strong className="font-medium">الدائرة:</strong> {user?.circle}</p>
            <p><strong className="font-medium">المدينة:</strong> {user?.city}</p>
          </div>

          {/* City Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">اختر مدينتك</label>
            <select 
              value={selectedCity || ''}
              onChange={handleCityChange}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">اختر مدينة</option>
              {cities.map(city => (
                <option key={city.city} value={city.city}>{city.city}</option>
              ))}
            </select>
          </div>

          {/* Circle Selector */}
          {selectedCity && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">اختر دائرتك</label>
              <select 
                value={selectedCircle || ''}
                onChange={handleCircleChange}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
              >
                <option value="">اختر دائرة</option>
                {cities.find(c => c.city === selectedCity)?.circles.map(circle => (
                  <option key={circle.circle} value={circle.circle}>{circle.circle}</option>
                ))}
              </select>
            </motion.div>
          )}

          {/* List Selector */}
          {selectedCircle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">اختر القائمة</label>
              <select 
                value={selectedList || ''}
                onChange={handleListChange}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
              >
                <option value="">اختر قائمة أو اترك فارغًا للورقة البيضاء</option>
                {cities.find(c => c.city === selectedCity)?.circles.find(circle => circle.circle === selectedCircle)?.lists.map(list => (
                  <option key={list.list} value={list.list}>{list.list}</option>
                ))}
              </select>
            </motion.div>
          )}

          {/* Candidate Selector */}
          {selectedList && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 bg-gray-100 p-4 rounded-lg"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800">اختر المرشحين</h2>
              <div className="space-y-2">
                {cities.find(c => c.city === selectedCity)?.circles.find(circle => circle.circle === selectedCircle)?.lists.find(list => list.list === selectedList)?.candidates.map(candidate => (
                  <label key={candidate.candidate_national_id} className="flex items-center justify-between p-2 bg-white rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-150">
                    <span className="text-gray-700">{candidate.name}</span>
                    <input
                      type="checkbox"
                      checked={selectedCandidates.some(c => c.candidate_national_id === candidate.candidate_national_id)}
                      onChange={() => toggleCandidate(candidate)}
                      className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                    />
                  </label>
                ))}
              </div>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={!selectedCity || !selectedCircle}
          >
            تأكيد التصويت
          </motion.button>
        </div>
      </motion.div>

      {/* Confirmation Modal */}
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" open={showModal} onClose={() => setShowModal(false)}>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
              <Dialog.Title as="h3" className="text-lg font-semibold text-gray-900">
                تأكيد التصويت
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  هل أنت متأكد أنك تريد التصويت للمرشحين المحددين؟
                </p>
              </div>
              <div className="mt-4 flex gap-4">
                <button
                  type="button"
                  onClick={handleVote}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  نعم، سجل التصويت
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  إلغاء
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default VotingApp;
