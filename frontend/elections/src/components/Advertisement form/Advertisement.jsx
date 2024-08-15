import React, { useState } from 'react';

const Advertisement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    candidateName: '',
    imageUrl: '',
    description: ''
  });

  // ... (الكود السابق للـ scrollCarousel وcandidates)

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة المنطق لمعالجة إرسال النموذج
    console.log('تم إرسال طلب الإعلان:', formData);
    // إعادة تعيين النموذج وإخفاؤه بعد الإرسال
    setFormData({ candidateName: '', imageUrl: '', description: '' });
    setShowForm(false);
  };

  return (
    <div className="relative">
      {/* ... (الكود السابق للسلايدر) */}

      <div className="text-center mt-8">
        <button
          onClick={handleRequestAd}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded-full 
                     hover:bg-red-700 transition-colors duration-300 
                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
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

export default Advertisement;