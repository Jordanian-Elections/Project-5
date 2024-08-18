
// ///////////////////////

















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const RequestAdForm = () => {
//   const [formData, setFormData] = useState({
//     candidateName: '',
//     imageUrl: '',
//     description: ''
//   });

//   const navigate = useNavigate(); 

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // تمرير البيانات إلى صفحة الدفع
//     navigate('/payment', { state: { formData } });
//   };

//   const handleCancel = () => {
//     navigate('/');
//   };

//   return (
//     <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//       <h3 className="text-lg font-bold text-center mb-4">طلب إعلان</h3>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="candidateName" className="block text-sm font-medium text-gray-700">اسم المرشح</label>
//           <input
//             type="text"
//             id="candidateName"
//             name="candidateName"
//             value={formData.candidateName}
//             onChange={handleInputChange}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">رابط صورة المرشح</label>
//           <input
//             type="url"
//             id="imageUrl"
//             name="imageUrl"
//             value={formData.imageUrl}
//             onChange={handleInputChange}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700">وصف الإعلان</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             rows="3"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
//             placeholder="مثال: انتخبوا مرشحكم فلان"
//             required
//           ></textarea>
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-red-600 text-white font-bold py-2 px-4 rounded-full 
//                        hover:bg-red-700 transition-colors duration-300 
//                        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
//           >
//             إرسال
//           </button>
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full 
//                        hover:bg-gray-400 transition-colors duration-300 
//                        focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
//           >
//             إلغاء
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RequestAdForm;









// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const RequestAdForm = () => {
//   const [formData, setFormData] = useState({
//     candidateName: '',
//     imageUrl: '',
//     description: '',
//     price: '50.00', // Default value matching the migration script
//     status: 'rejected' // Default value
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Navigate to the payment page with form data
//     navigate('/payment', { state: { formData } });
//   };

//   const handleCancel = () => {
//     navigate('/');
//   };

//   return (
//     <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//       <h3 className="text-lg font-bold text-center mb-4">طلب إعلان</h3>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="candidateName" className="block text-sm font-medium text-gray-700">اسم المرشح</label>
//           <input
//             type="text"
//             id="candidateName"
//             name="candidateName"
//             value={formData.candidateName}
//             onChange={handleInputChange}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">رابط صورة المرشح</label>
//           <input
//             type="url"
//             id="imageUrl"
//             name="imageUrl"
//             value={formData.imageUrl}
//             onChange={handleInputChange}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700">وصف الإعلان</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             rows="3"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
//             placeholder="مثال: انتخبوا مرشحكم فلان"
//             required
//           ></textarea>
//         </div>
        {/* <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">السعر</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
            placeholder="مثال: 50.00"
            required
          />
        </div> */}
        {/* <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">حالة الإعلان</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
            required
          >
            <option value="approved">مقبول</option>
            <option value="rejected">مرفوض</option>
          </select>
        </div> */}

        {/* <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-red-600 text-white font-bold py-2 px-4 rounded-full 
                       hover:bg-red-700 transition-colors duration-300 
                       focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            إرسال
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full 
                       hover:bg-gray-400 transition-colors duration-300 
                       focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            إلغاء
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestAdForm; */}










import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RequestAdForm = () => {
  const [formData, setFormData] = useState({
    candidateName: '',
    imageUrl: '',
    description: '',
    price: '50.00', // Default value matching the migration script
    status: 'rejected' // Default value
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/ads', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Success:', response.data);

      // Navigate to the payment page with form data
      navigate('/payment', { state: { formData } });
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <h3 className="text-lg font-bold text-center mb-4">طلب إعلان</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="candidateName" className="block text-sm font-medium text-gray-700">اسم المرشح</label>
          <input
            type="text"
            id="candidateName"
            name="candidateName"
            value={formData.candidateName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">رابط صورة المرشح</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">وصف الإعلان</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
            placeholder="مثال: انتخبوا مرشحكم فلان"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-red-600 text-white font-bold py-2 px-4 rounded-full 
                       hover:bg-red-700 transition-colors duration-300 
                       focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            إرسال
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full 
                       hover:bg-gray-400 transition-colors duration-300 
                       focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            إلغاء
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestAdForm;
