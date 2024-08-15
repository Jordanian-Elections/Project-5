import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Header from "../Header/Header";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend
    console.log("Form data submitted:", formData);
    // For demonstration, we'll just set isSubmitted to true
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen" dir="rtl">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center text-[#01332A] mb-8">
            تواصل معنا
          </h1>
          <p className="text-lg text-center text-gray-600 mb-12">
            هل لديك أي سؤال أو اقتراح أو طلب؟ تواصل معنا وسنعاود الاتصال بك في
            أقرب وقت ممكن
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-52">
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-[#01332A] mb-4" />
              <h2 className="text-xl font-semibold text-[#01332A] mb-2">
                اتصل بنا
              </h2>
              <p className="text-gray-600 text-center" dir="ltr">
                +962 6 123 4567
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 text-[#01332A] mb-4" />
              <h2 className="text-xl font-semibold text-[#01332A] mb-2">
                راسلنا
              </h2>
              <p className="text-gray-600 text-center">info@example.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-[#01332A] mb-4" />
              <h2 className="text-xl font-semibold text-[#01332A] mb-2">
                موقعنا
              </h2>
              <p className="text-gray-600 text-center">الزرقاء، الأردن</p>
            </div>
          </div>

          {isSubmitted ? (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center"
              role="alert"
            >
              <strong className="font-bold">شكراً لتواصلك معنا!</strong>
              <p className="block sm:inline">
                {" "}
                سنقوم بالرد عليك في أقرب وقت ممكن.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-3xl mx-auto"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  الاسم الكامل
                </label>
                <input
                  className="shadow appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  البريد الإلكتروني
                </label>
                <input
                  className="shadow appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  رقم الهاتف
                </label>
                <input
                  className="shadow appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="أدخل رقم هاتفك"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="subject"
                >
                  الموضوع
                </label>
                <input
                  className="shadow appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="أدخل موضوع رسالتك"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  الرسالة
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="اكتب رسالتك هنا"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-[#01332A] hover:bg-[#024d3f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  إرسال الرسالة
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
