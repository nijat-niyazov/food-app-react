import { NoteICon, Remove } from "@/assets/icons";
import { MotionDiv } from "@/components";
import { MealNote } from "@/components/modal-contents";
import { CustomButton } from "@/components/ui";
import { BasketItemType } from "@/constants/types/meal";
import { removeBasketItem } from "@/stores/basket";
import { openModal } from "@/stores/modal";
import { AnimatePresence } from "framer-motion";

function BasketMenuItem({ item }: { item: BasketItemType }) {
  return (
    <AnimatePresence>
      <MotionDiv
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        exit={{ x: "50%", opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        className="grid grid-cols-[1fr_auto] place-items-start px-3 items-center gap-3 py-2 border-b-1 border-black/10 "
      >
        <span className="rounded-full text-2xl font-bold bg-primary text-white  w-11 h-11 grid place-content-center">{item.quantity}x</span>

        <span className="text-secondary text-xl font-semibold">$ {item.price}</span>

        <ul className="grid gap-1.5 grow">
          <li className="text-text text-base font-semibold">{item.title}</li>
          <li className="text-black text-sm ">{item.description}</li>
        </ul>

        <div className="grid place-self-center ml-auto w-auto">
          <CustomButton className="md:p-0" variant="transparent" size="xs" onClick={() => removeBasketItem(item.id)}>
            <Remove />
          </CustomButton>

          <CustomButton
            className="md:p-0"
            variant="transparent"
            size="xs"
            onClick={() => openModal(<MealNote note={item.note as string} />, 50)}
          >
            <NoteICon />
          </CustomButton>
        </div>

        {item.size && (
          <p className="col-span-2 w-full flex items-center justify-between">
            Option: <span className="bg-text text-white rounded-s px-2 py-1">{item.size}</span>
          </p>
        )}
      </MotionDiv>
    </AnimatePresence>
  );
}

export default BasketMenuItem;
