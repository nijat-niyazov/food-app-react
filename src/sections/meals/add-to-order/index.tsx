import { CustomButton } from "@/components";
import { ConfirmationOrder } from "@/components/modal-contents";
import { MealType, OptionType } from "@/constants/types/meal";
import { useMediaMatch } from "@/hooks";
import { openModal } from "@/stores/modal";

type Props = {
  selected: OptionType;
  handleSelect?: (id: null) => void;
  meal: MealType;
};

const AddToOrderBtn = ({ selected, meal, handleSelect }: Props) => {
  const sm = useMediaMatch();

  function handleClick() {
    openModal(<ConfirmationOrder handleSelect={handleSelect} meal={meal} selected={selected} />, 50);
  }

  return (
    <CustomButton onClick={handleClick} size="sm">
      Add To Order
    </CustomButton>
  );
};

export default AddToOrderBtn;
