import { ArrowDown } from "@/assets/icons";
import { CustomButton } from "@/components";
import { clearBasket } from "@/stores/basket";
import { cn } from "@/utils";

const BasketFooter = ({ totalPay, basketItemsCount }: { totalPay: number; basketItemsCount: number }) => {
  return (
    <footer className="px-3 pb-3">
      <CustomButton
        onClick={clearBasket}
        variant="black"
        size="sm"
        borderRadius="md"
        className={cn("w-full mt-4", {
          hidden: basketItemsCount < 1,
        })}
      >
        Remove All
      </CustomButton>

      <p className="bg-primary rounded-lg border-1 border-black/10 flex items-center justify-between mt-4">
        <span className="text-white font-semibold text-xl px-4 py-5 whitespace-nowrap">Total to pay:</span>
        <span className="text-white font-semibold text-4xl px-4 py-5">${totalPay}</span>
      </p>

      <CustomButton
        disabled={basketItemsCount < 1}
        onClick={clearBasket}
        variant={basketItemsCount < 1 ? "danger" : "secondary"}
        size="xl2"
        borderRadius="md"
        className="flex items-center mt-4"
      >
        <span className={cn("-rotate-90", { "opacity-0": basketItemsCount < 10 ? 0 : 1 })}>
          <ArrowDown />
        </span>
        <span className="grow text-center">Checkout!</span>
      </CustomButton>
    </footer>
  );
};

export default BasketFooter;
