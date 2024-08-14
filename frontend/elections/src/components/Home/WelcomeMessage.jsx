// WelcomeMessage.js
import React from "react";

const WelcomeMessage = ({ isLoggedIn, username }) => (
  isLoggedIn && (
    <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded relative mb-8" role="alert">
      <strong className="font-bold">مرحبا، {username}!</strong>
      <span className="block sm:inline">يمكنك الآن المشاركة في الانتخابات.</span>
    </div>
  )
);

export default WelcomeMessage;
