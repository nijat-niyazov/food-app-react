import { NoteICon, Remove } from "@/assets/icons";
import { SpecialMealModal } from "@/components/modal-contents";
import { CustomOrderType, removeCustomOrderFromBasket } from "@/stores/custom-order";
import { openModal } from "@/stores/modal";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "../..";

type Props = {
  item: CustomOrderType;
};

function BasketCustomOrder({ item }: Props) {
  return (
    <AnimatePresence>
      <MotionDiv
        initial={{
          x: "50%",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 100,
        }}
        exit={{
          x: "50%",
          opacity: 0,
        }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        className="grid grid-cols-[1fr_auto] place-items-start px-3 items-center gap-3 py-2 border-b-1 border-black/10 "
      >
        <span className="text-xl font-semibold ">{item.meal}</span>

        <span className="text-secondary text-xl font-semibold">$ {item.price}</span>

        <ul className="grid gap-1.5 grow">
          <li className="text-text text-base font-semibold">{item.meal}</li>
        </ul>

        <div className="grid place-self-center ml-auto w-auto">
          <button className="" onClick={() => removeCustomOrderFromBasket(item.id)}>
            <Remove />
          </button>

          <button
            onClick={() => openModal(<SpecialMealModal mealId={item.meal as "pizza" | "burger"} defaultValues={item} />, 70)}
            className=" outline-none"
          >
            <NoteICon />
          </button>
        </div>
      </MotionDiv>
    </AnimatePresence>
  );
}

export default BasketCustomOrder;
