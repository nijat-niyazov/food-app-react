import { ConfirmationOrder } from "@/components/c-modal/modal-contents";

import { MealType, OptionType } from "@/constants/types/meal";
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
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleAddBasket = async (note: string) => {
  //   setIsSubmitting(true);
  //   let { options, ...mymeal } = meal;

  //   let newOrder = { ...mymeal, ...selected, note };

  //   const { success } = await delay();

  //   if (success) {
  //     toast.success("Your note has been sent successfully");
  //     addToBasket(newOrder);
  //     closeModal();
  //   } else {
  //     toast.error("Something went wrong \n Pease try again!");
  //   }

  //   setIsSubmitting(false);

  //   // sm && openModal(<Basket />);
  // };

  return (
    <>
      <div className="flex items-center justify-center gap-3 overflow-hidden w-full mt-4">
        <button
          onClick={() =>
            openModal(<ConfirmationOrder meal={meal} selected={selected} />)
          }
          // style={{
          //   height: selected ? "40px" : "0px",
          // }}
          // disabled={!selected}
          className="bg-primary rounded-s  w-full p-2  text-white font-semibold transition-all duration-200 ease-in-out offer-shadow disabled:opacity-60"
        >
          Add To Order
        </button>
      </div>
    </>
  );
};

export default AddToOrderBtn;
