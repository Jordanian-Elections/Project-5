
// // HomePage.js
// import React, { useState, useEffect } from "react";
// import HeroSection from "./Hero";
// import WelcomeMessage from "./WelcomeMessage";
// import Countdown from "./CountdownTimer";
// // import ElectoralDistricts from "./ElectoralDistricts";
// import ImportantDates from "./ImportantDates";
// import AdsSection from "./AdsSection";
// import VoterCounts from "./VoterCounts";
// import NewsUpdates from "./NewsUpdates";
// import PartnersSlider from "./PartnersSlider";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import FAQSection from "./FAQSection";
// import ChatBox from "../ChatBox/ChatBox";
// // import Carousel from "../Carusor";

// const HomePage = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
  // const [ads] = useState([
  //   {
  //     id: 1,
  //     imageUrl: "https://via.placeholder.com/300",
  //     candidateName: "محمد أحمد",
  //     message: "صوتوا لمحمد أحمد لمستقبل أفضل!",
  //   },
  //   {
  //     id: 2,
  //     imageUrl: "https://via.placeholder.com/300",
  //     candidateName: "سارة خالد",
  //     message: "معًا نحو التغيير مع سارة خالد.",
  //   },
  //   {
  //     id: 3,
  //     imageUrl: "https://via.placeholder.com/300",
  //     candidateName: "خالد علي",
  //     message: "اختاروا خالد علي لبناء الوطن.",
  //   },
  // ]);

  // const [voterCount] = useState({
  //   الزرقاء: 2045,
  //   "العاصمة / الدائرة الأولى": 20595,
  //   "العاصمة / الدائرة الثالثة": 20445,
  // });

  // const importantDates = [
  //   { date: "2024-08-01", event: "بداية فترة التسجيل للانتخابات" },
  //   { date: "2024-08-15", event: "نهاية فترة التسجيل للانتخابات" },
  //   { date: "2024-09-01", event: "بداية فترة الحملات الانتخابية" },
  //   { date: "2024-09-09", event: "نهاية فترة الحملات الانتخابية" },
  //   { date: "2024-09-10", event: "يوم الانتخابات" },
  //   { date: "2024-09-15", event: "الإعلان عن نتائج الانتخابات الأولية" },
  // ];

  // const newsUpdates = [
  //   { id: 1, title: "افتتاح مراكز التسجيل", summary: "تم افتتاح مراكز التسجيل في جميع أنحاء المملكة" },
  //   { id: 2, title: "مناظرة المرشحين", summary: "ستقام مناظرة بين المرشحين الرئيسيين الأسبوع المقبل" },
  // ];

  // const partners = [
  //   { id: 1, name: "وزارة الداخلية", logoUrl: "https://via.placeholder.com/150", description: "الجهة المسؤولة عن تنظيم الانتخابات." },
  //   { id: 2, name: "مفوضية الانتخابات", logoUrl: "https://via.placeholder.com/150", description: "الإشراف على العملية الانتخابية وضمان نزاهتها." },
  //   { id: 3, name: "منظمة الشفافية", logoUrl: "https://via.placeholder.com/150", description: "مراقبة الانتخابات لضمان الشفافية." },
  //   { id: 4, name: "برنامج الأمم المتحدة الإنمائي", logoUrl: "https://via.placeholder.com/150", description: "دعم التنمية المستدامة من خلال الانتخابات." },
  //   { id: 5, name: "مؤسسة الملكة رانيا", logoUrl: "https://via.placeholder.com/150", description: "مبادرات تعليمية لدعم الانتخابات." }
  // ];

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoggedIn(true);
//       setUsername('مستخدم افتراضي');
//     }, 2000);
//   }, []);

//   return (
//     <>
//     <Header/>
//     <div className=" bg-jordanian-white text-jordanian-black" dir="rtl">
//       <HeroSection />
//       <main className="container mx-auto px-4 py-8">
//         {/* <WelcomeMessage isLoggedIn={isLoggedIn} username={username} /> */}
//         <section className="mb-12">
          
//             <Countdown />
//         </section>
//         {/* <ElectoralDistricts /> */}
//         <ImportantDates importantDates={importantDates} />
//         {/* <AdsSection ads={ads} /> */}
//         <VoterCounts voterCount={voterCount} />
//         <NewsUpdates newsUpdates={newsUpdates} />
//         <PartnersSlider partners={partners} />
//         <FAQSection />
//       </main>
//       {/* <Carousel/> */}
//     </div>
//     <Footer/>
//     <ChatBox/>
//     </>
    
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaNewspaper, FaChartBar, FaUsers, FaQuestionCircle } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ChatBox from "../ChatBox/ChatBox";
import HeroSection from "./Hero"
import Countdown from "./CountdownTimer"
import FAQSection from "./FAQSection";
import PartnersSlider from "./PartnersSlider"
import AdsSection from "./AdsSection";
// import VoterCounts from "./VoterCounts";
import ChatBox from "../ChatBox/ChatBox";
// import Carousel from "../Carusor";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // ... (keep existing state variables)

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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Header />
      <div className="bg-jordanian-white text-jordanian-black " dir="rtl">
        <HeroSection />
        <main className="">
          <motion.section 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-12"
          >
            <Countdown />
          </motion.section>
         <AdsSection/>
          <motion.section 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            <ImportantDates importantDates={importantDates} />
            <NewsUpdates newsUpdates={newsUpdates} />
          </motion.section>

          <motion.section 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-12"
          >
            
            <PartnersSlider />
          </motion.section>
          <motion.section 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-12"
          >
            <FAQSection />
          </motion.section>
          <motion.section 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-12"
          >
            {/* <VoterCounts /> */}
          </motion.section>

          <motion.section 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaChartBar className="mr-2" />
              إحصائيات الانتخابات
            </h2>
            <ElectionStats />
          </motion.section>
        </main>
      </div>
      <Footer />
      <ChatBox />
//     <Header/>
//     <div className="min-h-screen bg-jordanian-white text-jordanian-black" dir="rtl">
//       <HeroSection />
//       <main className="container mx-auto px-4 py-8">
//         <WelcomeMessage isLoggedIn={isLoggedIn} username={username} />
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold mb-6 text-center text-jordanian-red">العد التنازلي للانتخابات</h2>
//           <div className="bg-jordanian-white p-6 rounded-lg shadow-lg flex justify-center">
//             <CountdownTimer targetDate="2024-09-10T00:00:00" />
//           </div>
//         </section>
//         {/* <ElectoralDistricts /> */}
//         <ImportantDates importantDates={importantDates} />
//         {/* <AdsSection ads={ads} /> */}
//         <VoterCounts voterCount={voterCount} />
//         <NewsUpdates newsUpdates={newsUpdates} />
//         <PartnersSlider partners={partners} />
//         <FAQSection />
//       </main>
//       {/* <Carousel/> */}
//     </div>
//     <Footer/>
//     <ChatBox/>
    </>
  );
};

// const HeroSection = () => (
//   <motion.section 
//     className="bg-jordanian-red text-white py-20 text-center"
//     initial={{ opacity: 0, y: -50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//   >
//     <h1 className="text-4xl md:text-6xl font-bold mb-4">انتخابات الأردن 2024</h1>
//     <p className="text-xl md:text-2xl">شارك في بناء مستقبل الوطن</p>
//   </motion.section>
// );

// const Countdown = () => {
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearTimeout(timer);
//   });

//   function calculateTimeLeft() {
//     const difference = +new Date("2024-09-10") - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         أيام: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         ساعات: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         دقائق: Math.floor((difference / 1000 / 60) % 60),
//         ثواني: Math.floor((difference / 1000) % 60)
//       };
//     }

//     return timeLeft;
//   }

//   return (
//     <div className="bg-jordanian-green text-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4 flex items-center">
//         <FaCalendarAlt className="mr-2" />
//         العد التنازلي للانتخابات
//       </h2>
//       <div className="grid grid-cols-4 gap-4">
//         {Object.entries(timeLeft).map(([unit, value]) => (
//           <div key={unit} className="text-center">
//             <div className="text-3xl font-bold">{value}</div>
//             <div className="text-sm">{unit}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const ImportantDates = ({ importantDates }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-2xl font-bold mb-4 flex items-center">
      <FaCalendarAlt className="mr-2" />
      تواريخ مهمة
    </h2>
    <ul className="space-y-2">
      {importantDates.map((event, index) => (
        <li key={index} className="flex items-center">
          <span className="font-bold mr-2">{event.date}:</span>
          <span>{event.event}</span>
        </li>
      ))}
    </ul>
  </div>
);

// const VoterCounts = ({ voterCount }) => (
//   <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//     <h2 className="text-2xl font-bold mb-4 flex items-center">
//       <FaChartBar className="mr-2" />
//       إحصائيات الناخبين
//     </h2>
//     <ul className="space-y-2">
//       {Object.entries(voterCount).map(([district, count]) => (
//         <li key={district} className="flex justify-between">
//           <span>{district}:</span>
//           <span className="font-bold">{count}</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

const NewsUpdates = ({ newsUpdates }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-2xl font-bold mb-4 flex items-center">
      <FaNewspaper className="mr-2" />
      آخر الأخبار
    </h2>
    <ul className="space-y-4">
      {newsUpdates.map((news) => (
        <li key={news.id} className="border-b pb-2">
          <h3 className="font-bold">{news.title}</h3>
          <p>{news.summary}</p>
        </li>
      ))}
    </ul>
  </div>
);

// const PartnersSlider = ({ partners }) => (
//   <div className="overflow-x-auto">
//     <div className="flex space-x-4">
//       {partners.map((partner) => (
//         <div key={partner.id} className="flex-shrink-0 w-48 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//           <img src={partner.logoUrl} alt={partner.name} className="w-full h-24 object-contain mb-2" />
//           <h3 className="font-bold text-center">{partner.name}</h3>
//           <p className="text-sm text-center">{partner.description}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const FAQSection = () => {
//   const faqs = [
//     { question: "كيف يمكنني التسجيل للتصويت؟", answer: "يمكنك التسجيل عبر الموقع الإلكتروني الرسمي أو زيارة أقرب مركز تسجيل." },
//     { question: "متى موعد الانتخابات؟", answer: "الانتخابات ستجرى يوم 10 سبتمبر 2024." },
//     { question: "ما هي الوثائق المطلوبة للتصويت؟", answer: "تحتاج إلى بطاقة الهوية الوطنية سارية المفعول." },
//   ];

//   return (
//     <div className="space-y-4">
//       {faqs.map((faq, index) => (
//         <details key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//           <summary className="font-bold cursor-pointer">{faq.question}</summary>
//           <p className="mt-2">{faq.answer}</p>
//         </details>
//       ))}
//     </div>
//   );
// };

const ElectionStats = () => {
  const stats = [
    { label: "عدد الناخبين المسجلين", value: "3,500,000" },
    { label: "عدد الدوائر الانتخابية", value: "23" },
    { label: "نسبة مشاركة الشباب", value: "35%" },
    { label: "عدد المرشحين", value: "1,500" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
          <div className="text-3xl font-bold text-jordanian-red">{stat.value}</div>
          <div className="text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;