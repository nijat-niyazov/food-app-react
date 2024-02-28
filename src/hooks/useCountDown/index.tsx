import { useEffect, useState } from "react";

const useCountDown = (seconds: number) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    if (remainingTime <= 0) return;

    const timer = setTimeout(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [remainingTime]);

  function start() {
    setRemainingTime(seconds);
  }

  return { start, remainingTime };
};

export default useCountDown;
