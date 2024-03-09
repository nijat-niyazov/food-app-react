import { SearchIcon } from "@/assets/icons";
import { useDebounced } from "@/hooks";
import { cn } from "@/utils";
import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Input from "./Input";
import Results from "./Results";
import SearchHistory from "./SearchHistory";

const HeaderSearchCopy = () => {
  /* -------------------------- Search and Debounced -------------------------- */
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") ?? "");
  const debounced = useDebounced(search, 1000);

  const [isLoading, setIsLoading] = useState(false);

  const isTyping = search.trim().length > 0;

  useEffect(() => {
    if (isTyping) {
      setIsLoading(true);

      const timeId = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => {
        setIsLoading(false);
        clearInterval(timeId);
      };
    } else {
      searchParams.delete("query");
      setSearchParams(searchParams, { replace: true });
    }
  }, [search]);

  const [isFocused, setIsFocused] = useState(false);

  /* -------------------------- Hide on clickoutside of input -------------------------- */

  function removeFocus() {
    setIsFocused(false);
  }

  // const divRef = useRef<HTMLDivElement>(null);
  // useClickOutside(divRef, removeFocus);

  let showHistory = !isTyping && isFocused;

  console.log(showHistory);

  return (
    <div
      // ref={divRef}
      onFocus={() => setIsFocused(true)}
      className={cn(
        "p-3 rounded-full w-auto bg-white border-1 border-black/40 outline-none relative hidden md:block  outline-offset-0 transition-all duration-200",
        { "border-primary/80 outline-primary/50": isFocused }
      )}
    >
      {showHistory && <SearchHistory removeFocus={removeFocus} debounced={debounced} />}

      {isTyping && <Results isLoading={isLoading} />}

      <Input value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />

      <div
        className={cn("p-3 absolute border-primary right-0 top-0 h-full rounded-full flex-centered transition-colors duration-200", {
          "bg-primary": !isFocused,
        })}
      >
        <SearchIcon />
      </div>
    </div>
  );
};

export default HeaderSearchCopy;
