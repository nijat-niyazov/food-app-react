import { cn } from "@/utils";

type SearchHistoryType = {
  word: string;
  id: string;
};

type Props = {
  searchHistory: SearchHistoryType[];
  removeSearchHistory: (id: string) => void;
  showHistory: boolean;
};

const SearchHistory = ({ searchHistory, removeSearchHistory, showHistory }: Props) => {
  return (
    <ul
      className={cn(
        "absolute w-full mt-2 left-0 z-50  rounded-md top-full bg-primary py-3  grid gap-4 text-white transition-opacity duration-200 opacity-0 pointer-events-none",

        { "opacity-100": showHistory },
        {
          "pointer-events-auto": showHistory,
        }
      )}
    >
      {searchHistory.map(({ word, id }) => (
        <li key={id} className="flex items-center justify-between border-b-2 border-black/30 px-2 ">
          <span className="flex-1">{word}</span>

          <button onClick={() => removeSearchHistory(id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default SearchHistory;
