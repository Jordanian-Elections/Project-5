

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaNewspaper, FaChartBar, FaUsers, FaQuestionCircle } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import ChatBox from "../ChatBox/ChatBox";
import HeroSection from "./Hero"
import Countdown from "./CountdownTimer"
import FAQSection from "./FAQSection";
import PartnersSlider from "./PartnersSlider"
import AdsSection from "./AdsSection";
import NewsUpdates1 from "./NewsUpdates";
// import VoterCounts from "./VoterCounts";
// import ChatBox from "../ChatBox/ChatBox";
// import Carousel from "../Carusor";
import VoterCounts from "./VoterCounts";
const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

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
      <div className="bg-white  " dir="rtl">
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
          <motion.section 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            >
            <AdsSection/>
            
          </motion.section>
          
          <motion.section 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            >
          <VoterCounts/>
            
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
            <NewsUpdates1/>
          </motion.section>
          <motion.section 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <FAQSection />
          </motion.section>

          
        </main>
      </div>
      <Footer />
      {/* <ChatBox /> */}
    
    </>
  );
};


export default HomePage;