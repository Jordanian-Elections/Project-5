// VoterCounts.js
import React from "react";

const VoterCounts = ({ voterCount }) => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6 text-center text-jordanian-red">عدد الناخبين المسجلين</h2>
    <div className="bg-jordanian-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(voterCount).map(([key, count]) => (
        <div key={key} className="bg-[#b6abab] p-6 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-2">{key}</h3>
          <p className="text-4xl font-bold">{count}</p>
        </div>
      ))}
    </div>
  </section>
);

export default VoterCounts;
