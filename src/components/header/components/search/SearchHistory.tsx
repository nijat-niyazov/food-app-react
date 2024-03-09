import { Trash } from "@/assets/icons";
import { useLocalStorage } from "@/hooks";
import { cn } from "@/utils";
import { useEffect, useRef, useState } from "react";

type SearchHistoryType = { word: string; id: string };

type SearchHistoryProps = {
  debounced: string;
  removeFocus: () => void;
};

const SearchHistory = ({ debounced, removeFocus }: SearchHistoryProps) => {
  const { setItem, getItem } = useLocalStorage();

  const [searchHistory, setSearchHistory] = useState<SearchHistoryType[]>(getItem("searchHistory") ?? []);

  useEffect(() => {
    const isInHistory = searchHistory.findIndex(({ word }) => word === debounced);

    if (isInHistory === -1 && debounced) {
      if (searchHistory.length >= 4) searchHistory.pop(); // Remove the last item if the are 5 words in history

      const newQuery = { word: debounced, id: Date.now().toString() };
      const searchedWords = [newQuery, ...searchHistory];

      // console.log({ searchedWords });

      setSearchHistory(searchedWords);
      setItem("searchHistory", searchedWords);
    }
  }, [debounced]);

  function removeSearchHistory(id: string) {
    const filtered = searchHistory.filter((w) => w.id !== id);

    setSearchHistory(filtered);
    setItem("searchHistory", filtered);
  }

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    console.log("ys");

    listRef.current?.closest("div");
  }, []);

  // useClickOutside(listRef, removeFocus);

  return (
    searchHistory.length > 0 && (
      <ul
        ref={listRef}
        className={cn(
          "absolute w-full mt-2 left-0 z-10  rounded-md top-full bg-primary py-3  grid gap-4 text-white transition-opacity duration-200 "
        )}
      >
        {searchHistory?.map(({ word, id }) => (
          <li key={id} className="flex items-center justify-between border-b-2 border-black/30 px-2 bg-secondary gap-4">
            <p className="bg-primary grow">{word}</p>
            <button onClick={() => removeSearchHistory(id)} className="!p-2  w-auto">
              <Trash />
            </button>
          </li>
        ))}
      </ul>
    )
  );
};

export default SearchHistory;
