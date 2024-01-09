import { ArrowDown } from "@/assets/icons";
import Remove from "@/assets/icons/Remove";
import { useBasketStore } from "@/stores";
import { clearBasket, removeBasketItem } from "@/stores/basket";
import { useMediaMatch } from "@/useHooks";

const BasketDev = () => {
  const basketItems = useBasketStore((state) => state.elements);
  const totalPrice = useBasketStore((state) => state.totalPrice);
  const discount = +((totalPrice * 5) / 100).toFixed(2);
  const totalPay = (totalPrice - discount).toFixed(2);

  const sm = useMediaMatch();

  return (
    <div className="bg-faq rounded-xl border-1 border-black/20 sticky top-5">
      <h3 className="text-white rounded-t-xl bg-secondary font-semibold text-3xl py-5 px-12 w-full ">
        My Basket
      </h3>

      <ul className="grid gap-3">
        {basketItems?.map((item, i) => (
          <li
            className="grid grid-cols-[1fr_auto] place-items-start px-3 items-center gap-3 py-2 border-b-1 border-black/10 "
            key={i}
          >
            <span className="rounded-full text-2xl font-bold bg-primary text-white  w-11 h-11 grid place-content-center">
              {item.quantity}x
            </span>

            <span className="text-secondary text-xl font-semibold">
              $ {item.price}
            </span>

            <ul className="grid gap-1.5 ">
              <li className="text-text text-base font-semibold">
                {item.title}
              </li>
              <li className="text-black text-sm ">{item.description}</li>
            </ul>

            <button
              className="place-self-end self-center"
              onClick={() => removeBasketItem(item.id)}
            >
              <Remove />
            </button>
            {item.size && (
              <p className="font-semibold text-sm">
                Option:{" "}
                <span className="bg-text text-white rounded-s px-2 py-1">
                  {item.size}
                </span>
              </p>
            )}
          </li>
        ))}
      </ul>

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
        <button
          onClick={clearBasket}
          className="bg-text text-white w-full rounded-lg border-1 border-black/10 p-2 mb-4"
        >
          Remove All
        </button>

        <p className="bg-primary rounded-lg border-1 border-black/10 flex items-center justify-between mb-4">
          <span className="text-white font-semibold text-xl px-4 py-5 whitespace-nowrap">
            Total to pay:
          </span>
          <span className="text-white font-semibold text-4xl px-4 py-5">
            ${totalPay}
          </span>
        </p>
        <button
          disabled={basketItems.length < 10}
          onClick={clearBasket}
          className="bg-secondary transition-colors ease-in-out duration-200 text-white w-full rounded-lg border-1 text-2xl font-semibold p-2 disabled:bg-[#FFB1B1] flex items-center"
        >
          <span
            style={{
              transform: "rotate(90deg)",
              opacity: basketItems.length < 10 ? 0 : 1,
            }}
          >
            <ArrowDown />
          </span>
          <span className="grow text-center">Checkout!</span>
        </button>
      </div>
    </div>
  );
};

export default BasketDev;
