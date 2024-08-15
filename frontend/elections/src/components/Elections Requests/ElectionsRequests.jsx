import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { VoteIcon, FlagIcon } from "lucide-react";

const ElectionRequests = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-white text-white">
      <Header />

      <main className="p-8 my-14 mb-28">
        <h1 className="text-4xl font-bold text-center mb-8">
          قدم طلبك لإنشاء قائمة إنتخابية
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <div
            className="w-80 h-80 bg-black bg-opacity-50 backdrop-blur-md rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => navigate("/local-form")}
          >
            <div className="p-6 text-center h-full flex flex-col items-center justify-center">
              <VoteIcon size={48} className="text-red-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">
                طلب إنشاء قائمة محلية
              </h2>
              <p>قدم طلبًا للمشاركة في الانتخابات المحلية وكن صوتًا لمجتمعك</p>
            </div>
          </div>

          <div
            className="w-80 h-80 bg-black bg-opacity-50 backdrop-blur-md rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => navigate("/party-form")}
          >
            <div className="p-6 text-center h-full flex flex-col items-center justify-center">
              <FlagIcon size={48} className="text-red-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">
                طلب إنشاء قائمة حزبية
              </h2>
              <p>
                قدم طلبًا للمشاركة في الانتخابات الحزبية وشارك في تشكيل مستقبل
                الأردن
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ElectionRequests;
