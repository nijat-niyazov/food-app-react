import { clearBasket, useBasketStore } from "@/stores/basket";

import { ArrowDown } from "@/assets/icons";
import { useMediaMatch } from "@/hooks";
import { cn } from "@/utils";
import { CustomButton } from "..";
import BasketDevItem from "./basketitem";

const BasketDev = () => {
  const basketItems = useBasketStore((state) => state.elements);
  const totalPrice = useBasketStore((state) => state.totalPrice);

  const discount = +((totalPrice * 5) / 100).toFixed(2);
  const totalPay = (totalPrice - discount).toFixed(2);

  const sm = useMediaMatch();

  return (
    <div className="bg-faq rounded-xl border-1 border-black/20 sticky top-5 ">
      <h3 className="text-white rounded-t-xl bg-secondary font-semibold text-3xl py-5 px-12 w-full ">My Basket</h3>

      <div className="md:hover:overflow-y-auto overflow-x-hidden md:max-h-[84vh] transition-[height] duration-300">
        <div className="grid gap-3 ">
          {basketItems?.map((item, i) => (
            <BasketDevItem key={i} item={item} />
          ))}
        </div>

        <ul className="grid gap-5 px-5 py-8 border-b-1 border-black/20">
          <li className="text-text text-xl font-semibold flex items-center justify-between">
            Sub Total:
            <span className="text-2xl font-normal">${totalPrice.toFixed(2)}</span>
          </li>

          {basketItems.length !== 0 && (
            <li className="text-text text-xl font-semibold flex items-center justify-between">
              Discounts:
              <span className="text-2xl font-normal">-{discount}</span>
            </li>
          )}

          {/* <li className="text-text text-xl font-semibold flex items-center justify-between">
            Sub Total:
            <span className="text-2xl font-normal">${totalPrice.toFixed(2)}</span>
          </li> */}
        </ul>

        <div className="px-3 pb-3">
          <CustomButton
            onClick={clearBasket}
            variant="black"
            size="sm"
            borderRadius="md"
            className={cn("w-full mt-4", {
              hidden: basketItems.length < 1,
            })}
          >
            Remove All
          </CustomButton>

          <p className="bg-primary rounded-lg border-1 border-black/10 flex items-center justify-between mt-4">
            <span className="text-white font-semibold text-xl px-4 py-5 whitespace-nowrap">Total to pay:</span>
            <span className="text-white font-semibold text-4xl px-4 py-5">${totalPay}</span>
          </p>

          <CustomButton
            disabled={basketItems.length < 1}
            onClick={clearBasket}
            variant={basketItems.length < 1 ? "danger" : "secondary"}
            size="xl2"
            borderRadius="md"
            className="flex items-center mt-4"
          >
            <span className={cn("rotate-90", { "opacity-0": basketItems.length < 10 ? 0 : 1 })}>
              <ArrowDown />
            </span>
            <span className="grow text-center">Checkout!</span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default BasketDev;
