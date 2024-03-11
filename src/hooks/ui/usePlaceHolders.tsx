import { RefObject, useEffect, useState } from "react";

const stplaceholders = ["burger", "pizza", "doner", "kebab"];

const usePlaceHolders = (placeholders: string[] = stplaceholders, ref: RefObject<HTMLInputElement>) => {
  const [currentWord, setCurrentWord] = useState(placeholders[0]);
  const [typedWord, setTypedWord] = useState("");
  const [isForward, setIsForward] = useState<boolean>(true);
  const hasWordFinishedTyping = typedWord.length === currentWord.length;

  const inputElement = ref.current as HTMLInputElement;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasWordFinishedTyping && isForward) {
        setTypedWord((prev) => {
          const currentLetter = currentWord[prev.length];
          return prev + currentLetter;
        });
      } else if (typedWord.length > 0 && !isForward) {
        setTypedWord((prev) => {
          const cuttedOfWord = prev.slice(0, prev.length - 1);
          return cuttedOfWord;
        });
      } else if (hasWordFinishedTyping) {
        clearTimeout(interval);

        function changeToNextWord() {
          const currentWordIndex = placeholders.indexOf(currentWord);
          const nextIndex = (currentWordIndex + 1) % placeholders.length;
          setCurrentWord(placeholders[nextIndex]);
        }

        function actions() {
          setIsForward(false);
          changeToNextWord();
        }

        setTimeout(actions, 2000);
      } else if (typedWord.length === 0) {
        clearTimeout(interval);
        setIsForward(true);
      }
    }, 50);

    if (inputElement) {
      document.activeElement !== inputElement
        ? inputElement.setAttribute("placeholder", hasWordFinishedTyping ? typedWord : `${typedWord}|`)
        : inputElement.setAttribute("placeholder", "");
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentWord, typedWord, isForward]);

  return typedWord;
};

export default usePlaceHolders;
