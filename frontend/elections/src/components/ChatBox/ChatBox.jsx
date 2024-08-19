// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const ChatBox = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState("");
//   const messagesEndRef = useRef(null);

//   const toggleChatBox = () => setIsOpen(!isOpen);

//   async function chatuser(e) {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5000/api/chatuser", {
//         UserMessage: inputMessage,
//       });
//       setInputMessage("");
//       fetchMessages();
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   const fetchMessages = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/getmessages");

//       const sortedMessages = response.data.sort((a, b) => a.M_Id - b.M_Id);
//       setMessages(sortedMessages);
//     } catch (error) {
//       console.error("Error fetching messages:", error);
//     }
//   };

//   useEffect(() => {
//     fetchMessages();
//   }, [isOpen]);

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages, isOpen]);

//   return (
//     <div className="fixed bottom-4 right-4 z-50 [direction:ltr]">
//       {!isOpen ? (
//         <button
//           onClick={toggleChatBox}
//           className="bg-[#059b4f] text-white rounded-full p-3 shadow-lg hover:bg-[#1ea15f] transition-colors"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
//             />
//           </svg>
//         </button>
//       ) : (
//         <div className="bg-white rounded-lg shadow-xl w-80 flex flex-col h-[400px]">
//           <div className="bg-[#059b4f] text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
//             <h3 className="font-semibold">Chat</h3>
//             <button
//               onClick={toggleChatBox}
//               className="text-white hover:text-gray-200"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="flex-1 p-4 overflow-y-auto max-h-[400px]">
//             {messages.map((message) => (
//               <div
//                 key={message.M_Id}
//                 className={`mb-2 ${message.admin ? "text-left" : "text-right"}`}
//               >
//                 <span
//                   className={`inline-block p-2 rounded-lg ${
//                     message.admin ? "bg-[#08c05264]" : "bg-[#27ff7e64]"
//                   }`}
//                   style={{
//                     overflowWrap: "break-word",
//                     wordBreak: "break-word",
//                   }}
//                 >
//                   {message.Message}
//                 </span>
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>
//           <form
//             onSubmit={chatuser}
//             className="border-t p-2 flex [direction:rtl]"
//           >
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               placeholder="اكتب رسالتك هنا..."
//               className="flex-1 border rounded-r-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#059b4f]"
//             />
//             <button
//               type="submit"
//               className="bg-[#059b4f] text-white px-4 py-2 rounded-l-lg hover:bg-[#28c376] transition-colors"
//             >
//               إرسال
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBox;




////////////////work

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const ChatBox = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState("");
//   const messagesEndRef = useRef(null);

//   const toggleChatBox = () => setIsOpen(!isOpen);

//   async function chatuser(e) {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5000/api/chat/add-message", {
//         UserMessage: inputMessage,
//       });
//       setInputMessage("");
//       fetchMessages();
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   const fetchMessages = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/chat/getmessages");

//       const sortedMessages = response.data.sort((a, b) => a.M_Id - b.M_Id);
//       setMessages(sortedMessages);
//     } catch (error) {
//       console.error("Error fetching messages:", error);
//     }
//   };

//   useEffect(() => {
//     fetchMessages();
//   }, [isOpen]);

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages, isOpen]);

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {!isOpen ? (
//         <button
//           onClick={toggleChatBox}
//           className="bg-pink-500 text-white rounded-full p-3 shadow-lg hover:bg-pink-600 transition-colors"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
//             />
//           </svg>
//         </button>
//       ) : (
//         <div className="bg-white rounded-lg shadow-2xl w-80 flex flex-col h-[450px] border border-gray-300">
//           <div className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
//             <h3 className="font-bold tracking-wide">Chat</h3>
//             <button
//               onClick={toggleChatBox}
//               className="text-white hover:text-gray-400"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
//             {messages.map((message) => (
//               <div
//                 key={message.M_Id}
//                 className={`mb-2 ${
//                   message.admin ? "text-left" : "text-right"
//                 }`}
//               >
//                 <span
//                   className={`inline-block p-2 rounded-lg ${
//                     message.admin
//                       ? "bg-green-200 text-gray-800"
//                       : "bg-green-500 text-white"
//                   } max-w-[75%]`}
//                 >
//                   {message.Message}
//                 </span>
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>
//           <form
//             onSubmit={chatuser}
//             className="border-t p-2 flex bg-gray-100 rounded-b-lg"
//           >
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               placeholder="اكتب رسالتك هنا..."
//               className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//             />
//             <button
//               type="submit"
//               className="bg-pink-500 text-white px-4 py-2 rounded-r-lg hover:bg-pink-600 transition-colors"
//             >
//               إرسال
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBox;



/////////////////


// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const ChatBox = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState("");
//   const messagesEndRef = useRef(null);

//   const toggleChatBox = () => setIsOpen(!isOpen);

//   async function chatuser(e) {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post(
//         "http://localhost:5000/api/chat/add-message", 
//         { UserMessage: inputMessage },
//         { 
//           headers: { 
//             'Authorization': `Bearer ${token}` 
//           } 
//         }
//       );
//       setInputMessage("");
//       fetchMessages();
//     } catch (err) {
//       console.error("Error sending message:", err);
//       if (err.response && err.response.status === 401) {
//         alert("جلسة المستخدم منتهية. يرجى تسجيل الدخول مرة أخرى.");
//         // يمكنك هنا إضافة منطق لتوجيه المستخدم إلى صفحة تسجيل الدخول
//       }
//     }
//   }

//   const fetchMessages = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get("http://localhost:5000/api/chat/getmessages", 
//         { 
//           headers: { 
//             'Authorization': `Bearer ${token}` 
//           } 
//         }
//       );

//       const sortedMessages = response.data.sort((a, b) => a.M_Id - b.M_Id);
//       setMessages(sortedMessages);
//     } catch (error) {
//       console.error("Error fetching messages:", error);
//       if (error.response && error.response.status === 401) {
//         alert("جلسة المستخدم منتهية. يرجى تسجيل الدخول مرة أخرى.");
//         // يمكنك هنا إضافة منطق لتوجيه المستخدم إلى صفحة تسجيل الدخول
//       }
//     }
//   };

//   useEffect(() => {
//     if (isOpen) {
//       fetchMessages();
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages, isOpen]);

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {!isOpen ? (
//         <button
//           onClick={toggleChatBox}
//           className="bg-pink-500 text-white rounded-full p-3 shadow-lg hover:bg-pink-600 transition-colors"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
//             />
//           </svg>
//         </button>
//       ) : (
//         <div className="bg-white rounded-lg shadow-2xl w-80 flex flex-col h-[450px] border border-gray-300">
//           <div className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
//             <h3 className="font-bold tracking-wide">Chat</h3>
//             <button
//               onClick={toggleChatBox}
//               className="text-white hover:text-gray-400"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
//             {messages.map((message) => (
//               <div
//                 key={message.M_Id}
//                 className={`mb-2 ${
//                   message.admin ? "text-left" : "text-right"
//                 }`}
//               >
//                 <span
//                   className={`inline-block p-2 rounded-lg ${
//                     message.admin
//                       ? "bg-green-200 text-gray-800"
//                       : "bg-green-500 text-white"
//                   } max-w-[75%]`}
//                 >
//                   {message.Message}
//                 </span>
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>
//           <form
//             onSubmit={chatuser}
//             className="border-t p-2 flex bg-gray-100 rounded-b-lg"
//           >
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               placeholder="اكتب رسالتك هنا..."
//               className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//             />
//             <button
//               type="submit"
//               className="bg-pink-500 text-white px-4 py-2 rounded-r-lg hover:bg-pink-600 transition-colors"
//             >
//               إرسال
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBox;

////

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChatBox = () => setIsOpen(!isOpen);

  async function chatuser(e) {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert("لم يتم العثور على توكن. يرجى تسجيل الدخول مرة أخرى.");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/chat/add-message", 
        { UserMessage: inputMessage },
        { 
          headers: { 
            'Authorization': `Bearer ${token}` 
          } 
        }
      );
      setInputMessage("");
      fetchMessages();
    } catch (err) {
      console.error("Error sending message:", err);
      if (err.response && err.response.status === 401) {
        alert("جلسة المستخدم منتهية. يرجى تسجيل الدخول مرة أخرى.");
      }
    }
  }

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in localStorage');
        return;
      }

      const response = await axios.get(
        "http://localhost:5000/api/chat/getmessages", 
        { 
          headers: { 
            'Authorization': `Bearer ${token}` 
          } 
        }
      );

      const sortedMessages = response.data.sort((a, b) => a.M_Id - b.M_Id);
      setMessages(sortedMessages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      if (error.response && error.response.status === 401) {
        alert("جلسة المستخدم منتهية. يرجى تسجيل الدخول مرة أخرى.");
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchMessages();
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={toggleChatBox}
          className="bg-pink-500 text-white rounded-full p-3 shadow-lg hover:bg-pink-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-2xl w-80 flex flex-col h-[450px] border border-gray-300">
          <div className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold tracking-wide">Chat</h3>
            <button
              onClick={toggleChatBox}
              className="text-white hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.M_Id}
                className={`mb-2 ${
                  message.admin ? "text-left" : "text-right"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.admin
                      ? "bg-green-200 text-gray-800"
                      : "bg-green-500 text-white"
                  } max-w-[75%]`}
                >
                  {message.Message}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form
            onSubmit={chatuser}
            className="border-t p-2 flex bg-gray-100 rounded-b-lg"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="اكتب رسالتك هنا..."
              className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-r-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors"
            >
              إرسال
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
