import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import img3 from "./assets/Cover (8).png"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function ListVotes(){
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCircle, setSelectedCircle] = useState(null);
    const [selectedList, setSelectedList] = useState(null);
    const [selectedCandidates, setSelectedCandidates] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [voteSuccess, setVoteSuccess] = useState(false);

    useEffect(() => {
        fetchCandidates();
        setUser({ national_id: 2000000070, circle: "الدائرة الأولى", city: "الزرقاء" });
    }, []);

    const fetchCandidates = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('http://localhost:5000/api/voting/candidates-by-city');
            setCities(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching candidates:', error);
            setError('فشل في جلب البيانات. يرجى المحاولة مرة أخرى.');
            setIsLoading(false);
        }
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        setSelectedCircle(null);
        setSelectedList(null);
        setSelectedCandidates([]);
    };

    const handleCircleChange = (e) => {
        setSelectedCircle(e.target.value);
        setSelectedList(null);
        setSelectedCandidates([]);
    };

    const handleListChange = (e) => {
        setSelectedList(e.target.value);
        setSelectedCandidates([]);
    };

    const toggleCandidate = (candidate) => {
        setSelectedCandidates(prev => 
            prev.some(c => c.candidate_national_id === candidate.candidate_national_id)
            ? prev.filter(c => c.candidate_national_id !== candidate.candidate_national_id)
            : [...prev, candidate]
        );
    };

    const handleVote = async () => {
        try {
            await axios.patch('http://localhost:5000/api/voting/votedcircle', {
                user: user,
                candidate: {
                    candidate_national_ids: selectedCandidates.map(c => c.candidate_national_id),
                    circle_list: selectedList,
                    circle: selectedCircle,
                    city: selectedCity
                }
            });
            setVoteSuccess(true);
            setShowModal(false);
        } catch (error) {
            console.error('Error voting:', error);
            alert('خطأ في تسجيل التصويت. يرجى المحاولة مرة أخرى.');
        }
    };

    if (isLoading) return <div className="text-center mt-8 text-white">جاري التحميل...</div>;
    if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

    if (voteSuccess) {
        return (
            <div className="text-center mt-8 text-green-500">
                تصويتك تم بنجاح للقائمة الحليه. العودة الى الصفحة السابقة.
            </div>
        );
    }

    return( <>
        <div className="bg-gray-200 min-h-screen">
            <Header/>

            <div className="flex flex-row items-center p-6">
                <div className="text-4xl font-bold mb-4 text-gray-900 mx-auto">نظام الانتخاب للقائمة المحلية</div>
                <img
                    src={img3}
                    alt="وصف الصورة"
                    className="w-60 max-w-60 h-70 object-cover rounded-lg shadow-lg mx-auto"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto p-6"
            >
                {/* User Information Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">معلومات الناخب</h2>
                    <div className="grid grid-cols-3 gap-4 text-gray-600">
                        <div>
                            <p className="font-medium text-gray-800">الرقم الوطني:</p>
                            <p>{user?.national_id}</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-800">الدائرة:</p>
                            <p>{user?.circle}</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-800">المدينة:</p>
                            <p>{user?.city}</p>
                        </div>
                    </div>
                </div>

                {/* Voting Form */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">التصويت</h2>
                    
                    {/* City Selector */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">اختر مدينتك</label>
                        <select 
                            value={selectedCity || ''}
                            onChange={handleCityChange}
                            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm"
                        >
                            <option value="">اختر مدينة</option>
                            {cities.map(city => (
                                <option key={city.city} value={city.city}>{city.city}</option>
                            ))}
                        </select>
                    </div>

                    {/* Circle Selector */}
                    {selectedCity && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6"
                        >
                            <label className="block text-sm font-medium text-gray-700 mb-2">اختر دائرتك</label>
                            <select 
                                value={selectedCircle || ''}
                                onChange={handleCircleChange}
                                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm"
                            >
                                <option value="">اختر دائرة</option>
                                {cities.find(c => c.city === selectedCity)?.circles.map(circle => (
                                    <option key={circle.circle} value={circle.circle}>{circle.circle}</option>
                                ))}
                            </select>
                        </motion.div>
                    )}

                    {/* List Selector */}
                    {selectedCircle && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6"
                        >
                            <label className="block text-sm font-medium text-gray-700 mb-2">اختر القائمة</label>
                            <select 
                                value={selectedList || ''}
                                onChange={handleListChange}
                                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm"
                            >
                                <option value="">اختر قائمة أو اترك فارغًا للورقة البيضاء</option>
                                {cities.find(c => c.city === selectedCity)?.circles.find(circle => circle.circle === selectedCircle)?.lists.map(list => (
                                    <option key={list.list} value={list.list}>{list.list}</option>
                                ))}
                            </select>
                        </motion.div>
                    )}

                    {/* Candidate Selector */}
                    {selectedList && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 bg-gray-100 p-4 rounded-lg"
                        >
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">اختر المرشحين</h2>
                            <div className="space-y-2">
                                {cities.find(c => c.city === selectedCity)?.circles.find(circle => circle.circle === selectedCircle)?.lists.find(list => list.list === selectedList)?.candidates.map(candidate => (
                                    <label key={candidate.candidate_national_id} className="flex items-center justify-between p-2 bg-white rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-150">
                                        <span className="text-gray-700">{candidate.name}</span>
                                        <input
                                            type="checkbox"
                                            checked={selectedCandidates.some(c => c.candidate_national_id === candidate.candidate_national_id)}
                                            onChange={() => toggleCandidate(candidate)}
                                            className="form-checkbox h-5 w-5 text-green-600 transition duration-150 ease-in-out"
                                        />
                                    </label>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Vote Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowModal(true)}
                        className="w-full py-3 bg-green-600 text-white rounded-lg shadow-lg font-semibold text-lg transition-all duration-150"
                    >
                        تأكيد التصويت
                    </motion.button>
                </div>
            </motion.div>

            {/* Confirmation Modal */}
            <Transition appear show={showModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setShowModal(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        تأكيد التصويت
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            هل أنت متأكد من التصويت لهذه القائمة؟ 
                                            {selectedCandidates.length === 0 && selectedList ? " لم يتم اختيار أي مرشحين." : ""}
                                            {selectedList ? "" : " لم يتم اختيار أي قائمة (الورقة البيضاء)." }
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-full rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                            onClick={handleVote}
                                        >
                                            نعم، تأكيد التصويت
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex justify-center w-full rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                            onClick={() => setShowModal(false)}
                                        >
                                            إلغاء
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

          
        </div>
        <Footer/>
       </>
    )
}

export default ListVotes;
