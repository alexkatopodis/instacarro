import React from 'react';
import { useState, useEffect } from 'react';

const Timer = (props: any) => {
  const { initialMinute = 59, initialSeconds = 59 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          window.location.reload();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="countdownContainer">
      {minutes === 0 && seconds === 0 ? null : (
        <span>
          {' '}
          {0}:{minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      )}
    </div>
  );
};

export default Timer;
