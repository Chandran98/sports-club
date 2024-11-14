import React, { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const matchDate = new Date("2025-04-20T00:00:00");
    const now = new Date();
    const difference = matchDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex xs:flex-row  md:flex-row flex-col justify-end  space-x-4 bg-black text-white p-10 gap-2">
      <div class=" flex flex-col md:w-1/2 w-full  xs:w-1/2 items-center justify-center">
        <div className="flex flex-col text-center gap-6 pb-10 items-center justify-center ">
          <h2 className="text-lg font-semibold">NEXT MATCH</h2>
          <p className="text-red-500 mt-2">Champions League - 20 April, 2025</p>
        </div>
        <div className="flex space-x-4 text-center">
          <div className="bg-red-600 xs:p-4 md:p-4 p-3 rounded-lg">
            <p className="xs:text-4xl md:text-4xl font-bold ">
              {timeLeft.days || 0}
            </p>
            <span className="text-white">Days</span>
          </div>
          <div className="bg-red-600 xs:p-4 md:p-4 p-3 rounded-lg">
            <p className="xs:text-4xl md:text-4xl font-bold ">
              {timeLeft.hours || 0}
            </p>
            <span className="text-white">Hours</span>
          </div>
          <div className="bg-red-600 xs:p-4 md:p-4 p-3 rounded-lg">
            <p className="xs:text-4xl md:text-4xl font-bold ">
              {timeLeft.minutes || 0}
            </p>
            <span className="text-white">Minutes</span>
          </div>
          <div className="bg-red-600 xs:p-4 md:p-4 p-3 rounded-lg">
            <p className="xs:text-4xl md:text-4xl font-bold ">
              {timeLeft.seconds || 0}
            </p>
            <span className="text-white">Seconds</span>
          </div>
        </div>
      </div>
      <div className="bg-green-300 md:w-1/2 w-full justify-center items-center flex  xs:w-1/2 ">
        <img
          className="xs:h-96 md:h-96 w-full"
          src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/sv4zhez2lyydydg8a4tb"
        />
      </div>
    </div>
  );
};

export default Countdown;
