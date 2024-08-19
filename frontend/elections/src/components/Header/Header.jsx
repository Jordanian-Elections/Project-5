
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import logo from "../../assets/logo.png";

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the token exists in the cookies
//     const token = Cookies.get("token");
//     setIsLoggedIn(!!token); // Set isLoggedIn to true if the token exists
//   }, []);

//   const handleLogout = () => {
//     // Remove the token from the cookies
//     Cookies.remove("token");
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   return (
//     <header className="bg-[rgb(229,79,83)] p-4 text-white shadow-md">
//       <nav className="flex justify-between items-center">
//         <div className="flex items-center">
//           <img src={logo} alt="Logo" className="h-20 w-20 rounded-full" />
//           <span className="mr-2 text-xl font-bold text-white">VoteJO</span>
//         </div>
//         <div className="flex space-x-14">
//           <Link to="/" className="hover:text-gray-300 ml-12">
//             الرئيسية
//           </Link>
//           <Link to="/circle" className="hover:text-gray-300">
//             الدوائر الإنتخابية
//           </Link>
//           <Link to="/requests" className="hover:text-gray-300">
//             طلبات القوائم الإنتخابية
//           </Link>
//           <Link to="/about" className="hover:text-gray-300">
//             من نحن
//           </Link>
//           <Link to="/contact" className="hover:text-gray-300">
//             تواصل معنا
//           </Link>
//           <Link to="/VotingApp" className="hover:text-gray-300">
//             تصويت محلي
//           </Link>
//           <Link to="/VotePage" className="hover:text-gray-300">
//             تصويت 
//           </Link>
//           <Link to="/debates" className="hover:text-gray-300">
//             قائمة المناظرات  
//           </Link>
         
          
//         </div>
//         <div>
//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="bg-[rgb(41,180,115)] text-white px-4 py-2 rounded"
//             >
//               تسجيل الخروج
//             </button>
//           ) : (
//             <Link
//               to="/login"
//               className="bg-[rgb(41,180,115)] text-white px-4 py-2 rounded"
//             >
//               تسجيل الدخول
//             </Link>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logo.png";
import logo12 from "../../assets/logo1.png"


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const menuItems = [
    { title: "الرئيسية", path: "/" },
    { title: "الدوائر الإنتخابية", path: "/circle" },
    { title: "طلبات القوائم الإنتخابية", path: "/requests" },
    { title: "من نحن", path: "/about" },
    { title: "تواصل معنا", path: "/contact" },
    { title: "تصويت محلي", path: "/VotingApp" },
    { title: "تصويت", path: "/VotePage" },
    { title: "قائمة المناظرات", path: "/debates" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="bg-gradient-to-r
       from-zait to-gray-600
       p-2 text-white shadow-lg top-0 z-50 sticky"
    >
      <nav className="container mx-auto flex justify-between  items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          // transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img src={logo12} alt="Logo" className="h-20 w-48   " />
          {/* <span className="mr-2 text-2xl font-bold text-white">VoteJO</span> */}
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={item.path} 
                className="text-white hover:text-gray-200 transition-colors duration-200 text-l"
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        <div className="flex space-x-14">
          <Link to="/" className="hover:text-gray-300 ml-12">
            الرئيسية
          </Link>
         
          <Link to="/requests" className="hover:text-gray-300">
            الطلبات و الخدمات
          </Link>
          
          <Link to="/VotingApp" className="hover:text-gray-300">
            الانتخابات
          </Link>
         
          <Link to="/debates" className="hover:text-gray-300">
            قائمة المناظرات  
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            من نحن
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            تواصل معنا
          </Link>
         
          
        </div>

        {/* Auth Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-white text-zait px-4 py-2 rounded-xl font-bold shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
              تسجيل الخروج
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-white text-zait px-4 py-2 rounded-xl font-bold shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
              تسجيل الدخول
            </Link>
          )}
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden mt-4"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-2"
            >
              <Link 
                to={item.path} 
                className="block text-white hover:text-gray-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;