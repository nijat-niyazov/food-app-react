import { useEffect, useState } from "react";

const usePlaceHolder = (placeholders: string[] = ["burger", "pizza", "doner", "kebab"]) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    for (const word of placeholders) {
      for (var i = 0; i < word.length; i++) {
        (function (ind) {
          setTimeout(function () {
            setCurrentNumber(ind);
          }, 1000 + 500 * i);
        })(i);
      }
    }
  }, []);

  return currentNumber;
};

export default usePlaceHolder;
