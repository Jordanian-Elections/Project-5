

import React, { useState, useEffect  }  from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import img from "./assets/24473275.jpg"
import img1 from "./assets/22713666.jpg"
import img2 from "./assets/Cover (7).png"
import img3 from "./assets/49986137.jpg"
import Header from "../Header/Header"
import Footer from '../Footer/Footer';


function VotingApp() {

  const navigate = useNavigate();  // Initialize navigate

  function handleClick() {
    navigate("/ListVotes");  // Use navigate to go to the new page
  }
  function handleClickparty() {
    navigate("/party-lists");  // Use navigate to go to the new page
  }

  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-8 text-right mt-20" dir="rtl">
    <h1 className="text-3xl font-bold">انتخابات مجلس النواب ٢٠٢٤</h1>

      <div className="flex justify-between items-center mb-">
      <p className="mb-6 text-2xl">
        صوتك هو قوة التغيير في انتخابات النواب. اطلع، استفسر، شارك وحقق مستقبل
        أفضل لوطنك. لا تدع الفرصة تفوتك، وكن جزءاً من صناعة القرار!
     <div className='mt-10'>
        <button className="bg-[rgb(41,180,115)] text-white px-4 py-2 rounded">
        صوت الآن
      </button></div>
      </p>
      
     
        <img src={img2} alt="التصويت" className="w-1/2" />
        
      </div>
      <div className="bg-[rgba(41,180,115,0.52)] p-6 rounded-lg ">
        <h2 className="font-semibold mb-4 text-xl">تنص المادة (8) من قانون الانتخاب رقم (25) لسنة 2012 على:</h2>
        <p className="text-sm leading-relaxed">
          يقسم إقليم المملكة إلى عدد من الدوائر الانتخابية المحلية يخصص لها عدد من المقاعد النيابية وفقاً لأحكام نظام الدوائر الانتخابية الذي يصدر لهذه الغاية، على أن يراعى في ذلك ما يلي:
          أ. التقسيم الإداري.
          ب. عدد السكان والكثافة السكانية في الدائرة الانتخابية وفقاً لآخر إحصاء للسكان نشرته دائرة الإحصاءات العامة.
          ج. الظروف الجغرافية والبيئية.
        </p>
      </div>



 {/* الخطوات */}
<div className='flex mx-auto mr-[20%] '>
<button className="px-6 py-3 rounded-sm mt-40 text-2xl w-[500px] h-10 text-black  bg-transparent">
  <span className="underline">كيفية التصويت في الانتخابات النيابية</span>
</button>
<img src={img3} alt="" className='w-1/3'/>
 <div className='flex justify-center'>


   </div>

   </div>

<section class="relative overflow-hidden  dark:bg-gray-900">
    <div class="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div class="relative mt-12 lg:mt-20">
                <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="875" height="48" viewBox="0 0 875 48"
                        fill="none">
                        <path
                            d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                            stroke="#D4D4D8" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 12" />
                    </svg>
                </div>
                <div
                    class="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                    <div>
                        <div
                            class="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                            <span class="text-xl font-semibold text-gray-700 dark:text-gray-200">1</span>
                        </div>
                        <h3
                            class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                            تسجيل الدخول 
                        </h3>
                        <p class="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                           سجل الدخول من خلال الرقم الوطني و الإيميل لتصلك رسالة تأكيد على الإيميل الخاص بك 
                        </p>
                    </div>
                    <div>
                        <div
                            class="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                            <span class="text-xl font-semibold text-gray-700 dark:text-gray-200">2</span>
                        </div>
                        <h3
                            class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                            قراءة معلومات قانون التصويت
                        </h3>
                        <p class="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                             
                            يمكنك قراءة القانون الاردني من خلال تحميل الPDF
                        </p>
                    </div>
                    <div>
                        <div
                            class="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                            <span class="text-xl font-semibold text-gray-700 dark:text-gray-200">3</span>
                        </div>
                        <h3
                            class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                            صوت الآن 
                        </h3>
                        <p class="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                           يمكنك اختيار القائمة المحلية أو الحزبية 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<div className="flex p-4 text-sm text-black rounded-lg bg-[rgba(41,180,115,0.55)] dark:bg-gray-800 dark:text-blue-400" role="alert">
      <svg className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium"> معلومات مهمة عند التصويت للقوائم المحلية  :</span>
        <ul className="mt-1.5 list-disc list-inside">
          <li>أولا : تأكد من أن المرشح أو القائمة يتبع لنفس الدائرة الخاصة بك </li>
          <li>ثانيا : يمكنك التصويت للقائمة دون أي مرشح لتترشح القائمة وتحصل على مقاعد </li>
          <li>ثالثا : يمكنك اختيار مرشح واحد على الأقل أو أكثر  </li>

        </ul>
      </div>
    </div>

    <div className='flex justify-center'>
 <button className=" text-clack px-6  rounded-sm mt-20 text-2xl   w-[500px]   h-10 text-black ">
       يمكنك التصويت من خلال الضغط على القوائم التالية 
      </button>

   </div>

<div className="relative flex justify-around  items-center mt-20 " >
      <div className="relative z-10">
    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[rgba(45,126,88,0.81)] transition-all duration-300 group-hover:scale-[10]"></span>
      <div className="relative z-10 mx-auto max-w-md">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-[rgba(45,126,88,0.81)] transition-all duration-300 group-hover:bg-[rgba(45,126,88,0.81)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.3 15.4c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.85c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6.55c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.3c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7.75c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"/>
</svg>
        </span>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p>القوائم المحلية </p>
        </div>
        <div className="pt-5 text-base font-semibold leading-7">
          <p>
            <a href="#" className="text-[rgba(41,180,115,0.93)] transition-all duration-300 group-hover:text-white" onClick={handleClick}>
            الاتجاه الى صفحة التصويت للقوائم المحلية مباشرة &rarr;
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="relative z-10">
    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[rgba(45,126,88,0.81)] transition-all duration-300 group-hover:scale-[10]"></span>
      <div className="relative z-10 mx-auto max-w-md">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-[rgba(45,126,88,0.81)] transition-all duration-300 group-hover:bg-[rgba(45,126,88,0.81)]">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.3 15.4c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.85c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6.55c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.3c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7.75c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"/>
</svg>
          
        </span>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p> القوائم الحزبية.</p>
        </div>
        <div className="pt-5 text-base font-semibold leading-7">
          <p>
            <a href="#" className="text-[rgba(45,126,88,0.81)] transition-all duration-300 group-hover:text-white" onClick={handleClickparty}>
              الاتجاه الى صفحة التصويت للقوائم الحزبية مباشرة &rarr;
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>

</div>

    <Footer/>  

    </div>






 

   

   
    </>
  );
}

export default VotingApp;
