
///////////////////////


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // استيراد مكتبة axios

const AdsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    candidateName: '',
    imageUrl: '',
    description: ''
  });
  const navigate = useNavigate();

  const scrollCarousel = (direction) => {
    const totalSlides = candidates.length;
    setCurrentIndex((prevIndex) =>
      (prevIndex + direction + totalSlides) % totalSlides
    );
  };

  const candidates = [
    {
      image: "https://th.bing.com/th/id/OIP.98_MmnU5d55SEXP0ru0UrQHaEE?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "محمد أحمد",
      description: "صوتوا لمحمد أحمد من أجل مستقبل أفضل"
    },
    {
      image: "https://th.bing.com/th/id/OIP.w2aNfmTM5r2v6ltxepw4rgHaE7?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "علي حسن",
      description: "دعمكم لعلي حسن هو دعم للتغيير الحقيقي"
    },
    {
      image: "https://th.bing.com/th/id/OIP.ND7NX86Hj8hr-roK5mUJcwHaHa?w=186&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "سارة محمود",
      description: "سارة محمود، الأمل الجديد للتقدم"
    }
  ];

  const handleRequestAd = () => {
    setShowForm(true);
  };

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
          'Content-Type': 'application/json',
        }
      });

      console.log('تم إرسال طلب الإعلان:', response.data);

      // إعادة تعيين النموذج وإخفاؤه بعد الإرسال
      setFormData({ candidateName: '', imageUrl: '', description: '' });
      setShowForm(false);
    } catch (error) {
      console.error('فشل إرسال طلب الإعلان:', error);
    }
  };

  return (
    <div className="relative">
      <h2 className="text-center text-2xl font-bold mb-4">إعلانات المرشحين</h2>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${100 * candidates.length}%` }}
        >
          {candidates.map((candidate, index) => (
            <div key={index} className="w-full flex-shrink-0 flex flex-col items-center" style={{ width: `${100 / candidates.length}%` }}>
              <img
                src={candidate.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-96 object-cover"
                onError={(e) => {
                  console.error(`Error loading image: ${candidate.image}`);
                  e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                }}
              />
              <h3 className="text-xl font-semibold mt-4">{candidate.name}</h3>
              <p className="text-gray-600 mt-2">{candidate.description}</p>
            </div>
          ))}
        </div>
      </div>

      {[-1, 1].map((direction) => (
        <button
          key={direction}
          className={`absolute top-1/2 ${direction < 0 ? 'left-4' : 'right-4'} 
                     transform -translate-y-1/2 p-3 bg-red-600 rounded-full 
                     text-white hover:bg-opacity-75 focus:outline-none 
                     transition-all duration-300 ease-in-out hover:scale-110`}
          onClick={() => scrollCarousel(direction)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={direction < 0 ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
            ></path>
          </svg>
        </button>
      ))}

      <div className="flex justify-center mt-6">
        {candidates.map((_, index) => (
          <button
            key={index}
            className={`mx-2 w-3 h-3 rounded-full focus:outline-none
                       ${currentIndex === index ? 'bg-red-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

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

      {showForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
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
                  onClick={() => setShowForm(false)}
                  className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full 
                             hover:bg-gray-400 transition-colors duration-300 
                             focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdsSection;
