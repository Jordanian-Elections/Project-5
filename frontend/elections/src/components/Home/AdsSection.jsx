// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdsSection = () => {
//   const [ads, setAds] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     candidateName: '',
//     imageUrl: '',
//     description: ''
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAds = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('http://localhost:4000/api/ads');
//         const data = await response.json();
//         console.log('Fetched ads:', data); // Log fetched data
//         setAds(data);
//       } catch (error) {
//         console.error('Failed to fetch ads:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAds();
//   }, []);

//   const handleRequestAd = () => {
//     setShowForm(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:4000/api/ads', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       console.log('Ad request submitted:', result);

//       setFormData({ candidateName: '', imageUrl: '', description: '' });
//       setShowForm(false);

//       // Refetch ads to include the new one
//       setLoading(true);
//       const updatedAds = await fetch('http://localhost:4000/api/ads').then(res => res.json());
//       setAds(updatedAds);
//       setLoading(false);

//     } catch (error) {
//       console.error('Failed to submit ad request:', error);
//     }
//   };

//   return (
//     <div className="relative">
//       <h2 className="text-center text-2xl font-bold mb-4">إعلانات المرشحين</h2>

//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {ads.map((ad, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//               {console.log('Rendering ad:', ad)} {/* Log each ad being rendered */}
//               <img
//                 src={ad.image_url} // Try different possible property names
//                 alt={`Ad for ${ad.candidateName}`}
//                 className="w-full h-48 object-cover rounded-md mb-4"
//                 onError={(e) => {
//                   console.error('Image failed to load:', ad.imageUrl);
//                   e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
//                 }}
//               />
//               <h3 className="text-xl font-semibold">{ad.candidate_name}</h3>
//               <p className="text-gray-600 mt-2">{ad.description}</p>
//             </div>
//           ))}
//         </div>
//       )}
// <div className="text-center mt-8">
//         <button
//           onClick={handleRequestAd}
//           className="bg-red-600 text-white font-bold py-2 px-4 rounded-full 
//                      hover:bg-red-700 transition-colors duration-300 
//                      focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mb-14"
//         >
//           اطلب إعلان
//         </button>
//       </div>

//       {showForm && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
//           <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//             <h3 className="text-lg font-bold text-center mb-4">طلب إعلان</h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="candidateName" className="block text-sm font-medium text-gray-700">اسم المرشح</label>
//                 <input
//                   type="text"
//                   id="candidateName"
//                   name="candidateName"
//                   value={formData.candidateName}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">رابط صورة المرشح</label>
//                 <input
//                   type="url"
//                   id="imageUrl"
//                   name="imageUrl"
//                   value={formData.imageUrl}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="description" className="block text-sm font-medium text-gray-700">وصف الإعلان</label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                   rows="3"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
//                   placeholder="مثال: انتخبوا مرشحكم فلان"
//                   required
//                 ></textarea>
//               </div>
//               <div className="flex items-center justify-between">
//                 <button
//                   type="submit"
//                   className="bg-red-600 text-white font-bold py-2 px-4 rounded-full 
//                              hover:bg-red-700 transition-colors duration-300 
//                              focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
//                 >
//                   إرسال
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setShowForm(false)}
//                   className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full 
//                              hover:bg-gray-400 transition-colors duration-300 
//                              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
//                 >
//                   إلغاء
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//       </div>
//     );
//   };
  
//   export default AdsSection;
      








import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdsSection = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();  // استخدام الـ navigate للتوجيه

  useEffect(() => {
    const fetchAds = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:4000/api/ads');
        const data = await response.json();
        setAds(data);
      } catch (error) {
        console.error('Failed to fetch ads:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  const handleRequestAd = () => {
    navigate('/request-ad');  // توجيه المستخدم إلى صفحة الفورم
  };

  return (
    <div className="relative">
      <h2 className="text-center text-2xl font-bold mb-4">إعلانات المرشحين</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ads.map((ad, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={ad.image_url}
                alt={`Ad for ${ad.candidateName}`}
                className="w-full h-48 object-cover rounded-md mb-4"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                }}
              />
              <h3 className="text-xl font-semibold">{ad.candidate_name}</h3>
              <p className="text-gray-600 mt-2">{ad.description}</p>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-8">
        <button
          onClick={handleRequestAd}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded-full 
                     hover:bg-red-700 transition-colors duration-300 
                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mb-14"
        >
          اطلب إعلان
        </button>
      </div>
    </div>
  );
};

export default AdsSection;
