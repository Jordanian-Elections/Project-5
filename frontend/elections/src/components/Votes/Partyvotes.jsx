import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VotePage = () => {
  const [parties, setParties] = useState([]);
  const [selectedParty, setSelectedParty] = useState('');
  const [user, setUser] = useState({ national_id: 100017 }); // Example user ID
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    // Fetch the list of parties
    axios.get('http://localhost:1000/parties') // Adjust the URL based on your backend
      .then(response => {
        setParties(response.data);
      })
      .catch(error => {
        console.error('Error fetching parties:', error);
        setError('Failed to retrieve parties.');
      });
  }, []);

  const handleVote = () => {
    axios.patch('http://localhost:1000/votedparty', {
      user,
      candidate: { party: selectedParty }
    })
      .then(response => {
        setSuccess('Vote recorded successfully!');
        setError(null);
      })
      .catch(error => {
        console.error('Error recording vote:', error);
        setError('Failed to record vote.');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Vote for a Party</h1>
        {error && <div className="bg-red-100 text-red-700 p-4 mb-4 rounded">{error}</div>}
        {success && <div className="bg-green-100 text-green-700 p-4 mb-4 rounded">{success}</div>}
        
        <div className="mb-4">
          <label htmlFor="party" className="block text-sm font-medium text-gray-700 mb-2">Select Party</label>
          <select
            id="party"
            name="party"
            value={selectedParty}
            onChange={(e) => setSelectedParty(e.target.value)}
            className="block w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5"
          >
            <option value="">Select a party</option>
            {parties.map((party, index) => (
              <option key={index} value={party.party}>{party.party}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleVote}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Vote
        </button>
      </div>
    </div>
  );
};

export default VotePage;
