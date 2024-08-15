import React from "react";

const PartyElectionForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700">Party Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Enter party name"
        />
      </div>
      <div>
        <label className="block text-gray-700">Number of Candidates</label>
        <input
          type="number"
          className="w-full p-2 border rounded-md"
          placeholder="Enter number of candidates"
        />
      </div>
      <button type="submit" className="bg-green-500 text-white p-2 rounded-md">
        Create Party Election
      </button>
    </form>
  );
};

export default PartyElectionForm;
