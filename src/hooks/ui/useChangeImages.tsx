import { useEffect, useState } from "react";

const useChangeImages = (imagesLength: number, changeInterval: number = 3000) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prev) => {
        prev++;
        return prev % imagesLength;
      });
    }, changeInterval);

    return () => clearInterval(intervalId);
  }, []);

  return imageIndex;
};

export default useChangeImages;
