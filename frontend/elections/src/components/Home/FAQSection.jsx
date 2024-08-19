

import React, { useState } from 'react';
import { FaQuestionCircle } from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
      question: 'هل يمكنني التصويت إذا كنت خارج البلاد؟',
      answer: 'للأسف، لا يُسمح بالتصويت من خارج البلاد في هذه الانتخابات.',
    },
  ];

  return (
    <section className="bg-zait1 py-8">
      <div className="container mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* First div for heading and paragraph */}
        <div className="flex-1">
          <span className="flex items-center">
            <FaQuestionCircle className="ml-2 text-4xl mb-4 " /> 
            <h2 className="text-4xl font-bold text-zait mb-4">الأسئلة الشائعة</h2>
          </span>
          <p className="text-gray-700 text-xl mt-4 md:w-96">
            في هذا القسم، نقدم إجابات عن بعض الأسئلة الأكثر شيوعًا التي قد تكون لديك حول الانتخابات النيابية والإجراءات المتعلقة بها. إذا كنت بحاجة إلى مزيد من المعلومات، فلا تتردد في التواصل معنا.
          </p>
        </div>

        {/* Second div for FAQ questions */}
        <div className="flex-1 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg transition-transform duration-300 ease-in-out hover:shadow-lg ${
                openIndex === index ? 'transform scale-105' : ''
              }`}
            >
              <button
                className="w-full px-6 py-4 text-left text-lg font-semibold text-zait focus:outline-none flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-gray-800">{openIndex === index ? '-' : '+'}</span>
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
