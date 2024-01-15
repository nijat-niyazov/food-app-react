import { useDebounced } from "@/useHooks";
import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const HeaderSearch = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("query") ?? "");

  const debounced = useDebounced(search, 500);

  useEffect(() => {
    if (debounced) {
      searchParams.append("query", debounced);
    } else {
      searchParams.delete("query");
    }
    setSearchParams(searchParams);
  }, [debounced]);

  return (
    <div className="p-2 rounded-full w-40 border-1 border-black/40 outline-none relative hidden md:block">
      <input
        type="text"
        name="search"
        placeholder="Burger"
        id="search"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        className="bg-transparent w-3/4 outline-none"
      />

      <div className="w-1/4 absolute border-primary right-0 top-0 h-full bg-primary rounded-full"></div>
    </div>
  );
};

export default HeaderSearch;
