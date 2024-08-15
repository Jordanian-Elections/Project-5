import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'ما هي الانتخابات النيابية؟',
      answer: 'الانتخابات النيابية هي عملية انتخاب أعضاء مجلس النواب الذين يمثلون الشعب ويقومون بسن القوانين.',
    },
    {
      question: 'كيف يمكنني التسجيل للتصويت؟',
      answer: 'يمكنك التسجيل للتصويت من خلال مكاتب الأحوال المدنية في منطقتك أو عبر الإنترنت من خلال الموقع الرسمي للانتخابات.',
    },
    {
      question: 'ما هي شروط الترشح للانتخابات النيابية؟',
      answer: 'يجب أن يكون المرشح مواطناً أردنياً، وأن يكون قد أتم 30 عاماً من العمر، وأن يكون مسجلاً في قائمة الناخبين.',
    },
    {
      question: 'متى تجرى الانتخابات النيابية؟',
      answer: 'تُجرى الانتخابات النيابية كل أربع سنوات، ويتم الإعلان عن موعدها من قبل الهيئة المستقلة للانتخاب.',
    },
    {
        question:"هل يمكنني التصويت إذا كنت خارج البلاد؟",
         answer: "للأسف، لا يُسمح بالتصويت من خارج البلاد في هذه الانتخابات."
    },
  ];

  return (
    <section className="bg-[#dacdce] py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-jordanian-red mb-8">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg">
              <button
                className="w-full px-6 py-4 text-left text-lg font-medium text-jordanian-red focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;








// import React from 'react';

// function FAQSection() {
//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//           أسئلة شائعة
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <FAQItem
//             question="متى ستُجرى الانتخابات؟"
//             answer="ستُجرى الانتخابات النيابية في يوم [تاريخ الانتخابات] من الساعة [وقت البدء] إلى الساعة [وقت الانتهاء]."
//           />
//           <FAQItem
//             question="أين يمكنني التصويت؟"
//             answer="يمكنك معرفة مركز الاقتراع الخاص بك من خلال زيارة موقع الهيئة المستقلة للانتخاب أو الاتصال على الرقم [رقم الهاتف]."
//           />
//           <FAQItem
//             question="ما هي شروط الترشح؟"
//             answer="للتعرف على شروط الترشح، يرجى زيارة صفحة [رابط صفحة شروط الترشح] على موقعنا."
//           />
//           <FAQItem
//             question="كيف يمكنني التسجيل للتصويت؟"
//             answer="للتسجيل للتصويت، يرجى زيارة موقع الهيئة المستقلة للانتخاب أو الاتصال على الرقم [رقم الهاتف]."
//           />
//           <FAQItem
//             question="ما هي أهمية المشاركة في الانتخابات؟"
//             answer="المشاركة في الانتخابات هي حق وواجب وطني، وهي تُمكّنك من اختيار من يمثلك في البرلمان."
//           />
//           <FAQItem
//             question="هل يمكنني التصويت إذا كنت خارج البلاد؟"
//             answer="للأسف، لا يُسمح بالتصويت من خارج البلاد في هذه الانتخابات."
//           />
//         </div>
//         <div className="text-center mt-8">
//           <a
//             href="#"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             عرض المزيد من الأسئلة الشائعة
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FAQItem({ question, answer }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <h3 className="text-xl font-semibold text-gray-800 mb-4">
//         {question}
//       </h3>
//       <p className="text-gray-600">{answer}</p>
//     </div>
//   );
// }

// export default FAQSection;
