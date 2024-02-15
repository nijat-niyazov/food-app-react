import { MySpinner } from "@/assets/icons";
import { CustomButton } from "@/components";
import { MealType, OptionType } from "@/constants/types/meal";
import { delay } from "@/libs/delay";
import { addToBasket } from "@/stores/basket";
import { closeModal } from "@/stores/modal";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const ConfirmationOrder = ({
  selected,
  meal,
  handleSelect,
}: {
  selected: OptionType;
  meal: MealType;
  handleSelect: (id: null) => void;
}) => {
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddBasket = async (note: string) => {
    setIsSubmitting(true);
    let { options, ...mymeal } = meal;

    let newOrder = { ...mymeal, ...selected, note };

    const { success } = await delay();
    // const { success } = { success: true };

    if (success) {
      toast.success(`Your order ${note && "and note"} has been sent successfully`);
      addToBasket(newOrder);
      closeModal();
      handleSelect(null);
    } else {
      toast.error("Something went wrong \n Pease try again!");
    }

    setIsSubmitting(false);

    // sm && openModal(<Basket />);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleAddBasket(value);
  };

  return (
    <div className="p-4">
      {/* <h4 className="font-semibold text-2xl mb-4 text-center">You can take your note</h4> */}

      <form onSubmit={handleSubmit} className=" p-4 grid gap-4">
        <label className="text-primary text-4xl font-bold" htmlFor="note">
          You can add your special request
        </label>

        <textarea
          placeholder="Your note"
          name=""
          id="note"
          rows={7}
          cols={30}
          value={value} // maxLength={30}
          className="border-1 bg-faq border-black/30 rounded-s p-4 outline-none"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
        />

        <CustomButton type="submit" disabled={isSubmitting} variant="secondary" size="xl" font="bold">
          {!isSubmitting ? <span> Order {value ? "with" : "without"} a note</span> : <MySpinner />}
        </CustomButton>
      </form>
    </div>
  );
};

export default ConfirmationOrder;
