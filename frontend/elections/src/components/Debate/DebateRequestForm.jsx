// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const DebateRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     start_time: '',
//     end_time: '',
//     candidate1_id: '',
//     candidate2_id: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     await axios.post('/api/debates', formData);
//   //     navigate('/create-debate'); // Adjust as needed
//   //   } catch (error) {
//   //     if (error.response && error.response.status === 400) {
//   //       setError('المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.');
//   //     } else {
//   //       setError('حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.');
//   //     }
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/debates', formData); // Updated URL to match the backend server's port
//       navigate('/create-debate');
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setError('المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.');
//       } else {
//         setError('حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   };
  
//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">طلب مناظرة</h2>
//         {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             اسم المناظرة
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="name"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_time">
//             وقت البداية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="start_time"
//             type="datetime-local"
//             name="start_time"
//             value={formData.start_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_time">
//             وقت النهاية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="end_time"
//             type="datetime-local"
//             name="end_time"
//             value={formData.end_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate1_id">
//             الرقم الوطني للمرشح الأول
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate1_id"
//             type="number"
//             name="candidate1_id"
//             value={formData.candidate1_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate2_id">
//             الرقم الوطني للمرشح الثاني
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate2_id"
//             type="number"
//             name="candidate2_id"
//             value={formData.candidate2_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             إرسال الطلب
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DebateRequestForm;


//////////////////////new//////////////////


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2'; // Import SweetAlert2

// const DebateRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     start_time: '',
//     end_time: '',
//     candidate1_id: '',
//     candidate2_id: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/debates', formData); // Updated URL to match the backend server's port

//       // Show SweetAlert2 success message
//       Swal.fire({
//         title: 'تم إرسال الطلب بنجاح!',
//         text: 'ننتظر رد الأدمن عليك',
//         icon: 'success',
//         confirmButtonText: 'موافق'
//       });

//       navigate('/create-debate');
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setError('المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.');
//       } else {
//         setError('حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">طلب مناظرة</h2>
//         {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             اسم المناظرة
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="name"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_time">
//             وقت البداية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="start_time"
//             type="datetime-local"
//             name="start_time"
//             value={formData.start_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_time">
//             وقت النهاية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="end_time"
//             type="datetime-local"
//             name="end_time"
//             value={formData.end_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate1_id">
//             الرقم الوطني للمرشح الأول
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate1_id"
//             type="number"
//             name="candidate1_id"
//             value={formData.candidate1_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate2_id">
//             الرقم الوطني للمرشح الثاني
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate2_id"
//             type="number"
//             name="candidate2_id"
//             value={formData.candidate2_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             إرسال الطلب
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DebateRequestForm;


/////////////////


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const DebateRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     start_time: '',
//     end_time: '',
//     candidate1_id: '',
//     candidate2_id: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/debates', formData);

//       // Show SweetAlert2 success message
//       Swal.fire({
//         title: 'تم إرسال الطلب بنجاح!',
//         text: 'ننتظر رد الأدمن عليك',
//         icon: 'success',
//         confirmButtonText: 'موافق'
//       });

//       // Clear the form fields
//       setFormData({
//         name: '',
//         start_time: '',
//         end_time: '',
//         candidate1_id: '',
//         candidate2_id: ''
//       });

//       navigate('/create-debate');
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setError('المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.');
//       } else {
//         setError('حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">طلب مناظرة</h2>
//         {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             اسم المناظرة
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="name"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_time">
//             وقت البداية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="start_time"
//             type="datetime-local"
//             name="start_time"
//             value={formData.start_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_time">
//             وقت النهاية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="end_time"
//             type="datetime-local"
//             name="end_time"
//             value={formData.end_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate1_id">
//             الرقم الوطني للمرشح الأول
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate1_id"
//             type="number"
//             name="candidate1_id"
//             value={formData.candidate1_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate2_id">
//             الرقم الوطني للمرشح الثاني
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate2_id"
//             type="number"
//             name="candidate2_id"
//             value={formData.candidate2_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             إرسال الطلب
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DebateRequestForm;

///////////////////////correct work ///////////////////////


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const DebateRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     start_time: '',
//     end_time: '',
//     candidate1_id: '',
//     candidate2_id: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/debates', formData);

//       // Show SweetAlert2 success message
//       Swal.fire({
//         title: 'تم إرسال الطلب بنجاح!',
//         text: 'ننتظر موافقة الأدمن على طلبك',
//         icon: 'success',
//         confirmButtonText: 'موافق'
//       });

//       // Clear the form fields
//       setFormData({
//         name: '',
//         start_time: '',
//         end_time: '',
//         candidate1_id: '',
//         candidate2_id: ''
//       });

//       navigate('/create-debate');
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setError('المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.');
//       } else {
//         setError('حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">طلب مناظرة</h2>
//         {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             اسم المناظرة
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="name"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_time">
//             وقت البداية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="start_time"
//             type="datetime-local"
//             name="start_time"
//             value={formData.start_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_time">
//             وقت النهاية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="end_time"
//             type="datetime-local"
//             name="end_time"
//             value={formData.end_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate1_id">
//             الرقم الوطني للمرشح الأول
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate1_id"
//             type="number"
//             name="candidate1_id"
//             value={formData.candidate1_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate2_id">
//             الرقم الوطني للمرشح الثاني
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate2_id"
//             type="number"
//             name="candidate2_id"
//             value={formData.candidate2_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             إرسال الطلب
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DebateRequestForm;


///////////////////////////////work correct final version ////////////////////

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const DebateRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    start_time: '',
    end_time: '',
    candidate1_id: '',
    candidate2_id: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateNationalId = (id) => {
    return id.length === 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate national IDs
    if (!validateNationalId(formData.candidate1_id) || !validateNationalId(formData.candidate2_id)) {
      setError('الرقم الوطني يجب أن يكون مكونًا من 10 أرقام.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/debates', formData);

      // Show SweetAlert2 success message
      Swal.fire({
        title: 'تم إرسال الطلب بنجاح!',
        text: 'ننتظر موافقة الأدمن على طلبك',
        icon: 'success',
        confirmButtonText: 'موافق'
      });

      // Clear the form fields
      setFormData({
        name: '',
        start_time: '',
        end_time: '',
        candidate1_id: '',
        candidate2_id: ''
      });

      navigate('/create-debate');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError('المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.');
      } else {
        setError('حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.');
      }
    }
  };

  return (
    <>
          <Header/>
          
          
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center">طلب مناظرة</h2>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            اسم المناظرة
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_time">
            وقت البداية
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="start_time"
            type="datetime-local"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_time">
            وقت النهاية
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="end_time"
            type="datetime-local"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate1_id">
            الرقم الوطني للمرشح الأول
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="candidate1_id"
            type="number"
            name="candidate1_id"
            value={formData.candidate1_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate2_id">
            الرقم الوطني للمرشح الثاني
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="candidate2_id"
            type="number"
            name="candidate2_id"
            value={formData.candidate2_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            إرسال الطلب
          </button>
        </div>
      </form>
    </div>
    <Footer/>

    </>

  );
};

export default DebateRequestForm;
