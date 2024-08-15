import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const LocalElectionForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    national_id: "",
    name: "",
    city: "",
    circle: "",
    email: "",
    local_list_name: "",
    members: [],
  });
  const [cities, setCities] = useState([]);
  const [circles, setCircles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const loadCitiesAndCircles = async () => {
  //     // Assuming fetchCities and fetchCircles are implemented
  //     const citiesData = await fetchCities();
  //     setCities(citiesData);
  //     const circlesData = await fetchCircles();
  //     setCircles(circlesData);
  //   };
  //   loadCitiesAndCircles();
  // }, []);

  const handleNationalIdChange = async (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, national_id: value }));
    if (value.length === 10) {
      // Assuming Jordanian National ID is 10 digits
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/requests/nationalId/${value}`
        );
        const userData = response.data;
        setFormData((prev) => ({
          ...prev,
          name: userData.name,
          city: userData.city,
          circle: userData.circle,
          email: userData.email,
        }));
      } catch (err) {
        setError("لم يتم العثور على بيانات المستخدم");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleAddMember = async () => {
    if (formData.members.length >= 3) {
      setError("يمكنك إضافة 3 أعضاء كحد أقصى");
      return;
    }
    const memberId = prompt("أدخل الرقم الوطني للعضو");
    if (memberId) {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/requests/nationalId/${memberId}`
        );
        const memberData = response.data;
        setFormData((prev) => ({
          ...prev,
          members: [...prev.members, { id: memberId, name: memberData.name }],
        }));
      } catch (err) {
        setError("لم يتم العثور على بيانات العضو");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.members.length < 3) {
      setError("يجب إضافة 3 أعضاء على الأقل");
      return;
    }
    try {
      setLoading(true);
      await axios.post(
        "http://localhost:5000/api/requests/local-election-requests",
        formData
      );
      alert(
        "تم تقديم الطلب بنجاح. سنتواصل مع جميع الأشخاص المعنيين خلال 48 ساعة"
      );
      navigate("/");
    } catch (err) {
      setError("حدث خطأ أثناء تقديم الطلب");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-12 mt-12">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          نموذج الانتخابات المحلية
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="national_id"
              className="block text-gray-600 text-lg font-semibold mb-2"
            >
              الرقم الوطني
            </label>
            <input
              id="national_id"
              className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
              value={formData.national_id}
              onChange={handleNationalIdChange}
              required
            />
          </div>

          {loading && (
            <div className="text-center text-blue-500">جاري التحميل...</div>
          )}

          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-600 px-4 py-3 rounded-lg relative"
              role="alert"
            >
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="name"
              className="block text-gray-600 text-lg font-semibold mb-2"
            >
              الاسم
            </label>
            <input
              id="name"
              className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
              value={formData.name}
              readOnly
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-gray-600 text-lg font-semibold mb-2"
            >
              المدينة
            </label>
            <input
              id="city"
              className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
              value={formData.city}
              readOnly
            />
          </div>

          <div>
            <label
              htmlFor="circle"
              className="block text-gray-600 text-lg font-semibold mb-2"
            >
              الدائرة
            </label>
            <input
              id="circle"
              className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
              value={formData.circle}
              readOnly
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-600 text-lg font-semibold mb-2"
            >
              البريد الإلكتروني
            </label>
            <input
              id="email"
              className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
              value={formData.email}
              readOnly
            />
          </div>

          <div>
            <label
              htmlFor="local_list_name"
              className="block text-gray-600 text-lg font-semibold mb-2"
            >
              اسم القائمة المحلية
            </label>
            <input
              id="local_list_name"
              className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
              value={formData.local_list_name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  local_list_name: e.target.value,
                }))
              }
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-lg font-semibold mb-2">
              الأعضاء
            </label>
            {formData.members.map((member, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
                  value={member.id}
                  readOnly
                />
                <span className="text-gray-800">{member.name}</span>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddMember}
              disabled={formData.members.length >= 3}
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mt-2"
            >
              إضافة عضو
            </button>
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
            disabled={loading}
          >
            {loading ? "جاري التقديم..." : "تقديم الطلب"}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default LocalElectionForm;
