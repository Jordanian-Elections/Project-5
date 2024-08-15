import React, { useState } from "react";
import LocalElectionForm from "./LocalElectionForm";
import PartyElectionForm from "./PartyElectionForm";

const ElectionRequests = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);

  return (
    <div className="p-4 space-y-6">
      {!selectedRequest && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedRequest("local")}
          >
            <h2 className="text-xl font-semibold mb-4">
              Local Election Request
            </h2>
            <p className="text-gray-700">
              Create a new local election request.
            </p>
          </div>

          <div
            className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedRequest("party")}
          >
            <h2 className="text-xl font-semibold mb-4">
              Party Election Request
            </h2>
            <p className="text-gray-700">
              Create a new party election request.
            </p>
          </div>
        </div>
      )}

      {selectedRequest === "local" && (
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Local Election Form</h2>
          <LocalElectionForm />
        </div>
      )}

      {selectedRequest === "party" && (
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Party Election Form</h2>
          <PartyElectionForm />
        </div>
      )}

      {selectedRequest && (
        <button
          className="mt-4 p-2 bg-gray-200 text-gray-700 rounded-md"
          onClick={() => setSelectedRequest(null)}
        >
          Back to Requests
        </button>
      )}
    </div>
  );
};

export default ElectionRequests;
