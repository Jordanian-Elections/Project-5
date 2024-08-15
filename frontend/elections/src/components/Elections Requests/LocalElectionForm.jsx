import React from "react";

const LocalElectionForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700">Election Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Enter election title"
        />
      </div>
      <div>
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Enter location"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Create Local Election
      </button>
    </form>
  );
};

export default LocalElectionForm;
