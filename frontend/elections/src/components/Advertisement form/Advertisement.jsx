import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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

      Swal.fire({
        title: 'تم إرسال طلبك!',
        text: 'سوف يتم التواصل معك خلال 48 ساعة.',
        icon: 'success',
        confirmButtonText: 'موافق'
      });

      navigate('/payment', { state: { formData } });
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);

      Swal.fire({
        title: 'حدث خطأ!',
        text: 'يرجى المحاولة مرة أخرى لاحقاً.',
        icon: 'error',
        confirmButtonText: 'موافق'
      });
    }
  };

  const handleCancel = () => {
    navigate('/requests');
  };

  return (
    <>
    <Header/>
    <div className="relative top-20 mx-auto p-12 border w-[600px] shadow-lg rounded-md bg-white mb-40">
      <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">طلب إعلان</h3>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="candidateName" className="block text-lg font-medium text-gray-700">اسم المرشح</label>
          <input
            type="text"
            id="candidateName"
            name="candidateName"
            value={formData.candidateName}
            onChange={handleInputChange}
            className="mt-3 block w-full p-4 text-lg rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-lg font-medium text-gray-700">رابط صورة المرشح</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            className="mt-3 block w-full p-4 text-lg rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">وصف الإعلان</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="6"
            className="mt-3 block w-full p-4 text-lg rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
            placeholder="مثال: انتخبوا مرشحكم فلان"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full 
                       hover:bg-blue-700 transition-colors duration-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            إرسال
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 font-bold py-3 px-8 rounded-full 
                       hover:bg-gray-400 transition-colors duration-300 
                       focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            إلغاء
          </button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default RequestAdForm;
