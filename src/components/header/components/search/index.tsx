import { SearchIcon } from "@/assets/icons";
import { useDebounced } from "@/useHooks";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

type SearchHistoryType = {
  word: string;
  id: string;
};

const HeaderSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") ?? "");
  const debounced = useDebounced(search, 500);

  const [searchHistory, setSearchHistory] = useState<SearchHistoryType[]>(
    JSON.parse(localStorage.getItem("searchHistory") ?? "[]")
  );

  useEffect(() => {
    if (debounced) {
      searchParams.set("query", debounced);

      const inHistory = searchHistory.findIndex(
        ({ word }) => word === debounced
      );

      if (inHistory === -1) {
        const searchedWords = [
          ...searchHistory,
          { word: debounced, id: Date.now().toString() },
        ];

        setSearchHistory(searchedWords);

        localStorage.setItem("searchHistory", JSON.stringify(searchedWords));
      }
    } else {
      searchParams.delete("query");
    }

    setSearchParams(searchParams, {
      replace: true,
    });
  }, [debounced]);

  const removeSearchHistory = (id: string) =>
    setSearchHistory((prev) => prev.filter((w) => w.id !== id));

  const [visible, setVisible] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isRemoveButton = (e.target as HTMLButtonElement).closest("button");
      // idk it doesn't see remove button inside of div, may be because of nested elements ☹

      if (
        divRef.current &&
        !divRef.current.contains(e.target as Node) &&
        !isRemoveButton
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      ref={divRef}
      className="p-2 rounded-full w-96 border-1 border-black/40 outline-none relative hidden md:block"
    >
      <ul
        className="absolute w-full mt-2 left-0 z-50  rounded-md top-full bg-primary py-3  grid gap-4 text-white transition-opacity duration-200"
        style={{
          opacity: !search && visible && searchHistory.length > 0 ? "100%" : 0,
          pointerEvents:
            !search && visible && searchHistory.length > 0 ? "all" : "none",
        }}
      >
        {searchHistory.map(({ word, id }) => (
          <li
            key={id}
            className="flex items-center justify-between border-b-2 border-black/30 px-2 "
          >
            <span className="flex-1">{word}</span>

            <button onClick={() => removeSearchHistory(id)}>❌</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        name="search"
        placeholder="Burger"
        className="bg-transparent outline-none px-1 w-[calc(100%-20px)]"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        onFocus={() => setVisible(true)}
      />

      <div className="p-2 absolute border-primary right-0 top-0 h-full bg-primary rounded-full flex items-center justify-center">
        <SearchIcon />
      </div>
    </div>
  );
};

export default HeaderSearch;
