import { Basket } from "@/components";
import { MealNote } from "@/components/c-modal/modal-contents";

import { MealType, OptionType } from "@/constants/types/meal";
import { addToBasket } from "@/stores/basket";
import { openModal } from "@/stores/modal";
import { useMediaMatch } from "@/useHooks";

const AddToOrderBtn = ({
  selected,
  notable = true,
  meal,
}: {
  selected: OptionType;
  // | boolean | undefined;
  notable?: boolean;
  meal: MealType;
}) => {
  const sm = useMediaMatch();

  const handleAddBasket = () => {
    let { options, ...mymeal } = meal;
    let newOrder = { ...mymeal, ...selected };

    addToBasket(newOrder);
    sm && openModal(<Basket />);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3 overflow-hidden w-full mt-4">
        <button
          onClick={handleAddBasket}
          // style={{
          //   height: selected ? "40px" : "0px",
          // }}
          disabled={!selected}
          className="bg-primary rounded-s  w-full p-2  text-white font-semibold transition-all duration-200 ease-in-out offer-shadow disabled:opacity-60"
        >
          Add To Order
        </button>
        {notable && (
          <button
            onClick={() => openModal(<MealNote />)}
            // style={{
            //   height: selected ? "40px" : "0px",
            // }}
            className="bg-secondary rounded-s px-3 py-2   text-white font-semibold transition-all duration-200 ease-in-out offer-shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default AddToOrderBtn;
