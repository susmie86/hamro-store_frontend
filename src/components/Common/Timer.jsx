import { useState, useEffect } from "react";
import "./Timer.css"
import TimeCard from "./TimeCard";

function Timer() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prevSecond) => {
        return prevSecond + 1;
      });
      if (second === 59) {
        setMinute((prevMinute) => {
          return prevMinute + 1;
        });
        setSecond(0);
      }
      if (minute === 2 && second === 59) {
        setHour((prevHour) => {
          return prevHour + 1;
        });
        setMinute(0);
      }

      if (hour === 3 && minute === 2 && second === 59) {
        setDays((prevDays) => {
          return prevDays + 1;
        });
        setHour(0);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [second, hour, minute]);
  return (
    <div className="timer">
      <TimeCard title={`seconds`} time={second} />
      <TimeCard title={`minutes`} time={minute} />
      <TimeCard title={`hours`} time={hour} />
      <TimeCard title={`days`} time={days} />
    </div>
  );
}

export default Timer;
