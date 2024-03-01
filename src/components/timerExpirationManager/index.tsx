import { useCountDown, useLocalStorage } from "@/hooks";
import { useModalStore } from "@/stores/modal";
import { useEffect } from "react";

const TimerExpirationManager = () => {
  const { getItem, setItem } = useLocalStorage();
  const { opened } = useModalStore((state) => state);
  const { start } = useCountDown(getItem("forgot_password"));

  useEffect(() => {
    start();
  }, []);

  return null;
};

export default TimerExpirationManager;
