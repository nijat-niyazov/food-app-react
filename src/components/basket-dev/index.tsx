import { useMediaMatch } from "@/hooks";
import { useBasketStore } from "@/stores/basket";
import { useCustomOrderState } from "@/stores/custom-order";
import { cn, convertToTwoDecimalFloat } from "@/utils";
import { HTMLAttributes } from "react";
import BasketFooter from "./basket-footer";
import CustomItems from "./custom";
import MenuItems from "./menu";

type Props = {} & HTMLAttributes<HTMLDivElement>;

const BasketDev = ({ className }: Props) => {
  const { orders: menuOrders, totalPrice } = useBasketStore((state) => state);
  const { orders: customOrders, totalPriceOfCustomOrders } = useCustomOrderState((state) => state);

  const sm = useMediaMatch();

  /* ------------------------------- Price State ------------------------------ */
  const subTotal = totalPrice + totalPriceOfCustomOrders;
  const discount = convertToTwoDecimalFloat((subTotal * 5) / 100);
  const totalPay = convertToTwoDecimalFloat(subTotal - discount);

  return (
    <aside className={cn(`bg-faq rounded-xl border-1 border-black/20 sticky top-5 ${className}`)}>
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
    </aside>
  );
};

export default BasketDev;
