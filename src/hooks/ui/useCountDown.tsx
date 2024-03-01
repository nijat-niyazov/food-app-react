import { useEffect, useState } from "react";
import { useLocalStorage } from "..";

function getDifference(lastTime: number, target: number) {
  const currentTime = new Date().getTime();
  const timeDifference = Math.floor((currentTime - lastTime) / 1000);
  return timeDifference > target ? 0 : target - timeDifference;
}

const useCountDown = (seconds: number, comparingTo?: string) => {
  const { getItem } = useLocalStorage();

  const [remainingSecs, setRemainingSecs] = useState(() => {
    if (comparingTo) {
      const lastClickedToSendMessage = parseInt(getItem(comparingTo) ?? "0");
      return getDifference(lastClickedToSendMessage, seconds);
    } else {
      return seconds;
    }
  });

  useEffect(() => {
    if (remainingSecs <= 0) return;

    const timer = setTimeout(() => {
      setRemainingSecs((prev: number) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [remainingSecs]);

  function start() {
    setRemainingSecs(seconds);
  }

  const minutes = Math.floor(remainingSecs / 60);
  const secs = remainingSecs % 60;
  const remainingTime = `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  const timeIsOver = remainingSecs <= 0;

  return { start, remainingTime, timeIsOver };
};

export default useCountDown;
