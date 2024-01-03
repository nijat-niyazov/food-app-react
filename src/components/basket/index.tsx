import { useBasketStore } from "@/stores";
import BasketItem from "./item";

const Basket = () => {
  const basketItems = useBasketStore((state) => state.elements);

  return (
    <div className="bg-white rounded-xl  offer-shadow p-4">
      <h3 className="text-text font-bold text-4xl mb-5">Basket</h3>

      <ul className="grid gap-3">
        {[...new Array(5)].map((_, i) => (
          <BasketItem key={i} />
        ))}
      </ul>

      <p className="bg-primary rounded-lg border-1 border-black/10 mx-2 my-5 flex items-center justify-between ">
        <span className="text-white font-semibold text-xl px-4 py-5 whitespace-nowrap">
          Total to pay
        </span>
        <span className="text-white font-semibold text-4xl px-4 py-5">
          $127,90
        </span>
      </p>
    </div>
  );
};

export default Basket;
