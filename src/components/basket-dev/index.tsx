import { useMediaMatch } from "@/hooks";
import { useBasketStore } from "@/stores/basket";
import { useCustomOrderState } from "@/stores/custom-order";
import BasketFooter from "./basket-footer";
import CustomItems from "./custom";
import MenuItems from "./menu";

const BasketDev = () => {
  /* ------------------------------- Menu Orders ------------------------------ */
  const basketItems = useBasketStore((state) => state.elements);
  const totalPrice = useBasketStore((state) => state.totalPrice);
  const discount = (totalPrice * 5) / 100;

  /* ------------------------------ Custom Orders ----------------------------- */
  const customOrders = useCustomOrderState((state) => state.orders);
  const priceOfCustomORders = useCustomOrderState((state) => state.totalPriceOfCustomOrders);
  const totalPay = totalPrice + priceOfCustomORders - discount;

  /* ------------------------------ Media Screen ------------------------------ */
  const sm = useMediaMatch();

  return (
    <div className="bg-faq rounded-xl border-1 border-black/20 sticky top-5 ">
      <h3 className="text-white rounded-t-xl bg-secondary font-semibold text-3xl py-5 px-12 w-full ">My Basket</h3>

      <MenuItems items={basketItems} />
      <CustomItems items={customOrders} />

      <div className="md:hover:overflow-y-auto overflow-x-hidden md:max-h-[84vh] transition-[height] duration-300">
        <ul className="grid gap-5 px-5 py-8 border-b-1 border-black/20">
          <li className="text-text text-xl font-semibold flex items-center justify-between">
            Sub Total:
            <span className="text-2xl font-normal">${totalPay}</span>
          </li>

          {basketItems.length !== 0 && (
            <li className="text-text text-xl font-semibold flex items-center justify-between">
              Discounts:
              <span className="text-2xl font-normal">-{discount}</span>
            </li>
          )}
        </ul>

        <BasketFooter basketItemsCount={basketItems.length} totalPay={totalPay} />
      </div>
    </div>
  );
};

export default BasketDev;
