
// HomePage.js
import React, { useState, useEffect } from "react";
import HeroSection from "./Hero";
import WelcomeMessage from "./WelcomeMessage";
import CountdownTimer from "./CountdownTimer";
// import ElectoralDistricts from "./ElectoralDistricts";
import ImportantDates from "./ImportantDates";
import AdsSection from "./AdsSection";
import VoterCounts from "./VoterCounts";
import NewsUpdates from "./NewsUpdates";
import PartnersSlider from "./PartnersSlider";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FAQSection from "./FAQSection";
import ChatBox from "../ChatBox/ChatBox";
// import Carousel from "../Carusor";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [ads] = useState([
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300",
      candidateName: "محمد أحمد",
      message: "صوتوا لمحمد أحمد لمستقبل أفضل!",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/300",
      candidateName: "سارة خالد",
      message: "معًا نحو التغيير مع سارة خالد.",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300",
      candidateName: "خالد علي",
      message: "اختاروا خالد علي لبناء الوطن.",
    },
  ]);

  const [voterCount] = useState({
    الزرقاء: 2045,
    "العاصمة / الدائرة الأولى": 20595,
    "العاصمة / الدائرة الثالثة": 20445,
  });

  const importantDates = [
    { date: "2024-08-01", event: "بداية فترة التسجيل للانتخابات" },
    { date: "2024-08-15", event: "نهاية فترة التسجيل للانتخابات" },
    { date: "2024-09-01", event: "بداية فترة الحملات الانتخابية" },
    { date: "2024-09-09", event: "نهاية فترة الحملات الانتخابية" },
    { date: "2024-09-10", event: "يوم الانتخابات" },
    { date: "2024-09-15", event: "الإعلان عن نتائج الانتخابات الأولية" },
  ];

  const newsUpdates = [
    { id: 1, title: "افتتاح مراكز التسجيل", summary: "تم افتتاح مراكز التسجيل في جميع أنحاء المملكة" },
    { id: 2, title: "مناظرة المرشحين", summary: "ستقام مناظرة بين المرشحين الرئيسيين الأسبوع المقبل" },
  ];

  const partners = [
    { id: 1, name: "وزارة الداخلية", logoUrl: "https://via.placeholder.com/150", description: "الجهة المسؤولة عن تنظيم الانتخابات." },
    { id: 2, name: "مفوضية الانتخابات", logoUrl: "https://via.placeholder.com/150", description: "الإشراف على العملية الانتخابية وضمان نزاهتها." },
    { id: 3, name: "منظمة الشفافية", logoUrl: "https://via.placeholder.com/150", description: "مراقبة الانتخابات لضمان الشفافية." },
    { id: 4, name: "برنامج الأمم المتحدة الإنمائي", logoUrl: "https://via.placeholder.com/150", description: "دعم التنمية المستدامة من خلال الانتخابات." },
    { id: 5, name: "مؤسسة الملكة رانيا", logoUrl: "https://via.placeholder.com/150", description: "مبادرات تعليمية لدعم الانتخابات." }
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
      setUsername('مستخدم افتراضي');
    }, 2000);
  }, []);

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-jordanian-white text-jordanian-black" dir="rtl">
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        <WelcomeMessage isLoggedIn={isLoggedIn} username={username} />
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-jordanian-red">العد التنازلي للانتخابات</h2>
          <div className="bg-jordanian-white p-6 rounded-lg shadow-lg flex justify-center">
            <CountdownTimer targetDate="2024-09-10T00:00:00" />
          </div>
        </section>
        {/* <ElectoralDistricts /> */}
        <ImportantDates importantDates={importantDates} />
        {/* <AdsSection ads={ads} /> */}
        <VoterCounts voterCount={voterCount} />
        <NewsUpdates newsUpdates={newsUpdates} />
        <PartnersSlider partners={partners} />
        <FAQSection />
      </main>
      {/* <Carousel/> */}
    </div>
    <Footer/>
    <ChatBox/>
    </>
    
  );
};

export default HomePage;
