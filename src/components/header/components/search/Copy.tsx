import { SearchIcon } from "@/assets/icons";
import { useDebounced } from "@/hooks";
import { cn } from "@/utils";
import { ChangeEvent, Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchHistory from "./SearchHistory";

type SearchHistoryType = {
  word: string;
  id: string;
};

const HeaderSearchCopy = () => {
  /* -------------------------- Search and Debounced -------------------------- */
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") ?? "");
  const debounced = useDebounced(search, 500);

  useEffect(() => {
    if (debounced) {
      searchParams.set("query", debounced);

      const inHistory = searchHistory.findIndex(({ word }) => word === debounced);

      if (inHistory === -1) {
        if (searchHistory.length >= 4) searchHistory.pop();

        const searchedWords = [{ word: debounced, id: Date.now().toString() }, ...searchHistory];

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

  /* -------------------------- Search History -------------------------- */

  const [searchHistory, setSearchHistory] = useState<SearchHistoryType[]>(JSON.parse(localStorage.getItem("searchHistory") ?? "[]"));
  const removeSearchHistory = useCallback((id: string) => setSearchHistory((prev) => prev.filter((w) => w.id !== id)), []);

  const [isFocused, setIsFocused] = useState(false);
  let showHistory = !search && isFocused && searchHistory.length > 0;

  /* -------------------------- Hide on clickoutside of input -------------------------- */
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isRemoveButton = (e.target as HTMLButtonElement).closest("button");
      // idk it doesn't see remove button inside of div, may be because of nested elements ☹

      if (divRef.current && !divRef.current.contains(e.target as Node) && !isRemoveButton) {
        setIsFocused(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <Fragment>
      <div
        ref={divRef}
        className={cn(
          "p-2 rounded-full w-auto bg-white border-1 border-black/40 outline-none relative hidden md:block  outline-offset-0 transition-all duration-200",
          {
            "border-primary/80 outline-primary/50": isFocused,
          }
        )}
      >
        <SearchHistory {...{ showHistory, searchHistory, removeSearchHistory }} />

        <input
          type="text"
          name="search"
          placeholder="Burger"
          className="bg-outlined outline-none px-1 w-[calc(100%-20px)]"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />

        <div
          className={cn("p-2 absolute border-primary right-0 top-0 h-full  rounded-full flex-centered transition-colors duration-200", {
            "bg-primary": !isFocused,
          })}
        >
          <SearchIcon />
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderSearchCopy;
