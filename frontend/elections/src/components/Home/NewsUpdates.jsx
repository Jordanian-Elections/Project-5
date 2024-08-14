import React from "react";

const NewsUpdates = ({ newsUpdates }) => (
  <section className="mb-12 p-4">
    <h2 className="text-4xl font-bold mb-8 text-center text-jordanian-red">آخر الأخبار</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {newsUpdates.map((news) => (
        <div
          key={news.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3 text-jordanian-black">{news.title}</h3>
            <p className="text-gray-700 text-base">{news.summary}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default NewsUpdates;



// import React from "react";

// const NewsUpdates = ({ newsUpdates }) => (
//   <section className="mb-12 p-4">
//     <h2 className="text-4xl font-bold mb-8 text-center text-jordanian-red">آخر الأخبار</h2>
//     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//       {newsUpdates.map((news) => (
//         <div
//           key={news.id}
//           className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
//         >
//           <div className="p-6">
//             <h3 className="text-2xl font-semibold mb-3 text-jordanian-black">{news.title}</h3>
//             <p className="text-gray-700 text-base">{news.summary}</p>
//           </div>
//         </div>
//       ))}
//       {/* بطاقة إضافية ثابتة */}
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//         <div className="p-6">
//           <h3 className="text-2xl font-semibold mb-3 text-jordanian-black">عنوان البطاقة الإضافية</h3>
//           <p className="text-gray-700 text-base">ملخص البطاقة الإضافية التي أضفناها كعنصر ثابت كمثال. يمكنك استبدال هذا النص بمحتوى حقيقي.</p>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default NewsUpdates;
