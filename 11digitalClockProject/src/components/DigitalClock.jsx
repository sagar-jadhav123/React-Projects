import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function formatTime() {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meredien = hours >= 12 ? "PM" : "AM";

    return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(
      seconds
    )} ${meredien}`;
  }

  function padZero(time) {
    return (time < 10 ? "0" : "") + time;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
