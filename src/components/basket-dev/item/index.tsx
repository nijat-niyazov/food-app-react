import { lil_pizza } from "@/assets/images";
import { removeBasketItem, updateBasketItem } from "@/stores/basket";
import { useState } from "react";

const BasketItem = ({ id, quantity }: { id: number; quantity: number }) => {
  const [basket, setBasket] = useState(quantity || 1);

  const handleBasketItem = (action: "inc" | "dec") => {
    setBasket((p) => p + (action === "inc" ? 1 : -1));
    updateBasketItem(id, action);
  };

  return (
    <li className="flex items-center justify-between p-2 rounded-xl bg-[#d9d9d9] bg-opacity-60">
      <img src={lil_pizza} alt="food" className="!w-10 !h-10 object-cover pr-2 border-r-1 border-black/40" />

      <p className="font-bold text-[15px] grow pl-2">Margherita</p>

      <div className="flex items-center gap-3 font-bold">
        <button
          disabled={basket === 1}
          className="bg-black rounded-full w-9 h-9 text-white disabled:bg-opacity-20 transition-colors duration-200"
          onClick={() => handleBasketItem("dec")}
        >
          -
        </button>
        <span className="text-text rounded bg-white px-3 py-1">{basket}</span>
        <button
          disabled={basket === 10}
          onClick={() => handleBasketItem("inc")}
          className="bg-black rounded-full w-9 h-9 text-white disabled:bg-opacity-20 transition-colors duration-200"
        >
          +
        </button>

        <button onClick={() => removeBasketItem(id)} className="bg-red-500 p-2 rounded-md">
          X
        </button>
      </div>
    </li>
  );
};

export default BasketItem;
