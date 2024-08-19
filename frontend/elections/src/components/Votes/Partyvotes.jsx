import React, { useState, useEffect } from 'react';
import axios from 'axios';
import voteIcon from './assets/24473275.jpg';
import megaphoneIcon from './assets/24473275.jpg';
import checkIcon from './assets/24473275.jpg';
import handIcon from './assets/24473275.jpg';
import ballotIcon from './assets/24473275.jpg';
import img3 from "./assets/Cover (8).png";
import Header from '../Header/Header';

const VotePage = () => {
  const [parties, setParties] = useState([]);
  const [selectedParty, setSelectedParty] = useState('');
  const [user, setUser] = useState({ national_id: 2000000070 });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasVoted, setHasVoted] = useState(false); // Track if the user has voted

  const partiesPerPage = 6;

  useEffect(() => {
    axios.get('http://localhost:5000/parties')
      .then(response => {
        setParties(response.data);
      })
      .catch(error => {
        console.error('Error fetching parties:', error);
        setError('فشل في استرجاع الأحزاب.');
      });
  }, []);

  const handleVote = () => {
    if (!selectedParty) {
      setError('الرجاء اختيار حزب قبل التصويت.');
      return;
    }

    const isConfirmed = window.confirm(`هل أنت متأكد من التصويت لحزب "${selectedParty}"؟`);

    if (isConfirmed) {
      axios.patch('http://localhost:5000/votedparty', {
        user,
        candidate: { party: selectedParty }
      })
        .then(response => {
          setSuccess('تم تسجيل صوتك بنجاح!');
          setError(null);
          setHasVoted(true); // Set voting status to true
        })
        .catch(error => {
          console.error('Error recording vote:', error);
          setError('فشل في تسجيل الصوت.');
        });
    } else {
      setError('تم إلغاء التصويت.');
    }
  };

  const filteredParties = parties.filter(party =>
    party.party.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastParty = currentPage * partiesPerPage;
  const indexOfFirstParty = indexOfLastParty - partiesPerPage;
  const currentParties = filteredParties.slice(indexOfFirstParty, indexOfLastParty);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-200 text-right" dir="rtl">
      <Header />

      {hasVoted ? (
        <div className="p-6 mb-6 bg-white mx-10 rounded-lg shadow-lg mt-[10%]">
          <h2 className="text-2xl font-semibold text-gray-800"> تم تسجيل صوتك للقائمة الحزبية </h2>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 rounded-full bg-green-900 text-white hover:bg-green-700 transition duration-300 shadow-lg text-lg font-semibold"
            >
              العودة إلى الصفحة السابقة
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-row items-center p-6">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 mx-auto">نظام الانتخاب للقائمة الحزبية</h1>
            <img
              src={img3}
              alt="وصف الصورة"
              className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg mx-auto"
            />
          </div>

          <div className="p-6 mb-6 bg-white mx-10 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">معلومات الناخب:</h2>
            <p className="text-lg">الرقم الوطني: {user.national_id}</p>
          </div>

          <p className="text-lg px-6 mb-6 mx-10">
            صوتك هو قوة التغيير في انتخابات النواب. اختر الحزب الذي تريد التصويت له.
          </p>

          {error && <div className="bg-red-100 text-red-700 p-4 mb-6 rounded-lg shadow-lg mx-10">{error}</div>}
          {success && <div className="bg-green-100 text-green-700 p-4 mb-6 rounded-lg shadow-lg mx-10">{success}</div>}

          <div className="px-6 mb-6 mx-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">اختر الحزب للتصويت</h2>

            <div className="mb-4">
              <input
                type="text"
                placeholder="ابحث عن حزب..."
                className="w-full p-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentParties.map((party, index) => (
                <div
                  key={index}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedParty === party.party
                      ? 'bg-green-500 text-white'
                      : 'bg-white hover:bg-green-100'
                  }`}
                  onClick={() => setSelectedParty(party.party)}
                >
                  <img
                    src={party.logo || 'path/to/default/party/logo.jpg'}
                    alt={`شعار ${party.party}`}
                    className="w-full h-32 object-cover mb-2 rounded"
                  />
                  <h3 className="text-lg font-semibold mb-2">{party.party}</h3>
                  <p className="text-sm">{party.description || 'وصف الحزب غير متوفر'}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4">
              {Array.from({ length: Math.ceil(filteredParties.length / partiesPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <button
              onClick={handleVote}
              className={`px-6 py-3 rounded-full transition duration-300 shadow-lg text-lg font-semibold ${
                selectedParty
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!selectedParty}
            >
              {selectedParty ? 'تأكيد التصويت' : 'الرجاء اختيار حزب'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VotePage;
