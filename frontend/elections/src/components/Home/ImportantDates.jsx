// ImportantDates.js
import React from "react";

const ImportantDates = ({ importantDates }) => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6 text-center text-jordanian-red">التواريخ المهمة</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {importantDates.map((date, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-jordanian-black mb-2">{date.event}</h3>
          <p className="text-gray-600">{date.date}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ImportantDates;
