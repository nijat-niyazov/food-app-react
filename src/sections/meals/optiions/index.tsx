import { useState } from "react";
import AddToOrderBtn from "../add-to-order";

const Options = ({
  options,
}: {
  options: { id: number; price: number; size: string }[];
}) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-wrap justify-between gap-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => setSelected(option.id)}
          className={`${
            selected === option.id ? "bg-text text-white" : ""
          } rounded-lg  font-bold text-sm flex items-center py-2 px-3 border-1 border-black/10`}
        >
          <span
            className={`${
              option.id === selected ? "text-white" : "text-text"
            } mr-2`}
          >
            {option.size}
          </span>
          <span className="bg-secondary py-2 px-4 rounded-s text-white">
            £{option.price}
          </span>
        </button>
      ))}

      <AddToOrderBtn selected={selected} />
    </div>
  );
};

export default Options;
