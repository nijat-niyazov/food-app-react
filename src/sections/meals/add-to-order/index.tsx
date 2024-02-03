import { CustomButton } from "@/components";

import { MealType, OptionType } from "@/constants/types/meal";
import { useMediaMatch } from "@/hooks";

const AddToOrderBtn = ({
  selected,
  notable = true,
  meal,
}: // handleSelect,
{
  selected: OptionType;
  // handleSelect: (id: null) => void;
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
    <CustomButton
      // onClick={() => openModal(<ConfirmationOrder handleSelect={handleSelect} meal={meal} selected={selected} />, 50)}
      size="sm"
    >
      Add To Order
    </CustomButton>
    // <>
    //   <div className="flex-centered gap-3 overflow-hidden w-full mt-4">
    //   </div>
    // </>
  );
};

export default AddToOrderBtn;
