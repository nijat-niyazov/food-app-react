import { RefObject, useEffect } from "react";

const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>, callback: () => void, aditionalCondition: boolean = true) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node) && aditionalCondition) {
        callback();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
};

export default useClickOutside;
