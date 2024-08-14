import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ handleLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationalID, setNationalID] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ name, email, password, nationalID });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">تسجيل الدخول</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
            <input
              id="name"
              type="text"
              placeholder="الاسم"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
            <input
              id="email"
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">كلمة المرور</label>
            <input
              id="password"
              type="password"
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="nationalID" className="block text-sm font-medium text-gray-700">رقم الهوية الوطنية</label>
            <input
              id="nationalID"
              type="text"
              placeholder="رقم الهوية الوطنية"
              value={nationalID}
              onChange={(e) => setNationalID(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            تسجيل الدخول
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          ليس لديك حساب؟ <Link to="/signup" className="text-blue-600 hover:underline">سجل الآن</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
