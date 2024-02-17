import { useMediaMatch } from "@/hooks";
import { useBasketStore } from "@/stores/basket";
import { useCustomOrderState } from "@/stores/custom-order";
import { convertToTwoDecimalFloat } from "@/utils";
import BasketFooter from "./basket-footer";
import CustomItems from "./custom";
import MenuItems from "./menu";

const BasketDev = () => {
  /* ------------------------------- Menu Orders ------------------------------ */
  const { orders: menuOrders, totalPrice } = useBasketStore((state) => state);

  /* ------------------------------ Custom Orders ----------------------------- */
  const { orders: customOrders, totalPriceOfCustomOrders } = useCustomOrderState((state) => state);

  /* ------------------------------ Media Screen ------------------------------ */
  const sm = useMediaMatch();

  /* ------------------------------- Price State ------------------------------ */
  const subTotal = totalPrice + totalPriceOfCustomOrders;
  const discount = convertToTwoDecimalFloat((subTotal * 5) / 100);
  const totalPay = convertToTwoDecimalFloat(subTotal - discount);

  return (
    <div className="bg-faq rounded-xl border-1 border-black/20 sticky top-5 ">
      <h3 className="text-white rounded-t-xl bg-secondary font-semibold text-3xl py-5 px-12 w-full ">My Basket</h3>

      <MenuItems items={menuOrders} />
      <CustomItems items={customOrders} />

      <div className="md:hover:overflow-y-auto overflow-x-hidden md:max-h-[84vh] transition-[height] duration-300">
        <ul className="grid gap-5 px-5 py-8 border-b-1 border-black/20">
          <li className="text-text text-xl font-semibold flex items-center justify-between">
            Sub Total:
            <span className="text-2xl font-normal">${subTotal}</span>
          </li>

          {menuOrders.length !== 0 && (
            <li className="text-text text-xl font-semibold flex items-center justify-between">
              Discounts:
              <span className="text-2xl font-normal">${discount}</span>
            </li>
          )}
        </ul>

        <BasketFooter customOrdersCount={customOrders.length} basketItemsCount={menuOrders.length} totalPay={totalPay} />
      </div>
    </div>
  );
};

export default BasketDev;
