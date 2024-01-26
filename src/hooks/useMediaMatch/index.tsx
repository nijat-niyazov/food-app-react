import { useRef } from "react";

const useMediaMatch = () => {
  const {
    current: [width, height],
  } = useRef([window.innerWidth, window.innerHeight]);

  const sm = width < 768;

  return sm;
};

export default useMediaMatch;
