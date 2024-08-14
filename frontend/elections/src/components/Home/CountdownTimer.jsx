// CountdownTimer.js
import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        أيام: Math.floor(difference / (1000 * 60 * 60 * 24)),
        ساعات: Math.floor((difference / (1000 * 60 * 60)) % 24),
        دقائق: Math.floor((difference / 1000 / 60) % 60),
        ثواني: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        أيام: 0,
        ساعات: 0,
        دقائق: 0,
        ثواني: 0,
      };
    }

    return timeLeft;
  }

  return (
    <div className="text-2xl font-bold text-jordanian-red">
      {Object.keys(timeLeft).length ? (
        Object.entries(timeLeft).map(([unit, value]) => (
          <span key={unit} className="mx-2">
            {value} {unit}
          </span>
        ))
      ) : (
        <span>انتهى وقت الانتخابات!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
